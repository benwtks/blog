export function setup_selectable () {
  const selectable = '{{ .Site.Params.selectable }}'
  if (selectable === 'false') {
    document.documentElement.style = 'user-select:none'
  }
}