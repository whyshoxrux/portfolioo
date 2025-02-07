import { useSelector } from "react-redux";
import "./experience.scss";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const { experiences, theme } = useSelector((state) => state.data);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="cont py-5"  ref={ref} id="experience" style={{
      transform: isInView ? "none" : "translateY(200px)",
      opacity: isInView ? 1 : 0,
      transition: "all 0.9s ease 0.5s",
    }}>
      <h2 className="text-center title">Work Experience</h2>
     <h1 className="flex justify-center items-center">Soon</h1>
    </div>
  );
};

export default Experience;
