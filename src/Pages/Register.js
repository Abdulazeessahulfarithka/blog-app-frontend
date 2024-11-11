import { Button, TextField, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import React from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../Global/Api.js";
import * as yup from "yup";
import axios from "axios";
import Layout from "../Components/Layout.js";

const loginValidationSchema = yup.object({
  name: yup.string().required().min(4),
  email: yup.string().email().required().min(6),
  phone: yup.string().required().min(10),
  address: yup.string().required().min(6),
  answer: yup.string().required().min(2),
  password: yup.string().required().min(6),
});

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
      phone: "",
      address: "",
      answer: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      try {
        const res = await axios.post(`${API}/api/user/register`, values);
        console.log("API response:", res.data); // Debugging log

        if (res.data.success) {
          toast.success(res.data.message);
          console.log("Navigating to login...");
          setTimeout(() => navigate("/login"), 500);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log("Error:", error); // Debugging log
        toast.error("Invalid Credential");
      }
    },
  });

  const paperStyle = {
    padding: 20,
    minHeight: "100vh",
    width: 380,
    margin: "40px auto",
  };

  return (
    <Layout>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
        <Toaster />
        <Grid item xs={12} sm={8} md={4}>
          <Paper elevation={3} style={paperStyle}>
            <Grid container justifyContent="center">
              <h2 className="fw-bold my-2">Sign Up</h2>
            </Grid>
            <form onSubmit={formik.handleSubmit} className="mt-3">
              <TextField
                label="Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && !!formik.errors.name}
                helperText={formik.touched.name && formik.errors.name ? formik.errors.name : null}
                type="text"
                fullWidth
                required
                className="mb-3"
              />

              <TextField
                label="Email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email ? formik.errors.email : null}
                type="text"
                fullWidth
                required
                className="mb-3"
              />

              <TextField
                label="Phone Number"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.phone && !!formik.errors.phone}
                helperText={formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}
                type="text"
                fullWidth
                required
                className="mb-3"
              />

              <TextField
                label="Address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && !!formik.errors.address}
                helperText={formik.touched.address && formik.errors.address ? formik.errors.address : null}
                type="text"
                fullWidth
                required
                className="mb-3"
              />

              <TextField
                label="What is your favorite Food Name?"
                name="answer"
                value={formik.values.answer}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.answer && !!formik.errors.answer}
                helperText={formik.touched.answer && formik.errors.answer ? formik.errors.answer : null}
                type="text"
                fullWidth
                required
                className="mb-3"
              />

              <TextField
                label="Password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && !!formik.errors.password}
                helperText={formik.touched.password && formik.errors.password ? formik.errors.password : null}
                type="password"
                fullWidth
                required
                className="mb-3"
              />

              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                className="my-3"
              >
                Sign Up
              </Button>
            </form>
            <Typography className="text-center p-2">
              Already have an account?
              <Link to="/login" className="mx-2 fw-bold">
                Sign In
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Register;
