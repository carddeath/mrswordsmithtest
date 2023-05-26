import { Response, Request, NextFunction } from "express";
import { randomUUID } from "crypto";
import { db } from "../AccountManagementAPI/Repository/UserRepository.js";
import { User } from "../AccountManagementAPI/Models/User.js";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = db.data.users.find((u: User) => u.id === req.params.id);
  res.status(200).json({ user: user });
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const newUser: User = { id: randomUUID(), ...req.body };

  db.data.users.push(newUser);
  db.write();
  res
    .status(201)
    .json({ user: db.data.users.find((u: User) => u.id === newUser.id) });
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const existingUser = db.data.users.find((u: User) => u.id === req.params.id);
  const existingUserIndex = db.data.users.findIndex(
    (u: User) => u.id === req.params.id
  );
  const newDetails = req.body;

  if (existingUser) {
    existingUser.name = newDetails.name ?? existingUser.name;
    existingUser.address = newDetails.address ?? existingUser.address;
    existingUser.email = newDetails.email ?? existingUser.email;
    existingUser.phoneNumber =
      newDetails.phoneNumber ?? existingUser.phoneNumber;
    db.data.users[existingUserIndex] = existingUser;
    db.write();
    res.status(200).json({
      updatedUser: db.data.users.find((u: User) => u.id === existingUser.id),
    });
  } else {
    res.status(204).json({ msg: `No user with id: ${req.params.id}` });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const allUsers: Array<User> = db.data.users;
  const usersWithDeletion: Array<User> = allUsers.filter(
    (user) => user.id !== req.params.id
  );

  db.data.users = usersWithDeletion;
  db.write();

  res.status(204).json({ msg: "Deleted User" });
};
