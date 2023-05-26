import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { User } from "../Models/User.js";

type DatabaseStructure = {
  users: Array<User>;
};

const adapter = new JSONFile<DatabaseStructure>(
  "lib/AccountManagementAPI/db.json"
);
const defaultData: DatabaseStructure = { users: [] };
export const db = new Low<DatabaseStructure>(adapter, defaultData);
