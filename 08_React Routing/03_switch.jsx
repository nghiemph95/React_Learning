/** Switch
 * Mục đích: Nếu component nào match trước thì sẽ render trước
 * Tức là switch chỉ render thằng route đầu tiền mà nó có path match vs Url hiện tại
 */

/** Component todoFeature sẽ đc render trước tiênnn */
import { Route, Switch } from "react-router-dom";

<Switch>
  <Route path="/todos" component={TodoFeature} />
  <Route path="/albums" component={AlbumFeature} />
</Switch>;
