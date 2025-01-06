import ProjectCard from "@/components/ProjectCard"
import ProjectCarousel from "@/components/ProjectCarousel"
import DraggableText from "@/components/DraggableText"

const Projects = () => {

    const projectNames = ["Hello", "Bro", "Type", "Meep", "Type", "Sheep", "Type", "Beep", "Okay", "Wtf"]

    return (
        <div className="flex flex-col items-center h-full">
            <DraggableText>
                {
                    projectNames.map((item, index) => (
                        <div key={index}>
                            {item}
                        </div>
                    ))
                }
            </DraggableText>
        </div>
    )
}

export default Projects