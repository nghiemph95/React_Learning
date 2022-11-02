/** JSX là viết tắt của Javascript XML được sử dụng trong ReactJS để giúp code clean/clear hơn
 * - Trình duyệt sẽ ko hiểu JSX mà phải được chuyển đổi thành JS để trình duyệt có thể
 * hiểu được
 */

/** Do trong JS đã có từ khóa class và for
 * nên khi sử dụng JSX, nó ko cho sử dụng lại nữa mà phải dùng:
 * className (thay cho Class) và htmlFor (thay cho for)
 */

// Ví dụ
const title = "What is JSX?";
const jsx = (
  <section className="hero">
    <h1 className="hero__title">{title}</h1>
    <p className="hero__description">JSX stands for Javascript XML.</p>
    <ul style={{ fontSize: "14px" }}>
      <li>Simple to learn</li>
      <li>Ease to use</li>
      <li>Familiar with JS developer</li>
    </ul>
    <div className="form-group">
      <label htmlFor="fullName">Full name</label>
      <input type="text" id="fullName" />
    </div>
  </section>
);
