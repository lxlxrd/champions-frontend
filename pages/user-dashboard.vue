<template>
  <div class="container-fluid">
    <div class="row g-4">
      <div class="col-md-8">
        <div class="row">
          <div class="col-sm-6 mb-3" v-for="(stat, index) in statList" :key="index">
            <DashboardStatsCard
              :title="stat.title"
              :value="stat.value"
              :updatedAt="stat.updatedAt"
              :icon="stat.icon"
            />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <DashboardScheduleCard />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user";

const { stats } = useUserStore();
const statList = [
  {
    title: "Total of your Kids",
    value: stats.kids,
    updatedAt: "July 16, 2023",
    icon: "/icons/statKids.png",
  },
  {
    title: "Total number of training sessions attended",
    value: stats.trainings,
    updatedAt: "July 14, 2023",
    icon: "/icons/statTraining.png",
  },
  {
    title: "Number of matches played",
    value: stats.matches,
    updatedAt: "July 14, 2023",
    icon: "/icons/statMatch.png",
  },
  {
    title: "Number of absences",
    value: stats.absences,
    updatedAt: "July 10, 2023",
    icon: "/icons/statAbsence.png",
  },
];
</script>
