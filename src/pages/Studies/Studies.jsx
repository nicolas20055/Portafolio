
  import { Certificate } from '../Certificate/Certificate';

  export function Studies() {
    return (
      <>
        <section id="certificatees" className="flex flex-col items-center p-4">
          <h1 className="text-3xl flex justify-center items-center font-bold bg-gradient-to-r from-blue-400 via-green-400 to-red-500 bg-[length:200%_200%] animate-textGradient bg-clip-text text-transparent mb-4">
            Certificados
          </h1>
          <div className="flex flex-wrap justify-center gap-4 max-w-full">
            <Certificate url={'https://drive.google.com/file/d/1-FrihVmC7pvSEo-MgzCKS_PNmUc0vhXA/view?usp=drive_link'} titleCertificate={'TÉCNICO EN'} />
            <Certificate url={'https://drive.google.com/file/d/1H8MUPxwlAc1-ikLCSvTPxOs9Ya3OR-3_/view?usp=drive_link'} titleCertificate={'TÉCNICO EN'} />
            <Certificate url={'https://drive.google.com/file/d/19Kc_fFFLG8NJZ0E3l9EZpGtU7zXzV5TD/view?usp=drive_link'} titleCertificate={'TÉCNICO EN'} />
            <Certificate url={'https://drive.google.com/file/d/1yDQgcRjjQ-lmVLg1deATEB6SGk7-PHjH/view?usp=drive_link'} titleCertificate={'CONSTANCIA PARTICIPACIÓN'} />
            <Certificate url={'https://drive.google.com/file/d/186kgkGiuUCa_u8EryCCX9OaqiLASxcVI/view?usp=drive_link'} titleCertificate={'CONSTANCIA PARTICIPACIÓN'} />
            <Certificate url={'https://drive.google.com/file/d/1BNrGun0uacwM6Eic8QhxQ511YBtMB4ha/view?usp=sharing'} titleCertificate={'Platzi'} />
          </div>
        </section>
      </>
    );
  }

  export default Studies;
