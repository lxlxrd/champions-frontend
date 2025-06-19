<template>
  <div class="container py-5">

    <!-- Box with options -->
    <div class="bg-white p-4 rounded shadow-sm">
      <div class="d-flex justify-content-between align-items-center border-bottom py-3">
        <div>
          <div class="fw-semibold">Appearance</div>
          <small class="text-muted">Customize how your theme looks on your device</small>
        </div>
        <select class="form-select w-auto">
          <option selected>Light</option>
          <option>Dark</option>
        </select>
      </div>

      <div class="d-flex justify-content-between align-items-center border-bottom py-3">
        <div>
          <div class="fw-semibold">Language</div>
          <small class="text-muted">Select your language</small>
        </div>
        <select class="form-select w-auto">
          <option selected>English</option>
          <option>French</option>
        </select>
      </div>

      <div class="d-flex justify-content-between align-items-center border-bottom py-3">
        <div>
          <div class="fw-semibold">Two-factor Authentication</div>
          <small class="text-muted">Keep your account secure by enabling 2FA via mail</small>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" checked />
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center border-bottom py-3">
        <div>
          <div class="fw-semibold">Mobile Push Notifications</div>
          <small class="text-muted">Receive push notification</small>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" checked />
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center border-bottom py-3">
        <div>
          <div class="fw-semibold">Desktop Notification</div>
          <small class="text-muted">Receive push notification in desktop</small>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" checked />
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center py-3">
        <div>
          <div class="fw-semibold">Email Notifications</div>
          <small class="text-muted">Receive email notification</small>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" checked />
        </div>
      </div>
    </div>
  </div>
</template>


