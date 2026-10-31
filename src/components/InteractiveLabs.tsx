import React, { useMemo, useState } from 'react';
import { RotateCcw, Sliders } from 'lucide-react';
import { SubjectCourse } from '../types/study';
import { MathTex } from './MathTex';

interface InteractiveLabsProps {
  courseId: SubjectCourse['id'];
}

const DES_S1_TABLE = [
  [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
  [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
  [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
  [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13],
];

function nCr(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  let res = 1;
  for (let i = 1; i <= Math.min(r, n - r); i++) {
    res = (res * (n - i + 1)) / i;
  }
  return res;
}

export const InteractiveLabs: React.FC<InteractiveLabsProps> = ({ courseId }) => {
  // ---------------- IT 410 STATE ----------------
  const [it410Mode, setIt410Mode] = useState<'euclid' | 'playfair-sbox'>('euclid');
  const [euclidA, setEuclidA] = useState<number>(550);
  const [euclidM, setEuclidM] = useState<number>(1759);
  const [pfKey, setPfKey] = useState<string>('MONARCHY');
  const [pfPlain, setPfPlain] = useState<string>('INSTRUMENTS');
  const [sboxBits, setSboxBits] = useState<string>('011011');

  // ---------------- IT 401 STATE ----------------
  const [rawDatasetStr, setRawDatasetStr] = useState<string>(
    '13, 15, 16, 16, 19, 20, 20, 21, 22, 22, 25, 25, 30, 35, 45'
  );
  const [binDepth, setBinDepth] = useState<number>(3);
  const [normTarget, setNormTarget] = useState<number>(35);

  // ---------------- CS 411 STATE ----------------
  const [cgResW, setCgResW] = useState<number>(1280);
  const [cgResH, setCgResH] = useState<number>(1024);
  const [cgPlanes, setCgPlanes] = useState<number>(8);
  const [cgDacBits, setCgDacBits] = useState<number>(24);
  const [cgFps, setCgFps] = useState<number>(60);
  const [cgHRetUs, setCgHRetUs] = useState<number>(5);
  const [cgVRetUs, setCgVRetUs] = useState<number>(500);
  const [cadGrid, setCadGrid] = useState<boolean>(true);
  const [cadGravity, setCadGravity] = useState<boolean>(true);
  const [cadOrtho, setCadOrtho] = useState<boolean>(false);
  const [cadAnchor, setCadAnchor] = useState<{ x: number; y: number }>({ x: 120, y: 180 });
  const [cadCursor, setCadCursor] = useState<{ x: number; y: number; rule: string }>({
    x: 280,
    y: 90,
    rule: 'Endpoint Gravity Active',
  });

  // ---------------- ELECTIVES STATE ----------------
  const [iotSensors, setIotSensors] = useState<number>(200);
  const [iotHz, setIotHz] = useState<number>(100);
  const [ensModels, setEnsModels] = useState<number>(15);
  const [ensBaseErr, setEnsBaseErr] = useState<number>(0.3);

  // ================ COMPUTATIONS ================
  const euclidData = useMemo(() => {
    const a = Math.max(1, Math.floor(Math.abs(euclidA)));
    const m = Math.max(2, Math.floor(Math.abs(euclidM)));
    let r1 = m;
    let r2 = a % m;
    let t1 = 0;
    let t2 = 1;
    const rows: {
      q: number;
      r1: number;
      r2: number;
      r: number;
      t1: number;
      t2: number;
      t: number;
    }[] = [];
    let guard = 0;
    while (r2 > 0 && guard < 64) {
      const q = Math.floor(r1 / r2);
      const r = r1 - q * r2;
      const t = t1 - q * t2;
      rows.push({ q, r1, r2, r, t1, t2, t });
      r1 = r2;
      r2 = r;
      t1 = t2;
      t2 = t;
      guard++;
    }
    const gcd = r1;
    const inverse = gcd === 1 ? ((t1 % m) + m) % m : null;
    return { a, m, rows, gcd, inverse };
  }, [euclidA, euclidM]);

  const playfairData = useMemo(() => {
    const clean = (s: string) =>
      s
        .toUpperCase()
        .replace(/[^A-Z]/g, '')
        .replace(/J/g, 'I');
    const k = clean(pfKey);
    const seen = new Set<string>();
    const grid: string[] = [];
    for (const ch of k + 'ABCDEFGHIKLMNOPQRSTUVWXYZ') {
      if (!seen.has(ch)) {
        seen.add(ch);
        grid.push(ch);
      }
    }
    const pos = new Map<string, [number, number]>();
    grid.forEach((ch, idx) => pos.set(ch, [Math.floor(idx / 5), idx % 5]));

    const pRaw = clean(pfPlain);
    const digrams: [string, string][] = [];
    let i = 0;
    while (i < pRaw.length) {
      const c1 = pRaw[i];
      const c2 = i + 1 < pRaw.length ? pRaw[i + 1] : '';
      if (!c2) {
        digrams.push([c1, c1 === 'X' ? 'Z' : 'X']);
        i += 1;
      } else if (c1 === c2) {
        digrams.push([c1, c1 === 'X' ? 'Z' : 'X']);
        i += 1;
      } else {
        digrams.push([c1, c2]);
        i += 2;
      }
    }

    const encrypted = digrams.map(([a, b]) => {
      const [r1, c1] = pos.get(a)!;
      const [r2, c2] = pos.get(b)!;
      if (r1 === r2) {
        return grid[r1 * 5 + ((c1 + 1) % 5)] + grid[r2 * 5 + ((c2 + 1) % 5)];
      }
      if (c1 === c2) {
        return grid[((r1 + 1) % 5) * 5 + c1] + grid[((r2 + 1) % 5) * 5 + c2];
      }
      return grid[r1 * 5 + c2] + grid[r2 * 5 + c1];
    });

    return { grid, digrams, cipherText: encrypted.join(' ') };
  }, [pfKey, pfPlain]);

  const sboxEval = useMemo(() => {
    const bits = sboxBits.padEnd(6, '0').slice(0, 6);
    const b = bits.split('').map((c) => (c === '1' ? 1 : 0));
    const row = (b[0] << 1) | b[5];
    const col = (b[1] << 3) | (b[2] << 2) | (b[3] << 1) | b[4];
    const val = DES_S1_TABLE[row][col];
    const outBin = val.toString(2).padStart(4, '0');
    return { bits, row, col, val, outBin };
  }, [sboxBits]);

  const dmPrepData = useMemo(() => {
    const parsed = rawDatasetStr
      .split(',')
      .map((s) => parseFloat(s.trim()))
      .filter((n) => !Number.isNaN(n));
    const arr = (parsed.length > 0 ? parsed : [10, 20, 30]).sort((a, b) => a - b);
    const bins: number[][] = [];
    for (let i = 0; i < arr.length; i += binDepth) {
      bins.push(arr.slice(i, i + binDepth));
    }
    const means = bins.map((b) => {
      const m = +(b.reduce((s, x) => s + x, 0) / b.length).toFixed(2);
      return b.map(() => m);
    });
    const medians = bins.map((b) => {
      const mid = Math.floor(b.length / 2);
      const med =
        b.length % 2 === 1 ? b[mid] : +((b[mid - 1] + b[mid]) / 2).toFixed(2);
      return b.map(() => med);
    });
    const bounds = bins.map((b) => {
      const lo = b[0];
      const hi = b[b.length - 1];
      return b.map((x) => (Math.abs(x - lo) <= Math.abs(hi - x) ? lo : hi));
    });

    const minA = arr[0];
    const maxA = arr[arr.length - 1];
    const meanA = arr.reduce((s, x) => s + x, 0) / arr.length;
    const variance =
      arr.reduce((s, x) => s + (x - meanA) ** 2, 0) / Math.max(1, arr.length - 1);
    const stdA = Math.sqrt(variance) || 1;
    const maxAbs = Math.max(Math.abs(minA), Math.abs(maxA), Math.abs(normTarget), 1);
    const jScale = Math.floor(Math.log10(maxAbs)) + 1;

    const minMaxVal = maxA === minA ? 0 : (normTarget - minA) / (maxA - minA);
    const zScoreVal = (normTarget - meanA) / stdA;
    const decScaleVal = normTarget / 10 ** jScale;

    return {
      arr,
      bins,
      means,
      medians,
      bounds,
      minA,
      maxA,
      meanA,
      stdA,
      jScale,
      minMaxVal,
      zScoreVal,
      decScaleVal,
    };
  }, [rawDatasetStr, binDepth, normTarget]);

  const cgMetrics = useMemo(() => {
    const frameUs = 1e6 / cgFps;
    const retraceUs = cgVRetUs + cgResH * cgHRetUs;
    const activeUs = Math.max(100, frameUs - retraceUs);
    const totalPixels = cgResW * cgResH;
    const pixelNs = (activeUs * 1000) / totalPixels;
    const fbBytes = (totalPixels * cgPlanes) / 8;
    const clutBytes = (2 ** Math.min(cgPlanes, 16) * cgDacBits) / 8;
    const directBytes = (totalPixels * cgDacBits) / 8;
    const simColors = Math.min(totalPixels, 2 ** cgPlanes);
    return {
      frameUs,
      retraceUs,
      activeUs,
      retracePct: (retraceUs / frameUs) * 100,
      pixelNs,
      fbMB: fbBytes / (1024 * 1024),
      clutKB: clutBytes / 1024,
      directMB: directBytes / (1024 * 1024),
      simColors,
      paletteColors: 2 ** cgDacBits,
    };
  }, [cgResW, cgResH, cgPlanes, cgDacBits, cgFps, cgHRetUs, cgVRetUs]);

  const handleCadPointerMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const rawX = ((e.clientX - rect.left) / rect.width) * 480;
    const rawY = ((e.clientY - rect.top) / rect.height) * 240;

    // Reference existing segment: (80, 60) -> (280, 90)
    const x1 = 80, y1 = 60, x2 = 280, y2 = 90;
    if (cadGravity) {
      if (Math.hypot(rawX - x1, rawY - y1) <= 18) {
        setCadCursor({ x: x1, y: y1, rule: 'Snapped to Vertex Gravity (80, 60)' });
        return;
      }
      if (Math.hypot(rawX - x2, rawY - y2) <= 18) {
        setCadCursor({ x: x2, y: y2, rule: 'Snapped to Vertex Gravity (280, 90)' });
        return;
      }
      const dx = x2 - x1;
      const dy = y2 - y1;
      const t = Math.max(0, Math.min(1, ((rawX - x1) * dx + (rawY - y1) * dy) / (dx * dx + dy * dy)));
      const px = x1 + t * dx;
      const py = y1 + t * dy;
      if (Math.hypot(rawX - px, rawY - py) <= 10) {
        setCadCursor({
          x: Math.round(px),
          y: Math.round(py),
          rule: 'Snapped to Segment Gravity Halo',
        });
        return;
      }
    }

    let gx = cadGrid ? Math.round(rawX / 20) * 20 : Math.round(rawX);
    let gy = cadGrid ? Math.round(rawY / 20) * 20 : Math.round(rawY);
    let rule = cadGrid ? 'Grid Intersection (20px)' : 'Free Locator Position';

    if (cadOrtho) {
      if (Math.abs(gx - cadAnchor.x) >= Math.abs(gy - cadAnchor.y)) {
        gy = cadAnchor.y;
        rule = 'Horizontal Ortho Constraint';
      } else {
        gx = cadAnchor.x;
        rule = 'Vertical Ortho Constraint';
      }
    }
    setCadCursor({ x: gx, y: gy, rule });
  };

  const elecData = useMemo(() => {
    const rawKbps = (iotSensors * iotHz * 8 * 8) / 1000;
    const fogKbps = (64 * 8) / 5 / 1000;
    const savedPct = (1 - fogKbps / Math.max(0.001, rawKbps)) * 100;

    const M = ensModels % 2 === 0 ? ensModels + 1 : ensModels;
    const half = Math.floor(M / 2) + 1;
    let ensErr = 0;
    for (let k = half; k <= M; k++) {
      ensErr += nCr(M, k) * ensBaseErr ** k * (1 - ensBaseErr) ** (M - k);
    }
    return { rawKbps, fogKbps, savedPct, M, ensErr };
  }, [iotSensors, iotHz, ensModels, ensBaseErr]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-[#1e1e24] border border-white/[0.08] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-[#60a5fa] mb-1">
              Interactive Concept Sandbox · Unit 1 Live Numerical Verifier
            </div>
            <h2 className="text-xl font-bold text-[#f3f4f6]">
              {courseId === 'it410' && 'Cryptographic Number Theory & Cipher Workbench'}
              {courseId === 'it401' && 'KDD Data Preprocessing: Binning & Normalization Workbench'}
              {courseId === 'cs411' && 'CRT Scan Timing, CLUT Memory & Interactive CAD Construction Lab'}
              {courseId === 'electives' && 'IoT Fog Offload & Big Data Ensemble Error Laboratory'}
            </h2>
          </div>

          {courseId === 'it410' && (
            <div className="flex items-center gap-1 p-1 rounded-lg bg-[#121216] border border-white/10">
              <button
                type="button"
                onClick={() => setIt410Mode('euclid')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  it410Mode === 'euclid'
                    ? 'bg-[#2563eb] text-[#f3f4f6]'
                    : 'text-[#9ca3af] hover:text-[#f3f4f6]'
                }`}
              >
                Extended Euclid Table
              </button>
              <button
                type="button"
                onClick={() => setIt410Mode('playfair-sbox')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  it410Mode === 'playfair-sbox'
                    ? 'bg-[#2563eb] text-[#f3f4f6]'
                    : 'text-[#9ca3af] hover:text-[#f3f4f6]'
                }`}
              >
                Playfair 5×5 &amp; DES S-Box
              </button>
            </div>
          )}
        </div>

        {/* ==================== IT 410 LAB ==================== */}
        {courseId === 'it410' && it410Mode === 'euclid' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-stretch">
            {/* Left 65% Stage */}
            <div className="lg:col-span-8 rounded-lg bg-[#0a0a0c] border border-white/[0.09] p-5 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-[#60a5fa]">
                  Live Stallings Extended Euclidean Iteration Table
                </span>
                <span className="text-xs font-mono text-[#06b6d4]">
                  {euclidData.inverse !== null
                    ? `${euclidData.a}^(-1) mod ${euclidData.m} = ${euclidData.inverse}`
                    : `gcd(${euclidData.a}, ${euclidData.m}) = ${euclidData.gcd} != 1 (No Inverse)`}
                </span>
              </div>

              <div className="overflow-x-auto border border-white/10 rounded-md">
                <table className="w-full text-left text-xs font-mono tabular-nums">
                  <thead className="bg-[#121216] text-[#60a5fa] border-b border-white/10">
                    <tr>
                      <th className="px-3 py-2">Step</th>
                      <th className="px-3 py-2">q = floor(r1/r2)</th>
                      <th className="px-3 py-2">r1</th>
                      <th className="px-3 py-2">r2</th>
                      <th className="px-3 py-2">r = r1 - q*r2</th>
                      <th className="px-3 py-2">t1</th>
                      <th className="px-3 py-2">t2</th>
                      <th className="px-3 py-2">t = t1 - q*t2</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.06]">
                    {euclidData.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        <td className="px-3 py-2 text-[#9ca3af]">{idx + 1}</td>
                        <td className="px-3 py-2 text-[#f3f4f6] font-semibold">{row.q}</td>
                        <td className="px-3 py-2">{row.r1}</td>
                        <td className="px-3 py-2">{row.r2}</td>
                        <td className="px-3 py-2 text-[#06b6d4]">{row.r}</td>
                        <td className="px-3 py-2">{row.t1}</td>
                        <td className="px-3 py-2">{row.t2}</td>
                        <td className="px-3 py-2 text-[#60a5fa]">{row.t}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {euclidData.inverse !== null && (
                <div className="p-3.5 rounded bg-[#121216] border border-[#2563eb]/40 text-xs font-mono text-[#f3f4f6]">
                  Proof Check: ({euclidData.a} × {euclidData.inverse}) mod {euclidData.m} ={' '}
                  {(BigInt(euclidData.a) * BigInt(euclidData.inverse)).toString()} mod{' '}
                  {euclidData.m} ={' '}
                  {((BigInt(euclidData.a) * BigInt(euclidData.inverse)) % BigInt(euclidData.m)).toString()}
                </div>
              )}
            </div>

            {/* Right 35% Controls */}
            <div className="lg:col-span-4 rounded-lg bg-[#121216] border border-white/[0.08] p-5 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#f3f4f6]">
                <Sliders className="w-4 h-4 text-[#3b82f6]" />
                <span>Input Parameters &amp; Exam Presets</span>
              </div>

              <div className="space-y-3">
                <label className="block space-y-1">
                  <span className="text-xs text-[#9ca3af]">Integer a: {euclidA}</span>
                  <input
                    type="number"
                    min={1}
                    max={999999}
                    value={euclidA}
                    onChange={(e) => setEuclidA(Number(e.target.value) || 1)}
                    className="w-full px-3 py-2 rounded bg-[#0a0a0c] border border-white/15 text-sm font-mono text-[#f3f4f6]"
                  />
                </label>

                <label className="block space-y-1">
                  <span className="text-xs text-[#9ca3af]">Modulus m: {euclidM}</span>
                  <input
                    type="number"
                    min={2}
                    max={999999}
                    value={euclidM}
                    onChange={(e) => setEuclidM(Number(e.target.value) || 2)}
                    className="w-full px-3 py-2 rounded bg-[#0a0a0c] border border-white/15 text-sm font-mono text-[#f3f4f6]"
                  />
                </label>
              </div>

              <div className="space-y-2 pt-2 border-t border-white/[0.07]">
                <div className="text-xs text-[#9ca3af]">Load Classic University Problems:</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: '550 mod 1759', a: 550, m: 1759 },
                    { label: '17 mod 26 (Hill)', a: 17, m: 26 },
                    { label: '1234 mod 4321', a: 1234, m: 4321 },
                    { label: '14 mod 26 (No Inv)', a: 14, m: 26 },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      type="button"
                      onClick={() => {
                        setEuclidA(preset.a);
                        setEuclidM(preset.m);
                      }}
                      className="px-2.5 py-1.5 rounded bg-[#1e1e24] hover:bg-[#2563eb] text-xs font-mono text-[#f3f4f6] transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {courseId === 'it410' && it410Mode === 'playfair-sbox' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-stretch">
            <div className="lg:col-span-7 rounded-lg bg-[#0a0a0c] border border-white/[0.09] p-5 space-y-4">
              <div className="text-xs font-mono text-[#60a5fa]">
                Live 5×5 Playfair Matrix (I/J Merged) &amp; Digram Encryption
              </div>
              <div className="grid grid-cols-5 gap-2 max-w-xs">
                {playfairData.grid.map((ch, idx) => (
                  <div
                    key={idx}
                    className="h-10 rounded bg-[#1e1e24] border border-white/10 flex items-center justify-center font-mono text-sm font-semibold text-[#f3f4f6]"
                  >
                    {ch === 'I' ? 'I/J' : ch}
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-xs font-mono">
                <div className="text-[#9ca3af]">
                  Prepared Digrams:{' '}
                  <span className="text-[#f3f4f6]">
                    {playfairData.digrams.map(([a, b]) => a + b).join(' · ')}
                  </span>
                </div>
                <div className="p-3 rounded bg-[#121216] border border-[#3b82f6]/40 text-[#06b6d4] text-sm font-semibold">
                  Ciphertext: {playfairData.cipherText}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-lg bg-[#121216] border border-white/[0.08] p-5 space-y-4">
              <label className="block space-y-1">
                <span className="text-xs text-[#9ca3af]">Playfair Keyword:</span>
                <input
                  type="text"
                  value={pfKey}
                  onChange={(e) => setPfKey(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-[#0a0a0c] border border-white/15 text-sm font-mono text-[#f3f4f6]"
                />
              </label>
              <label className="block space-y-1">
                <span className="text-xs text-[#9ca3af]">Plaintext Message:</span>
                <input
                  type="text"
                  value={pfPlain}
                  onChange={(e) => setPfPlain(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-[#0a0a0c] border border-white/15 text-sm font-mono text-[#f3f4f6]"
                />
              </label>

              <div className="pt-3 border-t border-white/10 space-y-2.5">
                <div className="text-xs font-semibold text-[#60a5fa]">
                  DES S-Box S1 6-Bit Extractor (Click bits to toggle):
                </div>
                <div className="flex items-center gap-2">
                  {sboxEval.bits.split('').map((bit, idx) => {
                    const isOuter = idx === 0 || idx === 5;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          const arr = sboxEval.bits.split('');
                          arr[idx] = arr[idx] === '1' ? '0' : '1';
                          setSboxBits(arr.join(''));
                        }}
                        className={`w-9 h-9 rounded font-mono text-sm font-bold border ${
                          isOuter
                            ? 'bg-[#172554] border-[#3b82f6] text-[#60a5fa]'
                            : 'bg-[#0a0a0c] border-[#06b6d4] text-[#06b6d4]'
                        }`}
                      >
                        {bit}
                      </button>
                    );
                  })}
                </div>
                <div className="text-xs font-mono text-[#f3f4f6] bg-[#0a0a0c] p-3 rounded border border-white/10">
                  Row (b1 b6) = {sboxEval.row} | Col (b2..b5) = {sboxEval.col} =&gt; S1[{sboxEval.row}][{sboxEval.col}] ={' '}
                  <span className="text-[#06b6d4] font-semibold">
                    {sboxEval.val} ({sboxEval.outBin})
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== IT 401 LAB ==================== */}
        {courseId === 'it401' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-stretch">
            <div className="lg:col-span-8 rounded-lg bg-[#0a0a0c] border border-white/[0.09] p-5 space-y-4">
              <div className="text-xs font-mono text-[#60a5fa]">
                Sorted Dataset ({dmPrepData.arr.length} tuples): [{dmPrepData.arr.join(', ')}]
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded bg-[#121216] border border-white/10 space-y-1.5">
                  <div className="text-[#60a5fa] font-semibold">Smooth by Bin Means</div>
                  {dmPrepData.means.map((b, i) => (
                    <div key={i} className="text-[#f3f4f6]">
                      B{i + 1}: [{b.join(', ')}]
                    </div>
                  ))}
                </div>
                <div className="p-3.5 rounded bg-[#121216] border border-white/10 space-y-1.5">
                  <div className="text-[#06b6d4] font-semibold">Smooth by Bin Medians</div>
                  {dmPrepData.medians.map((b, i) => (
                    <div key={i} className="text-[#f3f4f6]">
                      B{i + 1}: [{b.join(', ')}]
                    </div>
                  ))}
                </div>
                <div className="p-3.5 rounded bg-[#121216] border border-white/10 space-y-1.5">
                  <div className="text-[#60a5fa] font-semibold">Smooth by Boundaries</div>
                  {dmPrepData.bounds.map((b, i) => (
                    <div key={i} className="text-[#f3f4f6]">
                      B{i + 1}: [{b.join(', ')}]
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded bg-[#121216] border border-[#2563eb]/35 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono tabular-nums">
                <div>
                  <div className="text-[#9ca3af]">Min-Max [0, 1] of v={normTarget}:</div>
                  <div className="text-base font-semibold text-[#60a5fa] mt-1">
                    {dmPrepData.minMaxVal.toFixed(4)}
                  </div>
                  <div className="text-[11px] text-[#9ca3af]">
                    min={dmPrepData.minA}, max={dmPrepData.maxA}
                  </div>
                </div>
                <div>
                  <div className="text-[#9ca3af]">Z-Score of v={normTarget}:</div>
                  <div className="text-base font-semibold text-[#06b6d4] mt-1">
                    {dmPrepData.zScoreVal >= 0 ? '+' : ''}
                    {dmPrepData.zScoreVal.toFixed(4)}
                  </div>
                  <div className="text-[11px] text-[#9ca3af]">
                    mean={dmPrepData.meanA.toFixed(2)}, std={dmPrepData.stdA.toFixed(2)}
                  </div>
                </div>
                <div>
                  <div className="text-[#9ca3af]">Decimal Scaling of v={normTarget}:</div>
                  <div className="text-base font-semibold text-[#f3f4f6] mt-1">
                    {dmPrepData.decScaleVal.toFixed(5)}
                  </div>
                  <div className="text-[11px] text-[#9ca3af]">
                    j = {dmPrepData.jScale} (10^{dmPrepData.jScale})
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-lg bg-[#121216] border border-white/[0.08] p-5 space-y-4">
              <label className="block space-y-1">
                <span className="text-xs text-[#9ca3af]">Raw Numeric Values (Comma-separated):</span>
                <textarea
                  rows={3}
                  value={rawDatasetStr}
                  onChange={(e) => setRawDatasetStr(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-[#0a0a0c] border border-white/15 text-xs font-mono text-[#f3f4f6]"
                />
              </label>

              <label className="block space-y-1">
                <span className="text-xs text-[#9ca3af] font-mono">
                  Equi-Depth Bin Size k: {binDepth} tuples/bin
                </span>
                <input
                  type="range"
                  min={2}
                  max={6}
                  value={binDepth}
                  onChange={(e) => setBinDepth(Number(e.target.value))}
                  className="w-full accent-[#3b82f6]"
                />
              </label>

              <label className="block space-y-1">
                <span className="text-xs text-[#9ca3af] font-mono">
                  Target Value v to Normalize: {normTarget}
                </span>
                <input
                  type="range"
                  min={dmPrepData.minA}
                  max={Math.max(dmPrepData.maxA, dmPrepData.minA + 1)}
                  value={normTarget}
                  onChange={(e) => setNormTarget(Number(e.target.value))}
                  className="w-full accent-[#06b6d4]"
                />
              </label>
            </div>
          </div>
        )}

        {/* ==================== CS 411 LAB ==================== */}
        {courseId === 'cs411' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-stretch">
            <div className="lg:col-span-8 rounded-lg bg-[#0a0a0c] border border-white/[0.09] p-5 space-y-5">
              {/* Timing & VRAM Readout */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono tabular-nums">
                <div className="p-3 rounded bg-[#121216] border border-white/10">
                  <div className="text-[#9ca3af]">Active Pixel Time</div>
                  <div className="text-sm font-semibold text-[#60a5fa] mt-1">
                    {cgMetrics.pixelNs.toFixed(2)} ns
                  </div>
                </div>
                <div className="p-3 rounded bg-[#121216] border border-white/10">
                  <div className="text-[#9ca3af]">Retrace Overhead</div>
                  <div className="text-sm font-semibold text-[#06b6d4] mt-1">
                    {cgMetrics.retracePct.toFixed(1)}%
                  </div>
                </div>
                <div className="p-3 rounded bg-[#121216] border border-white/10">
                  <div className="text-[#9ca3af]">Frame Buffer + CLUT</div>
                  <div className="text-sm font-semibold text-[#f3f4f6] mt-1">
                    {cgMetrics.fbMB.toFixed(2)} MB + {cgMetrics.clutKB.toFixed(2)} KB
                  </div>
                </div>
                <div className="p-3 rounded bg-[#121216] border border-white/10">
                  <div className="text-[#9ca3af]">Simultaneous Colors</div>
                  <div className="text-sm font-semibold text-[#60a5fa] mt-1">
                    {cgMetrics.simColors.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Interactive CAD Canvas */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="text-[#60a5fa] font-medium">
                    Interactive Picture Construction Stage (Move cursor &amp; click to set Rubber-Band Anchor):
                  </span>
                  <span className="font-mono text-[#06b6d4]">
                    ({cadCursor.x}, {cadCursor.y}) · {cadCursor.rule}
                  </span>
                </div>

                <svg
                  viewBox="0 0 480 240"
                  onMouseMove={handleCadPointerMove}
                  onClick={() => setCadAnchor({ x: cadCursor.x, y: cadCursor.y })}
                  className="w-full h-auto rounded-lg bg-[#121216] border border-white/10 cursor-crosshair block"
                >
                  {/* Grid Dots */}
                  {cadGrid &&
                    Array.from({ length: 24 }).map((_, gx) =>
                      Array.from({ length: 12 }).map((__, gy) => (
                        <circle
                          key={`${gx}-${gy}`}
                          cx={gx * 20}
                          cy={gy * 20}
                          r="1"
                          fill="#2d2d37"
                        />
                      ))
                    )}

                  {/* Existing Reference Segment + Gravity Halo */}
                  {cadGravity && (
                    <g>
                      <line
                        x1="80"
                        y1="60"
                        x2="280"
                        y2="90"
                        stroke="#06b6d4"
                        strokeWidth="18"
                        strokeOpacity="0.14"
                        strokeLinecap="round"
                      />
                      <circle cx="80" cy="60" r="18" fill="#3b82f6" fillOpacity="0.16" stroke="#3b82f6" strokeDasharray="3 2" />
                      <circle cx="280" cy="90" r="18" fill="#3b82f6" fillOpacity="0.16" stroke="#3b82f6" strokeDasharray="3 2" />
                    </g>
                  )}
                  <line x1="80" y1="60" x2="280" y2="90" stroke="#06b6d4" strokeWidth="2.2" />

                  {/* Live Rubber-Band Line */}
                  <line
                    x1={cadAnchor.x}
                    y1={cadAnchor.y}
                    x2={cadCursor.x}
                    y2={cadCursor.y}
                    stroke="#3b82f6"
                    strokeWidth="2"
                    strokeDasharray="5 3"
                  />
                  <circle cx={cadAnchor.x} cy={cadAnchor.y} r="4.5" fill="#f3f4f6" />
                  <circle cx={cadCursor.x} cy={cadCursor.y} r="5" fill="#60a5fa" />
                </svg>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-lg bg-[#121216] border border-white/[0.08] p-5 space-y-3.5">
              <div className="flex flex-wrap gap-2">
                {[
                  { label: '1024×768', w: 1024, h: 768 },
                  { label: '1280×1024', w: 1280, h: 1024 },
                  { label: '1920×1080', w: 1920, h: 1080 },
                ].map((r) => (
                  <button
                    key={r.label}
                    type="button"
                    onClick={() => {
                      setCgResW(r.w);
                      setCgResH(r.h);
                    }}
                    className={`px-2.5 py-1 rounded text-xs font-mono border ${
                      cgResW === r.w
                        ? 'bg-[#2563eb] border-[#3b82f6] text-[#f3f4f6]'
                        : 'bg-[#0a0a0c] border-white/10 text-[#9ca3af]'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>

              <label className="block space-y-1 text-xs font-mono text-[#9ca3af]">
                <span>Frame Buffer Bit-Planes (n): {cgPlanes} bits</span>
                <input
                  type="range"
                  min={1}
                  max={24}
                  value={cgPlanes}
                  onChange={(e) => setCgPlanes(Number(e.target.value))}
                  className="w-full accent-[#3b82f6]"
                />
              </label>

              <label className="block space-y-1 text-xs font-mono text-[#9ca3af]">
                <span>Refresh Rate (f): {cgFps} Hz</span>
                <input
                  type="range"
                  min={30}
                  max={120}
                  step={5}
                  value={cgFps}
                  onChange={(e) => setCgFps(Number(e.target.value))}
                  className="w-full accent-[#06b6d4]"
                />
              </label>

              <label className="block space-y-1 text-xs font-mono text-[#9ca3af]">
                <span>Horiz Retrace: {cgHRetUs} μs | Vert: {cgVRetUs} μs</span>
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  value={cgHRetUs}
                  onChange={(e) => setCgHRetUs(Number(e.target.value))}
                  className="w-full accent-[#3b82f6]"
                />
              </label>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <div className="text-xs font-semibold text-[#f3f4f6]">
                  Toggle CAD Picture Construction Aids:
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setCadGravity((v) => !v)}
                    className={`px-2.5 py-1.5 rounded text-xs border ${
                      cadGravity
                        ? 'bg-[#2563eb]/25 border-[#3b82f6] text-[#f3f4f6]'
                        : 'bg-[#0a0a0c] border-white/10 text-[#9ca3af]'
                    }`}
                  >
                    Gravity Field: {cadGravity ? 'ON' : 'OFF'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCadGrid((v) => !v)}
                    className={`px-2.5 py-1.5 rounded text-xs border ${
                      cadGrid
                        ? 'bg-[#2563eb]/25 border-[#3b82f6] text-[#f3f4f6]'
                        : 'bg-[#0a0a0c] border-white/10 text-[#9ca3af]'
                    }`}
                  >
                    Grid Snap: {cadGrid ? 'ON' : 'OFF'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setCadOrtho((v) => !v)}
                    className={`px-2.5 py-1.5 rounded text-xs border ${
                      cadOrtho
                        ? 'bg-[#2563eb]/25 border-[#3b82f6] text-[#f3f4f6]'
                        : 'bg-[#0a0a0c] border-white/10 text-[#9ca3af]'
                    }`}
                  >
                    Ortho Lock: {cadOrtho ? 'ON' : 'OFF'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== ELECTIVES LAB ==================== */}
        {courseId === 'electives' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-stretch">
            <div className="lg:col-span-8 rounded-lg bg-[#0a0a0c] border border-white/[0.09] p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono tabular-nums">
                <div className="p-3.5 rounded bg-[#121216] border border-white/10">
                  <div className="text-[#9ca3af]">Raw Cloud Uplink (IT 412)</div>
                  <div className="text-base font-semibold text-[#f3f4f6] mt-1">
                    {elecData.rawKbps.toFixed(1)} kbps
                  </div>
                </div>
                <div className="p-3.5 rounded bg-[#121216] border border-white/10">
                  <div className="text-[#9ca3af]">Fog Filtered Uplink</div>
                  <div className="text-base font-semibold text-[#06b6d4] mt-1">
                    {elecData.savedPct.toFixed(2)}% Saved
                  </div>
                </div>
                <div className="p-3.5 rounded bg-[#121216] border border-white/10">
                  <div className="text-[#9ca3af]">
                    {elecData.M}-Classifier Ensemble Error
                  </div>
                  <div className="text-base font-semibold text-[#60a5fa] mt-1">
                    {(elecData.ensErr * 100).toFixed(2)}% (vs {(ensBaseErr * 100).toFixed(0)}%)
                  </div>
                </div>
              </div>

              <div className="p-4 rounded bg-[#121216] border border-white/[0.07]">
                <MathTex
                  math={`P_{\\text{ens}}(M=${elecData.M}, \\epsilon=${ensBaseErr.toFixed(
                    2
                  )}) = \\sum_{k=${Math.floor(elecData.M / 2) + 1}}^{${elecData.M}} \\binom{${
                    elecData.M
                  }}{k} (${ensBaseErr.toFixed(2)})^k (1 - ${ensBaseErr.toFixed(2)})^{${
                    elecData.M
                  }-k} = ${elecData.ensErr.toFixed(4)}`}
                  display
                />
                <p className="text-xs text-[#9ca3af] mt-2">
                  {ensBaseErr < 0.5
                    ? 'Nominal Regime (epsilon < 0.5): Majority voting suppresses independent errors exponentially as M increases.'
                    : 'Inverted Trap Regime (epsilon > 0.5): Base classifiers are worse than coin-flips — adding more learners amplifies error toward 100%!'}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-lg bg-[#121216] border border-white/[0.08] p-5 space-y-4">
              <label className="block space-y-1 text-xs font-mono text-[#9ca3af]">
                <span>IoT Sensor Node Count: {iotSensors}</span>
                <input
                  type="range"
                  min={10}
                  max={500}
                  step={10}
                  value={iotSensors}
                  onChange={(e) => setIotSensors(Number(e.target.value))}
                  className="w-full accent-[#06b6d4]"
                />
              </label>
              <label className="block space-y-1 text-xs font-mono text-[#9ca3af]">
                <span>Sensor Sampling Rate: {iotHz} Hz</span>
                <input
                  type="range"
                  min={10}
                  max={500}
                  step={10}
                  value={iotHz}
                  onChange={(e) => setIotHz(Number(e.target.value))}
                  className="w-full accent-[#06b6d4]"
                />
              </label>
              <label className="block space-y-1 text-xs font-mono text-[#9ca3af]">
                <span>Ensemble Size M (Odd): {elecData.M} models</span>
                <input
                  type="range"
                  min={1}
                  max={35}
                  step={2}
                  value={ensModels}
                  onChange={(e) => setEnsModels(Number(e.target.value))}
                  className="w-full accent-[#3b82f6]"
                />
              </label>
              <label className="block space-y-1 text-xs font-mono text-[#9ca3af]">
                <span>Base Learner Error (epsilon): {ensBaseErr.toFixed(2)}</span>
                <input
                  type="range"
                  min={0.05}
                  max={0.65}
                  step={0.05}
                  value={ensBaseErr}
                  onChange={(e) => setEnsBaseErr(Number(e.target.value))}
                  className="w-full accent-[#3b82f6]"
                />
              </label>
              <button
                type="button"
                onClick={() => {
                  setIotSensors(200);
                  setIotHz(100);
                  setEnsModels(15);
                  setEnsBaseErr(0.3);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#1e1e24] text-xs text-[#f3f4f6] hover:bg-[#2563eb] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
