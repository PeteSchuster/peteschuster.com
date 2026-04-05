export interface InterestItem {
  name: string;
  note?: string;
}

export interface InterestCategory {
  label: string;
  emoji: string;
  items: InterestItem[];
}

export const interests: InterestCategory[] = [
  {
    label: 'Movies',
    emoji: '🎬',
    items: [
      { name: 'Blade Runner 2049' },
      { name: 'The Social Network' },
      { name: 'Interstellar' },
      { name: 'Parasite' },
      { name: 'Drive' },
      { name: 'No Country for Old Men' },
    ],
  },
  {
    label: 'Music',
    emoji: '🎵',
    items: [
      { name: 'Radiohead' },
      { name: 'Tame Impala' },
      { name: 'Bon Iver' },
      { name: 'Aphex Twin' },
      { name: 'Khruangbin' },
      { name: 'Mac DeMarco' },
    ],
  },
  {
    label: 'Video Games',
    emoji: '🎮',
    items: [
      { name: 'The Last of Us' },
      { name: 'Elden Ring' },
      { name: 'Celeste' },
      { name: 'Hades' },
      { name: 'Red Dead Redemption 2' },
      { name: 'Disco Elysium' },
    ],
  },
];
