<template>
  <v-container fluid>
    <v-calendar>
      <div class="text-center text-h2 mb-5">Agenda</div>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="text-center">
              Lundi
            </v-card-title>
            <v-card nuxt to="/" class="ma-2" v-for="item in 6">
              <v-img src="https://gaak.fr/wp-content/uploads/2022/07/995884.png" class="imgAgenda rounded-lg">
              <v-row class="d-flex fill-height align-end text-center">
                <v-col class="pb-0">
                  <div class="text-subtitle2">Episode 2</div>
                  <div class="text-overline">Kaguya</div>
                </v-col>
              </v-row>
            </v-img>
            </v-card>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title class="text-center">
              Mardi
            </v-card-title>
            <v-card nuxt to="/" class="ma-2" v-for="item in 6">
              <v-img src="https://gaak.fr/wp-content/uploads/2022/07/995884.png" class="imgAgenda rounded-lg">
              <v-row class="d-flex fill-height align-end text-center">
                <v-col class="pb-0">
                  <div class="text-subtitle2">Episode 2</div>
                  <div class="text-overline">Kaguya</div>
                </v-col>
              </v-row>
            </v-img>
            </v-card>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title class="text-center">
              Mercredi
            </v-card-title>
            <v-card nuxt to="/" class="ma-2" v-for="item in 6">
              <v-img src="https://gaak.fr/wp-content/uploads/2022/07/995884.png" class="imgAgenda rounded-lg">
              <v-row class="d-flex fill-height align-end text-center">
                <v-col class="pb-0">
                  <div class="text-subtitle2">Episode 2</div>
                  <div class="text-overline">Kaguya</div>
                </v-col>
              </v-row>
            </v-img>
            </v-card>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title class="text-center">
              Jeudi
            </v-card-title>
            <v-card nuxt to="/" class="ma-2" v-for="item in 6">
              <v-img src="https://gaak.fr/wp-content/uploads/2022/07/995884.png" class="imgAgenda rounded-lg">
              <v-row class="d-flex fill-height align-end text-center">
                <v-col class="pb-0">
                  <div class="text-subtitle2">Episode 2</div>
                  <div class="text-overline">Kaguya</div>
                </v-col>
              </v-row>
            </v-img>
            </v-card>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title class="text-center">
              Vendredi
            </v-card-title>
            <v-card nuxt to="/" class="ma-2" v-for="item in 6">
              <v-img src="https://gaak.fr/wp-content/uploads/2022/07/995884.png" class="imgAgenda rounded-lg">
              <v-row class="d-flex fill-height align-end text-center">
                <v-col class="pb-0">
                  <div class="text-subtitle2">Episode 2</div>
                  <div class="text-overline">Kaguya</div>
                </v-col>
              </v-row>
            </v-img>
            </v-card>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title class="text-center">
              Samedi
            </v-card-title>
            <v-card nuxt to="/" class="ma-2" v-for="item in 6">
              <v-img src="https://gaak.fr/wp-content/uploads/2022/07/995884.png" class="imgAgenda rounded-lg">
              <v-row class="d-flex fill-height align-end text-center">
                <v-col class="pb-0">
                  <div class="text-subtitle2">Episode 2</div>
                  <div class="text-overline">Kaguya</div>
                </v-col>
              </v-row>
            </v-img>
            </v-card>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title class="text-center">
              Dimanche
            </v-card-title>
            <v-card nuxt to="/" class="ma-2" v-for="item in 6">
              <v-img src="https://gaak.fr/wp-content/uploads/2022/07/995884.png" class="imgAgenda rounded-lg">
              <v-row class="d-flex fill-height align-end text-center">
                <v-col class="pb-0">
                  <div class="text-subtitle2">Episode 2</div>
                  <div class="text-overline">Kaguya</div>
                </v-col>
              </v-row>
            </v-img>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-calendar>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
.imgAgenda img {
  filter: brightness(60%);
}
</style>