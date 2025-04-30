import { Request, Response } from 'express';
import Section from '../models/section.model';

export const getSections = async (req: Request, res: Response) => {
  try {
    const sections = await Section.find().sort({ order: 1 });
    res.json(sections);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedSection = await Section.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedSection);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateSectionOrder = async (req: Request, res: Response) => {
  try {
    const { sections } = req.body;
    
    const bulkOps = sections.map((section: { id: string; order: number }) => ({
      updateOne: {
        filter: { _id: section.id },
        update: { $set: { order: section.order } }
      }
    }));
    
    await Section.bulkWrite(bulkOps);
    res.json({ message: 'Order updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};