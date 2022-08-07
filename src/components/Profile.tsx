import Image from "next/image";

function Profile({
  image,
  name,
  username,
}: {
  image: string;
  name: string;
  username: string;
}) {
  return (
    <div className="flex justify-center mt-3 gap-x-5 px-4 sm:px-12">
      <div>
        <Image
          src={image}
          alt="profile"
          width="50rem"
          height="50rem"
          className="rounded-full"
        />
      </div>
      <div>
        <h2>{name}</h2>
        <h3>{username}</h3>
      </div>
    </div>
  );
}

export default Profile;
