<template>
  <pv-dialog
      header="Request Details"
      :visible="visible"
      :modal="true"
      :closable="true"
      :style="{ width: '500px' }"
      class="detail-dialog"
      @update:visible="$emit('update:visible', $event)"
  >

    <div v-if="request">
      <p><strong>Order Number:</strong> {{ request.orderNumber }}</p>
      <p><strong>Priority:</strong> {{ request.priority }}</p>
      <p><strong>Status:</strong> {{ request.status.replace('_', ' ') }}</p>
      <p><strong>Description:</strong> {{ request.description }}</p>
      <p><strong>Equipment:</strong> {{ equipmentDisplay }}</p>
      <p><strong>Location:</strong> {{ locationDisplay }}</p>
      <p><strong>Service Type:</strong> {{ request.serviceType }}</p>
      <p><strong>Urgency:</strong> {{ request.urgency }}</p>
      <p><strong>ASAP:</strong> {{ request.asap ? 'Yes' : 'No' }}</p>
      <p v-if="!request.asap"><strong>Scheduled Date:</strong> {{ formatDate(request.scheduledDate) }}</p>
      <p v-if="!request.asap"><strong>Time Slot:</strong> {{ request.timeSlot || '-' }}</p>
      <p><strong>Address:</strong> {{ request.serviceAddress || 'Not specified' }}</p>
      <p><strong>Technician:</strong> {{ request.technicianId || 'Not assigned' }}</p>
      <p><strong>Completed:</strong> {{ formatDate(request.completionDate) }}</p>
    </div>
  </pv-dialog>
</template>

<script>
export default {
  name: "ServiceRequestDetailModal",
  props: {
    visible: Boolean,
    request: Object,
    equipmentDisplay: String,
    locationDisplay: String
  },
  emits: ["update:visible"],
  methods: {
    formatDate(date) {
      if (!date) return "Not defined";
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>

<style>
.p-dialog-content {
  background-color: #e0f7fa ;
  border-radius: 8px;
  padding: 1rem;
}

.p-dialog .p-dialog-header {
  background-color: #b2ebf2 ;
  font-weight: bold;
}
</style>
