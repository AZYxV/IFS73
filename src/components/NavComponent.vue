<template>
    <header>
        <nav class="nav-principal">
            <img class="logo-nav" src="@/assets/logo.svg" alt="logo ifs">
            <ul class="ul-nav">
                <li class="li-nav"><router-link class="router-nav" to="/">Accueil</router-link></li>
                <li class="li-nav"><router-link class="router-nav" to="/formations">Formations</router-link></li>
                <li class="li-nav"><router-link class="router-nav" to="/about">A propos</router-link></li>
                <li class="li-nav"><router-link class="router-nav" to="/contact">Contact</router-link></li>
            </ul>
            <div class="menu-burger">
                <input type="checkbox" id="check">
                <label for="check" class="label-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav class="nav-burger">
                    <router-link class="router-burger" to="/">Accueil</router-link>
                    <router-link class="router-burger" to="/formations">Formations</router-link>
                    <router-link class="router-burger" to="/about">A propos</router-link>
                    <router-link class="router-burger" to="/contact">Contact</router-link>
                </nav>
            </div>	
        </nav>
    </header>
</template>

<style scoped>
 
 /* ===================================================================================
                                  NAVBAR
====================================================================================== */

/* --------------------------------TAILLE ELEMENTS NAV-------------------------------- */

header{
  font-family: 'poppins';
}
.nav-principal{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;
}

.logo-nav{
    width: 100px;
    width: 100px;
}

.ul-nav{
    display: flex;
    justify-content: center;
    gap: 6rem;
}

.li-nav{
    list-style: none;
}

.router-nav{
    text-decoration: none;
    color: black; 
    font-size: 1.25rem;
}

/* --------------------------------MENU BURGER-------------------------------------- */
.menu-burger{
    display: none;
}

#check{
    display: none;
}

.label-btn{
    width: 48px;
    height: 48px;
    padding: 10px;
    display: inline-block;
    cursor: pointer;
    transition: all 0.2s ease-in;
    line-height: 7.5px;
}

.label-btn span{
    height: 3px;
    width: 100%;
    border-radius: 50px;
    background-color: rgb(0, 0, 0);
    display: inline-block;
    transition: all 0.5s cubic-bezier(.62,.43,.35,1.47);
}

.nav-burger{
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    height: 0;
}

.nav-burger .router-burger{
    text-decoration: none;
    color: black;
    display: block;
    font-size: 1rem;
    text-align: center;
}

/* ---------------------------------HOVER NAV------------------------------------ */

.li-nav:after {
    display      : block;
    content      : '';
    border-bottom: solid 2px #E2003F;
    border-radius: 50px;
    transform    : scaleX(0);
    transition   : transform 300ms ease-in-out;
}

.li-nav:hover:after {
    transform: scaleX(1);
}

.router-nav.router-link-active{
    color: #E2003F;
}

.router-burger.router-link-active{
    color: #E2003F;
}

/* -------------------------MENU BURGER CHECKED------------------------------------ */

#check:checked ~ .label-btn span:nth-child(1){
    width: 30px;
    transform: rotate(45deg) translateY(6px) translateX(6px);
}

#check:checked ~ .label-btn span:nth-child(2){
    width: 0;
}

#check:checked ~ .label-btn span:nth-child(3){
    width: 30px;
    transform: rotate(-45deg) translateY(-7px) translateX(7px);
}

#check:checked ~ .nav-burger{
    height: 180px;
    margin-top: 6.2rem;
}

#check:checked ~ .nav-burger .router-burger{
    padding: 10px;
    opacity: 1;
    transform: scale(1);
}

/* ---------------------------------MEDIA QUERIES------------------------------------ */

@media screen and (max-width:900px){

    .ul-nav{
        display: none;
    }

    .menu-burger{
        display: block;
    }
 }

/* ===================================================================================
                              FIN NAVBAR
====================================================================================== */
</style>