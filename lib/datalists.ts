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
    isUnderConstruction: false
  },
] as const;

// This is the list of languages that are used in the reference section of the website
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

// This is the sidebar links for the reference section
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

// This is the list of the languages that are used in the learn section of the website
export const learnLanguages = [
  {
    id: "numpy",
    title: "NumPy",
    description: "NumPy is the fundamental package for scientific computing with Python.",
    path: "/learn/numpy/getting-started",
    isUnderConstruction: false,
  },
]

// This is the sidebar links for the learn section
export const numpySidebarLinks = [
  {
    id: "getting-started",
    heading: "Getting Started",
    content: [
      {
        id: "numpy-installation",
        title: "NumPy Installation",
        path: "/learn/numpy/getting-started/",
        isUnderConstruction: false,
      },
      {
        id: "basics",
        title: "Basics",
        path: "/learn/numpy/basics",
        isUnderConstruction: false,
      },
      {
        id: "numpy-operations",
        title: "NumPy Operations",
        path: "/learn/numpy/numpy-operations",
        isUnderConstruction: true,
      }
    ],
  }
]