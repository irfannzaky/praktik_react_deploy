import { CC, SERVICES, rupiah, round1000 } from '../data'

export default function Ticket({ plat, cc, selected, total, onReset }) {
  const c = CC.find((x) => x.id === cc)
  const no = (Number(plat.replace(/\D/g, '')) % 90) + 10
  return (
    <div className="wrap">
      <div className="ticket">
        <div>🎟️ Nomor Antrean</div>
        <div className="no">A-{no}</div>
        <div className="ticket-plat">{plat}</div>
        <ul>
          <li><span>Kelas mesin</span><b>{c.range}</b></li>
          {selected.map((id) => {
            const s = SERVICES.find((x) => x.id === id)
            return (
              <li key={id}>
                <span>{s.ic} {s.name}</span>
                <b>{rupiah(round1000(s.p * c.m))}</b>
              </li>
            )
          })}
          <li><b>Estimasi total</b><b>{rupiah(total)}</b></li>
        </ul>
        <p className="hint">Harga hanya contoh perkiraan; biaya final mengikuti pemeriksaan mekanik.</p>
        <button className="btn ghost" onClick={onReset}>Daftar motor lain</button>
      </div>
    </div>
  )
}
