import mongoose, { Schema, Document } from 'mongoose';

interface IUserItems extends Document {
  user: mongoose.Types.ObjectId;
  saves: mongoose.Types.ObjectId[];
  purchases: mongoose.Types.ObjectId[];
  userRates: { item: mongoose.Types.ObjectId, rating: number }[];
}

const UserItemsSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  saves: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  purchases: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  userRates: [{
    item: { type: Schema.Types.ObjectId, ref: 'Item' },
    rating: { type: Number, default: 0 }
  }]
});

export const UserItems = mongoose.model<IUserItems>('UserItems', UserItemsSchema);

