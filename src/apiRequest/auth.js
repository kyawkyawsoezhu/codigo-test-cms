import fetch from "../utils/fetch";

export const login = ({ data }) => {
  return fetch({
    url: '/tokens',
    method: "POST",
    data
  });
};
