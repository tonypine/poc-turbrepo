import { User } from '@prisma/client';

const user: User = {
  id: 0,
  email: '',
  name: '',
  age: 0,
};

console.log('prisma-client', { user });

export * from '@prisma/client';
