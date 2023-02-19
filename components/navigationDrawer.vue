<template>
  <v-navigation-drawer>
    <v-list>
      <v-list-subheader class="font-weight-bold">MENU</v-list-subheader>

      <v-list-item nuxt to="/">
        <template v-slot:prepend>
          <v-icon icon="mdi-home"></v-icon>
        </template>
        <v-list-item-title class="font-weight-bold">Accueil</v-list-item-title>
      </v-list-item>

      <v-list-item nuxt to="/browse">
        <template v-slot:prepend>
          <v-icon icon="mdi-magnify"></v-icon>
        </template>
        <v-list-item-title class="font-weight-bold">Parcourir</v-list-item-title>
      </v-list-item>

      <v-list-item nuxt to="/agenda">
        <template v-slot:prepend>
          <v-icon icon="mdi-view-agenda-outline"></v-icon>
        </template>
        <v-list-item-title class="font-weight-bold">Agenda</v-list-item-title>
      </v-list-item>
      
      <v-list-item nuxt to="/watchlist">
        <template v-slot:prepend>
          <v-icon icon="mdi-heart-outline"></v-icon>
        </template>
        <v-list-item-title class="font-weight-bold">Watchlist</v-list-item-title>
      </v-list-item>

      <v-list-item nuxt to="/coming">
        <template v-slot:prepend>
          <v-icon icon="mdi-calendar"></v-icon>
        </template>
        <v-list-item-title class="font-weight-bold">À venir</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-subheader class="font-weight-bold">Général</v-list-subheader>

      <v-list-item>
        <template v-slot:prepend>
          <v-icon icon="mdi-cog-outline"></v-icon>
        </template>
        <v-list-item-title class="font-weight-bold">Paramètres</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <template v-slot:prepend>
          <v-icon icon="mdi-login"></v-icon>
        </template>
        <v-list-item-title class="font-weight-bold">Se connecter</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <template v-slot:prepend>
          <v-icon icon="mdi-account-plus-outline"></v-icon>
        </template>
        <v-list-item-title class="font-weight-bold">S'inscrire</v-list-item-title>
      </v-list-item>

      <v-list-item>
        <template v-slot:prepend>
          <v-icon icon="mdi-logout"></v-icon>
        </template>
        <v-list-item-title class="font-weight-bold">Se déconnecter</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {

}
</script>

<style>

</style>