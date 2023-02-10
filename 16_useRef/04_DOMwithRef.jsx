/**To access a DOM node managed by React, first, import the useRef Hook:*/
import { useRef } from "react";

/** Then, use it to declare a ref inside your component: */
const myRef = useRef(null);

/** Finally, pass it to the DOM node as the ref attribute: */
<div ref={myRef}></div>;

/** lấy DOM từ useRef chỉ khi render lần 2 thì useRef mới có giá trị
 * lần đầu tiên render useRef vẫn nhận giá trị là null
 */

/** You can use any browser APIs, for example: */
myRef.current.scrollIntoView();

/** Lưu ý: Khi React trigger update sẽ có 2 giai đoan: Render(tính toán) - Commit(apply)
 * React sẽ set ref.current trong khi commit
 * Trước khi update DOM, React set ref.current = null sau khi Render xong
 * Sau khi update DOM, React sẽ set lại ref.current tới DOM tương ứng
 */
