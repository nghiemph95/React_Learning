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
