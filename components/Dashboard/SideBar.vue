<template>
  <div class="bg-white border-end p-3" style="width: 240px">
    <div class="text-center mb-4">
      <img src="/logo.png" alt="Logo" height="60" />
    </div>
    <ul class="nav flex-column">
      <DashboardSideBarLink
        to="/user-dashboard"
        label="Dashboard"
        customClass="fw text-dark"
      >
        <img src="/icons/dash.png" alt="Logo" height="20" width="20" />
      </DashboardSideBarLink>

      <DashboardSideBarLink to="/yourKids" label="Your Kids" customClass="fw text-dark">
        <img src="/icons/yourKids.png" alt="your kids" height="20" width="20" />
      </DashboardSideBarLink>

      <DashboardSideBarLink to="/planning" label="Planning" customClass="fw text-dark">
        <img src="/icons/planning.png" alt="Logo" height="20" width="20" />
      </DashboardSideBarLink>
      <DashboardSideBarLink to="/payments" label="Payments" customClass="fw text-dark">
        <img src="/icons/payments.png" alt="Logo" height="20" width="20" />
      </DashboardSideBarLink>
      <DashboardSideBarLink to="settings" label="Settings" customClass="fw text-dark">
        <img src="/icons/settings.png" alt="Logo" height="20" width="20" />
      </DashboardSideBarLink>
    </ul>
  </div>
</template>
