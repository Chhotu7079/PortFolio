import { linkDetails } from "../../constants/LinkData";
import { Tooltip } from "@mui/material";

interface links {
  tabs: linkDetails[];
  icons: any;
}
const Links = ({ tabs, icons }: links) => {
  return (
    <div className="pt-5 w-full flex items-center justify-start gap-5">
      {tabs.map(({ name, link }: linkDetails, index: number) => {
        const LinkLogo = icons[name];
        return (
          <Tooltip title={name} key={index}>
            <a href={link} target="_blank">
              <span className="h-[1.5em] w-[1.5em] sm:h-[2em] sm:w-[2em] text-[1.85em] bg-lightGrey hover:bg-darkest text-white dark:bg-lighter dark:hover:bg-white dark:text-dark rounded-full flex justify-center items-center">
                <LinkLogo />
              </span>
            </a>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default Links;
