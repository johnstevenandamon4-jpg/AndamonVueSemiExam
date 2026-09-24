<script setup>
import AssignmentItem from './AssignmentItem.vue'
const props = defineProps({ assignments: Array })
const emit = defineEmits(['toggle-submitted', 'remove-assignment'])
</script>

<template>
  <div>
    <div v-if="!assignments || assignments.length === 0">No assignments yet.</div>
    <div v-else>
      <AssignmentItem
        v-for="a in assignments"
        :key="a.id"
        :assignment="a"
        @toggle-submitted="$emit('toggle-submitted', $event)"
        @remove-assignment="$emit('remove-assignment', $event)"
      />
    </div>
  </div>
</template>