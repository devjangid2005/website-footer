import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <footer>
      <div className="mainFooter">
        <div className="content">
          <h3>Laxmi Devi Institute Of Engineering</h3>
          <h3>& Technology</h3>
          <span>Alwar-Tijara-Delhi Highway</span>
          <br />
<span>Chikani, Alwar,</span>
<br />
<span>Rajasthan
India –  301028</span>
        </div>
        <div className="content">
          <h3>Quick Links</h3>
          <ul className="nav">
            <li><a href="">Contact us</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">About LIET</a></li>
            <li><a href="">About Board Of Management</a></li>
          </ul>
        </div>
        <div className="content"> 
          <h3>Courses</h3>
          <ul className="nav">
            <li><a href="">B.Tech</a></li>
            <li><a href="">M.Tech</a></li>
            <li><a href="">MBA</a></li>
          </ul>
        </div>
        <div className="conent">
          <h3>External Links</h3>
          <ul className="nav">
            <li><a href="">AICTE</a></li>
            <li><a href="">BTU</a></li>
            <li><a href="">BTER</a></li>
            <li><a href="">DELNET</a></li>
          </ul>
        </div>
        
      </div>
     </footer>
    </>
  );
}

export default App;
