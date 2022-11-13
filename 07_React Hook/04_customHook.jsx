/** Một vài hook của React hiện tại:
 * useState()
 * useEffect()
 * useCallBack()
 * useRef()
 *
 * TUY NHIÊN vẫn có thể tự custom 1 hook riêng
 * vừa có thể sử dụng giữa nhiều loại hook khác nhau
 */

const { useEffect } = require("react");

/** Đối với FC thì React Hook return về JSX/TSX còn đối
 * với custom Hook thì lại return về Data, Dữ liệu, biến, object, array...
 */

/** Ví dụ: */
function useMaginColor() {
  const [color, setColor] = useState("green");

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const newColor = randomColor();
      setColor(newColor);
    }, 2000);

    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  //custom hook return data thay vì JSX giống như React Hooks
  return color;
}

/** Khi nào cần dùng custom hooks:
 * - Tách riềng biệt phần login ra khỏi phần UI
 * - Chia sẻ logic giữa các component
 */

function MaginBox() {
  const color = useMaginColor(); // Sử dụng 1 logic đã được viết bên ngoài

  return <div class="magic-box" style={{ backgroundColor: color }}></div>;
}
