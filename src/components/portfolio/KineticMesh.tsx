import { motion } from "framer-motion";

/**
 * Abstract 3D-feeling kinetic mesh built with layered SVG geometry.
 * Pulses + slowly rotates with Electric Purple & Neon Cyan glows.
 */
export function KineticMesh() {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto pointer-events-none select-none">
      {/* outer glows */}
      <div className="absolute inset-0 rounded-full blur-3xl opacity-60"
        style={{ background: "radial-gradient(circle at 30% 30%, rgb(191 64 191 / 0.55), transparent 60%)" }} />
      <div className="absolute inset-0 rounded-full blur-3xl opacity-50"
        style={{ background: "radial-gradient(circle at 70% 70%, rgb(0 255 255 / 0.45), transparent 60%)" }} />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg viewBox="-110 -110 220 220" className="w-full h-full">
          <defs>
            <linearGradient id="km-purple" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#bf40bf" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#bf40bf" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="km-cyan" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00ffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00ffff" stopOpacity="0.15" />
            </linearGradient>
            <filter id="km-glow">
              <feGaussianBlur stdDeviation="2.2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* concentric polygons */}
          {[100, 80, 60, 40].map((r, i) => (
            <motion.polygon
              key={r}
              points={polygon(r, 6 + i)}
              fill="none"
              stroke={i % 2 === 0 ? "url(#km-purple)" : "url(#km-cyan)"}
              strokeWidth={0.8}
              filter="url(#km-glow)"
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 30 + i * 6, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "0px 0px" }}
            />
          ))}

          {/* vertex dots */}
          {polygonPoints(100, 6).map(([px, py], i) => (
            <motion.circle
              key={i}
              cx={px}
              cy={py}
              r={2}
              fill="#00ffff"
              filter="url(#km-glow)"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </svg>
      </motion.div>

      {/* counter-rotating wireframe sphere */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6"
      >
        <svg viewBox="-100 -100 200 200" className="w-full h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse
              key={i}
              cx={0}
              cy={0}
              rx={90}
              ry={20 + i * 8}
              fill="none"
              stroke={i % 2 === 0 ? "#bf40bf" : "#00ffff"}
              strokeOpacity={0.25}
              strokeWidth={0.6}
              transform={`rotate(${(180 / 8) * i})`}
            />
          ))}
        </svg>
      </motion.div>

      {/* pulsing core */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full"
        style={{
          background: "radial-gradient(circle, #ffffff 0%, #bf40bf 35%, transparent 75%)",
          boxShadow: "0 0 60px 10px rgb(191 64 191 / 0.6), 0 0 120px 20px rgb(0 255 255 / 0.3)",
        }}
      />
    </div>
  );
}

function polygonPoints(r: number, sides: number): [number, number][] {
  const pts: [number, number][] = [];
  for (let i = 0; i < sides; i++) {
    const a = (Math.PI * 2 * i) / sides - Math.PI / 2;
    pts.push([Math.cos(a) * r, Math.sin(a) * r]);
  }
  return pts;
}
function polygon(r: number, sides: number) {
  return polygonPoints(r, sides).map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(" ");
}
