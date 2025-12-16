import Image from "next/image";

const Avatar = ({ src, width = 24 }) => {
  return (
    <Image
      src={src || "/images/avatar.png"}
      width={width}
      height={width}
      alt={src || "avatar"}
      className="rounded-full"
    />
  );
};

export default Avatar;
