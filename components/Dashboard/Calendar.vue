<template>
  <div class="calendar-container p-3 rounded bg-white shadow-sm">
    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h6 class="fw-bold mb-0">My Schedule</h6>
      <i class="fas fa-calendar-alt text-warning"></i>
    </div>

    <!-- Month Navigation -->
    <div class="d-flex justify-content-between align-items-center mb-2">
      <button class="btn btn-sm btn-outline-warning" @click="previousMonth">
        <i class="fas fa-arrow-left"></i>
      </button>
      <strong>{{ monthLabel }}</strong>
      <button class="btn btn-sm btn-outline-warning" @click="nextMonth">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>

    <!-- Week Days -->
    <div class="d-flex justify-content-between text-center fw-semibold">
      <div v-for="day in days" :key="day" class="w-100 text-muted small">{{ day }}</div>
    </div>

    <!-- Dates Grid -->
    <div class="d-flex flex-wrap mt-2">
      <div
        v-for="(blank, i) in blankDays"
        :key="'blank-' + i"
        class="calendar-cell"
      ></div>

      <div
        v-for="(date, i) in daysInMonth"
        :key="'day-' + i"
        class="calendar-cell text-center"
        :class="{ 'selected': isToday(date), 'clickable': true }"
        @click="selectDate(date)"
      >
        {{ date.getDate() }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const selectedDate = ref(new Date());
const currentMonth = ref(new Date());

const monthLabel = computed(() =>
  currentMonth.value.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  })
);

const daysInMonth = computed(() => {
  const year = currentMonth.value.getFullYear();
  const month = currentMonth.value.getMonth();
  const totalDays = new Date(year, month + 1, 0).getDate();
  return Array.from({ length: totalDays }, (_, i) => new Date(year, month, i + 1));
});

const blankDays = computed(() => {
  const firstDay = new Date(currentMonth.value.getFullYear(), currentMonth.value.getMonth(), 1);
  return Array(firstDay.getDay()).fill(null);
});

const isToday = (date) => {
  return (
    selectedDate.value.toDateString() === date.toDateString()
  );
};

const selectDate = (date) => {
  selectedDate.value = date;
};

const previousMonth = () => {
  currentMonth.value.setMonth(currentMonth.value.getMonth() - 1);
  currentMonth.value = new Date(currentMonth.value); // trigger reactivity
};

const nextMonth = () => {
  currentMonth.value.setMonth(currentMonth.value.getMonth() + 1);
  currentMonth.value = new Date(currentMonth.value); // trigger reactivity
};
</script>

<style scoped>
.calendar-container {
  width: 100%;
  max-width: 100%;
}

.calendar-cell {
  width: 14.28%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  margin-bottom: 5px;
}

.calendar-cell.clickable {
  cursor: pointer;
  border-radius: 50%;
  transition: 0.2s;
}

.calendar-cell.clickable:hover {
  background-color: #f5f5f5;
}

.calendar-cell.selected {
  background-color: #d2910a;
  color: white;
  border-radius: 50%;
}
</style>
