import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/section/Main";

const Home = lazy(() => import("./pages/Home"));
const Today = lazy(() => import("./pages/Today"));
const Developer = lazy(() => import("./pages/Developer"));
const Webd = lazy(() => import("./pages/Webd"));
const Website = lazy(() => import("./pages/Website"));
const Gsap = lazy(() => import("./pages/Gsap"));
const Youtube = lazy(() => import("./pages/Youtube"));
const Channel = lazy(() => import("./pages/Channel"));
const Video = lazy(() => import("./pages/Video"));
const Search = lazy(() => import("./pages/Search"));
const Calmdownman = lazy(() => import("./pages/Calmdownman"));
const Not = lazy(() => import("./pages/Not"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/webd" element={<Webd />} />
          <Route path="/website" element={<Website />} />
          <Route path="/gsap" element={<Gsap />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/channel/:channelID" element={<Channel />} />
          <Route path="/video/:videoID" element={<Video />} />
          <Route path="/search/:searchID" element={<Search />} />
          <Route path="/calmdownman/:calmdownmanID" element={<Calmdownman />} />
          <Route path="/*" element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
