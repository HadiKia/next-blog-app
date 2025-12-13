import { navLinks } from "../../constants/navLinksData";
import Link from "next/link";

const Footer = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <div className="bg-secondary-100 border-t border-secondary-200">
      <footer className="container xl:max-w-screen-xl">
        <div className="relative fill-primary-800 w-14 lg:w-20 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid"
            viewBox="0 -101.5 512 512"
          >
            <path d="M120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675H120.81zm105.22 0h10.26l45.467 63.423L328.23 80.56 391.441 0l-103.85 150.65 53.515 74.127h-10.663l-48.686-67.462-48.888 67.462h-10.461l53.917-74.128zm118.898 7.676V80.56h110.048v7.676h-50.699v136.54h-8.852V88.237zM0 80.56h11.065l152.58 228.323-63.053-84.107L9.254 91.468l-.402 133.31H0zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212 0-1.81 1.356-3.212 3.165-3.212 1.83 0 3.165 1.401 3.165 3.212s-1.335 3.212-3.165 3.212m8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29 3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853-5.62 0-9.473-3.493-9.473-8.84m25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828 3.875 0 6.717-2.005 6.717-4.764 0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602 0-5.54 4.521-9.227 11.303-9.227 6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657-3.81 0-6.35 1.833-6.35 4.635 0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753 0 5.95-4.607 9.68-11.97 9.68-6.89 0-11.52-3.558-11.864-9.12" />
          </svg>
        </div>

        <div className="grid grid-cols-2 items-start gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div>
            <h6 className="font-semibold text-base text-primary-700 mb-3 lg:mb-4">
              دسته‌بندی ها
            </h6>
            <ul className="flex flex-col gap-y-3 lg:gap-y-4">
              {categories.map((category) => (
                <li key={category._id}>
                  <Link
                    href={`/blogs/category/${category.slug}`}
                    className="text-secondary-500 hover:text-secondary-700 duration-300 ease-out text-sm"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-base text-primary-700 mb-3 lg:mb-4">
              صفحات
            </h6>
            <ul className="flex flex-col gap-y-3 lg:gap-y-4">
              {navLinks.map(({ id, path, children }) => (
                <li key={id}>
                  <Link
                    href={path}
                    className="text-secondary-500 hover:text-secondary-700 duration-300 ease-out text-sm"
                  >
                    {children}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/profile"
                  className="text-secondary-500 hover:text-secondary-700 duration-300 ease-out text-sm"
                >
                  حساب کاربری
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between py-4 border-t border-secondary-200 mt-4 lg:mt-8 text-xs lg:text-sm text-secondary-500">
          <div className="flex items-center gap-x-3 lg:gap-x-5">
            <Link
              href="https://www.instagram.com/ihadikia/"
              target="_blank"
              className="w-5 h-5 lg:w-6 lg:h-6"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                    strokeWidth="1.5"
                  />
                  <path d="M17.636 7h.012" strokeWidth="2" />
                </g>
              </svg>
            </Link>
            <Link
              href="https://github.com/hadikia"
              target="_blank"
              className="w-5 h-5 lg:w-6 lg:h-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75 5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87" />
                  <path d="M9 20.027c-3 .973-5.5 0-7-3" />
                </g>
              </svg>
            </Link>
          </div>
          <span>Developed by Hadi Kia</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
