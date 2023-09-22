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
    blogID: "dsaijbbqoihw19u2981",
    PublishedDate: "22/09/2023",
    title: "Mindfulnesse",
    blogContent: (
      <div>
        <h2>What Is Mindfulness?</h2>
        <p>
          Mindfulness is a practice rooted in ancient Buddhist traditions, but
          it has gained significant popularity in recent years as a secular and
          scientific approach to well-being. At its core, mindfulness is about
          paying purposeful attention to the present moment without judgment.
          It's about being fully engaged in whatever you are doing, whether it's
          eating, walking, or simply breathing.
        </p>
        <p>The Benefits of Mindfulness:</p>
        <ol>
          <li>
            Reduced Stress: Mindfulness can help reduce the impact of stress on
            your body and mind. By staying present and not dwelling on past
            regrets or future worries, you can experience a greater sense of
            calm and equanimity.
          </li>
          <li>
            Improved Mental Health: Studies have shown that mindfulness can be
            an effective tool for managing conditions like anxiety, depression,
            and post-traumatic stress disorder (PTSD). It allows individuals to
            observe their thoughts and emotions without getting entangled in
            them.
          </li>
          <li>
            Enhanced Focus and Productivity: Practicing mindfulness can sharpen
            your concentration and boost productivity. When you're fully engaged
            in a task, you're less likely to be distracted by irrelevant
            thoughts or external stimuli.
          </li>
          <li>
            Better Relationships: Mindfulness can improve your relationships by
            enhancing your ability to listen actively and empathize with others.
            It helps you become more attuned to the needs and feelings of those
            around you.
          </li>
          <li>
            Greater Self-Awareness: By regularly tuning into your thoughts and
            emotions, you gain a deeper understanding of yourself. This
            self-awareness can lead to personal growth and positive changes in
            your life.
          </li>
        </ol>
        <p>
          <a href="www.google.com" rel="noopener noreferrer" target="_blank">
            <u>How to Practice Mindfulness:</u>
          </a>
        </p>
        <ol>
          <li>
            Start with Breath Awareness: A simple way to begin practicing
            mindfulness is by focusing on your breath. Sit or lie down in a
            comfortable position and pay attention to the sensation of your
            breath as it goes in and out. When your mind wanders (which it
            inevitably will), gently bring your focus back to your breath.
          </li>
          <li>
            Engage in Everyday Activities Mindfully: You don't need to set aside
            specific meditation time to practice mindfulness. You can
            incorporate it into your daily routine by doing things like eating,
            walking, or driving with full awareness.
          </li>
          <li>
            Use Guided Meditations: Many apps and websites offer guided
            mindfulness meditations. These can be helpful, especially if you're
            new to the practice.
          </li>
          <li>
            Be Patient and Kind to Yourself: Mindfulness is a skill that takes
            time to develop. It's normal to have a busy mind and find it
            challenging to stay present. Approach yourself with compassion and
            patience as you continue your practice.
          </li>
        </ol>
        <p>Conclusion:</p>
        <p>
          <em>
            Mindfulness is a powerful tool that can transform your life by
            helping you embrace the present moment. Its benefits extend beyond
            reducing stress and improving mental health; it can lead to a deeper
            understanding of yourself, better relationships, and increased
            overall well-being. As you embark on your mindfulness journey,
            remember that it's a practice, not a destination. With time and
            dedication, you can experience the profound positive changes it can
            bring to your life.
          </em>
        </p>
      </div>
    ),
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
