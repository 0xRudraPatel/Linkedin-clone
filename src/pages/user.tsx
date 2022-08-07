import { useRouter } from "next/router";
import data from "../databases/data.json";
import MainNavbar from "../components/MainNavbar";
import Profile from "../components/Profile";
import UsersList from "../components/UsersList";

function User() {
  const router = useRouter();
  const { username } = router.query;

  const probableUser:
    | { username: string; name: string; image: string; post: string }
    | undefined = data.users.find((user) => user.username === username);

  const user: { username: string; name: string; image: string; post: string } =
    probableUser
      ? probableUser
      : {
          username: "deleteduser",
          name: "Deleted User",
          image: "https://rb.gy/bxxitf",
          post: "",
        };

  return (
    <>
      <MainNavbar />
      <Profile image={user.image} name={user.name} username={user.username} />
      <UsersList />
    </>
  );
}

export default User;
