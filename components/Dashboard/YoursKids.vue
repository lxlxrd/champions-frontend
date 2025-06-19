<template>
  <div class="container my-4 p-4 bg-white rounded shadow-sm">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <!-- Search -->
      <div class="input-group w-25">
        <span class="input-group-text bg-white border-end-0">
          <i class="fas fa-search"></i>
        </span>
        <input type="text" class="form-control border-start-0" placeholder="Search" v-model="searchTerm" />
      </div>

      <!-- Buttons -->
      <div class="d-flex gap-2">
        <button class="btn btn-warning text-white">
          <i class="fas fa-plus-circle me-1"></i> Add New Kid
        </button>
        <button class="btn btn-outline-secondary">
          <i class="fas fa-sliders-h me-1"></i> Filter
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="table-responsive">
      <table class="table align-middle">
        <thead class="table-light">
          <tr>
            <th scope="col">Kid Name</th>
            <th scope="col">Birth Date</th>
            <th scope="col">Genre</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="kid in filteredKids" :key="kid.id">
            <td class="d-flex align-items-center">
              <img :src="kid.avatar" class="rounded-circle me-2" width="32" height="32" />
              {{ kid.name }}
            </td>
            <td>{{ kid.birthdate }}</td>
            <td>{{ kid.gender }}</td>
            <td><span class="badge bg-warning text-dark">Actif</span></td>
            <td>
              <button class="btn btn-sm btn-outline-secondary me-1"><i class="fas fa-eye"></i></button>
              <button class="btn btn-sm btn-outline-primary me-1"><i class="fas fa-pen"></i></button>
              <button class="btn btn-sm btn-outline-danger"><i class="fas fa-trash"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
const searchTerm = ref("")

const kids = ref([
  {
    id: 1,
    name: "Darlene Robertson",
    birthdate: "27 - 04 - 2008",
    gender: "Male",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Floyd Miles",
    birthdate: "26 - 04 - 2010",
    gender: "Female",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Cody Fisher",
    birthdate: "25 - 05 - 2012",
    gender: "Male",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg"
  }
])

const filteredKids = computed(() =>
  kids.value.filter((kid) =>
    kid.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
)
</script>

<style scoped>
input::placeholder {
  color: #b0b0b0;
}
</style>
