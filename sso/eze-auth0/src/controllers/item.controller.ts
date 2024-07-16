import { Request, Response } from 'express';
import { Item } from '../models/item.model';
import { User } from '../models/user.model';
// import { uploadToZotero } from '../utils/zotero';
// import { UserItems } from '../models/UserItems';

const uploadBook = async (itemKey: string, email: string, coverImage: string, price: number) => {

  try {

    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User Not Found");
    }

    const newItem = new Item({
      itemKey,
      coverImage,
      price,
      rating: 0,
      poster: user._id
    });

    await newItem.save();

    return newItem
  } catch (error: any) {
    throw new Error("Failed To Upload To DB")
  }
};

const getItems = async (zoteroItems: any) => {
  try {
    const items = await Promise.all(zoteroItems.map(async (zoteroItem: any) => {
      const localItem = await Item.findOne({ itemKey: zoteroItem.key }).populate('poster', 'email');
      return {
        ...zoteroItem,
        coverImage: localItem?.coverImage,
        price: localItem?.price,
        rating: localItem?.rating,
        poster: localItem?.poster
      };
    }));

    return items
  } catch (error: any) {
    throw new Error("Failed To Fetch To DB");
  }
};

const fetchZoteroItems = async () => {
  // Implement actual API call to Zotero
  return [
    { key: 'zoteroItemKey1', title: 'Book Title 1' },
    { key: 'zoteroItemKey2', title: 'Book Title 2' }
  ];
};

export { uploadBook, getItems };
