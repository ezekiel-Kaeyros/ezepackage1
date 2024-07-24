// @ts-nocheck
import Like from '../models/like';
import Post from '../models/post';
import User from '../models/user';
import { Comment } from '../models';

export const likeById = async (id: string): Promise<any> => {
  const like = await Like.findById(id);
  return like;
};

export const likeByCommentId = async (id: string): Promise<any> => {
  const likes = await Like.find({ comment: id }).populate('user');
  return likes;
};
export const likeByPostId = async (id: string): Promise<any> => {
  const likes = await Like.find({ post: id }).populate('user');
  return likes;
};
export const createLike = async (userId: string, postId: string): Promise<any> => {
  const like = await new Like({ user: userId, post: postId }).save();

  // Push the like to the post and user collection.
  await Post.findOneAndUpdate({ _id: postId }, { $push: { likes: like._id } });
  await User.findOneAndUpdate({ _id: userId }, { $push: { likes: like._id } });

  return like;
};

export const createLikeComment = async (userId: string, commentId: string): Promise<any> => {
  const like = await new Like({ user: userId, comment: commentId }).save();

  // Push the like to the post and user collection.
  await Comment.findOneAndUpdate({ _id: commentId }, { $push: { likes: like._id } });
  await User.findOneAndUpdate({ _id: userId }, { $push: { likes: like._id } });

  return like;
};


export const deleteLike = async (id: string): Promise<any> => {
  const like = await Like.findByIdAndRemove(id);

  // Delete the like from the user and post collection.
  await User.findOneAndUpdate({ _id: like.user }, { $pull: { likes: like._id } });
  await Post.findOneAndUpdate({ _id: like.post }, { $pull: { likes: like._id } });
  await Comment.findOneAndUpdate({ _id: like.comment }, { $pull: { likes: like._id } });

  return like;
};
