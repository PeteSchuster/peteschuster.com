export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  icon: string;
}

export const socials: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/peterschuster',
    label: 'GitHub',
    icon: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/peteschuster',
    label: 'LinkedIn',
    icon: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  },
  {
    platform: 'soundcloud',
    url: 'https://soundcloud.com/pete-schuster',
    label: 'SoundCloud',
    icon: '<path d="M2 14.5A2.5 2.5 0 0 1 4.5 12H5V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8h1V6a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6h1V8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v4h.5a2.5 2.5 0 0 1 0 5h-13A2.5 2.5 0 0 1 2 14.5Z"/>',
  },
  {
    platform: 'twitch',
    url: 'https://twitch.tv/peteschuster',
    label: 'Twitch',
    icon: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"/>',
  },
];
