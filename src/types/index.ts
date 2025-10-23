

// export type TRole = "ADMIN" | "USER";

export interface ISkills {
  languages: string[];
  frontend: string[];
  backend: string[];
  databases: string[];
  authentication: string[];
  odm_orm: string[];
  cloud_devOps: string[];
  payments: string[];
  devTools: string[];
  concepts: string[];
};

export interface IAbout {
  storyHTML: string;
  skills: ISkills;
  languages: string[];
  certifications: string[];
};

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  picture?: string;
  about?: IAbout;
  // isVerified?: boolean;
  // role: TRole;
  createdAt?: string;
  updatedAt?: string;
};

export interface IProject {
  _id: string;
  title: string;
  thumbnail: string;
  overview: string;
  startDate: string;
  endDate?: string;
  detailsJSON: Record<string, unknown>;
  detailsHTML: string;
  technologies: string[];
  featured: boolean;
  github_repo: string;
  live_link: string;
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
  createdAt?: string;
  updatedAt?: string;
};

export interface IMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};