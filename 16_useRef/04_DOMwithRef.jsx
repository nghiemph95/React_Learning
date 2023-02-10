/**To access a DOM node managed by React, first, import the useRef Hook:*/
import { useRef } from "react";

/** Then, use it to declare a ref inside your component: */
const myRef = useRef(null);

/** Finally, pass it to the DOM node as the ref attribute: */
<div ref={myRef}></div>;

/** lấy DOM từ useRef chỉ khi render lần 2 thì useRef mới có giá trị
 * lần đầu tiên render useRef vẫn nhận giá trị là null
 */
