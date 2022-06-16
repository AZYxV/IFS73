
<template>
    <main>
        <div class="div-title">
            <h1>Formations bureautiques sur mesure</h1>
            <p>Aix-les-Bains • Chambéry • Annecy • Savoie • Haute-Savoie • Isère</p>
        </div>
        <section class="section-valeurs">
            <div class="section-valeurs__item">
                <img src="@/assets/accueil/map.svg" alt="logo carte">
                <p>Proximité</p>
            </div>
            <div class="section-valeurs__item">
                <img src="@/assets/accueil/message.svg" alt="logo bulles messages">
                <p>Écoute</p>
            </div>
            <div class="section-valeurs__item">
                <img src="@/assets/accueil/toolset.svg" alt="logo engrenages">
                <p>Sur mesure</p>
            </div>
            <div class="section-valeurs__item">
                <img src="@/assets/accueil/woman.svg" alt="logo visage femme souriante">
                <p>Sourire</p>
            </div>
        </section>
        <section class="section-formations">
            <div class="section-formations__div">
                <h2>Envie de vous former ?</h2>
                <router-link class="section-formations__div__router" to="/formations">Nos formations</router-link>
            </div>
            <img src="@/assets/accueil/illustationun.png" alt="Illustration femme présentation">
        </section>
        <section class="section-paragraphe">
            <div class="section-paragraphe__bloc section-paragraphe__right">
                <img src="@/assets/accueil/illustationdeux.png" alt="Illustration homme présentation">
                <div class="section-paragraphe__bloc_div">
                    <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h3>
                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ipsum dolor sit amet</p>
                </div> 
            </div>
            <div class="section-paragraphe__bloc section-paragraphe__left">
                <div class="section-paragraphe__bloc_div">
                    <h3>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h3>
                    <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ipsum dolor sit amet</p>
                </div>
                <img src="@/assets/accueil/illustationtrois.png" alt="Illustration homme présentation">
            </div>
        </section>
        <h2 class="h2-confiance">Ils nous font confiances</h2>
        <section class="carousel">
            <!-- carousel -->
        </section>
    </main>
</template>

<style lang="scss" scoped>

    @import "@/scss/_variables.scss";

    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: $gap-4;
        padding: 4Rem 1rem;
    }

    .div-title{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
    }

    .section-valeurs{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 12px;
        place-items: center;
        &__item{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width: clamp(8rem, 60%, 100%);
                height: auto;
            }
        }
    }
    
    .section-formations{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
                display: none;
            }
        &__div{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            h2{
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

    .section-paragraphe{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: $gap-4;
        width: 100%;
        flex-wrap: wrap;
        max-width: 100rem;
        &__bloc{
            background: $primary-color;
            padding: 2rem 1rem;
            border-radius: $radius-24;
            box-shadow: $box-shadow-bottom;
            img{
                display: none;
            }
            div{
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
        }
    }

    .h2-confiance{
        font-size: 1.5rem;
    }

    @media (min-width: 768px) {

        .div-title{
            h1{
                font-size: 2rem;
            }
        }
        .section-valeurs{
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr;
        &__item{
            img{
                width: clamp(5rem, 60%, 100%);
                height: auto;
            }
        }
        }

        .section-formations{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4rem;
            &__div{
                h2{
                    font-size: 2rem;
                }
            }
            img{
                display: block;
                width: clamp(5rem, 40%, 100%);
            }
        }

        .section-paragraphe{
            &__bloc{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: $gap-4;
                img{
                    display: block;
                    width: clamp(5rem, 25%, 50%);
                }
            }
        }

        .h2-confiance{
            font-size: 2rem;
        }
    }

    @media (min-width: 1024px) {

        .section-formations{
            gap: 12rem;
        }
        .section-paragraphe{
            padding: 0 5%;
            &__bloc{
            gap: 12rem;
            }
        }

    }

    @media (min-width: 1440px) {
        .section-paragraphe{
            padding: 0 10%;
            &__bloc{
            gap: 12rem;
        }
        }
    }
</style>