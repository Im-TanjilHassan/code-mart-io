const setInstallApp = (appDataLC, setIsInstalled) => {
  const getApp = JSON.parse(localStorage.getItem("installedApp")) || [];
  if (getApp.includes(appDataLC)) {
      alert("existing");
      setIsInstalled(true);
  } else {
    getApp.push(appDataLC);
    localStorage.setItem("installedApp", JSON.stringify(getApp));
  }
};

const deleteApp = (id) => {
    const getApp = JSON.parse(localStorage.getItem("installedApp")) || [];
    const updateApp = getApp.filter(app => app.id !== id)
    localStorage.setItem("installedApp", JSON.stringify(updateApp))
    return updateApp
}

export { setInstallApp, deleteApp };