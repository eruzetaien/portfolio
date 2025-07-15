export interface QuestData {
  title: string;
  description: string;
  progress: number;
  rewardImageSrc?: string;
  link?:string;
}

export const questTabs = [
  { key: "ml", label: "Machine Learning" },
  { key: "software", label: "Software Development" },
];

export const questItems: Record<string, QuestData[]> = {
  ml: [
    {
      title: "Dynamic Pricing with Q-Learning",
      description:
        "Use Q-Learning and DQN to build adaptive pricing agents that learn under demand uncertainty, aiming to outperform traditional optimization methods",
      progress: 100,
    },
    {
      title: "Reranking Time Magazine Search Results",
      description:
        "Use information retrieval methods to improve how well search results match user intent",
      progress: 100,
    },
    {
      title: "Rempahpedia",
      description:
        "Leverage transfer learning to build an accurate spice recognition model",
      progress: 100,
    },
    {
      title: "Flood Image Segmentation",
      description:
        "Segment flood images and compare the performance of mathematical morphology and deep learning methods using the U-Net architecture",
      progress: 100,
    },
    {
      title: "Text Mining in Spotify Review",
      description:
        "Analyze Spotify reviews using CRISP-DM to build score prediction models with both traditional ML and deep learning approaches",
      progress: 100,
    },
    {
      title: "Flight Delay Data Analysis",
      description:
        "Analyze flight delays by predicting causes and takeoff times, and segment customers using K-Means and DBSCAN clustering",
      progress: 100,
    },
  ],
  software: [
    {
      title: "Portfolio",
      description:
        "Design a portfolio website using gamification concepts to make it more attractive and engaging",
      progress: 50,
      rewardImageSrc: "src/assets/game-icons/reward.svg",
      link: "https://github.com/eruzetaien/portfolio"
    },
    {
      title: "Monolith-to-Microservices Code Transformation",
      description:
        "Automate code artifact transformation from monolith to microservices in a software product line, using RabbitMQ for async communication",
      progress: 100,
    },
    {
      title: "Ponegraph Music",
      description:
        "Build a Semantic Web for music by integrating artist and song datasets into RDF triples stored in GraphDB, and linking them with remote data from the DBpedia",
      progress: 100,
    },
        {
      title: "Hafiz Helper",
      description:
        "Develop a Qur’an recitation mobile app with React Native and Django. Test with Jest, integrate with SonarCloud, and monitor services using Prometheus and Grafana",
      progress: 100,
    },
    {
      title: "Gacha-aaS",
      description:
        "Develop Gacha-aaS with Golang microservices using the CQRS pattern and React, providing APIs to manage characters and perform gacha",
      progress: 100,
    },
    {
      title: "LaundryEase",
      description:
        "Develop a laundry service app with manager and customer roles using Nest.js and Next.js, with PostgreSQL and Prisma for database management.",
      progress: 100,
    },
    {
      title: "SeKelas",
      description:
        "Build a microservices-based classroom management app, featuring a quiz service built with Spring Boot and Next.js, deployed on GCP with GitLab CI/CD",
      progress: 100,
    },

  ],
};
