<template>
  <div class="wrapper">
    <div class="cus-container">
      <section class="basic-info">
        <section class="basic-info-container">
          <img :src="require('@/assets/imgs/pic.jpg')" class="avatar" />
          <div class="info-container">
            <label
              style="color: whitesmoke; font-size: 2.5em; margin-bottom: 10px"
              >{{ $t("resume.title") }}</label
            >
            <div class="info-item">
              <div class="info-title">{{ $t("user.name") }}:</div>
              <div class="info-content">Guanghui</div>
            </div>
            <div class="info-item">
              <div class="info-title">{{ $t("user.familyname") }}:</div>
              <div class="info-content">Ji</div>
            </div>
            <!-- <div class="info-item">
              <div class="info-title">姓名:</div>
              <div class="info-content">季光辉</div>
            </div> -->
            <div class="info-item">
              <div class="info-title">{{ $t("user.birthday") }}:</div>
              <div class="info-content">28.12.1991</div>
            </div>
            <div class="info-item">
              <div class="info-title">{{ $t("user.email") }}:</div>
              <div class="info-content">aaron.hui.ji@outlook.com</div>
            </div>
            <div class="info-item">
              <div class="info-title">{{ $t("user.telephone") }}:</div>
              <div class="info-content">017661847604</div>
            </div>
            <div class="info-item">
              <div class="info-title">{{ $t("user.address") }}:</div>
              <div class="info-content">Reitbahnstr. 35, 01069, Dresden</div>
              <!-- <div class="info-content">
                Reitbahnstr. 35, 01069, 德累斯顿, 德国
              </div> -->
            </div>
          </div>
        </section>
      </section>
      <section class="content">
        <section class="content-container">
          <section class="educations">
            <label class="label">{{ $t("resume.education") }}</label>
            <v-divider class="my-3" />
            <div class="dig-item">
              <div class="time">
                2014.10 - 2018.08
              </div>
              <div class="dig-content">
                <div class="cus-title">{{ $t("education.master") }}</div>
                <div class="cus-addr">{{ $t("university.TUD") }}</div>
                <!-- <div class="cus-addr">Technische Universität Dresden</div> -->
              </div>
            </div>
            <div class="dig-item">
              <div class="time">
                2011.10 - 2012.08
              </div>
              <div class="dig-content">
                <div class="cus-title">{{ $t("education.exchange") }}</div>
                <div class="cus-addr">
                  {{ $t("university.KIT") }}
                </div>
              </div>
            </div>
            <div class="dig-item">
              <div class="time">
                2009.08 - 2013.06
              </div>
              <div class="dig-content">
                <div class="cus-title">{{ $t("education.bachelor") }}</div>
                <!-- <div class="cus-addr">
                  Wuhan University of Science and Technology
                </div> -->

                <div class="cus-addr">
                  {{ $t("university.WUST") }}
                </div>
              </div>
            </div>
          </section>
          <section class="experience">
            <label class="label">{{ $t("resume.technical") }}</label>
            <v-divider class="my-3" />
            <div class="dig-item" v-for="item in experiences" :key="item.time">
              <div class="time">
                {{ item.time }}
              </div>
              <div class="dig-content">
                <div class="cus-title">{{ item.topic }}</div>
                <div class="cus-addr mb-1">{{ item.addr }}</div>
                <div class="cus-content">
                  {{ item.content }}
                </div>
                <div class="mt-2">
                  <v-chip
                    v-for="tech of item.techs"
                    :key="tech"
                    class="mr-2 mb-2"
                    small
                  >
                    {{ tech }}
                  </v-chip>
                </div>
              </div>
            </div>
          </section>
          <div style="display: flex; margin-bottom: 15px;">
            <section class="skills">
              <label class="label">{{ $t("resume.skills") }}</label>
              <v-divider class="my-3" />
              <div class="dig-item">
                <div class="time">{{ $t("resume.frontend") }}:</div>
                <div class="dig-content">
                  <v-chip
                    v-for="item of frontend"
                    :key="item"
                    class="mr-2 mb-2"
                    small
                  >
                    {{ item }}
                  </v-chip>
                </div>
              </div>

              <div class="dig-item">
                <div class="time">{{ $t("resume.backend") }}:</div>
                <div class="dig-content">
                  <v-chip
                    v-for="item of backend"
                    :key="item"
                    class="mr-2 mb-2"
                    small
                  >
                    {{ item }}
                  </v-chip>
                </div>
              </div>

              <div class="dig-item">
                <div class="time">{{ $t("resume.database") }}:</div>
                <div class="dig-content">
                  <v-chip
                    v-for="item of database"
                    :key="item"
                    class="mr-2 mb-2"
                    small
                  >
                    {{ item }}
                  </v-chip>
                </div>
              </div>

              <div class="dig-item">
                <div class="time">{{ $t("resume.others") }}:</div>
                <div class="dig-content">
                  <v-chip
                    v-for="item of other"
                    :key="item"
                    class="mr-2 mb-2"
                    small
                  >
                    {{ item }}
                  </v-chip>
                </div>
              </div>
            </section>

            <section class="language">
              <label class="label">{{ $t("resume.language") }}</label>
              <v-divider class="my-3" />
              <div class="dig-item">
                <div class="time">{{ $t("langauge.de") }}:</div>
                <div class="time">
                  {{ $t("languageLevel.fluent") }}
                </div>
              </div>

              <div class="dig-item">
                <div class="time">{{ $t("langauge.en") }}:</div>
                <div class="time">
                  {{ $t("languageLevel.advanced") }}
                </div>
              </div>
              <div class="dig-item">
                <div class="time">{{ $t("langauge.jp") }}:</div>
                <div class="time">
                  {{ $t("languageLevel.good") }}
                </div>
              </div>
              <div class="dig-item">
                <div class="time">{{ $t("langauge.ch") }}:</div>
                <div class="time">
                  {{ $t("languageLevel.motherLanguage") }}
                </div>
              </div>
            </section>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  overflow: auto;
}

