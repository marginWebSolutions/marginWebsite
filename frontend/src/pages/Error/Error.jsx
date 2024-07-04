import "./Error.scss";
import GoToSection from "../../components/GoToSection/GoToSection";
import Section from "../../layout/Section/Section";

export default function Error() {
    document.title = "Cette page n'existe pas - Margin Web Solutions - Création de sites Internet à Saint-Etienne et Nevers"

    return (
            <div className="error">
                <h1 className="error__title">
                    404
                </h1>
                <GoToSection 
                    title="Oups cette page n'existe pas !"
                    text="La page que vous tentez d'afficher est introuvable"
                    singleBtnText="Retour à l'accueil"
                    singleBtnHref="/"
                />
            </div>
    )
};