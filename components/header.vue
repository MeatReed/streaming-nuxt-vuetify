<template>
  <v-app-bar flat app>
    <v-container fluid class="fill-height d-flex align-center">
      <v-app-bar-title>Streaming Site</v-app-bar-title>
      <v-btn variant="text" class="mr-5">
          Naviguer

        <v-overlay
          activator="parent"
          location-strategy="connected"
          scroll-strategy="close"
        >
          <v-card tile>
            <v-container fluid>
              <v-row>
              <v-col>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>test</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>test</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>test</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>test</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>test</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>test</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>test</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>test</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>test</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>test</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>test</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>test</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
            </v-container>
          </v-card>
          
        </v-overlay>
        </v-btn>
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
        <v-spacer></v-spacer>
        <v-avatar
          class="me-10 ms-4"
          color="grey-darken-1"
          size="32"
        ></v-avatar>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    nav_menu: false
  })
}
</script>

<style>

</style>