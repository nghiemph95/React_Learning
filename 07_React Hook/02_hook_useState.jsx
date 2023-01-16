/** useState chính xác là một hook cơ bản:
 * - Giúp cho FC có thể sử dụng state
 * - Input: initialState (giá trị khởi tạo của state hoặc cb function)
 * - Output: 1 mảng gồm 2 phần tử là state và setState(hàm giúp mình có thể cập nhật giá trị mới cho state)
 * - Cách dùng: const [name, setName] = useState('Nghiêm')*/

const { useState } = require("react");

/** useState example */
function TodoList() {
  const [todoList, setTodoList] = useState(["love", "easy", "test"]);

  function removeTodo(index) {
    const newTodoList = [...todoList];

    newTodoList.splice(index, 1); // Xóa 1 phần tử ở vị trí indexxxx
    setTodoList(newTodoList);
  }

  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => {
        <li
          key={todo.id}
          onClick={() => {
            removeTodo(index);
          }}
        >
          {todo.title}
        </li>;
      })}
    </ul>
  );
}

/** Lưu ý khi dùng state:
 * - useState() sử dụng REPLACING thay vì MERGING
 */

// setState() in class component: MERGING
this.state = { name: "Test", color: "red" };
this.setState({ color: "green" }); // -> {name: "test", color: 'green'}

// useState() in functional component: REPLACING
const [person, setPerson] = useState({ name: "Test", color: "red" });
setPerson({ color: "green" }); // -> {color: 'green'}
setPerson({ ...person, color: "green" });

/** Lưu ý khi dùng state:
 * - Initial state chỉ dùng cho lần đầu , những lần sau nó bị bỏ rơi
 * * Nên là nếu muốn sử dụng nó 1 lần duy nhất thì sử dụng callback
 */

function ColorBox() {
  const [color, setColor] = useState(() => {
    // Sử dụng callback và function sẽ được call 1 lần
    const initColor = getComplicatedColor();
    return initColor;
  });
}

/** TỔNG KẾT:
 * - useState() giúp FC có thể dùng State
 * - useState() trả về 1 mảng 2 phần tử [name, setName]
 * - useState() áp dụng replacing thay vì mergin như bên class component
 * - initial state callback chỉ thực thi 1 lần đầu
 */
