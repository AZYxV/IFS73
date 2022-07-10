<template>
    <main>
        <section class="section">
            <img src="@/assets/notfound/404.png" alt="Illustration Page Introuvable">
            <div class="section__text">
                <h1>Oupss..</h1>
                <p>Il semblerait que vous vous soyez égaré !</p>
                <router-link class="section__text__router" to="/">Accueil</router-link>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>

@import "@/scss/_variables.scss";

.section{
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    
    img{
        display: none;
    }
    
    &__text{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        
        h1{
            font-size: 1.5rem;
        }
        
        &__router{
            font-size: 1rem;
            color: $primary-color;
            background: $secondary-color;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: $radius-12;
            border: 1px solid $secondary-color;
            transition: all 0.2s ease-in-out;
            &:hover{
                background: $primary-color;
                color: $secondary-color;
            }
        }
    }
}

@media (min-width: 1024px){
    
    .section{
    flex-direction: row;
    
        img{
            display: block;
            width: clamp(5rem, 40%, 100%);
            height: auto;
        }
        
        &__text{
            
            h1{
                font-size: 2rem;
            }
        }
    }
}
</style>