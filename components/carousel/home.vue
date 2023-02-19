<template>
  <v-carousel class="rounded-xl" show-arrows="hover">
    
    <v-carousel-item
      src="https://gaak.fr/wp-content/uploads/2022/07/995884.png"
      cover
    >
      <v-row class="d-flex fill-height align-end pb-10 pl-5 carouselElement">
        <v-col  class="text-start">
          <div class="text-h2 text-white">Kaguya-sama - Love is War</div>
          <div class="text-subtitle-1 text-white">Kaguya Shinomiya, vice-présidente du conseil des élèves ne voit pas l'amour comme tout le monde. Pour elle, c'est un combat qu'elle doit livrer avec la personne dont elle est amoureuse, Miyuki Shirogane, qui n'est autre que le président du conseil des élèves et qui partage une vision de l'amour assez similaire. Bien que tous les deux éprouvent des sentiments réciproques, leur orgueil fait que le premier qui osera se déclarer devra alors se soumettre à l'autre...</div>
          <v-btn>Regarder</v-btn>
        </v-col>
      </v-row>
    </v-carousel-item>

    <v-carousel-item
      src="https://i0.wp.com/www.kearipan.com/wp-content/uploads/2021/10/demon-slayer-kimetsu-no-yaiba.jpg"
      cover
    >
      <v-row class="d-flex fill-height align-end pb-10 pl-5 carouselElement">
        <v-col  class="text-start">
          <div class="text-h2 text-white">Demon Slayer</div>
          <div class="text-subtitle-1 text-white">Depuis les temps anciens, il existe des rumeurs concernant des démons mangeurs d'hommes qui se cachent dans les bois. Pour cette raison, les citadins locaux ne s'y aventurent jamais la nuit. La légende raconte aussi qu'un tueur de démons déambule la nuit, chassant ces démons assoiffés de sang. Pour le jeune Tanjirô, ces rumeurs vont bientôt devenir sa dure réalité ...

          Depuis la mort de son père, Tanjirô a pris sur lui pour subvenir aux besoins de sa famille. Malgré cette tragédie, ils réussissent à trouver un peu de bonheur au quotidien.

          Cependant, ce peu de bonheur se retrouve détruit le jour où Tanjirô découvre que sa famille s'est faite massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon. À sa grande surprise, Nezuko montre encore des signes d'émotion et de pensées humaines. Ainsi, commence la dure tâche de Tanjirô, celle de combattre les démons et de faire redevenir sa sœur humaine.

          </div>
          <v-btn>Regarder</v-btn>
        </v-col>
      </v-row>
    </v-carousel-item>
    
  </v-carousel>
</template>

<script>
export default {

}
</script>

<style>
.v-carousel-item img {
  filter: blur(2px);
  filter :  brightness(50%);
}
</style>