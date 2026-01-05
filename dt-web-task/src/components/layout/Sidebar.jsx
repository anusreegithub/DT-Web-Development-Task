import { CircleArrowLeft, CircleArrowRight } from "lucide-react"
import { useState } from "react"
import { data } from "../../constant/DataContext"

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`fixed h-[500px] rounded-3xl shadow-2xl  bg-white  transition-all duration-300 ease-in-out border-r border-gray-200 shadow-sm z-50 flex flex-col ${isExpanded ? "w-80" : "w-[150px]"
        }`}
    >
      <div className="h-12 rounded-tr-3xl  bg-black flex items-center justify-end px-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white hover:bg-white/10 p-1 rounded-full transition-colors"
        >
          {isExpanded ? <CircleArrowLeft className="h-7 w-7" fill="white"
            stroke="black" /> : <CircleArrowRight className="h-7 w-7" fill="white"
              stroke="black" />}
        </button>
      </div>

      <div className="flex-1 p-4 flex flex-col items-center gap-6">

        {
          isExpanded ?
            <div className="px-3">

              <ul style={{ listStyleType: "disc" }}>
                <li className="font-bold text-md">{data.tasks[0].task_title}</li>
                <div className="mt-3 font-poppins  leading-[100%] tracking-[0.03em]">
                  {data.tasks[0].assets.map((task) => (
                    <li className="text-sm">{task.asset_title}</li>

                  ))}
                </div>

              </ul>

            </div>
            :
            <div className="flex justify-center items-center gap-4 w-full">
              <div className="p-3 w-15 h-15 border-2 border-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                <span className="text-blue-600 font-light text-4xl">1</span>
              </div>

            </div>

        }


      </div>
    </div>
  )
}

export default Sidebar