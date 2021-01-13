import Api from "../Api";
import { FETCH_PROJECTS_LIST } from "../constants/projects";
import { toast } from "react-toastify";

export const getProjectList = () => {
  return async (dispatch) => {
    try {
      const res = await Api.get("/project");
      dispatch({ type: FETCH_PROJECTS_LIST, payload: res.data.results });
    } catch (err) {
      toast.error("Error fetching data");
    }
  };
};
