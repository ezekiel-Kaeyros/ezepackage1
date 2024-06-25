import mongoose, { Schema, Document } from 'mongoose';

// Define interface for URL document
export interface URL extends Document {
  baseUrl: string;
  loginRedirectUrl: string;
  signupRedirectUrl: string;
  forgotPasswordRedirectUrl: string;
}

// Define schema for URL
const URLSchema: Schema = new Schema({
  baseUrl: { type: String, required: true },
  loginRedirectUrl: { type: String, required: true },
  signupRedirectUrl: { type: String, required: true },
  forgotPasswordRedirectUrl: { type: String, required: true }
});

// Export the URL model
export default mongoose.model<URL>('URL', URLSchema);