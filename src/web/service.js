let authID = "1e556231d53e35baf5da693e795b2414";

export const getAllItems = () => {
  return new Promise((resolve, reject) => {
    fetch("https://fortnite-api.theapinetwork.com/items/list", {
      headers: {
        Authorization: authID
      }
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(err => console.log("FETCH_ERR::", err));
  });
};

export const getItem = id => {
  return new Promise((resolve, reject) => {
    fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`, {
      headers: {
        Authorization: authID
      }
    })
      .then(e => (e.ok ? resolve(e) : reject(e)))
      .catch(err => console.log("FETCH_ERR::", err));
  });
};
