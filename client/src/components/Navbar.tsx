import { FC, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar: FC = () => {
  let [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="navigation">
      <a href="#" className="logo">
        <img className="logo" src="/img/logo.png" alt="logo picture" />
      </a>

      <FontAwesomeIcon
        onClick={() => setIsOpen(!isOpen)}
        icon={isOpen ? faXmark : faBars}
        className="menu-icon"
      />
      <nav className={`navbar ${isOpen ? "open" : "close"}`}>
        <a href="">Главная</a>
        <a href="">Новости</a>
        <a href="">О нас</a>
      </nav>
      <div>
        <input type="search" name="" id="search" placeholder="Поиск..." />
      </div>
    </div>
  );
};

export default Navbar;
