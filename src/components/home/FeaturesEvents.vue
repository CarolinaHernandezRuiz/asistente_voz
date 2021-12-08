<template>
  <v-container fluid class="mb-1">
    <v-row align="center" justify="center" class>
      <v-col cols="12" md="10" lg="10" sm="12" class="text-center mb-0">
        <p class="google-font mb-1" style="font-weight: 350;font-size:180%">
          <b>
            Las 
            <span style="color: #008080;">Ventajas </span>
            &
            <span style="color: #008080;">Desventajas</span>
          </b>
        </p>
        <p class="google-font mt-0" style="font-size:95%">Hoy en día existen todo tipo de asistente de voz en español por lo que 
        puedes escoger entre multitud de modelos en función de tus necesidades. 
        Conoce todas las ventajas y desventajas de este tipo de dispositivos. En esta sección veremos algunas de ellas.</p>
        <router-link
                    to="/team"
                    text
                    color="#4C4A78"
                    class="ma-0 google-font mb-0"
                    style="border-radius:5px;text-transform: capitalize;text-decoration:none;color:#4C4A78"
                >Ver Más</router-link>
      </v-col>
      <v-col cols="12" md="12" lg="12" sm="12" class="mt-0 pt-0 pa-0">
        <v-container fluid class="py-0 my-0">
          <v-row class="py-0 my-0" v-if="loading && notFound==false">
            <v-col v-for="i in 4" :key="i" md="3" lg="3" sm="6" cols="6" class="pa-2">
              <v-sheet :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`" class>
                <v-skeleton-loader class="mx-auto" type="article"></v-skeleton-loader>
              </v-sheet>
            </v-col>
          </v-row>
          <v-row class="py-0 my-0" v-else-if="notFound">
            <v-col
              md="3"
              lg="3"
              sm="6"
              cols="12"
              :class="$vuetify.theme.dark == true?'darkModeCardFeatureEvent':'lightModeCardFeatureEvent'"
              class="pa-4 px-5 mx-3"
            >
              <p class="google-font my-2">Not Found</p>
            </v-col>
          </v-row>
          <v-row v-else class="py-0 my-0 px-2">
            <v-col
              v-for="(item,i) in featureEvendsData"
              :key="i"
              md="3"
              lg="3"
              sm="6"
              cols="6"
              class="pa-1"
            >
              <featureEventCard :data="item" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>



<style scoped>
.lightModeCardFeatureEvent {
  background-color: #ffff;
  box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);

  border-radius: 8px;
}
.darkModeCardFeatureEvent {
  background-color: #292929;
  box-shadow: 0 0 36px rgba(0, 0, 0, 0.1);
  /* border:1px solid #212121; */
  border: 1px solid #424242;
  border-radius: 8px;
}
</style>