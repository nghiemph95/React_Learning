import { useState } from 'react';

// pure
// impure
let run = 0;
function calCount() {
  run += 5;
  console.log('calc count', run);
  return run;
}
/** Lưu ý:
 * 1. initialize value chỉ tác dụng đúng lần render đầu tiên
 * 2. hàm calCount có thể bị gọi 2 lần dưới dev mode để check xem hàm có phải là pure hay ko
 * hay là nó bị impure, nhiệm vụ đảm bảo nó phải là pure func
 * 3. Hàm setState là 1 hàm bất đồng bộ (async function)
 */

/** Chỉ dùng updater function khi
 * 1. Có  nhiều setState trong 1 event và state mới đc tính toán dự trên state cũ
 * 2. Không lấy đc state mới nhất ví dụ khi gọi nhiều setState truyền vào giống nhau
 */

function App() {
  let i = 0;

  const [showMore, setShowMore] = useState(false);
  /** Truyền vào calCount = calback function */
  const [count, setCount] = useState(calCount); // chỉ tác dụng lần render đầu tiên
  const [name, setName] = useState('');

  function handleIncreaseClick() {
    const newCount = count + 1;
    setCount(count + 1); // asyn func
    console.log('after setting count', newCount); // receive old count
    i += 5;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncreaseClick}>Click to count</button>

      {showMore && <p>{name}</p>}
    </div>
  );
}

export default App;
