import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { BsLightbulbFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Logo from "../../assets/Logo.png";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [darkToggle, setDarkToggle] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const schema = yup.object({
    email: yup
      .string()
      .email("Enter an valid email")
      .required("Email required"),
    password: yup
      .string()
      .required("Password required!")
      .min(6, "Password too short!")
      .max(28, "Password too long!"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const renderError = (message) => (
    <p className="text-red-500 mt-2">{message}</p>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const configuration = {
      method: "post",
      url: "http://localhost:4000/login",
      data: {
        email,
        password,
      },
    };

    const notify = () => toast.error("Usuário não encontrado!");

    axios(configuration)
      .then((result) => {
        setLogin(true), navigate("/");
      })
      .catch((error) => {
        console.log(error);
        notify();
      });
  };

  useEffect(() => {
    document.title = "SatFlix | Login";
  });

  return (
    <div className={`${darkToggle && "dark"}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Form>
          <div className="absolute right-0 p-2">
            <button
              id="theme-toggle"
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-slate-700 dark:hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-200 rounded-lg text-sm p-2.5"
              onClick={() => {
                setDarkToggle(!darkToggle);
              }}
            >
              <BsLightbulbFill className="m-0 p-0 text-xl" />
            </button>
          </div>
          <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          <div className="absolute p-2">
            <img src={Logo} alt="logo" className="h-14 cursor-pointer" />
          </div>
          <div className="flex items-center justify-center min-h-screen bg-slate-900 dark:bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left">
              <h3 className="text-2xl font-bold text-center text-white dark:text-black">
                Log In
              </h3>
              <div className="mt-4">
                <div>
                  <label className="text-white dark:text-black">Email</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    className="w-full px-8 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent text-white dark:text-black"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <ErrorMessage name="email" render={renderError} />
                </div>
                <div className="mt-4">
                  <label className="text-white dark:text-black">Password</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="w-full px-8 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent text-white dark:text-black"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <ErrorMessage name="password" render={renderError} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="px-6 py-2 mt-4 mr-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  type="submit"
                  onClick={(e) => handleSubmit(e)}
                >
                  Log In
                </button>
                <button
                  className="px-6 py-2 mt-4 text-white bg-gray-700 rounded-lg hover:bg-gray-800"
                  onClick={() => navigate("/register")}
                >
                  Create Account
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      {/* Alerts  */}
    </div>
  );
};

export default SignIn;
