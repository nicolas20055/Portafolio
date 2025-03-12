import foto from "../../assets/images/foto.jpg";


export const Main = () => {
    return (
        <>
            <main className="size-full flex flex-col items-center justify-center">
                <div className="card bg-transparent shadow-lg rounded-lg p-5 w-full max-w-xl flex border border-gray-300 mb-10">
                    <img className="w-48 h-48 object-cover rounded-full mr-5" src={foto} alt="imagen 1" />
                    <div className="flex flex-col justify-center">
                        <h5 className="text-lg text-gray-100 font-semibold pb-2">Nicolas Ortiz</h5>
                        <p className="text-gray-100">Soy un desarrollador apasionado con experiencia en diversas tecnologías y un fuerte enfoque en la creación de soluciones eficientes y escalables.</p>
                    </div>
                </div>
                
            </main>
        </>
    )
}