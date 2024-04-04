<template>

    <v-card class="pa-2" color="primary">
        <h1>Servers</h1>
        <v-row>
            <v-col cols="3" v-for="server in servers">
                <ServerOverviewServer class="py-2" :server="server"></ServerOverviewServer>
            </v-col>

        </v-row>

    </v-card>


</template>

<script setup lang="ts">

let servers = (await backendFetch("/cache/server")).data

</script>