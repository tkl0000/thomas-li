// import ProjectCard from "@/components/ProjectCard"
// import ProjectCarousel from "@/components/ProjectCarousel"
// import DraggableText from "@/components/DraggableText"

const Projects = () => {
    return (
      <div className="flex flex-col gap-12 p-8 h-full">
        {/* Header */}
        {/* <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-50 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600">
            A collection of my work showcasing a mix of technology, creativity, and problem-solving.
          </p>
        </div> */}
  
        {/* Projects Section */}
        <div className="flex flex-col gap-12">
          {/* Quaternions Project */}
          <div className="bg-black  rounded-lg p-6 border border-gray-700 hover:border-slate-50">
            <h1 className="text-2xl font-semibold text-gray-50 mb-4">Quaternions</h1>
            <p className="text-gray-50 mb-4">
              A mathematical approach to visualizing 3D rotations with Python.
            </p>
            <p className="text-gray-50">
              <strong>Simulation Source Code: </strong>
              <a
                href="https://github.com/tkl0000/quaternion-visualizer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://github.com/tkl0000/quaternion-visualizer
              </a>
            </p>
            <p className="text-gray-50 mt-4">
              <strong>MoMath Video (Unlisted): </strong>
            </p>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/W3SOSpAuzCo?si=kaWrd_ZAzEGNAiBF"
              title="Quaternions Simulation Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg mt-4"
            ></iframe>
          </div>

          {/* Math Journal Project */}
          <div className="bg-black  rounded-lg p-6 border border-gray-700 hover:border-slate-50">
            <h1 className="text-2xl font-semibold text-gray-50 mb-4">Math Journal Website</h1>
            <p className="text-gray-50">Fully functional website for hosting articles for the River Hill High School Math Journal: <a
                href="https://rhhs-math-journal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://rhhs-math-journal.com
              </a></p>
              <p>Frontend: React Vite</p>
              <p>Backend: ExpressJS</p>
          </div>
  
          {/* Tab Logger Project */}
          <div className="bg-black  rounded-lg p-6 border border-gray-700 hover:border-slate-50">
            <h1 className="text-2xl font-semibold text-gray-50 mb-4">Tab Logger</h1>
            <p className="text-gray-50 mb-4">
              A Chrome Extension to track browser activity and export it in a .csv format.
            </p>
            <p className="text-gray-50">
              <strong>Install / Source Code: </strong>
              <a
                href="https://github.com/tkl0000/tab-logger"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://github.com/tkl0000/tab-logger
              </a>
            </p>
          </div>

          {/* Neural Nudge Project */}
          <div className="bg-black  rounded-lg p-6 border border-gray-700 hover:border-slate-50">
            <h1 className="text-2xl font-semibold text-gray-50 mb-4">Neural Nudge</h1>
            <p className="text-gray-50">Work in Progress (WIP).</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;