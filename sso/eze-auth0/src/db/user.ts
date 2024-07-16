import mongoose from 'mongoose';
import {User} from '../models/user.model'

// Function to check if it's the user's first time
export const isFirstTime = async (email: string): Promise<boolean> => {
  try {
    const user = await User.findOne({ email }).exec();
    console.log("USER IS: ", user)
    if (user) {
      return user.firstTime;
    } else {
      console.error('User not found')
      return true
    }
  } catch (error) {
    console.error('Error checking firstTime:', error);
  }
}

// Function to toggle user's firstTime field
export const toggleFirstTime = async (email: string): Promise<boolean> => {
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { $set: { firstTime: false } }, // Toggle firstTime to false
      { new: true }
    ).exec();

    if (user) {
      console.log(`User's firstTime toggled successfully for email: ${email}`);
      return true
    } else {
      console.error("User Does Not Exist")
    }
  } catch (error) {
    console.error('Error toggling firstTime:', error);
  }
};