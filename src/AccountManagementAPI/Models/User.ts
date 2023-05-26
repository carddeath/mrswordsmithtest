import { UUID } from "crypto";

export type User = {
  id?: UUID;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
};
