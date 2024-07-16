import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { UserItems } from '../models/userItems.model';

export const createUser = async (req: Request, res: Response) => {
  const { fullName, username, email, role, subscription } = req.body;

  try {
    const newUser = new User({
      fullName,
      username,
      email,
      role,
      subscription
    });

    await newUser.save();

    const newUserItems = new UserItems({
      user: newUser._id,
      saves: [],
      purchases: [],
      userRates: []
    });

    await newUserItems.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

export const saveItem = async (req: Request, res: Response) => {
  const { userId, itemId } = req.body;

  try {
    const userItems = await UserItems.findOne({ user: userId });
    if (!userItems) {
      return res.status(404).json({ message: 'UserItems not found' });
    }

    userItems.saves.push(itemId);
    await userItems.save();

    res.status(200).json({ message: 'Item saved successfully', userItems });
  } catch (error) {
    res.status(500).json({ message: 'Error saving item', error });
  }
};

export const purchaseItem = async (req: Request, res: Response) => {
  const { userId, itemId } = req.body;

  try {
    const userItems = await UserItems.findOne({ user: userId });
    if (!userItems) {
      return res.status(404).json({ message: 'UserItems not found' });
    }

    userItems.purchases.push(itemId);
    await userItems.save();

    res.status(200).json({ message: 'Item purchased successfully', userItems });
  } catch (error) {
    res.status(500).json({ message: 'Error purchasing item', error });
  }
};

export const rateItem = async (req: Request, res: Response) => {
  const { userId, itemId, rating } = req.body;

  try {
    const userItems = await UserItems.findOne({ user: userId });
    if (!userItems) {
      return res.status(404).json({ message: 'UserItems not found' });
    }

    const itemRating = userItems.userRates.find(r => r.item.toString() === itemId);
    if (itemRating) {
      itemRating.rating = rating;
    } else {
      userItems.userRates.push({ item: itemId, rating });
    }
    
    await userItems.save();

    res.status(200).json({ message: 'Item rated successfully', userItems });
  } catch (error) {
    res.status(500).json({ message: 'Error rating item', error });
  }
};
