import { useSelector } from "react-redux";
import "./landing.scss";
import ParticlesBg from "./particlesBg";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Landing = () => {
  const {theme} = useSelector(state => state.data)
  const handleDownload = () => {
    fetch("CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV.pdf";
        alink.click();
      });
    });
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="header w-100 d-flex align-items-center justify-content-centert position-relative">
      <ParticlesBg />
      <div
        className="header-wrap text-center w-100 z-3"
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <h1 className={`${theme == 'dark' ? 'text-light' : 'text-dark'} fw-bold user-select-none`}>
          SHOXRUX TOXIROV
        </h1>
        <p className={`${theme == 'dark' ? 'text-light' : 'text-dark'} text-uppercase user-select-none`}>
          Salom men Fullstack developerman. Men web-saytlar va ilovalar yarataman.{" "}
          <br />
          Agar sizga web-sayt kerak bo'lsa men bilan bog'laning
        </p>
        <a href="#contact" className="btn btn-warning px-4 py-2">
          Bog'lanish
        </a>
        {/* <button
          onClick={handleDownload}
          href="#"
          className="btn btn-outline-warning ms-2 px-4 py-2"
        >
          CV
        </button> */}
      </div>
      <div className={`position-absolute down ${theme == 'light' && 'border-dark'}`}>
        <span className={theme == 'light' ? 'bg-dark' : ''}></span>
      </div>
    </div>
  );
};

export default Landing;
