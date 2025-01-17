import Link from "next/link";
import Image from "next/image";

function CoverImage({ title, coverImageUrl, slug }) {
  return (
    <div className="relative aspect-video rounded-md overflow-hidden mb-6">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={coverImageUrl}
          alt={title}
          fill
          className="object-cover object-center hover:scale-110 transition-all duration-300 ease-linear"
          quality={80}
        />
      </Link>
    </div>
  );
}

export default CoverImage;
