import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Like',
      },
    ],
    parentComment:{
      type:Schema.Types.ObjectId,
      ref:"Comment",
      default:null
  },
    replies:[{
      type: Schema.Types.ObjectId,
      ref: "Comment"
  }]
  },
  {
    timestamps: true,
  }
);
CommentSchema.pre("find", function( next){
  this.populate({path:"replies",
populate:{path:"author"}
})
  next();
})

export default mongoose.model('Comment', CommentSchema);
