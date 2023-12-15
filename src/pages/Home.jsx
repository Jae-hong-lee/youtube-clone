import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import Today from "../components/contents/Today";
import Developer from "../components/contents/Developer";
import VideoSlider from "../components/video/VideoSlider";
// import VideoSliderData from "../components/video/VideoSliderData";

import { webdText } from "../data/webd";
import { websiteText } from "../data/website";
import { gsapText } from "../data/gsap";
import { youtubeText } from "../data/youtube";
import { developerText } from "../data/developer";
import { todayText } from "../data/today";
import { fetchFromAPI } from "../utils/api";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([]);
    fetchData("침착맨");
  }, []);

  const fetchData = (query) => {
    fetchFromAPI(`search?part=snippet&type=video&q=${query}`)
      .then((data) => {
        setVideos((prevVideos) => [...prevVideos, ...data.items]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <Main
      title="재홍님의 유튜브"
      description="재홍님의 유튜버 사이트에 오신 것을 환영합니다."
    >
      <Today videos={todayText} id="today" />

      <Developer
        videos={developerText}
        title="😪 추천 개발자를 소개합니다."
        id="developer"
      />

      <VideoSlider
        videos={webdText}
        title="😮 웹디자인기능사 준비는 이걸로!"
        id="webd"
      />
      <VideoSlider
        videos={websiteText}
        title="😛 웹표준 사이트 만들기 기초 다지기"
        id="website"
      />
      <VideoSlider
        videos={gsapText}
        title="🤓 GSAP 패럴랙스 효과를 하고 싶다면!"
        id="gsap"
      />

      <VideoSlider
        videos={youtubeText}
        title="😱 지금 이 코딩을 영상으로"
        id="youtube"
      />
      <VideoSlider
        videos={videos}
        title="🤙 우리 모두 침착하자"
        id="calmdownman"
      />
    </Main>
  );
};

export default Home;
