<template>
    <div>
        <v-card color="secondary">
            <h2>Service: {{server.service}}</h2>
            <p>URL: {{server.serverURL}}</p>
            <h3>  Size: {{bytesToSize(server.downloadSize)}}</h3>
            
            
        </v-card>

    </div>

</template>

<script setup lang="ts">
const props = defineProps(['server'])


</script>