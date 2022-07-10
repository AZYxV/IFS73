<script>
import { defineComponent } from 'vue';
import Vue3autocounter from 'vue3-autocounter';

export default defineComponent({
  name: 'CompteurTaux',
  components: {
    'vue3-autocounter': Vue3autocounter
  }
});   
</script>

<template>
    <main>
        <h1>Decouvrez nos formations</h1>
        <section class="section-microsoft">
            <div class="section-microsoft__item">
                <img src="@/assets/formations/microsoft-word-2019.svg" alt="logo microsoft word">
                <p>Word</p>
            </div>
            <div class="section-microsoft__item">
                <img src="@/assets/formations/microsoft-excel-2019.svg" alt="logo microsoft excel">
                <p>Excel</p>
            </div>
            <div class="section-microsoft__item">
                <img src="@/assets/formations/microsoft-powerpoint-2019.svg" alt="logo microsoft powerpoint">
                <p>Powerpoint</p>
            </div>
        </section>
        
        <section class="section-presentation">
            <div class="section-presentation__div">
                <h3>Vous souhaitez acquérir des compétences et améliorer votre maîtrise des logiciels de bureautique ?</h3>
                <p>
                    La maitrise de la bureautique renforce votre productivité et votre efficacité professionnelle.
                    Et la formation professionnelle continue vous permet de développer ces compétences, profitez-en !
                    
                    IFS vous propose des formations aux logiciels Microsoft Word, Microsoft Excel et Microsoft Powerpoint,
                    entièrement sur mesure, qui s'adaptent complètement à vos besoins spécifiques.
                    
                    Les sessions de formation sont organisées en présentiel à Chambéry ou en distanciel à la demande,
                    individuellement ou en groupe.
                </p>
            </div>
        </section>
        <section class="section-satisfaction">
            <div class="section-satisfaction__div-double">
                <div class="section-satisfaction__div-double__div-bloc">
                    <h3>Stagiaires formés</h3>
                    <vue3-autocounter class="nombre" ref='counter' :startAmount='0' :endAmount='100' :duration='3' :autoinit='true'/>
                    <p>Depuis<br>L'année 2022</p>
                </div>
                <div class="section-satisfaction__div-double__div-bloc">
                    <h3>Taux d'assuidité</h3>
                    <vue3-autocounter class="nombre" ref='counter' :startAmount='0' :endAmount='100' :duration='3' :autoinit='true'/>
                    <p>Note<br>sur 100</p>
                </div>
            </div>
            <div class="section-satisfaction__div-double">
                <div class="section-satisfaction__div-double__div-bloc">
                    <h3>Satisfaction globale</h3>
                    <vue3-autocounter class="nombre" ref='counter' :startAmount='0' :endAmount='100' :duration='3' :autoinit='true'/>
                    <p>Note<br>sur 100</p>
                </div>
                <div class="section-satisfaction__div-double__div-bloc">
                    <h3>Chez IFS</h3>
                    <vue3-autocounter class="nombre" ref='counter' :startAmount='0' :endAmount='100' :duration='3' :autoinit='true'/>
                    <p>Recommandent<br>la formation(%)</p>
                </div>
            </div>
        </section>
        <section class="section-contact">
            <img src="@/assets/formations/femme_formation.png" alt="illutration femme formation">
            <div class="section-contact__div">
                <h2>Contactez nous !</h2>
                <router-link class="router" to="/contact">Accéder</router-link>
            </div>
        </section>
       
        <section class="section-blocs">
            <div class="section-blocs__div">
                <h3>Une formation pour tous !</h3>
                <p>
                    Que vous soyez salarié, entrepreneur ou demandeur d’emploi,
                    toute personne souhaitant approfondir ses connaissances
                    ou au contraire souhaitant découvrir Word, Excel et Powerpoint,
                    dans un contexte professionnel ou personnel. 
                </p>
            </div>
            <div class="section-blocs__div">
                <h3>Comment financer sa formation ?</h3>
                <p> 
                    Informatique Formation Sécurité est enregistré en tant qu'organisme de formation professionnelle 
                    sous le numéro 84 73 0197573 auprès de la DREETS de la région Auvergne-Rhône-Alpes 
                    (cet enregistrement ne vaut pas agrément de l'Etat). 
                </p>
            </div>
        </section>
        <section class="section-tarif">
            <h2>Catalogue de Formations 2022</h2>
            <img class="img-tableau" src="@/assets/formations/tarifs.png" alt="Tableau">
            <a href="https://drive.google.com/file/d/1HreTXIHlu_Qp1ZrNLvWNI7hHYsrLszH4/view?usp=sharing" download>Télécharger Le Catalogue</a>
            <h2>Télécharger les programmmes</h2>
            <div class="section-tarif__div-bloc">
                <div class="section-tarif__div-bloc__div-microsoft">
                    <img class="img-microsoft" src="@/assets/formations/microsoft-word-2019.svg" alt="logo microsoft word">
                    <a class="lien-cours" href="https://drive.google.com/file/d/161zMeld9Jse26dqpEXO3nkg3BYBXNr0E/view?usp=sharing" download>Initiation Word</a>
                    <a class="lien-cours" href="">Perfectionnement Word</a>
                </div>
                <div class="section-tarif__div-bloc__div-microsoft">
                    <img class="img-microsoft" src="@/assets/formations/microsoft-excel-2019.svg" alt="logo microsoft excel">
                    <a class="lien-cours" href="https://drive.google.com/file/d/1Sa3YkfRwDP6qJ3I6RYmq-hDmvcPaOHB2/view?usp=sharing" download>Initiation Excel</a>
                    <a class="lien-cours" href="https://drive.google.com/file/d/1pEYiMUU_5jcQTf4IhSs-026nNOwP4FRS/view?usp=sharing" download>Perfectionnement Excel</a>
                    <a class="lien-cours" href="">Tableaux Croisés</a>
                </div>
                <div class="section-tarif__div-bloc__div-microsoft">
                    <img class="img-microsoft" src="@/assets/formations/microsoft-powerpoint-2019.svg" alt="logo microsoft powerpoint">
                    <a class="lien-cours" href="">Initiation Powerpoint</a>
                </div>
            </div>
            <a class="dernier-lien" href="">Bureautique Excel/Word/Powerpoint</a>
        </section>
    </main>
</template>



<style lang="scss" scoped>

@import "@/scss/variables";

h1{
    font-size: 1.5rem;
}

.section-microsoft{
    display: flex;
    justify-content: center;
    flex-direction: column;
    
    &__item{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
    }

    img{
        width: 120px;
        height: auto;
    }

    p{  
        width: 150px;
        color: white;
        border-radius: $radius-12;
        padding: .5rem 1rem;
        background: $secondary-color;
        border: 1px solid $secondary-color;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
    }
}   

.section-presentation{
    &__div{
        background-color: $primary-color;
        border-radius: $radius-24;
        box-shadow: $box-shadow-bottom;
        padding: 2rem 1rem;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 12px;
    }
}

.section-satisfaction{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap:2rem;

        &__div-double{
             display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 2rem;

            &__div-bloc{
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                padding: 1rem;
                width: 220px;
                height: 220px;
                background: $primary-color;
                border-radius: $radius-24;
                box-shadow: $box-shadow-bottom;
            
                p{
                    font-family: 'Righteous', cursive;
                }

                .nombre{
                    font-size: 4rem;
                   
                }
            }
        }
    }

.section-contact{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12rem;
    
    img{
        display: none;
    }

    &__div{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      
      h2{
        font-size: 1.5rem;
      }
      
      .router{
        color: $primary-color;
        text-decoration: none;
        border-radius: $radius-12;
        padding: .5rem 1rem;
        background: $secondary-color;
        border: 1px solid $secondary-color;
        transition: all 0.2s ease-in-out;
        }

        .router:hover{
            background: $primary-color;
            color: $secondary-color;
        }
    }
}

.section-blocs{
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: $gap-4;

    &__div{
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: $primary-color;
        border-radius: $radius-24;
        box-shadow: $box-shadow-bottom;
        padding: 2rem 1rem;
        gap: 12px;
    }
}

.section-tarif{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $gap-4;
    
    .img-tableau{
        display: none;
        width: clamp(5rem, 100%, 100%);
        height: auto;
    }

    h2{
        font-size: 1.5rem;
    }

    a{  
        text-decoration: none;
        color: white;
        border-radius: $radius-12;
        padding: .5rem 1rem;
        background: $secondary-color;
        border: 1px solid $secondary-color;
        text-decoration: none;
        transition: all 0.2s ease-in-out;
    }
    
    a:hover{
            background: $primary-color;
            color: $secondary-color;
        }

    &__div-bloc{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        
        
        &__div-microsoft{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            .img-microsoft{
                width: 120px;
            }

            .lien-cours{
                width: 230px;
            }
        }
    }
}

.dernier-lien{
    width: 230px;
}


@media (min-width:768px){
    h1{
        font-size: 2rem;
    }

    .section-microsoft{

        flex-direction: row;
        gap: $gap-4;

        &__item{
            flex-direction: column;
        }
 
        &__item img{
            width: 150px;
        }
    }
    .section-tarif{

        h2{
            font-size: 2rem;
        }

        .img-tableau{
            display: block;
        }

        &__div-bloc{
            flex-direction: row;
            gap: 2rem;
        }
    }

    .dernier-lien{
    width: 760px;
}
    .section-satisfaction{
        flex-direction: row;
        gap:6rem;

        &__div-double{
            gap: 6rem;
        }
    }

    .section-contact{
        img{
            display: block;
            height: auto;
            width: clamp(5rem, 30%, 100%);
        }
        &__div{
            h2{
            font-size: 2rem;
            }
        }
    }

    .section-blocs{
        flex-direction: row;
    }
    .section-tarif{
        
        &__div-bloc{  
            
            &__div-microsoft{

                .img-microsoft{
                    width: 150px;
                }
            }
        }
    }
}

@media (min-width:1024px){

    .section-presentation,.section-blocs{
        padding: 0 5%;
    }

    .section-satisfaction{
            gap:2rem;
            
            &__div-double{
                flex-direction: row;
                gap:2rem; 
            }
        }

    .section-tarif{
        
        .img-tableau{
            width: clamp(5rem, 90%, 100%);
        }
    }
}

@media (min-width:1440px){
    
    .section-presentation,.section-blocs{
        padding: 0 10%;
    }

    .section-contact{
        
        img{
             width: clamp(5rem, 25%, 100%);
        }
    }

    .section-tarif{
        
        .img-tableau{
            width: clamp(5rem, 80%, 100%);
        }
    }
}
</style>
