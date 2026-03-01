export default function sitemap() {
  const baseUrl = "https://yourdomain.com"; // change after deployment
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}