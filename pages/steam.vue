<template>

    <v-card color="primary">
        <h1>Steam</h1>
    
        <v-row class="pa-2">
            <v-col cols="3" v-for="game in games">
                <SteamGame class="py-2" :game="game"></SteamGame>
            </v-col>

        </v-row>
    </v-card>
</template>

<script setup lang="ts">

let games = (await backendFetch("/steam/cachedApps")).data

</script>