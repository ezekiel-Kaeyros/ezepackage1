// @ts-nocheck
import Comment from '../models/comment';
import Post from '../models/post';
import User from '../models/user';

export const commentById = async (id: string): Promise<any> => {
  const comment = await Comment.findById(id).populate('likes').populate('replies');
  return comment;
};

export const createComment = async (comment: string, authorId: string, postId: string): Promise<any> => {
  const newComment = await new Comment({
    comment,
    author: authorId,
    post: postId,
  }).save();

  await newComment.populate('author').execPopulate();

  // Push the comment to post and user collection.
  await Post.findOneAndUpdate({ _id: postId }, { $push: { comments: newComment._id } });
  await User.findOneAndUpdate({ _id: authorId }, { $push: { comments: newComment._id } });

  return newComment;
};

export const createReplyComment = async (commentId,comment: string, authorId: string, postId: string): Promise<any> => {
  const newReply = await new Comment({
    comment,
    author: authorId,
    post: postId,
    parentComment:commentId
  }).save();
  await Comment.findOneAndUpdate({_id:commentId, postId},{ "$push": { "replies": newReply._id } },{new: true})

  await newReply.populate('author').execPopulate();

  // Push the comment to post and user collection.
  await Post.findOneAndUpdate({ _id: postId }, { $push: { comments: newReply._id } });
  await User.findOneAndUpdate({ _id: authorId }, { $push: { comments: newReply._id } });

  return newReply;
};

export const deleteComment = async (id: string): Promise<any> => {
  const comment = await Comment.findByIdAndRemove(id);
  const reply = await Comment.find({ parentComment: id });
  console.log('reply======', reply);
  if (reply && reply.length>0) {
    for (let index = 0; index < reply.length; index++) {
      const element = await Comment.findByIdAndRemove(reply[index]._id); 
      console.log('element', element);
      console.log('_id', reply[index]._id);
      
       await User.findOneAndUpdate({ _id: reply[index].author }, { $pull: { comments: reply[index]._id } });
       await Post.findOneAndUpdate({ _id: reply[index].post }, { $pull: { comments: reply[index]._id } });
      
    }
      //  reply.forEach((element:any) => {
      //    await Comment.findByIdAndRemove(element._id);
      //  });
  }
 
  
  // const reply = await;
  // Delete the comment from the user and post collection.
  await User.findOneAndUpdate({ _id: comment.author }, { $pull: { comments: comment._id } });
  await Post.findOneAndUpdate({ _id: comment.post }, { $pull: { comments: comment._id } });

  return comment;
};
