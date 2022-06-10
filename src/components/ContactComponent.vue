<template>
    <main>
        <section class="title">
            <h1>Contactez-nous</h1>
            <img src="@/assets/contact/groupe.png" alt="groupe de personnes">
        </section>
        <section>
            <div class="particles"></div>
            <form action="">
                <div>
                    <input type="text" id="nom" name="nom" placeholder="Nom" required>
                    <input type="text" id="prenom" name="prenom" placeholder="Prénom" required>
                </div>
                <div>
                    <input type="email" id="email" name="email" placeholder="exemple@ifs73.fr" required>
                </div>
                <div>
                    <textarea id="msg" name="msg" placeholder="Message.." required></textarea>
                </div>
                <div>
                    <input type="checkbox" id="terms" name="terms" required>
                    <label for="terms">Lorem ipsum dolor sit RGPD</label>
                </div>
                <div>
                    <input type="submit" name="submit" id="submit" value="Envoyer">
                </div>
            </form>
        </section>
        <h2>Nous trouver</h2>
        <section class="contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.894617611076!2d5.840313715323585!3d45.61276167910305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b0862d14da5b3%3A0xc1d509f20ee81209!2s77%20Chem.%20de%20Cattis%2C%2073290%20La%20Motte-Servolex!5e0!3m2!1sfr!2sfr!4v1654872125107!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div>
                <div>
                    <img src="@/assets/contact/Map.svg" alt="Icon Curseur Carte">
                    <div>
                        <p>77 chemin des Cattis</p>
                        <p>73290 LA MOTTE SERVOLEX</p>
                    </div>
                </div>
                <div>
                    <img src="@/assets/contact/mail.svg" alt="Icon Lettre">
                    <p>contact@ifs73.fr</p>
                </div>
                <div>
                    <img src="@/assets/contact/phone.svg" alt="Icon Telephone">
                    <p>06 17 03 34 30</p>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>

</style>