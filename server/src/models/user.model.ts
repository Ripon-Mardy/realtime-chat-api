import mongoose, { Types, Document, Schema } from "mongoose";

export interface Iuser extends Document {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema<Iuser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<Iuser>("User", userSchema);
