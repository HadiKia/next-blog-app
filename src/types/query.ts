import type { ApiClientError } from "./api";

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: ApiClientError;
  }
}
