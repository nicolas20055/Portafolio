import { Navbar } from "../Navbar/Navbar"


export const Header = () =>{
    return(
      <>
        <header className="w-full h-23  flex flex-row flex-wrap justify-around items-center p-4 ">
          <h1 className=" font-extrabold">Nicolas <span className="text-red-200">Ortiz</span> <span className="text-purple-300">Morales</span> <br /> <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-textGradient bg-clip-text text-transparent flex justify-center">Developer</span></h1>
          <Navbar />
        </header>
      </>

    )

}

