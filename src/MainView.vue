<script setup>
import { ref } from 'vue'
import { useAssignments } from './useAssignments'
import AssignmentForm from './AssignmentForm.vue'
import AssignmentList from './AssignmentList.vue'

const { assignments, addAssignment, removeAssignment, toggleSubmitted, totalCount, submittedCount } = useAssignments()

function handleAdd(payload) {
  addAssignment(payload)
}

function handleToggle(id) {
  toggleSubmitted(id)
}

function handleRemove(id) {
  removeAssignment(id)
}
</script>

<template>
  <div class="container py-4">
    <div class="row">
      <div class="col-md-6">
        <AssignmentForm @add-assignment="handleAdd" />
      </div>
      <div class="col-md-6">
        <h5>Assignments ({{ totalCount }}) — Submitted: {{ submittedCount }}</h5>
        <AssignmentList
          :assignments="assignments"
          @toggle-submitted="handleToggle"
          @remove-assignment="handleRemove"
        />
      </div>
    </div>
  </div>
</template>