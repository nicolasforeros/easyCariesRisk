export interface IQuestion {
  name: string;
  description: string;
  weight: number;
  isYes: boolean | undefined;
  color: string;
}

export interface IUser {
  email: string;
  fullName: string;
  occupation: string;
}

export interface IPatient {
  age: number;
  sex: 'masculino' | 'femenino';
}
