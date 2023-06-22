import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const uri = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.18jge43.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
  const client = new MongoClient(uri);
  // console.log("client -", client);
  return client;
}
