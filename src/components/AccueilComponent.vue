<template>
    <main>
        <!-- slider -->
        <h1>Formations bureautiques sur mesure</h1>
        <p>Aix-les-Bains • Chambéry • Annecy • Savoie • Haute-Savoie • Isère</p>
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
            <img src="@/assets/accueil/illustationdeux.png" alt="Illustration homme présentation">
            <div class="right">
                <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h3>
                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ipsum dolor sit amet</p>
            </div>
        </section>
        <section class="paragraphe">
            <div class="left">
                <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h3>
                <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ipsum dolor sit amet</p>
            </div>
            <img src="@/assets/accueil/illustationtrois.png" alt="Illustration homme présentation">
        </section>
        <h2>Ils nous font confiances</h2>
        <section>
            <!-- carousel -->
        </section>
    </main>
</template>

<style scoped>
    h1 {
        margin-top: 2rem;
        font-size: 2rem;
    }

    .valeurs{
        margin: 4rem 0;
        display: flex;
        justify-content: center;
        gap: 13rem;
    }

    .valeurs img{
        width: 125px;
        height: auto;
    }

    .formations{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12rem;
        margin: 4rem 0;
    }

    .formations h2{
        font-size: 2rem;
        margin-bottom: 2rem;
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
        align-items: center;
        gap: 18rem;
    }

    .paragraphe div{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        flex-wrap: wrap;
        max-width: 35%;
        background: white;
        border-radius: 24px;
        padding: 2rem 4rem;
        margin: 3rem 0;
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
</style>