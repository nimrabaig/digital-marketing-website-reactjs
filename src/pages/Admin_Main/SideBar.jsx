import { Link, useLocation } from 'react-router-dom'
import { MdPeople, MdLogout, MdDashboard } from "react-icons/md";
import { BsPencilSquare, BsListCheck, BsFileEarmarkTextFill } from "react-icons/bs";

const SideBar = () => {

  const location = useLocation();

  const navItems = [
    { path: "/admin", label: "Dashboard", icon: <MdDashboard />, sub: false },
    { path: "/", label: "Blogs", icon: <BsFileEarmarkTextFill />, sub: false, style: { pointerEvents: 'none' } },
    { path: "/admin/blogs/list", label: "Blog List", icon: <BsListCheck />, sub: true },
    { path: "/admin/blogs/create", label: "Create Blog", icon: <BsPencilSquare />, sub: true },
    { path: "/", label: "Careers", icon: <MdPeople />, sub: false, style: { pointerEvents: 'none' } },
    { path: "/admin/careers/list", label: "Career List", icon: <BsListCheck />, sub: true },
    { path: "/admin/careers/create", label: "Create Career", icon: <BsPencilSquare />, sub: true },
    { path: "/", label: "Logout", icon: <MdLogout />, sub: false },
  ];

  return (
    <div className="bg-light col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{ minHeight: '100vh' }}>
      <ul className="nav flex-column sticky-top pl-0 mt-5">
        {navItems.map((item, key) => (
          <li style={item.style} className={`nav-item mb-2 ${location.pathname === item.path ? 'active-nav-item' : ''} ${item.sub ? 'ps-3' : ''}`} key={key}>
            <Link
              className={`nav-link text-dark `}
              to={item.path}
            >
              {item.icon} <span className={`ms-1`}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar