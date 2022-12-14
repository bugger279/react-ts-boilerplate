export const fetchToken = () => {
  const localData = localStorage.getItem("token") || "";
  return localData;
};
