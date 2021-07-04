import fetch from "../utils/fetch";

export const createVoucher = ({ token, data }) => {
  return fetch({
    token,
    url: `vouchers`,
    method: "POST",
    data
  });
};

export const fetchVouchers = ({ token, params }) => {
  return fetch({
    url: 'vouchers',
    method: "GET",
    params,
    token
  });
};

export const fetchVoucher = ({ token, id, params }) => {
  return fetch({
    url: `vouchers/${id}`,
    method: "GET",
    params,
    token
  });
};

export const updateVoucher = ({ token, id, data }) => {
  return fetch({
    url: `vouchers/${id}`,
    method: "PUT",
    data,
    token
  });
};
