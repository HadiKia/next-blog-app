import Image from "next/image";
import Link from "next/link";

const CoverImage = ({ coverImageUrl, title, slug }) => {
  return (
    <div className="relative aspect-video w-full">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          fill
          alt={title}
          className="object-cover object-center"
          quality={80}
        />
      </Link>
    </div>
  );
};

export default CoverImage;
