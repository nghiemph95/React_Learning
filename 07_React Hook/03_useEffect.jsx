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

/** useEffect() là gìL
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
