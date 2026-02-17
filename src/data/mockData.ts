export interface Gig {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  deliveryDays: number;
  rating: number;
  reviewCount: number;
  image: string;
  freelancer: {
    name: string;
    avatar: string;
    level: string;
  };
  tags: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  gigCount: number;
}

export const categories: Category[] = [
  { id: "1", name: "Web Development", icon: "🌐", gigCount: 1240 },
  { id: "2", name: "Graphic Design", icon: "🎨", gigCount: 980 },
  { id: "3", name: "Content Writing", icon: "✍️", gigCount: 756 },
  { id: "4", name: "Video Editing", icon: "🎬", gigCount: 534 },
  { id: "5", name: "Digital Marketing", icon: "📈", gigCount: 892 },
  { id: "6", name: "Mobile Apps", icon: "📱", gigCount: 678 },
  { id: "7", name: "AI & ML", icon: "🤖", gigCount: 445 },
  { id: "8", name: "Music & Audio", icon: "🎵", gigCount: 312 },
];

export const gigs: Gig[] = [
  {
    id: "1",
    title: "I will build a modern responsive website using React and Tailwind",
    description: "Professional full-stack developer with 5+ years of experience building scalable web applications. I specialize in React, Next.js, and modern CSS frameworks.",
    category: "Web Development",
    price: 150,
    deliveryDays: 5,
    rating: 4.9,
    reviewCount: 234,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    freelancer: { name: "Alex Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", level: "Top Rated" },
    tags: ["React", "Tailwind", "Next.js"],
  },
  {
    id: "2",
    title: "I will design a stunning brand identity and logo for your business",
    description: "Award-winning designer creating unique visual identities that make brands stand out. Includes logo, color palette, and brand guidelines.",
    category: "Graphic Design",
    price: 200,
    deliveryDays: 7,
    rating: 5.0,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop",
    freelancer: { name: "Sarah Miller", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", level: "Top Rated" },
    tags: ["Logo", "Branding", "Identity"],
  },
  {
    id: "3",
    title: "I will write SEO-optimized blog posts and website content",
    description: "Experienced content writer specializing in tech, SaaS, and digital marketing niches. All content is original, well-researched, and SEO-friendly.",
    category: "Content Writing",
    price: 75,
    deliveryDays: 3,
    rating: 4.8,
    reviewCount: 312,
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    freelancer: { name: "James Wilson", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", level: "Level 2" },
    tags: ["SEO", "Blog", "Copywriting"],
  },
  {
    id: "4",
    title: "I will create professional video editing and motion graphics",
    description: "Cinematic video editing with color grading, transitions, and motion graphics. Perfect for YouTube, social media, and corporate videos.",
    category: "Video Editing",
    price: 250,
    deliveryDays: 5,
    rating: 4.7,
    reviewCount: 156,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop",
    freelancer: { name: "Maria Garcia", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", level: "Top Rated" },
    tags: ["Premiere Pro", "After Effects", "YouTube"],
  },
  {
    id: "5",
    title: "I will develop a cross-platform mobile app with React Native",
    description: "Full-stack mobile developer building beautiful, performant apps for iOS and Android using React Native and Expo.",
    category: "Mobile Apps",
    price: 500,
    deliveryDays: 14,
    rating: 4.9,
    reviewCount: 98,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    freelancer: { name: "David Park", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", level: "Level 2" },
    tags: ["React Native", "iOS", "Android"],
  },
  {
    id: "6",
    title: "I will run Facebook and Instagram ad campaigns for your business",
    description: "Digital marketing expert with proven ROI. I'll set up, manage, and optimize your social media advertising campaigns.",
    category: "Digital Marketing",
    price: 300,
    deliveryDays: 7,
    rating: 4.6,
    reviewCount: 201,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    freelancer: { name: "Emma Thompson", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", level: "Top Rated" },
    tags: ["Facebook Ads", "Instagram", "PPC"],
  },
  {
    id: "7",
    title: "I will build a custom AI chatbot for your website",
    description: "ML engineer specializing in NLP and conversational AI. I build intelligent chatbots that improve customer experience and automate support.",
    category: "AI & ML",
    price: 800,
    deliveryDays: 10,
    rating: 5.0,
    reviewCount: 67,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    freelancer: { name: "Raj Patel", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face", level: "Top Rated" },
    tags: ["ChatGPT", "NLP", "Python"],
  },
  {
    id: "8",
    title: "I will produce professional music and podcast editing",
    description: "Audio engineer with 8+ years of studio experience. Mixing, mastering, podcast editing, and sound design for any project.",
    category: "Music & Audio",
    price: 120,
    deliveryDays: 4,
    rating: 4.8,
    reviewCount: 143,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop",
    freelancer: { name: "Lisa Brown", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", level: "Level 2" },
    tags: ["Mixing", "Mastering", "Podcast"],
  },
];

export interface Order {
  id: string;
  gigTitle: string;
  buyer: string;
  seller: string;
  status: "Pending" | "In Progress" | "Delivered" | "Completed";
  price: number;
  date: string;
}

export const orders: Order[] = [
  { id: "ORD-001", gigTitle: "Modern React Website", buyer: "John D.", seller: "Alex Chen", status: "In Progress", price: 150, date: "2026-02-15" },
  { id: "ORD-002", gigTitle: "Brand Identity Design", buyer: "Alice K.", seller: "Sarah Miller", status: "Completed", price: 200, date: "2026-02-10" },
  { id: "ORD-003", gigTitle: "SEO Blog Posts (5x)", buyer: "Mark R.", seller: "James Wilson", status: "Delivered", price: 75, date: "2026-02-13" },
  { id: "ORD-004", gigTitle: "YouTube Video Editing", buyer: "Sophie L.", seller: "Maria Garcia", status: "Pending", price: 250, date: "2026-02-16" },
];
