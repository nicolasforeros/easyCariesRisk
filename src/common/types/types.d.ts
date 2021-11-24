export interface IQuestion {
  name: string;
  description: string;
  weight: number;
  isYes: boolean | undefined;
}

export interface IUser {
  email: string;
  fullName: string;
  occupation: string;
}
