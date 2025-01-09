// import ProjectCard from "@/components/ProjectCard"
// import ProjectCarousel from "@/components/ProjectCarousel"
// import DraggableText from "@/components/DraggableText"

const Projects = () => {
    return (
      <div className="flex flex-col items-center pt-4 gap-12 h-full">
        {/* Header */}
        {/* <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-50 mb-4">My Projects</h1>
          <p className="text-lg text-gray-600">
            A collection of my work showcasing a mix of technology, creativity, and problem-solving.
          </p>
        </div> */}
  
        {/* Projects Section */}
        <div className="flex flex-col gap-6 w-1/2">
          {/* Quaternions Project */}
          <div className="bg-black  rounded-lg p-6 border border-gray-700 hover:border-slate-50">
            <h1 className="text-2xl font-semibold text-gray-50 mb-4">Quaternions</h1>
            <p className="text-gray-50 mb-4">
            Inspired by Skateboarding, I began looking into Quaternions, which are a four-dimensional algebra commonly used to model rotations. Here I showcase the simulation tool that I built to model skateboarding rotations using Quaternions, as well as a video I created for the <a href="https://momath.org/strogatzprize/">Steven Strogatz Prize in Math Communication</a>. 
            Additionally, I presented work related to this topic at MAA MathFest 2024. 
            </p>
            <p className="text-gray-50">
              <strong>MAA MathFest Presentation: </strong>
            </p>
            <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vQeyoW8opsHpIlobWMDC2o60H_DkEDyGcsqTMSt4HjsbYQNyn2PRpuDPpErtRZhJIGHvFIKQ9c9_L5i/embed?start=false&loop=false&delayms=60000"
                frameBorder="0"
                width="484"
                height="392"
                allowFullScreen
                className="w-full h-[392px] mt-4"
                title="Google Presentation"
              ></iframe>            
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
            <p className="text-gray-50 mt-4">
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
            Developed a lightweight Chrome extension (“Tab-logger”) using HTML/CSS/JavaScript to automatically track web browsing and search activity; used by undergraduate data-science students and graduate students to quantify students’ metacognitive process during problem-solving
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
            <p className="text-gray-50">Re-inventing memorization in the 21st Century; Work in Progress (WIP).</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;