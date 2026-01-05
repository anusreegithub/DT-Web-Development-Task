import { useState } from "react";
import { X, Plus } from "lucide-react";

const NoticeBoard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed mt-10 right-0 top-12 z-50 flex items-start">
            <div className="bg-white shadow-2xl rounded-l-3xl w-20">
                <div
                    className={`w-12 bg-black text-white py-4 flex flex-col items-center gap-4 rounded-l-3xl shadow-lg cursor-pointer transition-transform duration-300`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <button className="text-white hover:opacity-80 transition-opacity">
                        {isOpen ? (
                            <X className="h-8 w-8" />
                        ) : (
                            <Plus className="h-8 w-8 rotate-45" />
                        )}
                    </button>

                    <div className="flex flex-col items-center text-[15px] font-medium leading-tight tracking-widest uppercase">
                        {"NoticeBoard".split("").map((char, i) => (
                            <span key={i} className={char === "B" ? "mt-4" : ""}>
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
export default NoticeBoard