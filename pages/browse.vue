<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <h1 class="mb-10">Derniers épisodes</h1>
        <CardAnime_episode/>
      </v-col>
      <v-col cols="7">
        <h1>Animes les + populaires</h1>
        <v-slide-group class="pa-4">
          <v-slide-group-item v-for="item in 10">
            <CardAnime description="`Depuis les temps anciens, il existe des rumeurs concernant des démons mangeurs d'hommes qui se cachent dans les bois. Pour cette raison, les citadins locaux ne s'y aventurent jamais la nuit. La légende raconte aussi qu'un tueur de démons déambule la nuit, chassant ces démons assoiffés de sang. Pour le jeune Tanjirô, ces rumeurs vont bientôt devenir sa dure réalité ...\nDepuis la mort de son père, Tanjirô a pris sur lui pour subvenir aux besoins de sa famille. Malgré cette tragédie, ils réussissent à trouver un peu de bonheur au quotidien.\nCependant, ce peu de bonheur se retrouve détruit le jour où Tanjirô découvre que sa famille s'est faite massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon. À sa grande surprise, Nezuko montre encore des signes d'émotion et de pensées humaines. Ainsi, commence la dure tâche de Tanjirô, celle de combattre les démons et de faire redevenir sa sœur humaine`" title="Love is War - Kaguya Sama" :episode="item" :season="1" cover="https://fr.web.img3.acsta.net/pictures/20/04/08/16/07/4929472.jpg" slug_type="anime" slug_name="love_is_war" />
          </v-slide-group-item>
        </v-slide-group>
      </v-col>
    </v-row>
    <v-divider class="my-10"></v-divider>
    <v-row>
      <v-col>
        <v-text-field
          label="Search"
          bg-color="grey-lighten-1"
          class="rounded-pill overflow-hidden"
          density="compact"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
          variant="solo"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn variant="text" class="mr-5">
          Filtres

        <v-overlay
          activator="parent"
          location-strategy="connected"
          scroll-strategy="close"
        >
          <v-card width="800">
            <v-container>
              <v-row>
                <v-col>
                  <v-radio-group
                    column
                  >
                    <v-radio
                      label="Séries"
                      value="Séries"
                    ></v-radio>
                    <v-radio
                      label="Films"
                      value="Films"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                  <v-card color="transparent" flat height="400" class="overflow-y-auto">
                    <v-checkbox
                    v-for="item in genres"
                      :label="item.name"
                      hide-details
                    ></v-checkbox>
                  </v-card>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>
                <v-card color="transparent" flat height="400" class="overflow-y-auto">
                <v-radio-group column>
                  <v-radio
                    label="2023"
                  ></v-radio>
                  <v-radio
                    label="2022"
                  ></v-radio>
                  
                  <v-radio
                    label="2021"
                  ></v-radio>
                  
                  <v-radio
                    label="2020"
                  ></v-radio>
                  
                  <v-radio
                    label="2019"
                  ></v-radio>
                  
                  <v-radio
                    label="2018"
                  ></v-radio>
                  
                  <v-radio
                    label="2017"
                  ></v-radio>
                </v-radio-group>
                </v-card>
              </v-col>
              </v-row>
            </v-container>
          </v-card>
          
        </v-overlay>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" v-for="item in 30">
        <CardAnime description="`Depuis les temps anciens, il existe des rumeurs concernant des démons mangeurs d'hommes qui se cachent dans les bois. Pour cette raison, les citadins locaux ne s'y aventurent jamais la nuit. La légende raconte aussi qu'un tueur de démons déambule la nuit, chassant ces démons assoiffés de sang. Pour le jeune Tanjirô, ces rumeurs vont bientôt devenir sa dure réalité ...\nDepuis la mort de son père, Tanjirô a pris sur lui pour subvenir aux besoins de sa famille. Malgré cette tragédie, ils réussissent à trouver un peu de bonheur au quotidien.\nCependant, ce peu de bonheur se retrouve détruit le jour où Tanjirô découvre que sa famille s'est faite massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon. À sa grande surprise, Nezuko montre encore des signes d'émotion et de pensées humaines. Ainsi, commence la dure tâche de Tanjirô, celle de combattre les démons et de faire redevenir sa sœur humaine`" title="Love is War - Kaguya Sama" :episode="item" :season="1" cover="https://fr.web.img3.acsta.net/pictures/20/04/08/16/07/4929472.jpg" slug_type="anime" slug_name="love_is_war" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    genres: [
      {
        name: "Action"
      },
      {
        name: "Arts martiaux"
      },
      {
        name: "Aventure"
      },
      {
        name: "Comédie"
      },
      {
        name: "Création originale"
      },
      {
        name: "Demons"
      },
      {
        name: "Detective"
      },
      {
        name: "Drame"
      },
      {
        name: "Ecchi"
      },
      {
        name: "Fantasie"
      },
      {
        name: "Game"
      },
      {
        name: "Harem"
      },
      {
        name: "Isekai"
      },
      {
        name: "Magical Girl"
      }
    ]
  })
}
</script>
