/** sideEffect là gì: (nôm na là những thứ ngoài component)
 * - gọi API để lấy dữ liệu
 * - tương tác với DOM
 * - Subscription
 * - setTimeout, setInterval
 *
 * ** Có 2 loại side effect:
 * - Effects không cần clean up: gọi API, tương tác DOM
 * - Effects cần clean up: subscriptions, setTimeout, setInterval
 */

const { func } = require("prop-types");
const { PureComponent } = require("react");

/** useEffect() là gì
 * - Là 1 cái hook trong React Hook
 * - Sử dụng cho FC để sử dụng side effect
 * - Mỗi hook useEffect gồm 2 thành phần: side effect và clean up (optional)
 * - THỰC THI SAU MỖI LẦN RENDER
 * - Tuy nhiên nó còn có dependency và sau mỗi lần render nó còn TÙY THUỘC VÀO DEPENDENCY
 */

/** useEffect example */
// truyền vào hàm callback: Đây là side effect function
// truyền vào danh sách dependencies: chỉ execute cb nếu 1 trong số dependency changes
function useEffect(callback, dependencies) {}

function App() {
  // executed before each render
  const [color, setColor] = useState("deeplink");

  // executed after each render
  useEffect(() => {
    // do your side effect here...

    return () => {
      // clean up here...
      // executed before the next render or unmount
    };
  }, []);

  // renderinggg
  return <h1>Easy Testing</h1>;
}

/** Flow run useEffect
 * MOUNTING:
 * - rendering
 * - run useEffect() (run side effect)
 *
 * UPDATING:
 * - rendering
 * - run 'useEffect() cleanup' nếu dependencies thay đổi
 * - run 'useEffect()' nếu dependencies thay đổi
 *
 * UNMOUNTING:
 * - run 'useEffect() cleanup'
 */

/** DEPENDENCY (useEffect kèm điều kiện)
 * - Nếu không khai báo Dependencies thì có nghĩa là nó luôn luôn được thực hiện (Tức là luôn
 * luôn được chạy sau mỗi lần render)
 * - Nếu là [] thì có nghĩa là nó chỉ chạy đúng 1 lần sau lần đầu tiên
 * - Nếu là [có dữ liệu] thì có nghĩa là nếu dependencies thay đổi thì mới chạy lại useEffect() (Tức là
 * nếu truyền vào 1 state mà state thay đổi thì nó sẽ gọi lại useEffect())
 */

/** Biểu diễn code tương tự với Class Component */
// Class component
class App extends PureComponent {
  componentDidMount() {
    console.log("Component Did Mount");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }
}

// Hook - Functional Components
function App() {
  useEffect(() => {
    console.log("Component Did Mount");

    return () => {
      console.log("Component Will Unmount");
    };
  }, []);
}
