import mongoose, { Schema, Document } from 'mongoose';

// Import the URL model
import URL, { URL as URLInterface } from './url.model';


// Define interface for Module document
interface Module extends Document {
  name: string;
  url: URLInterface['_id'];
}

// Define schema for Module
const ModuleSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  // Establishing a one-to-one relationship with the URL model
  url: { type: Schema.Types.ObjectId, ref: 'URL', required: true }
});

// Export the Module model
export default mongoose.model<Module>('Module', ModuleSchema);