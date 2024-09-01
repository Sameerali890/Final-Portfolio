import main from "../assets/Main-img.png";
import circle from "../assets/Circbg.png";
import { Link } from "react-router-dom";
function HeroSec() {
  return (
    <div className="container px-[100px] flex">
      <div className=" w-[980px] mt-20">
        <h1 className="text-5xl font-bold">
          Hi, I'm <br /> Sameer Ali <br />
          <span className="gradient">Front-end developer</span> <br /> From
          India
        </h1>
        <div className="mt-28">
          <p className="font-medium text-[18px]">Find me on:</p>
          <div className="flex gap-5 mt-1">
            <Link to={"https://www.instagram.com/sameerkhan330/"}>
              <i className="text-3xl ri-instagram-line"></i>
            </Link>
            <Link to="https://github.com/Sameerali890">
              <i className="text-3xl ri-github-fill"></i>
            </Link>
            <Link to="https://www.linkedin.com/in/sameer-ali-331643227">
              <i className="text-3xl ri-linkedin-line"></i>
            </Link>
          </div>
          <button type="button" className="mt-16 btn">
            <a href="/images/Resume.pdf" download="Resume" className="absolute z-10 text-2xl">Download CV</a>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </button>
        </div>
      </div>
      <div className="img">
        <img
          className="relative w-[900px] right-[4%]  h-[700px] z-10 mt-[20%]"
          src={main}
          alt=""
        />
        <div>
          <img
            className="absolute size-[450px]  top-[10%] left-[38%] "
            src={circle}
            alt=""
          />
        </div>
      </div>
      <div className="">
        <h1 className="mt-40 text-2xl font-bold text-end">
          I love <span className="desing">Designing</span> and exploring{" "}
          <span className="creative">Creative</span> things which makes{" "}
          <span className="happy">Happy</span>.
        </h1>
      </div>
    </div>
  );
}

export default HeroSec;
