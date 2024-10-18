import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
  {
    shortUrl: {
      type: String,
      required: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    visitedHistory: [{ timestamps: { type: Number } }],
  },
  { timestamps: true }
);

export const url = mongoose.model("url", urlSchema);
