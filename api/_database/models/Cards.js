import mongoose from 'mongoose';

export const CardsSchema = new mongoose.Schema({
  videoName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isLocked: {
    type: Boolean,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  amountRates: {
    type: Number,
    required: true,
  },
});
