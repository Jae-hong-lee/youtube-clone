import React, { useEffect, useState } from "react";
import Main from "../components/section/Main";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/api";
import VideoSearch from "../components/video/VideoSearch";

const Calmdownman = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const { calmdownmanID } = useParams();

  useEffect(() => {
    setVideos([]);
    fetchData(calmdownmanID);
    setLoading(true);
  }, [calmdownmanID]);

  const fetchData = (query, pageToken = "") => {
    fetchFromAPI(
      `search?part=snippet&type=video&q=${query}&pageToken=${pageToken}`
    )
      .then((data) => {
        setNextPageToken(data.nextPageToken);
        setVideos((prevVideos) => [...prevVideos, ...data.items]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleLoadMore = () => {
    if (nextPageToken) {
      fetchData(calmdownmanID, nextPageToken);
    }
  };

  const CalmdownmanClass = loading ? "isLoading" : "isLoaded";

  return (
    <Main
      title="침착맨 유튜브 사이트"
      description="침착맨 유튜브 사이트 입니다"
    >
      <section id="youtubePage" className={CalmdownmanClass}>
        <h2>🤙 침착하게 침착맨 가져오기</h2>
        <div className="video__inner search">
          <VideoSearch videos={videos} />
        </div>
        <div className="video__more">
          {nextPageToken && <button onClick={handleLoadMore}>더 보기</button>}
        </div>
      </section>
    </Main>
  );
};

export default Calmdownman;
