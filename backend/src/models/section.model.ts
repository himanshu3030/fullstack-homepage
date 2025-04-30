import mongoose, { Schema } from 'mongoose';

export type SectionType = 'hero' | 'about' | 'logos' | 'footer';

export interface ISection {
  type: SectionType;
  content: {
    title?: string;
    subtitle?: string;
    ctaButtons?: Array<{ text: string; url: string }>;
    imageUrl?: string;
    logos?: Array<{ url: string; alt: string }>;
  };
  order: number;
}

const sectionSchema = new Schema<ISection>({
  type: { type: String, required: true, enum: ['hero', 'about', 'logos', 'footer'] },
  content: { type: Schema.Types.Mixed, required: true },
  order: { type: Number, required: true }
});

export default mongoose.model<ISection>('Section', sectionSchema);