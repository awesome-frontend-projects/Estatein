import {
  RiFacebookFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiYoutubeFill,
  RiHomeLine,
  RiMoneyDollarCircleLine,
  RiRuler2Line,
  RiCalendar2Line,
  RiMapPinLine,
} from "@remixicon/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About Us",
    href: "/about",
  },
  {
    id: 3,
    label: "Properties",
    href: "/properties",
  },
  {
    id: 4,
    label: "Services",
    href: "/services",
  },
];

export const heroStats = [
  {
    id: 1,
    value: 200,
    label: "Happy Customers",
  },
  {
    id: 2,
    value: 10,
    label: "Properties For Clients",
  },
  {
    id: 3,
    value: 16,
    label: "Years of Experience",
  },
];

export const heroBottomItems = [
  {
    id: 1,
    icon: "/images/icon-1.svg",
    label: "Find Your Dream Home",
  },
  {
    id: 2,
    icon: "/images/icon-2.svg",
    label: "Unlock Property Value",
  },
  {
    id: 3,
    icon: "/images/icon-3.svg",
    label: "Effortless Property Management",
  },
  {
    id: 4,
    icon: "/images/icon-4.svg",
    label: "Smart Investments, Informed Decisions",
  },
];

export const featureItems = [
  {
    id: 1,
    img: "/images/prop-1.png",
    title: "Seaside Serenity Villa",
    text: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood...",
    icons: [
      {
        icon: "/images/prop-icon-1.svg",
        label: "4-Bedroom",
      },
      {
        icon: "/images/prop-icon-2.svg",
        label: "3-Bathroom",
      },
      {
        icon: "/images/prop-icon-3.svg",
        label: "Villa",
      },
    ],
    price: 550000,
  },
  {
    id: 2,
    img: "/images/prop-2.png",
    title: "Metropolitan Haven",
    text: "A chic and fully-furnished 2-bedroom apartment with panoramic city views...",
    icons: [
      {
        icon: "/images/prop-icon-1.svg",
        label: "2-Bedroom",
      },
      {
        icon: "/images/prop-icon-2.svg",
        label: "2-Bathroom",
      },
      {
        icon: "/images/prop-icon-3.svg",
        label: "Villa",
      },
    ],
    price: 550000,
  },
  {
    id: 3,
    img: "/images/prop-3.png",
    title: "Rustic Retreat Cottage",
    text: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...",
    icons: [
      {
        icon: "/images/prop-icon-1.svg",
        label: "3-Bedroom",
      },
      {
        icon: "/images/prop-icon-2.svg",
        label: "3-Bathroom",
      },
      {
        icon: "/images/prop-icon-3.svg",
        label: "Villa",
      },
    ],
    price: 550000,
  },
  {
    id: 4,
    img: "/images/prop-4.png",
    title: "Lakeside Luxe Cabin",
    text: "Modern 5-bedroom, 4-bathroom cabin with lake views and smart home features...",
    icons: [
      {
        icon: "/images/prop-icon-1.svg",
        label: "5-Bedroom",
      },
      {
        icon: "/images/prop-icon-2.svg",
        label: "4-Bathroom",
      },
      {
        icon: "/images/prop-icon-3.svg",
        label: "Cabin",
      },
    ],
    price: 750000,
  },
  {
    id: 5,
    img: "/images/prop-5.png",
    title: "Urban Edge Loft",
    text: "Sleek 1-bedroom loft in the heart of downtown with industrial design elements...",
    icons: [
      {
        icon: "/images/prop-icon-1.svg",
        label: "1-Bedroom",
      },
      {
        icon: "/images/prop-icon-2.svg",
        label: "1-Bathroom",
      },
      {
        icon: "/images/prop-icon-3.svg",
        label: "Loft",
      },
    ],
    price: 320000,
  },
  {
    id: 6,
    img: "/images/prop-6.png",
    title: "Countryside Family Home",
    text: "Spacious 4-bedroom, 3-bathroom home with a large backyard and garden space...",
    icons: [
      {
        icon: "/images/prop-icon-1.svg",
        label: "4-Bedroom",
      },
      {
        icon: "/images/prop-icon-2.svg",
        label: "3-Bathroom",
      },
      {
        icon: "/images/prop-icon-3.svg",
        label: "House",
      },
    ],
    price: 495000,
  },
];

