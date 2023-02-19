<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card class="rounded-xl" v-bind="props">
      <v-img class="imgAnime" contain src="https://gaak.fr/wp-content/uploads/2022/07/995884.png">
        <v-row class="d-flex fill-height align-end pl-5 carouselElement">
          <v-col  class="text-start">
            <div class="text-subtitle-2 text-white">EPISODE 2 - SAISON 1</div>
            <div class="text-h4 text-white">Kaguya-sama - Love is War</div>
          </v-col>
        </v-row>
      </v-img>
      <v-overlay
        :model-value="isHovering"
        contained
        class="align-center justify-center"
      >
        <v-btn color="white" variant="outlined" append-icon="mdi-play-circle-outline">Regarder</v-btn>
      </v-overlay>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data: () => ({
    overlay: false,
  })
}
</script>

<style>
.imgAnime .v-img__img {
  filter: blur(3px);
  filter : brightness(50%);
}
</style>