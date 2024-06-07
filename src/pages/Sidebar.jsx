import React, { useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { MdSupportAgent, MdDashboard } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import {
  AiOutlineFileText,
  AiOutlineBarChart,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";
import {
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import { TbLogout } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import AgentLogo from "../assets/agent.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", icon: <AiOutlineFileText />, label: "Pages" },
    { title: "Media", spacing: true, icon: <BsFillImageFill />, label: "Media" },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      label: "Projects",
      submenu: true,
      submenuItems: [
        { title: "Submenu 1" },
        { title: "Submenu 2" },
        { title: "Submenu 3" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart />, label: "Media" },
    { title: "Inbox", icon: <AiOutlineMail />, label: "Inbox" },
    { title: "Profile", spacing: true, icon: <BsPerson />, label: "Profile" },
    { title: "Setting", icon: <AiOutlineSetting />, label: "Setting" },
    { title: "Logout", icon: <TbLogout />, label: "Logout" },
  ];

  return (
    <>
    
      <div className="flex">
        
        <div
          className={`bg-black h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          } duration-300 text-white relative`}
        >
          <FaAngleLeft
            className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-black cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          {/* <div className="inline-flex">
            <MdSupportAgent
              className={`bg-amber-300 text-black text-4xl rounded cursor-pointer block float-left mr-2`}
            />
            <h1
              className={`text-white origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              Agent
            </h1>
          </div> */}
          {/* <div className="flex items-center rounded-md bg-gray-200 mt-6 px-4 py-2">
          <IoMdSearch className="text-black text-lg block float-left cursor-pointer"/>
          </div> */}
          <ul className="pt-2 text-white">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-300 hover:text-black rounded-md mt-2 ${
                    menu.spacing ? "mt-9" : "mt-2"
                  }`}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>{menu.icon}</TooltipTrigger>
                          <TooltipContent>
                            <p>{menu.label}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <MdDashboard />
                    )}
                  </span>
                  <span
                    className={`text-base font-medium flex-1  ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && open && (
                    <IoIosArrowDown
                      className={`${submenuOpen && "rotate-180"}`}
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                    />
                  )}
                </li>
                {menu.submenu && submenuOpen && open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-gray-300 hover:text-black rounded-md mt-2 ${
                          menu.spacing ? "mt-9" : "mt-2"
                        }`}
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
        {/* <div className="p-7">
          <h1 className="text-2xl font-semibold">Home Page</h1>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
