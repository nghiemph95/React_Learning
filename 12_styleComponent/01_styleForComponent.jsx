/** Các cách style cho Components
 * 1. Inline styles: Hạn chế sử dụng
 * 2. CSS
 * 3. SCSS + BEM: Nên dùng
 * 4. CSS Module: Tạo ra unique class bằng cách thêm các chuỗi ký tự vào tên class
 * 5. Styled Component
 * 6. Material Styles
 */

/** SCSS + BEM(quy chuẩn đặt tên) */
// style.scss
/**  
.card {
  &__title {
    color: red;
  }

  &__description {
    color: black;
  }
}
*/

import "./styles.scss";
function Card() {
  return (
    <div className="card">
      <h2 className="card__title">Title</h2>
      <p className="card__description">Description ...</p>
    </div>
  );
}
