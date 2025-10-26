import Image from "next/image";



const skills = [
    {
        name: "HTML5",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896414/html5_msuhla.svg"
    },
    {
        name: "CSS3",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896413/css3_xisule.svg"
    },
    {
        name: "JavaScript",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896415/javaScript_axq1ib.svg"
    },
    {
        name: "TypeScript",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902018/typescript-official-svgrepo-com_abtrda.svg"
    },
    {
        name: "SQL",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760963492/sql-svgrepo-com_tnebci.svg"
    },
    {
        name: "Tailwind CSS",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896415/tailwind_yal6ef.svg"
    },
    {
        name: "React.js",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896413/react_ko4nxl.svg"
    },
    {
        name: "Next.js",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902012/next-js-svgrepo-com_klepy7.svg"
    },
    {
        name: "Redux",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902012/redux-svgrepo-com_di8rkk.svg"
    },
    {
        name: "TanStack Query",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760979488/tanstack_lstqgv.svg"
    },
    {
        name: "Node.js",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896415/node_rczlkb.svg"
    },
    {
        name: "Express.js",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902012/express-svgrepo-com_fiee04.svg"
    },
    {
        name: "MongoDB",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896415/mongoDB_tlrxjm.svg"
    },
    {
        name: "Mongoose",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902012/icons8-mongoose_s3qxow.svg"
    },
    {
        name: "PostgreSQL",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902017/postgresql-logo-svgrepo-com_bqnqpv.svg"
    },
    {
        name: "Prisma",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902014/light-prisma-svgrepo-com_y9pgpo.svg"
    },
    {
        name: "Firebase",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896413/firebase_ffiqdg.svg"
    },
    {
        name: "Docker",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902012/docker-svgrepo-com_gxaaz1.svg"
    },
    {
        name: "JWT",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760961828/json-web-token_xbejkp.svg"
    },
    {
        name: "GitHub",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902013/github-142-svgrepo-com_murrab.svg"
    },
    {
        name: "Daisy UI",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896413/daisyUI_zt4juq.svg"
    },
    {
        name: "shadcn/ui",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902018/shadcn-ui-seeklogo_uk5b0e.svg"
    },
    {
        name: "Axios",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760979487/Axios_zni5ou.svg"
    },
    {
        name: "NPM",
        icon: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896413/npm_awzfcn.svg"
    }
];


const TechnicalSkills = () => {
    return (
        <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold dark:text-portfolio">
                Technical Skills
            </h1>
            <p className="max-sm:text-sm mt-2 mb-6 sm:mb-8 md:mb-10 text-center">
                A refined collection of my expertise in modern development tools and technologies
            </p>

            <div className="grid grid-cols-2 min-[375px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8 gap-8 mt-6">
                {
                    skills.map(skill => (
                        <div key={skill.name} className="flex flex-col justify-center items-center gap-1">
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={65}
                                height={65}
                                className="aspect-square w-12"
                            />
                            <h5 className="w-max sm:text-lg font-semibold">{skill.name}</h5>
                        </div>
                    ))
                }
            </div>

            <p className="text-muted-foreground dark:text-portfolio text-sm text-center mt-6">
                * constantly polishing and expanding my skill-set
            </p>
        </section>
    );
};

export default TechnicalSkills;