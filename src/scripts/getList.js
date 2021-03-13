// This is an interface to the real API, it is here to 
// stop the app from depending on the detail (api)
// Also a good place to do side effects like the local storage stuff

import getListApi from "./lib/api.js";

const LIST_KEY = "list";

const isClientOffline = () => {
  // This is just an idea, like if some one refreshed the browser with no signal
  // it could keep the last thing they saw
  return true;
};

const serverHasNewData = () => {
  // Maybe this is periodic, or maybe there is a clever
  // way to know if what has been see is still up to date?
  return true;
};

export default function getList() {
  if (
    window.localStorage.getItem(LIST_KEY) &&
    (isClientOffline() || !serverHasNewData())
  ) {
    console.log("got data from local storage");
    console.log("type 'window.localStorage.removeItem(\"list\")' to clear data from this app")
    return new Promise(function (resolve, reject) {
      resolve(JSON.parse(window.localStorage.getItem(LIST_KEY)));
    });
  }

  // This is optimal, I think it will hit the API and wait twice.
  getListApi().then((json) =>
    window.localStorage.setItem(LIST_KEY, JSON.stringify(json))
  );

  return getListApi();
}
