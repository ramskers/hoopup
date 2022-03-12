import react, { useEffect } from "react";
import "../../App.css";

export default function Courts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <h1 className="courts">COURTS</h1>;
}
