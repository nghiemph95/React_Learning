/** Mặc định khi
 * exact = false thì Route sẽ match khi URL bắt đầu với kí tự đầu tiên của Path
 * excal = true thì Route sẽ match khi và chỉ khi URL = path
 */

/** Ví dụ:
 * exact  path            URL        Match
 * false  /               /todos     YES
 * false  /               /albums    YES
 * false  /todos          /albums    NO
 * false  /todos          /todos     YES
 * false  /todos          /todos/123 YES
 * true   /               /          YES
 * true   /               /todos     NO
 * true   /               /albums    NO
 * true   /todos          /todos     YES
 * true   /todos          /todos/123 NO
 * true   /todos/:todoId  /todos/123 YES
 */