.cus-container {
  min-width: 1000px;
}

.basic-info {
  height: 300px;
  background: rgb(80, 80, 80);
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

.info-title,
.info-content {
  color: whitesmoke;
}

.info-title {
  font-size: 0.9em;
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
  padding: 0 20px;
  box-sizing: border-box;
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

.skills .dig-item,
.language .dig-item {
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
  font-size: 0.8em;
}

.cus-content {
  font-size: 1em;
}

.skills,
.language,
.experience {
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
import { i18n } from "@/plugins/i18n/setup";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Resume extends Vue {
  public experiences = [
    {
      time: `2021.02 - ${i18n.t("time.untilNow")}`,
      topic: i18n.t("career_title.frontend"),
      content: i18n.t("job.dualis"),
      techs: [
        "Vue3",
        "Vite",
        "REST",
        "CSS3",
        "HTML5",
        "Jest",
        "Cypress",
        "Websocket",
        "Docker",
      ],
      addr: "Dualis IT Solution GmbH, Dresden",
      icon: "fa fa-code",
    },
    {
      time: `2019.01 - 2021.01`,
      topic: i18n.t("career_title.fullstack"),
      content: i18n.t("job.elco"),
      techs: [
        "Angular8",
        "Vue.js",
        "REST",
        "Chart.js",
        "CSS3",
        "HTML5",
        "Docker",
        "Golang",
      ],
      addr: "ELCO Industrie Automation GmbH, Dresden",
      icon: "fa fa-code",
    },
    {
      time: "2018.07 - 2018.09",
      topic: `${i18n.t("career_title.fullstack")} - ${i18n.t(
        "jobType.workingStudent",
      )}`,
      content: i18n.t("job.fhMap"),
      techs: ["Java", "Kafka", "Websocket", "Leaflet", "CSS3", "HTML5"],
      addr: "Fraunhofer-Institut für Verkehrs- und Infrastruktursysteme IVI",
      icon: "fa fa-code",
    },
    {
      time: "2017.11 - 2018.7",
      topic: i18n.t("career_title.master"),
      content: i18n.t("job.master"),
      techs: ["Spark", "Apache Hadoop", "Jupyter Notebook", "Python"],
      addr: `${i18n.t("university.TUD")}, Dresden`,
      icon: "fa fa-code",
    },
    {
      time: "2017.04 - 2017.10",
      topic: `${i18n.t("career_title.fullstack")} - ${i18n.t(
        "jobType.workingStudent",
      )}`,
      content: i18n.t("job.fhGlobal"),
      techs: [
        "Java",
        "Postgre",
        "HTML5",
        "JQuery",
        "WebSocket",
        "Kafka",
        "D3.js",
        "CSS3",
      ],
      addr: "Fraunhofer-Institut für Verkehrs- und Infrastruktursysteme IVI",
      icon: "fa fa-code",
    },
    {
      time: "2016.07 - 2016.09",
      topic: `${i18n.t("career_title.fullstack")} - ${i18n.t(
        "jobType.workingStudent",
      )}`,
      content: i18n.t("job.bau"),
      techs: ["Java", "Node.js", "JavaScript", "HTML5", "CSS3"],
      addr: `${i18n.t("university.TUD")}, Bauingenieurwiessen`,
      icon: "fa fa-code",
    },
  ];

  public frontend: string[] = [
    "JavaScript",
    "Vue2/3",
    "Angular8",
    "Vite",
    "Webpack",
    "D3.js",
    "Chart.js",
    "CSS/SASS",
    "HTML5",
    "Cypress",
    "Jest",
  ];

  public backend: string[] = ["Node.js", "Java", "Maven", "Golang"];

  public database: string[] = ["MySQL", "Postgre", "MongoDB"];

  public other: string[] = [
    "Hadoop",
    "Spark",
    "Python",
    "Data Mining",
    "C/C++",
    "REST",
    "Websocket",
    "Git",
    "SVN",
    "Docker",
    "Scrum",
  ];
}
</script>
