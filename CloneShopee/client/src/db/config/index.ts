import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_STRING;
const databaseName = process.env.MONGODB_DB_NAME;

if (!uri || !databaseName) {
  throw new Error("MONGO DB CONNECTION STRING or DATABASE NAME REQUIRED");
}

let client: MongoClient;

export const getMongoClientInstance = async () => {
  if (!client) {
    client = await MongoClient.connect(uri);
    await client.connect();
  }
  return client;
};

export const getShopeeCloneDB = async () => {
  client = await getMongoClientInstance();
  const db: Db = client.db(databaseName);
  return db;
};
