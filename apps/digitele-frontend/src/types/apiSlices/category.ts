export type categoryApiBody = {
  name: string;
  image?: string;
};

export type CategoryType = {
  name: string;
  _id: string;
  picUrl: string;
  createdAt?: string;
  updatedAt?: string;
};
