import { useSelector } from "react-redux";
import "./about.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const { skills, theme } = useSelector((state) => state.data);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      id="about"
      className="cont py-5"
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s ease 0.5s",
      }}
    >
      <h2 className="text-center">Men haqimda</h2>
      <div className="text-center">
        <span
          className="bg-warning d-inline-block px-4 rounded"
          style={{ height: 6 }}
        ></span>
      </div>
      <div className="d-flex justify-content-center text-center w-100 py-3 about-description">
        <p className={`${theme == "light" && "text-dark"} w-50`}>
          Siz bu yerda men haqimda ko'proq ma'lumot olishingiz mumkin. Mening
          men haqimda ma'lumot va skillarim haqida to'liq bilib olishingiz
          mumkin
        </p>
      </div>
      <div className="d-block d-lg-flex about">
        <div
          className="w-50 p-3 about-wrap rounded-3"
          style={{
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        >
          <h3 className="mb-4">Men haqimda bilib oling!</h3>
          <p className={theme == "light" ? "text-dark" : ""}>
            &nbsp;&nbsp;
            <span className="text-warning">Shoxrux Toxirov</span>, Salom! Men
            Shoxrux Toxirov, O‘zbekistonning Farg'ona viloyati, Uchko'prik
            tumanida tug‘ilgan web dasturchiman.
            <br />
            &nbsp;&nbsp; Dasturlashga bo‘lgan qiziqishim 2023-yilning
            o‘rtalarida boshlangan. O‘sha paytda men Najot ta'limda dasturlashni
            o‘rganishga kirishdim. Keyingi ikki yil davomida NodeJs va ReactJs
            bilan shug‘ullanib, dasturlash bo‘yicha mustahkam asos yaratdim.
            &nbsp;&nbsp;
            <br />
             Men yangi g‘oyalarni hayotga tatbiq etish va hamkorlik
            qilishdan mamnun bo‘laman!
          </p>
        </div>
        <div className="w-50 p-3 about-wrap">
          <h3 className="mb-4">Skillarim</h3>
          <div className="d-flex flex-wrap">
            {skills &&
              skills.map((e, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 fw-bold rounded m-2 ${
                    theme == "dark"
                      ? "text-dark bg-body-secondary"
                      : "text-light bg-dark"
                  } skill`}
                >
                  {e}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
