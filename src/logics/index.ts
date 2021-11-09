import dayjs from 'dayjs'

export const isDark = useDark()
export const toggleDark = useToggle(isDark)

export function formatDate(d: string | Date) {
  const date = dayjs(d)
  if (date.year() === dayjs().year())
    return date.format('MM-DD')
  return date.format('YYYY-MM-DD')
}
