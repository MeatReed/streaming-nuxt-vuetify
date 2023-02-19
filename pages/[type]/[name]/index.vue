<template>
  <v-container fluid>
    <h1>name</h1>
    <v-row>
      <v-col cols="3">
        <v-img class="rounded-xl" contain src="https://fr.web.img3.acsta.net/pictures/20/04/08/16/07/4929472.jpg"></v-img>
      </v-col>
      <v-col cols="9">
        <v-tabs v-model="tab">
          <v-tab>
            Information
          </v-tab>
          <v-tab>
            Episode
          </v-tab>
        </v-tabs>
        <v-window v-model="tab">
          <v-window-item>
            <div class="mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae voluptate distinctio unde voluptatibus amet nesciunt esse soluta quis, temporibus repudiandae eligendi ad sunt nobis obcaecati officia? Tenetur expedita consectetur eum.
            </div>

            <span class="text-grey">Date de diffusion</span>
            <div class="mb-2">00/00/0000</div>

            <span class="text-grey">Nom original</span>
            <div class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid beatae quo ad iste quam odit doloribus possimus iure impedit? Facilis numquam rem neque cumque sint nobis modi, corrupti harum.</div>
            
            <span class="text-grey">Autres noms</span>
            <div class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid beatae quo ad iste quam odit doloribus possimus iure impedit? Facilis numquam rem neque cumque sint nobis modi, corrupti harum.</div>
            
            <span class="text-grey">Classification</span>
            <div class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid beatae quo ad iste quam odit doloribus possimus iure impedit? Facilis numquam rem neque cumque sint nobis modi, corrupti harum.</div>
          
            <span class="text-grey">Genres</span>
            <div class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid beatae quo ad iste quam odit doloribus possimus iure impedit? Facilis numquam rem neque cumque sint nobis modi, corrupti harum.</div>
          
            <span class="text-grey">Copyright</span>
            <div class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum aliquid beatae quo ad iste quam odit doloribus possimus iure impedit? Facilis numquam rem neque cumque sint nobis modi, corrupti harum.</div>
          </v-window-item>
          <v-window-item>
            <v-row>
              <v-col>
                <v-select
                  label="Saison"
                  :items="['Saison 1', 'Saison 2', 'Film 1']"
                ></v-select>
              </v-col>
              <v-col>
                <v-pagination
                  v-model="episode_page"
                  :length="Math.ceil(episode_length/4)"
                  :update="pagination_episode()"
                  :total-visible="7"
                ></v-pagination>
              </v-col>
            </v-row>
                <v-window v-model="episode_page">
                  <v-window-item v-for="number_episode in episode_length">
                      <v-row>
                        <v-col v-if="episode_show" v-for="item in episode_show" cols="6">
                          <v-card height="200" class="rounded-xl" nuxt to="/type/name/season/4">
                            <v-img class="imgCover" cover src="https://gaak.fr/wp-content/uploads/2022/07/995884.png">
                              <div class="d-flex fill-height justify-space-between align-end">
                                <v-card-title class="text-h5">
                                  Episode {{ item }}
                                </v-card-title>
                              </div>
                            </v-img>
                          </v-card>
                        </v-col>
                      </v-row>
                  </v-window-item>
                </v-window>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
    <div class="text-h3 text-center mt-10 mb-5">Avis</div>
    <v-row>
      <v-col v-for="item in 8" cols="3">
        <v-card>
          <v-row class="d-flex fill-height align-center">
            <v-col cols="3">
              <v-avatar class="ma-3" size="100" color="grey"></v-avatar>
            </v-col>
            <v-col cols="6">
              <v-card-title class="pb-0">
                name
              </v-card-title>
              <v-card-subtitle>
                00/00/00 - 00h00
              </v-card-subtitle>
              
              <v-rating
                class="ma-2"
                density="compact"
              ></v-rating>
            </v-col>
            <v-col cols="3">
              <div class="text-h4">
                4.8
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-pagination
          :length="8"
          :total-visible="7"
        ></v-pagination>
      </v-col>
    </v-row>
    <v-divider class="my-10"></v-divider>
    <div class="text-center text-h3">Anime recommendé</div>
    <v-row>
      <v-col>
        <v-slide-group class="pa-4">
          <v-slide-group-item v-for="item in 10">
            <CardAnime description="`Depuis les temps anciens, il existe des rumeurs concernant des démons mangeurs d'hommes qui se cachent dans les bois. Pour cette raison, les citadins locaux ne s'y aventurent jamais la nuit. La légende raconte aussi qu'un tueur de démons déambule la nuit, chassant ces démons assoiffés de sang. Pour le jeune Tanjirô, ces rumeurs vont bientôt devenir sa dure réalité ...\nDepuis la mort de son père, Tanjirô a pris sur lui pour subvenir aux besoins de sa famille. Malgré cette tragédie, ils réussissent à trouver un peu de bonheur au quotidien.\nCependant, ce peu de bonheur se retrouve détruit le jour où Tanjirô découvre que sa famille s'est faite massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon. À sa grande surprise, Nezuko montre encore des signes d'émotion et de pensées humaines. Ainsi, commence la dure tâche de Tanjirô, celle de combattre les démons et de faire redevenir sa sœur humaine`" title="Love is War - Kaguya Sama" :episode="item" :season="1" cover="https://fr.web.img3.acsta.net/pictures/20/04/08/16/07/4929472.jpg" slug_type="anime" slug_name="love_is_war" />
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
    episode_pagination: 0,
    episode_page: 1,
    episoded_page_size: 4,
    episode_show: null,
    episode_length: 13,
  }),
  methods: {
    pagination_episode() {
      if (this.episode_pagination !== this.episode_page) {
        this.episode_pagination = this.episode_page;
        console.log('cv')
        const startIndex = (this.episode_page - 1) * this.episoded_page_size;
        const endIndex = startIndex + this.episoded_page_size;

        if (endIndex > this.episode_length) {
          this.episode_show = this.episode_length - startIndex
        } else {
          this.episode_show = endIndex - startIndex
        }
      }
    }
  }
}
</script>

<style>
.imgCover img {
  filter: blur(2px);
  filter :  brightness(50%);
}
</style>