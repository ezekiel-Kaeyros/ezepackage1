import { Request, Response } from 'express';
import { AuthUser, ErrorCodes, ErrorMessages } from '../constants';
import { createLike, createLikeComment, deleteLike, likeByCommentId, likeById, likeByPostId } from '../db';

const LikeController = {
  create: async (req: Request, res: Response): Promise<any> => {
    const { postId } = req.body;
    const authUser = req.user as AuthUser;
    const like = await createLike(authUser._id, postId);
    return res.send(like);
  },

  get_like_by_commentID: async (req: Request, res: Response): Promise<any> => {
    const commentId = req.params.id;
    const likes = await likeByCommentId(commentId);
    return res.send(likes);
  },
  get_like_by_postID: async (req: Request, res: Response): Promise<any> => {
    const postId = req.params.id;
    const likes = await likeByPostId(postId);
    return res.send(likes);
  },

  like_comment: async (req: Request, res: Response): Promise<any> => {
    const { commentId } = req.body;
    const authUser = req.user as AuthUser;
    const like = await createLikeComment(authUser._id, commentId);
    return res.send(like);
  },
  delete: async (req: Request, res: Response): Promise<any> => {
    const { id } = req.body;
    const authUser = req.user as AuthUser;

    // Check if the like author is removing the like.
    const like: any = await likeById(id);
    if (like.user.toString() === authUser._id.toString()) {
      const deletedLike = await deleteLike(id);
      return res.send(deletedLike);
    }

    return res.status(ErrorCodes.Bad_Request).send(ErrorMessages.Generic);
  },
};

export default LikeController;
