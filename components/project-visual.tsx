/**
 * Illustrative previews for projects that have no screenshots yet.
 * Each is a small diagram of what the project does, using its own nouns,
 * drawn in the site palette. Names and values are sample data; swap for
 * real screenshots when available.
 */

export type VisualKind =
  | 'rental-web'
  | 'video'
  | 'storefront'
  | 'estimator'
  | 'chat'
  | 'fitness'
  | 'rental-desktop'
  | 'leaderboard'
  | 'automata'

const INK3 = 'var(--ink-3)'
const INK4 = 'var(--ink-4)'
const LINE = 'oklch(1 0 0 / 0.1)'
const TEXT = 'var(--text)'
const TEXT2 = 'var(--text-2)'
const TEXT3 = 'var(--text-3)'
const EMBER = 'var(--ember)'
const ICE = 'var(--ice)'
const LIVE = 'var(--live)'
const MONO = 'var(--font-mono)'

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 400 240" role="img" aria-label={label} className="h-full w-full">
      <rect x="0.5" y="0.5" width="399" height="239" rx="12" fill="var(--ink)" stroke={LINE} />
      <circle cx="18" cy="16" r="3.5" fill={INK4} />
      <circle cx="30" cy="16" r="3.5" fill={INK4} />
      <circle cx="42" cy="16" r="3.5" fill={INK4} />
      <line x1="0" y1="31.5" x2="400" y2="31.5" stroke={LINE} />
      <text x="388" y="19.5" textAnchor="end" fill={TEXT3} fontSize="8.5" fontFamily={MONO}>
        Illustrative preview
      </text>
      {children}
    </svg>
  )
}

