import React from 'react';

/*
 * Monochrome, slow-looping system visuals used inside the project panels.
 * Each one is purely declarative — all motion lives in Projects.css so it can
 * be gated on viewport visibility and prefers-reduced-motion.
 */

/* Corner brackets used by the vision visual. */
const Brackets = ({ x, y, w, h, len = 12, className = '' }) => (
  <g className={`viz-brackets ${className}`}>
    <path d={`M${x},${y + len} V${y} H${x + len}`} />
    <path d={`M${x + w - len},${y} H${x + w} V${y + len}`} />
    <path d={`M${x + w},${y + h - len} V${y + h} H${x + w - len}`} />
    <path d={`M${x + len},${y + h} H${x} V${y + h - len}`} />
  </g>
);

/* Agentic orchestration graph — input, agent loop, retrieval and tools. */
const WorkflowVisual = () => (
  <svg className="viz viz-workflow" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <g className="viz-edges">
      <path className="edge" d="M96,101 H150" />
      <path className="edge" d="M246,101 C272,101 276,52 300,52" />
      <path className="edge" d="M246,101 C272,101 276,150 300,150" />
      <path className="edge edge-dashed" d="M339,84 C339,101 300,104 246,110" />

      <path className="flow flow-1" pathLength="100" d="M96,101 H150" />
      <path className="flow flow-2" pathLength="100" d="M246,101 C272,101 276,52 300,52" />
      <path className="flow flow-3" pathLength="100" d="M246,101 C272,101 276,150 300,150" />
    </g>

    <g className="viz-nodes">
      <g className="node node-1">
        <rect x="20" y="84" width="76" height="34" rx="8" />
        <text x="58" y="105">INPUT</text>
      </g>

      <g className="node node-core node-2">
        <rect x="150" y="79" width="96" height="44" rx="10" />
        <text x="198" y="98">AGENT</text>
        <text x="198" y="112" className="node-sub">LANGGRAPH</text>
      </g>

      <g className="node node-3">
        <rect x="300" y="36" width="78" height="32" rx="8" />
        <text x="339" y="56">RAG</text>
      </g>

      <g className="node node-4">
        <rect x="300" y="134" width="78" height="32" rx="8" />
        <text x="339" y="154">TOOLS</text>
      </g>
    </g>

    <g className="viz-ticks">
      <circle className="tick tick-1" cx="123" cy="101" r="2.5" />
      <circle className="tick tick-2" cx="273" cy="70" r="2.5" />
      <circle className="tick tick-3" cx="273" cy="132" r="2.5" />
    </g>
  </svg>
);

/* Meeting analytics — engagement bars, trend line and a slow scan pass. */
const AnalyticsVisual = () => {
  const bars = [38, 62, 46, 84, 58, 72, 50];
  return (
    <svg className="viz viz-analytics" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <g className="viz-grid">
        <line x1="28" y1="48" x2="372" y2="48" />
        <line x1="28" y1="90" x2="372" y2="90" />
        <line x1="28" y1="132" x2="372" y2="132" />
        <line className="axis" x1="28" y1="164" x2="372" y2="164" />
      </g>

      <text className="viz-label" x="28" y="28">MEETING QUALITY INDEX</text>

      <g className="viz-bars">
        {bars.map((h, i) => (
          <rect
            key={i}
            className={`bar bar-${i + 1}`}
            x={40 + i * 47}
            y={164 - h}
            width="26"
            height={h}
            rx="3"
            style={{ '--h': `${h}px`, '--d': `${i * 0.14}s` }}
          />
        ))}
      </g>

      <path
        className="trend"
        pathLength="100"
        d="M53,120 L100,92 L147,110 L194,64 L241,96 L288,76 L335,104"
      />

      <g className="viz-points">
        {[53, 100, 147, 194, 241, 288, 335].map((x, i) => (
          <circle key={x} className={`point point-${i + 1}`} cx={x} cy={[120, 92, 110, 64, 96, 76, 104][i]} r="3" />
        ))}
      </g>

      <rect className="scan-v" x="28" y="18" width="46" height="146" />
    </svg>
  );
};

