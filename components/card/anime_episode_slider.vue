<script setup>
const props = defineProps({
  title: String,
  episode: Number,
  season: Number,
  banner: String,
  slug_type: String,
  slug_name: String,
  slug_season: String,
  slug_episode: String,
})
</script>

<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card class="rounded-xl ma-5" width="400" v-bind="props">
      <v-img class="imgAnime" contain src="https://gaak.fr/wp-content/uploads/2022/07/995884.png">
        <v-row class="d-flex fill-height align-end pl-5 carouselElement">
          <v-col  class="text-start">
            <div class="text-subtitle-2 text-white">EPISODE 2 - SAISON 1</div>
            <div class="text-h5 text-white">Kaguya-sama - Love is War</div>
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
  data: () => ({})
}
</script>

<style>
.imgAnime .v-img__img {
  filter: blur(2px);
  filter : brightness(50%);
}
</style>