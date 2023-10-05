import { useState, useMemo } from "react";
import { Postcard, Justify, Book, ClockHistory, PaintBucket, House, HouseCheck, Paypal, PatchCheck, PatchCheckFill } from "react-bootstrap-icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillMoneyCollect, AiOutlineLogout, AiOutlineMoneyCollect, AiTwotoneMoneyCollect } from "react-icons/ai";

const menuItems = [
  { id: 1, label: "Home", icon: HouseCheck, link: "/admin/HomeAdmin" },
  { id: 2, label: "Users", icon: Postcard, link: "/admin/Users" },
  { id: 3, label: "Courses", icon: Book, link: "/admin/OurCourses" },
  { id: 4, label: "Events", icon: ClockHistory, link: "/admin/Events" },
  { id: 5, label: "Payments", icon: Paypal, link: "/admin/Payments" },
  { id: 6, label: "Packages", icon: PatchCheckFill, link: "/admin/Packages" },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [showAdminText, setShowAdminText] = useState(true);

  const router = useRouter();
  const activeMenu = useMemo(() => menuItems.find((menu) => menu.link === router.pathname), [router.pathname]);

  const wrapperClasses = useMemo(() => {
    return [
      "pl-4 h-screen px-4 pt-8 pb-4 flex flex-between justify-start border border-1",
      toggleCollapse ? "w-20" : "w-50",
    ].join(" ");
  }, [toggleCollapse]);

  const getNavItemClasses = (menu) => {
    return [
      "flex items-center cursor-pointer hover:bg-blue-200 rounded w-full space-y-4 text-xl overflow-hidden whitespace-nowrap",
      activeMenu && menu && activeMenu.id === menu.id ? "bg-light-lighter" : "",
    ].join(" ");
  };

  const handleSidebarToggle = () => {
    setToggleCollapse((prevState) => !prevState);
    setShowAdminText((prevState) => !prevState);
  };

  return (
    <>
      <div className={wrapperClasses} style={{ transition: "width 500ms cubic-bezier(0.2, 0, 0, 1) 0s" }}>
        <div className="flex flex-col">
          <div className="flex flex-row space-x-10 items-center justify-center relative">
            {showAdminText && (
              <div className="flex items-center space-x-4 text-blue-400">
                <span className="font-medium text-xl text-text">ADMIN...</span>
              </div>
            )}
            <button className="text-blue-400" onClick={handleSidebarToggle}>
              <Justify className="text-2xl" />
            </button>
          </div>

          <div className="flex flex-col items-start mt-24 pb-60">
            {menuItems.map(({ icon: Icon, ...menu }) => {
              const classes = getNavItemClasses(menu);
              return (
                <div className={classes} key={menu.id}>
                  <Link href={menu.link} className="flex flex-row py-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }} className="text-2xl px-2">
                      <Icon />
                    </div>
                    {!toggleCollapse && <span className="text-lg">{menu.label}</span>}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className={`${getNavItemClasses({})} flex flex-row space-x-3 mt-auto ml-auto items-center`}>
            <div className="text-2xl text-red-600">
              <AiOutlineLogout />
            </div>
            {!toggleCollapse && (
              <div>
                <span className="text-lg text-red-400">LogOut</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
