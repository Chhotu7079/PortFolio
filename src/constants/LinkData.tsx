import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoDocument } from "react-icons/io5";

export interface linkDetails {
  name: string;
  link: string;
}
export const linksTabs = [
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1wM7tkKnLV2Sd21zDqg0zOhhRjhOuOMWO/view?usp=drivesdk",
  },
  {
    name: "LinkedIN",
    link: "https://www.linkedin.com/in/chhotu-kumar-2821ba227/",
  },
  {
    name: "GitHub",
    link: "https://github.com/Chhotu7079",
  },
  {
    name: "Leetcode",
    link: "https://leetcode.com/u/CHHOTU_KUMAR/",
  },
 
];

export const link_map: any = {
  Resume: IoDocument,
  LinkedIN: FaLinkedinIn,
  GitHub: TbBrandGithubFilled,
  Leetcode: SiLeetcode,
};
