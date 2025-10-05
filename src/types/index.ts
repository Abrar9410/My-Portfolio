

// export type TRole = "ADMIN" | "USER";

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  picture?: string;
  // isVerified?: boolean;
  // role: TRole;
  createdAt?: string;
  updatedAt?: string;
};