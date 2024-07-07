import { headerTabsDetails } from "../../constants/HeaderData";

const Tabs = ({ name, navigateTo }: headerTabsDetails) => {
  return (
    <a href={navigateTo} className="hover:text-highlighter">
      <h3 className="tracking-wider">{name}</h3>
    </a>
  );
};

export default Tabs;
