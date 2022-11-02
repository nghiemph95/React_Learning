/** chia nhỏ giao diện thành nhiều phần nhỏ để quản lý gọi là components */

/** Phân loại component
 * Chia theo cú pháp:
 * 1. Class component
 * 2. Functional component (dễ sử dụng với Hook, linh hoạt)
 *
 * Chia theo chức năng:
 *
 * 1. Container component (đi theo hướng là người quản lý dữ liệu)
 * - stateful
 * - quan tâm dữ liệu là gì
 * - không biết hiển thị là gì
 * - truyền dữ liệu xuống presentational component
 *
 * 2. Presentational component (không quản lý dữ liệu nhưng biết cách render)
 * - stateless
 * - quan tâm đến hiển thị như thế nào
 * - không biết dữ liệu từ đâu ra
 * - nhận dữ liệu từ container
 */
