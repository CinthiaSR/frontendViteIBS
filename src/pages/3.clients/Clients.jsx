import React, {useState} from "react";
import {BsPeopleFill, BsPencilSquare, BsFillTrash3Fill} from "react-icons/bs";
import {useFormik} from "formik";
import * as Yup from "yup";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

const initDataForm = {
  nombre: "",
  apellidos: "",
  tipo: "",
  email: "",
  tel: "",
  pais: "",
};

const validationForm = Yup.object({
  nombre: Yup.string().required("Es requerido *"),
  apellidos: Yup.string().required("Es requerido *"),
  tipo: Yup.string().required("Es requerido *"),
  email: Yup.string().required("Email requerido *"),
  tel: Yup.string().required("Telefono requerido *"),
  pais: Yup.string().required("Selecciona un pais"),
});

export const Clients = () => {
  const [dataForm, setDataForm] = useState(initDataForm);

  const customStyles = {
    rows: {
      style: {
        height: "25px",
        minHeight: "72px", // override the row height
        fontsize: "18px",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#7C081A",
        color: "#fff",
        fontWeight: "bold",
        fontsize: "12px",
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        fontsize: "18px",
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  // eslint-disable-next-line no-unused-vars
  const data = [
    {
      id: 1,
      nombre: "Pablo",
      email: "administracion@vertivision.com",
      pais: "USA",
    },
    {
      id: 2,
      nombre: "activo",
      email: "activo",
      pais: "USA",
    },
    {
      id: 3,
      nombre: "Pablo",
      email: "administracion@vertivision.com",
      pais: "USA",
    },
    {
      id: 4,
      nombre: "activo",
      email: "activo",
      pais: "USA",
    },
    {
      id: 5,
      nombre: "activo",
      email: "activo",
      pais: "USA",
    },
    {
      id: 6,
      nombre: "Pablo",
      email: "administracion@vertivision.com",
      pais: "USA",
    },
    {
      id: 7,
      nombre: "activo",
      email: "activo",
      pais: "USA",
    },
    {
      id: 8,
      nombre: "Pablo",
      email: "administracion@vertivision.com",
      pais: "USA",
    },
    {
      id: 9,
      nombre: "activo",
      email: "activo",
      pais: "USA",
    },
    {
      id: 10,
      nombre: "activo",
      email: "activo",
      pais: "USA",
    },
  ];

  const formik = useFormik({
    initialValues: dataForm,
    validationSchema: validationForm,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  const columns = [
    {
      name: "ID",
      // eslint-disable-next-line no-unused-vars
      selector: (row, i) => row.id,
      sortable: true,
      width: "50px",
    },
    {
      name: "NOMBRE",
      selector: (row, i) => row.nombre,
      sortable: true,
      width: "90px",
    },
    {
      name: "EMAIL",
      selector: (row, i) => row.email,
      sortable: true,
      width: "210px",
    },
    {
      name: "PAIS",
      selector: (row, i) => row.pais,
      sortable: true,
    },
    {
      name: "OPCIONES",
      sortable: false,
      selector: (row, i) => row.null,
      cell: (e) => (
        <div className="flex gap-2">
          <button
            onClick={() => handleEdit(row.original.id)}
            className="p-2 bg-green-500 rounded-md">
            <BsPencilSquare className="text-white" />
          </button>
          <button
            onClick={() => handleDelete(row.original.id)}
            className="p-2 bg-red-500 rounded-md">
            <BsFillTrash3Fill className="text-white" />
          </button>
        </div>
      ),
    },
  ];

  const tableData = {
    columns,
    data,
  };

  return (
    <>
      {/* panel view */}
      <div className="pt-[25px] px-[25px] bg-gray-200 flex flex-col md:flex-row h-[89vh] gap-4">
        {/* formulario */}
        <div className="w-full h-[90%] md:w-[100%] lg:w-[40%] pb-2 bg-gray-100 rounded-md shadow-md shadow-slate-500 px-[25px]">
          <div className="flex pt-6 gap-3 px-[10px] w-full ">
            <span>
              <BsPeopleFill className="text-3xl text-[#7C081A]" />
            </span>
            <h2 className="text-2xl font-medium w-full">Clientes </h2>
          </div>
          {/* <div className="w-full md:w-[100%] lg:w-[30%] pb-8 bg-gray-100 rounded-md shadow-md shadow-slate-500"> */}
          <div className="w-full p-2 rounded-t">
            <h3 className="text-lg font-semibold">Agregar cliente</h3>
          </div>
          <form onSubmit={formik.handleSubmit} className="mx-auto mt-2 ">
            <div className="flex flex-wrap ">
              {/* nombre/apellidos */}
              <div className="w-full md:w-[100%] px-3 flex items-center justify-center gap-3 mb-2">
                <div className="relative">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nombre}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.nombre && formik.errors.nombre
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {formik.touched.nombre && formik.errors.nombre && (
                    <span className="text-red-600 text-[10px]">
                      {formik.errors.nombre}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Apellido
                  </label>
                  <input
                    id="apellidos"
                    name="apellidos"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.apellidos}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.apellidos && formik.errors.apellidos
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {formik.touched.apellidos && formik.errors.apellidos && (
                    <span className="text-red-600 text-[10px]">
                      {formik.errors.apellidos}
                    </span>
                  )}
                </div>
              </div>
              {/* email/tipo */}
              <div className="w-full md:w-[100%] px-3 flex items-center justify-center gap-3 mb-2">
                <div className="relative">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Tipo de cliente
                  </label>
                  <input
                    id="tipo"
                    name="tipo"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tipo}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.tipo && formik.errors.tipo
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {formik.touched.tipo && formik.errors.tipo && (
                    <span className="text-red-600 text-[10px]">
                      {formik.errors.tipo}
                    </span>
                  )}
                </div>
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
              {/* telefono/pais */}
              <div className="w-full md:w-[100%] px-3 flex items-center justify-center gap-3 mb-5">
                <div className="relative w-[50%]">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Telefono
                  </label>
                  <input
                    id="tel"
                    name="tel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.tel}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.tel && formik.errors.tel
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  />
                  {formik.touched.tel && formik.errors.tel && (
                    <span className="text-red-600 text-[10px]">
                      {formik.errors.tel}
                    </span>
                  )}
                </div>
                <div className="relative  w-[50%]">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Pais
                  </label>
                  {/* <div className="relative"> */}
                  <select
                    id="pais"
                    name="pais"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pais}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.pais && formik.errors.pais
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}>
                    <option value="">Selecciona</option>
                    <option value="usa">USA</option>
                    <option value="mx">MX</option>
                  </select>
                  {formik.touched.pais && formik.errors.pais && (
                    <span className="text-red-600 text-[10px]">
                      {formik.errors.pais}
                    </span>
                  )}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                  {/* </div> */}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit"
                className="flex items-center bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                Guardar
              </button>
            </div>
          </form>
        </div>
        {/* table */}
        <div className="h-[90%]  bg-gray-100 rounded-md shadow-md shadow-slate-500 w-full md:w-[100%] lg:w-[60%] p-6 ">
          <h1 className="text-xl pb-3">
            Lista de Usuarios y permisos asignados
          </h1>
          <DataTableExtensions
            export={false}
            print={false}
            filter={false}
            {...tableData}>
            <DataTable
              {...tableData}
              columns={columns}
              data={data}
              customStyles={customStyles}
              noHeader
              defaultSortField="#"
              defaultSortAsc={true}
              // progressPending={loading}
              pagination
              paginationServer
              // paginationTotalRows={totalRows}
              // paginationDefaultPage={currentPage}
              // onChangeRowsPerPage={handlePerRowsChange}
              // onChangePage={handlePageChange}
              highlightOnHover
              dense
            />
          </DataTableExtensions>
        </div>
      </div>
    </>
  );
};

export default Clients;
