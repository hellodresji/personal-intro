<template>
    <div class="wrapper">
        <v-container class="profile-container">
            <section class="title-section mb-5">
                <p class="section-title mb-0">Profile</p>
                <span class="desc">
                    Always stay hungry for better designing and user interaction.
                </span>
            </section>
            <v-divider></v-divider>
            <section class="content-section">
                <section class="about-me">
                    <p class="sub-title mt-4">About Me</p>
                    <div class="desc">
                        I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.
                    </div>
                </section>
                <section class="avatar">
                    <div class="img"/>
                </section>
                <section class="basic-info">
                    <p class="sub-title mt-4">Details</p>
                    <div class="info-container">
                        <div class="info-item">
                            <div class="info-title">Lastname:</div>
                            <div class="info-content">Guanghui</div>
                        </div>
                        <div class="info-item">
                            <div class="info-title">Firstname:</div>
                            <div class="info-content">Ji</div>
                        </div>
                        <div class="info-item">
                            <div class="info-title">Birthday:</div>
                            <div class="info-content">12.1991</div>
                        </div>
                        <div class="info-item">
                            <div class="info-title">Email:</div>
                            <div class="info-content">aaron.guanghui.ji@gmail.com</div>
                        </div>
                        <div class="info-item">
                            <div class="info-title">Tel.:</div>
                            <div class="info-content">017661847604</div>
                        </div>
                        <div class="info-item">
                            <div class="info-title">Address:</div>
                            <div class="info-content">Reitbahnstr. 35, 01069, Dresden</div>
                        </div>
                    </div>
                </section>
            </section>
        </v-container>
    </div>
</template>
<style scoped>
.wrapper {
    height: 100%;
    widows: 100%;
}

.profile-container {
    max-width: 800px;
}

.section-title, .sub-title {
    color: orange;
}

.sub-title {
    text-align: center;
    font-size: 2em;
    font-weight: 300;
}

.title-section {
    text-align: center;
}

.title-section .section-title {
    font-size: 4em;
    font-weight: 300;
}

.title-section .desc {
    font-size: .9em;
    font-weight: 300;
}

.content-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.content-section .avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 300px;
}

.about-me {
    text-align: center;
}

.about-me .desc {

    text-align: justify;
}

.avatar .img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-image: url('../assets/imgs/home.jpeg');
    background-size: cover;
    background-position: center center;
}

.info-item {
    display: flex;
    margin: 5px 0;
    /* align-items: center; */
}

.info-title {
    font-size: .9em;
    font-weight: 500;
    color: rgb(66, 66, 66);
    min-width: 100px;
}

.info-content {
    font-weight: 300;
    /* font-size: .9em; */
}
</style>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Profile extends Vue {
    
}
</script>