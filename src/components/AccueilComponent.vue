<template>
    <main>
        <div class="title">
            <h1>Formations bureautiques sur mesure</h1>
            <p>Aix-les-Bains • Chambéry • Annecy • Savoie • Haute-Savoie • Isère</p>
        </div>
        <section class="valeurs">
            <div>
                <img src="@/assets/accueil/map.svg" alt="logo carte">
                <p>Proximité</p>
            </div>
            <div>
                <img src="@/assets/accueil/message.svg" alt="logo bulles messages">
                <p>Écoute</p>
            </div>
            <div>
                <img src="@/assets/accueil/toolset.svg" alt="logo engrenages">
                <p>Sur mesure</p>
            </div>
            <div>
                <img src="@/assets/accueil/woman.svg" alt="logo visage femme souriante">
                <p>Sourire</p>
            </div>
        </section>
        <section class="formations">
            <div>
                <h2>Envie de vous former ?</h2>
                <router-link class="router" to="/formations">Nos formations</router-link>
            </div>
            <img src="@/assets/accueil/illustationun.png" alt="Illustration femme présentation">
        </section>
        <section class="paragraphe">
            <div class="paragraphe-flex">
                <div class="bloc right">
                <img src="@/assets/accueil/illustationdeux.png" alt="Illustration homme présentation">
                <div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h3>
                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ipsum dolor sit amet</p>
                </div> 
            </div>
            <div class="bloc left">
                <div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h3>
                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ipsum dolor sit amet</p>
                </div>
                <img src="@/assets/accueil/illustationtrois.png" alt="Illustration homme présentation">
            </div>
            </div>
        </section>
        <h2 class="confiance">Ils nous font confiances</h2>
        <section class="carousel">
            <!-- carousel -->
        </section>
    </main>
</template>

<style scoped>
    .title{
        margin: 4rem 0;
    }

    h1{
        font-size: 2rem;
        margin-top: 4rem;
    }

    h2{
        font-family: 'Righteous', cursive;
        font-size: 2rem;
        margin: 4rem 0;
    }

    h3{
        font-family: 'Righteous', cursive;
    }

    .valeurs{
        margin: 4rem 0;
        display: flex;
        justify-content: center;
        gap: 13rem;
        text-transform: uppercase;
        font-weight: bold;
    }

    .valeurs img{
        width: 125px;
        height: auto;
    }

    .formations{
        display: flex;
        justify-content: center;
        gap: 10rem;
        align-items: center;
        margin: 4rem 0;
    }

    .formations h2{
        font-size: 2rem;
        margin: 2rem 0;
    }

    .formations .router{
        color: white;
        text-decoration: none;
        border-radius: 12px;
        padding: .5rem 1rem;
        background: #E2003F;
    }

    .formations img{
        width: 400px;
        height: auto;
    }

    .paragraphe{
        display: flex;
        justify-content: center;
    }

    .paragraphe-flex{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 70rem;
        gap: 4rem;
    }

    .bloc{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12rem;
        padding: 2rem 4rem;
        background: white;
        border-radius: 24px;
    }

    .bloc div{
        display: flex;
        flex-direction: column;
        gap: 2rem
    }

    .bloc p{
        width: 70%;
        margin: auto;
    }

    .right{
        box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.10);
    }

    .left{
        box-shadow: -10px 10px 20px 0px rgba(0, 0, 0, 0.10);
    }

    .paragraphe img{
        width: 300px;
        height: auto;
    }

    .carousel{
        padding: 4rem 0;
    }

    @media screen and (max-width:1200px){
        .valeurs{
            gap: 8rem;
        }
        .bloc{
            gap: 5rem;
        }
        .paragraphe-flex{
            width: 50rem;
        }
    }

    @media screen and (max-width:900px){

        .valeurs{
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 2rem;

        }
        .formations img{
            width: 300px;
            height: auto;
        }
        .formations h2{
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }
        .paragraphe img{
            width: 200px;
            height: auto;
        }
        .paragraphe-flex{
            width: 45rem;
        }

    }

    @media screen and (max-width:800px){

        .formations img{
            display: none;
        }
        .paragraphe img{
            display: none;
        }
        .bloc{
            padding: 1.5rem 3rem;
        }
        .paragraphe-flex{
            width: 100%;
            padding: 0 2rem;
        }
        
    }

    @media screen and (max-width:600px){

        .title{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            width: 80%;
            margin: auto;
        }
        .title p{
            margin-top: 2rem;
        }
    }

    @media screen and (max-width:400px){

        .paragraphe-flex{
            width: 100%;
            padding: 0 1rem;
        }
        .bloc{
            padding: 1rem 1rem;
        }
        .confiance{
            width: 90%;
            margin: auto;
            padding: 4rem 0;
        }
    }
</style>