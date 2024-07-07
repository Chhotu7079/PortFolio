import Skill from "../skills/Skill";
import Intro from "./Intro";
import Links from "../shared/Links";
import Salutation from "./Salutation";
import { link_map, linksTabs } from "../../constants/LinkData";
import TimeLineBox from "./TimeLineBox";
import Projects from "./Projects";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start pt-10 gap-16">
      <div className="w-[90%] sm:w-[80%] pl-2">
        <Salutation />
        <Intro />
        <Links tabs={linksTabs} icons={link_map} />
      </div>
      <div
        id="skills"
        className="w-full h-full flex flex-col items-center justify-start pt-10"
      >
        <Skill />
      </div>
      <div
        id="work"
        className="w-full h-full flex flex-col items-center justify-start pt-10"
      >
        <TimeLineBox />
      </div>
      <div
        id="projects"
        className="w-full h-full flex flex-col items-center justify-start pt-10"
      >
        <Projects />
      </div>
    </div>
  );
};
export default Home;
