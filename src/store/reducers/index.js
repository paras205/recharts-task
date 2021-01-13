import { combineReducers } from "redux";

import organization from "./organization";
import project from "./project";

export default combineReducers({
  organization,
  project
});
