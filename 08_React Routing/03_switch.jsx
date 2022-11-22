/** Switch
 * Mục đích: Nếu component nào match trước thì sẽ render trước
 */

/** Component todoFeature sẽ đc render trước tiên */
import { Route, Switch } from "react-router-dom";

<Switch>
  <Route path="/todos" component={TodoFeature} />
  <Route path="/albums" component={AlbumFeature} />
</Switch>;