export default function ProjectVisual({ kind, title }: { kind: VisualKind; title: string }) {
  const label = `Illustrative preview of ${title}`

  switch (kind) {
    case 'rental-web':
      return (
        <Frame label={label}>
          <rect x="12" y="44" width="84" height="184" rx="8" fill={INK3} />
          {['Overview', 'Rooms', 'Tenants', 'Billing', 'Reports'].map((item, i) => (
            <g key={item}>
              {i === 1 && <rect x="18" y={52 + i * 24} width="72" height="20" rx="5" fill="oklch(0.7 0.19 38 / 0.16)" />}
              <text x="26" y={66 + i * 24} fill={i === 1 ? EMBER : TEXT3} fontSize="10" fontFamily={MONO}>
                {item}
              </text>
            </g>
          ))}
          {[
            ['Occupied', '12', EMBER],
            ['Vacant', '4', TEXT],
            ['Due', '3', ICE],
          ].map(([name, value, color], i) => (
            <g key={name}>
              <rect x={106 + i * 94} y="44" width="86" height="50" rx="8" fill={INK3} />
              <text x={116 + i * 94} y="62" fill={TEXT3} fontSize="9" fontFamily={MONO}>{name}</text>
              <text x={116 + i * 94} y="84" fill={color} fontSize="17" fontWeight="700" fontFamily={MONO}>{value}</text>
            </g>
          ))}
          <rect x="106" y="104" width="274" height="124" rx="8" fill={INK3} />
          <text x="118" y="122" fill={TEXT3} fontSize="9" fontFamily={MONO}>Floor 1</text>
          {['A-101', 'A-102', 'A-103', 'A-104', 'A-105', 'A-106', 'A-107', 'A-108'].map((room, i) => {
            const taken = [0, 2, 3, 5, 6].includes(i)
            const x = 118 + (i % 4) * 64
            const y = 132 + Math.floor(i / 4) * 44
            return (
              <g key={room}>
                <rect
                  x={x}
                  y={y}
                  width="56"
                  height="36"
                  rx="6"
                  fill={taken ? 'oklch(0.7 0.19 38 / 0.18)' : INK4}
                  stroke={taken ? EMBER : 'none'}
                  strokeOpacity="0.7"
                />
                <text x={x + 28} y={y + 22} textAnchor="middle" fill={taken ? TEXT : TEXT3} fontSize="9.5" fontFamily={MONO}>
                  {room}
                </text>
              </g>
            )
          })}
        </Frame>
      )

    case 'video':
      return (
        <Frame label={label}>
          <rect x="60" y="42" width="280" height="112" rx="8" fill={INK3} />
          <text x="200" y="84" textAnchor="middle" fill={TEXT} fontSize="17" fontWeight="700">
            Ship faster.
          </text>
          <text x="200" y="102" textAnchor="middle" fill={TEXT3} fontSize="9" fontFamily={MONO}>
            Product launch · 0:12 / 0:45
          </text>
          <circle cx="200" cy="128" r="11" fill="oklch(1 0 0 / 0.1)" />
          <path d="M196.5 122.5 L205 128 L196.5 133.5 Z" fill={TEXT} />
          <rect x="24" y="166" width="352" height="4" rx="2" fill={INK3} />
          <rect x="24" y="166" width="94" height="4" rx="2" fill={EMBER} />
          <circle cx="118" cy="168" r="5" fill={EMBER} />
          {[
            ['Intro', 24, 70, ICE],
            ['Demo', 98, 110, EMBER],
            ['Feature', 212, 60, ICE],
            ['CTA', 276, 100, LIVE],
          ].map(([name, x, w, color]) => (
            <g key={name as string}>
              <rect x={x as number} y="184" width={w as number} height="30" rx="6" fill={color as string} opacity="0.22" />
              <text x={(x as number) + 8} y="203" fill={TEXT} fontSize="9" fontFamily={MONO}>
                {name as string}
              </text>
            </g>
          ))}
        </Frame>
      )

    case 'storefront':
      return (
        <Frame label={label}>
          <text x="16" y="57" fill={TEXT} fontSize="13" fontWeight="700">
            Storia
          </text>
          <rect x="220" y="44" width="164" height="18" rx="9" fill={INK3} />
          <text x="232" y="56" fill={TEXT3} fontSize="9" fontFamily={MONO}>
            Search stores…
          </text>
          {[
            ['Tote bag', '$24', EMBER],
            ['Ceramic mug', '$18', ICE],
            ['Desk lamp', '$39', LIVE],
            ['Notebook', '$12', INK4],
          ].map(([name, price, color], i) => (
            <g key={name}>
              <rect x={16 + i * 94} y="72" width="84" height="84" rx="8" fill={INK3} />
              <rect x={30 + i * 94} y="86" width="56" height="56" rx="28" fill={color} opacity="0.35" />
              <text x={16 + i * 94} y="174" fill={TEXT} fontSize="10">{name}</text>
              <text x={16 + i * 94} y="190" fill={TEXT3} fontSize="10" fontFamily={MONO}>{price}</text>
              <rect x={16 + i * 94} y="200" width="84" height="24" rx="6" fill={i === 1 ? EMBER : INK4} />
              <text x={58 + i * 94} y="215.5" textAnchor="middle" fill={i === 1 ? 'var(--ink)' : TEXT2} fontSize="9" fontWeight="600">
                {i === 1 ? 'Added' : 'Add to cart'}
              </text>
            </g>
          ))}
        </Frame>
      )

    case 'estimator':
      return (
        <Frame label={label}>
          <rect x="16" y="44" width="170" height="182" rx="8" fill={INK3} />
          <rect x="30" y="58" width="30" height="36" rx="4" fill={INK4} />
          <text x="45" y="80" textAnchor="middle" fill={EMBER} fontSize="8" fontWeight="700" fontFamily={MONO}>
            PDF
          </text>
          <text x="70" y="72" fill={TEXT} fontSize="10">client-brief.pdf</text>
          <text x="70" y="86" fill={TEXT3} fontSize="8.5" fontFamily={MONO}>Analyzed by Gemini</text>
          {['Logo + 3 concepts', 'Brand guideline', '2 revision rounds', 'Social templates'].map((item, i) => (
            <g key={item}>
              <circle cx="36" cy={116 + i * 24} r="3" fill={ICE} opacity="0.7" />
              <text x="46" y={119 + i * 24} fill={TEXT2} fontSize="9.5">{item}</text>
            </g>
          ))}
          <path d="M194 135 L214 135" stroke={EMBER} strokeWidth="2" strokeDasharray="3 3" />
          <rect x="222" y="44" width="162" height="182" rx="8" fill={INK3} />
          <text x="236" y="64" fill={TEXT3} fontSize="9" fontFamily={MONO}>Estimate</text>
          {[
            ['Identity', '$640'],
            ['Guideline', '$380'],
            ['Templates', '$220'],
          ].map(([name, price], i) => (
            <g key={name}>
              <text x="236" y={92 + i * 22} fill={TEXT2} fontSize="10">{name}</text>
              <text x="370" y={92 + i * 22} textAnchor="end" fill={TEXT} fontSize="10" fontFamily={MONO}>{price}</text>
            </g>
          ))}
          <line x1="236" y1="164" x2="370" y2="164" stroke={LINE} />
          <text x="236" y="194" fill={EMBER} fontSize="22" fontWeight="700" fontFamily={MONO}>$1,240</text>
          <text x="236" y="212" fill={TEXT3} fontSize="8.5" fontFamily={MONO}>Invoice ready</text>
        </Frame>
      )

    case 'chat':
      return (
        <Frame label={label}>
          <rect x="12" y="44" width="112" height="184" rx="8" fill={INK3} />
          {[
            ['Dara', 'see you at 7?', true],
            ['Sokha', 'sent a photo', true],
            ['Vannak', 'thanks!', false],
            ['Team', 'deploy done', false],
          ].map(([name, last, online], i) => (
            <g key={name as string}>
              {i === 0 && <rect x="16" y="50" width="104" height="36" rx="6" fill="oklch(1 0 0 / 0.05)" />}
              <circle cx="32" cy={68 + i * 40} r="9" fill={i === 0 ? EMBER : INK4} opacity={i === 0 ? 0.75 : 1} />
              {online && <circle cx="39" cy={75 + i * 40} r="3" fill={LIVE} stroke={INK3} strokeWidth="1.5" />}
              <text x="48" y={65 + i * 40} fill={TEXT} fontSize="9.5" fontWeight="600">{name as string}</text>
              <text x="48" y={78 + i * 40} fill={TEXT3} fontSize="8.5">{last as string}</text>
            </g>
          ))}
          <rect x="136" y="50" width="138" height="26" rx="11" fill={INK3} />
          <text x="148" y="67" fill={TEXT2} fontSize="9.5">still on for tonight?</text>
          <rect x="266" y="84" width="114" height="26" rx="11" fill="oklch(0.7 0.19 38 / 0.9)" />
          <text x="278" y="101" fill="var(--ink)" fontSize="9.5" fontWeight="500">yes! see you at 7?</text>
          <text x="378" y="124" textAnchor="end" fill={TEXT3} fontSize="8" fontFamily={MONO}>19:02 · seen</text>
          <rect x="136" y="130" width="104" height="58" rx="11" fill={INK3} />
          <rect x="144" y="138" width="88" height="42" rx="6" fill="oklch(0.84 0.09 220 / 0.22)" />
          <path d="M150 174 L170 156 L184 168 L196 160 L226 176 Z" fill="oklch(0.84 0.09 220 / 0.45)" />
          <text x="250" y="176" fill={TEXT3} fontSize="8.5" fontFamily={MONO}>Dara is typing…</text>
          <rect x="136" y="200" width="248" height="26" rx="13" fill="none" stroke={LINE} />
          <text x="150" y="217" fill={TEXT3} fontSize="9">Message</text>
          <circle cx="370" cy="213" r="8" fill={EMBER} />
        </Frame>
      )

    case 'fitness':
      return (
        <svg viewBox="0 0 400 240" role="img" aria-label={label} className="h-full w-full">
          <rect x="0.5" y="0.5" width="399" height="239" rx="12" fill="var(--ink)" stroke={LINE} />
          <rect x="120" y="14" width="160" height="240" rx="22" fill={INK3} stroke={LINE} />
          <rect x="178" y="22" width="44" height="6" rx="3" fill="var(--ink)" />
          <text x="388" y="228" textAnchor="end" fill={TEXT3} fontSize="8.5" fontFamily={MONO}>
            Illustrative preview
          </text>
          <text x="136" y="50" fill={TEXT} fontSize="12" fontWeight="700">Push day</text>
          <text x="264" y="50" textAnchor="end" fill={TEXT3} fontSize="8.5" fontFamily={MONO}>Offline</text>
          {[
            ['Bench press', '4 × 8', true],
            ['Incline DB', '3 × 10', true],
            ['Shoulder press', '3 × 10', false],
            ['Dips', '3 × 12', false],
          ].map(([name, sets, done], i) => (
            <g key={name as string}>
              <rect x="132" y={60 + i * 34} width="136" height="28" rx="7" fill={done ? 'oklch(0.8 0.17 150 / 0.12)' : INK4} />
              <circle cx="146" cy={74 + i * 34} r="5" fill={done ? LIVE : 'none'} stroke={done ? 'none' : TEXT3} />
              <text x="158" y={77.5 + i * 34} fill={TEXT} fontSize="9.5">{name as string}</text>
              <text x="260" y={77.5 + i * 34} textAnchor="end" fill={TEXT3} fontSize="9" fontFamily={MONO}>
                {sets as string}
              </text>
            </g>
          ))}
          <rect x="132" y="204" width="136" height="26" rx="8" fill={EMBER} />
          <text x="200" y="221" textAnchor="middle" fill="var(--ink)" fontSize="10" fontWeight="700">
            Log set
          </text>
        </svg>
      )

    case 'rental-desktop':
      return (
        <Frame label={label}>
          <rect x="12" y="42" width="376" height="20" fill={INK3} />
          {['File', 'Rooms', 'Tenants', 'Billing'].map((m, i) => (
            <text key={m} x={24 + i * 56} y="56" fill={i === 3 ? EMBER : TEXT3} fontSize="10" fontFamily={MONO}>
              {m}
            </text>
          ))}
          <rect x="12" y="72" width="376" height="156" rx="4" fill={INK3} />
          {['Room', 'Tenant', 'Amount', 'Status'].map((h, i) => (
            <text key={h} x={[24, 90, 230, 320][i]} y="88" fill={TEXT} fontSize="9.5" fontWeight="600" fontFamily={MONO}>
              {h}
            </text>
          ))}
          {[
            ['A-101', 'S. Dara', '$120.00', 'Paid'],
            ['A-103', 'K. Sokha', '$135.50', 'Paid'],
            ['A-104', 'L. Vannak', '$120.00', 'Due'],
            ['B-201', 'M. Chenda', '$98.00', 'Paid'],
            ['B-204', 'P. Rithy', '$142.25', 'Due'],
          ].map((row, r) => (
            <g key={row[0]}>
              <line x1="12" y1={96 + r * 26} x2="388" y2={96 + r * 26} stroke={LINE} />
              {row.slice(0, 3).map((cell, c) => (
                <text key={c} x={[24, 90, 230][c]} y={113 + r * 26} fill={TEXT2} fontSize="9.5" fontFamily={MONO}>
                  {cell}
                </text>
              ))}
              <rect
                x="316"
                y={102 + r * 26}
                width="48"
                height="15"
                rx="7.5"
                fill={row[3] === 'Due' ? 'oklch(0.7 0.19 38 / 0.25)' : 'oklch(0.8 0.17 150 / 0.2)'}
              />
              <text x="340" y={112.5 + r * 26} textAnchor="middle" fill={row[3] === 'Due' ? EMBER : LIVE} fontSize="8.5" fontFamily={MONO}>
                {row[3]}
              </text>
            </g>
          ))}
        </Frame>
      )

    case 'leaderboard':
      return (
        <Frame label={label}>
          {[
            ['Team Kernel', 600, 80],
            ['NullPointers', 540, 68],
            ['Byte Riders', 455, 55],
            ['Stack Smash', 330, 40],
            ['Recursion', 240, 28],
          ].map(([team, score, w], i) => (
            <g key={team as string}>
              <rect
                x="16"
                y={44 + i * 37}
                width="368"
                height="31"
                rx="8"
                fill={i === 0 ? 'oklch(0.7 0.19 38 / 0.16)' : INK3}
                stroke={i === 0 ? EMBER : 'none'}
                strokeOpacity="0.6"
              />
              <text x="30" y={64 + i * 37} fill={i === 0 ? EMBER : TEXT3} fontSize="12" fontWeight="700" fontFamily={MONO}>
                {String(i + 1).padStart(2, '0')}
              </text>
              <circle cx="66" cy={59.5 + i * 37} r="8" fill={INK4} />
              <text x="84" y={63.5 + i * 37} fill={i === 0 ? TEXT : TEXT2} fontSize="10.5" fontWeight="600">
                {team as string}
              </text>
              <rect x="250" y={55 + i * 37} width="80" height="8" rx="4" fill={INK4} />
              <rect x="250" y={55 + i * 37} width={w as number} height="8" rx="4" fill={i === 0 ? EMBER : ICE} opacity={i === 0 ? 1 : 0.5} />
              <text x="372" y={64 + i * 37} textAnchor="end" fill={TEXT} fontSize="11" fontFamily={MONO}>
                {score as number}
              </text>
            </g>
          ))}
        </Frame>
      )

    case 'automata':
      return (
        <Frame label={label}>
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M0 0 L10 5 L0 10 Z" fill={TEXT3} />
            </marker>
          </defs>
          <path d="M20 132 L66 132" stroke={TEXT3} strokeWidth="1.5" markerEnd="url(#arrow)" />
          <path d="M112 118 Q160 78 208 118" fill="none" stroke={EMBER} strokeWidth="1.5" markerEnd="url(#arrow)" />
          <path d="M208 146 Q160 186 112 146" fill="none" stroke={TEXT3} strokeWidth="1.5" markerEnd="url(#arrow)" />
          <path d="M252 132 L300 132" stroke={TEXT3} strokeWidth="1.5" markerEnd="url(#arrow)" />
          <path d="M76 108 C60 70 116 70 100 108" fill="none" stroke={TEXT3} strokeWidth="1.5" markerEnd="url(#arrow)" />
          {[
            [90, 'q0', false, false],
            [230, 'q1', true, false],
            [328, 'q2', false, true],
          ].map(([cx, name, active, accept]) => (
            <g key={name as string}>
              <circle
                cx={cx as number}
                cy="132"
                r="22"
                fill={active ? 'oklch(0.7 0.19 38 / 0.18)' : INK3}
                stroke={active ? EMBER : 'oklch(1 0 0 / 0.25)'}
                strokeWidth="1.5"
              />
              {accept && <circle cx={cx as number} cy="132" r="17" fill="none" stroke="oklch(1 0 0 / 0.25)" strokeWidth="1.5" />}
              <text x={cx as number} y="137" textAnchor="middle" fill={TEXT} fontSize="13" fontFamily={MONO}>
                {name as string}
              </text>
            </g>
          ))}
          {[
            ['a', 160, 90],
            ['b', 160, 182],
            ['a', 276, 124],
            ['b', 88, 70],
          ].map(([t, x, y], i) => (
            <text key={i} x={x as number} y={y as number} textAnchor="middle" fill={ICE} fontSize="12" fontFamily={MONO}>
              {t as string}
            </text>
          ))}
          <text x="200" y="222" textAnchor="middle" fill={TEXT3} fontSize="11" fontFamily={MONO}>
            input: a b a a b
          </text>
        </Frame>
      )
  }
}
