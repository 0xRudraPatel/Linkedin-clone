import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function NavLink({
  icon,
  text,
  hidden,
  feed,
}: {
  icon: IconProp;
  text: string;
  hidden?: boolean;
  feed: boolean;
}) {
  return (
    <div
      className={`${
        hidden && "hidden md:inline-flex"
      } cursor-pointer flex flex-col justify-center items-center text-black/60 hover:text-black lg:-mb-1.5 space-y-1
      `}
    >
      <FontAwesomeIcon icon={icon} className="!h-6 !w-6 lg:!-mb-1" />

      <h4
        className={`text-xs pt-1 ${
          feed && "hidden lg:flex justify-center w-full mx-auto"
        }`}
      >
        {text}
      </h4>
    </div>
  );
}

export default NavLink;
