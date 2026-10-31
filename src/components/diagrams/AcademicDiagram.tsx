import React, { useState } from 'react';
import { DiagramId } from '../../types/study';

interface AcademicDiagramProps {
  diagramId: DiagramId;
  caption: string;
}

export const AcademicDiagram: React.FC<AcademicDiagramProps> = ({ diagramId, caption }) => {
  const [cipherMode, setCipherMode] = useState<'ECB' | 'CBC' | 'CFB' | 'OFB'>('CBC');

  const renderSvg = () => {
    switch (diagramId) {
      case 'it410-osi-symmetric':
        return (
          <svg viewBox="0 0 880 330" className="w-full h-auto block">
            <defs>
              <marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
              </marker>
              <marker id="arrowCyan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#06b6d4" />
              </marker>
            </defs>
            <rect width="880" height="330" rx="8" fill="#0a0a0c" />
            <text x="24" y="30" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              CONVENTIONAL SYMMETRIC CIPHER MODEL &amp; OSI X.800 THREAT VECTORS
            </text>

            {/* Plaintext Source */}
            <rect x="28" y="120" width="125" height="64" rx="6" fill="#1e1e24" stroke="#3b82f6" strokeWidth="1.2" />
            <text x="90" y="147" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontWeight="600">Message Source</text>
            <text x="90" y="166" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="IBM Plex Mono">Plaintext X</text>

            {/* Encryption Box */}
            <rect x="205" y="112" width="150" height="80" rx="6" fill="#121216" stroke="#2563eb" strokeWidth="1.6" />
            <text x="280" y="142" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontWeight="600">Encryption E(K, X)</text>
            <text x="280" y="162" textAnchor="middle" fill="#60a5fa" fontSize="11" fontFamily="IBM Plex Mono">Y = E_K(X)</text>
            <text x="280" y="179" textAnchor="middle" fill="#9ca3af" fontSize="10">Substitution + Permutation</text>

            {/* Public Insecure Channel */}
            <rect x="405" y="120" width="130" height="64" rx="6" fill="#1e1e24" stroke="#9ca3af" strokeDasharray="4 3" strokeWidth="1.2" />
            <text x="470" y="146" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontWeight="600">Public Channel</text>
            <text x="470" y="165" textAnchor="middle" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">Ciphertext Y</text>

            {/* Decryption Box */}
            <rect x="585" y="112" width="145" height="80" rx="6" fill="#121216" stroke="#2563eb" strokeWidth="1.6" />
            <text x="657" y="142" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontWeight="600">Decryption D(K, Y)</text>
            <text x="657" y="162" textAnchor="middle" fill="#60a5fa" fontSize="11" fontFamily="IBM Plex Mono">X = D_K(Y)</text>
            <text x="657" y="179" textAnchor="middle" fill="#9ca3af" fontSize="10">Reversible Inverse Map</text>

            {/* Destination */}
            <rect x="772" y="120" width="84" height="64" rx="6" fill="#1e1e24" stroke="#3b82f6" strokeWidth="1.2" />
            <text x="814" y="147" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontWeight="600">Recipient</text>
            <text x="814" y="166" textAnchor="middle" fill="#9ca3af" fontSize="11" fontFamily="IBM Plex Mono">Plaintext X</text>

            {/* Main Data Flow Arrows */}
            <line x1="153" y1="152" x2="201" y2="152" stroke="#3b82f6" strokeWidth="1.8" markerEnd="url(#arrowBlue)" />
            <line x1="355" y1="152" x2="401" y2="152" stroke="#3b82f6" strokeWidth="1.8" markerEnd="url(#arrowBlue)" />
            <line x1="535" y1="152" x2="581" y2="152" stroke="#3b82f6" strokeWidth="1.8" markerEnd="url(#arrowBlue)" />
            <line x1="730" y1="152" x2="768" y2="152" stroke="#3b82f6" strokeWidth="1.8" markerEnd="url(#arrowBlue)" />

            {/* Secure Key Source & Channel */}
            <rect x="380" y="244" width="180" height="58" rx="6" fill="#121216" stroke="#06b6d4" strokeWidth="1.4" />
            <text x="470" y="269" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontWeight="600">Secure Key Source (K)</text>
            <text x="470" y="287" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="IBM Plex Mono">Shared Secret via KDC / Courier</text>

            <path d="M 380 273 L 280 273 L 280 196" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowCyan)" />
            <path d="M 560 273 L 657 273 L 657 196" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="5 3" markerEnd="url(#arrowCyan)" />

            {/* Cryptanalyst / Opponent */}
            <rect x="370" y="42" width="200" height="50" rx="6" fill="#1e1e24" stroke="#60a5fa" strokeWidth="1.2" />
            <text x="470" y="63" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">Cryptanalyst / Adversary</text>
            <text x="470" y="80" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">Estimates X&apos; or K&apos; | Passive/Active</text>
            <line x1="470" y1="120" x2="470" y2="96" stroke="#60a5fa" strokeWidth="1.4" markerEnd="url(#arrowBlue)" />
          </svg>
        );

      case 'it410-playfair-euclid':
        return (
          <svg viewBox="0 0 880 300" className="w-full h-auto block">
            <rect width="880" height="300" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              LEFT: PLAYFAIR 5x5 KEY MATRIX (KEY=&quot;MONARCHY&quot;)   |   RIGHT: EXTENDED EUCLIDEAN INVERSE PIPELINE
            </text>

            {/* 5x5 Playfair Grid */}
            {['M', 'O', 'N', 'A', 'R', 'C', 'H', 'Y', 'B', 'D', 'E', 'F', 'G', 'I/J', 'K', 'L', 'P', 'Q', 'S', 'T', 'U', 'V', 'W', 'X', 'Z'].map((ch, idx) => {
              const r = Math.floor(idx / 5);
              const c = idx % 5;
              const isKey = idx < 8;
              return (
                <g key={ch}>
                  <rect
                    x={36 + c * 52}
                    y={52 + r * 44}
                    width="46"
                    height="38"
                    rx="4"
                    fill={isKey ? '#1e293b' : '#1e1e24'}
                    stroke={isKey ? '#3b82f6' : '#2d2d37'}
                    strokeWidth="1.2"
                  />
                  <text
                    x={59 + c * 52}
                    y={76 + r * 44}
                    textAnchor="middle"
                    fill={isKey ? '#60a5fa' : '#f3f4f6'}
                    fontSize="13"
                    fontWeight="600"
                    fontFamily="IBM Plex Mono"
                  >
                    {ch}
                  </text>
                </g>
              );
            })}
            <text x="164" y="286" textAnchor="middle" fill="#9ca3af" fontSize="11">
              Blue cells: Keyword letters | Remaining: Alphabet (I/J merged)
            </text>

            {/* Divider */}
            <line x1="330" y1="45" x2="330" y2="280" stroke="#272730" strokeWidth="1" />

            {/* Extended Euclidean Table Illustration */}
            <rect x="358" y="52" width="494" height="222" rx="6" fill="#121216" stroke="#2d2d37" />
            <text x="378" y="78" fill="#06b6d4" fontSize="12" fontWeight="600" fontFamily="IBM Plex Mono">
              Computing 550^(-1) mod 1759 via Extended Euclid:
            </text>
            {[
              ['q', 'r1', 'r2', 'r = r1 mod r2', 't1', 't2', 't = t1 - q*t2'],
              ['3', '1759', '550', '109', '0', '1', '-3'],
              ['5', '550', '109', '5', '1', '-3', '16'],
              ['21', '109', '5', '4', '-3', '16', '-339'],
              ['1', '5', '4', '1', '16', '-339', '355'],
              ['4', '4', '1', '0', '-339', '355', '-1759'],
            ].map((row, rIdx) => (
              <g key={rIdx}>
                {rIdx === 0 && <rect x="368" y="88" width="474" height="24" rx="3" fill="#1e1e24" />}
                {rIdx === 4 && <rect x="368" y={88 + rIdx * 26} width="474" height="24" rx="3" fill="#2563eb" fillOpacity="0.18" />}
                {row.map((cell, cIdx) => {
                  const colX = [386, 442, 505, 600, 685, 735, 800][cIdx];
                  return (
                    <text
                      key={cIdx}
                      x={colX}
                      y={104 + rIdx * 26}
                      textAnchor="middle"
                      fill={rIdx === 0 ? '#60a5fa' : rIdx === 4 ? '#06b6d4' : '#f3f4f6'}
                      fontSize="11"
                      fontFamily="IBM Plex Mono"
                      fontWeight={rIdx === 0 || rIdx === 4 ? '600' : '400'}
                    >
                      {cell}
                    </text>
                  );
                })}
              </g>
            ))}
            <text x="378" y="258" fill="#f3f4f6" fontSize="11.5" fontFamily="IBM Plex Mono">
              Result: gcd(1759, 550) = 1  =&gt;  Inverse t = 355 (since 550 * 355 = 195250 = 111*1759 + 1)
            </text>
          </svg>
        );

      case 'it410-gf-feistel':
        return (
          <svg viewBox="0 0 880 340" className="w-full h-auto block">
            <defs>
              <marker id="feistelArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#60a5fa" />
              </marker>
            </defs>
            <rect width="880" height="340" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              SINGLE FEISTEL CIPHER ROUND i STRUCTURE &amp; GF(2^8) AES POLYNOMIAL ARITHMETIC
            </text>

            {/* Left Diagram: Feistel Round */}
            <rect x="48" y="50" width="140" height="38" rx="5" fill="#1e1e24" stroke="#3b82f6" />
            <text x="118" y="74" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontFamily="IBM Plex Mono">L_(i-1) [w/2 bits]</text>

            <rect x="272" y="50" width="140" height="38" rx="5" fill="#1e1e24" stroke="#06b6d4" />
            <text x="342" y="74" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontFamily="IBM Plex Mono">R_(i-1) [w/2 bits]</text>

            {/* Round Function F */}
            <rect x="202" y="138" width="96" height="46" rx="6" fill="#121216" stroke="#2563eb" strokeWidth="1.6" />
            <text x="250" y="160" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="600">Function F</text>
            <text x="250" y="176" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">F(R_(i-1), K_i)</text>

            {/* Subkey K_i */}
            <rect x="355" y="144" width="76" height="34" rx="4" fill="#1e1e24" stroke="#06b6d4" />
            <text x="393" y="165" textAnchor="middle" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">Subkey K_i</text>
            <line x1="355" y1="161" x2="302" y2="161" stroke="#06b6d4" strokeWidth="1.5" markerEnd="url(#feistelArr)" />

            {/* R_(i-1) into F */}
            <path d="M 342 88 L 342 115 L 250 115 L 250 134" fill="none" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#feistelArr)" />

            {/* XOR Node */}
            <circle cx="118" cy="161" r="15" fill="#121216" stroke="#3b82f6" strokeWidth="1.6" />
            <line x1="108" y1="161" x2="128" y2="161" stroke="#f3f4f6" strokeWidth="1.5" />
            <line x1="118" y1="151" x2="118" y2="171" stroke="#f3f4f6" strokeWidth="1.5" />

            <line x1="118" y1="88" x2="118" y2="142" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#feistelArr)" />
            <line x1="202" y1="161" x2="137" y2="161" stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#feistelArr)" />

            {/* Cross-Swap Paths */}
            <path d="M 342 115 L 342 205 L 118 255 L 118 272" fill="none" stroke="#06b6d4" strokeWidth="1.6" markerEnd="url(#feistelArr)" />
            <path d="M 118 176 L 118 205 L 342 255 L 342 272" fill="none" stroke="#3b82f6" strokeWidth="1.6" markerEnd="url(#feistelArr)" />

            <rect x="48" y="276" width="140" height="38" rx="5" fill="#1e1e24" stroke="#06b6d4" />
            <text x="118" y="300" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontFamily="IBM Plex Mono">L_i = R_(i-1)</text>

            <rect x="272" y="276" width="150" height="38" rx="5" fill="#1e1e24" stroke="#3b82f6" />
            <text x="347" y="300" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontFamily="IBM Plex Mono">R_i = L_(i-1) XOR F</text>

            {/* Divider */}
            <line x1="464" y1="48" x2="464" y2="316" stroke="#272730" strokeWidth="1" />

            {/* Right Panel: GF(2^8) Operations */}
            <rect x="490" y="52" width="362" height="262" rx="6" fill="#121216" stroke="#2d2d37" />
            <text x="510" y="78" fill="#60a5fa" fontSize="12" fontWeight="600">
              Galois Field GF(2^8) Algebraic Summary
            </text>
            <text x="510" y="104" fill="#f3f4f6" fontSize="11" fontFamily="IBM Plex Mono">
              Irreducible m(x) = x^8 + x^4 + x^3 + x + 1 (0x11B)
            </text>
            <text x="510" y="132" fill="#9ca3af" fontSize="11">
              1. Addition / Subtraction in GF(2^n):
            </text>
            <text x="524" y="152" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">
              A(x) + B(x) = A(x) - B(x) = A XOR B
            </text>
            <text x="510" y="182" fill="#9ca3af" fontSize="11">
              2. Multiplication by x (xtime shift-and-reduce):
            </text>
            <text x="524" y="202" fill="#f3f4f6" fontSize="11" fontFamily="IBM Plex Mono">
              If b_7 == 0: (b &lt;&lt; 1)
            </text>
            <text x="524" y="220" fill="#3b82f6" fontSize="11" fontFamily="IBM Plex Mono">
              If b_7 == 1: (b &lt;&lt; 1) XOR 0x1B
            </text>
            <text x="510" y="252" fill="#9ca3af" fontSize="11">
              3. Key Feistel Theorem:
            </text>
            <text x="524" y="272" fill="#f3f4f6" fontSize="11">
              F does NOT need to be invertible! Since
            </text>
            <text x="524" y="290" fill="#60a5fa" fontSize="11" fontFamily="IBM Plex Mono">
              L_(i-1) = R_i XOR F(L_i, K_i) holds for any F.
            </text>
          </svg>
        );

      case 'it410-des-3des':
        return (
          <svg viewBox="0 0 880 320" className="w-full h-auto block">
            <defs>
              <marker id="desArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
              </marker>
            </defs>
            <rect width="880" height="320" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              DES MANGLED F-FUNCTION PIPELINE (32-&gt;48-&gt;32 BITS) &amp; TRIPLE DES (3DES E-D-E)
            </text>

            {/* Top Row: Inside DES F(R, K) */}
            <rect x="28" y="56" width="110" height="48" rx="5" fill="#1e1e24" stroke="#3b82f6" />
            <text x="83" y="77" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">R_(i-1)</text>
            <text x="83" y="93" textAnchor="middle" fill="#60a5fa" fontSize="10" fontFamily="IBM Plex Mono">32 bits</text>

            <rect x="176" y="56" width="130" height="48" rx="5" fill="#121216" stroke="#2563eb" />
            <text x="241" y="77" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">E-Box Expansion</text>
            <text x="241" y="93" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="IBM Plex Mono">32 -&gt; 48 bits</text>

            <circle cx="358" cy="80" r="16" fill="#1e1e24" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="358" y="84" textAnchor="middle" fill="#f3f4f6" fontSize="10" fontFamily="IBM Plex Mono">XOR</text>
            <text x="358" y="45" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="IBM Plex Mono">K_i (48-bit PC-2)</text>

            <rect x="414" y="52" width="190" height="56" rx="5" fill="#121216" stroke="#06b6d4" strokeWidth="1.5" />
            <text x="509" y="74" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">8 Non-Linear S-Boxes</text>
            <text x="509" y="90" textAnchor="middle" fill="#60a5fa" fontSize="10" fontFamily="IBM Plex Mono">8 x (6-bit -&gt; 4-bit) = 32b</text>
            <text x="509" y="103" textAnchor="middle" fill="#9ca3af" fontSize="9">Outer 2 bits: Row | Inner 4: Col</text>

            <rect x="646" y="56" width="125" height="48" rx="5" fill="#121216" stroke="#2563eb" />
            <text x="708" y="77" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">Straight P-Box</text>
            <text x="708" y="93" textAnchor="middle" fill="#60a5fa" fontSize="10" fontFamily="IBM Plex Mono">32-bit Diffusion</text>

            <text x="822" y="84" textAnchor="middle" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">Out (32b)</text>

            <line x1="138" y1="80" x2="172" y2="80" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#desArr)" />
            <line x1="306" y1="80" x2="338" y2="80" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#desArr)" />
            <line x1="358" y1="50" x2="358" y2="61" stroke="#06b6d4" strokeWidth="1.5" markerEnd="url(#desArr)" />
            <line x1="374" y1="80" x2="410" y2="80" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#desArr)" />
            <line x1="604" y1="80" x2="642" y2="80" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#desArr)" />
            <line x1="771" y1="80" x2="792" y2="80" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#desArr)" />

            <line x1="28" y1="142" x2="852" y2="142" stroke="#272730" strokeWidth="1" />

            {/* Bottom Row: Triple DES E-D-E */}
            <text x="28" y="170" fill="#60a5fa" fontSize="12" fontWeight="600">
              Triple DES (3DES) Encrypt-Decrypt-Encrypt (EDE) Architecture: C = E_K3( D_K2( E_K1(P) ) )
            </text>

            <rect x="36" y="198" width="96" height="50" rx="5" fill="#1e1e24" stroke="#2d2d37" />
            <text x="84" y="227" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontFamily="IBM Plex Mono">Plaintext P</text>

            <rect x="180" y="194" width="142" height="58" rx="6" fill="#121216" stroke="#2563eb" strokeWidth="1.5" />
            <text x="251" y="218" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontWeight="600">DES Encrypt</text>
            <text x="251" y="236" textAnchor="middle" fill="#60a5fa" fontSize="10" fontFamily="IBM Plex Mono">Key K_1 (56-bit)</text>

            <rect x="372" y="194" width="142" height="58" rx="6" fill="#121216" stroke="#06b6d4" strokeWidth="1.5" />
            <text x="443" y="218" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontWeight="600">DES Decrypt</text>
            <text x="443" y="236" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="IBM Plex Mono">Key K_2 (56-bit)</text>

            <rect x="564" y="194" width="142" height="58" rx="6" fill="#121216" stroke="#2563eb" strokeWidth="1.5" />
            <text x="635" y="218" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontWeight="600">DES Encrypt</text>
            <text x="635" y="236" textAnchor="middle" fill="#60a5fa" fontSize="10" fontFamily="IBM Plex Mono">K_3 (or K_1 in 2-Key)</text>

            <rect x="752" y="198" width="100" height="50" rx="5" fill="#1e1e24" stroke="#2d2d37" />
            <text x="802" y="227" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontFamily="IBM Plex Mono">Ciphertext C</text>

            <line x1="132" y1="223" x2="176" y2="223" stroke="#3b82f6" strokeWidth="1.6" markerEnd="url(#desArr)" />
            <line x1="322" y1="223" x2="368" y2="223" stroke="#3b82f6" strokeWidth="1.6" markerEnd="url(#desArr)" />
            <line x1="514" y1="223" x2="560" y2="223" stroke="#3b82f6" strokeWidth="1.6" markerEnd="url(#desArr)" />
            <line x1="706" y1="223" x2="748" y2="223" stroke="#3b82f6" strokeWidth="1.6" markerEnd="url(#desArr)" />

            <text x="443" y="288" textAnchor="middle" fill="#9ca3af" fontSize="11">
              Backward Compatibility Property: Setting K_1 = K_2 = K_3 collapses EDE to single DES E_K1(P).
            </text>
          </svg>
        );

      case 'it410-block-modes':
        return (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 pt-3">
              <span className="text-xs font-medium text-[#9ca3af]">
                Interactive Mode Schematic Selector:
              </span>
              <div className="flex items-center gap-1 p-1 rounded-lg bg-[#121216] border border-white/10">
                {(['ECB', 'CBC', 'CFB', 'OFB'] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setCipherMode(m)}
                    className={`px-3 py-1 text-xs font-mono font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      cipherMode === m
                        ? 'bg-[#2563eb] text-[#f3f4f6]'
                        : 'text-[#9ca3af] hover:text-[#f3f4f6]'
                    }`}
                  >
                    {m} Mode
                  </button>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 880 265" className="w-full h-auto block">
              <defs>
                <marker id="modeArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
                </marker>
              </defs>
              <rect width="880" height="265" rx="8" fill="#0a0a0c" />

              {cipherMode === 'ECB' && (
                <g>
                  <text x="28" y="28" fill="#60a5fa" fontSize="13" fontWeight="600">
                    ELECTRONIC CODEBOOK (ECB): C_j = E_K(P_j) — Independent Parallel Blocks, Pattern Leakage
                  </text>
                  {[0, 1, 2].map((i) => {
                    const x0 = 90 + i * 260;
                    return (
                      <g key={i}>
                        <rect x={x0} y="48" width="120" height="36" rx="5" fill="#1e1e24" stroke="#3b82f6" />
                        <text x={x0 + 60} y="70" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontFamily="IBM Plex Mono">P_{i + 1} (64-bit)</text>
                        <line x1={x0 + 60} y1="84" x2={x0 + 60} y2="114" stroke="#3b82f6" strokeWidth="1.6" markerEnd="url(#modeArr)" />
                        <rect x={x0} y="118" width="120" height="46" rx="6" fill="#121216" stroke="#2563eb" strokeWidth="1.6" />
                        <text x={x0 + 60} y="145" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="600">Encrypt E_K</text>
                        <line x1={x0 + 60} y1="164" x2={x0 + 60} y2="194" stroke="#3b82f6" strokeWidth="1.6" markerEnd="url(#modeArr)" />
                        <rect x={x0} y="198" width="120" height="36" rx="5" fill="#1e1e24" stroke="#06b6d4" />
                        <text x={x0 + 60} y="220" textAnchor="middle" fill="#06b6d4" fontSize="12" fontFamily="IBM Plex Mono">C_{i + 1} (64-bit)</text>
                      </g>
                    );
                  })}
                </g>
              )}

              {cipherMode === 'CBC' && (
                <g>
                  <text x="28" y="28" fill="#60a5fa" fontSize="13" fontWeight="600">
                    CIPHER BLOCK CHAINING (CBC): C_j = E_K(P_j XOR C_(j-1)), C_0 = IV — Sequential Encryption, Parallel Decryption
                  </text>
                  <rect x="24" y="88" width="66" height="32" rx="4" fill="#1e1e24" stroke="#06b6d4" />
                  <text x="57" y="108" textAnchor="middle" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">IV</text>
                  {[0, 1, 2].map((i) => {
                    const x0 = 135 + i * 255;
                    return (
                      <g key={i}>
                        <rect x={x0} y="42" width="110" height="32" rx="4" fill="#1e1e24" stroke="#3b82f6" />
                        <text x={x0 + 55} y="62" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontFamily="IBM Plex Mono">Plaintext P_{i + 1}</text>
                        <circle cx={x0 + 55} cy="104" r="13" fill="#121216" stroke="#3b82f6" strokeWidth="1.5" />
                        <text x={x0 + 55} y="108" textAnchor="middle" fill="#f3f4f6" fontSize="9" fontFamily="IBM Plex Mono">XOR</text>
                        <line x1={x0 + 55} y1="74" x2={x0 + 55} y2="88" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#modeArr)" />
                        <line x1={x0 + 55} y1="117" x2={x0 + 55} y2="138" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#modeArr)" />
                        <rect x={x0} y="142" width="110" height="40" rx="5" fill="#121216" stroke="#2563eb" strokeWidth="1.5" />
                        <text x={x0 + 55} y="166" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="600">E_K</text>
                        <line x1={x0 + 55} y1="182" x2={x0 + 55} y2="206" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#modeArr)" />
                        <rect x={x0} y="210" width="110" height="32" rx="4" fill="#1e1e24" stroke="#06b6d4" />
                        <text x={x0 + 55} y="230" textAnchor="middle" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">Cipher C_{i + 1}</text>
                        {i < 2 && (
                          <path
                            d={`M ${x0 + 55} 196 L ${x0 + 165} 196 L ${x0 + 165} 104 L ${x0 + 292} 104`}
                            fill="none"
                            stroke="#06b6d4"
                            strokeWidth="1.4"
                            markerEnd="url(#modeArr)"
                          />
                        )}
                      </g>
                    );
                  })}
                  <line x1="90" y1="104" x2="173" y2="104" stroke="#06b6d4" strokeWidth="1.4" markerEnd="url(#modeArr)" />
                </g>
              )}

              {cipherMode === 'CFB' && (
                <g>
                  <text x="28" y="28" fill="#60a5fa" fontSize="13" fontWeight="600">
                    CIPHER FEEDBACK (s-bit CFB): C_j = P_j XOR MSB_s(E_K(ShiftReg)) — Converts Block Cipher to Self-Sync Stream Cipher
                  </text>
                  {[0, 1].map((i) => {
                    const x0 = 90 + i * 380;
                    return (
                      <g key={i}>
                        <rect x={x0} y="48" width="160" height="32" rx="4" fill="#1e1e24" stroke="#06b6d4" />
                        <text x={x0 + 80} y="68" textAnchor="middle" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">
                          {i === 0 ? 'Shift Reg = IV (64b)' : 'Shift Left s | C_1'}
                        </text>
                        <line x1={x0 + 80} y1="80" x2={x0 + 80} y2="102" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#modeArr)" />
                        <rect x={x0 + 20} y="106" width="120" height="38" rx="5" fill="#121216" stroke="#2563eb" strokeWidth="1.5" />
                        <text x={x0 + 80} y="129" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="600">Encrypt E_K</text>
                        <line x1={x0 + 80} y1="144" x2={x0 + 80} y2="170" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#modeArr)" />
                        <text x={x0 + 130} y="162" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">Select MSB_s</text>
                        <circle cx={x0 + 80} cy="186" r="14" fill="#121216" stroke="#3b82f6" strokeWidth="1.5" />
                        <text x={x0 + 80} y="190" textAnchor="middle" fill="#f3f4f6" fontSize="9" fontFamily="IBM Plex Mono">XOR</text>
                        <rect x={x0 - 55} y="171" width="70" height="30" rx="4" fill="#1e1e24" stroke="#3b82f6" />
                        <text x={x0 - 20} y="190" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontFamily="IBM Plex Mono">P_{i + 1} (s)</text>
                        <line x1={x0 + 15} y1="186" x2={x0 + 62} y2="186" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#modeArr)" />
                        <line x1={x0 + 80} y1="200" x2={x0 + 80} y2="222" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#modeArr)" />
                        <rect x={x0 + 30} y="225" width="100" height="28" rx="4" fill="#1e1e24" stroke="#06b6d4" />
                        <text x={x0 + 80} y="243" textAnchor="middle" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">C_{i + 1} (s bits)</text>
                      </g>
                    );
                  })}
                  <path d="M 220 239 L 330 239 L 330 64 L 466 64" fill="none" stroke="#06b6d4" strokeWidth="1.5" markerEnd="url(#modeArr)" />
                  <text x="332" y="150" fill="#06b6d4" fontSize="10" fontFamily="IBM Plex Mono">Ciphertext feedback</text>
                </g>
              )}

              {cipherMode === 'OFB' && (
                <g>
                  <text x="28" y="28" fill="#60a5fa" fontSize="13" fontWeight="600">
                    OUTPUT FEEDBACK (OFB): O_j = E_K(O_(j-1)), C_j = P_j XOR O_j — Synchronous Stream Cipher, Zero Bit-Error Propagation!
                  </text>
                  {[0, 1].map((i) => {
                    const x0 = 90 + i * 380;
                    return (
                      <g key={i}>
                        <rect x={x0} y="48" width="160" height="32" rx="4" fill="#1e1e24" stroke="#06b6d4" />
                        <text x={x0 + 80} y="68" textAnchor="middle" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">
                          {i === 0 ? 'Nonce / IV O_0' : 'Keystream O_1'}
                        </text>
                        <line x1={x0 + 80} y1="80" x2={x0 + 80} y2="102" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#modeArr)" />
                        <rect x={x0 + 20} y="106" width="120" height="38" rx="5" fill="#121216" stroke="#2563eb" strokeWidth="1.5" />
                        <text x={x0 + 80} y="129" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="600">Encrypt E_K</text>
                        <line x1={x0 + 80} y1="144" x2={x0 + 80} y2="170" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#modeArr)" />
                        <circle cx={x0 + 80} cy="186" r="14" fill="#121216" stroke="#3b82f6" strokeWidth="1.5" />
                        <text x={x0 + 80} y="190" textAnchor="middle" fill="#f3f4f6" fontSize="9" fontFamily="IBM Plex Mono">XOR</text>
                        <rect x={x0 - 55} y="171" width="70" height="30" rx="4" fill="#1e1e24" stroke="#3b82f6" />
                        <text x={x0 - 20} y="190" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontFamily="IBM Plex Mono">P_{i + 1}</text>
                        <line x1={x0 + 15} y1="186" x2={x0 + 62} y2="186" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#modeArr)" />
                        <line x1={x0 + 80} y1="200" x2={x0 + 80} y2="222" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#modeArr)" />
                        <rect x={x0 + 30} y="225" width="100" height="28" rx="4" fill="#1e1e24" stroke="#06b6d4" />
                        <text x={x0 + 80} y="243" textAnchor="middle" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">C_{i + 1}</text>
                      </g>
                    );
                  })}
                  <path d="M 170 156 L 330 156 L 330 64 L 466 64" fill="none" stroke="#60a5fa" strokeWidth="1.6" markerEnd="url(#modeArr)" />
                  <text x="275" y="148" fill="#60a5fa" fontSize="10" fontFamily="IBM Plex Mono">Pre-XOR Output O_1 fed forward</text>
                </g>
              )}
            </svg>
          </div>
        );

      case 'it410-stream-otp-cryptanalysis':
        return (
          <svg viewBox="0 0 880 295" className="w-full h-auto block">
            <rect width="880" height="295" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              SYNCHRONOUS STREAM CIPHER / RC5 DATA-DEPENDENT ROTATION &amp; CRYPTANALYTIC HIERARCHY
            </text>

            {/* Left: Stream Cipher / Vernam OTP */}
            <rect x="30" y="54" width="120" height="44" rx="5" fill="#1e1e24" stroke="#06b6d4" />
            <text x="90" y="74" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">Short Seed Key K</text>
            <text x="90" y="90" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="IBM Plex Mono">128-bit / True Rand</text>

            <rect x="30" y="128" width="120" height="50" rx="5" fill="#121216" stroke="#2563eb" strokeWidth="1.5" />
            <text x="90" y="150" textAnchor="middle" fill="#60a5fa" fontSize="11" fontWeight="600">PRNG / Keystream</text>
            <text x="90" y="166" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">k_1, k_2, ..., k_i</text>

            <circle cx="235" cy="153" r="16" fill="#1e1e24" stroke="#3b82f6" strokeWidth="1.6" />
            <text x="235" y="157" textAnchor="middle" fill="#f3f4f6" fontSize="10" fontFamily="IBM Plex Mono">XOR</text>

            <rect x="180" y="64" width="110" height="36" rx="4" fill="#1e1e24" stroke="#3b82f6" />
            <text x="235" y="86" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontFamily="IBM Plex Mono">Plaintext p_i</text>

            <rect x="180" y="216" width="110" height="36" rx="4" fill="#1e1e24" stroke="#06b6d4" />
            <text x="235" y="238" textAnchor="middle" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">Cipher c_i = p_i^k_i</text>

            <line x1="90" y1="98" x2="90" y2="126" stroke="#06b6d4" strokeWidth="1.5" />
            <line x1="150" y1="153" x2="219" y2="153" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="235" y1="100" x2="235" y2="137" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="235" y1="169" x2="235" y2="216" stroke="#06b6d4" strokeWidth="1.5" />

            <line x1="340" y1="48" x2="340" y2="275" stroke="#272730" strokeWidth="1" />

            {/* Right: Cryptanalytic Attack Ladder (Weakest to Strongest Adversary Power) */}
            <text x="368" y="62" fill="#f3f4f6" fontSize="12" fontWeight="600">
              Adversary Capability Escalation (Cryptanalysis Models):
            </text>
            {[
              { name: '1. Ciphertext-Only Attack (COA)', desc: 'Knows only E & Y; relies on frequency / statistical entropy', w: 460, c: '#1e1e24' },
              { name: '2. Known-Plaintext Attack (KPA)', desc: 'Knows pairs (X_i, Y_i); breaks Hill cipher & linear LFSRs', w: 472, c: '#1e293b' },
              { name: '3. Chosen-Plaintext Attack (CPA)', desc: 'Selects X_i -> obtains E_K(X_i); Differential Cryptanalysis', w: 484, c: '#1e293b' },
              { name: '4. Chosen-Ciphertext Attack (CCA)', desc: 'Selects Y_i -> obtains D_K(Y_i); Bleichenbacher / Padding Oracle', w: 492, c: '#172554' },
            ].map((item, idx) => (
              <g key={item.name}>
                <rect
                  x="368"
                  y={78 + idx * 50}
                  width={item.w}
                  height="40"
                  rx="5"
                  fill={item.c}
                  stroke={idx === 3 ? '#3b82f6' : '#2d2d37'}
                />
                <text x="382" y={95 + idx * 50} fill="#60a5fa" fontSize="11" fontWeight="600">
                  {item.name}
                </text>
                <text x="382" y={111 + idx * 50} fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">
                  {item.desc}
                </text>
              </g>
            ))}
          </svg>
        );

      case 'it401-kdd-pipeline':
        return (
          <svg viewBox="0 0 880 280" className="w-full h-auto block">
            <defs>
              <marker id="kddArr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
              </marker>
            </defs>
            <rect width="880" height="280" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              ITERATIVE 7-STAGE KNOWLEDGE DISCOVERY IN DATABASES (KDD) ARCHITECTURE (HAN &amp; KAMBER)
            </text>

            {[
              { step: '1. Cleaning', sub: 'Noise & Missing', x: 24, hi: false },
              { step: '2. Integration', sub: 'Heterogeneous DB', x: 144, hi: false },
              { step: '3. Selection', sub: 'Task-Relevant', x: 264, hi: false },
              { step: '4. Transform', sub: 'Norm / Aggreg.', x: 384, hi: false },
              { step: '5. Data Mining', sub: 'Pattern Extract', x: 504, hi: true },
              { step: '6. Evaluation', sub: 'Interestingness', x: 634, hi: false },
              { step: '7. Knowledge', sub: 'Visualization', x: 754, hi: false },
            ].map((node, idx) => (
              <g key={node.step}>
                <rect
                  x={node.x}
                  y="96"
                  width={node.hi ? '112' : '102'}
                  height="74"
                  rx="6"
                  fill={node.hi ? '#172554' : '#1e1e24'}
                  stroke={node.hi ? '#3b82f6' : '#2d2d37'}
                  strokeWidth={node.hi ? '1.8' : '1.2'}
                />
                <text x={node.x + (node.hi ? 56 : 51)} y="128" textAnchor="middle" fill={node.hi ? '#60a5fa' : '#f3f4f6'} fontSize="11.5" fontWeight="600">
                  {node.step}
                </text>
                <text x={node.x + (node.hi ? 56 : 51)} y="148" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">
                  {node.sub}
                </text>
                {idx < 6 && (
                  <line
                    x1={node.x + (node.hi ? 112 : 102)}
                    y1="133"
                    x2={node.x + (node.hi ? 126 : 116)}
                    y2="133"
                    stroke="#3b82f6"
                    strokeWidth="1.6"
                    markerEnd="url(#kddArr)"
                  />
                )}
              </g>
            ))}

            {/* Preprocessing Bracket */}
            <path d="M 28 84 L 28 70 L 484 70 L 484 84" fill="none" stroke="#06b6d4" strokeWidth="1.4" />
            <text x="256" y="61" textAnchor="middle" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">
              Data Preprocessing &amp; Warehousing Phase (~60-80% of KDD Effort)
            </text>

            {/* Feedback Loop */}
            <path d="M 685 170 L 685 224 L 315 224 L 315 174" fill="none" stroke="#60a5fa" strokeDasharray="5 3" strokeWidth="1.4" markerEnd="url(#kddArr)" />
            <text x="500" y="244" textAnchor="middle" fill="#9ca3af" fontSize="11">
              Iterative Refinement Loop: Threshold tuning, feature re-selection, and hypothesis revision
            </text>
          </svg>
        );

      case 'it401-dm-taxonomy':
        return (
          <svg viewBox="0 0 880 280" className="w-full h-auto block">
            <rect width="880" height="280" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              TAXONOMY OF DATA MINING FUNCTIONALITIES: DESCRIPTIVE VS. PREDICTIVE TASKS
            </text>

            {/* Root */}
            <rect x="315" y="46" width="250" height="40" rx="6" fill="#172554" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="440" y="70" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontWeight="600">Data Mining Functionalities</text>

            {/* Left Branch: Descriptive */}
            <line x1="380" y1="86" x2="220" y2="118" stroke="#06b6d4" strokeWidth="1.5" />
            <rect x="95" y="118" width="250" height="38" rx="5" fill="#121216" stroke="#06b6d4" />
            <text x="220" y="142" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="600">Descriptive (Unsupervised)</text>

            {/* Right Branch: Predictive */}
            <line x1="500" y1="86" x2="660" y2="118" stroke="#3b82f6" strokeWidth="1.5" />
            <rect x="535" y="118" width="250" height="38" rx="5" fill="#121216" stroke="#3b82f6" />
            <text x="660" y="142" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="600">Predictive (Supervised Inference)</text>

            {/* Descriptive Leaves */}
            {[
              { t: 'Characterization', d: 'Target class summary' },
              { t: 'Association Rules', d: 'Support & Confidence' },
              { t: 'Clustering', d: 'Intra-high / Inter-low' },
            ].map((leaf, i) => (
              <g key={leaf.t}>
                <rect x={28 + i * 138} y="190" width="128" height="62" rx="5" fill="#1e1e24" stroke="#2d2d37" />
                <text x={92 + i * 138} y="216" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">{leaf.t}</text>
                <text x={92 + i * 138} y="236" textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontFamily="IBM Plex Mono">{leaf.d}</text>
              </g>
            ))}

            {/* Predictive Leaves */}
            {[
              { t: 'Classification', d: 'Discrete class labels' },
              { t: 'Regression', d: 'Continuous values' },
              { t: 'Outlier / Trend', d: 'Anomaly & Evolution' },
            ].map((leaf, i) => (
              <g key={leaf.t}>
                <rect x={456 + i * 138} y="190" width="128" height="62" rx="5" fill="#1e1e24" stroke="#2d2d37" />
                <text x={520 + i * 138} y="216" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">{leaf.t}</text>
                <text x={520 + i * 138} y="236" textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontFamily="IBM Plex Mono">{leaf.d}</text>
              </g>
            ))}
          </svg>
        );

      case 'it401-cleaning-integration':
        return (
          <svg viewBox="0 0 880 285" className="w-full h-auto block">
            <rect width="880" height="285" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              NOISY DATA BINNING SMOOTHING (SORTED: 4, 8, 15, 21, 21, 24, 25, 28, 34) &amp; NORMALIZATION SCALES
            </text>

            {/* Binning Example */}
            <rect x="28" y="50" width="405" height="210" rx="6" fill="#121216" stroke="#2d2d37" />
            <text x="46" y="75" fill="#06b6d4" fontSize="12" fontWeight="600">Equal-Frequency Partitioning (Depth k = 3):</text>
            <text x="46" y="98" fill="#f3f4f6" fontSize="11" fontFamily="IBM Plex Mono">Bin 1: [4, 8, 15]   | Bin 2: [21, 21, 24] | Bin 3: [25, 28, 34]</text>

            <rect x="46" y="114" width="368" height="38" rx="4" fill="#1e1e24" stroke="#3b82f6" />
            <text x="58" y="130" fill="#60a5fa" fontSize="10.5" fontWeight="600">Smooth by Bin Means:</text>
            <text x="58" y="145" fill="#f3f4f6" fontSize="10.5" fontFamily="IBM Plex Mono">[9, 9, 9]           | [22, 22, 22]        | [29, 29, 29]</text>

            <rect x="46" y="162" width="368" height="38" rx="4" fill="#1e1e24" stroke="#06b6d4" />
            <text x="58" y="178" fill="#06b6d4" fontSize="10.5" fontWeight="600">Smooth by Bin Boundaries (Min/Max Closest):</text>
            <text x="58" y="193" fill="#f3f4f6" fontSize="10.5" fontFamily="IBM Plex Mono">[4, 4, 15]          | [21, 21, 24]        | [25, 25, 34]</text>

            <text x="46" y="232" fill="#9ca3af" fontSize="10.5">
              Note: In Bin 1 [4, 8, 15], |8 - 4| = 4 &lt; |15 - 8| = 7, so 8 maps to 4.
            </text>

            {/* Right: Normalization Formulas */}
            <rect x="454" y="50" width="398" height="210" rx="6" fill="#121216" stroke="#2d2d37" />
            <text x="474" y="75" fill="#60a5fa" fontSize="12" fontWeight="600">Three Canonical Feature Transformations:</text>

            <text x="474" y="104" fill="#f3f4f6" fontSize="11" fontWeight="600">1. Min-Max [new_min, new_max]:</text>
            <text x="486" y="122" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">v&apos; = ((v - minA)/(maxA - minA))*(nMax - nMin) + nMin</text>

            <text x="474" y="154" fill="#f3f4f6" fontSize="11" fontWeight="600">2. Z-Score (Zero-Mean Unit-Variance):</text>
            <text x="486" y="172" fill="#60a5fa" fontSize="11" fontFamily="IBM Plex Mono">v&apos; = (v - mean_A) / std_dev_A   (robust if max unknown)</text>

            <text x="474" y="204" fill="#f3f4f6" fontSize="11" fontWeight="600">3. Decimal Scaling:</text>
            <text x="486" y="222" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">v&apos; = v / 10^j  where j = smallest int s.t. max(|v&apos;|) &lt; 1</text>
          </svg>
        );

      case 'it401-reduction-pca':
        return (
          <svg viewBox="0 0 880 280" className="w-full h-auto block">
            <rect width="880" height="280" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              DATA REDUCTION STRATEGIES: PCA ORTHOGONAL EIGENVECTOR PROJECTION &amp; WAVELET/CUBE COMPRESSION
            </text>

            {/* Left: Coordinate Scatter + PC1/PC2 */}
            <rect x="32" y="48" width="360" height="208" rx="6" fill="#121216" stroke="#2d2d37" />
            <line x1="70" y1="225" x2="355" y2="225" stroke="#9ca3af" strokeWidth="1.2" />
            <line x1="70" y1="225" x2="70" y2="68" stroke="#9ca3af" strokeWidth="1.2" />
            <text x="360" y="229" fill="#9ca3af" fontSize="11" fontFamily="IBM Plex Mono">X_1</text>
            <text x="62" y="64" fill="#9ca3af" fontSize="11" fontFamily="IBM Plex Mono">X_2</text>

            {/* PC1 Principal Axis */}
            <line x1="90" y1="210" x2="335" y2="85" stroke="#3b82f6" strokeWidth="2.2" />
            <text x="305" y="78" fill="#60a5fa" fontSize="11" fontWeight="600" fontFamily="IBM Plex Mono">e_1 (PC1: Max Var)</text>

            {/* PC2 Orthogonal Axis */}
            <line x1="175" y1="95" x2="235" y2="212" stroke="#06b6d4" strokeWidth="1.6" strokeDasharray="4 3" />
            <text x="242" y="210" fill="#06b6d4" fontSize="10" fontFamily="IBM Plex Mono">e_2 (PC2)</text>

            {/* Data Points */}
            {[
              [115, 195], [135, 180], [155, 182], [178, 162], [198, 150],
              [215, 148], [238, 132], [260, 126], [285, 108], [308, 98],
            ].map(([cx, cy], idx) => (
              <circle key={idx} cx={cx} cy={cy} r="3.5" fill="#f3f4f6" />
            ))}

            {/* Right: Data Reduction 4-Pillar Grid */}
            {[
              { t: 'Dimensionality Reduction', d: 'PCA (Covariance Eigenvectors), DWT Wavelets, Attribute Subset Forward/Backward Selection', x: 416, y: 48 },
              { t: 'Numerosity (Parametric)', d: 'Log-Linear & Multiple Regression Models: store only parameters (w_0, w_1) instead of N tuples', x: 642, y: 48 },
              { t: 'Numerosity (Non-Parametric)', d: 'Histograms (Equal-Width / Equal-Freq), Clustering centroids, SRSWOR/SRSWOR/Stratified Sampling', x: 416, y: 158 },
              { t: 'Data Cube Aggregation', d: 'Roll-up from base cuboid (day) to apex/summary cuboids (quarter/year) preserving query semantics', x: 642, y: 158 },
            ].map((card) => (
              <g key={card.t}>
                <rect x={card.x} y={card.y} width="212" height="98" rx="6" fill="#1e1e24" stroke="#2d2d37" />
                <text x={card.x + 14} y={card.y + 26} fill="#60a5fa" fontSize="11.5" fontWeight="600">{card.t}</text>
                <foreignObject x={card.x + 14} y={card.y + 34} width="186" height="58">
                  <div className="text-[10.5px] leading-snug text-[#9ca3af] font-mono">{card.d}</div>
                </foreignObject>
              </g>
            ))}
          </svg>
        );

      case 'it401-discretization-aoi':
        return (
          <svg viewBox="0 0 880 270" className="w-full h-auto block">
            <rect width="880" height="270" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              CONCEPT HIERARCHY GENERATION: 3-4-5 NATURAL PARTITIONING RULE &amp; ATTRIBUTE-ORIENTED INDUCTION
            </text>

            {/* Left: 3-4-5 Rule Box */}
            <rect x="28" y="50" width="420" height="198" rx="6" fill="#121216" stroke="#2563eb" strokeWidth="1.4" />
            <text x="46" y="76" fill="#f3f4f6" fontSize="12" fontWeight="600">
              3-4-5 Rule Interval Count Selection (Most Significant Digit Range):
            </text>
            <text x="46" y="106" fill="#60a5fa" fontSize="11" fontFamily="IBM Plex Mono">
              • Covers 3, 6, or 9 distinct MSDs -&gt; Partition into 3 sub-intervals
            </text>
            <text x="46" y="132" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">
              • Covers 7 distinct MSDs          -&gt; Partition into 2-3-2 (3 intervals)
            </text>
            <text x="46" y="158" fill="#60a5fa" fontSize="11" fontFamily="IBM Plex Mono">
              • Covers 2, 4, or 8 distinct MSDs -&gt; Partition into 4 equal intervals
            </text>
            <text x="46" y="184" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">
              • Covers 1, 5, or 10 distinct MSDs-&gt; Partition into 5 equal intervals
            </text>
            <text x="46" y="220" fill="#9ca3af" fontSize="10.5">
              Applied recursively top-down using 5th-95th percentile range to avoid outlier skew.
            </text>

            {/* Right: Concept Hierarchy Tree */}
            <rect x="472" y="50" width="380" height="198" rx="6" fill="#121216" stroke="#2d2d37" />
            <text x="492" y="76" fill="#f3f4f6" fontSize="12" fontWeight="600">
              Location Concept Hierarchy (Total Order):
            </text>
            {[
              { lvl: 'Level 0 (All / Apex)', val: 'ALL (Generalized Root)', y: 94, c: '#3b82f6' },
              { lvl: 'Level 1 (Country)', val: 'India | USA | Germany', y: 132, c: '#60a5fa' },
              { lvl: 'Level 2 (State)', val: 'Rajasthan | Karnataka | Delhi', y: 170, c: '#06b6d4' },
              { lvl: 'Level 3 (City / Leaf)', val: 'Jaipur | Tonk | Bengaluru', y: 208, c: '#9ca3af' },
            ].map((row) => (
              <g key={row.lvl}>
                <rect x="492" y={row.y} width="340" height="28" rx="4" fill="#1e1e24" stroke={row.c} strokeWidth="1" />
                <text x="504" y={row.y + 18} fill={row.c} fontSize="10.5" fontWeight="600" fontFamily="IBM Plex Mono">{row.lvl}:</text>
                <text x="652" y={row.y + 18} fill="#f3f4f6" fontSize="10.5" fontFamily="IBM Plex Mono">{row.val}</text>
              </g>
            ))}
          </svg>
        );

      case 'cs411-crt-architecture':
        return (
          <svg viewBox="0 0 880 290" className="w-full h-auto block">
            <rect width="880" height="290" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              REFRESH CATHODE RAY TUBE (CRT) INTERNAL HARDWARE ARCHITECTURE
            </text>

            {/* CRT Glass Envelope */}
            <path
              d="M 60 120 L 380 120 L 690 55 L 725 55 L 725 255 L 690 255 L 380 190 L 60 190 Z"
              fill="#121216"
              stroke="#3b82f6"
              strokeWidth="1.8"
            />
            {/* Phosphor Screen Coating */}
            <rect x="716" y="57" width="9" height="196" fill="#06b6d4" />
            <text x="795" y="145" textAnchor="middle" fill="#06b6d4" fontSize="11" fontWeight="600">Phosphor</text>
            <text x="795" y="161" textAnchor="middle" fill="#f3f4f6" fontSize="10.5">Coated Screen</text>
            <text x="795" y="177" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">(Fluorescence +</text>
            <text x="795" y="191" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">Phosphorescence)</text>

            {/* Heating Filament & Cathode */}
            <rect x="74" y="142" width="44" height="26" rx="3" fill="#1e1e24" stroke="#60a5fa" />
            <text x="96" y="159" textAnchor="middle" fill="#f3f4f6" fontSize="9.5" fontFamily="IBM Plex Mono">Cathode</text>
            <text x="96" y="214" textAnchor="middle" fill="#9ca3af" fontSize="10">Heater + Cathode</text>

            {/* Control Grid */}
            <rect x="135" y="132" width="22" height="46" rx="2" fill="#172554" stroke="#3b82f6" />
            <text x="146" y="108" textAnchor="middle" fill="#60a5fa" fontSize="10" fontWeight="600">Control Grid</text>
            <text x="146" y="94" textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontFamily="IBM Plex Mono">(Intensity -V)</text>

            {/* Focusing Anode */}
            <rect x="182" y="135" width="52" height="40" rx="3" fill="#1e1e24" stroke="#06b6d4" />
            <text x="208" y="159" textAnchor="middle" fill="#06b6d4" fontSize="10" fontFamily="IBM Plex Mono">Focus</text>
            <text x="208" y="214" textAnchor="middle" fill="#9ca3af" fontSize="10">Focusing System</text>

            {/* Accelerating Anode */}
            <rect x="252" y="135" width="52" height="40" rx="3" fill="#1e1e24" stroke="#3b82f6" />
            <text x="278" y="159" textAnchor="middle" fill="#60a5fa" fontSize="10" fontFamily="IBM Plex Mono">+Anode</text>

            {/* Vertical & Horizontal Deflection Plates */}
            <rect x="330" y="128" width="42" height="10" fill="#2563eb" />
            <rect x="330" y="172" width="42" height="10" fill="#2563eb" />
            <text x="351" y="108" textAnchor="middle" fill="#60a5fa" fontSize="10">Vertical Plates</text>

            <polygon points="395,140 435,135 435,175 395,170" fill="#06b6d4" fillOpacity="0.35" stroke="#06b6d4" />
            <text x="425" y="224" textAnchor="middle" fill="#06b6d4" fontSize="10">Horizontal Deflection</text>

            {/* Electron Beam */}
            <path d="M 118 155 L 415 155 L 716 105" fill="none" stroke="#60a5fa" strokeWidth="2.2" strokeDasharray="5 2" />
            <circle cx="716" cy="105" r="5" fill="#60a5fa" />
            <text x="565" y="114" fill="#60a5fa" fontSize="10.5" fontFamily="IBM Plex Mono">Focused e- Beam</text>
          </svg>
        );

      case 'cs411-raster-vs-random':
        return (
          <svg viewBox="0 0 880 285" className="w-full h-auto block">
            <rect width="880" height="285" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              LEFT: INTERLACED RASTER SCAN RETRACE PATH   |   RIGHT: RASTER FRAME BUFFER SYSTEM ARCHITECTURE
            </text>

            {/* Left: Raster Scan Lines + Retrace */}
            <rect x="36" y="52" width="320" height="196" rx="6" fill="#121216" stroke="#2d2d37" />
            {[0, 1, 2, 3].map((row) => {
              const yOdd = 78 + row * 38;
              const yEven = 97 + row * 38;
              return (
                <g key={row}>
                  {/* Odd Field Solid Blue */}
                  <line x1="60" y1={yOdd} x2="330" y2={yOdd} stroke="#3b82f6" strokeWidth="2" />
                  {/* Horizontal Retrace Dashed */}
                  <line x1="330" y1={yOdd} x2="60" y2={yOdd + 38 <= 192 ? yOdd + 38 : 78} stroke="#9ca3af" strokeWidth="1" strokeDasharray="3 3" />
                  {/* Even Field Cyan */}
                  <line x1="60" y1={yEven} x2="330" y2={yEven} stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="7 2" />
                </g>
              );
            })}
            {/* Vertical Retrace */}
            <line x1="330" y1="211" x2="60" y2="78" stroke="#60a5fa" strokeWidth="1.6" strokeDasharray="5 3" />
            <text x="196" y="268" textAnchor="middle" fill="#9ca3af" fontSize="10.5" fontFamily="IBM Plex Mono">
              Solid: Odd Field (1/60s) | Dashed Cyan: Even Field (1/60s)
            </text>

            {/* Right: Raster Architecture */}
            <rect x="400" y="62" width="96" height="46" rx="5" fill="#1e1e24" stroke="#3b82f6" />
            <text x="448" y="89" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">CPU</text>

            <rect x="530" y="62" width="136" height="46" rx="5" fill="#1e1e24" stroke="#3b82f6" />
            <text x="598" y="89" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">System Memory</text>

            <rect x="400" y="148" width="132" height="52" rx="5" fill="#121216" stroke="#06b6d4" strokeWidth="1.5" />
            <text x="466" y="171" textAnchor="middle" fill="#06b6d4" fontSize="11" fontWeight="600">Display Processor</text>
            <text x="466" y="187" textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontFamily="IBM Plex Mono">(Scan Conversion)</text>

            <rect x="564" y="148" width="122" height="52" rx="5" fill="#172554" stroke="#3b82f6" strokeWidth="1.6" />
            <text x="625" y="171" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">Frame Buffer</text>
            <text x="625" y="187" textAnchor="middle" fill="#60a5fa" fontSize="9.5" fontFamily="IBM Plex Mono">(Refresh RAM)</text>

            <rect x="716" y="148" width="138" height="52" rx="5" fill="#121216" stroke="#2563eb" />
            <text x="785" y="171" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">Video Controller</text>
            <text x="785" y="187" textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontFamily="IBM Plex Mono">-&gt; CRT Monitor</text>

            {/* System Bus */}
            <line x1="390" y1="126" x2="680" y2="126" stroke="#60a5fa" strokeWidth="2.2" />
            <text x="728" y="130" fill="#60a5fa" fontSize="10.5" fontFamily="IBM Plex Mono">System Bus</text>
            <line x1="448" y1="108" x2="448" y2="126" stroke="#60a5fa" strokeWidth="1.6" />
            <line x1="598" y1="108" x2="598" y2="126" stroke="#60a5fa" strokeWidth="1.6" />
            <line x1="466" y1="126" x2="466" y2="148" stroke="#60a5fa" strokeWidth="1.6" />
            <line x1="532" y1="174" x2="564" y2="174" stroke="#06b6d4" strokeWidth="1.6" />
            <line x1="686" y1="174" x2="716" y2="174" stroke="#3b82f6" strokeWidth="1.6" />
          </svg>
        );

      case 'cs411-color-crt-dvst':
        return (
          <svg viewBox="0 0 880 275" className="w-full h-auto block">
            <rect width="880" height="275" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              COLOR CRT METHODS: BEAM PENETRATION (4 COLORS) VS. SHADOW MASK DELTA-DELTA TRIAD (16.7M COLORS)
            </text>

            {/* Left: Beam Penetration */}
            <rect x="28" y="48" width="390" height="205" rx="6" fill="#121216" stroke="#2d2d37" />
            <text x="48" y="74" fill="#60a5fa" fontSize="12" fontWeight="600">1. Beam Penetration Method (Random Scan)</text>
            <rect x="308" y="92" width="16" height="125" fill="#991b1b" />
            <rect x="324" y="92" width="16" height="125" fill="#065f46" />
            <text x="352" y="130" fill="#f3f4f6" fontSize="10" fontFamily="IBM Plex Mono">Inner: Red</text>
            <text x="352" y="152" fill="#06b6d4" fontSize="10" fontFamily="IBM Plex Mono">Outer: Green</text>

            <line x1="62" y1="120" x2="308" y2="120" stroke="#9ca3af" strokeWidth="1.6" strokeDasharray="4 2" />
            <text x="62" y="112" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">Slow e- Beam -&gt; Red Only</text>

            <line x1="62" y1="162" x2="320" y2="162" stroke="#60a5fa" strokeWidth="1.8" />
            <text x="62" y="154" fill="#60a5fa" fontSize="10" fontFamily="IBM Plex Mono">Med Speed -&gt; Orange / Yellow</text>

            <line x1="62" y1="202" x2="334" y2="202" stroke="#06b6d4" strokeWidth="2.2" />
            <text x="62" y="194" fill="#06b6d4" fontSize="10" fontFamily="IBM Plex Mono">High Accel Voltage -&gt; Green</text>

            {/* Right: Shadow Mask */}
            <rect x="444" y="48" width="408" height="205" rx="6" fill="#121216" stroke="#2d2d37" />
            <text x="464" y="74" fill="#06b6d4" fontSize="12" fontWeight="600">2. Shadow Mask Method (Raster Scan RGB Guns)</text>

            {/* 3 Guns */}
            <circle cx="486" cy="112" r="11" fill="#1e1e24" stroke="#3b82f6" />
            <text x="486" y="116" textAnchor="middle" fill="#f3f4f6" fontSize="10" fontFamily="IBM Plex Mono">R</text>
            <circle cx="486" cy="152" r="11" fill="#1e1e24" stroke="#06b6d4" />
            <text x="486" y="156" textAnchor="middle" fill="#f3f4f6" fontSize="10" fontFamily="IBM Plex Mono">G</text>
            <circle cx="486" cy="192" r="11" fill="#1e1e24" stroke="#60a5fa" />
            <text x="486" y="196" textAnchor="middle" fill="#f3f4f6" fontSize="10" fontFamily="IBM Plex Mono">B</text>

            {/* Shadow Mask Perforation */}
            <line x1="650" y1="90" x2="650" y2="144" stroke="#9ca3af" strokeWidth="4" />
            <line x1="650" y1="160" x2="650" y2="215" stroke="#9ca3af" strokeWidth="4" />
            <text x="650" y="234" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">Shadow Mask Aperture</text>

            {/* Beams converging through hole */}
            <line x1="497" y1="112" x2="758" y2="182" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="497" y1="152" x2="758" y2="152" stroke="#06b6d4" strokeWidth="1.5" />
            <line x1="497" y1="192" x2="758" y2="122" stroke="#60a5fa" strokeWidth="1.5" />

            {/* Phosphor Triad */}
            <circle cx="766" cy="122" r="9" fill="#2563eb" />
            <circle cx="766" cy="152" r="9" fill="#06b6d4" />
            <circle cx="766" cy="182" r="9" fill="#60a5fa" />
            <text x="808" y="155" textAnchor="middle" fill="#f3f4f6" fontSize="10" fontFamily="IBM Plex Mono">RGB Triad</text>
          </svg>
        );

      case 'cs411-flatpanel-clut':
        return (
          <svg viewBox="0 0 880 265" className="w-full h-auto block">
            <rect width="880" height="265" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              8-BIT PLANE FRAME BUFFER WITH 24-BIT COLOR LOOKUP TABLE (CLUT) ARCHITECTURE
            </text>

            {/* Frame Buffer */}
            <rect x="34" y="68" width="185" height="130" rx="6" fill="#121216" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="126" y="94" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontWeight="600">8-Plane Frame Buffer</text>
            <text x="126" y="114" textAnchor="middle" fill="#9ca3af" fontSize="10.5" fontFamily="IBM Plex Mono">Pixel(x, y) Index:</text>
            <rect x="60" y="128" width="132" height="32" rx="4" fill="#172554" stroke="#60a5fa" />
            <text x="126" y="149" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="600" fontFamily="IBM Plex Mono">01000011 (67)</text>
            <text x="126" y="182" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">1 Byte/Pixel RAM</text>

            {/* CLUT */}
            <rect x="295" y="54" width="265" height="162" rx="6" fill="#121216" stroke="#06b6d4" strokeWidth="1.6" />
            <text x="427" y="79" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="600">Lookup Table (2^8 = 256 Entries)</text>
            <text x="335" y="102" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">Idx</text>
            <text x="435" y="102" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">24-Bit RGB Entry (8R | 8G | 8B)</text>

            <rect x="315" y="112" width="225" height="24" rx="3" fill="#1e1e24" />
            <text x="335" y="128" fill="#9ca3af" fontSize="10.5" fontFamily="IBM Plex Mono">00</text>
            <text x="390" y="128" fill="#9ca3af" fontSize="10.5" fontFamily="IBM Plex Mono">0x00   |  0x00   |  0x00</text>

            <rect x="315" y="142" width="225" height="28" rx="3" fill="#172554" stroke="#3b82f6" />
            <text x="335" y="160" fill="#60a5fa" fontSize="11" fontWeight="600" fontFamily="IBM Plex Mono">67</text>
            <text x="390" y="160" fill="#f3f4f6" fontSize="11" fontWeight="600" fontFamily="IBM Plex Mono">0x25   |  0x63   |  0xEB</text>

            <rect x="315" y="176" width="225" height="24" rx="3" fill="#1e1e24" />
            <text x="335" y="192" fill="#9ca3af" fontSize="10.5" fontFamily="IBM Plex Mono">255</text>
            <text x="390" y="192" fill="#9ca3af" fontSize="10.5" fontFamily="IBM Plex Mono">0xFF   |  0xFF   |  0xFF</text>

            {/* DAC + RGB Guns */}
            <rect x="635" y="68" width="210" height="130" rx="6" fill="#121216" stroke="#2563eb" strokeWidth="1.5" />
            <text x="740" y="94" textAnchor="middle" fill="#f3f4f6" fontSize="12" fontWeight="600">3 x 8-Bit DACs -&gt; CRT</text>
            <text x="740" y="122" textAnchor="middle" fill="#3b82f6" fontSize="11" fontFamily="IBM Plex Mono">Red Gun   &lt;- 8 bits (0x25)</text>
            <text x="740" y="146" textAnchor="middle" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">Green Gun &lt;- 8 bits (0x63)</text>
            <text x="740" y="170" textAnchor="middle" fill="#60a5fa" fontSize="11" fontFamily="IBM Plex Mono">Blue Gun  &lt;- 8 bits (0xEB)</text>

            <line x1="219" y1="144" x2="315" y2="156" stroke="#60a5fa" strokeWidth="1.8" />
            <line x1="540" y1="156" x2="635" y2="144" stroke="#06b6d4" strokeWidth="1.8" />

            <text x="440" y="244" textAnchor="middle" fill="#9ca3af" fontSize="11">
              256 simultaneous colors displayed on screen chosen from a palette of 2^24 = 16,777,216 colors!
            </text>
          </svg>
        );

      case 'cs411-input-construction':
        return (
          <svg viewBox="0 0 880 265" className="w-full h-auto block">
            <rect width="880" height="265" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              SIX GKS/PHIGS LOGICAL INPUT CLASSES &amp; INTERACTIVE GRAVITY FIELD / RUBBER-BAND GEOMETRY
            </text>

            {/* Left: 6 Logical Classes */}
            {[
              { c: 'LOCATOR', d: 'Returns (x, y) coordinate (Mouse, Tablet)' },
              { c: 'STROKE', d: 'Returns array of [(x_1,y_1)...(x_n,y_n)]' },
              { c: 'STRING', d: 'Returns alphanumeric char sequence (Keyboard)' },
              { c: 'VALUATOR', d: 'Returns scalar real in [min, max] (Dial/Slider)' },
              { c: 'CHOICE', d: 'Returns menu/button selection index (Fn Keys)' },
              { c: 'PICK', d: 'Returns graphical object/segment ID (Light Pen)' },
            ].map((item, i) => {
              const row = i % 3;
              const col = Math.floor(i / 3);
              const x = 28 + col * 245;
              const y = 52 + row * 66;
              return (
                <g key={item.c}>
                  <rect x={x} y={y} width="232" height="54" rx="5" fill="#1e1e24" stroke="#2d2d37" />
                  <text x={x + 12} y={y + 22} fill="#60a5fa" fontSize="11" fontWeight="600" fontFamily="IBM Plex Mono">{item.c}</text>
                  <text x={x + 12} y={y + 40} fill="#9ca3af" fontSize="10">{item.d}</text>
                </g>
              );
            })}

            {/* Right: Gravity Field + Rubber Band */}
            <rect x="530" y="52" width="322" height="186" rx="6" fill="#121216" stroke="#2563eb" />
            <text x="548" y="76" fill="#f3f4f6" fontSize="11.5" fontWeight="600">Gravity Field &amp; Rubber-Band Line:</text>

            {/* Existing Line with Gravity Boundary */}
            <line x1="565" y1="195" x2="705" y2="105" stroke="#06b6d4" strokeWidth="12" strokeOpacity="0.18" strokeLinecap="round" />
            <circle cx="565" cy="195" r="18" fill="#3b82f6" fillOpacity="0.18" stroke="#3b82f6" strokeDasharray="3 2" />
            <circle cx="705" cy="105" r="18" fill="#3b82f6" fillOpacity="0.18" stroke="#3b82f6" strokeDasharray="3 2" />
            <line x1="565" y1="195" x2="705" y2="105" stroke="#06b6d4" strokeWidth="2.2" />

            {/* Rubber-band stretching from endpoint */}
            <line x1="705" y1="105" x2="812" y2="135" stroke="#9ca3af" strokeWidth="1.2" strokeDasharray="4 3" />
            <line x1="705" y1="105" x2="808" y2="188" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="808" cy="188" r="4.5" fill="#60a5fa" />
            <text x="742" y="216" fill="#60a5fa" fontSize="10" fontFamily="IBM Plex Mono">Dynamic Cursor (x_t, y_t)</text>
            <text x="554" y="228" fill="#9ca3af" fontSize="9.5">Dashed circle: Endpoint snap gravity radius</text>
          </svg>
        );

      case 'elec-iot-architecture':
        return (
          <svg viewBox="0 0 880 280" className="w-full h-auto block">
            <rect width="880" height="280" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              M2M VS. IOT PROTOCOL TRANSITION &amp; CISCO / ITU-T LAYERED IOT REFERENCE MODEL
            </text>

            {/* Left: 7-Layer Stack */}
            {[
              '7. Collaboration & Processes (People / Business)',
              '6. Application Layer (Smart Grid, Home, Health)',
              '5. Data Abstraction (Aggregation, Schema Access)',
              '4. Data Accumulation (Storage: Event -> Query)',
              '3. Edge / Fog Computing (Filtering, Formatting)',
              '2. Connectivity (6LoWPAN, Gateways, Routing)',
              '1. Physical Devices & Controllers (Sensors/Actuators)',
            ].map((lvl, idx) => (
              <g key={lvl}>
                <rect
                  x="28"
                  y={48 + idx * 31}
                  width="390"
                  height="26"
                  rx="4"
                  fill={idx === 2 || idx === 6 ? '#172554' : '#1e1e24'}
                  stroke={idx === 2 || idx === 6 ? '#3b82f6' : '#2d2d37'}
                />
                <text x="42" y={65 + idx * 31} fill="#f3f4f6" fontSize="10.5" fontFamily="IBM Plex Mono">
                  {lvl}
                </text>
              </g>
            ))}

            {/* Right: M2M to IoT Conversion */}
            <rect x="448" y="48" width="404" height="212" rx="6" fill="#121216" stroke="#2d2d37" />
            <text x="468" y="74" fill="#06b6d4" fontSize="12" fontWeight="600">M2M Island -&gt; IP-Based IoT Conversion Gateway:</text>
            <rect x="468" y="96" width="110" height="68" rx="5" fill="#1e1e24" stroke="#9ca3af" />
            <text x="523" y="124" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">M2M Area Net</text>
            <text x="523" y="142" textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontFamily="IBM Plex Mono">ZigBee / Modbus</text>
            <text x="523" y="156" textAnchor="middle" fill="#9ca3af" fontSize="9.5" fontFamily="IBM Plex Mono">Non-IP Proprietary</text>

            <rect x="605" y="96" width="112" height="68" rx="5" fill="#172554" stroke="#3b82f6" />
            <text x="661" y="124" textAnchor="middle" fill="#60a5fa" fontSize="11" fontWeight="600">IoT Gateway</text>
            <text x="661" y="142" textAnchor="middle" fill="#f3f4f6" fontSize="9.5" fontFamily="IBM Plex Mono">Protocol Transl.</text>
            <text x="661" y="156" textAnchor="middle" fill="#06b6d4" fontSize="9.5" fontFamily="IBM Plex Mono">IPv6 / MQTT / CoAP</text>

            <rect x="742" y="96" width="92" height="68" rx="5" fill="#1e1e24" stroke="#06b6d4" />
            <text x="788" y="124" textAnchor="middle" fill="#f3f4f6" fontSize="11" fontWeight="600">Cloud / App</text>
            <text x="788" y="144" textAnchor="middle" fill="#06b6d4" fontSize="9.5" fontFamily="IBM Plex Mono">REST / Analytics</text>

            <line x1="578" y1="130" x2="605" y2="130" stroke="#3b82f6" strokeWidth="1.6" />
            <line x1="717" y1="130" x2="742" y2="130" stroke="#06b6d4" strokeWidth="1.6" />
            <text x="468" y="198" fill="#9ca3af" fontSize="10.5">
              Key Shift: Point-to-point vertical hardware silos -&gt; Horizontal IPv6,
            </text>
            <text x="468" y="216" fill="#9ca3af" fontSize="10.5">
              cloud-native open APIs, multi-tenant Sensor-Cloud virtualization.
            </text>
          </svg>
        );

      case 'elec-iot-sdn-fog':
        return (
          <svg viewBox="0 0 880 270" className="w-full h-auto block">
            <rect width="880" height="270" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              SOFTWARE-DEFINED NETWORKING (SDN FOR IOT) &amp; CLOUD-FOG-EDGE HIERARCHY
            </text>

            {/* Left: SDN 3-Plane Architecture */}
            <rect x="32" y="50" width="380" height="46" rx="5" fill="#1e1e24" stroke="#06b6d4" />
            <text x="222" y="71" textAnchor="middle" fill="#f3f4f6" fontSize="11.5" fontWeight="600">Application Plane (Traffic Eng, IDS, QoS)</text>
            <text x="222" y="87" textAnchor="middle" fill="#06b6d4" fontSize="9.5" fontFamily="IBM Plex Mono">Northbound API (REST / Intent APIs)</text>

            <rect x="32" y="118" width="380" height="52" rx="5" fill="#172554" stroke="#3b82f6" strokeWidth="1.5" />
            <text x="222" y="140" textAnchor="middle" fill="#60a5fa" fontSize="12" fontWeight="600">SDN Control Plane (Centralized Controller)</text>
            <text x="222" y="158" textAnchor="middle" fill="#f3f4f6" fontSize="10" fontFamily="IBM Plex Mono">Global Network Topology | Southbound: OpenFlow</text>

            <rect x="32" y="192" width="380" height="52" rx="5" fill="#1e1e24" stroke="#2d2d37" />
            <text x="222" y="214" textAnchor="middle" fill="#f3f4f6" fontSize="11.5" fontWeight="600">Data / Infrastructure Plane (IoT Switches &amp; Gateways)</text>
            <text x="222" y="232" textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="IBM Plex Mono">Flow-Table Match-Action Packet Forwarding Only</text>

            <line x1="222" y1="96" x2="222" y2="118" stroke="#06b6d4" strokeWidth="1.6" />
            <line x1="222" y1="170" x2="222" y2="192" stroke="#3b82f6" strokeWidth="1.6" />

            {/* Right: Cloud - Fog - Sensor Continuum */}
            <rect x="452" y="50" width="398" height="194" rx="6" fill="#121216" stroke="#2d2d37" />
            <text x="472" y="76" fill="#60a5fa" fontSize="12" fontWeight="600">Latency &amp; Compute Continuum (Sensor-Cloud + Fog):</text>
            <text x="472" y="108" fill="#f3f4f6" fontSize="11" fontFamily="IBM Plex Mono">Cloud Tier : High Latency (50-200ms) | Petabyte Batch</text>
            <text x="472" y="144" fill="#06b6d4" fontSize="11" fontFamily="IBM Plex Mono">Fog Tier   : Low Latency (1-15ms)    | Local Aggregation</text>
            <text x="472" y="180" fill="#60a5fa" fontSize="11" fontFamily="IBM Plex Mono">Edge/Mist  : Sub-ms Real-Time        | Sensor Actuation</text>
            <text x="472" y="218" fill="#9ca3af" fontSize="10.5">
              Sensor-Cloud virtualizes physical WSN nodes into multi-tenant virtual sensors!
            </text>
          </svg>
        );

      case 'elec-bda-4vs-lifecycle':
        return (
          <svg viewBox="0 0 880 270" className="w-full h-auto block">
            <rect width="880" height="270" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              BIG DATA 4Vs CHARACTERISTICS &amp; MATURITY ESCALATION OF ANALYTICS
            </text>

            {/* 4Vs Cards */}
            {[
              { v: 'VOLUME', d: 'TB -> PB -> ZB scale exceeding single-node RAM/disk' },
              { v: 'VELOCITY', d: 'Sub-second streaming ingestion (IoT, Clickstreams)' },
              { v: 'VARIETY', d: 'Structured SQL + Semi-struct JSON/XML + Unstructured' },
              { v: 'VERACITY', d: 'Uncertainty, noise, bias, and trustworthiness of data' },
            ].map((item, i) => (
              <g key={item.v}>
                <rect x={28 + i * 210} y="48" width="196" height="82" rx="6" fill="#1e1e24" stroke="#3b82f6" />
                <text x={42 + i * 210} y="74" fill="#60a5fa" fontSize="12" fontWeight="600" fontFamily="IBM Plex Mono">{item.v}</text>
                <foreignObject x={42 + i * 210} y="82" width="168" height="44">
                  <div className="text-[10px] leading-snug text-[#9ca3af]">{item.d}</div>
                </foreignObject>
              </g>
            ))}

            {/* 4 Analytics Types Progression */}
            {[
              { t: '1. Descriptive', q: 'What happened?', m: 'OLAP, Dashboards' },
              { t: '2. Diagnostic', q: 'Why did it happen?', m: 'Drill-down, Correlations' },
              { t: '3. Predictive', q: 'What will happen?', m: 'ML Regression, Ensembles' },
              { t: '4. Prescriptive', q: 'How to optimize?', m: 'Linear Prog., Simulation' },
            ].map((st, i) => (
              <g key={st.t}>
                <rect x={28 + i * 210} y="156" width="196" height="88" rx="6" fill="#121216" stroke={i >= 2 ? '#06b6d4' : '#2d2d37'} />
                <text x={42 + i * 210} y="180" fill="#f3f4f6" fontSize="11.5" fontWeight="600">{st.t}</text>
                <text x={42 + i * 210} y="200" fill="#06b6d4" fontSize="10.5" fontFamily="IBM Plex Mono">{st.q}</text>
                <text x={42 + i * 210} y="222" fill="#9ca3af" fontSize="10">{st.m}</text>
              </g>
            ))}
          </svg>
        );

      case 'elec-bda-ensemble':
        return (
          <svg viewBox="0 0 880 265" className="w-full h-auto block">
            <rect width="880" height="265" rx="8" fill="#0a0a0c" />
            <text x="24" y="28" fill="#60a5fa" fontSize="13" fontWeight="600" fontFamily="Plus Jakarta Sans">
              ENSEMBLE ANALYTIC ARCHITECTURES: PARALLEL BAGGING (VARIANCE REDUCTION) VS. SEQUENTIAL BOOSTING (BIAS REDUCTION)
            </text>

            {/* Left: Bagging */}
            <rect x="28" y="48" width="395" height="195" rx="6" fill="#121216" stroke="#3b82f6" />
            <text x="46" y="74" fill="#60a5fa" fontSize="12" fontWeight="600">Bagging / Random Forest (Bootstrap Aggregating)</text>
            <text x="46" y="100" fill="#f3f4f6" fontSize="10.5" fontFamily="IBM Plex Mono">Dataset D -&gt; Sample w/ Replacement: D_1, D_2, ..., D_M</text>
            <text x="46" y="124" fill="#06b6d4" fontSize="10.5" fontFamily="IBM Plex Mono">Train M Independent Models in Parallel: h_1, ..., h_M</text>
            <text x="46" y="148" fill="#f3f4f6" fontSize="10.5" fontFamily="IBM Plex Mono">Combine via Majority Vote / Mean: Var(avg) = sigma^2 / M</text>
            <text x="46" y="182" fill="#9ca3af" fontSize="10.5">Best for high-variance, low-bias learners (deep unpruned trees).</text>

            {/* Right: Boosting */}
            <rect x="454" y="48" width="398" height="195" rx="6" fill="#121216" stroke="#06b6d4" />
            <text x="472" y="74" fill="#06b6d4" fontSize="12" fontWeight="600">Boosting (AdaBoost / Gradient Boosting)</text>
            <text x="472" y="100" fill="#f3f4f6" fontSize="10.5" fontFamily="IBM Plex Mono">Round t: Train weak learner h_t on weighted tuples w^(t)</text>
            <text x="472" y="124" fill="#60a5fa" fontSize="10.5" fontFamily="IBM Plex Mono">Increase weights of misclassified tuples for Round t+1</text>
            <text x="472" y="148" fill="#f3f4f6" fontSize="10.5" fontFamily="IBM Plex Mono">Weighted Vote: H(x) = sign( sum_t alpha_t * h_t(x) )</text>
            <text x="472" y="182" fill="#9ca3af" fontSize="10.5">Reduces systematic bias sequentially; sensitive to noisy outliers.</text>
          </svg>
        );
    }
  };

  return (
    <figure className="rounded-lg bg-[#0a0a0c] border border-white/[0.09] overflow-hidden">
      <div className="p-2 sm:p-3 overflow-x-auto">{renderSvg()}</div>
      <figcaption className="px-4 py-2.5 bg-[#121216] border-t border-white/[0.07] text-xs text-[#9ca3af]">
        <span className="text-[#60a5fa] font-medium">Architectural Schematic:</span> {caption}
      </figcaption>
    </figure>
  );
};
