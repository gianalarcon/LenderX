"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [activeButton, setActiveButton] = useState("");

  useEffect(() => {
    const currentRoute = window.location.pathname.split("/").pop();
    setActiveButton(currentRoute || "myloans");
  }, []);

  const handleButtonClick = (route: string) => {
    setActiveButton(route);
    router.push(`/portfolio/${route}`);
  };
  return (
    <div>
      <div className="flex flex-col gap-6 rounded-[5px] w-[1800px] height-market bg-white p-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div>
              <Image src="/home.png" alt="home" width={24} height={24}></Image>
            </div>
            <span className="text-2xl text-[#4A5056] font-bold">/Portfolio</span>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-3">
            <button
              className={`w-[153px] h-[45px] text-[#17344F] font-bold ${
                activeButton === "myloans" ? "bg-[#EDEDFF] border-l-4 border-[#17344F]" : ""
              }`}
              onClick={() => handleButtonClick("myloans")}
            >
              My loans
            </button>
            <button
              className={`w-[153px] h-[45px] text-[#17344F] font-bold ${
                activeButton === "mypools" ? "bg-[#EDEDFF] border-l-4 border-[#17344F]" : ""
              }`}
              onClick={() => handleButtonClick("mypools")}
            >
              My pools
            </button>
            <button
              className={`w-[153px] h-[45px] text-[#17344F] font-bold ${
                activeButton === "profile" ? "bg-[#EDEDFF] border-l-4 border-[#17344F]" : ""
              }`}
              onClick={() => handleButtonClick("profile")}
            >
              Profile
            </button>
          </div>
          <div className="flex flex-col gap-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
