<template>
  <div class="card">
    <div class="card-body p-0">
      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="d-flex">
            <div class="me-3">
              <i class="fas fa-bell text-warning"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-0">Upcoming Match</h6>
              <small class="text-muted">Alex should be ready for Champions vs Psg!</small>
            </div>
          </div>
          <small class="text-muted">Just Now</small>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="d-flex">
            <div class="me-3">
              <i class="fas fa-bell text-warning"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-0">New Training Added</h6>
              <small class="text-muted">Check the schedule</small>
            </div>
          </div>
          <small class="text-muted">11:16 AM</small>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="d-flex">
            <div class="me-3">
              <i class="fas fa-bell text-warning"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-0">Selection Notice</h6>
              <small class="text-muted">Your child has been selected!</small>
            </div>
          </div>
          <small class="text-muted">09:00 AM</small>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="d-flex">
            <div class="me-3">
              <i class="fas fa-bell text-warning"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-0">Payment Confirmed</h6>
              <small class="text-muted">Thank you for your payment.</small>
            </div>
          </div>
          <small class="text-muted">Yesterday</small>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="d-flex">
            <div class="me-3">
              <i class="fas fa-lock text-warning"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-0">Password Update successfully</h6>
              <small class="text-muted"
                >Your password has been updated successfully</small
              >
            </div>
          </div>
          <small class="text-muted">Yesterday</small>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// aucun script requis pour cet affichage statique
</script>

<style scoped>
.card {
  border-radius: 8px;
}
.list-group-item {
  border: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
