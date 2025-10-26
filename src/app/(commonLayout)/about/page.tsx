import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
    title: "About | Abrar Shahriar",
    description: "This page contains detail information about background, skills and certifications of Abrar Shahriar."
};


export const icons: Record<string, string> = {
    html5: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896414/html5_msuhla.svg",
    css3: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896413/css3_xisule.svg",
    javascript: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896415/javaScript_axq1ib.svg",
    typescript: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902018/typescript-official-svgrepo-com_abtrda.svg",
    tailwind_css: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896415/tailwind_yal6ef.svg",
    react_js: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896413/react_ko4nxl.svg",
    next_js: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902012/next-js-svgrepo-com_klepy7.svg",
    daisyui: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896413/daisyUI_zt4juq.svg",
    shadcn_ui: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902018/shadcn-ui-seeklogo_uk5b0e.svg",
    npm: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896413/npm_awzfcn.svg",
    mongodb: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896415/mongoDB_tlrxjm.svg",
    firebase: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896413/firebase_ffiqdg.svg",
    mongoose: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902012/icons8-mongoose_s3qxow.svg",
    sql: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760963492/sql-svgrepo-com_tnebci.svg",
    postgresql: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902017/postgresql-logo-svgrepo-com_bqnqpv.svg",
    prisma: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902014/light-prisma-svgrepo-com_y9pgpo.svg",
    postman: "https://res.cloudinary.com/dbvnl644p/image/upload/v1761326544/postman-icon_hswygw.svg",
    axios: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760979487/Axios_zni5ou.svg",
    tanstack_query: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760979488/tanstack_lstqgv.svg",
    redux: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902012/redux-svgrepo-com_di8rkk.svg",
    git: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902013/git-svgrepo-com_pnkcln.svg",
    github: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902013/github-142-svgrepo-com_murrab.svg",
    vs_code: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760964604/vs-code-svgrepo-com_eimisk.svg",
    node_js: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760896415/node_rczlkb.svg",
    express_js: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902012/express-svgrepo-com_fiee04.svg",
    docker: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760902012/docker-svgrepo-com_gxaaz1.svg",
    jwt: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760961828/json-web-token_xbejkp.svg",
    passport_js: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760961828/passport-svgrepo-com_uexbnm.svg",
    nextauth_js: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760961828/next-auth_ukaccd.svg",
    netlify: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760961827/netlify-svgrepo-com_bguzwv.svg",
    vercel: "https://res.cloudinary.com/dbvnl644p/image/upload/v1760961827/vercel-svgrepo-com_mj67lz.svg"
};


const AboutPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/users/me/about`, {cache: "force-cache"});
    const { data: about } = await res.json();
    const { storyHTML, skills } = about;
    const { languages, frontend, backend, databases, odm_orm, authentication, payments, cloud_devOps, devTools, concepts } = skills;

    return (
        <>
            <Heading
                title="About Me"
                subtitle="Get to know more about my background and skills"
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-13 sm:gap-6">
                <div className="sm:col-span-2">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl dark:text-portfolio font-bold">My Story</h2>
                    <br />
                    <p dangerouslySetInnerHTML={{ __html: storyHTML }}>
                    </p>
                    <br /><br />

                    <h2 className="text-xl sm:text-2xl lg:text-3xl dark:text-portfolio font-bold">Certifications</h2>
                    <br />
                    <div className="p-4 border dark:bg-black rounded-xl shadow-lg flex max-lg:flex-col-reverse max-lg:items-center gap-4 justify-between">
                        <div className="flex flex-col justify-between max-lg:gap-6">
                            <div className="flex-1">
                                <h3 className="text-lg md:text-xl font-semibold">
                                    Complete Web Development Course With Programming Hero
                                </h3>
                                <p className="text-muted-foreground">by Jhankar Mahbub</p>
                            </div>
                            <p>July 2024 - February 2025</p>
                        </div>
                        <Image
                            src="https://res.cloudinary.com/dbvnl644p/image/upload/v1760980770/Certificate-PH-L1_loftes.png"
                            alt="PHero-Level-1-Certificate"
                            width={600}
                            height={464}
                            className="w-full lg:w-1/2 xl:w-1/3 h-auto rounded-xl border border-portfolio"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="sm:text-center text-xl sm:text-2xl lg:text-3xl dark:text-portfolio font-bold">Skills</h2>
                    <br />
                    <div className="bg-muted dark:bg-black p-2 rounded-xl">

                        <h3 className="text-center text-lg sm:text-xl font-semibold dark:text-portfolio mb-3">Languages</h3>
                        <p className="flex justify-center items-center gap-3 flex-wrap mb-6">
                            {
                                languages?.map((name: string) => (
                                    <Badge key={name} variant="secondary" className="flex justify-center items-center gap-1 bg-white dark:bg-secondary">
                                        <Image
                                            src={icons[name.toLocaleLowerCase().trim().replace(/[^\w]/g, "_")] || "https://res.cloudinary.com/example.svg"}
                                            alt=""
                                            width={10}
                                            height={10}
                                            className="w-3 h-auto"
                                        />
                                        {name}
                                    </Badge>
                                ))
                            }
                        </p>

                        <h3 className="text-center text-lg sm:text-xl font-semibold dark:text-portfolio mb-3">Frontend</h3>
                        <p className="flex justify-center items-center gap-3 flex-wrap mb-6">
                            {
                                frontend?.map((name: string) => (
                                    <Badge key={name} variant="secondary" className="flex justify-center items-center gap-1 bg-white dark:bg-secondary">
                                        <Image
                                            src={icons[name.toLocaleLowerCase().trim().replace(/[^\w]/g, "_")] || "https://res.cloudinary.com/example.svg"}
                                            alt=""
                                            width={10}
                                            height={10}
                                            className="w-3 h-auto"
                                        />
                                        {name}
                                    </Badge>
                                ))
                            }
                        </p>

                        <h3 className="text-center text-lg sm:text-xl font-semibold dark:text-portfolio mb-3">Backend</h3>
                        <p className="flex justify-center items-center gap-3 flex-wrap mb-6">
                            {
                                backend?.map((name: string) => (
                                    <Badge key={name} variant="secondary" className="flex justify-center items-center gap-1 bg-white dark:bg-secondary">
                                        <Image
                                            src={icons[name.toLocaleLowerCase().trim().replace(/[^\w]/g, "_")] || "https://res.cloudinary.com/example.svg"}
                                            alt=""
                                            width={10}
                                            height={10}
                                            className="w-3 h-auto"
                                        />
                                        {name}
                                    </Badge>
                                ))
                            }
                        </p>

                        <h3 className="text-center text-lg sm:text-xl font-semibold dark:text-portfolio mb-3">Databases</h3>
                        <p className="flex justify-center items-center gap-3 flex-wrap mb-6">
                            {
                                databases?.map((name: string) => (
                                    <Badge key={name} variant="secondary" className="flex justify-center items-center gap-1 bg-white dark:bg-secondary">
                                        <Image
                                            src={icons[name.toLocaleLowerCase().trim().replace(/[^\w]/g, "_")] || "https://res.cloudinary.com/example.svg"}
                                            alt=""
                                            width={10}
                                            height={10}
                                            className="w-3 h-auto"
                                        />
                                        {name}
                                    </Badge>
                                ))
                            }
                        </p>

                        <h3 className="text-center text-lg sm:text-xl font-semibold dark:text-portfolio mb-3">ODM/ORM</h3>
                        <p className="flex justify-center items-center gap-3 flex-wrap mb-6">
                            {
                                odm_orm?.map((name: string) => (
                                    <Badge key={name} variant="secondary" className="flex justify-center items-center gap-1 bg-white dark:bg-secondary">
                                        <Image
                                            src={icons[name.toLocaleLowerCase().trim().replace(/[^\w]/g, "_")] || "https://res.cloudinary.com/example.svg"}
                                            alt=""
                                            width={10}
                                            height={10}
                                            className="w-3 h-auto"
                                        />
                                        {name}
                                    </Badge>
                                ))
                            }
                        </p>

                        <h3 className="text-center text-lg sm:text-xl font-semibold dark:text-portfolio mb-3">Authentication</h3>
                        <p className="flex justify-center items-center gap-3 flex-wrap mb-6">
                            {
                                authentication?.map((name: string) => (
                                    <Badge key={name} variant="secondary" className="flex justify-center items-center gap-1 bg-white dark:bg-secondary">
                                        <Image
                                            src={icons[name.toLocaleLowerCase().trim().replace(/[^\w]/g, "_")] || "https://res.cloudinary.com/example.svg"}
                                            alt=""
                                            width={10}
                                            height={10}
                                            className="w-3 h-auto"
                                        />
                                        {name}
                                    </Badge>
                                ))
                            }
                        </p>

                        <h3 className="text-center text-lg sm:text-xl font-semibold dark:text-portfolio mb-3">Payment Integration</h3>
                        <p className="flex justify-center items-center gap-3 flex-wrap mb-6">
                            {
                                payments?.map((name: string) => (
                                    <Badge key={name} variant="secondary" className="bg-white dark:bg-secondary">{name}</Badge>
                                ))
                            }
                        </p>

                        <h3 className="text-center text-lg sm:text-xl font-semibold dark:text-portfolio mb-3">Cloud & DevOps</h3>
                        <p className="flex justify-center items-center gap-3 flex-wrap mb-6">
                            {
                                cloud_devOps?.map((name: string) => (
                                    <Badge key={name} variant="secondary" className="flex justify-center items-center gap-1 bg-white dark:bg-secondary">
                                        <Image
                                            src={icons[name.toLocaleLowerCase().trim().replace(/[^\w]/g, "_")] || "https://res.cloudinary.com/example.svg"}
                                            alt=""
                                            width={10}
                                            height={10}
                                            className="w-3 h-auto"
                                        />
                                        {name}
                                    </Badge>
                                ))
                            }
                        </p>

                        <h3 className="text-center text-lg sm:text-xl font-semibold dark:text-portfolio mb-3">Tools</h3>
                        <p className="flex justify-center items-center gap-3 flex-wrap mb-6">
                            {
                                devTools?.map((name: string) => (
                                    <Badge key={name} variant="secondary" className="flex justify-center items-center gap-1 bg-white dark:bg-secondary">
                                        <Image
                                            src={icons[name.toLocaleLowerCase().trim().replace(/[^\w]/g, "_")] || "https://res.cloudinary.com/example.svg"}
                                            alt=""
                                            width={10}
                                            height={10}
                                            className="w-3 h-auto"
                                        />
                                        {name}
                                    </Badge>
                                ))
                            }
                        </p>

                        <h3 className="text-center text-lg sm:text-xl font-semibold dark:text-portfolio mb-3">Concepts</h3>
                        <p className="flex justify-center items-center gap-3 flex-wrap mb-6">
                            {
                                concepts?.map((name: string) => (
                                    <Badge key={name} variant="secondary" className="bg-white dark:bg-secondary">{name}</Badge>
                                ))
                            }
                        </p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutPage;