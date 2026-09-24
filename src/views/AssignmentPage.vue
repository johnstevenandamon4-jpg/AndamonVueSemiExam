<script setup>
import { ref, watch } from 'vue'

const assignmentName = ref('')
const subject = ref('')
const submissionType = ref('')
const dueDate = ref('')

assignmentName.value = localStorage.getItem('assignmentName') || ''
subject.value = localStorage.getItem('subject') || ''
submissionType.value = localStorage.getItem('submissionType') || ''
dueDate.value = localStorage.getItem('dueDate') || ''

watch(assignmentName, (newValue) => {
  localStorage.setItem('assignmentName', newValue)
})

watch(subject, (newValue) => {
  localStorage.setItem('subject', newValue)
})

watch(submissionType, (newValue) => {
  localStorage.setItem('submissionType', newValue)
})

watch(dueDate, (newValue) => {
  localStorage.setItem('dueDate', newValue)
})

function assignment() {
  alert(`${assignmentName.value}\nSubmitted successfully!`)
}

function clearForm() {
  assignmentName.value = ''
  subject.value = ''
  submissionType.value = ''
  dueDate.value = ''

  localStorage.removeItem('assignmentName')
  localStorage.removeItem('subject')
  localStorage.removeItem('submissionType')
  localStorage.removeItem('dueDate')
}
</script>

<template>
  <div class="container py-5">
    <div class="col-lg-7 mx-auto">

      <div class="card shadow-sm border-0 p-4">

        <h3 class="fw-bold mb-4">
          Assignment Submission
        </h3>

        <form @submit.prevent="assignment">

          <div class="mb-3">
            <label class="form-label fw-semibold">
              Assignment Name
            </label>

            <input
              type="text"
              class="form-control"
              v-model="assignmentName"
              placeholder="Enter an assignment name"
              required
            >
          </div>

          <div class="mb-3">
            <label class="form-label fw-semibold">
              Subject
            </label>

            <input
              type="text"
              class="form-control"
              v-model="subject"
              placeholder="Enter a subject"
              required
            >
          </div>

          <div class="mb-3">
            <label
              for="submissionType"
              class="form-label fw-semibold"
            >
              Submission Type
            </label>

            <select
              id="submissionType"
              class="form-select"
              v-model="submissionType"
              required
            >
              <option value="" disabled>
                Select submission type
              </option>

              <option value="Written Work">
                Written Work
              </option>

              <option value="Programming">
                Programming
              </option>

              <option value="Presentation">
                Presentation
              </option>

              <option value="Project">
                Project
              </option>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label fw-semibold">
              Due Date
            </label>

            <input
              type="date"
              class="form-control"
              v-model="dueDate"
              required
            >
          </div>

          <div class="d-flex gap-2">

            <button
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </button>

            <button
              type="button"
              class="btn btn-outline-danger"
              @click="clearForm"
            >
              Clear
            </button>

          </div>

        </form>

      </div>

    </div>
  </div>
</template>
