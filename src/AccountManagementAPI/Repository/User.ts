import { Entity, Schema, Client } from "redis-om";

export default class User extends Entity {}

const userSchema: Schema<User> = new Schema(User, {
  name: { type: "string" },
  address: { type: "string" },
  phoneNumber: { type: "string" },
  email: { type: "string" },
});

let client = await new Client().open();
export let userRepository = client.fetchRepository(userSchema);
await userRepository.createIndex();
