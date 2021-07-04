import React, { useEffect, useState } from 'react';

import useToken from '../hooks/useToken';
import { fetchVouchers } from "../apiRequest/voucher";
import { Link } from 'react-router-dom';

export default function ListVoucher() {
  const { token } = useToken();
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    fetchVouchers({ token }).then(({ data }) => {
      setVouchers(data);
    });
  }, [token]);

  return (
    <div>
      <h1 className="title">List Voucher</h1>
      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Active</th>
            <th>Type</th>
            <th>Discount</th>
            <th>Expired At</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((voucher) => {
            return (
              <tr key={voucher.id}>
                <td>
                  {voucher.id}
                </td>
                <td>{`${voucher.title}`}</td>
                <td>{`${voucher.quantity}`}</td>
                <td>{`${voucher.amount}`}</td>
                <td>{`${voucher.isActive}`}</td>
                <td>{`${voucher.type}`}</td>
                <td>{`${voucher.discountPayment} ${voucher.discountValue}%`}</td>
                <td>{`${voucher.expiredAt}`}</td>
                <td><Link to={`/vouchers/${voucher.id}/update`}>Update</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
