import Buttons from "./Buttons";
import { projectTabsDetail } from "../../constants/ProjectData";
import food from "../../utils/projectImg/foodVilla.png";
import unsplash from "../../utils/projectImg/myntra.png";
import docs from "../../utils/projectImg/quiz.png";
// import youtube from "../../utils/projectImg/youtube.jpeg";
import weather from "../../utils/projectImg/weather.png";
import razorpay from "../../utils/projectImg/razorpay.png";

export const picture_map: any = {
  food: food,
  unsplash: unsplash,
  docs: docs,
  // youtube: youtube,
  razorpay: razorpay,
  weather: weather,
};

const Layout = (detail: projectTabsDetail) => {
  const {
    id,
    projectName,
    subHeading,
    desc,
    align,
    buttonTabs,
    repoLink,
    liveLink,
  } = detail;
  const Image = picture_map[id];
  return (
    <div
      className={`w-full flex lg:h-80 gap-2 flex-col lg:gap-8 ${
        align ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div
        className={`hidden lg:block lg:w-1/12 h-full bg-gradient-to-t from-[#cc0479] via-[#ff0096] to-[#ff4cb5]`}
      ></div>
      <a
        href={liveLink}
        target="_blank"
        className="lg:w-5/12 lg:h-full border-2 dark:border-grey hover:bg-black/60"
      >
        <img
          src={Image}
          alt="project"
          className="object-fill w-full h-full hover:opacity-50"
        />
      </a>
      <div className="lg:w-6/12 xl:w-5/12 lg:h-full flex flex-col items-center lg:items-start justify- gap-6 lg:gap-1">
        <h4 className="text-xl leading-none tracking-wide lg:h-[10%] ">
          {subHeading}
        </h4>
        <div className="flex flex-col lg:justify-between items-center lg:items-start lg:h-[75%] gap-6">
          <h1 className="text-5xl leading-none tracking-wide text-highlighter min-h-10">
            {projectName}
          </h1>
          <div className="flex gap-2 flex-wrap ">
            {buttonTabs.map((btn, index) => {
              return <Buttons name={btn.name} key={index} />;
            })}{" "}
          </div>
          <p className="text-md xl:text-lg text-ellipsis overflow-hidden w-[90%] lg:w-full">
            {desc}
          </p>
        </div>
        <div className="lg:h-[15%] flex gap-2">
          {liveLink != "" && (
            <a href={liveLink} target="_blank">
              <button className="border-2 py-2 px-4 rounded-xl border-lightGrey text-lightGrey hover:text-darkest dark:border-lighter dark:text-lighter hover:border-highlighter dark:hover:border-highlighter dark:hover:text-white ">
                View demo
              </button>
            </a>
          )}
          {repoLink != "" && (
            <a href={repoLink} target="_blank">
              <button className="border-2 py-2 px-4 rounded-xl border-lightGrey text-lightGrey hover:text-darkest dark:border-lighter dark:text-lighter hover:border-highlighter dark:hover:border-highlighter dark:hover:text-white ">
                View repository
              </button>
            </a>
          )}
        </div>
      </div>
      <div className="xl:w-1/12 xl:block hidden"></div>
    </div>
  );
};

export default Layout;
/**
 *
 * hover - text
 * images
 * color of block
 *
 */
