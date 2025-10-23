

const Heading = ({title, subtitle}: {title: string, subtitle: string}) => {
    return (
        <div className="max-w-xl mx-auto space-y-2 md:space-y-3 lg:space-y-4 mt-5 mb-11 sm:mt-7 sm:mb-12 md:mt-8 md:mb-13 lg:mt-10 lg:mb-14">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold dark:text-portfolio">
                {title}
            </h1>
            <p className="text-center text-muted-foreground max-sm:text-sm md:text-lg">
                {subtitle}
            </p>
        </div>
    );
};

export default Heading;