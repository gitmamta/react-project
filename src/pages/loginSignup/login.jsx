// import {signin} from "../../schema/index";
// import"./login.css"
// import {useFormik} from "formik";

// let initialValue={
//   name:"",
//   email:"",
//   password:"",

// };

// export default function Login() {
//   const{
//     handleChange,
//     handleReset,
//     handleBlur,
//     handleSubmit,
//     values,
//     errors,
//     touched,
//   }=useFormik({
//     initialValues:initialValue,
//     onSubmit:submitHandler,
//     validationSchema:signin,

//   })
//   function submitHandler(values){
//     console.log(values)
//     handleReset();
//   }
//   console.log("touched",touched);
//   console.log("errors",errors);

//   return (
//     <>
//     <form onSubmit={handleSubmit} className="d-flex flex-column gap-3"  action="https://formspree.io/f/mvgqdrdw" method="post">
//       <div className="login-page">
//         <div className="login-container">
//         <h1>Sign Up</h1>
//         <div className="login-form">
//           <input type="text" placeholder="Enter your name" id="name" name="name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
//           {errors.name && touched.name && (
//             <span className="text-danger">{errors.name}</span>
//           )}
//           <input type="email" placeholder="Enter your email" id="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>

//           {errors.email && touched.email && (
//             <span className="text-danger">{errors.email}</span>
//           )}
//           <input type="password" placeholder="Enter your password" id="password"  name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
//           {errors.password && touched.password && (
//             <span className="text-danger">{errors.password}</span>
//           )}
//         </div>

//         <button type="submit" className="btn btn-primary">Continue</button>
//         <p className="login-para">Already have an account ? Login here</p>

//         {/* <div className="login-checkbox">
//           <input type="checkbox"/>
//           <p>By Continuing i agree to the term of use & privacy policy</p>
//         </div> */}
//       </div>
//       </div>
//       </form>
//     </>
//   );
// }

import { signin } from "../../schema/index";
import "./login.css";
import { useState } from "react";
import { useFormik } from "formik";

let initialValue = {
  name: "",
  email: "",
  password: "",
};

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: initialValue,
      onSubmit: submitHandler,
      validationSchema: signin,
    });

  function submitHandler(values, { resetForm }) {
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");
    fetch("https://backend-e-comm-90ct.onrender.com/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => {
        setLoading(false);
        if (res.ok) {
          setSuccessMsg("✅ Form submitted successfully");
          resetForm();
        } else {
          setErrorMsg("Submission failed");
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setErrorMsg("Network error");
      });
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
      <div className="login-page">
        <div className="login-container">
          <h1>Sign Up</h1>
          <div className="login-form">
            {/* //for success message green and red */}
            {successMsg && (
              <div className="alert alert-success">{successMsg}</div>
            )}
            {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

            <input
              type="text"
              placeholder="Enter your name"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name && (
              <span className="text-danger">{errors.name}</span>
            )}

            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <span className="text-danger">{errors.email}</span>
            )}

            <input
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Submitting..." : "Continue"}
          </button>
          <p className="login-para">Already have an account? Login here</p>
        </div>
      </div>
    </form>
  );
}
