import Image from "next/image";


const Certifications = () => {
    return (
        <section className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold dark:text-portfolio">
                Certifications
            </h1>
            <p className="max-sm:text-sm mt-2 mb-6 sm:mb-8 md:mb-10 text-center">
                Earned certificates from various courses throughout my learning journey
            </p>

            <div className="flex max-md:flex-col justify-center items-center gap-6">
                <div className="flex-1 flex flex-col items-center gap-2">
                    <Image
                        src="https://res.cloudinary.com/dbvnl644p/image/upload/v1760980770/Certificate-PH-L1_loftes.png"
                        alt="PH L1 Course Certificate"
                        width={900}
                        height={695}
                        className="w-full h-auto rounded-xl border-2 border-portfolio"
                    />
                    <p className="text-center">(July 2024 - February 2025)</p>
                    <p className="lg:text-lg text-center font-semibold">
                        Complete Web Development Course With Programming Hero
                    </p>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                    <Image
                        src="https://res.cloudinary.com"
                        alt="Certificate Coming Soon"
                        width={900}
                        height={695}
                        className="w-full h-auto rounded-xl border-2 border-portfolio"
                    />
                    <p className="text-center">(April 2025 - Ongoing)</p>
                    <p className="lg:text-lg text-center font-semibold">
                        Next Level Web Development By Programming Hero
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Certifications;