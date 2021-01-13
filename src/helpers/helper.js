export const getOrganization = (arr, str) => {
  let organization;
  if (arr && arr.length > 0) {
    organization = arr.find((item) => {
      return item.oname.toUpperCase() === str.toUpperCase();
    });
  }
  return organization;
};

export const getOrganizationProjects = (orignazationData, projectListData) => {
  let projects = [];
  if (projectListData && projectListData.length > 0) {
    projects = projectListData.filter((item) => {
      return parseInt(item.oid) === parseInt(orignazationData.oid);
    });
  }
  return projects;
};
