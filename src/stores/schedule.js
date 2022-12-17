import { defineStore } from "pinia";
import { api } from "src/boot/axios";

export const scheduleStore = defineStore("schedule", {
  state: () => ({
    allschedules: 0,
  }),
  getters: {
    one: (state) => {
      if (state.allschedules) {
        return state.allschedules.filter(
          (data) => data.roomName == "Studio One"
        );
      }
    },
    two: (state) => {
      if (state.allschedules) {
        return state.allschedules.filter(
          (data) => data.roomName == "Studio Two"
        );
      }
    },
    three: (state) => {
      if (state.allschedules) {
        return state.allschedules.filter(
          (data) => data.roomName == "Studio Three"
        );
      }
    },
    four: (state) => {
      if (state.allschedules) {
        return state.allschedules.filter(
          (data) => data.roomName == "Studio Four"
        );
      }
    },
    comb: (state) => {
      if (state.allschedules) {
        return state.allschedules.filter(
          (data) => data.roomName == "Comb"
        );
      }
    },
    repre: (state) => {
      if (state.allschedules) {
        return state.allschedules.filter(
          (data) => data.roomName == "Repr"
        );
      }
    },
  },
  actions: {
    async getDaySchedules(day) {
      try {
        const allSc = await api.get(`/api/roomname/${day}`);
        return allSc.data;
      } catch (error) {
        return { inerror: true, message: "failed to connect" };
      }
    },
  },
});
