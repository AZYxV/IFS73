<template>
    <footer>
        <section class="section-haut">
            <img class="img-logo" src="@/assets/logo.svg" alt="logo ifs73">
            <div>
                <h2>Liens</h2>
                <ul class="ul-nav">
                    <li><router-link class="router-footer" to="/">Accueil</router-link></li>
                    <li><router-link class="router-footer" to="/formations">Formations</router-link></li>
                    <li><router-link class="router-footer" to="/contact">Contact</router-link></li>
                    <li><router-link class="router-footer" to="/about">A propos</router-link></li>
                </ul>
            </div>
            <div>
                <h2>Informations</h2>
                <ul>
                    <li><p>IFS</p></li>
                    <li><p>Savoie - Haute Savoie</p></li>
                    <li><p>Amandine Lorenzo</p></li>
                    <li class="li-flex"><img class="img-link" src="@/assets/footer/linkedin.svg" alt=""><p>Linkedin</p></li>
                </ul>
            </div>
        </section>
        <section class="section-bas">
            <div class="div-bar"></div>
            <p class="p-router"><router-link class="mentions" to="/mentions-legales">Mentions légales</router-link> - © {{currentYear}} IFS73</p>
            <div class="div-bar"></div>
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

    footer{
        background: white;
        font-family: 'Poppins', sans-serif;
        padding: 2rem 0 2rem 0;
    }

    .section-haut{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .img-logo{
        width: 200px;
        height: auto;
    }

    h2{
        font-family: 'Righteous', cursive;
        margin-bottom: 1rem;
    }

    li{
        list-style: none;
        padding: .2rem 0;
    }

    .router-footer{
        text-decoration: none;
        color: black;
    }

    .router:hover{
        color: RGBA(0,0,0,0.70);
    }

    .li-flex{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
    }

    .img-link{
        width: 25px;
        height: auto;
    }

    .section-bas{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2rem;
    }

    .mentions{
        text-decoration: none;
        color: #7E7E7E;
    }

    .div-bar{
        width: 500px;
        border-radius: 50px;
        height: 1px;
        background: #7E7E7E;
    }

    .p-router{
        color: #7E7E7E;
    }

    @media screen and (max-width:1300px){
        .div-bar{
            width: 400px;
        }
    }

     @media screen and (max-width:1100px){
        .div-bar{
            width: 300px;
        }
    }

    @media screen and (max-width:900px){
        .div-bar{
            width: 200px;
        }
    }

    @media screen and (max-width:700px){
        .div-bar{
            width: 100px;
        }
    }

    @media screen and (max-width:550px){
       .section-haut{
            flex-direction: column;
        }

        .ul-nav{
            margin-bottom: 2rem;
        }

        .img-logo{
            width: 150px;
        }

        .div-bar{
            width: 50px;
        }
    }
</style>