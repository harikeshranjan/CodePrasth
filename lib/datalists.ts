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
    id: "dsa",
    title: "DSA",
    description: "Data Structures and Algorithms are the building blocks of computer science.",
    path: "/reference/dsa/arrays",
    isUnderConstruction: true,
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

export const dsaSidebarLinks = [
  {
    id: "data-structures",
    heading: "Data Structures",
    content: [
      {
        id: "arrays",
        title: "Arrays",
        path: "/reference/dsa/arrays",
        isUnderConstruction: false,
      },
      {
        id: "strings",
        title: "Strings",
        path: "/reference/dsa/strings",
        isUnderConstruction: false,
      },
      {
        id: "linked-list",
        title: "Linked List",
        path: "/reference/dsa/linked-list",
        isUnderConstruction: false,
      }, 
      {
        id: "stack",
        title: "Stack",
        path: "/reference/dsa/stack",
        isUnderConstruction: false,
      },
      {
        id: "queue",
        title: "Queue",
        path: "/reference/dsa/queue",
        isUnderConstruction: false,
      }, 
      {
        id: "tree",
        title: "Tree",
        path: "/reference/dsa/tree",
        isUnderConstruction: false,
      },
      {
        id: "graph",
        title: "Graph",
        path: "/reference/dsa/graph",
        isUnderConstruction: false,
      },
      {
        id: "hash-table",
        title: "Hash Table",
        path: "/reference/dsa/hash-table",
        isUnderConstruction: false,
      },
      {
        id: "heap",
        title: "Heap",
        path: "/reference/dsa/heap",
        isUnderConstruction: false,
      },
      {
        id: "trie",
        title: "Trie",
        path: "/reference/dsa/trie",
        isUnderConstruction: false,
      },
    ]
  },
  {
    id: "algorithms",
    heading: "Algorithms",
    content: [
      {
        id: "searching",
        title: "Searching",
        path: "/reference/dsa/searching",
        isUnderConstruction: false,
      },
      {
        id: "sorting",
        title: "Sorting",
        path: "/reference/dsa/sorting",
        isUnderConstruction: true,
      },
      {
        id: "dynamic-programming",
        title: "Dynamic Programming",
        path: "/reference/dsa/dynamic-programming",
        isUnderConstruction: true,
      },
      {
        id: "greedy",
        title: "Greedy",
        path: "/reference/dsa/greedy",
        isUnderConstruction: true,
      },
      {
        id: "backtracking",
        title: "Backtracking",
        path: "/reference/dsa/backtracking",
        isUnderConstruction: true,
      },
      {
        id: "divide-and-conquer",
        title: "Divide and Conquer",
        path: "/reference/dsa/divide-and-conquer",
        isUnderConstruction: true,
      },
      {
        id: "bit-manipulation",
        title: "Bit Manipulation",
        path: "/reference/dsa/bit-manipulation",
        isUnderConstruction: true,
      }
    ],
  }
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
        isUnderConstruction: false,
      }
    ],
  }
]