<template>
    <v-container fluid class="py-0 my-0 mt-5">
        <!-- <v-row class="py-0 my-0">
            <v-col md="12" sm="12" cols="12" class="py-0 my-0"> 
            </v-col>
        </v-row> -->
        <v-row align="center" class="py-0 my-0 mb-5">
            <v-col md="8" sm="12" cols="12" class="py-0 my-0">
                <h1 class="google-font mb-2">¿Cuál es el futuro de los asistentes de voz?</h1>
                <!-- {{communitydata.CommunityGuideline}} -->
                <v-expansion-panels accordion>
                    <v-expansion-panel
                        v-for="(item,i) in data"
                        :key="i"
                    >
                        <v-expansion-panel-header style="font-size:110%;color: #0ED305;">LA VOZ SERÁ MÁS ÚTIL</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Hasta ahora, las personas no han usado mucho los dispositivos de voz porque las tareas que pueden hacer han 
                            estado muy limitadas. Por ejemplo, la mayoría de las personas usan asistentes de voz para buscar una dirección, 
                            iniciar una llamada, dictar un texto o configurar una alarma.
                        </v-expansion-panel-content>

                        <v-expansion-panel-header style="font-size:110%;color: #0ED305;">LA VOZ TENDRÁ QUE SUPERAR LAS PREOCUPACIONES SOBRE LA PRIVACIDAD</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Todavía quedan algunas cuestiones que resolver antes de que los asistentes de voz sean adoptados en todas partes. 
                            Una de las principales preocupaciones es la privacidad ya que el dispositivo escucha nuestra voz. Kittlaus señala 
                            que el dispositivo solo se activaría cuando escucha la palabra «despierta», como «Hey Siri», «Hey Google» o «Alexa». 
                            En definitiva: los dispositivos no estarían grabando nuestras conversaciones.
                        </v-expansion-panel-content>

                        <v-expansion-panel-header style="font-size:110%;color: #0ED305;">LA VOZ ESTARÁ EN MÁS DISPOSITIVOS</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            La voz será esencial porque nos facilitará muchas tareas: podemos hablar más rápido de lo que escribimos. Los asistentes 
                            de voz aparecerán en muchos aspectos de nuestra vida: automóviles, trabajo, hogar, hoteles y restaurantes. Kittlaus dice 
                            que su nueva versión de Bixby pronto estará disponible en más de mil millones de dispositivos habilitados para Samsung.

                            Los asistentes de voz van a estar cada vez más presentes en nuestras vidas. La innovación permite que su aplicación en 
                            distintos hábitos y áreas científicas mejore las condiciones a trabajadores y usuarios
                        </v-expansion-panel-content>

                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col md="4" sm="4" cols="12" class="py-0 my-0 hidden-sm-and-down">
                <v-img
                    :src="require('@/assets/img/svg/bg.svg')"
                    :lazy-src="require('@/assets/img/svg/bg.svg')"
                    width="60%"
                    style="float:right"
                >
                    <template v-slot:placeholder>
                        <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                        >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
export default {
    props:['data'],
    data:()=>({

    })
}
</script>