export const testimonialsItems = [
  {
    id: 1,
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: "Wade Warren",
    residential: "USA, California",
  },
  {
    id: 2,
    title: "Efficient and Reliable",
    text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    name: "Emelie Thomson",
    residential: "USA, Florida",
  },
  {
    id: 3,
    title: "Trusted Advisors",
    text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    name: "John Mans",
    residential: "USA, Nevada",
  },
  {
    id: 4,
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    name: "Wade Warren",
    residential: "USA, California",
  },
];

export const footerItems = [
  {
    id: 1,
    title: "Home",
    links: [
      {
        label: "Hero Section",
      },
      {
        label: "Features",
      },
      {
        label: "Properties",
      },
      {
        label: "Testimonials",
      },
      {
        label: "FAQ’s",
      },
    ],
  },
  {
    id: 2,
    title: "About Us",
    links: [
      {
        label: "Our Story",
      },
      {
        label: "Our Works",
      },
      {
        label: "How It Works",
      },
      {
        label: "Our Team",
      },
      {
        label: "Our Clients",
      },
    ],
  },
  {
    id: 3,
    title: "Properties",
    links: [
      {
        label: "Portfolio",
      },
      {
        label: "Categories",
      },
    ],
  },
  {
    id: 4,
    title: "Services",
    links: [
      {
        label: "Valuation Mastery",
      },
      {
        label: "Strategic Marketing",
      },
      {
        label: "Negotiation Wizardry",
      },
      {
        label: "Closing Success",
      },
      {
        label: "Property Management",
      },
    ],
  },
  {
    id: 5,
    title: "Contact Us",
    links: [
      {
        label: "Contact Form",
      },
      {
        label: "Our Offices",
      },
    ],
  },
];

export const socialIcons = [
  {
    icon: RiFacebookFill,
  },
  {
    icon: RiLinkedinFill,
  },
  {
    icon: RiTwitterFill,
  },
  {
    icon: RiYoutubeFill,
  },
];

// *********************
//      About page
// *********************

export const valuesItems = [
  {
    id: 1,
    icon: "/images/icon-5.svg",
    title: "Trust",
    text: "Trust is the cornerstone of every successful real estate transaction.",
  },
  {
    id: 2,
    icon: "/images/icon-6.svg",
    title: "Excellence",
    text: "We set the bar high for ourselves. From the properties we list to the services we provide.",
  },
  {
    id: 3,
    icon: "/images/icon-7.svg",
    title: "Client-Centric",
    text: "Your dreams and needs are at the center of our universe. We listen, understand.",
  },
  {
    id: 4,
    icon: "/images/icon-5.svg",
    title: "Our Commitment",
    text: "We are dedicated to providing you with the highest level of service, professionalism",
  },
];

