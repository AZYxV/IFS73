<template>
    <main>
        <section class="title">
            <h1>Contactez-nous</h1>
            <img src="@/assets/contact/groupe.png" alt="groupe de personnes">
        </section>
        <section class="section-form">
            <form action="">
                <div class="particles">
                    <img src="@/assets/contact/particles.png" alt="#">
                    <div class="form">
                        <div class="name">
                            <input type="text" id="nom" name="nom" placeholder="Nom" required>
                            <input type="text" id="prenom" name="prenom" placeholder="Prénom" required>
                        </div>
                        <div>
                            <input type="email" id="email" name="email" placeholder="exemple@ifs73.fr" required>
                        </div>
                        <div>
                            <textarea id="msg" name="msg" placeholder="Message.." required></textarea>
                        </div>
                        <div class="rgpd">
                            <input type="checkbox" id="terms" name="terms" required>
                            <label for="terms">J’autorise ce site à conserver mes données transmises via ce formulaire</label>
                        </div>
                        <div>
                            <input type="submit" name="submit" id="submit" value="Envoyer">
                        </div>
                    </div>   
                </div> 
            </form>
        </section>
        <h2>Nous trouver</h2>
        <section class="contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.894617611076!2d5.840313715323585!3d45.61276167910305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b0862d14da5b3%3A0xc1d509f20ee81209!2s77%20Chem.%20de%20Cattis%2C%2073290%20La%20Motte-Servolex!5e0!3m2!1sfr!2sfr!4v1654872125107!5m2!1sfr!2sfr" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="informations">
                <div class="infos">
                    <img src="@/assets/contact/Map.svg" alt="Icon Curseur Carte">
                    <div>
                        <p>77 chemin des Cattis</p>
                        <p>73290 LA MOTTE SERVOLEX</p>
                    </div>
                </div>
                <div class="infos">
                    <img src="@/assets/contact/mail.svg" alt="Icon Lettre">
                    <p>contact@ifs73.fr</p>
                </div>
                <div class="infos">
                    <img src="@/assets/contact/phone.svg" alt="Icon Telephone">
                    <p>06 17 03 34 30</p>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 22rem;
        margin: 4rem 0;
    }

    .title h1{
        font-size: 2rem;
    }

    .title img{
        width: 300px;
        height: auto;
    }

    h2{
        font-size: 2rem;
        margin: 4rem 0;
    }

    form{
        display: flex;
        justify-content: center;
    }

    .form{
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: white;
        border-radius: 24px;
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.10);
        width: 40rem;
        padding: 4rem 2rem;
        position: absolute;
    }

    .particles{
        display: flex;
        justify-content: center;
        position: relative;
    }

    .particles img{
        width: 1000px;
        height: auto;
    }

    input[type="text"]{
        text-align: left;
        padding: 0.5rem;
        border: 2px solid rgb(70, 70, 70);
        border-radius: 12px;
        margin: 0 1rem;
        width: 15rem;
    }

    input[type="email"]{
        text-align: left;
        padding: 0.5rem;
        border: 2px solid rgb(70, 70, 70);
        border-radius: 12px;
        width: 32rem;
        margin: 2rem 0;
    }

    textarea{
        text-align: left;
        padding: 0.5rem;
        border: 2px solid rgb(70, 70, 70);
        border-radius: 12px;
        width: 32rem;
        height: 15rem;
        resize: none;
    }

    .rgpd{
        margin: 2rem 0
    }

    input[type="text"]:focus, input[type="email"]:focus, textarea:focus{
        outline: none;
        border: 2px solid #E2003F;
    }

    input[type="checkbox"]{
        border: 2px solid rgb(70, 70, 70);
        margin: 0 1rem;

    }

    input[type="checkbox"]:checked{
        accent-color: #e2003f;
    }

    label{
        width: 20%;
    }

    input[type="submit"]{
        text-align: center;
        padding: 0.5rem;
        border: 2px solid #E2003F;
        border-radius: 12px;
        width: 15rem;
        background-color: #E2003F;
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: .2s;
    }

    input[type="submit"]:hover{
        background-color: white;
        color: #E2003F;
    }

    .contact{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10rem;
        padding-bottom: 4rem;
    }

    .contact iframe{
        border-radius: 24px;
        width: 375px;
        height: 350px;
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.10);
    }

    .informations{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background-color: white;
        border-radius: 24px;
        box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.10);
        padding: 2rem;
    }

    .infos{
        display: flex;
        align-items: center;
        justify-content: left;
        align-items: center;
        gap: 2rem;
    }

    .infos img{
        width: 75px;
        height: auto;
    }

    .infos p{
        text-align: left;
    }

    @media screen and (max-width:1200px){

        .title img{
            width: 200px;
            height: auto;
        }
        h2{
            margin: 10rem 0 4rem 0;
        }
        .particles img{
            width: 800px;
            height: auto;
        }
        .form{
            width: 30rem;
        }
        input[type="text"]{
            width: 10rem;
        }
        input[type="email"], textarea{
            width: 22rem;
        }
    }

    @media screen and (max-width:1000px){

        .contact{
            flex-direction: column;
            gap: 4rem;
        }
    }

    @media screen and (max-width:900px){

        .title img{
            display: none;
        }
        h2{
            margin: 4rem 0;
        }
        .particles img{
            display: none;
        }
        .form{
            position: relative;
        }
    }

    @media screen and (max-width:600px){

        .form{
        width: 22rem;
        margin: auto;
        padding: 2rem;
        }
        input[type="text"], input[type="email"], textarea{
            width: 16rem;
            margin: 1rem 0;
        }
        .rgpd{
            margin: 1rem 0;
        }
        input[type="submit"]{
            margin-top: 1rem;
        }
        .contact iframe{
            width: 22rem;
            height: auto;
        }
        .informations{
            width: 22rem;
            height: auto;
        }
        .infos img{
            width: 40px;
        }
        
    }

    @media screen and (max-width:360px){

        input[type="text"], input[type="email"], textarea{
            width: 12rem;
        }
        input[type="submit"]{
            width: 10rem;
        }
        .form{
            width: 16rem;
        }
        .contact iframe{
            width: 16rem;
            height: auto;
        }
        .informations{
            width: 16rem;
            height: auto;
        }
        
    }
</style>