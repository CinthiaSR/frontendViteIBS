import {useState} from "react";
import {BsSearch, BsBoxArrowInRight, BsArrowLeft} from "react-icons/bs";

export const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [hiddenLogin, setHiddenLogin] = useState(false);

  const handleShowLogin = () => {
    console.log("Show Login");
    setShowLogin(!showLogin);
  };

  // const handleHiddenLogin = () => {
  //   console.log("Hidden Login");
  //   setHiddenLogin(!hiddenLogin);
  // };
  return (
    <div className="flex  h-screen">
      <div className="container mx-auto">
        <div className="bg-white p-8 mb-8">
          <h1 className="text-2xl font-bold text-center">Visor Empresarial</h1>
          <div className="flex items-center justify-center">
            <img src="visor.png" alt="" className="w-[65%]" />
          </div>
          <p className="text-center text-xl">Estas buscando una orden?</p>
          <p className="text-center text-sm mb-6">
            Aqui encontraras un listado de todas las ordenes emitadas.
          </p>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center gap-2 bg-red-900 text-white px-16 py-2  hover:bg-black focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ">
              <BsSearch />
              BUSCAR
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto bg-red-900 max-h-screen">
        {!showLogin ? (
          <div className="p-8 pb-5 transition-all">
            <h1 className="text-2xl font-bold text-center">
              Acceder a la plataforma
            </h1>
            <div className="flex items-center justify-center">
              <img src="access.png" alt="" className="w-[65%]" />
            </div>
            <p className="text-center text-xl">
              Deseas modificar o agregar una orden?
            </p>
            <p className="text-center text-sm">
              Si ya dispones de una cuenta accede con ella.
            </p>
          </div>
        ) : (
          <div className="transition-all"></div>
        )}

        <div className="flex items-center justify-center">
          {/* <Link to={"/login"}> */}
          <button
            type="submit"
            onClick={handleShowLogin}
            className="flex items-center gap-2 bg-red-900 text-white px-16 py-2  hover:bg-black focus:outline-none focus:shadow-outline-blue active:bg-blue-800 ">
            {!showLogin ? <BsBoxArrowInRight /> : <BsArrowLeft />}
            {!showLogin ? "inicia session" : "Cancelar"}
            {/* INICIAR SESIÓN */}
          </button>
        </div>
      </div>
    </div>
  );
};
