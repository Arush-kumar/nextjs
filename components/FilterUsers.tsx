"use client";

import { useState } from "react";


type userProps = {
  id: number;
  name: string;
  username: string;
}
export default function FilterUsers({ users }: { users: userProps[] }) {

  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter((user: userProps) => {
    return user.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user: userProps) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}