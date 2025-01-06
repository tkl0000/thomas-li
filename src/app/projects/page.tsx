import ProjectCard from "@/components/ProjectCard"
import ProjectCarousel from "@/components/ProjectCarousel"
import DraggableText from "@/components/DraggableText"

const Projects = () => {

    const projectNames = ["Hello", "Bro", "Type", "Meep", "Type", "Sheep", "Type", "Beep", "Okay", "Wtf"]

    return (
        <div className="flex flex-col h-full">
            {/* <DraggableText>
                {
                    projectNames.map((item, index) => (
                        <div key={index}>
                            {item}
                        </div>
                    ))
                }
            </DraggableText> */}
            <ul>
                <li>
                    Quaternions: https://github.com/tkl0000/quaternion-visualizer
                </li>
                <li>
                    Tab Logger: https://github.com/tkl0000/tab-logger
                </li>
            </ul>
        </div>
    )
}

export default Projects