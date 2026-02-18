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
        <div className="relative fill-primary-700 w-24 lg:w-28 mt-8 mb-10 lg:mt-10 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 394 79">
            <path d="M261.919.033h68.628V12.7h-27.224v66.639H289.71V12.7h-27.791zM149.052.033V12.7h-55.01v20.377h44.239v12.667H94.042v20.928h55.01V79.34H80.43V12.7h-.006V.033zM183.32.066h-17.814l63.806 79.306h17.866l-31.907-39.626L247.127.126l-17.815.028-22.96 28.516zM201.6 56.715l-8.921-11.092-27.224 33.81h17.865z" />
            <path
              fillRule="evenodd"
              d="M80.907 79.339 17.015 0H0v79.306h13.612V16.952l50.195 62.387z"
              clipRule="evenodd"
            />
            <path d="M333.607 78.855a3.53 3.53 0 0 1-2.555-1.036c-.71-.691-1.061-1.527-1.052-2.518q-.013-1.445 1.052-2.481a3.53 3.53 0 0 1 2.555-1.036c.959 0 1.798.345 2.508 1.036.72.69 1.079 1.518 1.089 2.481a3.44 3.44 0 0 1-.508 1.79 3.7 3.7 0 0 1-1.319 1.282 3.4 3.4 0 0 1-1.77.482M356.84 45.445h6.032v23.24c-.009 2.135-.471 3.962-1.374 5.498-.913 1.536-2.177 2.708-3.8 3.535-1.614.818-3.505 1.237-5.654 1.237-1.965 0-3.726-.355-5.294-1.046-1.568-.69-2.813-1.726-3.726-3.09-.923-1.363-1.375-3.062-1.375-5.098h6.042c.009.89.212 1.663.599 2.308a3.86 3.86 0 0 0 1.605 1.481q1.037.519 2.379.519c.969 0 1.799-.2 2.472-.61q1.01-.6 1.55-1.799c.35-.79.535-1.772.544-2.935zM387.691 54.534c-.147-1.409-.793-2.509-1.918-3.29q-1.702-1.184-4.4-1.182c-1.263 0-2.351.191-3.255.564-.904.382-1.605.89-2.085 1.536-.479.645-.719 1.381-.738 2.208 0 .691.166 1.29.489 1.79.323.51.756.937 1.319 1.282a8.8 8.8 0 0 0 1.845.882q1.023.354 2.047.6l3.145.772a21.7 21.7 0 0 1 3.662 1.182 13 13 0 0 1 3.163 1.872 8.4 8.4 0 0 1 2.214 2.726c.544 1.064.821 2.309.821 3.745 0 1.936-.498 3.635-1.504 5.108-1.005 1.463-2.453 2.608-4.353 3.435-1.891.818-4.178 1.236-6.871 1.236-2.601 0-4.87-.4-6.779-1.2-1.918-.79-3.413-1.954-4.492-3.48s-1.66-3.39-1.743-5.58h5.977c.083 1.144.452 2.099 1.079 2.871.636.763 1.466 1.327 2.481 1.709 1.024.372 2.167.563 3.431.563 1.319 0 2.481-.2 3.486-.59.996-.391 1.78-.937 2.343-1.646.572-.7.858-1.526.867-2.472-.009-.863-.268-1.581-.766-2.145q-.76-.845-2.103-1.417a21.6 21.6 0 0 0-3.154-1.027l-3.818-.964c-2.758-.7-4.944-1.763-6.54-3.19-1.604-1.427-2.398-3.317-2.398-5.69 0-1.944.535-3.653 1.615-5.116 1.069-1.463 2.536-2.6 4.39-3.408 1.863-.818 3.966-1.218 6.308-1.218 2.38 0 4.464.4 6.263 1.218 1.798.809 3.21 1.936 4.233 3.372 1.024 1.436 1.559 3.08 1.587 4.944z" />
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
