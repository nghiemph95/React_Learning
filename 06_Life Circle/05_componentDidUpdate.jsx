/** Qúa trình update mỗi khi prop/state thay đổi hoặc là forceUpdte
 * Mỗi lần component thay đổi thì sẽ trigger componentDidUpdate
 */

/** không nên sử dụng setState trong componentDidUpdate vì nó sẽ setState liên tục
 * dẫn đén vòng lặp vô tận
 */
