<template>
  <div class="border rounded p-3" style="border-color: #3d8bfd">
    <div class="row">
      <!-- Sidebar -->
      <div class="col-3 border-end">
        <ul class="list-group">
          <li
            v-for="(item, index) in leagues"
            :key="index"
            class="list-group-item d-flex align-items-center border-0"
            :class="{
              'bg-warning text-white': selectedLeague === item.name,
              'text-dark': selectedLeague !== item.name,
            }"
            style="cursor: pointer"
            @click="selectLeague(item.name)"
          >
            <i class="fas fa-trophy me-2"></i> {{ item.name }}
          </li>
        </ul>
      </div>

      <!-- Match Table -->
      <div class="col-9">
        <table class="table">
          <thead>
            <tr class="text-muted small">
              <th>Sr. No.</th>
              <th>Match</th>
              <th>Start Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(match, index) in filteredMatches" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ match.name }}</td>
              <td>{{ match.date }}</td>
              <td>
                <span
                  class="badge"
                  :class="{
                    'bg-success bg-opacity-25 text-success': match.status === 'Completed',
                    'bg-warning bg-opacity-25 text-warning':
                      match.status === 'In Process',
                  }"
                >
                  {{ match.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const leagues = [
  { name: "Champions league" },
  { name: "Première ligue" },
  { name: "Liga" },
  { name: "Bundesliga" },
];

const selectedLeague = ref("Liga");

const allMatches = [
  {
    league: "Liga",
    name: "Champions - Arsenal",
    date: "Feb 01, 2023",
    status: "Completed",
  },
  { league: "Liga", name: "Champions - Psg", date: "Feb 12, 2023", status: "Completed" },
  {
    league: "Liga",
    name: "Champions - Brest",
    date: "April 05, 2023",
    status: "In Process",
  },
  {
    league: "Liga",
    name: "Champions - Brest",
    date: "May 12, 2023",
    status: "In Process",
  },
];

const filteredMatches = computed(() =>
  allMatches.filter((match) => match.league === selectedLeague.value)
);

const selectLeague = (league) => {
  selectedLeague.value = league;
};
</script>
