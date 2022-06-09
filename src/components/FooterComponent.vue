<template>
    <footer>
        <section>
            <img src="@/assets/logo.svg" alt="logo ifs73">
            <div>
                <h2>Liens</h2>
                <ul>
                    <li><router-link class="router" to="/">Accueil</router-link></li>
                    <li><router-link class="router" to="/formations">Formations</router-link></li>
                    <li><router-link class="router" to="/contact">Contact</router-link></li>
                    <li><router-link class="router" to="/about">A propos</router-link></li>
                </ul>
            </div>
            <div>
                <h2>Informations</h2>
                <ul>
                    <li><router-link class="router" to="/">Accueil</router-link></li>
                    <li><router-link class="router" to="/formations">Formations</router-link></li>
                    <li><router-link class="router" to="/contact">Contact</router-link></li>
                    <li><router-link class="router" to="/about">A propos</router-link></li>
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

    .router{
        text-decoration: none;
    }
</style>