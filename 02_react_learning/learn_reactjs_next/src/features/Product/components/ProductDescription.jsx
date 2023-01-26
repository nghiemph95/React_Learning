import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Paper } from '@material-ui/core';

ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
  /** Khi render 1 chuỗi HTML từ server cần chú ý:
   * + Trong chuỗi html sẽ có thể tồn tại các thẻ script và kẻ gian có thể
   * lợi dụng để scripting nó nhằm đánh cắp thông tin (từ localStorage, session, ...)
   * và gửi lên server của hacker
   *
   * + Giải pháp: Cần làm thêm bước Sanitize, dùng package DomPurify để
   * loại bỏ các rủi ro XSS tiềm ẩn
   */
  const safeDescription = DOMPurify.sanitize(product.description);

  return (
    <Paper elevation={0} style={{ padding: '15px' }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Paper>
  );
}

export default ProductDescription;
