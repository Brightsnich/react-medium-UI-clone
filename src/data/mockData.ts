export interface Article {
  id: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  publication?: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  date: string;
  readTime: number;
  claps: number;
  responses: number;
}

export const mockArticles: Article[] = [
  {
    id: '1',
    author: { name: 'Jane Doe', avatarUrl: 'https://i.pravatar.cc/40?u=a042581f4e29026704d' },
    publication: 'UX Collective',
    title: 'The Art of Component Architecture in React',
    subtitle: 'Discover how to structure your React applications for scalability and maintainability.',
    imageUrl: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?w=500&q=80',
    date: 'Sep 25',
    readTime: 7,
    claps: 1200,
    responses: 45,
  },
  {
    id: '2',
    author: { name: 'John Smith', avatarUrl: 'https://i.pravatar.cc/40?u=a042581f4e29026705d' },
    publication: 'Towards Data Science',
    title: 'A Deep Dive into Styled Components',
    subtitle: 'Unlocking the full potential of CSS-in-JS for beautiful and dynamic user interfaces.',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&q=80',
    date: 'Sep 24',
    readTime: 10,
    claps: 3400,
    responses: 89,
  },
  {
    id: '3',
    author: { name: 'Alex Johnson', avatarUrl: 'https://i.pravatar.cc/40?u=a042581f4e29026706d' },
    title: 'The Rise of Serverless: A 2025 Perspective',
    subtitle: 'How serverless architecture is changing the way we build and deploy applications.',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&q=80',
    date: 'Sep 23',
    readTime: 5,
    claps: 876,
    responses: 12,
  },
  {
    id: '4',
    author: { name: 'Samantha Lee', avatarUrl: 'https://i.pravatar.cc/40?u=a042581f4e29026707d' },
    publication: 'JS in Plain English',
    title: 'Mastering TypeScript for Large-Scale Projects',
    subtitle: 'Best practices for maintaining a clean and scalable codebase with TypeScript.',
    imageUrl: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&q=80',
    date: 'Sep 22',
    readTime: 12,
    claps: 5100,
    responses: 150,
  },
  {
    id: '5',
    author: { name: 'Michael Chen', avatarUrl: 'https://i.pravatar.cc/40?u=michael' },
    title: 'Why I’m Breaking Up With My Standing Desk',
    subtitle: 'A story of love, loss, and lower back pain in the remote work era.',
    imageUrl: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=500&q=80',
    date: 'Sep 21',
    readTime: 4,
    claps: 455,
    responses: 33,
  },
  {
    id: '6',
    author: { name: 'Emily Rodriguez', avatarUrl: 'https://i.pravatar.cc/40?u=emily' },
    publication: 'The Startup',
    title: '10 Side Hustles That Pay More Than My Day Job',
    subtitle: 'From niche newsletters to custom GPTs, the creator economy is booming.',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&q=80',
    date: 'Sep 20',
    readTime: 8,
    claps: 2200,
    responses: 98,
  },
];

export interface StaffPick {
  id: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  publication?: string;
  title: string;
  date: string;
}

export const staffPicks: StaffPick[] = [
  {
    id: 'sp1',
    author: { name: 'Casey Newton', avatarUrl: 'https://i.pravatar.cc/40?u=casey' },
    publication: 'Platformer',
    title: 'The Platformer’s Dilemma',
    date: 'Sep 25',
  },
  {
    id: 'sp2',
    author: { name: 'Will Oremus', avatarUrl: 'https://i.pravatar.cc/40?u=will' },
    title: 'The AI-Powered Search Engine Is Here',
    date: 'Sep 24',

  },
  {
    id: 'sp3',
    author: { name: 'Umair Haque', avatarUrl: 'https://i.pravatar.cc/40?u=umair' },
    title: 'Why the Age of the Influencer Is Over',
    date: 'Sep 22',
  },
];

export interface FollowSuggestion {
  id: string;
  name: string;
  avatarUrl: string;
  description: string;
}

export const whoToFollow: FollowSuggestion[] = [
  {
    id: 'follow1',
    name: 'Barack Obama',
    avatarUrl: 'https://i.pravatar.cc/48?u=obama',
    description: 'Dad, husband, President, citizen.',
  },
  {
    id: 'follow2',
    name: 'Devon Price',
    avatarUrl: 'https://i.pravatar.cc/48?u=devon',
    description: 'Social psychologist, author of Laziness Does Not Exist & Unmasking Autism.',
  },
  {
    id: 'follow3',
    name: 'Scott Galloway',
    avatarUrl: 'https://i.pravatar.cc/48?u=scott',
    description: 'Professor of Marketing at NYU Stern. Serial entrepreneur.',
  },
];