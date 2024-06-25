import { Request, Response } from 'express';
import Module from '../models/module.model'
import URL from '../models/url.model';


// Function to handle module creation
export const createModule = async (req: Request, res: Response): Promise<void> => {
  const { name, url } = req.body;

  try {

    // Create URL model
    const createdURL = await URL.create(url);

    // Create Module model with encrypted data and URL ID
    const createdModule = await Module.create({
      name: name,
      url: createdURL._id,
    });

    res.status(201).json(createdModule);
  } catch (error: any) {
    res.status(500).json({ message: error });
  }
};


export const getModule = async (req: Request, res: Response): Promise<void> => {
  try {
    // Fetch all modules from the database and populate with urls
    const modules = await Module.find()

    // Transform the modules to include nested objects with IDs
    const transformedModules = modules.map((mod: any) => ({
      _id: mod._id,
      name: mod.name,
      url: mod.url,
      modules: mod.applications,
      __v: mod.__v
    }));

    res.status(200).json(transformedModules);
  } catch (error: any) {
    res.status(500).json({ message: error });
    return
  }
};


export const getApplicationById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params; // Get the module ID from the request parameters

    // Fetch the module by ID from the database
    const module = await Module.findById(id)

    // Check if application exists
    if (!module) {
      res.status(404).json({ message: 'Module not found' });
      return;
    }

    // Transform the module to include nested objects with IDs
    const transformedModule = {
      _id: module._id,
      name: module.name,
      url: module.url
    };

    res.status(200).json(transformedModule);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
