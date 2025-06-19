import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    stats: {
      kids: 23,
      trainings: 15,
      matches: 47,
      absences: 250,
    },
    schedule: [
      {
        time: "09:30",
        competition: "Champions league",
        match: "Champions - Brest",
        date: "2023-07-06",
      },
      {
        time: "12:00",
        competition: "La liga",
        match: "Champions - PSG",
        date: "2023-07-06",
      },
      {
        time: "01:30",
        competition: "La liga",
        match: "Champions - Barça",
        date: "2023-07-06",
      },
      {
        time: "09:30",
        competition: "Bundesliga",
        match: "Champions - Barça",
        date: "2023-07-07",
      },
      {
        time: "11:00",
        competition: "La liga",
        match: "Champions - Barça",
        date: "2023-07-07",
      },
    ],
  }),
});
