<template>
  <v-container fluid>
    <CarouselHome />
    <v-row class="mt-10">
      <v-col>
        <h1>Anime Populaire</h1>
      </v-col>
    </v-row>
    <v-row>
    <v-slide-group class="pa-4">
      <v-slide-group-item v-for="item in 10">
        <CardAnime description="`Depuis les temps anciens, il existe des rumeurs concernant des démons mangeurs d'hommes qui se cachent dans les bois. Pour cette raison, les citadins locaux ne s'y aventurent jamais la nuit. La légende raconte aussi qu'un tueur de démons déambule la nuit, chassant ces démons assoiffés de sang. Pour le jeune Tanjirô, ces rumeurs vont bientôt devenir sa dure réalité ...\nDepuis la mort de son père, Tanjirô a pris sur lui pour subvenir aux besoins de sa famille. Malgré cette tragédie, ils réussissent à trouver un peu de bonheur au quotidien.\nCependant, ce peu de bonheur se retrouve détruit le jour où Tanjirô découvre que sa famille s'est faite massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon. À sa grande surprise, Nezuko montre encore des signes d'émotion et de pensées humaines. Ainsi, commence la dure tâche de Tanjirô, celle de combattre les démons et de faire redevenir sa sœur humaine`" title="Love is War - Kaguya Sama" :episode="item" :season="1" cover="https://fr.web.img3.acsta.net/pictures/20/04/08/16/07/4929472.jpg" slug_type="anime" slug_name="love_is_war" />
      </v-slide-group-item>
    </v-slide-group>
    </v-row>
    <v-divider class="mt-10"></v-divider>
    <v-row class="mt-10">
      <v-col>
        <h1>Nouveauté</h1>
      </v-col>
    </v-row>
    <v-slide-group class="pa-4">
      <v-slide-group-item v-for="item in 10">
        <CardAnime_episode_slider />
      </v-slide-group-item>
    </v-slide-group>
  </v-container>
</template>

<script>
export default {
  data: () => ({})
}
</script>

<style>

</style>