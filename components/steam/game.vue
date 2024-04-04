<template>
    <div>
        <v-card color="secondary" >
            <h2>{{game.name}}</h2>
            <v-img :src="`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appID}/header.jpg`"></v-img>
            <p>AppID: {{game.appID}}</p>
            <h3>  Size: {{bytesToSize(game.downloadSize)}}</h3>
            
            
        </v-card>

    </div>

</template>

<script setup lang="ts">
const props = defineProps(['game'])


</script>