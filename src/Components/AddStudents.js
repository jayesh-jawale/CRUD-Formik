import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { studentContext } from "../App";
import { useFormik } from "formik";
import * as yup from "yup";

// Formik Validations
const formValidationSchema = yup.object({
    name: yup
        .string()
        .min(3)
        .max(50)
        .required("Please enter your name"),

    email: yup
        .string()
        .min(5, 'Need bigger email bro')
        .required("Email is required"),

    mobile: yup
        .number()
        .required("Enter Mobile number"),

    batch: yup
        .string()
        .required("Enter Batch")
});

export function AddStudents() {
  // Subscribe to a context
  const studentData = React.useContext(studentContext);

  const nav = useNavigate();

  const {handleSubmit, handleChange, handleBlur, errors, touched, values} = useFormik({
      initialValues: {
        name: "",
        email: "",
        mobile: "",
        batch: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        studentData.setStudent([...studentData.student, values]);
        nav("/all-students");
      }
  });

  return (
    <div>
      <h1
        style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: "600" }}
      >
        Add Student Record
      </h1>

      <form onSubmit={handleSubmit} className="add-students">
        <TextField
          label="Enter Name"
          variant="outlined"
          id="name"
          name="name"
          type="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name && touched.name}
          helperText={errors.name && touched.name ? errors.name : ""}
        />

        <TextField
          label="Enter Email"
          variant="outlined"
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email && touched.email}
          helperText={errors.email && touched.email ? errors.email : ""}
        />

        <TextField
          label="Enter Mobile"
          variant="outlined"
          id="mobile"
          name="mobile"
          type="mobile"
          value={values.mobile}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.mobile && touched.mobile}
          helperText={errors.mobile && touched.mobile ? errors.mobile : ""}
        />

        <TextField
          label="Enter Batch"
          variant="outlined"
          id="batch"
          name="batch"
          type="batch"
          value={values.batch}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.batch && touched.batch}
          helperText={errors.batch && touched.batch ? errors.batch : ""}
        />

        <Button type="submit" variant="contained">
          Add Student
        </Button>
      </form>
    </div>
  );
}
