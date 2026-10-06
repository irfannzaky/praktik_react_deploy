import { useState } from 'react'
import Bike from './components/Bike'
import Ticket from './components/Ticket'
import { CC, SERVICES, rupiah, round1000, isPlateValid, formatPlate } from './data'

export default function App() {
  const [plat, setPlat] = useState('')
  const [cc, setCc] = useState(null)
  const [selected, setSelected] = useState([])
  const [done, setDone] = useState(false)

  const c = CC.find((x) => x.id === cc)
  const total = c
    ? round1000(selected.reduce((a, id) => a + SERVICES.find((s) => s.id === id).p, 0) * c.m)
    : 0
  const platOk = isPlateValid(plat)
  const valid = platOk && c && selected.length > 0

  const toggle = (id) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  const reset = () => {
    setDone(false)
    setPlat('')
    setCc(null)
    setSelected([])
  }

  if (done) {
    return <Ticket plat={plat} cc={cc} selected={selected} total={total} onReset={reset} />
  }

  return (
    <div className="wrap">
      <div className="hero">
        <div className="hr"><h1>Bengkel Motor Merah Putih</h1></div>
        <div className="hw">Isi plat, pilih kelas cc, centang servis. Selesai.</div>
      </div>

      <Bike cc={cc} go={platOk} />

      <label className="t">1 · Plat nomor</label>
      <div className="plate">
        <input
          value={plat}
          placeholder="BK 1234 ABC"
          maxLength={11}
          autoCapitalize="characters"
          aria-label="Plat nomor"
          onChange={(e) => setPlat(formatPlate(e.target.value))}
        />
      </div>
      <div className="hint">
        {plat && !platOk ? 'Format: huruf daerah, angka, huruf belakang' : platOk ? '✓ Plat valid, mesin siap dipanaskan' : ''}
      </div>

      <label className="t">2 · Kelas mesin</label>
      <div className="cc">
        {CC.map((x) => (
          <button key={x.id} className={cc === x.id ? 'on' : ''} onClick={() => setCc(x.id)}>
            <b>{x.label}</b>
            <span>{x.range}</span>
          </button>
        ))}
      </div>

      <label className="t">3 · Opsi servis</label>
      <div className="sv">
        {SERVICES.map((s) => {
          const on = selected.includes(s.id)
          return (
            <button key={s.id} className={on ? 'on' : ''} onClick={() => toggle(s.id)}>
              <div className="ic">{s.ic}</div>
              <div className="tx"><b>{s.name}</b><span>{s.desc}</span></div>
              <div className="ck">{on ? '✓' : ''}</div>
            </button>
          )
        })}
      </div>

      <div className="bar">
        <div>
          <small>Estimasi biaya</small>
          <strong>{c && selected.length ? rupiah(total) : 'Rp -'}</strong>
        </div>
        <button className="btn" disabled={!valid} onClick={() => setDone(true)}>Ambil Antrean</button>
      </div>
    </div>
  )
}
