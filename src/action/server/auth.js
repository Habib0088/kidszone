"use server";

import { dbCollection, dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
export const postUser = async (payload) => {
  const { name, email, password } = payload;

  // Check Payload
  if (!email || !password) return null;
  // check user
  const isExist = await dbConnect(dbCollection.USERS).findOne({ email });
  if (isExist) return null;
  // create user
  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(password, 14),
    role: "user",
  };
  // Insert user
  const result = await dbConnect(dbCollection.USERS).insertOne(newUser);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};

export const loginUser = async (payload) => {
  const { email, password } = payload;
  if (!email || !password) return null;

  const user = await dbConnect(dbCollection.USERS).findOne({ email });
  if (!user) return null;
  const passwordMatched = await bcrypt.compare(password, user.password);
  if (passwordMatched) {
    return user;
  } else {
    return null;
  }
};
