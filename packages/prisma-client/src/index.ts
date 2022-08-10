import { User } from '@prisma/client';

const user: User = {
  id: 0,
  email: '',
  name: '',
  age: 0,
};

console.log('prisma-client', { user });

export type { User, Post, Prisma } from '@prisma/client';
export { PrismaClient } from '@prisma/client';
