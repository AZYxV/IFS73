
<template> 
    <main>
        <agile :mobileFirst="true" :navButtons="false" :dots="false" :autoplay="true" :speed="1000">
            <div class="slide">
                <div class=" slide__one slide__slider">
                    <h2>Bienvenue sur IFS73</h2>
                    <h3>Vous souhaitez améliorer votre maîtrise des logiciels de bureautique ?</h3>
                    <p>La maitrise de la bureautique renforce votre productivité et votre efficacité professionnelle</p>
                    <router-link class="slide__one__router" to="/formations">Nos formations</router-link>
                </div>
            </div>
            <div class="slide">
                <div class=" slide__two slide__slider">
                    <h2>Suivez-moi</h2>
                    <h3>Retrouvez mon profils sur Linkedin</h3>
                    <a class="slide__two__a" href="https://fr.linkedin.com/in/amandine-lorenzo-597738143?trk=people-guest_people_search-card&original_referer=http%3A%2F%2Flocalhost%3A8080%2F">Mon profil</a>
                </div>
            </div>
        </agile>
        <div class="container">
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
        <h2 class="h2-confiance">Ils nous font confiance</h2>
        <section class="carousel">
            <div class="carousel__slider">
	<div class="carousel__slider__track">
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoCCI.png" alt="Logo CCI" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoIDRAC.png" alt="Logo IDRAC" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoIPAC.png" alt="Logo IPAC" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoM2I.png" alt="Logo M2I" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoOMNES.png" alt="Logo OMNES" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoWEBFORCE3.png" alt="Logo WEBFORCE3" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoCCI.png" alt="Logo CCI" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoIDRAC.png" alt="Logo IDRAC" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoIPAC.png" alt="Logo IPAC" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoM2I.png" alt="Logo M2I" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoOMNES.png" alt="Logo OMNES" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoWEBFORCE3.png" alt="Logo WEBFORCE3" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoCCI.png" alt="Logo CCI" />
                    </div>
                    <div class="carousel__slider__track__slide">
                        <img src="@/assets/accueil/LogoIDRAC.png" alt="Logo IDRAC" />
                    </div>
	</div>
            </div>
        </section>
        </div>
    </main>
</template>

<script>
    import { VueAgile } from 'vue-agile';


    export default {
        components: {
        agile: VueAgile,
        }
    }
</script>

<style lang="scss" scoped>

@import "@/scss/_variables.scss";

main{
    padding: 0;
}

.container{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: $gap-4;
    padding: 4rem 1rem;

}

    .agile{
    width: 100%;
}
    .slide{
        &__slider{
            height: 20vh;
        }
        &__one{
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 12px;
            &::before{
                content: "";
                background-image: url('@/assets/accueil/slider1.jpg');
                position: absolute;
                background-position: center;
                background-size: cover;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                z-index: -1;
                opacity: .5;
            }
            h2{
                font-size: 1.5rem;
                color: black;
            }
            h3{
                display: none;
            }
            p{
                display: none;
            }
            &__router{
                    font-size: 1rem;
                    color: $primary-color;
                    background: $secondary-color;
                    text-decoration: none;
                    padding: 0.5rem .5rem;
                    border-radius: $radius-12;
                    border: 1px solid $secondary-color;
                    transition: all 0.2s ease-in-out;
                    &:hover{
                        background: transparent;
                        color: $secondary-color;
                    }
                }
        }
    &__two{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
        &::before{
            content: "";
            background-image: url('@/assets/accueil/slider2.jpg');
            position: absolute;
            background-position: center;
            background-size: cover;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -1;
            opacity: .5;
        }
        h2{
            font-size: 1.5rem;
            color: black;
        }
        h3{
            display: none;
        }
        p{
            display: none;
        }
        &__a{
            font-size: 1rem;
            color: $primary-color;
            background: $secondary-color;
            text-decoration: none;
            padding: 0.5rem .5rem;
            border-radius: $radius-12;
            border: 1px solid $secondary-color;
            transition: all 0.2s ease-in-out;
            &:hover{
                background: transparent;
                color: $secondary-color;
            }
        }
    }
}

    .div-title{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
            font-size: 1.5rem;
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

    @mixin white-gradient {
	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 7))}
}


// Styling
.carousel__slider {
	background: white;
    border-radius: $radius-24;
	box-shadow: 0 10px 20px -5px rgba(0, 0, 0, .125);
	height: 80px;
	margin: auto;
	overflow:hidden;
	position: relative;
	width: 90vw;
	
	&::before,
	&::after {
        @include white-gradient;
		content: "";
		height: 150px;
		position: absolute;
		width: 50px;
		z-index: 2;
	}
	
	&::after {
		right: 0;
		top: 0;
		transform: rotateZ(180deg);
	}

	&::before {
		left: 0;
		top: 0;
	}
	
	&__track {
		animation: scroll $animationSpeed linear infinite;
		display: flex;
        margin: 10px;
		width: calc(150px * 14);
        &__slide {
		height: 100px;
		width: 150px;
        img{
        height: 60px;
		width: 150px;
        }
	}
	}
}

    @media (min-width: 375px) {
        .slide{
            &__slider{
                height: 22.5vh;
            }
        }
    }

    @media (min-width: 425px) {
        .slide{
            &__slider{
                height: 25vh;
            }
        }
    }

    @media (min-width: 768px) {

        .slide{
            &__slider{
                height: 45vh;
            }
            &__one{
                h2{
                    font-size: 3rem;
                }
                h3,p{
                    display: block;
                }
            }
            &__two{
                h2{
                    font-size: 3rem;
                }
                h3,p{
                    display: block;
                }
            }
            
        }

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

        .carousel__slider {
	height: 100px;
	width: 90vw;
	
	&::before,
	&::after {
		height: 100px;
		width: 100px;
	}
	
	&__track {
        margin: 10px;
		width: calc(200px * 14);
        &__slide {
		height: 100px;
		width: 200px;
        img{
        height: 80px;
		width: 200px;
        }
	}
	}
}
    }

    @media (min-width: 1024px) {

        .slide{
            &__slider{
                height: 55vh;
            }
            &__one{
                h2{
                    font-size: 4rem;
                }
            }
            &__two{
                h2{
                    font-size: 4rem;
                }
            }
        }


        .section-formations{
            gap: 12rem;
        }
        .section-paragraphe{
            padding: 0 5%;
            &__bloc{
            gap: 8rem;
            }
        }

        .carousel__slider {
	width: 800px;
}

    }

    @media (min-width: 1440px) {

        .slide{
            &__slider{
                height: 65vh;
            }
        }
        .section-paragraphe{
            padding: 0 10%;
        }

        .carousel__slider {
	height: 150px;
	width: 1000px;
	
	&::before,
	&::after {
		height: 150px;
		width: 200px;
	}
	
	&__track {
        margin: 25px;
		width: calc(250px * 14);
        &__slide {
		height: 100px;
		width: 250px;
        img{
        height: 100px;
		width: 250px;
        }
	}
	}
}
        
    }
</style>