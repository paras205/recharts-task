import { FETCH_ORGANIZATION_LIST } from "../constants/organization";

const initialState = {
  organizationList: []
};

const organizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ORGANIZATION_LIST: {
      return {
        ...state,
        organizationList: action.payload
      };
    }
    default:
      return state;
  }
};
export default organizationReducer;
