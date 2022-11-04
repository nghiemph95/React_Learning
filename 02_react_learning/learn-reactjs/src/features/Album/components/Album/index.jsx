import React from "react";
import PropTypes from "prop-types";

function Album({ album }) {
  return (
    <div className="album">
      <div className="album__thumbnail">
        <img src={album.thumbnailUrl} alt={album.name} />
      </div>
      <p className="album__name">{album.name}</p>
    </div>
  );
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

export default Album;
