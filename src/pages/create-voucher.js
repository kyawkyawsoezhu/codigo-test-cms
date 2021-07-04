import React from 'react';

import { Form, Text, useFormState } from 'informed';
import VoucherForm from "../components/VoucherForm";
import { createVoucher } from "../apiRequest/voucher";
import { useHistory } from 'react-router-dom';
import useToken from '../hooks/useToken';

export default function CreateVoucher() {
  const { token } = useToken();
  const history = useHistory();

  const handleOnSubmit = (data) => {
    const submitData = { ...data };
    createVoucher({ token, data: submitData }).then((response) => {
      history.push("/");
    }).catch((e) => {
      const errorMessage = e.status === 422 ? e.statusText : "Something was wrong! check log";
      alert(errorMessage);
      console.error(e.response);
    });
  };

  return (
    <div>
      <h1 className="title has-text-centered">Store Voucher</h1>
      <div className="columns">
        <div className="column is-5">
          <Form onSubmit={handleOnSubmit} >
            <VoucherForm />
          </Form>
        </div>
      </div>
    </div>
  );
}
