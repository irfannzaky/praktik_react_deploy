import { CC } from '../data'

function Wheel({ x }) {
  return (
    <g>
      <circle cx={x} cy="160" r="46" fill="#151515" />
      <circle cx={x} cy="160" r="46" fill="none" stroke="#2b2b2b" strokeWidth="2" strokeDasharray="3 4" />
      <circle cx={x} cy="160" r="33" fill="#e9ecef" stroke="#9aa0a6" strokeWidth="2" />
      <g className="wheel">
        {[0, 72, 144, 216, 288].map((a) => (
          <path key={a} d={`M${x} 160 L${x - 5} 130 L${x + 5} 130 Z`} fill="#6b7078" transform={`rotate(${a} ${x} 160)`} />
        ))}
      </g>
      <circle cx={x} cy="160" r="19" fill="none" stroke="var(--acc)" strokeWidth="3" />
      <circle cx={x} cy="160" r="7" fill="#444" />
    </g>
  )
}

export default function Bike({ cc, go }) {
  const c = CC.find((x) => x.id === cc)
  return (
    <div className={'stage' + (go ? ' go' : '')}>
      <svg viewBox="0 0 400 230" aria-label="Ilustrasi motor sport">
        <defs>
          <linearGradient id="tk" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ff4d6a" />
            <stop offset="1" stopColor="#a30018" />
          </linearGradient>
          <linearGradient id="en" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5c6068" />
            <stop offset="1" stopColor="#23252a" />
          </linearGradient>
          <linearGradient id="ex" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f1f3f5" />
            <stop offset="1" stopColor="#868e96" />
          </linearGradient>
        </defs>

        <ellipse cx="205" cy="208" rx="165" ry="9" fill="#000" opacity=".18" />

        <g className="bike" style={{ transform: `scale(${c ? c.sc : 0.95})`, transformOrigin: '205px 205px' }}>
          <Wheel x={95} />
          <Wheel x={315} />

          {/* swingarm & knalpot */}
          <path d="M95 160 L195 150" stroke="#2b2d31" strokeWidth="9" strokeLinecap="round" />
          <path d="M205 168 Q150 182 62 160" fill="none" stroke="url(#ex)" strokeWidth="11" strokeLinecap="round" />
          <path d="M62 160 l-8 -2" stroke="#444" strokeWidth="12" strokeLinecap="round" />

          {/* garpu depan & cakram */}
          <path d="M315 160 L290 92" stroke="#c9ccd1" strokeWidth="6" strokeLinecap="round" />
          <path d="M315 160 L304 128" stroke="#e9ecef" strokeWidth="9" strokeLinecap="round" />
          <circle cx="315" cy="160" r="14" fill="none" stroke="#adb5bd" strokeWidth="2" />

          {/* mesin */}
          <rect x="150" y="118" width="96" height="52" rx="12" fill="url(#en)" />
          {[160, 172, 184, 196].map((x) => (
            <line key={x} x1={x} y1="124" x2={x} y2="136" stroke="#8d9299" strokeWidth="3" />
          ))}
          <rect x="210" y="132" width="26" height="24" rx="6" fill="#14161a" />

          {/* tail, jok, tangki */}
          <path d="M72 104 Q96 86 128 92 L180 98 L184 112 L118 114 Q88 114 72 104 Z" fill="url(#tk)" />
          <path d="M112 92 Q140 80 182 94 L186 106 L112 106 Z" fill="#1a1a1c" />
          <path d="M180 100 Q200 70 252 80 L276 104 Q230 116 186 112 Z" fill="url(#tk)" />
          <path d="M196 98 Q220 86 262 90" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" />

          {/* fairing, kaca, lampu */}
          <path d="M262 78 L306 70 Q322 84 306 112 L274 114 Z" fill="url(#tk)" />
          <path d="M280 74 L300 50 L312 64 L304 70 Z" fill="#cfe8ff" opacity=".55" />
          <path d="M296 84 Q310 82 316 92 Q308 100 296 98 Z" fill="#fff9c4" />
          <ellipse className="glow" cx="322" cy="92" rx="34" ry="10" fill="#fff" opacity=".55" />

          {/* spatbor, setang, lampu belakang */}
          <path d="M284 118 Q320 96 352 130" fill="none" stroke="var(--acc)" strokeWidth="7" strokeLinecap="round" />
          <path d="M270 76 L252 64 L240 66" fill="none" stroke="#1a1a1c" strokeWidth="6" strokeLinecap="round" />
          <rect x="66" y="98" width="8" height="6" rx="2" fill="#ff2d4a" />
          <path d="M115 122 L195 150" stroke="#2b2d31" strokeWidth="5" strokeLinecap="round" />
        </g>
      </svg>
      <div className="road" />
    </div>
  )
}
