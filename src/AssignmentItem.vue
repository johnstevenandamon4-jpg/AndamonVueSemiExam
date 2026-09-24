<script setup>
import { useDate } from './useDate'

const props = defineProps({ assignment: Object })
const emit = defineEmits(['toggle-submitted', 'remove-assignment'])

const { formatDate } = useDate()

function toggle() { emit('toggle-submitted', props.assignment.id) }
function removeIt() { emit('remove-assignment', props.assignment.id) }
</script>

<template>
  <div class="card mb-2 p-2">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <div><strong>{{ assignment.name }}</strong></div>
        <div class="small text-muted">{{ assignment.subject }} — {{ assignment.type }}</div>
        <div class="small">Due: {{ formatDate(assignment.due) }}</div>
      </div>
      <div class="d-flex gap-2">
        <button class="btn btn-sm" :class="assignment.submitted ? 'btn-success' : 'btn-outline-secondary'" @click="toggle">
          {{ assignment.submitted ? 'Submitted' : 'Mark as Submitted' }}
        </button>
        <button class="btn btn-sm btn-danger" @click="removeIt">Delete</button>
      </div>
    </div>
  </div>
</template>