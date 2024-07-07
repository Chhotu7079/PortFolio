import { buttonTabsDetail } from "../../constants/ProjectData";

const Buttons = ({ name }: buttonTabsDetail) => {
  return (
    <span className="bg-lightGrey px-2 py-1 text-base text-white dark:bg-lightGrey dark:text-lighter">
      {name}
    </span>
  );
};

export default Buttons;
