import Input from "./Input";
import data from "../databases/data.json";
import Post from "./Post";

function Feed() {
  const posts = data.users.map((user) => (
    <Post
      key={user.username}
      image={user.image}
      name={user.name}
      username={user.username}
    />
  ));

  return (
    <div className="flex flex-col max-w-lg">
      <div className="space-y-6 pb-6 max-w-lg">
        <Input />
      </div>
      <div className="space-y-3">{posts}</div>
    </div>
  );
}

export default Feed;
