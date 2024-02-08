import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import {BsPersonBoundingBox, BsBoxArrowInRight} from "react-icons/bs";
import {Link} from "react-router-dom";

const initDataForm = {
  email: "",
  password: "",
};

const validationForm = Yup.object({
  email: Yup.string()
    .required("Es requerido *")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Favor de Ingresar un email valido"
    ),
  password: Yup.string()
    .required("Ingresar el password")
    .min(8, "El password debe tener al menos 8 caracteres"),
});

const Login = () => {
  const [dataForm, setDataForm] = useState(initDataForm);
  const formik = useFormik({
    initialValues: dataForm,
    validationSchema: validationForm,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    // <div className="bg-red-900 h-full w-full fixed">
    <div className="bg-red-900">
      <div className="flex items-center justify-center pt-[20vh] w-[50vw]">
        <div className=" md:w-[40%] lg:w-[30%] xl:2xl:w-[25%] w-[50%] bg-white flex items-center justify-center shadow-md shadow-red-950 rounded-md">
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-xs  lg:mx-auto  m-8">
            <div className="flex items-center justify-center mb-8">
              <img src="logo2.png" alt="" className="w-[60%]" />
            </div>

            <div className="flex flex-wrap mb-3">
              <div className="flex items-center justify-center gap-3 w-full mb-5">
                <BsPersonBoundingBox className="text-3xl" />
                <h1 className="text-xl font-medium">BIENVENIDO!</h1>
              </div>
              {/* email/pass */}
              <div className="w-full md:w-[100%] px-3 mb-2">
                <div className="relative">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.email && formik.errors.email
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <span className="text-red-600 text-[10px]">
                      {formik.errors.email}
                    </span>
                  )}
                </div>
              </div>
              {/* pass */}
              <div className="w-full md:w-[100%] px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.password && formik.errors.password
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <span className="text-red-600 text-[10px]">
                      {formik.errors.password}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8 ">
              <button
                type="submit"
                className="flex items-center gap-2 bg-red-900 text-white px-16 py-2  hover:bg-black focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ">
                <BsBoxArrowInRight />
                INICIAR SESIÓN
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center">
              <Link to={"/recovery"}>
                <p className="text-sm hover:text-red-900 cursor-pointer">
                  Olvide mi contraseña
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
