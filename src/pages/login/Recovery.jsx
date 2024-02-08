import React, {useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {Link} from "react-router-dom";
import {BsKeyFill, BsBoxArrowInRight} from "react-icons/bs";

const initDataForm = {
  email: "",
  acessCode: "",
  userCode: "",
  password: "",
  confirmPassword: "",
};
const validationForm = Yup.object().shape({
  email: Yup.string()
    .required("Favor de ingresar correo")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Favor de Ingresar un email valido"
    ),
  password: Yup.string()
    .required("Ingresar el password")
    .min(8, "El password debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "La contraseña debe tener entre 8 y 10 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."
    ),
  confirmPassword: Yup.string()
    .required("Confirma Password")
    .min(8, "El password debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "La contraseña debe tener entre 8 y 10 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico."
    )
    .oneOf([Yup.ref("password"), null], "El password no coincide"),
});

const Recovery = () => {
  const [dataForm, setDataForm] = useState(initDataForm);
  const formik = useFormik({
    initialValues: dataForm,
    validationSchema: validationForm,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <div className="bg-red-900 h-full w-full fixed">
      <div className="flex items-center justify-center pt-[20vh]">
        <div className=" md:w-[50%] lg:w-[45%] xl:2xl:w-[25%] w-[50%] bg-white flex items-center justify-center shadow-md shadow-red-950 rounded-md">
          <form
            onSubmit={formik.handleSubmit}
            className="max-w-xs lg:mx-auto m-8">
            <div className="flex items-center justify-center mb-8">
              <img src="logo2.png" alt="" className="w-[60%]" />
            </div>

            <div className="flex flex-wrap mb-3">
              <div className="flex items-center justify-center gap-3 w-full mb-5">
                <BsKeyFill className="text-3xl" />
                <h1 className="text-xl font-medium">Recuperar Password!</h1>
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
              {/* <div className="w-full md:w-[100%] px-3">
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
              </div> */}
            </div>
            <div className="flex items-center justify-center mt-8 ">
              <button
                type="submit"
                className="flex items-center gap-2 bg-red-900 text-white px-16 py-2  hover:bg-black focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ">
                <BsBoxArrowInRight />
                RECUPERAR
              </button>
            </div>
            <div className="mt-3 flex items-center justify-center">
              <Link to="/login">
                <p className="text-sm hover:text-red-900 cursor-pointer">
                  Volver
                </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
