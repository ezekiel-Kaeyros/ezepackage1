import mongoose from 'mongoose';
import { User } from '../models/user.model'

// Function to check if it's the user's first time
export const isFirstTime = async (email: string): Promise<boolean> => {
  try {
    const user = await User.findOne({ email }).exec();
    if (user) {
      return user.firstTime;
    } else {
      console.error('User not found')
      return true
    }
  } catch (error) {
    console.error('Error checking firstTime:', error);
    return false
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
      return true
    } else {
      console.error("User Does Not Exist")
      return false
    }
  } catch (error) {
    console.error('Error toggling firstTime:', error);
    return false
  }
};

export const getUserByEmail = async (email: string) => {
  const user = await User.findOne({ email }).exec();
  return user;
};
