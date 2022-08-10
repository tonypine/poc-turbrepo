import axios from 'axios';
import { User, Prisma } from '@mact/prisma-client';

const user: Prisma.UserCreateInput = {
  email: '',
  name: '',
  age: 0,
};
console.log('mui', { user });

export const getUsers = (): Promise<User[]> =>
  axios.get('http://localhost:3002/users').then(({ data }) => data);
