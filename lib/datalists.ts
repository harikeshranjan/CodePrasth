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
    isUnderConstruction: false,
  },
  {
    id: "vercel",
    title: "Vercel",
    description: "Vercel is a cloud platform for static sites and Serverless Functions.",
    path: "/reference/vercel/deployment/express-ts-deployment",
    isUnderConstruction: false,
  },
  {
    id: "Docker",
    title: "Docker",
    description: "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
    path: "/reference/docker",
    isUnderConstruction: true,
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

export const vercelSidebarLinks = [
  {
    id: "deployment",
    heading: "Deployment",
    content: [
      {
        id: "express-ts-deployment",
        title: "Express TS Deployment",
        path: "/reference/vercel/deployment/express-ts-deployment",
        isUnderConstruction: false,
      }
    ],
  },
]