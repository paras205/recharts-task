import Api from "../Api";
import { FETCH_ORGANIZATION_LIST } from "../constants/organization";
import { toast } from "react-toastify";

export const getOrganizationList = () => {
  return async (dispatch) => {
    try {
      const res = await Api.get("/organization");
      dispatch({ type: FETCH_ORGANIZATION_LIST, payload: res.data.results });
    } catch (err) {
      toast.error("Error fetching data");
    }
  };
};
