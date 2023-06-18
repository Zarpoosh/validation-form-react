import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaRegEye } from "react-icons/fa";
import "./App.css";
// ترکیب formik & yup

const App = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    // یه تابعه
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(10, "must be 10 characters or less")
        .min(5, "must be 5 characters or more")
        .required("*Required"),

      lastName: Yup.string()
        .max(15, "must be 15 characters or less")
        .min(5, "must be 5 characters or more")
        .required("*Required"),

      email: Yup.string().email("invalid email").required("*Required"),

      password: Yup.string()
        .max(7, "must be 7 characters or less")
        .min(5, "must be 5 characters or more")
        .required("*Required"),
    }),
  });
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          id="col"
          className="col-sm-12 col-md-9 col-xl-6 my-5 border-dark rounded-3 "
        >
          {/* form */}
          <form
            className="m-5 form-group justify-content-center  "
            onSubmit={formik.handleSubmit}
          >
            <h1 className="text-center text-light">Login Form</h1>
            {/* firstname */}
            <label className="mt-5 " htmlFor="firstName">
              firstName
            </label>
            <input
              className="form-control "
              id="firstName"
              type="firstName"
              {...formik.getFieldProps("firstName")}
            ></input>
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
            {/* lastname */}
            <label className="mt-5" htmlFor="lastName">
              lastName
            </label>
            <input
              className="form-control "
              id="lastName"
              type="lastName"
              {...formik.getFieldProps("lastName")}
            ></input>
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}

            {/* email */}
            <label className="mt-5" htmlFor="email">
              Email Address
            </label>
            <input
              className="form-control "
              id="email"
              type="email"
              {...formik.getFieldProps("email")}
            ></input>
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            {/* password */}
            <label htmlFor="password" className="mt-5">
              password
            </label>
            <input
              className="form-control"
              type="password"
              {...formik.getFieldProps("password")}
              id="password"
            ></input>
            {/* <span>
              <i class="fa fa-eye">
                <FaRegEye />
              </i>
            </span> */}
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}

            <div class="check-box my-3">
              <span>
                <div className="row">
                  <div className="col-1">
                    <input
                      type="checkbox"
                      class="checkbox"
                      
                    ></input>
                  </div>
                  <div className="col-10">
                    <label for="accept" class="form-check-label">
                      I Agree
                    </label>
                  </div>
                </div>
              </span>
            </div>

            <div className="text-center   ">
              <a
                className="btn btn-primary my-4  btn-block d-block "
                type="submit"
              >
                submit
              </a>
            </div>
          </form>
          {/* end of the form */}
        </div>
      </div>
    </div>
  );
};

export default App;
