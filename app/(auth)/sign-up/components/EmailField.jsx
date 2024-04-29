import styled from "styled-components/native";
import React, { useState } from "react";
import * as Yup from "yup";
import { FONTS } from "../../../../constants";

const validEmail = async (email) => {
  const schema = Yup.object({
    email: Yup.string().email().required(),
  });

  try {
    await schema.validate({ email });
    return true;
  } catch (err) {
    return false;
  }
};

const EmailField = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handleSubmit = async () => {
    if (await validEmail(email)) {
      // some logic
    } else {
      // handle bad input
    }
  };

  return (
    <EmailTextInput
      value={email}
      placeholder="Enter your email"
      onChangeText={handleEmailChange}
      onSubmitEditing={handleSubmit}
    />
  );
};

export default EmailField;

const EmailTextInput = styled.TextInput`
  border: 1px solid #d9d9d9;
  padding: 15px;
  border-radius: 10px;

  color: #545454;
  font-family: ${FONTS.InterRegular};
  font-size: 16px;
  letter-spacing: -0.5px;

  margin-bottom: 24px;
`;
