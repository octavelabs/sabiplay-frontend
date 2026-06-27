import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().trim().required("Password is required"),
});

export const signupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().trim().required("Password is required"),
  username: Yup.string().trim().required("Username is required"),
  full_name: Yup.string().trim().required("Full name is required"),
  is_student: Yup.boolean().required("Student status is required"),
  university: Yup.string().trim().when("is_student", {
    is: true,
    then: (schema) => schema.required("University is required"),
    otherwise: (schema) => schema.optional(),
  }),
  department: Yup.string().trim().optional(),
  state: Yup.string().trim().required("State is required"),
});
