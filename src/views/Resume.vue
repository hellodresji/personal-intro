<template>
    <div class="cus-container">
        <section class="basic-info">
            <section class="basic-info-container">
                <img :src="require('@/assets/imgs/pic.jpg')" class="avatar" />
                <div class="info-container">
                    <label style="color: whitesmoke; font-size: 2.5em; margin-bottom: 10px">Lebenslauf</label>
                    <div class="info-item">
                        <div class="info-title">Vorname:</div>
                        <div class="info-content">Guanghui</div>
                    </div>
                    <div class="info-item">
                        <div class="info-title">Nachname:</div>
                        <div class="info-content">Ji</div>
                    </div>
                    <div class="info-item">
                        <div class="info-title">Geburtsdatum:</div>
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
                        <div class="info-title">Adresse:</div>
                        <div class="info-content">Reitbahnstr. 35, 01069, Dresden</div>
                    </div>
                </div>
            </section>
        </section>
        <section class="content">
            <section class="content-container">
                <section class="educations">
                    <label class="label">Schule und Ausbuildung</label>
                    <v-divider class="my-3"/>
                    <div class="dig-item">
                        <div class="time">
                            2014.10 - 2018.08
                        </div>
                        <div class="dig-content">
                            <div class="cus-title">Masterstudium Informatik</div>
                            <div class="cus-addr">Technische Universität Dresden</div>
                        </div>
                    </div>

                    <div class="dig-item">
                        <div class="time">
                            2009.09 - 2013.06
                        </div>
                        <div class="dig-content">
                            <div class="cus-title">Bachelorstudium Informatik</div>
                            <div class="cus-addr">Wuhan University of Science and Technology</div>
                        </div>
                    </div>
                </section>
                <section class="experience">
                    <label class="label">Technische Erfahrungen</label>
                    <v-divider class="my-3"/>
                    <div class="dig-item" v-for="item in experiences" :key="item.time">
                        <div class="time">
                            {{item.time}}
                        </div>
                        <div class="dig-content">
                            <div class="cus-title">{{item.topic}}</div>
                            <div class="cus-addr mb-1">{{item.addr}}</div>
                            <div class="cus-content">
                                {{item.content}}
                            </div>
                            <div class="mt-2">
                                <v-chip
                                    v-for="tech of item.techs"
                                    :key="tech"
                                    class="mr-2 mb-2"
                                    small
                                    >
                                    {{tech}}
                                </v-chip>
                            </div>
                        </div>
                    </div>
                </section>
                <div style="display: flex; margin-bottom: 15px;">
                    <section class="skills">
                        <label class="label">Fähigkeiten</label>
                        <v-divider class="my-3"/>
                        <div class="dig-item">
                            <div class="time">
                                Frontend:
                            </div>
                            <div class="dig-content">
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

                        <div class="dig-item">
                            <div class="time">
                                Backend:
                            </div>
                            <div class="dig-content">
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

                        <div class="dig-item">
                            <div class="time">
                                Datenbank:
                            </div>
                            <div class="dig-content">
                                <v-chip
                                    v-for="item of database"
                                    :key="item"
                                    class="mr-2 mb-2"
                                    small
                                    >
                                    {{item}}
                                </v-chip>
                            </div>
                        </div>

                        <div class="dig-item">
                            <div class="time">
                                Andere:
                            </div>
                            <div class="dig-content">
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

                    <section class="language">
                        <label class="label">Sprachen</label>
                        <v-divider class="my-3"/>
                        <div class="dig-item">
                            <div class="time">Deutsch: </div>
                            <div class="time">
                                Fließend
                            </div>
                        </div>

                        <div class="dig-item">
                            <div class="time">Englisch: </div>
                            <div class="time">
                                Fließend
                            </div>
                        </div>
                        <div class="dig-item">
                            <div class="time">Japanisch: </div>
                            <div class="time">
                                Gut
                            </div>
                        </div>
                        <div class="dig-item">
                            <div class="time">Chinesisch: </div>
                            <div class="time">
                                Muttersprache
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </section>
    </div>
