import React from 'react';
import { useParams } from 'react-router-dom';

export default function UpdateVoucher() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="title has-text-centered">Update Voucher - {id}</h1>
    </div>
  );
}
