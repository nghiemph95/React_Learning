import React from "react";
import PropTypes from "prop-types";

function Album({ album }) {
  return (
    <div className="album">
      <p>{album.name}</p>
    </div>
  );
}

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

export default Album;
