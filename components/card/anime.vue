<script setup>
const props = defineProps({
  description: String,
  title: String,
  episode: Number,
  season: Number,
  cover: String,
  slug_type: String,
  slug_name: String,
})
</script>

<template>
  <v-tooltip :text="description" width="400">
    <template v-slot:activator="{ props }">
      <v-card class="ma-4 rounded-xl" width="250" v-bind="props" nuxt :to="`/${slug_type}/${slug_name}`">
        <v-img contain :src="cover"></v-img>
        <v-card-title class="font-weight-bold pb-1">
          {{ title }}
        </v-card-title>
        <v-card-text class="pb-0">
          <div>
            2020
          </div>
        </v-card-text>
        <v-rating class="ml-2" disabled size="x-small"></v-rating>
      </v-card>
    </template>
  </v-tooltip>
</template>

<script>
export default {
  data: () => ({
    text: "Depuis les temps anciens, il existe des rumeurs concernant des démons mangeurs d'hommes qui se cachent dans les bois. Pour cette raison, les citadins locaux ne s'y aventurent jamais la nuit. La légende raconte aussi qu'un tueur de démons déambule la nuit, chassant ces démons assoiffés de sang. Pour le jeune Tanjirô, ces rumeurs vont bientôt devenir sa dure réalité ...\nDepuis la mort de son père, Tanjirô a pris sur lui pour subvenir aux besoins de sa famille. Malgré cette tragédie, ils réussissent à trouver un peu de bonheur au quotidien.\nCependant, ce peu de bonheur se retrouve détruit le jour où Tanjirô découvre que sa famille s'est faite massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon. À sa grande surprise, Nezuko montre encore des signes d'émotion et de pensées humaines. Ainsi, commence la dure tâche de Tanjirô, celle de combattre les démons et de faire redevenir sa sœur humaine"
  })
}
</script>

<style>

</style>