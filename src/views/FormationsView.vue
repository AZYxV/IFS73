<script>
import { defineComponent } from 'vue';
import Vue3autocounter from 'vue3-autocounter';

export default defineComponent({
  name: 'vueGou',
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
                    
                    IFS vous propose des formations aux logiciels Microsoft Word, Microsoft Excel, Microsoft Powerpoint,
                    entièrement sur mesure, qui s'adaptent complètement à vos besoins spécifiques.
                    
                    Les sessions de formation sont organisées en distanciel ou à Aix-les-Bains ou Chambéry,
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
                    ou au contraire souhaitant découvrir Word, Excel, Powerpoint,
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
            <img src="@/assets/formations/tarifs.png" alt="Tableau">
            <a href="../assets/formations/CATALOGUE DE FORMATIONS 2022.pdf" download>Télécharger Le Catalogue</a>
            <h2>Télécharger les programmmes</h2>
            <div class="section-tarif__div-lien">
                <a class="lien" href="../assets/formations/Programme_de_formation_14H_Initiation_Word.pdf" download>Initiation Word</a>
                <a class="lien" href="../assets/formations/Programme_de_formation_21H_Initiation_Excel.pdf" download>Initiation Excel</a>
                <a class="lien" href="../assets/formations/Programme_de_formation_21H_Perfectionnement_Excel.pdf" download>Perfectionnement Excel</a>
            </div>
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
    
    img{
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
        width: 260px;
    }
    
    a:hover{
            background: $primary-color;
            color: $secondary-color;
        }

    &__div-lien{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
    }
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

        img{
            display: block;
        }
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
        
        img{
            width: clamp(5rem, 90%, 100%);
            height: auto;
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
        
        img{
            width: clamp(5rem, 80%, 100%);
            height: auto;
        }
    }
}
</style>
