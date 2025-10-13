

const Heading = ({title, subtitle}: {title: string, subtitle: string}) => {
    return (
        <div className="max-w-xl mx-auto space-y-4 my-10">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold dark:text-portfolio">{title}</h1>
            <p className="text-center text-muted-foreground text-sm">
                {subtitle}
            </p>
        </div>
    );
};

export default Heading;