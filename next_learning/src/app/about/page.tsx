import React from "react";
import Link from "next/link";

//  Define the About Component
const About: React.FC = () => {
  return (
    <div className="capitalize text-2xl font-semibold flex flex-col gap-14 h-lvh w-full justify-center items-center">
      <p>i am about page</p>
       <div className="flex flex-col  justify-center items-center gap-4">
       <p>about users</p>
      <div className="flex gap-10 border px-6 py-3 rounded-md">
        {usersData.map((user: User) => (
          <div className="bg-black px-3 py-1 rounded-md" key={user.id}>
            <Link href={`/about/${user.id}`}>
              <h2>{user.name}</h2>
            </Link>
          </div>
        ))}
      </div>
       </div>
    </div>
  );
};

export default About;

//  Define the User interface
interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}
// Add Type Annotation for `usersData`
export const usersData: User[] = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "john@example.com",
  },
  {
    id: 2,
    name: "Jane Mike",
    age: 25,
    email: "jane@example.com",
  },
  {
    id: 3,
    name: "Niland",
    age: 25,
    email: "niland@example.com",
  },
];
