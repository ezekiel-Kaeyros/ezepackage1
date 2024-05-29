import { Request, Response } from 'express';
import { deleteFromCloudinary } from '../utils/cloudinary';
import {
  getChannels,
  getChannelByName,
  createChannel,
  updateChannel,
  deleteChannel,
  deletePost,
  reorderChannels,
} from '../db';
import { getChannelPosts, joinChannel, leaveChannel } from '../db';
import { ErrorCodes, ErrorMessages } from '../constants';
import { uploadToCloudinary } from '../utils/cloudinary';

const channelNameReg = /[-!$%^&*()_+|~=`\\#{}[\]:";'<>?,./]/;

const ChannelController = {
  channels: async (req: Request, res: Response): Promise<any> => {
    const channels = await getChannels();
    console.log('channels');
    return res.send(channels);
  },
  channelByName: async (req: Request, res: Response): Promise<any> => {
    const { name } = req.params;
    const channel = await getChannelByName(name);
    return res.send(channel);
  },
  create: async (req: Request, res: Response): Promise<any> => {
    const { name, authRequired, description, order, authUserId } = req.body;
    // console.log('Auth required', authRequired);
    // console.log('req user', authUserId);
    const trimmedName = name.trim();

    if (channelNameReg.test(name) || !name || name.length > 20) {
      return res
        .status(ErrorCodes.Bad_Request)
        .send(`Channel names can only use letters, numbers, underscores, and periods by max character 20.`);
    }

    const channelExists = await getChannelByName(trimmedName);
    if (channelExists) {
      return res.status(ErrorCodes.Bad_Request).send(`A channel with the name "${trimmedName}" already exists.`);
    }

    const newChannel = await createChannel(trimmedName, authRequired, order, description);

    console.log('new channel', newChannel);

    if (newChannel._id) {
      try {
        await joinChannel(newChannel._id, authUserId);
      } catch (error) {
        console.error('Error joining user to channel:', error);
      }
    }
    return res.send(newChannel);
  },
  update: async (req: Request, res: Response): Promise<any> => {
    const { _id, name, authRequired, description, members } = req.body;
    const trimmedName = name.trim();
    let member: any;
  

    if (channelNameReg.test(trimmedName) || !trimmedName || trimmedName.length > 20) {
      return res
        .status(ErrorCodes.Bad_Request)
        .send(`Channel names can only use letters, numbers, underscores, and periods by max character 20.`);
    }

    const channelExists = await getChannelByName(trimmedName);
    if (channelExists && channelExists?._id.toString() !== _id) {
      return res.status(ErrorCodes.Bad_Request).send(`A channel with the name "${trimmedName}" already exists.`);
    }
    if (members) {
      member = members;
    } else {
      member = channelExists.members && channelExists.mebers;
    }
    // console.log('authRequired222222222222', member);

    const updatedChannel = await updateChannel(_id, trimmedName, authRequired, null, description, member);
    return res.send(updatedChannel);
  },
  updateMember: async (req: Request, res: Response): Promise<any> => {
    const { _id, name, authRequired, description, members } = req.body;
    const trimmedName = name.trim();
    let member: any;
    // console.log('description', description);
    // console.log('member===========', members);

    if (channelNameReg.test(trimmedName) || !trimmedName || trimmedName.length > 20) {
      return res
        .status(ErrorCodes.Bad_Request)
        .send(`Channel names can only use letters, numbers, underscores, and periods by max character 20.`);
    }

    const channelExists = await getChannelByName(trimmedName);
    if (channelExists && channelExists?._id.toString() !== _id) {
      return res.status(ErrorCodes.Bad_Request).send(`A channel with the name "${trimmedName}" already exists.`);
    }
    if (members) {
      member = members;
    } else {
      member = channelExists.members && channelExists.mebers;
    }
    // console.log('authRequired222222222222', member);

    const updatedChannel = await updateChannel(_id, trimmedName, authRequired, null, description, member);
    return res.send(updatedChannel);
  },

  uploadPhoto: async (req: Request, res: Response): Promise<any> => {
    const { imagePublicId, coverImagePublicId, isCover, name, authRequired, id, description, members } = req.body;
    const channelId = id;
    const image = req.file;
    // console.log('authRequired222222222222', req.body);

    console.log('I am here');
    const auth = authRequired == 'true' ? true : false;
    if (!image) {
      return res.status(ErrorCodes.Bad_Request).send('Please upload an image.');
    }
    if (image && !image.mimetype.match(/image-*/)) {
      return res.status(ErrorCodes.Bad_Request).send('Please upload an image.');
    }
    console.log('image', image);

    const coverOrImagePublicId = isCover === 'true' ? coverImagePublicId : imagePublicId;
    const uploadImage = await uploadToCloudinary(image, 'channel', coverOrImagePublicId);

    if (uploadImage.secure_url) {
      const fieldsToUpdate: any = {};

      if (isCover === 'true') {
        fieldsToUpdate.coverImage = uploadImage.secure_url;
        fieldsToUpdate.coverImagePublicId = uploadImage.public_id;
      } else {
        fieldsToUpdate.image = uploadImage.secure_url;
        fieldsToUpdate.imagePublicId = uploadImage.public_id;
      }

      const updatedChannel = await updateChannel(channelId, name, auth, fieldsToUpdate, description, members);
      return res.send(updatedChannel);
    }
  },
  reorder: async (req: Request, res: Response): Promise<any> => {
    const { sortedChannels } = req.body;
    await reorderChannels(sortedChannels);
    return res.send('success');
  },
  delete: async (req: Request, res: Response): Promise<any> => {
    const { id } = req.body;
    const channel = await deleteChannel(id);
    // Delete all channel posts, and their images from CDN.
    const relatedPosts = await getChannelPosts(channel._id);
    relatedPosts.map(async (post) => {
      if (post.imagePublicId) {
        const deleteImage = await deleteFromCloudinary(post.imagePublicId);
        if (deleteImage.result !== 'ok') {
          res.status(ErrorCodes.Internal).send(ErrorMessages.Generic);
        }
      }
      await deletePost(post._id);
    });

    return res.send(channel);
  },
};

export default ChannelController;
