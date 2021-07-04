import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form } from 'informed';
import VoucherForm from "../components/VoucherForm";
import { fetchVoucher, createVoucher } from "../apiRequest/voucher";
import { useHistory } from 'react-router-dom';
import useToken from '../hooks/useToken';
import isEmpty from 'lodash.isempty';

export default function UpdateVoucher() {
  const { id } = useParams();
  const { token } = useToken();
  const history = useHistory();
  const [voucher, setVoucher] = useState({});

  useEffect(() => {
    fetchVoucher({ token, id, }).then(({ data }) => {
      setVoucher(data);
    });
  }, [token, id]);


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

  if (isEmpty(voucher)) {
    return "loading";
  };

  const initialValues = { ...voucher, isActive: String(voucher.isActive) };

  return (
    <div>
      <h1 className="title has-text-centered">Update Voucher - {id}</h1>
      <div className="columns">
        <div className="column is-5">
          <Form onSubmit={handleOnSubmit} initialValues={initialValues}>
            <VoucherForm />
          </Form>
        </div>
      </div>
    </div>
  );
}
