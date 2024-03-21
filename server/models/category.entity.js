import { Schema, model } from 'mongoose';

const CategorySchema = new Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

const Category = model('Category', CategorySchema);

export default Category;