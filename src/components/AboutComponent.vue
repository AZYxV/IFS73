<template>
    <main>
        <h1>A propos de moi...</h1>
        <section>
            <div class="div-apropos">
                <img class="img-profil" src="@/assets/about/profil.png" alt="">
                <h2>Amandine Lorenzo</h2>
                <p>
                    Assistante de direction et formatrice bureautique depuis 2017, j’ai eu la chance de reprendre le 
                    flambeau de la société IFS73 en tant que gérante en 2020.
                </p>
                <div class="div-barre"></div>
                <p>
                    Diplômée d’un bachelor management et
                    gestion des entreprises, j’ai la chance aujourd’hui d’allier mon intérêt pour l’organisation et la 
                    gestion avec mon sens de la communication et du partage.
                </p>
                <div class="div-barre"></div>
                <p>
                    Valeurs :
                    Bienveillance // Ecoute // Esprit d’equipe 
                </p>
                <img class="img-femme" src="@/assets/about/femme-apropos.png" alt="femme debout a propos">
            </div>
        </section>
    </main>
</template>

<style scoped>

    h1{
       font-size: 2rem;
       margin-top: 4rem;
    }

    section{
        display: flex;
        justify-content: center;
    }

    .div-apropos{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        background-color: white;
        border-radius: 24px;
        width: 50rem;
        max-height: 150rem;
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.10);
        margin: 4rem 2rem 12rem 2rem;
        padding: 8rem 8rem;
        position: relative;
    }

    h2{
        font-family: 'Righteous', cursive;
        margin-bottom: 4rem;
    }

    .img-profil{
        width: 15rem;
        height: auto;
        position: absolute;
        top: -120px;
        left: -120px;
    }

    .img-femme{
        width: 8rem;
        height: auto;
        position: absolute;
        bottom: -120px;
        right: -70px;
    }

    .div-barre{
        width: 18rem;
        margin: 4rem 0;
        height: 2px;
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.224);
    }

    /* ---------------------------------Media queries------------------------------------ */

    @media screen and (max-width:1200px){
        .div-apropos{
            padding: 6rem 6rem;
        }

        .img-profil{
            width: 12rem;
            height: auto;
            position: absolute;
            top: -120px;
            left: 40px;
        }

        .img-femme{
            width: 6rem;
            height: auto;
            position: absolute;
            bottom: -150px;
            right: 10px;
        }
    }

    @media screen and (max-width:800px){
        .img-profil{
            position: static;
            margin-bottom: 4rem;
        }
    }

    @media screen and (max-width:600px){
        .div-apropos{
            margin: 4rem 2rem 4rem 2rem;
            padding: 4rem 4rem;
        }

        .img-femme{
            display: none;
        }

        .div-barre{
            width: 10rem;
        }
    }

    @media screen and (max-width:500px){
        .div-apropos{
            padding: 2rem 1rem;
        }

        h1{
            font-size: 1.5rem;
        }
    }



   
</style>