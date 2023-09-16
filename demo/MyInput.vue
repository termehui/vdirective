<template>
    <div class="input">
        <label>{{ title || "Input" }}:</label>
        <input type="text" value="my value select and clear word by word" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    props: ["title"],
});
</script>
