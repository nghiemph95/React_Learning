import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhạc Việt",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/f/2/4/ef24ec92aa1ed9073d4a8bb471a08d50.jpg",
    },
    {
      id: 2,
      name: "Rap Việt",
      title:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/0/d/d/10dd6f469f1e054fb88fe101af95ecd8.jpg",
    },
    {
      id: 3,
      name: "Trào Lưu Đang Hot",
      title:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/8/5/0/88507fb5f1862276c5b696eb090eb72b.jpg",
    },
  ];

  return (
    <div>
      <h3>Có thể bạn thích đấy</h3>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
