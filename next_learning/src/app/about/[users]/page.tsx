import React from 'react';
import { usersData } from '../page'; // Ensure usersData is correctly typed
import Link from 'next/link';

// 1. Define the User interface
interface User {
  id: number; // Adjust to string if your IDs are strings
  name: string;
  email: string;
  age: number;
}

// 2. Define the Props interface
interface AboutUsersProps {
  params: {
    users: string; // Assuming `users` comes from URL params as a string
  };
}

// 3. Ensure usersData is typed
// If usersData is not typed, you can cast it or ensure it's typed in '../page'
const typedUsersData: User[] = usersData;

// 4. Convert the component to TypeScript
const AboutUsers: React.FC<AboutUsersProps> = ({ params }) => {
  const { users } = params;

  // Convert `users` to a number if `id` is numeric
  const userId = Number(users);

  // Find the specific user based on the ID
  const specificUser: User | undefined = typedUsersData.find((user) => user.id === userId);

  return (
    <div className="w-full h-lvh flex flex-col justify-center items-center">
      <p className='mb-10 text-4xl font-bold '>Selected User ID: {users}</p>
      {specificUser ? (
        <div className="px-8 py-4 border rounded-md shadow-md mb-4">
          <p><strong>Name:</strong> {specificUser.name}</p>
          <p><strong>Email:</strong> {specificUser.email}</p>
          <p><strong>Age:</strong> {specificUser.age}</p>
        </div>
      ) : (
        <p className="text-red-500">No user found with the given ID.</p>
      )}

<button className='font-bold capitalize    bg-blue-800 px-2 py-1 '>

      <Link href="/about" > go to about page</Link>
</button>
    </div>
  );
};

export default AboutUsers;