export const achievementItems = [
  {
    id: 1,
    title: "3+ Years of Excellence",
    text: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience.",
  },
  {
    id: 2,
    title: "Happy Clients",
    text: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    id: 3,
    title: "Industry Recognition",
    text: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

export const howItWorksItems = [
  {
    id: 1,
    step: "Step 01",
    title: "Discover a World of Possibilities",
    text: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,",
  },
  {
    id: 2,
    step: "Step 02",
    title: "Narrowing Down Your Choices",
    text: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    id: 3,
    step: "Step 03",
    title: "Personalized Guidance",
    text: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    id: 4,
    step: "Step 04",
    title: "See It for Yourself",
    text: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    id: 5,
    step: "Step 05",
    title: "Making Informed Decisions",
    text: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,",
  },
  {
    id: 6,
    step: "Step 06",
    title: "Getting the Best Deal",
    text: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

export const teamsItems = [
  {
    id: 1,
    img: "/images/team-1.png",
    name: "Max Mitchell",
    role: "Founder",
  },
  {
    id: 2,
    img: "/images/team-2.png",
    name: "Sarah Johnson",
    role: "Chief Real Estate Officer",
  },
  {
    id: 3,
    img: "/images/team-3.png",
    name: "David Brown",
    role: "Head of Property Management",
  },
  {
    id: 4,
    img: "/images/team-4.png",
    name: "Michael Turner",
    role: "Legal Counsel",
  },
];

export const ourClientsItems = [
  {
    id: 1,
    time: "Since 2019",
    company: "ABC Corporation",
    box: [
      {
        subtitle: "Domain",
        title: "Commercial Real Estate",
      },
      {
        subtitle: "Category",
        title: "Luxury Home Development",
      },
    ],

    reason: "What They Said 🤗",
    text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    id: 2,
    time: "Since 2018",
    company: "GreenTech Enterprises",
    box: [
      {
        subtitle: "Domain",
        title: "Commercial Real Estate",
      },
      {
        subtitle: "Category",
        title: "Retail Space",
      },
    ],

    reason: "What They Said 🤗",
    text: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
  {
    id: 3,
    time: "Since 2020",
    company: "UrbanRise Holdings",
    box: [
      {
        subtitle: "Domain",
        title: "Residential Real Estate",
      },
      {
        subtitle: "Category",
        title: "High-Rise Apartments",
      },
    ],
    reason: "What They Said 🤗",
    text: "Estatein guided us through every stage of our high-rise development project. Their knowledge and responsiveness made a complex process smooth and efficient.",
  },
  {
    id: 4,
    time: "Since 2021",
    company: "TechNest Solutions",
    box: [
      {
        subtitle: "Domain",
        title: "Commercial Real Estate",
      },
      {
        subtitle: "Category",
        title: "Innovation Hubs",
      },
    ],
    reason: "What They Said 🤗",
    text: "The Estatein team helped us secure a tech park space that matched our vision perfectly. Their strategic insights were a game-changer.",
  },
  {
    id: 5,
    time: "Since 2017",
    company: "Luxora Group",
    box: [
      {
        subtitle: "Domain",
        title: "Luxury Real Estate",
      },
      {
        subtitle: "Category",
        title: "Private Villas",
      },
    ],
    reason: "What They Said 🤗",
    text: "Estatein brought our dream villa concept to life by finding the ideal location and supporting us through negotiations. They go above and beyond.",
  },
  {
    id: 6,
    time: "Since 2016",
    company: "EcoLife Ventures",
    box: [
      {
        subtitle: "Domain",
        title: "Sustainable Real Estate",
      },
      {
        subtitle: "Category",
        title: "Eco-Friendly Communities",
      },
    ],
    reason: "What They Said 🤗",
    text: "Their commitment to sustainable development aligned perfectly with our mission. Estatein is more than a service provider—they’re a sustainability partner.",
  },
  {
    id: 7,
    time: "Since 2022",
    company: "MetroMall Developers",
    box: [
      {
        subtitle: "Domain",
        title: "Retail Real Estate",
      },
      {
        subtitle: "Category",
        title: "Shopping Malls",
      },
    ],
    reason: "What They Said 🤗",
    text: "From scouting the right plot to finalizing contracts, Estatein made sure we launched our mall on time and within budget. A seamless experience!",
  },
];

// ************************
//       Properties Page
// ************************

// export const filterItems = [
//   {
//     id: 1,
//     icon: RiMapPinLine,
//     label: "Location",
//     options: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
//   },
//   {
//     id: 2,
//     icon: RiHomeLine,
//     label: "Property Type",
//     options: ["Apartment", "Villa", "Office", "Warehouse"],
//   },
//   {
//     id: 3,
//     icon: RiMoneyDollarCircleLine,
//     label: "Pricing Range",
//     options: ["$0 - $100k", "$100k - $300k", "$300k+"],
//   },
//   {
//     id: 4,
//     icon: RiRuler2Line,
//     label: "Property Size",
//     options: ["< 1000 sqft", "1000 - 2000 sqft", "> 2000 sqft"],
//   },
//   {
//     id: 5,
//     icon: RiCalendar2Line,
//     label: "Build Year",
//     options: ["2020+", "2010 - 2019", "Before 2010"],
//   },
// ];

export const propertiesItems = [
  {
    id: 1,
    img: "/images/prop-2.png",
    title: "New York Villa #1",
    text: "A beautiful 1-bedroom, 2-bathroom villa in New York.",
    location: "New York",
    type: "Villa",
    year: 2006,
    price: 545614,
    icons: [
      { icon: "/images/prop-icon-1.svg", label: "1-Bedroom" },
      { icon: "/images/prop-icon-2.svg", label: "2-Bathroom" },
      { icon: "/images/prop-icon-3.svg", label: "Villa" },
    ],
  },
  {
    id: 2,
    img: "/images/prop-3.png",
    title: "Chicago House #2",
    text: "A beautiful 5-bedroom, 4-bathroom house in Chicago.",
    location: "Chicago",
    type: "House",
    year: 2005,
    price: 867726,
    icons: [
      { icon: "/images/prop-icon-1.svg", label: "5-Bedroom" },
      { icon: "/images/prop-icon-2.svg", label: "4-Bathroom" },
      { icon: "/images/prop-icon-3.svg", label: "House" },
    ],
  },
  {
    id: 3,
    img: "/images/prop-4.png",
    title: "Houston Apartment #3",
    text: "A beautiful 2-bedroom, 2-bathroom apartment in Houston.",
    location: "Houston",
    type: "Apartment",
    year: 2008,
    price: 486676,
    icons: [
      { icon: "/images/prop-icon-1.svg", label: "2-Bedroom" },
      { icon: "/images/prop-icon-2.svg", label: "2-Bathroom" },
      { icon: "/images/prop-icon-3.svg", label: "Apartment" },
    ],
  },
  {
    id: 4,
    img: "/images/prop-5.png",
    title: "Houston House #4",
    text: "A beautiful 4-bedroom, 1-bathroom house in Houston.",
    location: "Houston",
    type: "House",
    year: 2020,
    price: 349347,
    icons: [
      { icon: "/images/prop-icon-1.svg", label: "4-Bedroom" },
      { icon: "/images/prop-icon-2.svg", label: "1-Bathroom" },
      { icon: "/images/prop-icon-3.svg", label: "House" },
    ],
  },
  {
    id: 5,
    img: "/images/prop-6.png",
    title: "New York Apartment #5",
    text: "A beautiful 5-bedroom, 1-bathroom apartment in New York.",
    location: "New York",
    type: "Apartment",
    year: 2017,
    price: 780967,
    icons: [
      { icon: "/images/prop-icon-1.svg", label: "5-Bedroom" },
      { icon: "/images/prop-icon-2.svg", label: "1-Bathroom" },
      { icon: "/images/prop-icon-3.svg", label: "Apartment" },
    ],
  },
  {
    id: 6,
    img: "/images/prop-1.png",
    title: "Los Angeles House #6",
    text: "A beautiful 4-bedroom, 4-bathroom house in Los Angeles.",
    location: "Los Angeles",
    type: "House",
    year: 2014,
    price: 712420,
    icons: [
      { icon: "/images/prop-icon-1.svg", label: "4-Bedroom" },
      { icon: "/images/prop-icon-2.svg", label: "4-Bathroom" },
      { icon: "/images/prop-icon-3.svg", label: "House" },
    ],
  },
  {
    id: 7,
    img: "/images/prop-2.png",
    title: "Miami Apartment #7",
    text: "A beautiful 1-bedroom, 2-bathroom apartment in Miami.",
    location: "Miami",
    type: "Apartment",
    year: 2007,
    price: 628782,
    icons: [
      { icon: "/images/prop-icon-1.svg", label: "1-Bedroom" },
      { icon: "/images/prop-icon-2.svg", label: "2-Bathroom" },
      { icon: "/images/prop-icon-3.svg", label: "Apartment" },
    ],
  },
  {
    id: 8,
    img: "/images/prop-3.png",
    title: "Houston Apartment #8",
    text: "A beautiful 5-bedroom, 4-bathroom apartment in Houston.",
    location: "Houston",
    type: "Apartment",
    year: 2010,
    price: 382881,
    icons: [
      { icon: "/images/prop-icon-1.svg", label: "5-Bedroom" },
      { icon: "/images/prop-icon-2.svg", label: "4-Bathroom" },
      { icon: "/images/prop-icon-3.svg", label: "Apartment" },
    ],
  },
  {
    id: 9,
    img: "/images/prop-4.png",
    title: "Miami Villa #9",
    text: "A beautiful 5-bedroom, 1-bathroom villa in Miami.",
    location: "Miami",
    type: "Villa",
    year: 2009,
    price: 757213,
    icons: [
      { icon: "/images/prop-icon-1.svg", label: "5-Bedroom" },
      { icon: "/images/prop-icon-2.svg", label: "1-Bathroom" },
      { icon: "/images/prop-icon-3.svg", label: "Villa" },
    ],
  },
  {
    id: 10,
    img: "/images/prop-5.png",
    title: "Los Angeles Villa #10",
    text: "A beautiful 1-bedroom, 2-bathroom villa in Los Angeles.",
    location: "Los Angeles",
    type: "Villa",
    year: 2011,
    price: 859229,
    icons: [
      { icon: "/images/prop-icon-1.svg", label: "1-Bedroom" },
      { icon: "/images/prop-icon-2.svg", label: "2-Bathroom" },
      { icon: "/images/prop-icon-3.svg", label: "Villa" },
    ],
  },
];
