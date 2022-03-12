import react, { useEffect } from "react";
import "../../App.css";

export default function Groups() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <h1 className="groups">GROUPS</h1>;
}