/* Predictive maintenance — sensor telemetry crossing a failure threshold. */
const SignalVisual = () => (
  <svg className="viz viz-signal" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <g className="viz-grid">
      <line x1="24" y1="60" x2="376" y2="60" />
      <line x1="24" y1="100" x2="376" y2="100" />
      <line x1="24" y1="140" x2="376" y2="140" />
    </g>

    <text className="viz-label" x="24" y="30">SENSOR STREAM · UNIT 04</text>
    <line className="threshold" x1="24" y1="56" x2="376" y2="56" />
    <text className="viz-label viz-label-sm" x="332" y="50">LIMIT</text>

    <path
      className="wave"
      pathLength="100"
      d="M24,118 L48,104 L64,126 L88,96 L108,120 L132,86 L152,116 L176,92 L196,124 L220,88 L240,112 L264,70 L284,108 L308,52 L328,102 L352,90 L376,110"
    />

    <g className="alert">
      <circle className="alert-ring" cx="308" cy="52" r="6" />
      <circle className="alert-dot" cx="308" cy="52" r="3" />
    </g>

    <g className="viz-bars-sm">
      {[10, 16, 12, 22, 14, 26, 18, 30, 20, 34].map((h, i) => (
        <rect
          key={i}
          className={`spark spark-${i + 1}`}
          x={24 + i * 36}
          y={176 - h}
          width="8"
          height={h}
          rx="2"
          style={{ '--d': `${i * 0.12}s` }}
        />
      ))}
    </g>
  </svg>
);

/* Copyright analysis — command execution with streaming output. */
const TerminalVisual = () => {
  const lines = [
    { text: '$ analyze --source youtube.com/watch', kind: 'cmd' },
    { text: '→ resolving metadata', kind: 'muted' },
    { text: '→ matching audio fingerprint', kind: 'muted' },
    { text: '→ policy retrieval  [gemini]', kind: 'muted' },
    { text: 'RISK LOW', kind: 'meter' },
    { text: '✓ report generated in 2.4s', kind: 'ok' },
  ];

  return (
    <div className="viz viz-terminal" aria-hidden="true">
      <div className="term-bar">
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-title">copyright-analysis</span>
      </div>
      <div className="term-body">
        {lines.map((line, i) => (
          <div key={line.text} className={`term-line term-${line.kind}`} style={{ '--d': `${i * 0.55}s` }}>
            {line.kind === 'meter' ? (
              <>
                <span>RISK</span>
                <span className="term-meter"><i /></span>
                <span className="term-meter-val">LOW</span>
              </>
            ) : (
              line.text
            )}
          </div>
        ))}
        <div className="term-caret" />
      </div>
    </div>
  );
};

/* Detection + captioning — bounding boxes resolving over a scanned frame. */
const VisionVisual = () => (
  <svg className="viz viz-vision" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <rect className="frame" x="16" y="16" width="368" height="168" rx="10" />

    <g className="scene">
      <rect x="52" y="96" width="70" height="62" rx="6" />
      <circle cx="87" cy="78" r="16" />
      <rect x="168" y="112" width="96" height="46" rx="6" />
      <circle cx="316" cy="72" r="26" />
      <rect x="292" y="104" width="48" height="54" rx="6" />
    </g>

    <g className="detections">
      <g className="det det-1">
        <Brackets x="44" y="56" w="86" h="108" />
        <rect className="det-tag" x="44" y="40" width="66" height="14" rx="3" />
        <text className="det-text" x="50" y="50">PERSON .98</text>
      </g>

      <g className="det det-2">
        <Brackets x="160" y="104" w="112" h="62" />
        <rect className="det-tag" x="160" y="88" width="60" height="14" rx="3" />
        <text className="det-text" x="166" y="98">DESK .91</text>
      </g>

      <g className="det det-3">
        <Brackets x="284" y="42" w="64" h="124" />
        <rect className="det-tag" x="284" y="26" width="64" height="14" rx="3" />
        <text className="det-text" x="290" y="36">MONITOR .88</text>
      </g>
    </g>

    <rect className="scan-h" x="16" y="16" width="368" height="34" />

    <g className="caption">
      <rect className="caption-bg" x="16" y="164" width="368" height="20" rx="0" />
      <text className="caption-text" x="28" y="178">a person seated at a desk beside a monitor</text>
      {/* Retracting cover — a typewriter reveal built from transforms only. */}
      <rect className="caption-mask" x="16" y="163" width="368" height="22" />
    </g>
  </svg>
);

const visuals = {
  workflow: WorkflowVisual,
  analytics: AnalyticsVisual,
  signal: SignalVisual,
  terminal: TerminalVisual,
  vision: VisionVisual,
};

const ProjectVisual = ({ variant }) => {
  const Visual = visuals[variant] || WorkflowVisual;
  return <Visual />;
};

export default ProjectVisual;
