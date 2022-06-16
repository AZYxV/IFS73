<template>
    <main>
        <section class="section-title">
            <h1>Contactez-nous</h1>
            <img src="@/assets/contact/groupe.png" alt="groupe de personnes">
        </section>
        <section class="section-form">
            <div class="section-form__particles">
                <img src="@/assets/contact/particles.png" alt="#">
            </div>
            <form class="section-form__form">
                <div class="section-form__form__div">
                    <div class="section-form__form__div__name">
                        <input type="text" id="nom" name="nom" placeholder="Nom" required>
                        <input type="text" id="prenom" name="prenom" placeholder="Prénom" required>
                    </div>
                    <div>
                        <input type="email" id="email" name="email" placeholder="exemple@ifs73.fr" required>
                    </div>
                    <div>
                        <textarea id="msg" name="msg" placeholder="Message.." required></textarea>
                    </div>
                    <div class="section-form__form__div__rgpd">
                        <input type="checkbox" id="terms" name="terms" required>
                        <label for="terms">J’autorise ce site à conserver mes données transmises via ce formulaire</label>
                    </div>
                    <div>
                        <input type="submit" name="submit" id="submit" value="Envoyer">
                    </div>
                </div>   
            </form>
        </section>
        <h2>Nous trouver</h2>
        <section class="section-contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.894617611076!2d5.840313715323585!3d45.61276167910305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b0862d14da5b3%3A0xc1d509f20ee81209!2s77%20Chem.%20de%20Cattis%2C%2073290%20La%20Motte-Servolex!5e0!3m2!1sfr!2sfr!4v1654872125107!5m2!1sfr!2sfr" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="section-contact__div">
                <div class="section-contact__div__infos">
                    <img src="@/assets/contact/Map.svg" alt="Icon Curseur Carte">
                    <div>
                        <p>77 chemin des Cattis</p>
                        <p>73290 LA MOTTE SERVOLEX</p>
                    </div>
                </div>
                <div class="section-contact__div__infos">
                    <img src="@/assets/contact/mail.svg" alt="Icon Lettre">
                    <p>contact@ifs73.fr</p>
                </div>
                <div class="section-contact__div__infos">
                    <img src="@/assets/contact/linkedin.svg" alt="Icon Réseau Social Linkedin">
                    <p>Amandine LORENZO</p>
                </div>
                <div class="section-contact__div__infos">
                    <img src="@/assets/contact/phone.svg" alt="Icon Telephone">
                    <p>06 17 03 34 30</p>
                </div>
            </div>
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

    .section-title{
        display: flex;
        justify-content: center;
        align-items: center;
        h1{
            font-size: 1.5rem;
        }
        img{
            display: none;
        }
    }

    .section-form{
        &__particles{
            display: none;
        }
        &__form{
            background-color: $primary-color;
            box-shadow: $box-shadow-bottom;
            border-radius: $radius-24;
            padding: 2rem 1rem;
            &__div{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                input[type="text"],input[type="email"],textarea{
                    border: 2px solid lightgrey;
                    border-radius: $radius-12;
                    padding: .5rem 1rem;
                    width: 15rem;
                    text-align: left;
                    &:focus{
                        outline: none;
                        border: 2px solid #E2003F;
                    }
                }

                textarea{
                    height: 10rem;
                    resize: none;
                }

                input[type="submit"]{
                    font-size: 1rem;
                    color: $primary-color;
                    background: $secondary-color;
                    padding: 0.5rem 1rem;
                    border-radius: $radius-12;
                    border: 1px solid $secondary-color;
                    transition: all 0.2s ease-in-out;
                    &:hover{
                        background: $primary-color;
                        color: $secondary-color;
                    }
                }

                &__name{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                }

                &__rgpd{
                    input[type="checkbox"]{
                        margin: 0 4px;
                        &:checked{
                            accent-color: #e2003f;
                        }
                    }
                }
            }
        }
    }

    .section-contact{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 4rem;
        iframe{
            border-radius: $radius-24;
            width: 100%;
            height: 15rem;
        }
        &__div{
            display: flex;
            flex-direction: column;
            background: $primary-color;
            border-radius: $radius-24;
            padding: 2rem 1rem;
            gap: 1rem;
            &__infos{
                display: flex;
                align-items: center;
                gap: 1rem;
                img{
                    width: clamp(3rem, 10%, 100%);
                    height: auto;
                }
                p{
                    text-align: left;
                }
            }
        }
    }

    @media (min-width: 425px){

        .section-form{
            &__form{
                &__div{
                    input[type="text"],input[type="email"],textarea{
                        width: 80%;
                    }

                    textarea{
                        height: 15rem;
                    }
                }
            }
        }
    }

    @media (min-width: 768px){

        .section-title{
            gap: 4rem;
            h1{
                font-size: 2rem;
            }
            img{
                display: block;
                width: 15rem;
                height: auto;
            }
        }

        .section-form{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &__particles{
                display: block;
                position: absolute;
                img{
                    width: 48rem;
                    height: auto;
                }
            }
            &__form{
                z-index: 100;
                img{
                display: none;
                }
                &__div{
                    gap: 1rem;
                    input[type="text"],input[type="email"],textarea{
                        width: 31rem;
                    }

                    input[type="text"]{
                        width: 15rem;
                    }

                    textarea{
                        height: 20rem;
                    }

                    &__name{
                        flex-direction: row;

                        gap: 1rem;
                    }
                }
            }   
        }

        .section-contact{
            iframe{
                width: 30rem;
                height: 30rem;
            }
            &__div{
                display: flex;
                flex-direction: column;
                padding: 2rem 3.5rem;
                gap: 1rem;
                &__infos{
                    gap: 5rem;
                    img{
                        width: 4.8rem;
                    }
                }
            }
        }
    }

    @media (min-width: 1024px){

        .section-title{
            gap: 12rem;
            img{
                display: block;
                width: 20rem;
                height: auto;
            }
        }
        .section-form{
            &__particles{
                img{
                    width: 55rem;
                }
            }
        }

        .section-contact{
            flex-direction: row;
            iframe{
                width: 30rem;
                height: 26rem;
            }
        }
    }

    @media (min-width: 1440px){
        .section-title{
            gap: 24rem;
        }
    }

</style>