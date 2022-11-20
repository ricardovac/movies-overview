import { ErrorMessage, Field, Form, Formik } from "formik"
import React, { FunctionComponent, useState } from "react"
import { BsLightbulbFill } from "react-icons/bs"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import Logo from "../../assets/Logo.png"

interface Props {
  Icon: React.ElementType
}

const SignUp: FunctionComponent<Props> = ({ Icon }) => {
  const [darkToggle, setDarkToggle] = useState(false)
  const navigate = useNavigate()

  const schema = yup.object({
    username: yup
      .string()
      .required("Username required!")
      .min(4, "Username too short")
      .max(28, "Username too long"),
    password: yup
      .string()
      .required("Password required!")
      .min(6, "Password too short!")
      .max(28, "Password too long!"),
  })

  const initialValues = {
    username: "",
    password: "",
  }

  const renderError = (message) => (
    <p className="text-red-500 mt-2">{message}</p>
  )

  return (
    <div className={`${darkToggle && "dark"}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2))
          actions.resetForm()
        }}
      >
        <Form>
          <div className="absolute right-0 p-2">
            <button
              id="theme-toggle"
              type="button"
              className="text-gray-500 dark:text-gray-400 hover:bg-slate-700 dark:hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-200 rounded-lg text-sm p-2.5"
              onClick={() => {
                setDarkToggle(!darkToggle)
              }}
            >
              <BsLightbulbFill className="m-0 p-0 text-xl" />
            </button>
          </div>
          <div className="absolute p-2">
            <img
              src={Logo}
              alt="logo"
              className="h-14 cursor-pointer"
              onClick={() => {
                navigate("/")
              }}
            />
          </div>
          <div className="flex items-center justify-center min-h-screen bg-slate-900 dark:bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left">
              <h3 className="text-2xl font-bold text-center text-white dark:text-black">
                Register
              </h3>
              <div className="mt-4">
                <div>
                  <label className="text-white dark:text-black">Username</label>
                  <Field
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    className="w-full px-8 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent text-white dark:text-black"
                    autoComplete="off"
                  />
                  <ErrorMessage name="username" render={renderError} />
                </div>
                <div className="mt-4">
                  <label className="text-white dark:text-black">Password</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="w-full px-8 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 bg-transparent text-white dark:text-black"
                    autoComplete="off"
                  />
                  <ErrorMessage name="password" render={renderError} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="px-6 py-2 mt-4 mr-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                  type="submit"
                >
                  Create Account
                </button>
                <button
                  className="flex items-center gap-2 px-4 py-2 mt-4 text-white bg-gray-700 rounded-lg hover:bg-gray-800"
                  onClick={() => navigate("/login")}
                >
                  {Icon && <Icon />}
                  Back
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default SignUp
