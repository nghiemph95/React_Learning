import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Test',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/8/7/b/487b369c7c22790817a269f2408d37a7.jpg',
    },
    {
      id: 2,
      name: 'Test2',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/a/0/f/7a0f8e7dab9474f5624738d98b7dd81b.jpg',
    },
    {
      id: 3,
      name: 'Test3',
      thumbnailUrl:
        'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/9/1/9/3919ce3362f7c047df32f87b717e6cc8.jpg',
    },
  ];
  return (
    <div>
      <h2>Có thể bạn thích đấy!!</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
