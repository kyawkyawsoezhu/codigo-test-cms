import React from 'react';
import { Text, useFormState, Select, Option } from 'informed';
import isEmpty from "lodash.isempty";

export default function VoucherForm() {
    const formState = useFormState();

    isEmpty(formState.errors) || console.error('client side validation', formState.errors);

    return (
        <div>
            <div className="field">
                <p className="help is-danger">{isEmpty(formState.errors) || "Please fill out all fields!"}</p>
            </div>

            <div className="field">
                <div className="control">
                    <Text field="title" className="input" type="title" placeholder="Title" validate={requiredValidate} />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <Text field="expiredAt" className="input" type="datetime-local" placeholder="Expired At" validate={requiredValidate} />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <Text field="amount" className="input" type="number" placeholder="Amount" validate={requiredValidate} />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <Text field="quantity" className="input" type="number" placeholder="Quantity" validate={requiredValidate} />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <div className="select">
                        <Select field="type" validate={requiredValidate}>
                            <Option value="" disabled>
                                Type
                            </Option>
                            <Option value="myself">Myself</Option>
                            <Option value="gift">Gift</Option>
                        </Select>
                    </div>
                </div>

            </div>
            <div className="field">
                <div className="control">
                    <Text field="limitPerUser" className="input" type="number" placeholder="Limit Per User" validate={requiredValidate} />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <div className="select">
                        <Select field="discountPayment" validate={requiredValidate}>
                            <Option value="" disabled>
                                Discount Payment
                            </Option>
                            <Option value="creditCard">Credit Card</Option>
                            <Option value="cash">Cash</Option>
                        </Select>
                    </div>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <Text field="discountValue" className="input" type="number" placeholder="Discount Value" validate={requiredValidate} />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <div className="select">
                        <Select field="isActive" validate={requiredValidate}>
                            <Option value="" disabled>
                                Active
                            </Option>
                            <Option value={1}>Yes</Option>
                            <Option value={0}>No</Option>
                        </Select>
                    </div>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </div>
    );
}

function requiredValidate(value) {
    if (!value) {
        return 'Please fill out this field!';
    }
}
