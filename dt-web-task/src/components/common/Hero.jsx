import { data } from "../../constant/DataContext"


const Hero = () => {
  return (
    <div className="w-full">
      <div className="max-w-8xl mx-auto p-5">
        <h1 className=" text-[#0029FF] font-poppins font-bold text-[28px] leading-[100%] tracking-[0.03em]">
          {data.title}
        </h1>

        <div className="bg-[#E9ECEF] mt-9 rounded-sm">
          <div className="p-5">
            <h1 className="font-poppins font-bold text-[18px]">{data.tasks[0].task_title}</h1>
            <p className="font-poppins mt-3">{data.tasks[0].task_description}</p>
          </div>

        </div>

      </div>
    </div>

  )
}

export default Hero