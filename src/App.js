import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getOrganizationList } from "./store/actions/organization";
import { getProjectList } from "./store/actions/project";
import { getOrganization, getOrganizationProjects } from "./helpers/helper";
import PieChart from "./components/PieChart";
import Loader from "./components/Loader";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await dispatch(getOrganizationList());
      await dispatch(getProjectList());
      setIsLoading(false);
    };
    fetchData();
  }, [dispatch]);
  const { organizationList, projectList } = useSelector(
    (state) => ({
      organizationList: state.organization.organizationList,
      projectList: state.project.projectList
    }),
    shallowEqual
  );
  const updpData = getOrganization(
    organizationList,
    "United Nations Development Programme (UNDP)"
  );
  const unfpaData = getOrganization(
    organizationList,
    "United Nations Population Fund (UNFPA)"
  );
  const undpProjects = getOrganizationProjects(updpData, projectList);
  const unfpaProjects = getOrganizationProjects(unfpaData, projectList);
  let data = [];
  if (undpProjects.length > 0 && unfpaProjects.length > 0) {
    data.push(
      {
        name: "United Nations Development Programme (UNDP)",
        value: undpProjects.length
      },
      {
        name: "United Nations Population Fund (UNFPA)",
        value: unfpaProjects.length
      }
    );
  }
  if (isLoading) return <Loader />;

  return (
    <div className="wrapper">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        transition={Slide}
      />
      <div className="item_wrapper">
        <PieChart data={data} />
      </div>
    </div>
  );
};

export default App;
