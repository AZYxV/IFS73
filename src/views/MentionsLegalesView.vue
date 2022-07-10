<template>
    <main>
       <section class="section-ml">
            <h1>MENTIONS LEGALES</h1>
            <div class="section-ml__div-bloc">
                <h2>Réalisation du site</h2>
                <p class="p-made">
                    Made with ❤️ by :<br>
                    Nathan Sichouc : nschpro@gmail.com,<br>
                    Raphaël Hernandez : raphaelhrndpro@gmail.com
                </p>
            </div>
            <div class="section-ml__div-bloc">
                <h2>INFORMATIQUE FORMATION SECURITE est dirigée par Amandine LORENZO</h2>
                <p>
                    Siret : 894 036 516 00017<br>
                    Le siège social de la société se situe 45, place du commerce – 73230 SAINT ALBAN LEYSSE.<br>
                    Adresse mail : <router-link class="router" to="/contact">a.lorenzo@ifs73.fr</router-link><br> 
                    Téléphone : 06 17 03 34 30
                </p>
                <p>
                    <strong>
                        INFORMATIQUE FORMATION SECURITE est enregistré comme organisme de formation professionnelle sous le numéro 84730231273 auprès de la DIRECCTE Auvergne-Rhône-Alpes.
                    </strong>
                </p>
                <p><strong>La direction de la publication</strong> est assurée par Amandine LORENZO.</p>
            </div>
            <div class="section-ml__div-bloc">
                <h2>Propriété intellectuelle et droits d'auteurs</h2>
                <p>
                    La reproduction même partielle de ce site internet et de l'ensemble de son contenu est interdite sans autorisation.
                </p>
            </div>
            <div class="section-ml__div-bloc">
                <h2>Informatique et Libertés et RGPD</h2>
                <p>
                    Les informations portées sur le formulaire de la page contact sont confidentielles.
                    Elles font l’objet d’un traitement informatisé destiné à apporter une réponse pertinente à vos demandes.
                </p>
                <p>
                    Le destinataire des données est le service administratif de INFORMATIQUE FORMATION SECURITE.
                </p>
                <p>
                    Conformément à la loi "informatique et libertés" du 6 janvier 1978 modifiée,
                    vous bénéficiez d’un droit d’accès et de rectification aux informations qui vous concernent.
                    Si vous souhaitez exercer ce droit et obtenir communication des informations vous concernant, vous pouvez adresser un mail à <router-link class="router" to="/contact">a.lorenzo@ifs73.fr</router-link>
                    Vous pouvez également, pour des motifs légitimes, vous opposer au traitement des données vous concernant.
                </p>
            </div>
            <div class="section-ml__div-bloc">
                <h2>Hébergement</h2>
                <p>
                    Ce site est hébergé sur les serveurs de OVH.
                    Service client : 1007 ou le 09 72 10 10 07
                </p>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
 @import "@/scss/_variables.scss";

.section-ml{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: $gap-4;
    background: $primary-color;
    padding: 4rem 1rem;
    border-radius: $radius-24;
    box-shadow: $box-shadow-bottom;

    &__div-bloc{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
    }
}

h1{
    font-size: 1.5rem;
}

p{
    text-align: justify;
}

.p-made{
    text-align: left;
}

.router{
    color: $secondary-color;
}
    
@media (min-width:768px){
    h1{
        font-size: 2rem;
    }
    
    .section-ml{
        margin: 0 5%;
        padding: 4rem 5%;
    }
}

@media (min-width:1024px){
    
    .section-ml{
        margin: 0 10%;
        padding: 4rem 10%;
    }  
}
</style>
