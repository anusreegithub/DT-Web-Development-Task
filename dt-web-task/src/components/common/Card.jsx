import { useState } from "react";
import { data } from "../../constant/DataContext"
import { ChevronDown, ChevronUp, Expand, MoreHorizontal, Plus, Redo2, Undo2 } from 'lucide-react';


const Card = () => {
  const [isIntroExpanded, setIsIntroExpanded] = useState(true)
  const [isThreadAExpanded, setIsThreadAExpanded] = useState(true)
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-15 p-10'>
      {
        data.tasks[0].assets.map((task) => (
          <div class="rounded-xl overflow-hidden shadow-lg">
            <div className="">
              <div className="bg-black py-3 px-4 relative">
                <h1 className="text-center font-medium text-[16px] text-white">
                  {task.asset_title}
                </h1>

                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 lucide lucide-info"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>

              {
                task.asset_description && (
                  <p class="p-5 text-gray-700 text-[16px]">
                    <strong> Description:</strong> {task.asset_description}
                  </p>
                )
              }



              <div>
                {
                  task?.asset_image && (
                    <img src={task?.asset_image} className="w-full" alt="" />


                  )

                }
              </div>
              {
                task.asset_id === 18884 && (
                  <div className="py-4">
                    <div className="bg-[#FEFBF2] flex items-center gap-4 px-4  border border-gray-100 rounded-sm mb-6">
                      <ChevronUp size={20} className="text-gray-800 stroke-[3]" />
                      <span className="font-open-sans !font-bold text-[20px] text-gray-900 px-10">
                        Thread A</span>
                    </div>

                    <div className="p-5 grid grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 rounded-2xl shadow-xl border border-t border-gray-100 overflow-hidden">
                        <div className=" px-3 py-2 border-b border-gray-100">
                          <span className="text-sm font-medium text-gray-700">Sub thread 1</span>
                        </div>
                        <textarea
                          className="bg-white w-full border-t border-[#00000020] rounded-xl p-3 text-sm focus:outline-none resize-none placeholder-gray-400"
                          placeholder="Enter Text here"
                          rows={2}
                        />

                      </div>

                      <div className="bg-gray-50 rounded-2xl shadow-xl border border-t border-gray-100 overflow-hidden">

                        <div className=" px-3 py-2 border-b border-gray-100">
                          <span className="text-sm font-medium text-gray-700">Sub Interpretation 1</span>
                        </div>
                        <textarea
                          className="bg-white w-full border-t border-[#00000020] rounded-xl p-3 text-sm focus:outline-none resize-none placeholder-gray-400"
                          placeholder="Enter Text here"
                          rows={2}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4 ml-auto mr-4">
                        {
                          task?.asset_icon && (
                            <img src={task.asset_icon} />
                          )
                        }
                      </div>

                      <div className="px-5 flex items-center gap-3">
                        <div className="relative group">
                          <select className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-10 text-[13px] font-bold shadow-sm focus:outline-none">
                            <option>Select Categ</option>
                          </select>
                          <ChevronDown
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                          />
                        </div>
                        <div className="relative group">
                          <select className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-2 pr-10 text-[13px] font-bold shadow-sm focus:outline-none">
                            <option>Select Proces</option>
                          </select>
                          <ChevronDown
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                          />
                        </div>


                      </div>


                    </div>

                    {
                      task?.asset_button && (
                        <div className="px-5">
                          <button className="flex rounded-xl px-3 py-3 text-white text-sm bg-[#0029FF] gap-2">
                            <Plus className="w-5 h-5" />
                            Sub-thread
                          </button>
                        </div>

                      )
                    }

                    <div className="mt-5 px-5">
                      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-gray-50 px-3 py-2 border-b border-gray-100">
                          <span className="text-sm font-medium text-gray-700">Summary for Thread A</span>
                        </div>
                        <textarea
                          className="w-full p-3 text-sm focus:outline-none resize-none placeholder-gray-400"
                          placeholder="Enter Text Here"
                          rows={3}
                        />
                      </div>

                    </div>
                  </div>
                )
              }

              {
                task.asset_id === 18885 && (
                  <div className=" space-y-3">
                    <div className="p-5 space-y-4 border-t border-t-[#D1D5DB] ">
                      <label className="block text-lg font-bold text-gray-900">Title</label>
                      <div className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-gray-100 p-1">
                        <input type="text" className="w-full px-4 py-3 rounded-lg focus:outline-none bg-[#FCFCFC]" placeholder="" />
                      </div>
                    </div>

                    <div className=" space-y-1 px-5">
                      <label className="block text-lg font-bold text-gray-900">Content</label>
                      <div className="bg-white rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                        <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center gap-4 text-[13px] text-gray-500 font-medium overflow-x-auto whitespace-nowrap">
                          <button className="hover:text-black">File</button>
                          <button className="hover:text-black">Edit</button>
                          <button className="hover:text-black">View</button>
                          <button className="hover:text-black">Insert</button>
                          <button className="hover:text-black">Format</button>
                          <button className="hover:text-black">Tools</button>
                          <button className="hover:text-black">Table</button>
                          <button className="hover:text-black">Help</button>
                        </div>

                        <div className="bg-white px-4 py-2 border-b border-gray-100 flex items-center gap-5 text-gray-400">
                          <Undo2 size={18} className="cursor-pointer hover:text-gray-600" />
                          <Redo2 size={18} className="cursor-pointer hover:text-gray-600" />
                          <Expand size={18} className="cursor-pointer hover:text-gray-600" />
                          <div className="bg-gray-100 px-3 py-1 rounded text-[12px] font-medium flex items-center gap-2 cursor-pointer">
                            Paragraph
                          </div>
                          <MoreHorizontal size={18} className="cursor-pointer hover:text-gray-600" />
                        </div>

                        <div className="p-5 bg-[#FCFCFC] min-h-[50px]">
                          <textarea className="w-full  h-full bg-transparent focus:outline-none resize-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }

              {
                task.asset_id === 18886 && (

                  <div className="p-6 space-y-6">
                    {/* Introduction Section */}
                    <div className="space-y-4">
                      <div
                        className="flex items-center gap-4 bg-[#F2F2F2] p-2 cursor-pointer transition-colors hover:bg-gray-200"
                        onClick={() => setIsIntroExpanded(!isIntroExpanded)}
                      >
                        {isIntroExpanded ? <ChevronUp size={24} strokeWidth={3} /> : <ChevronDown size={24} strokeWidth={3} />}
                        <span className="text-lg font-bold text-gray-900">Introduction</span>
                      </div>

                      {isIntroExpanded && (
                        <div className="px-4 space-y-3">
                          <p className="text-[15px] text-gray-800">The 4SA Method , How to bring a idea into progress ?</p>
                          <div className="flex justify-end">
                            <button className="text-gray-500 font-semibold text-[14px] hover:underline">See More</button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Thread A Section */}
                    <div className="space-y-4">
                      <div
                        className="flex items-center gap-4 border border-gray-200 p-2 cursor-pointer transition-colors hover:bg-gray-50"
                        onClick={() => setIsThreadAExpanded(!isThreadAExpanded)}
                      >
                        {isThreadAExpanded ? <ChevronUp size={24} strokeWidth={3} /> : <ChevronDown size={24} strokeWidth={3} />}
                        <span className="text-lg font-bold text-gray-900">Thread A</span>
                      </div>

                      {isThreadAExpanded && (
                        <div className="px-4 space-y-6">
                          <p className="text-[15px] text-gray-800 leading-relaxed">
                            How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ?
                            What if the project is lengthy?
                          </p>
                          <div className="flex justify-end">
                            <button className="text-gray-500 font-semibold text-[14px] hover:underline">See More</button>
                          </div>

                          {/* Nested Example 1 Section */}
                          <div className="ml-8 space-y-4">
                            <div className="border border-gray-200 p-2 pl-8">
                              <span className="text-lg font-bold text-gray-900">Example 1</span>
                            </div>
                            <div className="pl-8">
                              <p className="text-[15px] text-gray-800 italic">
                                You have a concept , How will you put into progress?
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                )
              }


            </div>


          </div>
        ))
      }

    </div>
  )
}

export default Card