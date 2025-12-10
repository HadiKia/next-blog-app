import Image from "next/image";

const Avatar = ({ src, width = 24 }) => {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={width}
      alt={src || "avatar"}
      className="rounded-full ring-1 ring-secondary-300"
    />
  );
};

export default Avatar;
