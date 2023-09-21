import {
  Form,
  FormElement,
} from "@progress/kendo-react-form";

const IAMFormContainer = ({ style = {}, children }) => {
  const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
  return (
    <Form
      onSubmit={handleSubmit}
      render={(formRenderProps) => (
          <FormElement
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
              ...style
            }}
          >
            {children}
          </FormElement>
      )}
    />
  );
};

export default IAMFormContainer;
