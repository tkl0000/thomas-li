import ProjectCard from "@/components/ProjectCard"
import ProjectCarousel from "@/components/ProjectCarousel"

export default function Projects() {
    return (
        <div className="flex flex-col items-center bg-slate-500 w-full h-full">
            <ProjectCarousel></ProjectCarousel>
        </div>
    )
}