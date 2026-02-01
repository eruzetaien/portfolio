export const playerData = { 
  name: "Ruzain", 
  job: "Backend Developer", 
  level: 18,
  xp: 5500,
  maxXp: 22500,
};
export const playerPersonality = {
  neuroticism: {
    label: "Neuroticism",
    color: "#F87171", // (Tailwind red-400)
    score: 55,
    facets: {
      anxiety: { value: 6, label: "Anxiety" },
      anger: { value: 7, label: "Anger" },
      depression: { value: 8, label: "Depression" },
      selfConsciousness: { value: 16, label: "Self-Consciousness" },
      immoderation: { value: 8, label: "Immoderation" },
      vulnerability: { value: 10, label: "Vulnerability" },
    },
  },
  extraversion: {
    label: "Extraversion",
    color: "#FBBF24", // (Tailwind yellow-400)
    score: 80,
    facets: {
      friendliness: { value: 16, label: "Friendliness" },
      gregariousness: { value: 9, label: "Gregariousness" },
      assertiveness: { value: 16, label: "Assertiveness" },
      activityLevel: { value: 11, label: "Activity Level" },
      excitementSeeking: { value: 11, label: "Excitement Seeking" },
      cheerfulness: { value: 17, label: "Cheerfulness" },
    },
  },
  openness: {
    label: "Openness To Experience",
    color: "#60A5FA", // (Tailwind blue-400)
    score: 82,
    facets: {
      imagination: { value: 15, label: "Imagination" },
      artisticInterests: { value: 18, label: "Artistic Interests" },
      emotionality: { value: 15, label: "Emotionality" },
      adventurousness: { value: 10, label: "Adventurousness" },
      intellect: { value: 13, label: "Intellect" },
      liberalism: { value: 11, label: "Liberalism" },
    },
  },
  agreeableness: {
    label: "Agreeableness",
    color: "#34D399", //  (Tailwind emerald-400)
    score: 88,
    facets: {
      trust: { value: 10, label: "Trust" },
      morality: { value: 13, label: "Morality" },
      altruism: { value: 17, label: "Altruism" },
      cooperation: { value: 19, label: "Cooperation" },
      modesty: { value: 14, label: "Modesty" },
      sympathy: { value: 15, label: "Sympathy" },
    },
  },
  conscientiousness: {
    label: "Conscientiousness",
    color: "#A78BFA", // (Tailwind violet-400)
    score: 96,
    facets: {
      selfEfficacy: { value: 17, label: "Self-Efficacy" },
      orderliness: { value: 13, label: "Orderliness" },
      dutifulness: { value: 20, label: "Dutifulness" },
      achievementStriving: { value: 17, label: "Achievement-Striving" },
      selfDiscipline: { value: 15, label: "Self-Discipline" },
      cautiousness: { value: 14, label: "Cautiousness" },
    },
  },
};
