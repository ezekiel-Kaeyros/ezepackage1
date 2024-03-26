import { Request, Response } from 'express';
import { commentById, createComment, createReplyComment, deleteComment } from '../db';
import { AuthUser, ErrorCodes, ErrorMessages } from '../constants';

const CommentController = {
  create: async (req: Request, res: Response): Promise<any> => {
    const authUser = req.user as AuthUser;
    const { comment, postId } = req.body;

    if (!comment) {
      return res.status(ErrorCodes.Internal).send('Please insert a comment.');
    }

    const newComment: any = await createComment(comment, authUser._id, postId);
    return res.send(newComment);
  },

  createReply: async (req: Request, res: Response): Promise<any> => {
    const authUser = req.user as AuthUser;
    const { comment, postId } = req.body;
    const {commentId} = req.params;

    if (!comment) {
      return res.status(ErrorCodes.Internal).send('Please insert a comment.');
    }

    const replyComment: any = await createReplyComment(commentId,comment, authUser._id, postId);
    return res.send(replyComment);
  },
  delete: async (req: Request, res: Response): Promise<any> => {
    const { id } = req.body;
    const authUser = req.user as AuthUser;

    // Check if the comment author is removing the comment.
    const comment: any = await commentById(id);
    if (comment.author.toString() === authUser._id.toString()) {
      const deletedComment = await deleteComment(id);
      return res.send(deletedComment);
    }

    return res.status(ErrorCodes.Bad_Request).send(ErrorMessages.Generic);
  },
};

export default CommentController;
