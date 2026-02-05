import Image from "next/image";

const Empty = ({ message }) => {
  return (
    <div className="grid place-items-center">
      <div className="relative aspect-square w-60 md:w-96">
        <Image
          fill
          src="/images/notFound.png"
          alt="not-found"
          className="object-cover object-center"
        />
      </div>
      <p className="text-secondary-500 text-base md:text-xl text-center md:-mt-4">
        {message}
      </p>
    </div>
  );
};

export default Empty;
