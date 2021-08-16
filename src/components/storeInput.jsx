import CustomerStore from "../store/customerStore";
import React, { useState } from "react";
import { Form, Input } from "antd";
import "antd/dist/antd.css";

function storeInput() {
  const values = ["code", "name", "phone", "city", "state"];
  const [formValues, setFormValues] = useState({
    code: "",
    name: "",
    phone: "",
    city: "",
    state: "",
  });

  const onBlur = (e) => {
    switch (e.target.id) {
      case "basic_code":
        CustomerStore.customerCode = e.target.value;
        break;
      case "basic_name":
        CustomerStore.customerName = e.target.value;
        break;

      case "basic_phone":
        CustomerStore.customerPhone = e.target.value;
        break;

      case "basic_city":
        CustomerStore.customerCity = e.target.value;
        break;

      case "basic_state":
        CustomerStore.customerState = e.target.value;
        break;
    }

    setFormValues((update) => {
      return {
        ...update,
        code: CustomerStore.customerCode,
        name: CustomerStore.customerName,
        phone: CustomerStore.customerPhone,
        city: CustomerStore.customerCity,
        state: CustomerStore.customerState,
      };
    });
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 2,
        }}
        wrapperCol={{
          span: 6,
        }}
        initialValues={{
          remember: true,
        }}
      >
        {values.map((item) => {
          return (
            <Form.Item
              label={item}
              name={item}
              validateTrigger="onBlur"
              onBlur={onBlur}
              rules={[
                {
                  required: true,
                  message: `Please input your ${item}!`,
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        })}
      </Form>

      <div>
        <h2>Currently inside customerStore: </h2>
        <div> Code: {formValues.code ? formValues.code : "none"}</div>
        <div> Name: {formValues.name ? formValues.name : "none"}</div>
        <div> Phone: {formValues.phone ? formValues.phone : "none"}</div>
        <div> City: {formValues.city ? formValues.city : "none"}</div>
        <div> State: {formValues.state ? formValues.state : "none"}</div>
      </div>
    </div>
  );
}

export default storeInput;
