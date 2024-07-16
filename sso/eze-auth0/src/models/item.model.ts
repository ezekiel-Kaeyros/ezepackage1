import mongoose, { Schema, Document } from 'mongoose';

interface IItem extends Document {
  itemKey: string;
  coverImage: string;
  price: number;
  rating: number;
  poster: mongoose.Types.ObjectId;
}

const ItemSchema: Schema = new Schema({
  itemKey: { type: String, required: true },
  coverImage: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
  poster: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

export const Item = mongoose.model<IItem>('Item', ItemSchema);
