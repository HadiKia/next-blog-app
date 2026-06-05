export type PageParams<T extends Record<string, string>> = {
  params: Promise<T>;
};

export type PageSearchParams = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

export type DynamicPageProps<T extends Record<string, string>> = PageParams<T> &
  PageSearchParams;

export type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
