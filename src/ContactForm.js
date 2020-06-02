// import React from "react";
// import Input from "./input";
// import { Field, reduxForm } from "redux-form";

// const renderInput = ({ input, meta }) => (
//   <Input {...input} type="text" errorMessage={meta.touched && meta.error} />
// );

// const onSubmit = values => {
//   alert(JSON.stringify(values));
// };

// const required = v => {
//   if (!v || v === "") {
//     return "This field is required";
//   }
//   return undefined;
// };

// const allowedNames = v => {
//   if (v === "forbidden") {
//     return "Forbidden is not valid";
//   }
//   return undefined;
// };

// const ContactForm = ({ handleSubmit, valid }) => {
//   return (
//     <div className="col-md-6">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="customer-id">First Name</label>
//           <Field
//             name="customer-id"
//             component={renderInput}
//             validate={[required, allowedNames]}
//           />
//           <button
//             disabled={!valid}
//             type="submit"
//             className="btn btn-primary btn-block mt-3"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default reduxForm({
//   form: "my-customer-registration-form",
//   onSubmit
// })(ContactForm);

import React from "react";
//import Input from "./input";
import { Field, reduxForm } from "redux-form";
import { Input, Label, FormGroup } from "reactstrap";

const renderInput = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <FormGroup
      color={touched ? (touched && !error ? "success" : "danger") : ""}
    >
      <Label htmlFor="customer-id">{label}</Label>
      <Input {...input} placeholder={label} type={type} />
      <small className="text-danger">
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </small>
    </FormGroup>
  </div>
);

const onSubmit = values => {
  alert(JSON.stringify(values));
};

const required = v => {
  if (!v || v === "") {
    return "This field is required";
  }
  return undefined;
};

const allowedNames = v => {
  if (v === "forbidden") {
    return "Forbidden is not valid";
  }
  return undefined;
};

const ContactForm = ({ handleSubmit, valid }) => {
  return (
    <div className="col-md-6">
      <form onSubmit={handleSubmit}>
        <Field
          type="text"
          label="customer ID"
          name="customer-id"
          component={renderInput}
          validate={[required, allowedNames]}
        />
        <button
          disabled={!valid}
          type="submit"
          className="btn btn-primary btn-block mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "my-customer-registration-form",
  onSubmit
})(ContactForm);
