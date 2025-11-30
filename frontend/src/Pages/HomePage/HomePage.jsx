import "./HomePage.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowPanel(true), 50); 
  }, []);

  return (
    <div className={`home-wrapper ${showPanel ? "slide-in" : ""}`}>
          <div className="open-button-wrap">
            <Link to="/map" className="open-map-button">
              Відкрити карту
            </Link>
      </div>
    </div>
  );
}
