import { Collection, ObjectId } from "mongodb";
import { getShopeeCloneDB } from "../config";
import { hash } from "../utils/bcrypt";

export type User = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

export type InputDataUser = Omit<User, "_id">;
export type OutputDataUser = Omit<User, "password">;

const getUsersCollection = async (): Promise<Collection<User>> => {
  const db = await getShopeeCloneDB();
  return db.collection<User>("Users");
};

export const signup = async (data: InputDataUser): Promise<void> => {
  const user = await getUserByEmail(data.email);
  if (user) {
    const message = "Email already registered";
    console.log(message);
    return;
  }
  const userCollection = await getUsersCollection();

  data.password = hash(data.password);

  await userCollection.insertOne(data as User);
};

export const getUserByEmail = async (
  email: string
): Promise<OutputDataUser | null> => {
  const userCollection = await getUsersCollection();
  const user = await userCollection.findOne({ email });

  return user;
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await getUserByEmail(email);
  return {
    _id: user?._id,
    name: user?.name,
    username: user?.username,
    email: user?.email,
  };
};
