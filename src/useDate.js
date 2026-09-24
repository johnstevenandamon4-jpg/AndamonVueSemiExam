export function useDate() {
  function formatDate(dateStr) {
    if (!dateStr) return ''
    const d = new Date(dateStr)
    return d.toLocaleDateString()
  }

  return { formatDate }
}
