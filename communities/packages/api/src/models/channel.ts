import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ChannelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: String,
    members: {
      type: Number,
      default:0
    },
    authRequired: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      required: true,
    },
    coverImage: String,
    coverImagePublicId: String,
    image: String,
    imagePublicId: String,
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Channel', ChannelSchema);
