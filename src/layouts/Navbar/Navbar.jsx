import { ItemNav } from "../../Components/ItemNav";

export const Navbar = ( ) => {
    return (
        <>
        <nav>
            <ul className="flex flex-row flex-wrap ">
                <ItemNav
                    linksNav="home"
                    myStyle='pr-6 text-zinc-50'
                    contentItem="Home"
                    routes="/"
                />
                <ItemNav
                    linksNav="clase 1"
                    myStyle='pr-4 text-zinc-50'
                    contentItem="Habilidades tecnicas"
                    routes="/TechnicalSkills"
                />
                <ItemNav
                    linksNav="clase 2"
                    myStyle='pr-4 text-zinc-50'
                    contentItem="Habilidades Sociales"
                    routes="/SocialSkills"
                />
                <ItemNav
                    linksNav="clase 3"
                    myStyle='pr-4 text-zinc-50'
                    contentItem="Experiencia Profesional"
                    routes="/ProfessionalExperience"
                />
                <ItemNav
                    linksNav="clase 3"
                    myStyle='pr-4 text-zinc-50'
                    contentItem="Estudios"
                    routes="/Studies"
                />
            </ul>
        </nav>
        </>
    )
}

