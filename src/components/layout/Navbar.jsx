import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import BackgroundImg from "../../assets/images/Background.png";
import Logo from "../../assets/images/Union.png";
import Avatar from "../../assets/images/Avatar.png";
import homeIcon from "../../assets/images/home.png";
import iconSizesIcon from "../../assets/images/IconSizes.png";
import MoneyIcon from "../../assets/images/attach_money.png";
import vectorIcon from "../../assets/images/Vector.png";
import vectorIcon2 from "../../assets/images/Vector2.png";
import vectorIcon3 from "../../assets/images/Vector3.png";
import vectorIcon4 from "../../assets/images/Vector4.png";
import vectorIcon5 from "../../assets/images/Vector5.png";
import logoutIcon from "../../assets/images/Icon Left.png";

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: "Home", href: "/home", icon: homeIcon },
    { label: "Impacto Social", href: "/login", icon: vectorIcon },
    { label: "Comunidad", href: "/about", icon: iconSizesIcon },
    { label: "Sponsors", href: "/about", icon: MoneyIcon },
    { label: "Marketplace", href: "/login", icon: vectorIcon2 },
    { label: "Bakanes", href: "/Bakanes", icon: vectorIcon3 },
    { label: "Contenidos", href: "/about", icon: vectorIcon4 },
    { label: "Categorias de acciones", href: "/about", icon: vectorIcon5 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white w-full">
      <nav className="bg-[#1E1B4D] text-white w-full px-6 py-4 flex items-center">
        <div className="w-[100px]">
          <img
            src={Logo}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex gap-6 ml-auto">
          <div className="w-[32px] h-[32px]">
            <img
              src={Avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>

      <div className="flex flex-1 w-full">
        <aside className="w-[230px] bg-white text-white border-[1px] flex flex-col">
          <div className="w-full h-40">
            <img
              src={BackgroundImg}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-2 rounded
                    hover:bg-[#EAFFFF] transition
                    font-archivo font-normal text-[14px]
                    leading-[20px] tracking-[0px] text-black
                    ${location.pathname === item.href ? 'bg-[#EAFFFF]' : ''}
                  `}
                >
                  <div className={`w-1 h-6 rounded-full transition ${
                    location.pathname === item.href ? 'bg-[#01BABB]' : 'bg-transparent'
                  }`}></div>
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-5 h-5 object-contain"
                  />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex-1"></div>
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-2 hover:bg-[#EAFFFF] transition font-archivo text-[14px] text-black rounded"
          >
            <img
              src={logoutIcon}
              alt="Cerrar sesión"
              className="w-5 h-5 object-contain"
            />
            <span>Cerrar Sesión</span>
          </button>
        </aside>
        
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}