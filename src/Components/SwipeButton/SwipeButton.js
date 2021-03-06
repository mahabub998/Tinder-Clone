import React from "react";
import "./SwipeButton.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function SwipeButton() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon className="swipeButtons__repeat" fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon className="swipeButtons__left" fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRateIcon className="swipeButtons__star" fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <FavoriteIcon className="swipeButtons__right" fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lighting">
        <FlashOnIcon className="swipeButtons__lighting" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
