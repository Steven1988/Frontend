export interface IUser {
  id: string;
  name: string;
  fullname: string;
  email: string;
  gender: string;
  ip_address: string;
  city: string;
  avatar: string;
}

export interface User {
  id: string;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: string;
  gender: string;
  company: string;
  phone: string;
  address: string;
  about: string;
  registred: string;
  latitude: number;
  longitude: number;
  city: string;
  country: string;
  tags: string[];
  friends?: Friends[];
  greeting: string;
  favoriteFruit: string;
}

export interface Friends {
  id: string;
  name: string;
}
