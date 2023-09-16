<template>
    <div class="section">
        <h1>Auto Focus</h1>
        <p class="desc">This element got focus on load</p>
        <input type="text" v-focus />
    </div>

    <div class="section">
        <h1>Clear By Escape Key</h1>
        <p class="desc">Use Escape to clear content of inputs</p>
        <input type="text" value="my value clear on press escape" v-clear />
        <input type="text" value="my value clear word by word" v-clear="' '" />
        <input
            type="text"
            value="The first sentence. The second sentence. The last sentence"
            v-clear="'.'"
        />
        <input type="text" value="2021/12/01" v-clear="'/'" />
    </div>

    <div class="section">
        <h1>Focus Class</h1>
        <p class="desc">
            Add class to container when any element inside container got focus.
        </p>
        <div class="wrapper" v-focus-class>
            <label>First name:</label>
            <input type="text" />
            <label>Last name:</label>
            <input type="text" />
        </div>
    </div>

    <div class="section">
        <h1>Select Input Content</h1>
        <p class="desc">
            Select input content on focus or by separator on click
        </p>
        <input
            type="text"
            value="this content auto selected on focus"
            v-select
        />
        <input type="text" value="2020/01/03" v-select="'/'" />
    </div>

    <section>
        <h1>Nested Component</h1>
        <my-input v-clear="' '" title="Name" v-select="' '" />
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyInput from "./MyInput.vue";
export default defineComponent({
    name: "App",
    components: { MyInput }
});
</script>

<style>
body {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 2rem;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    font-size: 13px;
    color: #03071e;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
#app {
    display: block;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
}

.section {
    padding: 1rem;
}

h1 {
    font-size: 2rem;
    font-weight: normal;
    margin: 0;
    color: #42b883;
}

input[type="text"] {
    display: block;
    width: 20rem;
    max-width: 100%;
    margin: 0.2rem 0;
    padding: 0.5em 1em;
    border: 1px solid #6c757d;
    font: inherit;
}

input[type="text"]:focus {
    outline: none;
    border-color: #42b883;
}

.desc {
    display: block;
    box-sizing: border-box;
    margin: 0;
    padding: 0.5rem 0;
    color: #6c757d;
}

.wrapper {
    background: #e9ecef;
    border-radius: 3px;
    border: 1px solid #e9ecef;
    padding: 1rem;
}

.wrapper.has-focus {
    border-color: #dc2f02;
}
</style>
