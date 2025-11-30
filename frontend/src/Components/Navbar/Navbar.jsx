import "./Navbar.css";
import {
  UserIcon,
  StarIcon,
  MapPinIcon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/logo.png" alt="logo" className="logo"/>
        <p>Місто без обмежень</p>
      </div>
      <div className="nav-center">
        <Link to="/map" className="nav-link menu-button1">Мапа інклюзивності</Link>
        <Link to="/map" className="nav-link menu-button2">Волонтерство</Link>
        <Link to="/map" className="nav-link menu-button3">Статистика</Link>
      </div>
      <div className="nav-right">
        <div className="profile-wrapper">
          <UserCircleIcon className="profile-icon avatar" />
          <div className="dropdown-menu">
            <Link to="/profile" className="dropdown-item">
              <UserIcon className="menu-icon" />
              Особистий кабінет
            </Link>

            <div className="dropdown-item">
              <StarIcon className="menu-icon" />
              Збережені місця
            </div>

            <div className="dropdown-item">
              <MapPinIcon className="menu-icon" />
              Відвідані місця
            </div>

            <div className="dropdown-item logout">
              <ArrowRightOnRectangleIcon className="menu-icon" />
              Вийти з профілю
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
