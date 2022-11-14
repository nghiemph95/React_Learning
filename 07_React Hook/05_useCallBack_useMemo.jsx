/** UseCallback() là 1 react hook giúp tạo ra một memozied callback và chỉ tạo ra callback
 * mới khi dependencies thay đổi
 * - Nhận vào 2 tham số: 1 là function, 2 là dependencies
 * - Return memoized callback
 * - chỉ tạo ra function mới khi dependencies thay đổi
 * - nếu dùng empty dependencies thì không bao giờ tạo ra func mới
 */

const { useCallback, useMemo } = require("react");

/** ví dụ: */
// Mỗi lần app re-renderr
// --> tạo ra một function mới
// --> chart bị re-render
function App() {
  const handleChartTypeChange = (type) => {};
  return <Chart onTypeChange={handleChartTypeChange} />;
}

// Mỗi lần App re-render
// --> Nhờ có useCallback() nó chỉ tạo ra function một lần đầu
// --> Nên chart ko bị re-render (re-render là tạo ra 1 func mới)
function App() {
  const handleChartTypeChange = useCallback((type) => {}, []);
  return <Chart onTypeChange={handleChartTypeChange} />;
}

/** UseMemo() là 1 react hook giúp tạo ra một memozied value và chỉ tính toán ra value
 * mới khi dependencies thay đổi
 * - Nhận vào 2 tham số: 1 là function, 2 là dependencies
 * - Return memoized value
 * - chỉ tính toán ra value mới khi dependencies thay đổi
 * - nếu dùng empty dependencies thì không bao giờ tính toán lại value mới
 */

/** ví dụ: */
// Mỗi lần app re-render
// --> tạo ra một mảng mới
// --> chart bị re-render do props thay đổi
function App() {
  const data = [{}, {}, {}];
  return <Chart data={data} />;
}

// Mỗi lần App re-render
// --> Nhờ có useMemo() nó chỉ tạo ra mảng chỉ 1 lần đầu
// --> Nên chart ko bị re-render (re-render là tạo ra 1 func mới)
function App() {
  const data = useMemo(() => [{}, {}, {}], []);
  return <Chart data={data} />;
}

/** TỔNG KẾT:
 * GIỐNG:
 * - Đều áp dụng kỹ thuật memoization
 * - Đều nhận vào 2 tham số: func và dependencies
 * - Đều là react hooks, dùng cho FC
 * - Dùng để hạn ché những lần re-render dư thừa
 *
 * KHÁC:
 * - return: memoized callback và memoized value
 * - useCallBack((type)=> {}, [])
 * - useMemo(()=> [{}, {}, {}], [])
 */
