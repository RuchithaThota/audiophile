import React from "react";
import SpeakerOne from "../components/Speakers/SpeakerOne";
import SpeakerTwo from "../components/Speakers/SpeakerTwo";

function SpeakersPage() {
  return (
    <div className="flex flex-col gap-28">
      <SpeakerOne />
      <SpeakerTwo />
    </div>
  );
}

export default SpeakersPage;
