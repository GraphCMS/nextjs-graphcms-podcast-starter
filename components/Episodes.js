import React from "react";
import Halftone from "../components/Halftone";
import EpisodeCard from "./EpisodeCard";
import SponsorCard from "./SponsorCard";

const Episodes = ({ episodes }) => {
  const episodeList = episodes.map((episode, index) => {
    return <EpisodeCard episode={episode} key={index} />;
  });
  episodeList.splice(2, 0, <SponsorCard />);

  return (
    <div>
      <div className="flex -mt-20 overflow-hidden text-darkgray-800 w-full">
        <Halftone width="600px" style={{ transform: "rotate(180deg)" }} />
        <Halftone width="600px" style={{ transform: "rotate(180deg)" }} />
        <Halftone width="600px" style={{ transform: "rotate(180deg)" }} />
      </div>
      <div className="bg-darkgray-800 -mt-2">
        <div className="container">
          <div className="flex flex-wrap -mx-4 items-stretch">
            {episodeList}
          </div>
          <div className="items-center flex py-12">
            <button className="text-gray-100 py-4 mx-auto px-8 bg-darkgray-900 inline-block mt-auto rounded-full font-bold ">
              Load More…
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;
