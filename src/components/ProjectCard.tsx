interface ProjectCardProps {
    name: string,
    link: string,
}

const ProjectCard = (props: ProjectCardProps) => {
    const name = props.name;
    const link = props.link;
    return (
        <div className="flex">
            name: {name}
            link: {link}
        </div>
    )
}

export default ProjectCard