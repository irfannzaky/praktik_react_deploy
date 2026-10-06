// Data kelas mesin (cc) dan opsi servis. Harga hanya contoh perkiraan.
export const CC = [
  { id: 's', label: 'Kecil', range: '≤ 110 cc', m: 1, sc: 0.85 },
  { id: 'm', label: 'Sedang', range: '125–160 cc', m: 1.4, sc: 1 },
  { id: 'l', label: 'Besar', range: '≥ 250 cc', m: 2.2, sc: 1.12 },
]

export const SERVICES = [
  { id: 'oli', ic: '🛢️', name: 'Ganti Oli', desc: 'Oli mesin + cek kebocoran', p: 55000 },
  { id: 'ringan', ic: '🔧', name: 'Servis Ringan', desc: 'Tune up, setel kopling & gas', p: 70000 },
  { id: 'besar', ic: '⚙️', name: 'Servis Besar', desc: 'Turun mesin & bersih ruang bakar', p: 250000 },
  { id: 'rem', ic: '🛑', name: 'Rem', desc: 'Kampas rem & minyak rem', p: 60000 },
  { id: 'cvt', ic: '🌀', name: 'Rantai / CVT', desc: 'Bersih & ganti V-belt atau rantai', p: 90000 },
  { id: 'busi', ic: '⚡', name: 'Busi & Aki', desc: 'Ganti busi, cek tegangan aki', p: 65000 },
]

export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID')
export const round1000 = (n) => Math.round(n / 1000) * 1000

// Format plat Indonesia: 1-2 huruf, 1-4 angka, 1-3 huruf
export const isPlateValid = (v) => /^[A-Z]{1,2} \d{1,4} [A-Z]{1,3}$/.test(v)

export function formatPlate(raw) {
  const s = raw.toUpperCase().replace(/[^A-Z0-9]/g, '')
  const m = s.match(/^([A-Z]{0,2})(\d{0,4})([A-Z]{0,3})/) || []
  return [m[1], m[2], m[3]].filter(Boolean).join(' ')
}
