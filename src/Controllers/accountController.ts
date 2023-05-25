import { Response, Request, NextFunction } from "express";
import User, {
  userRepository,
} from "../AccountManagementAPI/Repository/User.js";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let users = await userRepository.search().return.all();
  res.send(users);
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await userRepository.fetch(req.params.id);
  res.status(200).json({ user });
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user: User = userRepository.createEntity(req.body);
  const id = await userRepository.save(user);

  res.status(201).json({ id });
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //NOTE - Apologies about the ts-ignore here I was using an old library and types seem to be an issue on entities
  const newDetails: User = req.body;
  const user = await userRepository.fetch(req.params.id);
  //@ts-ignore
  user.name = newDetails.name ?? user.name;
  //@ts-ignore
  user.address = newDetails.address ?? user.address;
  //@ts-ignore
  user.email = newDetails.email ?? user.email;
  //@ts-ignore
  user.phoneNumber = newDetails.phoneNumber ?? user.phoneNumber;

  const id = await userRepository.save(user);
  res.status(200).json({ id });
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  await userRepository.remove(req.params.id);

  res.status(200).json({ msg: "Deleted User" });
};
