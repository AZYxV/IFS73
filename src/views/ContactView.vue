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
            <form  ref="form" @submit.prevent="submit" class="section-form__form">
                <div class="section-form__form__div">
                    <div id="success"></div>
                    <div class="section-form__form__div__name">
                        <input v-model="formData.firstName" type="text" id="input" name="from_firstname" placeholder="Prénom*">
                        <input v-model="formData.lastName" type="text" id="nom" name="from_lastname" placeholder="Nom*">
                    </div>
                    <div>
                        <input v-model="formData.email" type="email" id="email" name="from_email" placeholder="Email*">
                    </div>
                    <div>
                        <textarea v-model="formData.message" id="msg" name="from_message" placeholder="Message*"></textarea>
                    </div>
                    <div class="section-form__form__div__rgpd">
                        <input v-model="formData.rgpd" type="checkbox" id="terms" name="terms">
                        <label for="terms">J’autorise ce site à conserver mes données transmises via ce formulaire</label>
                    </div>
                    <div id="recaptcha">
                        <vue-recaptcha @verify="onVerify($event)" @expired="onExpire()" @error="onError()" sitekey="6LdG8bYgAAAAALNe96c6g7wU-H7JhTs47OIa26sL" size="normal">
                        </vue-recaptcha>
                    </div>
                    <div>
                        <input type="submit" name="send" id="submit" value="Envoyer">
                        <input type="reset" name="reset" id="reset" value="Annuler">
                    </div>
                    <div class="section-form__form__div_error">
                        <span v-for="error in v$.firstName.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </span>
                        <span v-for="error in v$.lastName.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </span>
                        <span v-for="error in v$.email.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </span>
                        <span v-for="error in v$.message.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </span>
                        <span v-for="error in v$.rgpd.$errors" :key="error.$uid">
                            {{ error.$message }}
                        </span>
                    </div>
                </div>
            </form>
        </section>
        <h2>Nous trouver</h2>
        <section class="section-contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11170.412255209016!2d5.946843942670257!3d45.57842028460409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ba8b62add3771%3A0xcf4b022afedda8a4!2s45%20Pl.%20du%20Commerce%2C%2073230%20Saint-Alban-Leysse!5e0!3m2!1sfr!2sfr!4v1655390312888!5m2!1sfr!2sfr" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div class="section-contact__div">
                <div class="section-contact__div__infos">
                    <img src="@/assets/contact/Map.svg" alt="Icon Curseur Carte">
                    <div>
                        <p>45, place du commerce</p>
                        <p>73230 SAINT ALBAN LEYSSE</p>
                    </div>
                </div>
                <div class="section-contact__div__infos">
                    <img src="@/assets/contact/mail.svg" alt="Icon Lettre">
                    <p>a.lorenzo@ifs73.fr</p>
                </div>
                <div class="section-contact__div__infos">
                    <img src="@/assets/contact/linkedin.svg" alt="Icon Réseau Social Linkedin">
                    <a href="https://fr.linkedin.com/in/amandine-lorenzo-597738143?trk=people-guest_people_search-card&original_referer=http%3A%2F%2Flocalhost%3A8080%2F">Amandine Lorenzo</a>
                </div>
                <div class="section-contact__div__infos">
                    <img src="@/assets/contact/phone.svg" alt="Icon Telephone">
                    <p>06 17 03 34 30</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { reactive } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, helpers, minLength, sameAs } from '@vuelidate/validators'
import { VueRecaptcha } from 'vue-recaptcha'
import emailjs from 'emailjs-com'
import {ref} from 'vue'

