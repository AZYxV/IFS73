<template>
    <footer> 
        <section class="section-haut">
            <img class="img-logo" src="@/assets/newlogo.svg" alt="logo ifs73">
            <div class="section-haut__div">
                <h2>Liens</h2>
                <ul class="section-haut__div__ul">
                    <li class="li-hover"><router-link class="router" to="/">Accueil</router-link></li>
                    <li class="li-hover"><router-link class="router" to="/formations">Formations</router-link></li>
                    <li class="li-hover"><router-link class="router" to="/about">A propos</router-link></li>
                    <li class="li-hover"><router-link class="router" to="/contact">Contact</router-link></li>
                </ul>
            </div>
            <div class="section-haut__div">
                <h2>Informations</h2>
                <ul class="section-haut__div__ul">
                    <li><p>IFS</p></li>
                    <li><p>Savoie - Haute Savoie</p></li>
                    <li><p>Amandine Lorenzo</p></li>
                    <li class="li-flex"><img src="@/assets/footer/linkedin.svg" alt=""><a href="https://fr.linkedin.com/in/amandine-lorenzo-597738143?trk=people-guest_people_search-card">Linkedin</a></li>
                </ul>
            </div>
        </section>
        <section class="section-bas">
            <p class="section-bas__p"><router-link class="mentions" to="/mentions-legales">Mentions légales</router-link> 
            - © {{currentYear}} IFS73
            - <router-link class="mentions" to="/CGV">CGV</router-link>
            </p>
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

<style lang="scss" scoped>

@import "@/scss/variables";

footer{
    display: flex;
    flex-direction: column;
    gap: $gap-4;
    padding: 4rem 1rem;
}

.section-haut{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: $gap-4;

    .img-logo{
        width: 100px;
        height: auto;
    }

    &__div{
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 24px;

        &__ul{
           display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 12px; 

            li{
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 12px;
                
                .router,a{
                    text-decoration: none;
                    color: black;
                }

                img{
                    width: 30px;
                    height: auto;
                }
            }
        }
    }
}

.section-bas{
    &__p{
        .mentions{
            text-decoration: none;
            color: black;
        }
    }
}

@media (min-width:768px){
    .section-haut{
        justify-content: space-around;
        flex-direction: row;
        gap: $gap-4; 
        
        .img-logo{
            width: 150px;
        }    
    }
}
</style>