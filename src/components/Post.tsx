import Image from "next/image";
// import { faker } from "@faker-js/faker";

function Post({
  image,
  name,
  username,
}: {
  image: string;
  name: string;
  username: string;
}) {
  return (
    <div>
      <div>
        <div>
          <Image src={image} alt={name} width={50} height={50} />
        </div>
        <div>
          <h2>{name}</h2>
          <h3>{username}</h3>
        </div>
      </div>
      <div>{/* <p>{faker.lorem.sentences(2)}</p> */}</div>
    </div>
  );
}

export default Post;
