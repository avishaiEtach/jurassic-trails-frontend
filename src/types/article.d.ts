interface Article {
  id: string;
  title: string;
  main_image: string;
  fileName: string;
  post_date: string; // in ISO string
  time_to_read: number; // in min
}

export { Article };
