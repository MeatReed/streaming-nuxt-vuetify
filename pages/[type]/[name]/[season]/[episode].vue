<script setup>
const videoContainer = ref(null);
const videoPlayer = ref(null);

onMounted(async () => {
  const shaka = await import('shaka-player/dist/shaka-player.ui.js');
  const player = new shaka.Player(videoPlayer.value);

  player
    .load("https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")
    .then(() => {
      console.log('The video has now been loaded!');
    })
    .catch(this.onError);
});
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <div class="text-h4">
          Love is War - Kaguya-Sama | Episode 1 Saison 2
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="9">
        <video id="video" ref="videoPlayer" crossorigin="" controls></video>
      </v-col>
      <v-col cols="3">
        <v-card height="650" class="overflow-y-auto">
          <v-card-text>
            <v-list>
              <v-list-item>
                Saison 1
              </v-list-item>
              <v-list-item v-for="item in 10">
                <v-card>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                      <v-card-title>Episode {{ item }}</v-card-title>
                      <v-card-subtitle>00h00m00s</v-card-subtitle>
                    </div>
                  </div>
                </v-card>
              </v-list-item>

            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
}
</script>

<style>
#video {
  width: 100%
}
</style>