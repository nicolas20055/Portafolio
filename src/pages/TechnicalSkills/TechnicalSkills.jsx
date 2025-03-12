import React from 'react'
import { CardInfo } from '../../Ul/CardInfo/CardInfo'
import { CardInfoAnimated } from '../../Ul/CardInfoAnimated'
import javascriptImage from "../../assets/images/javascript.png";
import reactImage from "../../assets/images/React.png";
import javaImage from "../../assets/images/java.png";
import htmlImage from "../../assets/images/Html.png";
import cssImage from "../../assets/images/Css.png";
import typescriptImage from "../../assets/images/TyScript.png";
import tailwindImage from "../../assets/images/tailwind.jpg";
import CImage from "../../assets/images/C++.png";
import Code from "../../assets/images/Code.png";
import Git from "../../assets/images/Git.png";
import GitHub from "../../assets/images/GitHub.png";
import Vs from "../../assets/images/VS.png";

export function TechnicalSkills() {
  return (
    <main>
      <div className='p-4 flex flex-col gap-4 justify-center items-center'>
        <CardInfoAnimated
          title="Technical Skills"
          content="Lenguajes de programación  que he aprendido."
          images={[javascriptImage, reactImage, javaImage, htmlImage, cssImage, typescriptImage, tailwindImage, CImage]}
        />
        <CardInfo
          title="Technologies"
          content="Tecnologias que he aprendido."
          images={[Code, Git, GitHub,Vs]}
        />
      </div>
    </main>
  );
}
