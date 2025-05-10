const person = {
  firstName: "André",
  lastName: "Bellico",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Desenvolvedor",
  avatar: "/images/avatar.jpg",
  email: "mhsandrevsbellico@gmail.com",
  location: "America/Brasil", 
  languages: ["English", "Portuguese"], 
};



const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/andrebellico",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/andr%C3%A9-bellico/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Conectando design e código com propósito</>,
  featured: {
    display: true,
    title: <>Ultimo projeto: <strong className="ml-4">Async LP</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
   Sou André Bellico, desenvolvedor web com foco em criar interfaces modernas e intuitivas. Apaixonado por tecnologia, busco desafios que me ajudem a evoluir e construir soluções inovadoras.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
       Profissional apaixonado por tecnologia, atuando na área de desenvolvimento desde 2023. Possuo
sólidos conhecimentos em lógica de programação.
Tenho experiência com desenvolvimento front-end utilizando React.js, TypeScript, CSS e integração
com APIs. Além disso, estou familiarizado com MySQL e Node.js, o que me permite colaborar em
soluções full-stack.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência de Trabalho",
    experiences: [
      {
        company: "ASYNC",
        timeframe: "2023 - Presente",
        role: "Desenvolvedor",
        achievements: [
          <>
            Participei ativamente no desenvolvimento dos sistemas conforme as necessidades dos clientes, em conjunto com
a equipe.
          </>,
          <>
           Participei da criação dos designs dos sistemas e projetos dos clientes
          </>,
          <>
            Desenvolvemos um sistema para automatizar o processo de escolha de personalizações de arquitetura de uma
forma intuitiva e interativa (PLANA ADHOC).
          </>,
          <>
            Realizei a conversão pixel-perfect dos designs do Figma para os websites.
          </>,
          <>
            Gerenciando o fluxo do Git, mantendo o projeto organizado e seguindo as melhores práticas na base de código
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
   
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Formação",
    institutions: [
      {
        name: "Universidade Católica Italo Brasileiro",
        description: <>Análise e Desenvolvimento de Sistemas</>,
      },
      {
        name: "RocketSeat",
        description: <>Front-End Curso</>,
      },
    ],
  },
  technical: {
    display: true, 
    title: "Tech Skills",
    skills: [
      {
        title: "Figma",
      },
      {
        title: "Next.js",
      },
      {
        title: "React.js",
      },
      {
        title: "TailwindCSS",
      },
      {
        title: "TypeScript",
      },
      {
        title: "Node.js",
      },
      {
        title: "MySQL",
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
