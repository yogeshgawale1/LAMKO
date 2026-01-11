// Mock data for LAMKO website

export const companyInfo = {
  name: "LAMKO",
  tagline: "Innovation Bridge for Advanced Materials",
  description: "Technology-driven innovation bridge connecting Korean R&D with world-class manufacturing",
  location: "Seoul, South Korea",
  email: "contact@lamko.com",
  phone: "+82-2-XXXX-XXXX",
  address: "Seoul, South Korea"
};

export const heroContent = {
  title: "Bridging Innovation to Production",
  subtitle: "High-Performance Materials for Semiconductor, Display & Specialty Chemical Industries",
  description: "LAMKO connects cutting-edge Korean R&D with world-class manufacturing capabilities through our unique 'light CDMO' model.",
  cta: "Discover Our Technology",
  image: "https://images.unsplash.com/photo-1532186773960-85649e5cb70b"
};

export const aboutContent = {
  whoWeAre: {
    title: "Who We Are",
    content: "LAMKO is a technology-driven innovation bridge, strategically headquartered in Seoul. We specialize in the development and commercialisation of high-performance materials for the semiconductor, display, and speciality chemical industries."
  },
  coreFunction: {
    title: "Our Core Function",
    subtitle: "The Innovation Gateway",
    description: "We connect cutting-edge Korean R&D and market demand with world-class manufacturing capabilities. Our unique 'light CDMO' model focuses on the high-value front end of the chain."
  },
  goal: {
    title: "Our Goal",
    content: "To de-risk the innovation to production journey, providing our manufacturing partners with a seamless, pre-validated pipeline of advanced projects, ready for scale."
  },
  clients: ["Samsung", "SK Hynix", "LG", "Dongwoo", "Dongjin"]
};

export const services = [
  {
    id: 1,
    title: "Innovation Gateway",
    description: "We connect cutting-edge Korean R&D and market demand with world-class manufacturing capabilities.",
    image: "https://images.unsplash.com/photo-1766297247924-6638d54e7c89",
    benefits: [
      "Bridge between R&D and manufacturing",
      "Light CDMO model focusing on high-value front end",
      "Risk mitigation for production scale-up",
      "Seamless technology transfer"
    ],
    forWhom: "Manufacturing partners seeking validated, ready-to-scale advanced projects"
  },
  {
    id: 2,
    title: "Client-Led R&D",
    description: "We work directly with top Korean tech firms to develop new products and technology.",
    image: "https://images.unsplash.com/photo-1766297246906-210617be31a4",
    benefits: [
      "Direct collaboration with Samsung, SK Hynix, LG, Dongwoo, Dongjin",
      "Custom product development",
      "Technology innovation partnerships",
      "Market-driven solutions"
    ],
    forWhom: "Leading Korean technology companies requiring specialized materials development"
  },
  {
    id: 3,
    title: "Process Intensification & Purification",
    description: "We perfect chemical processes for yield, cost, and scalability in our labs.",
    image: "https://images.pexels.com/photos/35609693/pexels-photo-35609693.jpeg",
    benefits: [
      "Electronics-grade quality achievement",
      "Final purification in Korea",
      "Direct client troubleshooting",
      "Optimized yield and cost efficiency"
    ],
    forWhom: "Clients requiring precision purification and process optimization for electronics materials"
  }
];

export const industries = [
  {
    id: 1,
    name: "Semiconductor",
    description: "Advanced materials and chemicals for semiconductor manufacturing processes, enabling next-generation chip production.",
    image: "https://images.unsplash.com/photo-1760842543741-876d7837fa0b",
    applications: [
      "Photoresists and specialty chemicals",
      "High-purity process materials",
      "Advanced packaging materials",
      "Etch and deposition chemistries"
    ],
    outcomes: "Faster time-to-market, reduced production risk, electronics-grade purity"
  },
  {
    id: 2,
    name: "Display",
    description: "Cutting-edge materials for OLED, LCD, and next-generation display technologies.",
    image: "https://images.unsplash.com/photo-1765256931287-e7f0e36b9ba4",
    applications: [
      "OLED materials and intermediates",
      "LCD specialty chemicals",
      "Display coating materials",
      "Color filter components"
    ],
    outcomes: "Enhanced display performance, cost-optimized production, innovation acceleration"
  },
  {
    id: 3,
    name: "Specialty Chemicals",
    description: "High-performance specialty chemicals for diverse industrial applications.",
    image: "https://images.pexels.com/photos/3665442/pexels-photo-3665442.jpeg",
    applications: [
      "Advanced intermediates",
      "High-purity materials",
      "Custom synthesis solutions",
      "Process optimization"
    ],
    outcomes: "Superior quality, scalable processes, reliable supply chain"
  },
  {
    id: 4,
    name: "Personal Care Actives",
    description: "Premium active ingredients for cosmetic and personal care applications.",
    image: "https://images.unsplash.com/photo-1764694187667-f28a05a52c0e",
    applications: [
      "Active cosmetic ingredients",
      "Skincare formulation components",
      "Premium personal care materials",
      "Innovation-driven actives"
    ],
    outcomes: "High efficacy, proven safety, market differentiation"
  }
];

export const lumoraContent = {
  name: "Lumora",
  tagline: "Premium Personal Care Innovation",
  description: "Lumora represents LAMKO's commitment to excellence in personal care actives. Through advanced research and development, we create premium active ingredients that set new standards in cosmetic and skincare applications.",
  image: "https://images.pexels.com/photos/7321353/pexels-photo-7321353.jpeg",
  features: [
    "Scientifically validated active ingredients",
    "Premium quality and purity standards",
    "Innovation-driven formulation support",
    "Sustainable sourcing practices"
  ],
  externalLink: "https://lumora.example.com",
  cta: "Visit Lumora Website"
};

export const contactForm = {
  title: "Let's Discuss Your Project",
  subtitle: "Share a brief summary of your R&D or scale-up challenge",
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "company", label: "Company", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: false },
    { name: "project", label: "Project Description", type: "textarea", required: true }
  ]
};

export const stats = [
  { label: "Years of Excellence", value: "15+" },
  { label: "Korean Tech Partners", value: "5+" },
  { label: "Industries Served", value: "4" },
  { label: "Projects Delivered", value: "100+" }
];
