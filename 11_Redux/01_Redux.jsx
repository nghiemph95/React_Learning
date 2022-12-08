/** Redux:
 * Thư viện quản lý state cho JS Apps
 * Sử dụng kiến trúc uni-directional data flow (có nghĩa là flow chỉ 1 chiều)
 *
 * Mọi state đều lưu trên Redux ? -> không :))
 * - Chỉ ưu tiên các component state
 * - Các state mà được share chung cho nhìu components/nhiều pages/nested
 * quá nhiều tầng thì có thể consider dùng redux
 * - Dùng Redux thì mọi API đều gọi qua redux action? ==> không nhé, bởi vì
 * tùy API đó có cần tác động lên state trên redux hay ko? Nếu ko thì ưu tiên
 * component state
 */

/** Redux Toolkit
 * Là một thư viện của Redux team, cung cấp sẵn các hàm tiện ích giúp cho
 * việc sử dụng Redux một cách chuẩn hơn, đơn giản và hiệu quả hơn.
 */

/** Workflow của Redux (chỉ đi đúng 1 chiều)
 *
 * View(UI, giao diện) -> Action (JS Object) -> Store(Bao gồm Reducer(func), Dispatcher và State cũ)
 * Reducer: là 1 function nhận và 2 thứ: Action và State hiện tại nhằm biến đổi state hiện tại
 * thành state mới dựa vào action
 *
 * CHÍNH NHỜ REDUCER MÀ REDUX TRỞ THÀNH PREDICTABLE
 *
 * Vì cùng 1 cái State, 1 cái Action thì nó luôn luôn cho ra 1 state mới giống nhau
 */

/** mutate data: chỉnh sửa trực tiếp trên data (object, array) mà ko phải clone ra
 * dispatch: đây actions đến reducers, đây là cách duy nhất để mutate state (thay đổi state)
 */
