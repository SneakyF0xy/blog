export const SITE = {
  website: "https://sneakyfoxy.com",
  author: "SneakyFoxy",
  profile: "https://github.com/SneakyF0xy",
  description:
    "SneakyFoxy's writeups on CTFs, security research, and whatever else I'm thinking about. Sometimes I break things, sometimes I fix them.",
  title: "Blog - SneakyFoxy",
  og: "sneaky.png",
  lightAndDarkMode: false,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 0,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/SneakyF0xy/blog/edit/main/src/content/blog/",
  },
  dir: "ltr",
  lang: "en",
  timezone: "UTC",
} as const;
