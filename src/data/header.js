import { CiFaceSmile } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiPizza } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export const headerMenus = [
  {
    title: "재홍님의 유튜브",
    icon: <CiFaceSmile />,
    src: "/",
  },
  {
    title: "추천 영상",
    icon: <CiYoutube />,
    src: "/today",
  },
  {
    title: "추천 개발자",
    icon: <CiMedal />,
    src: "/developer",
  },
  {
    title: "웹디자인기능사",
    icon: <CiBoxes />,
    src: "/webd",
  },
  {
    title: "웹표준 사이트",
    icon: <CiBullhorn />,
    src: "/website",
  },
  {
    title: "GSAP Parallax",
    icon: <CiCoffeeCup />,
    src: "/gsap",
  },
  {
    title: "유튜브 클론 사이트",
    icon: <CiFries />,
    src: "/youtube",
  },
  {
    title: "CalmDownMan",
    icon: <CiPizza />,
    src: "/Calmdownman/침착맨",
  },
];

export const searchKeyword = [
  {
    title: "webstoryboy",
    src: "/search/webstoryboy",
  },
  {
    title: "HTML",
    src: "/search/html",
  },
  {
    title: "CSS",
    src: "/search/css",
  },
  {
    title: "JavaScript",
    src: "/search/javascript",
  },
  {
    title: "React.js",
    src: "/search/react.js",
  },
  {
    title: "Vue.js",
    src: "/search/vue.js",
  },
  {
    title: "Next.js",
    src: "/search/next.js",
  },
  {
    title: "Node.js",
    src: "/search/node.js",
  },
  {
    title: "SQL",
    src: "/search/sql",
  },
  {
    title: "portfolio",
    src: "/search/React Portfolio",
  },
  {
    title: "music",
    src: "/search/NewJeans",
  },
];

export const snsLink = [
  {
    title: "github",
    url: "https://github.com/Jae-hong-lee/youtube-clone",
    icon: <AiFillGithub />,
  },
  {
    title: "youtube",
    url: "https://www.youtube.com/webstoryboy",
    icon: <AiFillYoutube />,
  },
  {
    title: "codepen",
    url: "https://codepen.io/webstoryboy",
    icon: <AiOutlineCodepen />,
  },
  // {
  //   title: "instagram",
  //   url: "https://www.instagram.com/webstoryboy",
  //   icon: <AiOutlineInstagram />,
  // },
];
