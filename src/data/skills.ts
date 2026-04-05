export interface Skill {
  name: string;
  category: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'HTML & CSS', category: 'Frontend' },
  { name: 'Astro', category: 'Frontend' },

  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'REST APIs', category: 'Backend' },
  { name: 'GraphQL', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Backend' },

  // Tools & Practices
  { name: 'Git', category: 'Tools' },
  { name: 'CI/CD', category: 'Tools' },
  { name: 'Testing', category: 'Tools' },
  { name: 'Performance', category: 'Tools' },
  { name: 'Accessibility', category: 'Tools' },
];

export function groupByCategory(skills: Skill[]): Record<string, Skill[]> {
  return skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );
}
