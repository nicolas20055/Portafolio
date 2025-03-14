import foto from "../../assets/images/foto.jpg";

export const Main = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] overflow-hidden">
            <div className="bg-transparent shadow-lg rounded-lg p-5 w-full max-w-xl flex flex-col sm:flex-row border border-gray-300 mb-10">
                <img className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mb-4 sm:mr-5 sm:mb-0" 
                     src={foto} 
                     alt="imagen 1" 
                />
                <div className="flex flex-col justify-center text-center sm:text-left">
                    <h5 className="text-lg text-gray-100 font-semibold pb-2">Nicolas Ortiz</h5>
                    <p className="text-gray-100">
                        Soy un desarrollador apasionado con experiencia en diversas tecnologías y un fuerte enfoque en la creación de soluciones eficientes y escalables.
                    </p>
                </div>
            </div>
        </main>
    );
};
