import {
  LogoAWS,
  LogoDigitalOcean,
  LogoDotNet,
  LogoFastAPI,
  LogoFirestore,
  LogoFlask,
  LogoFlutter,
  LogoKafka,
  LogoMongoDB,
  LogoNestJs,
  LogoNextjs,
  LogoReact,
  LogoSpring,
  LogoTailwindCSS,
  LogoVercel
} from "@/components";

export const TECH_STACK = [
  {
    title: "Front-end",
    items: [
      {
        logo: <LogoNextjs className="h-12 w-12" />,
        name: "Next.js",
      },
      {
        logo: <LogoReact className="h-12 w-12" />,
        name: "React",
      },
      {
        logo: <LogoTailwindCSS className="h-12 w-12" />,
        name: "Tailwind CSS",
      },
      {
        logo: <LogoFlutter className="h-12 w-12" />,
        name: "Flutter",
      },
    ],
  },
  {
    title: "Back-end",
    items: [
      {
        logo: <LogoFastAPI className="h-12 w-12" />,
        name: "FastAPI",
      },
      {
        logo: <LogoFlask className="h-12 w-12" />,
        name: "Flask",
      },
      {
        logo: <LogoNestJs className="h-12 w-12" />,
        name: "NestJs",
      },
      {
        logo: <LogoDotNet className="h-12 w-12" />,
        name: ".NET",
      },
      {
        logo: <LogoSpring className="h-12 w-12" />,
        name: "Spring Boot",
      },
    ],
  },
  {
    title: "Cloud",
    items: [
      {
        logo: <LogoDigitalOcean className="h-12 w-12" />,
        name: "DigitalOcean",
      },
      {
        logo: <LogoAWS className="h-12 w-12" />,
        name: "AWS",
      },
      {
        logo: <LogoVercel className="h-12 w-12" />,
        name: "Vercel",
      },
    ],
  },
  {
    title: "Database & Storage",
    items: [
      {
        logo: <LogoFirestore className="h-12 w-12" />,
        name: "Firestore",
      },
      {
        logo: <LogoMongoDB className="h-12 w-12" />,
        name: "MongoDB",
      },
    ],
  },
  {
    title: "Other",
    items: [
      {
        logo: <LogoKafka className="h-12 w-12" />,
        name: "Kafka",
      },
    ],
  },
];
