<template>
    <main>
        <h1>A propos de moi...</h1> 
        <section class="section-about">
            <div class="section-about__div-global">
                <img class="img-profil" src="@/assets/about/Amandine-Lorenzo.png" alt="">
                <h2>Amandine Lorenzo</h2>
                <p>
                    Assistante de direction et formatrice bureautique depuis 2017, j’ai eu la chance de reprendre le 
                    flambeau de la société IFS73 en tant que gérante en 2020.
                </p>
                <p>
                    Diplômée d’un bachelor management 
                    gestion des entreprises, j’ai la chance aujourd’hui d’allier mon intérêt pour l’organisation et la 
                    gestion avec mon sens de la communication et du partage.
                </p>
                <h2>Mes Valeurs</h2>
                <div class="section-about__div-global__div-valeurs">
                    <div>
                        <img class="logo" src="@/assets/about/Papillon.png" alt="image d'un papillon">
                        <h4>Bienveillance</h4>
                    </div>
                    <div>
                        <img class="logo" src="@/assets/about/Team.png" alt="image représentant un groupe">
                        <h4>Esprit d’equipe</h4>
                    </div>
                    <div>
                        <img class="logo" src="@/assets/about/Bulles.png" alt="image represantant des bulles de discussion">
                        <h4>Ecoute</h4>
                    </div>
                </div>
                <img class="img-femme" src="@/assets/about/femme-apropos.png" alt="femme debout a propos">
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
    @import "@/scss/_variables.scss";
    
    h1{
       font-size: 1.5rem;
    }

    .section-about{
        display: flex;
        justify-content: center;
        align-items: center;
        
        &__div-global{
            position: relative;
            background-color: $primary-color;
            border-radius: $radius-24;
            box-shadow: $box-shadow-bottom;
            padding: 2rem 1rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            gap: $gap-4;

            .img-profil{
                width: 200px;
                height: auto;
                border-radius: 100px;
            }
            .img-femme{ 
                display: none;
                width: 100px;
                height: auto;
            }

            &__div-valeurs{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 2rem;
            }
        }
    }

    .logo{
        width: 80px;
        height: auto;
    }

    @media (min-width:768px){
        h1{
            font-size: 2rem;
        }

        .section-about{
            padding: 0 5%;
        
            &__div-global{
                padding: 4rem;

                &__div-valeurs{      
                    flex-direction: row;
                    gap: 4rem;   
                }
            }
        }
    }

    @media (min-width:1024px){
        .section-about{
            padding: 0 10%;
        
            &__div-global{
                margin-bottom: 10rem;

                .img-profil{
                    position: absolute;
                    width: 200px;
                    height: auto;
                    top: -100px;
                    left: -60px;
                }
                .img-femme{
                    position: absolute;
                    display: block; 
                    bottom: -150px;
                    right: -60px;  
                } 
            }
        }
    }

    @media (min-width:1440px){
        .section-about{
            padding: 0 20%;
            &__div-global{
                .img-femme{
                    width: 120px;
                } 
            }
        }
    }

    
</style>