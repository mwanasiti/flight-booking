import React from "react";

function StarRating({ percentage }) {
  const widthPct = `${percentage * 100}%`;

  return (,
    <div className="star-rating">
      <span className="foreground" style={{ width: widthPct }}>
        ★★★★★
      </span>
      <span className="background">★★★★★</span>
    </div>
  );
}

export default StarRating;