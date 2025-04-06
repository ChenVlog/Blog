export const SITE = {
  website: "https://chenvlog.com/", // replace this with your deployed domain
  author: "ChenVlog",
  profile: "https://chenvlog.pages.dev/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "老陳网志",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 8,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/ChenVlog/Blog/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
