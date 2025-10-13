

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

export interface IBlog {
  _id: string;
  title: string;
  thumbnail: string;
  overview: string;
  contentJSON: Record<string, unknown>;
  contentHTML: string;
  tags: string[];
  views: number;
  createdAt?: Date
  updatedAt?: Date
};