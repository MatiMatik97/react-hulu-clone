import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";

const VideoCard = forwardRef(({ movie }, ref) => {
  const {
    backdrop_path,
    poster_path,
    overview,
    title,
    original_name,
    vote_count,
    release_date,
    first_air_date,
    media_type,
  } = movie;

  return (
    <div ref={ref} className="videoCard">
      <img
        src={`https://image.tmdb.org/t/p/original/${
          backdrop_path || poster_path
        }`}
        alt=""
      />
      <TextTruncate line={2} element="p" truncateText="..." text={overview} />
      <h2>{title || original_name}</h2>
      <p className="videoCard__stats">
        {media_type && `${media_type} * `}
        {release_date || first_air_date}
        <ThumbUpIcon /> {vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
