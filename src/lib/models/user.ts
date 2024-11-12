import { Schema, models, model } from "mongoose";
import { IUser } from "../types/models";

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: [true, "Username cannot be empty"],
  },
  email: {
    type: String,
    required: [true, "Email cannot be empty"],
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  role: {
    type: String,
    default: "user",
  },
  status: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  avatar: {
    type: String,
  },
});

const User = models.User || model<IUser>("User", userSchema);
export default User;
