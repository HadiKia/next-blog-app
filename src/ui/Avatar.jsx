import Image from "next/image";

function Avatar({ src, width = 24 }) {
  return (
    <Image
      src={src || "/images/avatar.svg"}
      width={width}
      height={width}
      className="rounded-full ring-1 ring-secondary-300 ml-2 bg-slate-900"
      alt={src}
    />
  );
}

export default Avatar;