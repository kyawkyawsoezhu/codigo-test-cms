import axios from "axios";
import qs from "qs";

const fetch = ({ token, ...rest }) => (
  axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      Accept: "application/json",
      Authorization: token ? `Bearer ${token}` : undefined
    },
    paramsSerializer: function (params) {
      return qs.stringify(params, {arrayFormat: 'brackets'})
    },
  })(rest)
);

export default fetch;
