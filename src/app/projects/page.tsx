// import ProjectCard from "@/components/ProjectCard"
// import ProjectCarousel from "@/components/ProjectCarousel"
// import DraggableText from "@/components/DraggableText"

const Projects = () => {

    // const projectNames = ["Hello", "Bro", "Type", "Meep", "Type", "Sheep", "Type", "Beep", "Okay", "Wtf"]

    return (
        <div className="flex flex-col gap-8 h-full">
            {/* <DraggableText>
                {
                    projectNames.map((item, index) => (
                        <div key={index}>
                            {item}
                        </div>
                    ))
                }
            </DraggableText> */}
            <div>
                <h1>Quaternions</h1>
                <h2>Simulation Source Code (python): <a href="https://github.com/tkl0000/quaternion-visualizer">https://github.com/tkl0000/quaternion-visualizer</a></h2>
                <h2>MoMath Video (unlisted)</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/W3SOSpAuzCo?si=kaWrd_ZAzEGNAiBF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div>
                <h1>Neural Nudge</h1>
                <h2>wip</h2>
            </div>
            <div>
                <h1>Tab Logger</h1>
                <h2>Chrome Extension to track browser activity, and exports in a .csv format.</h2>
                <h2>Install / Source Code here: <a href="https://github.com/tkl0000/tab-logger"> https://github.com/tkl0000/tab-logger</a></h2>
            </div>
        </div>
    )
}

export default Projects