export function checkLocalStorage() {
  if (localStorage.getItem("user") !== null && localStorage.getItem("user") !== "undefined") {
    return true;
  }
  return false;
}

export function getUserCurrent() {
  const user = localStorage.getItem("user");
  if (user !== null && user !== "undefined") {
    return JSON.parse(user);
  }
  return null;
}

export function setUserInLocalStorage(user){
  localStorage.setItem("user", JSON.stringify(user));
}