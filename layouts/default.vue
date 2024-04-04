<template>
    <v-app>
       
            <v-row class="pa-2">
                <v-col class="ma-1 pr-1" cols="1">

                    <v-card color="primary" height="100%">
                        <nuxt-link to="/" style="text-decoration: none; color: inherit;">
                            <h1 class="pt-3" style="text-align: center;" to="/">LANcacheUI</h1>
                        </nuxt-link>
                       
                        <v-btn v-for="link in links" :to="link.link" :key="link.name" variant="text">
                        {{ link.name }}
                    </v-btn>
                    </v-card>

                </v-col>
                <v-col class="ma-1 pl-1">
                    <slot />
                </v-col>

            </v-row>
       
    </v-app>
</template>
<script setup lang="ts">
let links = [
    { name: "Servers", link: "/servers" },
    { name: "Steam", link: "/steam" }
]


</script>
<style>
body::-webkit-scrollbar {
    display: none;
}

body {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

html {
    overflow: scroll;
    overflow-x: hidden;
}

::-webkit-scrollbar {
    width: 0;
    /* Remove scrollbar space */
    background: transparent;
    /* Optional: just make scrollbar invisible */
}

/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #FF0000;
}
</style>