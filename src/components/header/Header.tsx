import { headerTabs } from "../../constants/HeaderData";
import Tabs from "../shared/Tabs";
import { TbMoonFilled } from "react-icons/tb";
import useTheme from "../../context/Theme";
import { BsSunFill } from "react-icons/bs";

const Header = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const toggle = () => {
    if (themeMode === "light") {
      darkTheme();
    } else lightTheme();
  };
  return (
    <div className="w-full flex justify-center items-center h-20">
      <div className="sm:w-[80%] h-full flex justify-between items-center gap-2 ">
        <div className="h-full w-full flex justify-end items-center text-lg sm:text-2xl gap-8 px-2 ">
          {headerTabs.map((tab, index) => {
            return (
              <Tabs name={tab.name} navigateTo={tab.navigateTo} key={index} />
            );
          })}
        </div>
        <button
          className="h-10 w-12 rounded-full flex items-center justify-center text-lg sm:text-2xl text-[#cc0479]"
          onClick={() => toggle()}
        >
          {themeMode === "light" ? <TbMoonFilled /> : <BsSunFill />}
        </button>
      </div>
    </div>
  );
};

export default Header;
