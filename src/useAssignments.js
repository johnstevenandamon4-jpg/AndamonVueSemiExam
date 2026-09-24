import { ref, computed, watch, onMounted } from 'vue'

export function useAssignments() {
	const assignments = ref([])

	function addAssignment(assignment) {
		assignments.value.push(assignment)
	}

	function removeAssignment(id) {
		assignments.value = assignments.value.filter(a => a.id !== id)
	}

	function toggleSubmitted(id) {
		const rec = assignments.value.find(a => a.id === id)
		if (rec) rec.submitted = !rec.submitted
	}

	const totalCount = computed(() => assignments.value.length)
	const submittedCount = computed(() => assignments.value.filter(a => a.submitted).length)

	onMounted(() => {
		const saved = localStorage.getItem('assignments')
		if (saved) {
			try {
				assignments.value = JSON.parse(saved)
			} catch (e) {
				assignments.value = []
			}
		}
	})

	watch(
		assignments,
		(newVal) => {
			localStorage.setItem('assignments', JSON.stringify(newVal))
		},
		{ deep: true }
	)

	return {
		assignments,
		addAssignment,
		removeAssignment,
		toggleSubmitted,
		totalCount,
		submittedCount,
	}
}