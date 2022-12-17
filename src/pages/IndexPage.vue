<template>
  <div class="">
    <q-carousel animated v-model="slide" infinite v-model:fullscreen="fullscreen" :autoplay="10000" swipeable height="100vh" transition-prev="slide-right"
      transition-next="slide-left" class="bg">
      <q-carousel-slide :name="1" class="no">
        <basicVue :time="now" :day="day" :month="month" :date="date" />
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="no">
        <Two :time="now" :day="day" :month="month" :date="date" />
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="no">
        <Three :time="now" :day="day" :month="month" :date="date" />
      </q-carousel-slide>
      <q-carousel-slide :name="4" class="no">
        <Four :time="now" :day="day" :month="month" :date="date" />
      </q-carousel-slide>
      <q-carousel-slide :name="5" class="no">
        <Pres :time="now" :day="day" :month="month" :date="date" />
      </q-carousel-slide>
      <q-carousel-slide :name="6" class="no">
        <comb :time="now" :day="day" :month="month" :date="date" />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { createTime, mapWeekDay, mapMonths } from "src/utils/date"
import { scheduleStore } from "src/stores/schedule"
import { notify } from "src/utils/notify"
import { ref, computed, onMounted } from 'vue'
import basicVue from 'src/components/one.vue';
import Two from 'src/components/two.vue';
import Three from 'src/components/three.vue';
import Four from 'src/components/four.vue';
import Pres from 'src/components/pres.vue';
import comb from 'src/components/comb.vue';

export default {
  components: { basicVue, Two, Three, Four, Pres, comb },

  setup() {
    const dateextr = new Date()
    let one = ref(null)
    let two = ref(null)
    let three = ref(null)
    let four = ref(null)
    let repr = ref(null)
    let comb = ref(null)

    const store = scheduleStore()
    const day = ref(mapWeekDay(dateextr.getDay()))
    const date = ref(String(dateextr.getDate()))
    const month = ref(mapMonths(dateextr.getMonth()))
    const now = ref(null)
    const changed = computed(() => {
      return Date.now()
    })

    const getData = async () => {
      const daySch = await store.getDaySchedules(day.value)
      console.log(daySch)
      if (daySch.inerror) {
        notify(daySch.message)
      } else {
        if (daySch.success) {
          // assigning
          store.allschedules = daySch.body
        }
      }
    }

    onMounted(async () => {
      setInterval(() => {
        now.value = createTime(Date.now());
      }, 500);
      // getting the given day specif schedules
      getData()
      setInterval(() => {
        getData();
      }, 120000);

    })

    return {
      slide: ref(1),
      autoplay: ref(true),
      now,
      changed,
      day,
      date,
      month,
      fullscreen: ref(false)

    }
  }
}
</script>


<style scoped lang="scss">
.bg {
  background-image: url("/correct.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: auto;
  position: absolute;
}
</style>