</template>
<style scoped>
.cus-container {
    height: 100%;
    width: 100%;
    overflow-y: auto;
}

.basic-info {
    height: 300px;
    background: gray;
    padding: 0 50px;
    display: flex;
    justify-content: center;
}

.basic-info-container {
    position: relative;
    display: flex;
    width: 1000px;
    justify-content: center;
}

.avatar {
    height: 300px;
    /* position: absolute; */
    /* bottom: 0;
    left: 100px; */
}

.info-container {
    margin-left: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.info-item {
    display: flex;
    margin: 0 0 5px 0;
    /* align-items: center; */
}

.info-title, .info-content {
    color: whitesmoke;
}

.info-title {
    font-size: .9em;
    font-weight: 500;
    /* color: rgb(66, 66, 66); */
    min-width: 100px;
}

.info-content {
    font-weight: 400;
    /* font-size: .9em; */
}

.content {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    align-items: center;
}

.content-container {
    width: 1000px;
}

.label {
    font-size: 2em;
    font-weight: 500;
}

.dig-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 13px;
}

.skills .dig-item, .language .dig-item {
    margin-bottom: 5px !important;
}

.time {
    width: 200px !important;
}

.skills .time {
    width: 100px !important;
}

.dig-content {
    flex: 1;
}

.cus-title {
    margin-top: -5px;
    font-size: 1.3em;
    font-weight: 400;
}

.cus-addr {
    font-size: .8em;
}

.cus-content {
    font-size: 1em;
}

.skills, .language, .experience {
    margin-top: 15px;
}

.language {
    margin-bottom: 20px;
}

.skills {
    width: 50%;
    padding-right: 30px;
    box-sizing: border-box;
}

.language {
    padding: 0 30px;
    width: 50%;
    box-sizing: border-box;
}
</style>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Resume extends Vue {
    public experiences = [
        {
            time: '2019.01 - Until Now',
            topic: 'Frontend developer',
            content: 'Worked as fulltime frontend developer. Developed web and mobile app for industrial IoT',
            techs: ['Angular8', 'Vue.js', 'REST', 'Chart.js', 'CSS3', 'HTML5'],
            addr: 'ELCO Industrie Automation GmbH, Dresden',
            icon: 'fa fa-code',
        },
        {
            time: '2018.07 - 2018.09',
            topic: 'Fullstack developer - Working student',
            content: 'Development assistant for data process. Developed Java and pure JS based web map application.',
            techs: ['Java', 'Kafka', 'Websocket', 'Leaflet', 'CSS3', 'HTML5'],
            addr: 'Fraunhofer-Institut für Verkehrs- und Infrastrukturszsteme IVI',
            icon: 'fa fa-code',
        },
        {
            time: '2017.11 - 2018.7',
            topic: 'Master Thesis',
            content: 'Analysis and Evaluation of Visual Data Exploration Algorithms for Big Data',
            techs: ['Spark', 'Apache Hadoop', 'Jupyter Notebook', 'Python'],
            addr: 'TU Dresden, Dresden',
            icon: 'fa fa-code',
        },
        {
            time: '2017.04 - 2017.10',
            topic: 'Fullstack developer - Working student',
            content: 'Development assistant for data visualization. Developed Java and Jquery based web realtime application.',
            techs: ['Java', 'Postgre', 'HTML5', 'JQuery', 'WebSocket', 'Kafka', 'D3.js', 'CSS3'],
            addr: 'Fraunhofer-Institut für Verkehrs- und Infrastrukturszsteme IVI',
            icon: 'fa fa-code',
        },
        {
            time: '2016.07 - 2016.09',
            topic: 'Fullstack developer - Working student',
            content: 'Development assistant for multiple aspects. Developed Java, Node.js and Javascript based software and web apps.',
            techs: ['Java', 'Node.js', 'JavaScript', 'HTML5', 'CSS3'],
            addr: 'TU Dresden, Bauingenieurwiessen',
            icon: 'fa fa-code',
        },
    ];

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
        'MongoDB',
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