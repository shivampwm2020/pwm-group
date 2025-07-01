export type BlogPost =
  | {
      id: string;
      title: string;
      slug: string;
      category: string;
      excerpt: string;
      content: string;
      author: string;
      date: string;
      image: string;
      contentPath?: undefined;
    }
  | {
      id: string;
      title: string;
      slug: string;
      category: string;
      excerpt: string;
      content?: undefined;
      contentPath: string;
      author: string;
      date: string;
      image: string;
    };
