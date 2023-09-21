import {
  IconCode,
  IconCoin,
  IconBook,
  IconFingerprint,
  IconChartPie3,
  IconNotification,
} from "@tabler/icons-react";

const blogsCategories = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

const blogData = [
  {
    blogID:'dsaijbbqoihw19u2981',
    image:
      "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    title: "Verudela Beach",
    description:
      "Completely renovated for the season 2020, Arena Verudela Beach Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    date: "September 5, 2023",
    category: "Space and Astronomy",
    tags: [
      { label: "Sunny weather" },
      { label: "Onsite zoo" },
      { label: "Sea" },
      { label: "Nature" },
      { label: "Water sports" },
    ],
    comments: [
      {
        email: "mock@gmail.com",
        name: "Alice",
        timestamp: "September 6, 2023",
        content: "This place looks amazing! I can't wait to visit.",
      },
      {
        id: "2",
        name: "Bob",
        timestamp: "September 7, 2023",
        content: "I went there last summer, and it was fantastic!",
      },
    ],
    qa: [
      {
        email: "mock@gmail.com",
        name: "Alice",
        question: "Is there a restaurant nearby?",
        answer: "Yes, there are several restaurants within walking distance.",
      },
      {
        email: "mock@gmail.com",
        name: "Bob",
        question: "Are pets allowed?",
        answer:
          "Yes, pets are allowed in some apartments. Make sure to check with the hotel.",
      },
    ],
  },
];

const pages = [
  { name: "Home", url: "" },
  { name: "Account", url: "" },
  { name: "Login", url: "" },
  { name: "Sign Up", url: "" },
  { name: "My Blogs", url: "" },
  { name: "Upload", url: "" },
  { name: "", url: "" },
];

export { blogsCategories, blogData };
