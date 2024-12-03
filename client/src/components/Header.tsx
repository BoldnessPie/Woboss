import { FC } from "react";
import "./Header.css";

const Header: FC = () => {
  return (
    <header className="header">
      <h1 className="title">Новости мира о России</h1>
      <div className="countries">
        <div className="britain">Англия</div>
        <div className="germany">Германия</div>
        <div className="usa">Америка</div>
        <div className="france">Франция</div>
        <div className="china">Китай</div>
      </div>
    </header>
  );
};

export default Header;
