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
                        I am a frontend developer and also have backend knowledge. I enjoy the smiling face when I bring the product in front of users, which not only satisfies their expectations but also possesses what the users did not imagine.
                        I enjoy solving problems, offering solutions and exchanging awesome ideas, certainly, seeking for latest technologies.
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
            <section>
                <p class="sub-title" style="text-align: center;">Skills</p>
                <section class="skills">
                    <div class="info-item">
                        <div class="info-title">Frontend related:</div>
                        <div class="info-content">
                            <v-chip
                                v-for="item of frontend"
                                :key="item"
                                class="mr-2 mb-2"
                                small
                                >
                                {{item}}
                            </v-chip>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-title">Backend related:</div>
                        <div class="info-content">
                            <v-chip
                                v-for="item of backend"
                                :key="item"
                                class="mr-2 mb-2"
                                small
                                >
                                {{item}}
                            </v-chip>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-title">Other:</div>
                        <div class="info-content">
                            <v-chip
                                v-for="item of other"
                                :key="item"
                                class="mr-2 mb-2"
                                small
                                >
                                {{item}}
                            </v-chip>
                        </div>
                    </div>
                </section>
            </section>
            <!-- <div class="hint">
                <ScrollHint></ScrollHint>
            </div> -->
        </v-container>
    </div>
</template>
<style scoped>
.wrapper {
    /* height: 100%; */
    width: 100%;
    position: relative;
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
    height: 150px;
    width: 150px;
    border-radius: 50%;
    background-image: url('../assets/imgs/pic.jpg');
    background-size: cover;
    background-position: center 0;
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

.skills .info-title {
    min-width: 150px;
}

.hint {
    bottom: 5px;
    width: 100%;
    position: relative;
    margin-top: 15px;
}
</style>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import ScrollHint from './ScrollHint.vue';

@Component({
    components: {
        ScrollHint,
    }
})
export default class Profile extends Vue {
    public frontend: string[] = [
        'JavaScript',
        'Vue.js',
        'Angular',
        'Webpack',
        'D3.js',
        'Chart.js',
        'CSS/SASS',
        'HTML5',
    ];

    public backend: string[] = [
        'Node.js',
        'Java',
        'Maven',
    ];

    public database: string[] = [
        'MySQL',
        'Postgre',
        'MongoDB'
    ];

    public other: string[] = [
        'Hadoop',
        'Spark',
        'Python',
        'Data Mining',
        'C/C++',
        'REST',
        'Websocket',
        'Git',
    ];
}
</script>