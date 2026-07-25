type profileProps = {
  params: Promise<{ name: string }>
}
export default async function profilePage({ params }: profileProps) {

  const users = [
    {
      id: 1,
      name: "Rohan",
      email: "rohan@kumar.com",
      bio: "I am a Gen AI Developer",
    },
    {
      id: 2,
      name: "Jane",
      email: "jane@doe.com",
      bio: "I am a Python Developer",
    },
    {
      id: 3,
      name: "Neha",
      email: "neha@gupta.com",
      bio: "I am a backend Developer",
    },
  ]


  const pageParams = await params;
  const username = pageParams.name;

  const user = users.find(user => user.name.toLocaleLowerCase() === username.toLocaleLowerCase());

  if (!user) {
    return (
      <div>
        <h1 className="text-4xl font-bold text-amber-700 flex justify-center">User not found</h1>
      </div>
    )
  }

  return (
    <div>
      <h1>{user?.name}'s Profile Page</h1>
      <p>Bio: {user?.bio}</p>
    </div>
  )
}

