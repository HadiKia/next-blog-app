import Image from "next/image";

const Avatar = ({ src, width = 24, fill = false }) => {
  return (
    <Image
        src={src || "/images/avatar.png"}
        alt="avatar"
        className="rounded-full"
        {...(fill ? { fill: true } : { width, height: width })}
      />
  );
};

export default Avatar;
