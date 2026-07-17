export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedIn: string;
  imageSrc: string;
  imageAlt: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "nikhil-shah",
    name: "Nikhil Shah",
    role: "Founder",
    bio: "With over 18 years of experience in the financial services industry, Nikhil brings deep expertise in mutual funds, wealth creation, and market dynamics. As the driving force behind NKS Invest, he has built long-standing relationships with families, business owners, and investors through a trust-first advisory approach. His extensive market knowledge and disciplined investment philosophy help clients make informed financial decisions aligned with their long-term goals.",
    linkedIn: "#",
    imageSrc: "/team/nikhil.jpeg",
    imageAlt: "Nikhil Shah - Founder",
  },
  {
    id: "shubham-shah",
    name: "Shubham Shah",
    role: "Co-Founder & Chief Growth Officer",
    bio: "Shubham leads the growth, brand, and strategic expansion initiatives at NKS Invest. He is responsible for building the firm's market presence, client acquisition systems, strategic partnerships, and overall growth strategy. He has done his MBA from IIM Kashipur and leads a sales function at one of the country's unicorn fintech companies.",
    linkedIn: "#",
    imageSrc: "/team/shubham.jpeg",
    imageAlt: "Shubham Shah - Co-Founder & Chief Growth Officer",
  },
  {
    id: "pradhuman-shah",
    name: "Pradhuman Kumar Shah",
    role: "Co-Founder & Client Relations Head",
    bio: "With over 35 years of experience in the insurance sector, Pradhuman has built lasting relationships based on trust, service, and integrity. He guides clients in making informed insurance decisions and supports the team with his practical industry knowledge and client-first approach. His mentorship remains an important pillar of NKS Invest's commitment to long-term client relationships.",
    linkedIn: "#",
    imageSrc: "/team/pradhuman.jpeg",
    imageAlt: "Pradhuman Kumar Shah - Co-Founder & Client Relations Head",
  },
  {
    id: "karnika",
    name: "Karnika",
    // TODO: confirm Karnika's full name, designation and bio with the client.
    role: "Team Member",
    bio: "Profile details coming soon.",
    linkedIn: "#",
    imageSrc: "/team/karnika.jpeg",
    imageAlt: "Karnika - NKS Invest",
  },
];
