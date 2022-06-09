<template>
    <footer>
        <section>
            <img src="@/assets/logo.svg" alt="logo ifs73">
            <div>
                <h2>Liens</h2>
                <ul>
                    <li><router-link to="/">Accueil</router-link></li>
                    <li><router-link to="/formations">Formations</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li><router-link to="/about">A propos</router-link></li>
                </ul>
            </div>
            <div>
                <h2>Informations</h2>
                <ul>
                    <li><router-link to="/">Accueil</router-link></li>
                    <li><router-link to="/formations">Formations</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li><router-link to="/about">A propos</router-link></li>
                </ul>
            </div>
        </section>
    </footer>
</template>

<style scoped>
    footer{
        background: white;
    }

    section{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    li{
        list-style: none;
        text-decoration: none;
    }

    li.router-link{
        text-decoration: none;
        color: black;
    }
</style>