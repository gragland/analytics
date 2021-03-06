import inBrowser from '../inBrowser'

export default function getBrowserOS() {
  if (!inBrowser) return false
  const os = navigator.appVersion
  // ~os bitwise operator to check if in navigator
  if (~os.indexOf('Win')) return 'Windows'
  if (~os.indexOf('Mac')) return 'MacOS'
  if (~os.indexOf('X11')) return 'UNIX'
  if (~os.indexOf('Linux')) return 'Linux'
  // default
  return 'Unknown OS'
}
