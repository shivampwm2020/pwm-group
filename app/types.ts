// app/types.ts

export type PageProps<T extends Record<string, string> = {}> = {
  params: T;
};
