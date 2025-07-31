export const ROUTES = {
  HOME: "/",
  ABOUT_US: "/about-us",
  DINOSAURS: "/dinosaurs",
  ARTICLES: "/articles",
  ARTICLE_PAGE: (id: string | number) => `/articles/${id}`,
  CONTACT_US: "/contact-us",
};
