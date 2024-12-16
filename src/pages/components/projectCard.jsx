import Image from "next/image"

const ProjectCard = ({ imageSrc, name, technologies, projectLink, projectSourceCode, dataAos }) => {
    return (
        <div
            data-aos={dataAos}
            className="relative group overflow-hidden rounded-md border border-transparent hover:border-red"
        >
            <Image
                src={imageSrc}
                sizes="(max-width: 768px) 100%, auto"
                quality={100}
                placeholder="blur"
                loading="lazy"
                alt={name}
                className="rounded-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col gap-3 items-center justify-center transition-opacity duration-300">
                <h4 className="font-bold tracking-wide text-xl text-center">{name}</h4>
                <p className="font-bold text-white tracking-wide text-xs text-center">
                    {
                        Array.isArray(technologies) && technologies.length > 0 ? (
                            technologies.map((value, index) => {
                                return (
                                    <span key={index}>
                                        {value}
                                        {value === technologies[technologies.length - 1] ? null : <span className=" text-red inline-block px-1">/</span>}
                                    </span>
                                )
                            })
                        ) : null
                    }
                </p>
                <div className="flex items-center gap-2">
                    <a
                        href={projectLink}
                        target="_blank"
                        className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                    >
                        <i className="fa-solid fa-link"></i>
                        Visit Website
                    </a>
                    <a
                        href={projectSourceCode}
                        target="_blank"
                        className="hover:bg-red transition-all text-xs tracking-wide font-bold p-2 border border-red rounded-lg flex items-center gap-2"
                    >
                        <i className="fa-brands fa-github"></i>
                        Source Code
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard