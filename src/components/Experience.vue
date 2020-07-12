<template>
    <div class="wrapper">
        <v-container class="experience-container">
            <section class="title-section mb-5">
                <p class="section-title mb-0">Educations & Technical Experiences</p>
                <span class="desc">
                    Bring our imagination into reality is an art.
                </span>
            </section>
            <v-divider></v-divider>
            <v-timeline :dense="dense" ref="timelineDom">
                <v-timeline-item
                    v-for="item in timeline"
                    :key="item.time"
                    :icon="item.icon"
                    color="orange"
                    fill-dot
                >
                    <template v-slot:opposite v-if="!dense">
                        <span style="color: gray;">{{item.time}}</span>
                    </template>
                    <!-- <v-card class="elevation-0">
                        <v-card-text> -->
                        <div v-if="dense" style="color: gray; width: 100%; text-align: left;">{{item.time}}</div>
                        <v-col style="background: white; border-radius: 8px;">
                            <div class="timeline-title">{{item.topic}}</div>
                            <div class="timeline-addr mb-3">{{item.addr}}</div>
                            <div class="timeline-content mb-3">{{item.content}}</div>
                            <div class="mt-2" style="text-align: left">
                                <v-chip
                                    v-for="tech of item.techs"
                                    :key="tech"
                                    class="mr-2 mb-2"
                                    small
                                    >
                                    {{tech}}
                                </v-chip>
                            </div>
                        </v-col>
                        <!-- </v-card-text>
                    </v-card> -->
                </v-timeline-item>
            </v-timeline>
        </v-container>
    </div>
</template>
<style scoped>
.wrapper {
    width: 100%;
    /* height: 100%; */
    background: linear-gradient(to bottom, #f0fcff, #f0e7fa);
    box-sizing: border-box;
    padding-top: 50px;
    margin-top: 20px;
}

.experience-container {
    max-width: 1000px;
    text-align: center;
}

.section-title, .sub-title {
    color: orange;
}

.section-title {
    font-size: 2em;
    font-weight: 300;
}

.title-section .desc {
    color: gray;
    font-size: .9em;
    font-weight: 300;
}

.timeline-title, .timeline-addr, .timeline-content {
    color: rgb(54, 54, 54);
    text-align: left;
}

.timeline-title {
    font-size: 1.3em;
    font-weight: 400;
}

.timeline-content {
    font-size: .9em;
    font-weight: 300;
}

.timeline-addr {
    font-size: .8em;
    font-weight: 300;
}
</style>
<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Experience extends Vue {
    public timeline = [
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
            time: '2014.10 - 2018.8',
            topic: 'Master Computer Science',
            content: '',
            addr: 'TU Dresden, Dresden, Saxony, Germany',
            reverse: true,
            icon: 'fa fa-user-graduate',
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
        {
            time: '2009.09 - 2013.06',
            topic: 'Bachelor Computer Science',
            content: '',
            addr: 'Wuhan University of Science and Technology, Wuhan, Hubei, China',
            reverse: true,
            icon: 'fa fa-user-graduate',
        },
    ];

    public dense: boolean = false;

    public mounted() {
        window.addEventListener('resize', this.resize);
        this.resize();
    }

    public resize() {
        const dom: any = this.$refs.timelineDom;
        if (!dom) {
            return;
        }
        const width = dom.$el.clientWidth;
        if (width < 750) {
            this.dense = true;
        } else {
            this.dense = false;
        }
    }
}
</script>