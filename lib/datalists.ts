export const navbarLinks = [
  {
    id: "reference",
    title: "Reference",
    path: "/reference",
    isUnderConstruction: false
  },
  {
    id: "learn",
    title: "Learn",
    path: "/learn",
    isUnderConstruction: true
  },
] as const;

export const languages = [
  {
    id: "nextauth",
    title: "NextAuth.js",
    description: "Authentication for Next.js applications using a variety of providers.",
    path: "/reference/nextauth/credential-setup",
  },
  {
    id: "vercel",
    title: "Vercel",
    description: "Vercel is a cloud platform for static sites and Serverless Functions.",
    path: "/reference/vercel/deploying-express-server-with-typescript",
  }
];

export const nextauthSidebarLinks = [
  {
    id: "setup",
    heading: "Setup",
    content: [
      {
        id: "credential-setup",
        title: "Credential Setup",
        path: "/reference/nextauth/credential-setup",
        isUnderConstruction: false,
      },
      {
        id: "google-auth-setup",
        title: "Google Auth Setup",
        path: "/reference/nextauth/google-auth-setup",
        isUnderConstruction: true,
      }
    ],
  },
]