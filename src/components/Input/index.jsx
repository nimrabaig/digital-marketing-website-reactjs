import * as React from "react";
import { Field, FieldWrapper } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Label, Error } from "@progress/kendo-react-labels";
const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) => {
  if (!emailRegex.test(value)) return "Please enter a valid email.";
};

const InputComponent = (fieldRenderProps) => {
  const {
    validationMessage,
    visited,
    label,
    id,
    valid,
    disabled,
    type,
    style,
    ...others
  } = fieldRenderProps;
  const showValidationMessage = visited && validationMessage;
  return (
    <FieldWrapper style={{ width: "100%" }}>
      <Label editorId={id} editorValid={valid} editorDisabled={disabled} style={{
        width: "100%",
        fontWeight: 600,
        color: "rgba(41, 41, 48, 1)",
        fontSize: 20
      }}>
        {label}
      </Label>
      <Input
        valid={valid}
        type={type ?? "email"}
        id={id}
        disabled={disabled}
        {...others}
        style={{
          width: "100%",
          height: "46px",
          fontSize: "18px",
          ...style,
        }}
      />
      {showValidationMessage && <Error>{validationMessage}</Error>}
    </FieldWrapper>
  );
};

const InputField = ({ value, ...rest }) => {
  return (
    <Field
      {...rest}
      component={InputComponent}
      validator={rest.type === "email" ? emailValidator : rest?.validator}
    />
  );
};

export default InputField;
