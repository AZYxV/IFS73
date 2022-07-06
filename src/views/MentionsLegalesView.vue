<template>
    <main>
        <section>
            <div>
                <h1>Mentions légales</h1>
                <p>
                    IFS est un centre de ressources proposant des formations dans le secteur bureautique.
                </p>
            </div>
            <div>
                <h3>Identification</h3>
                <p>
                    SAS au capital de :<br>
                    Immatriculation : <br>
                    N° Siret : <br>
                    Code NAF / APE : 
                </p>
            </div>
            <div>
                <h3>Organisme de formation agréé</h3>
                <p>Numéro de déclaration d'activité : </p>
            </div>
            <div>
                <h3>Adresse du siège social</h3>
                <p>
                    :<br>
                    :
                </p>
            </div>
            <div>
                <h3>Conception et réalisation du site internet</h3>
                <p>
                    Le site internet IFS est la propriété exclusive de la société IFS, agence de formations qui développe et gère le contenu (texte, image, logo, blog...).
                </p>
            </div>
            <div>
                <h3>Equipe IFS</h3>
                <p>
                    Propriétaire, Correcteur et Maintenance :<br>
                    :
                </p>
                <p>
                    Codeur, Graphiste, Intégrateur  graphique, Rédacteur :<br> 
                    :<br>
                    : 
                </p>
            </div>
            <div>
                <h3>Hébergement du site internet</h3>
                <p>Le site internet de l'Agence IFS est hébergé sur un serveur mutualisé.</p>
                <p>
                    Le serveur mutualisé est la propriété de la société OVH pour laquelle, l'Agence IFS a un contrat de partenariat commercial.
                </p>
            </div>
            <div>
                <h3>Données privées</h3>
                <p>
                    Le site internet de l'IFS peut être amener à collecter des données informatiques sur les internautes, visiteurs et clients dans le but d'une tilisation commerciale (devis, facture, promotion...).
                </p>
                <p>
                    Conformément à la loi Informatique et Libertés (divs 38 et suivants de la loi 78-17 du 6 janvier 1978), vous pouvez consulter ou demander le retrait des informations vous concernant en nous contactant simplement par email.
                </p>
                <p>
                    IFS s'engage par ailleurs à ne pas revendre à un tiers les données informatiques et à respecter la loi LCEN (loi pour la confiance dans l'économie numérique) dans le cadre de ses opérations de promotions.
                </p>
            </div>
            <div>
                <h3>Messagerie</h3>
                <p>Pour toute remarque sur le fonctionnement du site, écrivez à l'administrateur du site à l’adresse www.ifs.fr</p>
                <p>Les messages que vous nous ferez parvenir par l'intermédiaire d'Internet peuvent êtres interceptés sur le réseau. Jusqu'à ce qu'ils nous parviennent, leur confidentialité ne peut être garantie.</p>
            </div>
            <div>
                <h3>Exonération de responsabilité</h3>
                <p>IFS ne donne aucune garantie et n'assume aucune responsabilité relative à l'usage, la copie, la transmission et à toute utilisation des informations, de quelque nature que ce soit, contenues sur le site www.itfs.fr</p>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
 @import "@/scss/_variables.scss";

    main{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: $gap-4;
        padding: 4rem 1rem;
    }

        section{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            gap: $gap-4;
        }

        div{
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        h1{
            font-size: 1.5rem;
        }

@media (min-width:768px){
    h1{
        font-size: 2rem;
    }
}

@media (min-width:1024px){
    div{
        padding: 0 5%;
    }
}

@media (min-width:1440px){
    div{
        padding: 0 10%;
    }
}
</style>