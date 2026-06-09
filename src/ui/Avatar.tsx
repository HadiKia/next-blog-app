import Image from "next/image";

type AvatarProps = {
  src?: string | null;
  width?: number;
  fill?: boolean;
};

const Avatar = ({ src, width = 24, fill = false }: AvatarProps) => {
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