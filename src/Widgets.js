import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
          <FiberManualRecordIcon/>
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('Russia launches massive cyber attacks on Ukraine.', 'Tech News')}
      {newsArticle('New 0day attacks are unfolding.', 'Tech News')}
      {newsArticle('Banks and financial institutions are in a state of high alert.', 'Tech News')}
      {newsArticle('It\'s bad enough to have a physical war and all the innocent people\'s life gets destroyed.', 'Tech News, Google')}


    </div>
  );
}

export default Widgets;