export default {
  name: "recaptchaTest",
  components: { VueRecaptcha },
  methods: {

    // Method permettant la verification avec vuelidate, l'envoi du mail avec emailjs et le reCaptcha
    // google de la librairy vue-recaptcha

    async submit() {
        const form = ref(null);

    const formData = reactive({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      rgpd: ''
    })

    const rules = {
      firstName: { required: helpers.withMessage('❌ Veuillez compléter le champ "Prénom"', required), minLength: helpers.withMessage(({$params}) => `❌ Votre prénom doit contenir ${$params.min} caractères minimum`,minLength(2)) },
      lastName: { required: helpers.withMessage('❌ Veuillez compléter le champ "Nom', required), minLength: helpers.withMessage(({$params}) => `❌ Votre nom doit contenir ${$params.min} caractères minimum`,minLength(2)) },
      email: { required: helpers.withMessage('❌ Veuillez renseigner votre email', required), email: helpers.withMessage('❌ Adresse email non valide', email) },
      message: { required: helpers.withMessage('❌ Veuillez rédiger votre texte', required) },
      rgpd: { sameAs: helpers.withMessage('❌ Veuillez cocher la case des RGPD', sameAs(true)) }
    }

    const v$ = useVuelidate(rules, formData)
        const result = await this.v$.$validate();
        if ((result) && (this.recaptcha)) {
            console.log("yes vuelidate")
            document.getElementById("submit").disabled = true;
            emailjs.sendForm('service_ls7v2kh', 'template_lpeadhv', this.$refs.form, 'Ss8zo6HnbADbIn_47')
            .then(() => {
                console.log("yes")
                document.getElementById("success").innerHTML = "<p>&#9989; Votre message a été envoyé avec succès !<br/>Vous serez recontacté(e) prochainement par email</p>"
                setTimeout(function () {
                    window.location.reload(true);
                }, 2000);
            });
        }else{
            console.log("error");
        }
    return (formData, form, rules, v$);
    },

    // fait partie de la library vue-captcha, permet d recevoir une réponse 
    // lorsque le reCaptcha est rempli

    onVerify(response) {
      this.recaptcha = response;
      console.log('Verify: ' + this.recaptcha);
    }
  },

    // Le setup est toujours présent, la method submit() ne fonctionne pas sans, je n'ai pas encore trouvé pourquoi

  setup () {

    const form = ref(null);

    const formData = reactive({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      rgpd: ''
    })

    const rules = {
      firstName: { required: helpers.withMessage('❌ Veuillez compléter le champ "Prénom"', required), minLength: helpers.withMessage(({$params}) => `❌ Votre prénom doit contenir ${$params.min} caractères minimum`,minLength(2)) },
      lastName: { required: helpers.withMessage('❌ Veuillez compléter le champ "Nom', required), minLength: helpers.withMessage(({$params}) => `❌ Votre nom doit contenir ${$params.min} caractères minimum`,minLength(2)) },
      email: { required: helpers.withMessage('❌ Veuillez renseigner votre email', required), email: helpers.withMessage('❌ Adresse email non valide', email) },
      message: { required: helpers.withMessage('❌ Veuillez rédiger votre message', required) },
      rgpd: { sameAs: helpers.withMessage('❌ Veuillez cocher la case des RGPD', sameAs(true)) }
    }

    const submitForm = async () => {
        const result = await v$.value.$validate();
        if((result) && (this.formData.recaptcha = true)) {
            emailjs.sendForm('service_zwezsm9', 'template_lpeadhv', form.value, 'Ss8zo6HnbADbIn_47')
            .then(() => {
                setTimeout(function () {
                    window.location.reload(true);

                }, 2000);
                document.getElementById("success").innerHTML = "<p>&#9989; Votre message a été envoyé avec succès !<br/>Vous serez recontacté(e) prochainement par email</p>";
            });
        } else{
            console.log('none');
        }
    };
    

    const v$ = useVuelidate(rules, formData);

    return { formData, v$, submitForm, form}
  }
}

</script>

<style lang="scss" scoped>

    @import "@/scss/_variables.scss";

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
            span{
                color: #E2003F;
                font-size: 1rem;
            }
            &__div{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                #success{
                    color: rgb(134, 223, 0);
                }
                &_error{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 4px;
                }
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

                input[type="submit"],input[type="reset"]{
                    font-size: 1rem;
                    color: $primary-color;
                    background: $secondary-color;
                    margin: 1rem 1rem;
                    padding: 0.5rem 1rem;
                    border-radius: $radius-12;
                    border: 1px solid $secondary-color;
                    transition: all 0.2s ease-in-out;
                    &:hover{
                        background: $primary-color;
                        color: $secondary-color;
                        cursor: pointer;
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
                #recaptcha{
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }

    h2{
        font-size: 1.5rem;
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

                a{
                    text-decoration: none;
                    color: black;
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

        h2{
            font-size: 2rem;
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