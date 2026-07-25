import FilterUsers from "@/components/FilterUsers";

export default async function Classroom() {

  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()


  return (
    <main>
      <h1 className="text-3xl">Hello! from classroom</h1>
      <FilterUsers users={users} />
    </main>
  );
}