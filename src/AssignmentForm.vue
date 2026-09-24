<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-assignment'])

const name = ref('')
const subject = ref('')
const type = ref('')
const due = ref('')
const formError = ref('')

function submit() {
  if (!name.value.trim() || !subject.value.trim() || !type.value || !due.value) {
    formError.value = 'Please complete all required fields before adding an assignment.'
    return
  }

  const newRec = {
    id: Date.now().toString(),
    name: name.value.trim(),
    subject: subject.value.trim(),
    type: type.value,
    due: due.value,
    submitted: false,
    createdAt: new Date().toISOString()
  }

  formError.value = ''
  emit('add-assignment', newRec)
  name.value = ''
  subject.value = ''
  type.value = ''
  due.value = ''
}
</script>

<template>
  <div class="card p-3">
    <h4>Add Assignment</h4>
    <form @submit.prevent="submit">
      <div class="mb-2">
        <label class="form-label">Assignment Name</label>
        <input v-model="name" class="form-control" placeholder="Assignment name" required />
      </div>
      <div class="mb-2">
        <label class="form-label">Subject</label>
        <input v-model="subject" class="form-control" placeholder="Subject" required />
      </div>
      <div class="mb-2">
        <label class="form-label">Submission Type</label>
        <select v-model="type" class="form-select" required>
          <option value="" disabled>Select type</option>
          <option>Written Work</option>
          <option>Programming</option>
          <option>Presentation</option>
          <option>Project</option>
        </select>
      </div>
      <div class="mb-2">
        <label class="form-label">Due Date</label>
        <input type="date" v-model="due" class="form-control" required />
      </div>
      <p v-if="formError" class="text-danger small">{{ formError }}</p>
      <button class="btn btn-primary" type="submit">Add Assignment</button>
    </form>
  </div>
</template>
