<template>
  <div class="container py-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="fw-bold">Payments</h3>
      <div class="d-flex gap-2">
        <button class="btn btn-outline-secondary">
          <i class="fas fa-filter me-1"></i> Filter
        </button>
        <button class="btn btn-outline-secondary">
          <i class="fas fa-file-export me-1"></i> Export
        </button>
        <button class="btn btn-warning text-white">+ Create payment</button>
      </div>
    </div>

    <!-- Tabs -->
    <ul class="nav nav-tabs mb-3">
      <li class="nav-item">
        <a class="nav-link active" href="#">All</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-warning" href="#">Succeeded</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-secondary" href="#">On pending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-secondary" href="#">Refused</a>
      </li>
    </ul>

    <!-- Table -->
    <div class="table-responsive">
      <table class="table align-middle">
        <thead class="table-light">
          <tr>
            <th scope="col"><input type="checkbox" /></th>
            <th scope="col">AMOUNT</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">DATE</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 5" :key="n">
            <td><input type="checkbox" /></td>
            <td>US$39.99 <span class="badge bg-success ms-2">Succeeded ✓</span></td>
            <td class="text-muted">0d7b6ac7-dbda-4157-bae9-e64749e538f5</td>
            <td>7 Jul, 14:01</td>
            <td><i class="fas fa-ellipsis-h"></i></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="d-flex justify-content-between mt-3 text-muted">
      <span>5 results</span>
      <div>
        <button class="btn btn-link text-decoration-none text-muted" disabled>
          Previous
        </button>
        <button class="btn btn-link text-decoration-none">Next</button>
      </div>
    </div>
  </div>
</template>
