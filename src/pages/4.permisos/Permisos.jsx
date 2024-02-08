import React, {useState} from "react";
import {BsPeopleFill, BsPencilSquare, BsFillTrash3Fill} from "react-icons/bs";
import {useFormik} from "formik";
import * as Yup from "yup";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

const initDataForm = {
  rol: "",
  ver: "",
  crear: "",
  update: "",
  delete: "",
};

const validationForm = Yup.object({
  rol: Yup.string().required("Selecciona un rol"),
  ver: Yup.string().required("Selecciona *"),
  crear: Yup.string().required("Selecciona *"),
  update: Yup.string().required("Selecciona *"),
  delete: Yup.string().required("Selecciona *"),
});

export const Permisos = () => {
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
      rol: "Pablo",
      ver: "on",
      crear: "on",
      update: "on",
      delete: "off",
    },
    {
      id: 2,
      rol: "activo",
      ver: "on",
      crear: "on",
      update: "on",
      delete: "off",
    },
    {
      id: 3,
      rol: "Pablo",
      ver: "on",
      crear: "on",
      update: "on",
      delete: "off",
    },
    {
      id: 4,
      rol: "activo",
      ver: "on",
      crear: "on",
      update: "on",
      delete: "off",
    },
    {
      id: 5,
      rol: "activo",
      ver: "on",
      crear: "on",
      update: "on",
      delete: "off",
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
      name: "ROL",
      selector: (row, i) => row.rol,
      sortable: true,
      width: "120px",
    },
    {
      name: "VER",
      selector: (row, i) => row.ver,
      sortable: true,
    },
    {
      name: "CREAR",
      selector: (row, i) => row.crear,
      sortable: true,
    },
    {
      name: "ACTUALIZAR",
      selector: (row, i) => row.update,
      sortable: true,
    },
    {
      name: "ELIMINAR",
      selector: (row, i) => row.delete,
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
            <h2 className="text-2xl font-medium w-full">Permisos </h2>
          </div>
          {/* <div className="w-full md:w-[100%] lg:w-[30%] pb-8 bg-gray-100 rounded-md shadow-md shadow-slate-500"> */}
          <div className="w-full p-2 rounded-t">
            <h3 className="text-lg font-semibold">Agregar permisos a: </h3>
          </div>
          <form onSubmit={formik.handleSubmit} className="mx-auto mt-2 ">
            <div className="flex flex-wrap ">
              {/* Rol */}
              <div className="w-full md:w-[100%] px-3 mb-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Nombre del Rol
                </label>
                <div className="relative">
                  <select
                    id="rol"
                    name="rol"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.rol}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.rol && formik.errors.rol
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}>
                    <option value="">Selecciona</option>
                    <option value="administrador">Administrador</option>
                    <option value="gerente">Gerente de ventas</option>
                    <option value="ventas">Ventas</option>
                    <option value="supervisor">Supervisor</option>
                  </select>
                  {formik.touched.rol && formik.errors.rol && (
                    <span className="text-red-600 text-[10px]">
                      {formik.errors.rol}
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
                </div>
              </div>
              {/* ver/crear */}
              <div className="w-full md:w-[100%] px-3 flex items-center justify-center gap-3 mb-2">
                <div className="relative  w-[50%]">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Ver
                  </label>
                  {/* <div className="relative"> */}
                  <select
                    id="ver"
                    name="ver"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.ver}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.ver && formik.errors.ver
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}>
                    <option value="">Selecciona</option>
                    <option value="on">ON</option>
                    <option value="off">OFF</option>
                  </select>
                  {formik.touched.ver && formik.errors.ver && (
                    <span className="text-red-600 text-[10px]">
                      {formik.errors.ver}
                    </span>
                  )}
                  {/* </div> */}
                </div>
                <div className="relative  w-[50%]">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Crear
                  </label>
                  {/* <div className="relative"> */}
                  <select
                    id="crear"
                    name="crear"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.crear}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.crear && formik.errors.crear
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}>
                    <option value="">Selecciona</option>
                    <option value="on">ON</option>
                    <option value="off">OFF</option>
                  </select>
                  {formik.touched.crear && formik.errors.crear && (
                    <span className="text-red-600 text-[10px]">
                      {formik.errors.crear}
                    </span>
                  )}
                  {/* </div> */}
                </div>
              </div>
              {/* telefono/pais */}
              <div className="w-full md:w-[100%] px-3 flex items-center justify-center gap-3 mb-5">
                <div className="relative  w-[50%]">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Actualizar
                  </label>
                  {/* <div className="relative"> */}
                  <select
                    id="update"
                    name="update"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.update}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.update && formik.errors.update
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}>
                    <option value="">Selecciona</option>
                    <option value="on">ON</option>
                    <option value="off">OFF</option>
                  </select>
                  {formik.touched.update && formik.errors.update && (
                    <span className="text-red-600 text-[10px]">
                      {formik.errors.update}
                    </span>
                  )}
                  {/* </div> */}
                </div>
                <div className="relative  w-[50%]">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Eliminar
                  </label>
                  {/* <div className="relative"> */}
                  <select
                    id="delete"
                    name="delete"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.delete}
                    className={`block appearance-none w-full bg-gray-200 border ${
                      formik.touched.delete && formik.errors.delete
                        ? "border -2 border-red-700"
                        : "border -2 border-gray-200"
                    }   text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}>
                    <option value="">Selecciona</option>
                    <option value="on">ON</option>
                    <option value="off">OFF</option>
                  </select>
                  {formik.touched.delete && formik.errors.delete && (
                    <span className="text-red-600 text-[10px]">
                      {formik.errors.delete}
                    </span>
                  )}
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

export default Permisos;
