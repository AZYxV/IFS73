<template>
    <main>
        <h1>Decouvrer nos formations</h1>
        <section class="section-microsoft">
            <div class="div-microsoft">
                <img class="logo-microsoft" src="@/assets/formations/microsoft-word-2019.svg" alt="logo microsoft word">
                <button class="btn-decouvrir">Découvrir</button>
            </div>
            <div class="div-microsoft">
                <img class="logo-microsoft" src="@/assets/formations/microsoft-excel-2019.svg" alt="logo microsoft excel">
                <button class="btn-decouvrir">Découvrir</button>               
            </div>
            <div class="div-microsoft">
                <img class="logo-microsoft" src="@/assets/formations/microsoft-powerpoint-2019.svg" alt="logo microsoft powerpoint">
                <button class="btn-decouvrir">Découvrir</button>
            </div>
        </section>
        
        <section class="section-presentation">
            <div class="div-presentation">
                <h3>Vous souhaitez acquérir des compétences et améliorer votre maîtrise des logiciels de bureautique ?</h3>
                <p>
                    La maitrise de la bureautique renforce votre productivité et votre efficacité professionnelle.
                    Et la formation professionnelle continue vous permet de développer ces compétences, profitez-en !
                    
                    IFS vous propose des formations aux logiciels Microsoft Word, Microsoft Excel, Microsoft Powerpoint,
                    entièrement sur mesure, qui s'adaptent complètement à vos besoins spécifiques.
                    
                    Les sessions de formation sont organisées en distanciel ou à Aix-les-Bains ou Chambéry,
                    individuellement ou en groupe.
                </p>
            </div>
        </section>
        
        <section class="section-contact">
            <img class="img-femme" src="@/assets/formations/femme_formation.png" alt="illutration femme formation">
            <div class="div-contact">
                <h2>Contactez nous !</h2>
                <router-link class="router-nav" to="/contact">Contact</router-link>
            </div>
        </section>
       
        <section class="section-blocs">
            <div class="div-blocs">
                <h3>Une formation pour tous !</h3>
                <p>
                    Que vous soyez salarié, entrepreneur ou demandeur d’emploi,
                    toute personne souhaitant approfondir ses connaissances
                    ou au contraire souhaitant découvrir Word, Excel, Powerpoint,
                    dans un contexte professionnel ou personnel. 
                </p>
            </div>
            <div class="div-blocs">
                <h3>Comment financer sa formation ?</h3>
                <p> 
                    Informatique Formation Sécurité est enregistré en tant qu'organisme de formation professionnelle 
                    sous le numéro 84 73 0197573 auprès de la DREETS de la région Auvergne-Rhône-Alpes 
                    (cet enregistrement ne vaut pas agrément de l'Etat). 
                </p>
            </div>
        </section>
    </main>
</template>

<style scoped>
   h1{
       font-size: 2rem;
       margin-top: 4rem;
   }

   .section-microsoft{
       display: flex;
       justify-content: center;
       gap: 120px;
       margin-top: 4rem;
   }

   .div-microsoft{
       display: flex;
       justify-content: center;
       flex-direction: column;
       gap: 12px;
       align-items: center;
   }

   .logo-microsoft{
       width: 11rem;
       height: auto;
   }

   .btn-decouvrir{
       border: none;
       background-color: #E2003F;
       color: white;
       padding: .5rem 1rem;
       border-radius: 12px;
       font-size: 1rem;
       cursor: pointer;
   }

   .section-presentation{
       display: flex;
       justify-content: center;
       margin-top: 4rem;
   }

   .div-presentation{
       background-color: white;
       border-radius: 24px;
       width: 70rem;
       max-height: 100rem;
       padding: 2rem 4rem;
       box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.10);
       margin: 0 3rem;
    }

    .section-contact{
       display: flex;
       justify-content: center; 
       align-items: center;
       margin-top: 4rem;
       gap: 160px;
    }

    .img-femme{
        width: 400px;
        height: auto;
    }

    h2{
       font-size: 2rem;
       font-family: 'Righteous', cursive;
       margin-bottom: 2rem;
    }

    .router-nav{
        text-decoration: none;
        border: none;
        background-color: #E2003F;
        color: white;
        padding: .5rem 1rem;
        border-radius: 12px;
    }

    .section-blocs{
        padding: 4rem 0;
        display: flex;
        justify-content: center;
        gap: 120px;
    }
    
    .div-blocs{
        background-color: white;
        border-radius: 24px;
        width: 30rem;
        max-height: 100rem;
        padding: 2rem 4rem;
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.10);
        margin: 0 3rem;
    }

    h3{
        font-size: 1.25rem;
        font-family: 'Righteous', cursive;
        padding-bottom: 2rem;
    }

/* ---------------------------------Media queries------------------------------------ */

    @media screen and (max-width:1200px){
        .section-blocs{
            gap: 48px;
        }
     }
    
    @media screen and (max-width:900px){
        
        .logo-microsoft{
            width: 8rem;
        }

        .section-contact{
            gap: 48px;
        }

        .section-blocs{
            gap: 12px;
        }

        h2{
            font-size: 1.5rem;
        }
    }

     @media screen and (max-width:800px){
        .section-microsoft{
            flex-direction: column;
            gap: 12px;
        }

        .div-microsoft{
            flex-direction: row;
            gap: 12px;
        }

        .logo-microsoft{
            width: 12rem;
        }

         .img-femme{
           display: none;
        }

        .section-blocs{
            flex-direction: column;
            gap: 48px;
        }

        .div-blocs{
            width: auto;
            padding: 2rem 2rem;
        }

        .div-presentation{
            padding: 2rem 2rem;
        }
    }

    @media screen and (max-width:400px){

        h1{
            font-size: 1.5rem;
        }
        
        .logo-microsoft{
            width: 8rem;
        }

        .div-presentation,.div-blocs{
             margin: 0 1rem;
        }
    }
</style>