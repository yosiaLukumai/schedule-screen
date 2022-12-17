<template>
  <div class="row " style="padding:none !important; margin:none !important;">
    <div class="col-8  blacked borderleft">
      <div class="q-pt-xl text-primary text-h4 q-pl-xl text-weight-bolder ">Architectural <span
          class="text-italic">Studio Four</span> </div>
      <div class="q-pt-xl">
      </div>
      <div class="q-pt-md">
      </div>
      <div class="blured" v-if="currentSche">
        <div class="q-pa-lg q-py-md text-white " style="width:100%">
          <div class="text-h4 q-pl-lg text-weight-bolder">{{ currentSche?.subjectName }}
            ({{ currentSche?.codename }})</div>
          <div class="text-h4  q-pl-lg  q-pt-sm text-weight-bolder">{{ createTime(currentSche?.startTime) }} -
            {{ createTime(currentSche.endTime) }}</div>
          <div class="q-pt-sm  q-pl-lg  text-italic text-bold text-h6">{{ currentSche?.teacher }} <span
              class="text-primary">--</span> {{ currentSche?.classLevel }}</div>
        </div>
      </div>
      <div v-else class="blured">
        <div class="q-py-xl q-pl-xl text-h4 text-weight-bolder text-white">No. Schedule</div>
      </div>
    </div>
    <div class="col-4 darked" style="height: 99.8vh;">
      <div class="q-pa-md">
        <div class="q-pt-md text-h1 text-bold text-white text-center">
          {{ time }}
        </div>
        <div class="text-center text-bold text-h6 text-white">{{ day }}, {{ month.slice(0, 3) }} {{ date }}</div>
      </div>

      <div class="q-pt-md">
        <div class="text-h6 q-pl-md text-bold text-white underline">Coming up</div>
        <upcomingVue :upComing="upComing" />
      </div>
    </div>
  </div>
</template>
  
<script>
import upcomingVue from "./upcoming.vue"

import { filterLater, checkInBetween, createTime } from "src/utils/date"
import { scheduleStore } from "src/stores/schedule"
import { ref, onMounted } from "vue"
export default {
  components: { upcomingVue },
  props: {
    time: {
      type: String,
      default: "12:34"
    },
    day: {
      type: String,
      default: "Thursday"
    },
    month: {
      type: String,
      default: "December"
    },
    date: {
      type: String,
      default: "15"
    },
    roomData: {
      type: Array
    }
  },
  setup(props) {
    const str = scheduleStore()
    const data = ref(str.four)
    const currentSche = ref(null)
    const upComing = ref(null)
    onMounted(() => {
      upComing.value = filterLater(data.value).slice(0, 3)
      currentSche.value = checkInBetween(data.value)
    })
    return { upComing, createTime, currentSche }
  }
}
</script>
  
<style scoped lang="scss">
.borderleft {
  border-left: 14px solid $secondary;
}
</style>