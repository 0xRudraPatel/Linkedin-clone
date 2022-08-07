import Image from "next/image";
import { faker } from "@faker-js/faker";

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
    <div className="bg-white space-y-2 py-2.5 border border-gray-300 rounded-lg">
      <div className="flex items-center px-2.5 cursor-pointer">
        <div>
          <Image
            src={image}
            alt={name}
            width="50rem"
            height="50rem"
            className="rounded-full cursor-pointer"
          />
        </div>
        <div className="mr-auto ml-2 leading-none">
          <h2 className="font-medium hover:underline decoration-purple-700 underline-offset-1 cursor-pointer mb-1.5">
            {name}
          </h2>
          <h3>{username}</h3>
        </div>
      </div>
      <div className="px-2.5 break-all md:break-normal">
        <p>{faker.lorem.sentences(2)}</p>
      </div>
    </div>
  );
}

export default Post;
