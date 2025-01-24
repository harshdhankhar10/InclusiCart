import React from 'react';
import CustomerList from '@/components/Dashboard/Admin/Users/CustomerList';
import { prisma } from '@/lib/prisma';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  status: string;

};


async function getAllUserInfo() {
  const response = await prisma.user.findMany({
    where: {
      role: 'USER',
    },
  });
  return response;

}

const Page = async () => {
  const userData = await getAllUserInfo();

  return (
    <div>
      <CustomerList userData={userData as User[]} />
    </div>
  );
};

export default Page;
