import type { MetadataRoute } from "next";
import { researchArticles } from "./research/articleData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cybergradchronicles.com";

  const mainPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/academy`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/research`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/career`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/journey`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/credentials`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/military-spouse-hub`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/connect`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const careerPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/career/resume-review`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career/resume-rewrite`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career/linkedin-review`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career/github-review`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career/portfolio-review`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career/interview-prep`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career/bundles`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/career/faq`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/career/testimonials`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

const militarySpousePages: MetadataRoute.Sitemap = [
  {
    url: `${baseUrl}/military-spouse-hub`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${baseUrl}/military-spouse-hub/where-to-start`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/military-spouse-hub/career`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/military-spouse-hub/career/ai-tools`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${baseUrl}/military-spouse-hub/career/career-breaks`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${baseUrl}/military-spouse-hub/career/federal-jobs`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/military-spouse-hub/career/interview-prep`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${baseUrl}/military-spouse-hub/career/job-boards`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/military-spouse-hub/career/linkedin`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${baseUrl}/military-spouse-hub/career/relocation-survival-kit`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/military-spouse-hub/career/remote-red-flags`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${baseUrl}/military-spouse-hub/career/resume`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${baseUrl}/military-spouse-hub/community`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/military-spouse-hub/community/success-stories`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${baseUrl}/military-spouse-hub/education`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${baseUrl}/military-spouse-hub/education/certifications`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
  ];

  const researchPages: MetadataRoute.Sitemap = researchArticles.map(
    (article) => ({
      url: `${baseUrl}/research/${article.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  );

  return [
    ...mainPages,
    ...researchPages,
    ...careerPages,
    ...militarySpousePages,
  ];
}