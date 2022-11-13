/** Một vài hook của React hiện tại:
 * useState()
 * useEffect()
 * useCallBack()
 * useRef()
 *
 * TUY NHIÊN vẫn có thể tự custom 1 hook riêng
 * vừa có thể sử dụng giữa nhiều loại hook khác nhau
 */

const { useEffect, useState } = require("react");

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

/** Ví dụ sử dụng custom Hook đơn giản */
// Bước 1: Từ hàm reder bình thường sử dụng react Hook
function Clock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      // HH:mm:ss
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);

    return () => {
      //clean up
      console.log("Clock cleanup");
      clearInterval(clockInterval);
    };
  }, []);

  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

// Bước 2: Copy toàn bộ hàm bên trên và đổi tên thành useClock()
function useClock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      // HH:mm:ss
      const newTimeString = formatDate(now);

      setTimeString(newTimeString);
    }, 1000);

    return () => {
      //clean up
      console.log("Clock cleanup");
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString };
}

// Bước 3: Gắn customHook vào các function đã được định
function Clock() {
  const { timeString } = useClock();

  return <p style={{ fontSize: "42px" }}>{timeString}</p>;
}

function BetterClock() {
  const { timeString } = useClock();

  return (
    <div className="better-clock">
      <p className="better-clock__time">{timeString}</p>
    </div>
  );
}
