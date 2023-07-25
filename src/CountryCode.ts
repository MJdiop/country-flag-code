export function countryCode(code: string) {
  return code.split('').map(l => l.charCodeAt(0) % 32 + 0x1F1E5).map(n => String.fromCodePoint(n)).join('')
}