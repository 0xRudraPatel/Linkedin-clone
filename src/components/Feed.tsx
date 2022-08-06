import Input from "./Input";
// import data from "../databases/data.json";
// import Post from "./Post";

function Feed() {
  // const usersData = [...data.users];

  // const posts = usersData.map((user) => (
  //   <Post
  //     key={user.username}
  //     image={user.image}
  //     name={user.name}
  //     username={user.username}
  //   />
  // ));

  return (
    <>
      <div className="space-y-6 pb-24 max-w-lg">
        <Input />
      </div>
      {/* <div>{posts}</div> */}
    </>
  );
}

export default Feed;
