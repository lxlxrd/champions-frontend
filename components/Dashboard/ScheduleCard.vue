<template>
  <div class="card">
    <DashboardCalendar />
  </div>
  <div class="card ">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <i class="bi bi-calendar-event"></i>
      </div>
      <p class="text-muted mb-2">July, 2023</p>
      <ul class="list-unstyled">
        <li v-for="item in schedule" :key="item.time" class="mb-2">
          <strong>{{ item.time }}</strong> - {{ item.match }}<br />
          <small class="text-muted">{{ item.competition }} ({{ item.date }})</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const { schedule } = useUserStore();
</script>
