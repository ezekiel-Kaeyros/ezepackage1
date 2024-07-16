import mongoose, { Schema, Document } from 'mongoose';

interface ISubscription extends Document {
  name: string;
  price: number;
  features: string[];
}

const SubscriptionSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  features: { type: [String], required: true }
});

export const ZoteroSubscription = mongoose.model<ISubscription>('Subscription', SubscriptionSchema);