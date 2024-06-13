export function useFormatter() {
  const format = (value: number) => {
    return 'Formatted: ' + value.toFixed(2)
  }
  return { format }
}
