<template>
    <header>
        <nav class="nav-principal">
            <router-link class="router" to="/"><img class="nav-principal__logo" src="@/assets/newlogo.svg" alt="logo IFS"></router-link>
            <ul class="nav-principal__ul">
                <li class="nav-principal__ul__li"><router-link class="router" to="/">Accueil</router-link></li>
                <li class="nav-principal__ul__li"><router-link class="router" to="/formations">Formations</router-link></li>
                <li class="nav-principal__ul__li"><router-link class="router" to="/about">A propos</router-link></li>
                <li class="nav-principal__ul__li"><router-link class="router" to="/contact">Contact</router-link></li>
            </ul>
            <div class="nav-principal__burger">
                <input type="checkbox" id="check">
                <label for="check" class="nav-principal__burger__label">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav class="nav-principal__burger__nav-burger">
                    <router-link class="router-burger" to="/">Accueil</router-link>
                    <router-link class="router-burger" to="/formations">Formations</router-link>
                    <router-link class="router-burger" to="/about">A propos</router-link>
                    <router-link class="router-burger" to="/contact">Contact</router-link>
                </nav>
            </div>	
        </nav>
    </header>
</template>

<style lang="scss" scoped>

@import "@/scss/variables";
 
footer{
    display: flex;
    flex-direction: column;
    gap: $gap-4; 
}

.nav-principal{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem 0;

    &__logo{
        width: 80px;
        height: auto;
    }

    &__ul{
        display: none;
        justify-content: center;
        gap: $gap-4;

        &__li{
            list-style: none;
            
            .router{
                text-decoration: none;
                color: black;
                font-size: 1.25rem;
            }

            .router.router-link-active{
                color: $secondary-color;
            }   
        }

        &__li:after{
            display      : block;
            content      : '';
            border-bottom: solid 2px $secondary-color;
            border-radius: 50px;
            transform    : scaleX(0);
            transition   : transform 300ms ease-in-out;
        }

        &__li:hover:after{
            transform: scaleX(1);
        }
    }

    &__burger{

        #check{
            display: none;
        }

        #check:checked ~ .nav-principal__burger__label span:nth-child(1){
            width: 30px;
            transform: rotate(45deg) translateY(7px) translateX(7px);
        }

        #check:checked ~ .nav-principal__burger__label span:nth-child(2){
            width: 0;
        }

        #check:checked ~ .nav-principal__burger__label span:nth-child(3){
            width: 30px;
            transform: rotate(-45deg) translateY(-7px) translateX(7px);
        }

        #check:checked ~ .nav-principal__burger__nav-burger{
            height: 180px;
            margin-top: 6.2rem;
        }

        #check:checked ~ .nav-principal__burger__nav-burger .router-burger{
            padding: 10px;
            opacity: 1;
            transform: scale(1);
        }

        &__label{
            width: 48px;
            height: 48px;
            padding: 10px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            transition: all 0.2s ease-in;
            gap: 7px;
            

            span{
                height: 3px;
                width: 100%;
                border-radius: 50px;
                background-color: rgb(0, 0, 0);
                display: inline-block;
                transition: all 0.5s cubic-bezier(.62,.43,.35,1.47);
            }
        }

        &__nav-burger{
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background-color: white;
            height: 0;
            z-index: 100;

            .router-burger{
                text-decoration: none;
                color: black;
                display: block;
                font-size: 1rem;
                text-align: center;
            }

            .router-burger.router-link-active{
                color: $secondary-color;
            }
        }
    }
}

@supports(-moz-appearance: none){
    .nav-principal__burger__label{
        line-height: 19.5px;
    }

}

@media (min-width:768px){
    .nav-principal{
        &__ul{
            display: flex;
        }
        &__burger{
            display: none;
        }
    }
}
</style>