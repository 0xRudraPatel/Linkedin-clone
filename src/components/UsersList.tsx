import { useRouter } from "next/router";
import data from "../databases/data.json";

function UsersList() {
  const router = useRouter();

  const users: JSX.Element[] = data.users.map((user) => (
    <li key={user.username}>
      <button
        onClick={() => {
          router.push(`?username=${user.username}`, undefined, {
            shallow: true,
          });
        }}
      >
        {user.username}
      </button>
    </li>
  ));

  return (
    <div>
      <h2>Users List</h2>
      <ul>{users}</ul>
    </div>
  );
}

export default UsersList;
