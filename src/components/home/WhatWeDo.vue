<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="4" class>
        <p class="google-font mb-0" style="font-size:180%; color: #008080">QUÉ ES UN ASISTENTE?</p>
        <p
          class="google-font mt-0"
          style="font-size:100%"
        >La búsqueda por voz y los altavoces inteligentes son tecnología que permite a los usuarios 
        realizar una búsqueda en Internet al formular una pregunta verbalmente en un teléfono inteligente, 
        dispositivo inteligente o computadora.</p>
        
        <span v-for="(item,i) in whatwedodata"  :key="i">
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <a :href="item.link" target="_blank" class="ma-0 mx-3" rel="noreferrer">
                <img :src="getImgUrl(item.image)" width="50vh" alt srcset dark v-on="on" />
              </a>
              &nbsp;&nbsp;
            </template>
            <span>{{item.TechName}}</span>
          </v-tooltip>
        </span>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="8">
        <v-container fluid>
          <v-row>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-leftpa-2">
              <v-icon large style="font-size:300%"> mdi-book-multiple</v-icon>
              <p class="google-font mt-2"><strong style="font-size:130%; color: #008080;"> Caracteristicas</strong></p>
               <p class="google-font" style="font-size:95%">
                  En este apartado hablaremos sobre algunas características que tiene un asistente de voz.
                </p>
            </v-col>

            <v-col md="3" lg="3" sm="6" cols="6" class="text-left pa-2">
              <v-icon large style="font-size:300%"> mdi-settings</v-icon>
              <p class="google-font mt-2" ><strong style="font-size:130%; color:#008080;">Funciones </strong></p>
              <p
                class="google-font"
                style="font-size:95%"
              >En este apartaremos hablaremossobre algunas de sus funciones, así como sus ventajas y desventajas 
               que puede tener un asistente de voz.</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-left pa-2">
              <v-icon large style="font-size:300%">mdi-account</v-icon>
              <p class="google-font mt-2" ><strong style="font-size:130%; color:#008080;">Sobre Nosotros</strong></p>
              <p
                class="google-font"
                style="font-size:95%"
              >En este apartado conocerás más sobre nosotros, así como cual es nuestro obejtivo y que beneficios podemos ofrecerte.</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-left pa-2">
              <v-icon large style="font-size:300%"> mdi-window-open</v-icon>
              <p class="google-font mt-2" ><strong style="font-size:130%; color:#008080;">Apps Móvil</strong></p>
              <p
                class="google-font"
                style="font-size:95%"
              >Veremos algunas apps para nuestro móvil que nos pueden ayudar como asistentes de voz.</p>
              <ul class="mt-2" >
                  
                        <li class="google-font">Cortana</li>
                        <li class="google-font">Siri</li>
                        <li class="google-font">Google Maps</li>
                        <li class="google-font">(Windows).</li>
                </ul> 
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import whatwedodata from "@/assets/data/whatwedo.json";
export default {
  name: "App",
  data: () => ({
    whatwedodata: whatwedodata
  }),
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    }
  }
};
</script>

