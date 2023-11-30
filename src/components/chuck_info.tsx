import React from "react";

type ChuckInfoProps = {
  whalesSaved: number;
  kicks: number;
};

const ChuckInfo: React.FC<ChuckInfoProps> = ({
  whalesSaved,
  kicks,
}: ChuckInfoProps) => {
  return (
    <>
      <p>Number of Whales Saved: {whalesSaved}</p>

      <p>Number of Round House Kicks (in the last day): {kicks}</p>
    </>
  );
};

export default ChuckInfo;
