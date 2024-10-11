import axios from "axios";
import { Formik } from "formik";
import { Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import * as bcrypt from "bcryptjs";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values, setSubmitting) => {
    try {
      const { data } = await axios.get("http://localhost:4000/users");
      const isExistEmail = data.find((user) => user.email === values.email);

      if (isExistEmail) {
        const hashedPassword = isExistEmail.password;
        const inputPassword = await bcrypt.compare(values.password, hashedPassword);
        if (inputPassword) {
          toast.success("User login successfully!");
          localStorage.setItem("login-system", values.email);
          navigate("/");
        } else {
          toast.error("Incorrect password");
        }
      } else {
        toast.error("User not found!");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen items-center relative">
      {/* Image Section */}
      <div className="hidden lg:flex lg:w-3/2 items-center justify-center p-8">
        <img
          alt="Registration"
          src="/img/animation.gif" 
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Centered Title at Top */}
      <div className="absolute w-full text-center top-0 mt-8">
        <h1 className="text-3xl font-bold text-blue-700">Video Chat App</h1>
      </div>

      {/* Login Section */}
      <div className="flex items-center justify-center w-full sm:max-w-md p-6 lg:w-1/2 z-10">
        <div className="w-full space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values, setSubmitting);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      disabled={isSubmitting}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      disabled={isSubmitting}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.password && touched.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {isSubmitting && <Loader2 className="animate-spin mr-2" />}{" "}
                  Login
                </button>
              </form>
            )}
          </Formik>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?
            <Link
              to="/sign-up"
              className="ml-1 font-semibold leading-6 text-indigo-600 hover:text-indigo-500 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
