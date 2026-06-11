import Image from "next/image";
import Link from "next/link";

type CoverImageProps = {
  coverImageUrl: string;
  title: string;
  slug: string;
  wrapperClassName?: string;
  imgClassName?: string;
};

const CoverImage = ({
  coverImageUrl,
  title,
  slug,
  wrapperClassName,
  imgClassName,
}: CoverImageProps) => {
  return (
    <div className={`relative w-full aspect-video ${wrapperClassName ?? ""}`}>
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          fill
          alt={title}
          className={`object-cover object-center ${imgClassName ?? ""}`}
          quality={80}
        />
      </Link>
    </div>
  );
};

export default CoverImage;