import { FETCH_PROJECTS_LIST } from "../constants/projects";

const initialState = {
  projectList: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS_LIST: {
      return {
        ...state,
        projectList: action.payload
      };
    }
    default:
      return state;
  }
}
