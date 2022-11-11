/** Constructor: Khai báo thuộc tính, khai báo state
 * - Được phép dùng
 * - Phải có super(props)
 * - Khai báo state
 * - Định nghĩa properties của components
 */

import { PureComponent } from "react";

class App extends PureComponent {
  constructor(props) {
    super(props);

    /** Khai báo thuộc tính */
    this.DEFAULT_MAX_LENGTH = 10;
    this.state = {
      productList: [],
    };
  }
}
