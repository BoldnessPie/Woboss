import "./App.css";
import { FC } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Article from "./components/Article";

const App: FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Article />
      <Main />
    </div>
  );
};

export default App;
