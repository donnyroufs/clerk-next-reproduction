import { currentUser } from "@clerk/nextjs";

export async function Header() {
  const user = await currentUser();

  return <header>@{user?.username}</header>;
}
