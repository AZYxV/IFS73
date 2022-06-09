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
        <section>
            <div class="bar"></div>
            <p><router-link class="mentions" to="/mentions-legales">Mentions légales</router-link> - © {{currentYear}} IFS73</p>
            <div class="bar"></div>
        </section>
    </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  }
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Poppins&family=Righteous&display=swap');

    *{
        font-family: 'Poppins', sans-serif;
    }

    footer{
        background: white;
    }

    section{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }

    img{
        width: 275px;
        height: auto;
    }

    h2{
        margin-bottom: 1rem;
        font-family: 'Righteous', cursive;
    }

    li{
        list-style: none;
        text-decoration: none;
        padding: .2rem 0;
    }

    .router{
        text-decoration: none;
        color: black;
    }

    .router:hover{
        color: RGBA(0,0,0,0.70);
    }

    .mentions{
        text-decoration: none;
        color: #7E7E7E;
    }

    .bar{
        width: clamp(10%, 35%, 40%);
        height: 1px;
        background: black;
    }

    p{
        color: #7E7E7E;
    }
</style>