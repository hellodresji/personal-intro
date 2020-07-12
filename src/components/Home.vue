<template>
    <div class="wrapper">
        <!-- <img :src="" class="bkg"> -->
        <div class="bkg"></div>
        <div class="content">
            <div class="avatar">
                GH
            </div>
            <p class="greetings">
                GUANGHUI JI
            </p>
            <p class="desc">A frontend developer, who can bring all your innovation ideas into reality!</p>
            <v-icon dark class="external">fab fa-xing</v-icon>
            <v-icon dark class="external">fab fa-linkedin-in</v-icon>
            <v-icon dark class="external">fab fa-google</v-icon>
        </div>
    </div>
</template>
<style scoped>
.wrapper, .bkg {
    width: 100vw;
    height: 100%;
    position: relative;
}

.wrapper {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bkg {
    content: '';
    background-image: url('../assets/imgs/home.jpeg');

    position: absolute;
    /* min-width: 1000px; */
    top: 0;
    left: 0;
    z-index: 0;
    zoom: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(70%) saturate(90%);
}

.content {
    z-index: 2;
    /* width: 300px; */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.avatar {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-image: url('../assets/imgs/home.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(90%);

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 2em;
    font-weight: 500;
}

.content .greetings {
    color: white;
    font-size: 3em;
    border-bottom: 2px solid white;
}

.content .desc {
    color: white;
    max-width: 400px;
    text-align: center;
    font-size: .9em;
    font-weight: 300;
}

.external {
    margin-bottom: 15px;
}

.external:hover {
    cursor: pointer;
}

.email {
    font-size: .8em;
    font-weight: 300;
    color: white;
}

.email:hover {
    text-decoration: underline;
    cursor: pointer;
}
</style>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>