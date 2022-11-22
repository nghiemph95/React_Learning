/** Hook
 * useHistory: Trả về history instance, dùng để navigate
 * useLocation: Trả về location object của URL hiện tại
 * useParams: Trả về path params object của URL hiện tại
 * useRouteMatch: Trả về match object của URL hiện tại
 *
 * Ghi chú:
 * useHistory() để di chuyển từ trang này qua trang khác
 * useLocation() để lấy location của param hiện tại (thường xử lý với URL params)
 * useParams() lấy thông tin của path param
 * useRouteMatch() để dùng cho nested routing
 *
 * Phân biệt Path params vs URL params
 * Path Params:
 * - Routh có path: /todos/:todoId
 * - User visit: /todos/123 -> Path params là { todoId: '123'}
 *
 * URL Params:
 * - User vào đường dẫn: /todos?page=1&size=10 -> URL params là phần sau ?
 */
