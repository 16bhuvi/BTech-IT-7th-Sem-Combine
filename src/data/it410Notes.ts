import { SubjectCourse } from '../types/study';

export const it410Course: SubjectCourse = {
  id: 'it410',
  code: 'IT 410',
  shortTitle: 'Information Systems & Securities',
  fullTitle: 'Information Systems and Securities — Unit 1 (Section A)',
  instructor: 'Dr. Sushil Buriya, Associate Professor, Department of Computer Science',
  credits: 4,
  maxMarks: '100 (CA: 40 + ESA: 60)',
  examSchedule: {
    assignment1: '27 August 2026 (10 Marks)',
    periodicalTest1: '9–12 September 2026 (Lectures 01–32, 10 Marks)',
    semesterExam: '2–19 December 2026 (Entire Syllabus, 60 Marks)',
  },
  syllabusVerbatim:
    "Foundations of Cryptography and Security, Ciphers and Secret Messages, Security Attacks and Services, Mathematical Tools for Cryptography: Substitutions and Permutations, Modular Arithmetic, Euclid's Algorithm, Finite Field, Discrete Logarithm, Conventional Symmetric Encryption Algorithms, Theory of Block Cipher Design, DES and Triple DES, Modes of Operation (ECB, CBC, OFB, CFB), Strength of DES, Modern Symmetric Encryption Algorithms, RC5, Stream Ciphers, Pseudo Random Numbers, One Time Pad, Cryptanalysis.",
  courseOutcomes: [
    'CO 1: Appreciate the value of information to the modern organization.',
    'CO 2: Describe the key encryption techniques of cryptography.',
    'CO 3: Appreciate the difficulties that arise when valuable information needs to be shared.',
    'CO 4: Learn Confidentiality, Integrity and Availability.',
    'CO 5: Apply protocols to implement secure message exchanges.',
  ],
  recommendedBooks: [
    'R1. Stallings, William (1999/2017). Cryptography and Network Security: Principles and Practice. Prentice-Hall.',
    'R2. Schneier, Bruce (2007). Applied Cryptography: Protocols, Algorithms, and Source Code in C. John Wiley & Sons.',
    'R3. Schneier, Bruce (2011). Secrets and Lies: Digital Security in a Networked World. John Wiley & Sons.',
  ],
  handouts: [
    {
      id: 'it410-p1',
      title: 'IT 410 Course Handout — Page 1 (Syllabus & References)',
      subtitle: 'Banasthali Vidyapith · B.Tech. (IT) VII Semester · Dr. Sushil Buriya',
      type: 'image',
      src: '/assets/aistudio/WhatsApp_Image_2026-09-03_at_9.29.05_PM_e0d74bfe.jpeg',
      notes: 'Contains Course Outcomes CO1–CO5, Section A/B/C syllabus breakdown, and Stallings/Schneier reference list.',
    },
    {
      id: 'it410-p2',
      title: 'IT 410 Course Handout — Page 2 (Assessment & Lecture Plan 01–50)',
      subtitle: 'Banasthali Vidyapith · Assessment Schedule & Lecture-Wise Breakdown',
      type: 'image',
      src: '/assets/aistudio/WhatsApp_Image_2026-09-03_at_9.29.05_PM__1__f5b5cc5b.jpeg',
      notes: 'Section A spans Lectures 01–23 (Foundations, Modular/Euclid, GF/Block Cipher Design, DES/3DES/Modes, RC5/OTP/Cryptanalysis, PRNGs).',
    },
  ],
  formulas: [
    {
      id: 'f-affine',
      category: 'Classical Ciphers',
      name: 'Affine Cipher Encryption & Decryption',
      latex: 'C = (aP + b) \\bmod 26, \\quad P = a^{-1}(C - b) \\bmod 26 \\text{ where } \\gcd(a, 26) = 1',
      variables: 'a in {1,3,5,7,9,11,15,17,19,21,23,25} (12 choices), b in {0..25}',
      complexityOrBound: 'Keyspace = 12 * 26 = 312 keys (Trivially brute-forced)',
      examContext: 'Always verify gcd(a, 26) = 1 before computing a^(-1) mod 26 in numerical questions.',
    },
    {
      id: 'f-hill',
      category: 'Classical Ciphers',
      name: 'Hill Cipher Matrix System',
      latex: '\\mathbf{C} = (\\mathbf{K}\\mathbf{P}) \\bmod 26, \\quad \\mathbf{P} = (\\mathbf{K}^{-1}\\mathbf{C}) \\bmod 26, \\quad \\mathbf{K}^{-1} = (\\det \\mathbf{K})^{-1} \\text{adj}(\\mathbf{K}) \\bmod 26',
      variables: 'K is an m x m invertible matrix over Z_26 with gcd(det(K) mod 26, 26) = 1',
      complexityOrBound: 'O(m^2) per m-gram block; broken by m linear independent Known-Plaintext pairs',
      examContext: 'Remember to reduce negative cofactor/determinant entries modulo 26: (-x mod 26 = 26 - (x mod 26)).',
    },
    {
      id: 'f-euclid',
      category: 'Number Theory',
      name: 'Extended Euclidean Algorithm (Bézout Identity)',
      latex: '\\gcd(a, b) = \\gcd(b, a \\bmod b) = ax + by, \\quad a^{-1} \\equiv x \\pmod m \\iff \\gcd(a,m)=1',
      variables: 'Recurrence: r = r_1 - q r_2, s = s_1 - q s_2, t = t_1 - q t_2',
      complexityOrBound: 'Time: O(log(min(a, b))) divisions (at most 5 * digits(b) by Lamé Theorem)',
      examContext: 'Standard 5-mark numerical in Periodical Test I & ESA: show full (q, r1, r2, r, t1, t2, t) table.',
    },
    {
      id: 'f-feistel',
      category: 'Block Ciphers',
      name: 'Feistel Encryption & Decryption Round Relations',
      latex: 'L_i = R_{i-1}, \\quad R_i = L_{i-1} \\oplus F(R_{i-1}, K_i) \\implies L_{i-1} = R_i \\oplus F(L_i, K_i)',
      variables: 'w-bit block split into w/2-bit halves L_i, R_i; round subkey K_i',
      complexityOrBound: '16 rounds in DES (64-bit block, 56-bit key)',
      examContext: 'Key proof: XOR self-inverse property (A XOR B XOR B = A) guarantees invertibility for ANY function F.',
    },
    {
      id: 'f-3des',
      category: 'Block Ciphers',
      name: 'Triple DES (EDE) & Meet-in-the-Middle Complexity',
      latex: 'C = E_{K_3}(D_{K_2}(E_{K_1}(P))), \\quad P = D_{K_1}(E_{K_2}(D_{K_3}(C)))',
      variables: '2-Key 3DES sets K_3 = K_1 (112 bits); 3-Key 3DES uses distinct K_1, K_2, K_3 (168 bits)',
      complexityOrBound: '2DES broken in O(2^56) space & O(2^57) ops; 3DES achieves O(2^112) effective security',
      examContext: 'D in middle stage provides backward compatibility with single DES when K_1 = K_2 = K_3.',
    },
    {
      id: 'f-cbc',
      category: 'Modes of Operation',
      name: 'Cipher Block Chaining (CBC) Equations',
      latex: 'C_j = E_K(P_j \\oplus C_{j-1}), \\quad P_j = D_K(C_j) \\oplus C_{j-1}, \\quad C_0 = \\text{IV}',
      variables: 'IV is an unpredictable Initialization Vector of block length b',
      complexityOrBound: 'Encryption: Sequential O(N); Decryption: Fully Parallelizable O(1) depth!',
      examContext: 'Frequently tested trap: CBC decryption CAN run in parallel because all C_j are already known.',
    },
    {
      id: 'f-rc5',
      category: 'Modern Ciphers',
      name: 'RC5-w/r/b Data-Dependent Round Update',
      latex: 'A = ((A \\oplus B) \\lll B) + S[2i], \\quad B = ((B \\oplus A) \\lll A) + S[2i+1] \\pmod{2^w}',
      variables: 'w in {16, 32, 64} bits, r rounds (0..255), b key bytes (0..255), S has 2(r+1) words',
      complexityOrBound: 'Nominal RC5-32/12/16 uses 64-bit blocks (2 words), 12 rounds, 128-bit key',
      examContext: 'Rotation amount (<<< B) equals the low log_2(w) bits of B — nonlinear and prevents differential trails.',
    },
    {
      id: 'f-otp-bbs',
      category: 'Stream Ciphers & PRNG',
      name: 'Shannon Perfect Secrecy & Blum Blum Shub (BBS)',
      latex: 'H(P \\mid C) = H(P) \\iff |\\mathcal{K}| \\ge |\\mathcal{P}|; \\quad x_{i+1} = x_i^2 \\bmod (p \\cdot q), \\; b_{i+1} = x_{i+1} \\bmod 2',
      variables: 'BBS primes satisfy p = 3 (mod 4) and q = 3 (mod 4); gcd(s, pq) = 1',
      complexityOrBound: 'OTP: Unconditionally secure; BBS: Cryptographically secure under Quadratic Residuosity',
      examContext: 'Never reuse an OTP key: C_1 XOR C_2 = P_1 XOR P_2 completely cancels out the key K!',
    },
  ],
  modules: [
    {
      id: 'it410-mod1',
      indexNumber: '01',
      lectureSpan: 'Lectures 01–04',
      referenceBooks: 'R1 (Stallings Ch. 1–2), E1, E2',
      title: 'Foundations of Cryptography, Ciphers & OSI Security Architecture',
      overview: {
        formalDefinition:
          'A **Cryptosystem** (or Cipher System) is formally defined as a 5-tuple $(\\mathcal{P}, \\mathcal{C}, \\mathcal{K}, \\mathcal{E}, \\mathcal{D})$ where $\\mathcal{P}$ is the finite set of plaintexts, $\\mathcal{C}$ is the finite set of ciphertexts, $\\mathcal{K}$ is the keyspace, and for every key $K \\in \\mathcal{K}$ there exists an encryption rule $E_K \\in \\mathcal{E}: \\mathcal{P} \\to \\mathcal{C}$ and a corresponding deterministic decryption rule $D_K \\in \\mathcal{D}: \\mathcal{C} \\to \\mathcal{P}$ such that $D_K(E_K(X)) = X$ for all $X \\in \\mathcal{P}$.',
        highLevelIntuition:
          'Information security protects organizational assets across three foundational pillars — **Confidentiality**, **Integrity**, and **Availability** (the CIA Triad) — standardized systematically by the **ITU-T X.800 (OSI Security Architecture)** into Threats/Attacks, Security Services, and Security Mechanisms. Cryptography provides the mathematical engine that transforms intelligible secret messages into unintelligible ciphertexts across untrusted networks.',
        coreTheoremLatex:
          '\\forall X \\in \\mathcal{P}, \\forall K \\in \\mathcal{K}: \\quad Y = E(K, X) \\implies D(K, Y) = D(K, E(K, X)) = X',
      },
      keyTerms: [
        {
          term: 'OSI Security Architecture',
          definition: 'ITU-T Recommendation X.800 framework defining systematic security requirements via Security Attacks, Security Mechanisms, and Security Services.',
          examNote: 'Always categorize into Attacks, Services, and Mechanisms when asked for X.800.',
        },
        {
          term: 'Kerckhoffs Principle',
          definition: 'A cryptosystem must remain secure even if everything about the system, except the secret key K, is public knowledge.',
          examNote: 'Contrasts with "Security through Obscurity", which fails once reverse-engineered.',
        },
        {
          term: 'Passive Attack',
          definition: 'Eavesdropping or monitoring transmissions without altering data (Release of Message Contents and Traffic Analysis). Difficult to detect, prevented via encryption.',
        },
        {
          term: 'Active Attack',
          definition: 'Modification of the data stream or creation of a false stream (Masquerade, Replay, Modification, DoS). Easy to detect via MACs/Signatures, hard to prevent completely.',
        },
        {
          term: 'Unconditionally Secure',
          definition: 'Ciphertext contains insufficient information to uniquely determine plaintext regardless of adversary computing power (achieved only by One-Time Pad).',
          formula: 'H(P \\mid C) = H(P)',
        },
        {
          term: 'Computationally Secure',
          definition: 'Either the cost of breaking the cipher exceeds the value of the encrypted information, or the time required exceeds the useful lifetime of the information.',
        },
      ],
      diagramId: 'it410-osi-symmetric',
      diagramCaption:
        'Conventional Symmetric Encryption Model showing the 5 core ingredients, secure key distribution channel, and public channel adversary point of interception.',
      technicalSections: [
        {
          id: 'it410-m1-s1',
          title: '1.1 The CIA Triad & Extended Security Objectives',
          paragraphs: [
            'Modern organizations depend on information systems whose compromise leads to financial, operational, and regulatory failure. Computer and network security rests on the **CIA Triad**, augmented in NIST FIPS 199 by **Authenticity** and **Accountability**:',
          ],
          bulletPoints: [
            {
              lead: 'Confidentiality (Data & Privacy)',
              detail: 'Assures that private or confidential information is not disclosed to unauthorized individuals, entities, or processes. Enforced via symmetric/asymmetric encryption and access control.',
            },
            {
              lead: 'Integrity (Data & System)',
              detail: 'Assures that information and programs are changed only in a specified and authorized manner (no unauthorized modification, insertion, deletion, or replay). Enforced via cryptographic hashes, MACs, and digital signatures.',
            },
            {
              lead: 'Availability',
              detail: 'Assures that systems work promptly and service is not denied to authorized users. Targeted directly by Denial-of-Service (DoS) and DDoS attacks.',
            },
            {
              lead: 'Authenticity & Accountability (Non-Repudiation)',
              detail: 'Verifying that users/messages are genuine and ensuring every action of an entity can be traced uniquely to that entity so neither sender nor receiver can later deny transmission.',
            },
          ],
        },
        {
          id: 'it410-m1-s2',
          title: '1.2 OSI Security Architecture (ITU-T X.800): Attacks, Services & Mechanisms',
          paragraphs: [
            'ITU-T Recommendation **X.800** organizes network security into three orthogonal pillars. Understanding the exact distinction between **Passive** and **Active** attacks is one of the highest-frequency university exam questions:',
            '**A. Security Attacks:** Any action that compromises the security of information owned by an organization. Passive attacks do not affect system resources and leave zero trace on packets; therefore emphasis is on **prevention** rather than detection. Active attacks alter data or system state; because physical/network interception cannot be prevented 100%, emphasis is on **rapid detection and recovery**.',
          ],
          bulletPoints: [
            {
              lead: 'Passive Type 1 — Release of Message Contents',
              detail: 'An opponent learns the contents of a sensitive file, email, or conversation transmitted in cleartext.',
            },
            {
              lead: 'Passive Type 2 — Traffic Analysis',
              detail: 'Even when payloads are encrypted, an adversary observes packet headers, source/destination identities, frequency, and message lengths to infer upcoming strategic actions (mitigated via traffic padding and onion routing).',
            },
            {
              lead: 'Active Type 1 — Masquerade',
              detail: 'One entity pretends to be a different entity (e.g., capturing authentication sequences or spoofing IP/MAC credentials to escalate privileges).',
            },
            {
              lead: 'Active Type 2 — Replay',
              detail: 'Passive capture of a legitimate data unit and its subsequent retransmission to produce an unauthorized effect (e.g., duplicating a bank transfer packet; countered via timestamps, sequence numbers, and nonces).',
            },
            {
              lead: 'Active Type 3 — Modification of Messages',
              detail: 'Some portion of a legitimate message is altered, delayed, or reordered (e.g., changing "Allow John read file X" to "Allow Smith write file X").',
            },
            {
              lead: 'Active Type 4 — Denial of Service (DoS)',
              detail: 'Prevents or inhibits normal use of communication facilities by disrupting networks or overloading servers with bogus requests.',
            },
          ],
        },
        {
          id: 'it410-m1-s3',
          title: '1.3 Six X.800 Security Services & Cryptographic Taxonomy',
          paragraphs: [
            'X.800 defines **five primary categories** (often listed as six with Availability): **(1) Authentication** (Peer Entity Authentication for live connections & Data Origin Authentication for connectionless datagrams), **(2) Access Control** (preventing unauthorized resource use), **(3) Data Confidentiality** (Connection, Connectionless, Selective-Field, and Traffic-Flow confidentiality), **(4) Data Integrity** (with or without recovery), and **(5) Non-Repudiation** (Origin proof protects receiver; Destination proof protects sender).',
            'Cryptographic systems themselves are independently classified along **three orthogonal dimensions**: (1) **Type of Operations** transforming plaintext to ciphertext — *Substitution* (each element mapped to another element) vs. *Transposition* (elements rearranged without losing identity); (2) **Number of Keys Used** — *Symmetric / Single-key / Secret-key / Conventional* vs. *Asymmetric / Two-key / Public-key*; and (3) **Way Plaintext is Processed** — *Block Cipher* ($b$-bit block at a time) vs. *Stream Cipher* (continuous bit/byte stream).',
          ],
          equations: [
            {
              label: 'Brute-Force Average vs. Worst-Case Trials',
              latex: 'N_{\\text{worst}} = |\\mathcal{K}| = 2^k, \\qquad E[N_{\\text{avg}}] = \\frac{2^k}{2} = 2^{k-1}',
              explanation:
                'For a k-bit symmetric key, an exhaustive key search tests half the keyspace on average. Note that brute-force alone fails if ciphertexts decrypt to plausible decoys (high key equivocation).',
            },
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Brute-Force Keyspace Timing Estimator & Symmetric Model Verifier',
        complexity: 'Time: O(1) analytical evaluation | Space: O(1)',
        code: `from dataclasses import dataclass

@dataclass
class KeyspaceAudit:
    cipher_name: str
    key_bits: int
    avg_trials: float
    years_at_10_pow_12_keys_per_sec: float

def evaluate_computational_security(cipher_name: str, key_bits: int, rate_keys_per_sec: float = 1e12) -> KeyspaceAudit:
    """
    Evaluates average brute-force time E[T] = 2^(k-1) / rate.
    Demonstrates why 56-bit DES is broken while 128-bit AES is computationally secure.
    """
    avg_trials = 2.0 ** (key_bits - 1)
    seconds = avg_trials / rate_keys_per_sec
    years = seconds / (365.25 * 24 * 3600)
    return KeyspaceAudit(cipher_name, key_bits, avg_trials, years)

for name, bits in [("DES (56-bit)", 56), ("2-Key 3DES (112-bit)", 112), ("AES-128", 128), ("AES-256", 256)]:
    audit = evaluate_computational_security(name, bits)
    print(f"{audit.cipher_name:22s} | Avg Trials: {audit.avg_trials:.2e} | Time @ 10^12 k/s: {audit.years_at_10_pow_12_keys_per_sec:.3e} yrs")`,
        traceTitle: 'Quantitative Keyspace Comparison at 1 Tera-Key/sec (10^12 decryptions/sec)',
        traceSteps: [
          {
            step: '1. DES (k = 56 bits)',
            state: '2^55 = 3.60 x 10^16 trials',
            explanation: 'At 10^12 keys/sec, takes 36,028 seconds (~10.0 hours) -> Computationally insecure!',
          },
          {
            step: '2. 2-Key 3DES (k = 112 bits)',
            state: '2^111 = 2.60 x 10^33 trials',
            explanation: 'At 10^12 keys/sec, requires 8.23 x 10^13 years (~6,000x age of universe).',
          },
          {
            step: '3. AES-128 (k = 128 bits)',
            state: '2^127 = 1.70 x 10^38 trials',
            explanation: 'Requires 5.39 x 10^18 years -> Gold-standard computational security.',
          },
        ],
        edgeCases: [
          'If plaintext is compressed binary with zero redundancy (no recognizable headers), brute-force cannot distinguish the true plaintext X from false-positive decryptions without known plaintext.',
          'Quantum Grover Search reduces k-bit symmetric key search from O(2^k) to O(2^(k/2)), making AES-256 equivalent to 128-bit post-quantum strength.',
        ],
      },
      takeawayMatrix: {
        caption: 'Comparison of X.800 Attack Classes, Detection Feasibility, and Primary Cryptographic Countermeasures',
        headers: ['Attack Sub-Type', 'Category', 'CIA Pillar Violated', 'Detectability', 'Primary X.800 Mechanism'],
        rows: [
          ['Release of Message Contents', 'Passive', 'Confidentiality', 'Very Low (No packet mutation)', 'Symmetric / Asymmetric Encipherment'],
          ['Traffic Analysis', 'Passive', 'Confidentiality (Metadata)', 'Very Low (Header sniffing)', 'Traffic Padding & VPN Tunneling'],
          ['Masquerade', 'Active', 'Authenticity & Access Control', 'Moderate (Audit anomalies)', 'Peer-Entity Auth, Digital Signatures'],
          ['Replay', 'Active', 'Integrity & Freshness', 'High (Duplicate nonces)', 'Timestamps, Nonces, Sequence Numbers'],
          ['Modification of Messages', 'Active', 'Data Integrity', 'High (MAC/Hash mismatch)', 'HMAC, Digital Signature, GCM/CCM'],
          ['Denial of Service (DoS)', 'Active', 'Availability', 'Immediate (Service outage)', 'Rate Limiting, SYN Cookies, Scrubbing'],
        ],
      },
      examSpotlight: {
        weightage: '8–12 Marks across Periodical Test I & ESA (Short Notes + Architecture Diagram)',
        highYieldDefinitions: [
          {
            concept: 'Cryptography vs. Cryptanalysis vs. Cryptology',
            preciseStatement: 'Cryptography is the science of designing secure ciphers; Cryptanalysis is the science of breaking ciphers without prior knowledge of the key; Cryptology is the umbrella mathematical discipline encompassing both.',
          },
          {
            concept: 'Steganography vs. Cryptography',
            preciseStatement: 'Steganography conceals the very existence of a message (e.g., LSB image embedding, invisible ink), whereas Cryptography renders an openly visible message unintelligible via key-controlled mathematical transformation.',
          },
        ],
        commonTraps: [
          {
            trap: 'Writing that encryption alone prevents Modification or Replay attacks.',
            correction: 'Encryption alone only provides Confidentiality! In stream ciphers or CBC mode, an attacker can flip ciphertext bits or replay valid encrypted packets unless a MAC / Digital Signature + Nonce is used.',
          },
          {
            trap: 'Confusing Data Origin Authentication with Peer Entity Authentication.',
            correction: 'Peer Entity Authentication confirms identity over a live logical connection (e.g., TLS handshake), whereas Data Origin Authentication confirms the creator of a static connectionless message (e.g., signed email) without implying timeliness.',
          },
        ],
        pastPaperPatterns: [
          'Draw and explain the Conventional Symmetric Cipher Model. State the two fundamental requirements for secure use of symmetric encryption. (6 Marks)',
          'Differentiate between Passive and Active security attacks under the OSI X.800 Security Architecture with real-world protocol examples. (8 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'it410-q1',
          questionType: 'Conceptual / Analytical',
          marks: 5,
          question:
            'State the two essential requirements for secure use of conventional symmetric encryption. Why does keeping the encryption algorithm secret violate Kerckhoffs Principle?',
          options: [
            'Strong encryption algorithm + Secret key sharing; algorithms leak via reverse-engineering whereas keys are easily rotated.',
            'Public key directory + Hash function; algorithms are always linear.',
            'Traffic padding + Steganography; Kerckhoffs requires changing algorithms after every packet.',
            'Compression + Parity bits; secret algorithms run slower in hardware.',
          ],
          correctOptionIndex: 0,
          hint: 'Think about what happens if 10,000 routers share the same proprietary chip vs. 2 users rotating a 128-bit key.',
          solutionSteps: [
            'Requirement 1 (Strong Encryption Algorithm): Even if an opponent knows the algorithm E and has access to multiple ciphertexts Y_i together with corresponding plaintexts X_i (Known-Plaintext Attack), they must be computationally unable to decipher new ciphertexts or deduce key K.',
            'Requirement 2 (Secure Key Distribution & Storage): Sender and receiver must have obtained copies of the secret key K in a secure fashion and must keep K secure; if K is discovered and the algorithm is public, all communication is readable.',
            'Kerckhoffs Principle Rationale: Hardware/software deployed across millions of endpoints can be disassembled or leaked by insiders. Designing security solely into a small, replaceable random bitstring K enables low-cost standardization, public peer cryptanalysis (like NIST AES), and effortless key rotation upon compromise.',
          ],
          finalConclusion:
            'Security must reside strictly in the secrecy of the key K, enabling standardized, hardware-accelerated public algorithms.',
        },
        {
          id: 'it410-q2',
          questionType: 'Numerical / Derivation',
          marks: 5,
          question:
            'A symmetric cipher uses an 80-bit key. Assuming a specialized ASIC cluster can test $10^{14}$ keys per second, calculate (a) the total keyspace size, and (b) the average time in years required to break a single key via exhaustive search.',
          hint: 'Average trials equal half the total keyspace: 2^(80 - 1) = 2^79.',
          solutionSteps: [
            'Step 1: Total keyspace |K| = 2^80 = (2^10)^8 ≈ (1.024)^8 * 10^24 ≈ 1.2089 * 10^24 keys.',
            'Step 2: Expected number of trials on average E[N] = 2^80 / 2 = 2^79 ≈ 6.0446 * 10^23 keys.',
            'Step 3: Time in seconds T_sec = (6.0446 * 10^23) / 10^14 = 6.0446 * 10^9 seconds.',
            'Step 4: Convert seconds to years (1 Julian year = 365.25 * 86,400 = 31,557,600 s): T_years = (6.0446 * 10^9) / (3.15576 * 10^7) ≈ 191.54 years.',
          ],
          finalConclusion: 'Keyspace = 1.21 × 10^24 keys; Average exhaustive search time ≈ 191.54 years.',
        },
      ],
    },
    {
      id: 'it410-mod2',
      indexNumber: '02',
      lectureSpan: 'Lectures 05–08',
      referenceBooks: 'R1 (Stallings Ch. 2 & 4), E1, E2',
      title: "Classical Ciphers, Permutations, Modular Arithmetic & Euclid's Algorithm",
      overview: {
        formalDefinition:
          'Over the residue ring $\\mathbb{Z}_n = \\{0, 1, \\dots, n-1\\}$, two integers $a, b \\in \\mathbb{Z}$ are congruent modulo $n$, denoted $a \\equiv b \\pmod n$, iff $n \\mid (a - b)$. Classical cryptography applies algebraic substitutions ($\\mathcal{P} \\to \\mathcal{C}$ symbol replacement) and permutations/transpositions ($\\pi: \\{1..m\\} \\to \\{1..m\\}$ positional reordering) over $\\mathbb{Z}_{26}$.',
        highLevelIntuition:
          'Before modern binary block ciphers, cryptographers discovered how monoalphabetic frequency leakage can be flattened using **multiletter digrams** (Playfair), **linear algebraic mixing** (Hill), **polyalphabetic shifting** (Vigenère), and **multi-stage columnar transpositions**. Underlying both classical inversion (finding $a^{-1} \\bmod 26$) and modern public-key/GF arithmetic is **Euclid’s Algorithm** and its **Extended** form.',
        coreTheoremLatex:
          '\\gcd(a, m) = 1 \\iff \\exists!\\, a^{-1} \\in \\mathbb{Z}_m \\text{ such that } a \\cdot a^{-1} \\equiv 1 \\pmod m',
      },
      keyTerms: [
        {
          term: 'Modular Multiplicative Inverse',
          definition: 'An integer x in Z_m satisfying a*x ≡ 1 (mod m). Exists if and only if a and m are coprime, i.e., gcd(a, m) = 1.',
          formula: 'a \\cdot a^{-1} \\equiv 1 \\pmod m',
        },
        {
          term: 'Playfair Cipher',
          definition: 'First practical digram substitution cipher (Wheatstone, 1854) using a 5x5 keyword matrix (merging I/J) to encrypt pairs of letters, destroying single-letter frequency spikes.',
        },
        {
          term: 'Hill Cipher',
          definition: 'Multi-letter polygraphic substitution cipher invented by Lester Hill (1929) encrypting m plaintext letters simultaneously via matrix multiplication C = KP mod 26.',
          examNote: 'Completely resists Ciphertext-Only single-letter analysis, but succumbs linearly to Known-Plaintext Attack.',
        },
        {
          term: 'Index of Coincidence',
          definition: 'Statistical measure (Friedman) of probability that two randomly chosen ciphertext letters are identical (~0.067 for English/monoalphabetic, ~0.0385 for uniform random), used with Kasiski test to find Vigenère key length.',
        },
      ],
      diagramId: 'it410-playfair-euclid',
      diagramCaption:
        'Left: Playfair 5×5 matrix construction for keyword MONARCHY. Right: Complete Extended Euclidean tabular derivation of 550^(-1) mod 1759 = 355.',
      technicalSections: [
        {
          id: 'it410-m2-s1',
          title: '2.1 Substitution Ciphers: Caesar, Affine, Playfair, Hill & Vigenère',
          paragraphs: [
            '**1. Caesar & Affine Ciphers:** Caesar shifts letters by $k \\in \\{1..25\\}$: $C = (P + k) \\bmod 26$. Generalizing linearly yields the **Affine Cipher** $C = (aP + b) \\bmod 26$. For decryption $P = a^{-1}(C - b) \\bmod 26$ to be injective (one-to-one), $\\gcd(a, 26) = 1$, leaving $\\phi(26) = \\phi(2)\\phi(13) = 1 \\times 12 = 12$ valid choices for $a$. Any general **Monoalphabetic Substitution** allows all $26! \\approx 4.03 \\times 10^{26}$ permutations, preventing brute-force, yet fails easily because relative English letter frequencies (`E` 12.7%, `T` 9.1%, `A` 8.2%; digrams `TH`, `HE`; trigrams `THE`) remain invariant!',
            '**2. Playfair Cipher Rules:** Construct a $5 \\times 5$ matrix by filling unique letters of the keyword left-to-right, top-to-bottom (treating `I` and `J` as one cell), followed by remaining alphabet letters. Preprocess plaintext into 2-letter digrams: (i) if both letters in a pair are identical (e.g., `BALLOON` $\\to$ `BA LX LO ON`), insert filler `X` after the first letter and re-pair; (ii) if odd length at end, append `X`. Encrypt each pair $(p_1, p_2)$:',
          ],
          bulletPoints: [
            {
              lead: 'Playfair Rule 1 (Same Row)',
              detail: 'Each letter is replaced by the letter immediately to its right (wrapping circularly mod 5). Decryption shifts left.',
            },
            {
              lead: 'Playfair Rule 2 (Same Column)',
              detail: 'Each letter is replaced by the letter immediately below it (wrapping circularly mod 5). Decryption shifts up.',
            },
            {
              lead: 'Playfair Rule 3 (Rectangle Corners)',
              detail: 'Each letter is replaced by the letter in its OWN row and the column occupied by the OTHER plaintext letter. (Self-inverse except horizontally/vertically: same rule decrypts!).',
            },
          ],
          workedExample: {
            title: 'Worked Exam Numerical: Playfair Encryption with Key "MONARCHY"',
            problemStatement: 'Encrypt the plaintext "INSTRUMENTS" using the Playfair matrix for keyword MONARCHY.',
            steps: [
              '1. 5×5 Matrix Rows: R0=[M O N A R], R1=[C H Y B D], R2=[E F G I/J K], R3=[L P Q S T], R4=[U V W X Z].',
              '2. Split plaintext into digrams: IN | ST | RU | ME | NT | S -> pad trailing S with Z (or X): IN | ST | RU | ME | NT | SZ.',
              '3. "IN": I(2,3), N(0,2) -> Rectangle -> I row, N col = G(2,2); N row, I col = A(0,3) => "GA".',
              '4. "ST": S(3,3), T(3,4) -> Same Row 3 -> shift right mod 5 => T(3,4), L(3,0) => "TL".',
              '5. "RU": R(0,4), U(4,0) -> Rectangle => M(0,0), Z(4,4) => "MZ".',
              '6. "ME": M(0,0), E(2,0) -> Same Column 0 -> shift down mod 5 => C(1,0), L(3,0) => "CL".',
              '7. "NT": N(0,2), T(3,4) -> Rectangle => R(0,4), Q(3,2) => "RQ".',
              '8. "SZ": S(3,3), Z(4,4) -> Rectangle => T(3,4), X(4,3) => "TX".',
            ],
            finalAnswer: 'Ciphertext = GATLMZCLRQTX',
          },
        },
        {
          id: 'it410-m2-s2',
          title: '2.2 Hill Cipher, Vigenère, Vernam & Columnar Transposition',
          paragraphs: [
            '**Hill Cipher ($m \\times m$ Linear Algebra over $\\mathbb{Z}_{26}$):** Assign `A=0 ... Z=25`. An $m$-letter column vector $\\mathbf{P}$ is encrypted as $\\mathbf{C} = \\mathbf{K}\\mathbf{P} \\bmod 26$. The matrix $\\mathbf{K}$ is invertible over $\\mathbb{Z}_{26}$ **if and only if** $\\gcd(\\det(\\mathbf{K}) \\bmod 26, 26) = 1$. For a $2 \\times 2$ key $\\mathbf{K} = \\begin{pmatrix} k_{11} & k_{12} \\\\ k_{21} & k_{22} \\end{pmatrix}$, let $d = (k_{11}k_{22} - k_{12}k_{21}) \\bmod 26$. Then $\\mathbf{K}^{-1} = d^{-1} \\begin{pmatrix} k_{22} & -k_{12} \\\\ -k_{21} & k_{11} \\end{pmatrix} \\bmod 26$. **Known-Plaintext Vulnerability:** If an adversary collects $m$ linearly independent plaintext vectors forming invertible matrix $\\mathbf{X}$ and corresponding ciphertext matrix $\\mathbf{Y} = \\mathbf{K}\\mathbf{X} \\bmod 26$, then $\\mathbf{K} = \\mathbf{Y}\\mathbf{X}^{-1} \\bmod 26$ immediately!',
            '**Polyalphabetic (Vigenère & Autokey):** Vigenère repeats keyword $K = k_0 k_1 \\dots k_{m-1}$ cyclically: $c_i = (p_i + k_{i \\bmod m}) \\bmod 26$. Broken via **Kasiski Examination** (GCD of distances between repeated ciphertext trigrams reveals period $m$, reducing cipher to $m$ Caesar ciphers!). **Autokey** appends the plaintext itself after the keyword ($K \\parallel P$) to eliminate periodicity, though still statistically vulnerable since both key and plaintext share English frequencies.',
            '**Transposition (Permutation) Ciphers:** Pure transpositions preserve exact character counts (Index of Coincidence $\\approx 0.067$), rearranging positions. **Rail Fence** writes plaintext diagonally across $d$ rails and reads row-wise. **Row-Columnar Transposition** writes plaintext row-by-row into a rectangle of width $|K|$ and reads out columns in the alphabetical numerical order of the key (e.g., key `4 3 1 2 5 6 7` reads column `1` first, then `2`, etc.). Applying columnar transposition **twice** (Double Transposition) creates complex non-contiguous fractionations.',
          ],
        },
        {
          id: 'it410-m2-s3',
          title: "2.3 Modular Arithmetic, Euclid's GCD & Extended Euclidean Algorithm",
          paragraphs: [
            'In $\\mathbb{Z}_n$, modular reduction is a ring homomorphism: $(a + b) \\bmod n = ((a \\bmod n) + (b \\bmod n)) \\bmod n$ and $(a \\cdot b) \\bmod n = ((a \\bmod n)(b \\bmod n)) \\bmod n$. Warning: cancellation $a \\cdot b \\equiv a \\cdot c \\pmod n \\implies b \\equiv c \\pmod n$ holds **ONLY IF** $\\gcd(a, n) = 1$ (otherwise divide modulus by $d = \\gcd(a,n)$, giving $b \\equiv c \\pmod{n/d}$).',
            "**Euclid's GCD Theorem Proof:** Let $a = q \\cdot b + r$ with $0 \\le r < b$. Any common divisor $d$ dividing both $a$ and $b$ also divides $r = a - qb$. Conversely, any divisor dividing $b$ and $r$ divides $a = qb + r$. Since the set of common divisors of $(a,b)$ and $(b,r)$ are identical, their greatest elements are equal: $\\gcd(a, b) = \\gcd(b, a \\bmod b)$ with base case $\\gcd(a, 0) = a$. In two iterations $r_{i+2} < r_i / 2$, proving $O(\\log(\\min(a,b)))$ worst-case complexity (worst case occurs on consecutive Fibonacci numbers!).",
          ],
          equations: [
            {
              label: 'Extended Euclidean Recurrence for Multiplicative Inverse',
              latex: 'q_i = \\lfloor r_{i-1} / r_i \\rfloor, \\quad r_{i+1} = r_{i-1} - q_i r_i, \\quad t_{i+1} = t_{i-1} - q_i t_i \\quad (\\text{init } r_0 = m, r_1 = a, t_0 = 0, t_1 = 1)',
              explanation:
                'Maintain loop invariant m * s_i + a * t_i = r_i. When r_k = 1 and r_(k+1) = 0, we have a * t_k ≡ 1 (mod m). If t_k < 0, add m to obtain positive canonical representative.',
            },
          ],
          workedExample: {
            title: 'Worked Exam Numerical: Hill Cipher 2×2 Encryption & Inverse Key Verification',
            problemStatement:
              'Given Hill key matrix K = [[9, 4], [5, 7]] over Z_26, verify K is invertible, compute K^(-1) mod 26, and encrypt plaintext "EXAM" (E=4, X=23, A=0, M=12).',
            steps: [
              '1. Compute determinant: det(K) = (9*7 - 4*5) = 63 - 20 = 43 ≡ 17 (mod 26).',
              '2. Check invertibility: gcd(17, 26) = 1 -> Invertible! Find 17^(-1) mod 26: 17 * 23 = 391 = 15*26 + 1 => 17^(-1) ≡ 23 (mod 26).',
              '3. Adjugate matrix adj(K) = [[7, -4], [-5, 9]] ≡ [[7, 22], [21, 9]] (mod 26).',
              '4. Multiply by 23 mod 26: K^(-1) = 23 * [[7, 22], [21, 9]] mod 26 = [[161, 506], [483, 207]] mod 26 = [[5, 12], [15, 25]].',
              '5. Encrypt P1 = [4, 23]^T ("EX"): C1 = [[9,4],[5,7]][4,23]^T = [36+92, 20+161]^T = [128, 181]^T ≡ [24, 25]^T = "YZ".',
              '6. Encrypt P2 = [0, 12]^T ("AM"): C2 = [[9,4],[5,7]][0,12]^T = [48, 84]^T ≡ [22, 6]^T = "WG".',
            ],
            finalAnswer: 'K^(-1) = [[5, 12], [15, 25]] mod 26; Ciphertext = "YZWG".',
          },
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Extended Euclidean Algorithm & 2x2 Hill Cipher Implementation',
        complexity: 'Extended Euclid: O(log m) | Hill Encrypt/Decrypt: O(N) for N characters',
        code: `from typing import Tuple, List

def extended_gcd(a: int, b: int) -> Tuple[int, int, int]:
    """Returns (gcd, x, y) such that a*x + b*y = gcd(a, b)."""
    r1, r2 = a, b
    s1, s2 = 1, 0
    t1, t2 = 0, 1
    while r2 != 0:
        q = r1 // r2
        r1, r2 = r2, r1 - q * r2
        s1, s2 = s2, s1 - q * s2
        t1, t2 = t2, t1 - q * t2
    return r1, s1, t1

def mod_inverse(a: int, m: int) -> int:
    g, x, _ = extended_gcd(a % m, m)
    if g != 1:
        raise ValueError(f"Inverse does not exist: gcd({a}, {m}) = {g} != 1")
    return x % m

def hill_2x2_encrypt_decrypt(text: str, K: List[List[int]]) -> Tuple[str, str]:
    det = (K[0][0] * K[1][1] - K[0][1] * K[1][0]) % 26
    det_inv = mod_inverse(det, 26)
    K_inv = [
        [(det_inv * K[1][1]) % 26, (det_inv * (-K[0][1])) % 26],
        [(det_inv * (-K[1][0])) % 26, (det_inv * K[0][0]) % 26],
    ]
    nums = [ord(c) - 65 for c in text.upper() if c.isalpha()]
    if len(nums) % 2 == 1:
        nums.append(23)  # Pad with 'X'
    enc, dec = [], []
    for i in range(0, len(nums), 2):
        p0, p1 = nums[i], nums[i + 1]
        c0 = (K[0][0] * p0 + K[0][1] * p1) % 26
        c1 = (K[1][0] * p0 + K[1][1] * p1) % 26
        enc.extend([c0, c1])
        d0 = (K_inv[0][0] * c0 + K_inv[0][1] * c1) % 26
        d1 = (K_inv[1][0] * c0 + K_inv[1][1] * c1) % 26
        dec.extend([d0, d1])
    to_str = lambda arr: "".join(chr(v + 65) for v in arr)
    return to_str(enc), to_str(dec)`,
        traceTitle: 'Dry-Run Execution Trace: mod_inverse(17, 26)',
        traceSteps: [
          { step: 'Init', state: 'r1=17, r2=26 | s1=1, s2=0', explanation: 'Normalize arguments (17, 26).' },
          { step: 'Iter 1 (q=0)', state: 'r1=26, r2=17 | s1=0, s2=1', explanation: '17 // 26 = 0; swap roles.' },
          { step: 'Iter 2 (q=1)', state: 'r1=17, r2=9  | s1=1, s2=-1', explanation: '26 = 1*17 + 9; s = 0 - 1(1) = -1.' },
          { step: 'Iter 3 (q=1)', state: 'r1=9,  r2=8  | s1=-1, s2=2', explanation: '17 = 1*9 + 8; s = 1 - 1(-1) = 2.' },
          { step: 'Iter 4 (q=1)', state: 'r1=8,  r2=1  | s1=2, s2=-3', explanation: '9 = 1*8 + 1; s = -1 - 1(2) = -3.' },
          { step: 'Iter 5 (q=8)', state: 'r1=1,  r2=0  | s1=-3 -> (-3 mod 26) = 23', explanation: 'Loop terminates since r2=0; 17 * 23 = 391 ≡ 1 (mod 26).' },
        ],
        edgeCases: [
          'In C/C++ or Java, (-3 % 26) evaluates to -3 rather than +23! Always normalize negative remainders via ((x % m) + m) % m.',
          'A Hill matrix with even determinant (e.g., det = 14) or multiple of 13 (det = 13) has NO inverse mod 26 because 26 = 2 * 13.',
        ],
      },
      takeawayMatrix: {
        caption: 'Comparative Matrix of Classical Substitution & Transposition Ciphers',
        headers: ['Cipher Scheme', 'Class / Granularity', 'Keyspace Size', 'Frequency Signature', 'Primary Cryptanalytic Weakness'],
        rows: [
          ['Caesar Cipher', 'Monoalphabetic Substitution', '25 keys', 'Shifted 1-gram peaks', 'Instant exhaustive brute-force'],
          ['Affine Cipher', 'Linear Substitution', '12 × 26 = 312 keys', 'Permuted 1-gram peaks', '2 letter frequency equations solve (a, b)'],
          ['Playfair Cipher', 'Digram Substitution (5×5)', '25! (effective ~2^45)', 'Flattened 1-grams; 2-gram structure', 'Digram symmetry & absence of self-pairs (AA)'],
          ['Hill Cipher (m×m)', 'Polygraphic Matrix', '~26^(m^2)', 'Flat up to (m-1)-grams', 'Linearity: broken by m Known-Plaintext blocks'],
          ['Vigenère Cipher', 'Polyalphabetic (Period m)', '26^m keys', 'IC drops toward 0.0385 as m grows', 'Kasiski test + Friedman IC reveals period m'],
          ['Columnar Transposition', 'Positional Permutation', 'm! column orders', 'Exact plaintext 1-gram counts preserved', 'Anagramming columns via digram adjacency scores'],
        ],
      },
      examSpotlight: {
        weightage: '10–15 Marks (Guaranteed Numerical on Playfair / Hill / Extended Euclid)',
        highYieldDefinitions: [
          {
            concept: 'Product Cipher',
            preciseStatement: 'Sequential composition of two or more simple substitution and transposition stages so the resulting cipher is cryptographically much stronger than any individual component (the direct ancestor of SPN and Feistel ciphers).',
          },
        ],
        commonTraps: [
          {
            trap: 'Forgetting to split repeated Playfair letters ONLY when they fall into the SAME digram.',
            correction: 'In "BALLOON" -> BA | LL (same pair -> LX) | LO | ON => BA LX LO ON. If two identical letters cross a digram boundary (e.g., "BOOKKEEPER" -> BO | OK ...), the two Ks are in DIFFERENT pairs and do NOT get an X between them!',
          },
          {
            trap: 'Multiplying row vectors instead of column vectors in Hill Cipher without transposing.',
            correction: 'State explicitly at the start of your exam answer whether you use column convention C = K*P mod 26 or row convention C = P*K mod 26, and apply it consistently.',
          },
        ],
        pastPaperPatterns: [
          'Use the Extended Euclidean Algorithm to find the multiplicative inverse of 1234 modulo 4321. Show every row of the iteration table. (6 Marks)',
          'Encrypt the message "MEET ME AT THE USUAL PLACE" using Hill cipher with key matrix K = [[9, 4], [5, 7]]. Show decryption of the first 4 letters. (10 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'it410-q3',
          questionType: 'Numerical / Derivation',
          marks: 6,
          question:
            'Find the multiplicative inverse of $a = 550$ in $\\mathbb{Z}_{1759}$ using the Extended Euclidean Algorithm.',
          options: ['355', '1404', '219', 'No inverse exists'],
          correctOptionIndex: 0,
          hint: 'Track t_(i+1) = t_(i-1) - q_i * t_i starting with r_0 = 1759, r_1 = 550, t_0 = 0, t_1 = 1.',
          solutionSteps: [
            'Step 1: 1759 = 3 * 550 + 109 => q = 3, r = 109, t = 0 - 3(1) = -3.',
            'Step 2: 550 = 5 * 109 + 5 => q = 5, r = 5, t = 1 - 5(-3) = 16.',
            'Step 3: 109 = 21 * 5 + 4 => q = 21, r = 4, t = -3 - 21(16) = -339.',
            'Step 4: 5 = 1 * 4 + 1 => q = 1, r = 1, t = 16 - 1(-339) = 355.',
            'Step 5: 4 = 4 * 1 + 0 => gcd(1759, 550) = 1. Verification: 550 * 355 = 195,250 = 111 * 1759 + 1 ≡ 1 (mod 1759).',
          ],
          finalConclusion: '550^(-1) mod 1759 = 355.',
        },
      ],
    },
    {
      id: 'it410-mod3',
      indexNumber: '03',
      lectureSpan: 'Lectures 09–11',
      referenceBooks: 'R1 (Stallings Ch. 3, 4, 8), R2 (Schneier)',
      title: 'Finite Fields, Discrete Logarithm & Theory of Block Cipher Design',
      overview: {
        formalDefinition:
          'A **Finite Field (Galois Field)** $GF(p^n)$ is a finite algebraic set containing $p^n$ elements ($p$ prime, $n \\ge 1$) closed under addition and multiplication, forming an Abelian group under $+$ (identity $0$) and an Abelian group over non-zero elements under $\\times$ (identity $1$), connected by distributivity. Modern block ciphers combine $GF(2^n)$ S-box algebraic non-linearity with Shannon’s **Confusion-Diffusion** paradigm via **Feistel** or **SPN** structures.',
        highLevelIntuition:
          'Computers operate natively on $8$-bit bytes and $32/64$-bit words, NOT prime numbers! If we simply took $\\mathbb{Z}_{256}$ modulo $256$, even bytes would lack multiplicative inverses because $256$ is not prime. Galois proved that finite fields of order $p^n$ exist **if and only if** the order is a prime power — allowing us to construct $GF(2^8)$ using polynomials over $\\mathbb{Z}_2$ modulo an irreducible degree-$8$ polynomial!',
        coreTheoremLatex:
          '|\\mathbb{F}| = q < \\infty \\iff q = p^n \\text{ for prime } p, n \\in \\mathbb{Z}^+; \\quad \\text{Feistel: } L_{i-1} = R_i \\oplus F(L_i, K_i)',
      },
      keyTerms: [
        {
          term: 'Irreducible Polynomial',
          definition: 'A polynomial m(x) of degree n over GF(2) that cannot be factored into two non-constant polynomials of degree < n over GF(2) — analogous to a prime number in Z.',
          formula: 'm_{\\text{AES}}(x) = x^8 + x^4 + x^3 + x + 1',
        },
        {
          term: 'Discrete Logarithm Problem',
          definition: 'Given prime p, primitive root g of Z_p*, and y = g^x mod p, finding the unique exponent x in {0..p-2} = ind_{g,p}(y) is computationally intractable for large p.',
        },
        {
          term: 'Confusion',
          definition: 'Shannon principle making the statistical relationship between the ciphertext and the encryption key K as complex and non-linear as possible (achieved via S-Boxes).',
        },
        {
          term: 'Diffusion',
          definition: 'Shannon principle spreading the statistical influence of each single plaintext digit over many ciphertext digits to hide plaintext redundancies (achieved via P-Boxes / shifts).',
        },
        {
          term: 'Avalanche Effect',
          definition: 'Desirable cryptographic property wherein flipping a single bit in plaintext or key causes approximately 50% of all output ciphertext bits to flip unpredictably.',
        },
      ],
      diagramId: 'it410-gf-feistel',
      diagramCaption:
        'Single Feistel Cipher Round i showing half-block XOR + swap alongside GF(2^8) byte polynomial arithmetic rules.',
      technicalSections: [
        {
          id: 'it410-m3-s1',
          title: '3.1 Algebraic Hierarchy & Galois Fields GF(p) vs. GF(2^n)',
          paragraphs: [
            '**Algebraic Hierarchy:** (1) **Group $(G, \\cdot)$**: Closure, Associativity, Identity $e$, Inverse $a^{-1}$ (Abelian if $a \\cdot b = b \\cdot a$). (2) **Ring $(R, +, \\times)$**: Abelian group under $+$, associative + distributive under $\\times$ (Commutative Ring with unity if $1 \\in R$ and $ab=ba$). (3) **Integral Domain**: Commutative ring with $1 \\neq 0$ and **no zero divisors** ($ab = 0 \\implies a=0 \\text{ or } b=0$). (4) **Field $(F, +, \\times)$**: Integral domain where **every non-zero element has a multiplicative inverse**.',
            '**Prime Fields $GF(p)$:** Simply $\\mathbb{Z}_p$ for prime $p$; addition and multiplication are integer arithmetic $\\bmod p$. **Extension Binary Fields $GF(2^n)$:** Elements are all $2^n$ binary polynomials $A(x) = a_{n-1}x^{n-1} + \\dots + a_1 x + a_0$ with coefficients $a_i \\in \\{0, 1\\}$. Addition AND subtraction are identical coefficient-wise $\\bmod 2$, which is pure **bitwise XOR**! Multiplication is polynomial product reduced modulo an **irreducible polynomial $m(x)$ of degree $n$**. In AES ($GF(2^8)$), $m(x) = x^8 + x^4 + x^3 + x + 1$ (`0x11B`), so $x^8 \\equiv x^4 + x^3 + x + 1 \\pmod{m(x)}$ (`0x1B`).',
          ],
          workedExample: {
            title: 'Worked Exam Numerical: Multiplication in GF(2^8) Modulo x^8 + x^4 + x^3 + x + 1',
            problemStatement: 'Compute {57} × {13} in GF(2^8) using the AES irreducible polynomial m(x) = x^8 + x^4 + x^3 + x + 1 (0x1B reduction).',
            steps: [
              '1. Binary representations: {57} = 0101 0111_2 = x^6 + x^4 + x^2 + x + 1; {13} = 0001 0011_2 = x^4 + x + 1.',
              '2. Repeatedly apply xtime (multiply by x):',
              '   • {57} * {01} = 0101 0111 ({57})',
              '   • {57} * {02}: MSB=0 -> left shift = 1010 1110 ({AE})',
              '   • {57} * {04}: MSB=1 -> left shift (0101 1100) XOR 0001 1011 (0x1B) = 0100 0111 ({47})',
              '   • {57} * {08}: MSB=0 -> left shift = 1000 1110 ({8E})',
              '   • {57} * {10}: MSB=1 -> left shift (0001 1100) XOR 0001 1011 (0x1B) = 0000 0111 ({07})',
              '3. Since {13} = {10} XOR {02} XOR {01}, distribute XOR:',
              '   {57} * {13} = {07} XOR {AE} XOR {57} = 00000111 ^ 10101110 ^ 01010111 = 1111 1110_2 = {FE}.',
            ],
            finalAnswer: '{57} ⊗ {13} = {FE} in GF(2^8).',
          },
        },
        {
          id: 'it410-m3-s2',
          title: '3.2 Primitive Roots & The Discrete Logarithm Problem (DLP)',
          paragraphs: [
            'By **Euler’s Theorem**, for $\\gcd(a, n) = 1$, $a^{\\phi(n)} \\equiv 1 \\pmod n$ (for prime $p$, $\\phi(p) = p - 1$, yielding **Fermat’s Little Theorem** $a^{p-1} \\equiv 1 \\pmod p$). The **order** of $a \\bmod n$ is the smallest $k \\ge 1$ such that $a^k \\equiv 1 \\pmod n$. If $\\text{ord}_n(g) = \\phi(n)$, then $g$ is called a **Primitive Root (Generator)** of $\\mathbb{Z}_n^*$, because the powers $g^1, g^2, \\dots, g^{\\phi(n)} \\bmod n$ generate **all** $\\phi(n)$ coprime residues distinctly!',
            'For a prime $p$ and primitive root $g$, every $y \\in \\{1, \\dots, p-1\\}$ can be written uniquely as $y \\equiv g^x \\pmod p$ for $1 \\le x \\le p-1$. Computing $y = g^x \\bmod p$ (Modular Exponentiation) takes only $O(\\log_2 x)$ multiplications via Square-and-Multiply. Inverting it to recover $x = \\text{dlog}_{g,p}(y)$ has **no known classical polynomial-time algorithm** — forming the hardness foundation of Diffie-Hellman, ElGamal, and DSA.',
          ],
        },
        {
          id: 'it410-m3-s3',
          title: '3.3 Theory of Block Cipher Design: Ideal Block Cipher vs. Feistel Network',
          paragraphs: [
            '**Why Ideal Block Cipher is Impractical:** An arbitrary reversible $n$-bit block substitution maps $2^n$ inputs to $2^n$ outputs ($2^n!$ possible mappings). Storing the lookup key table requires $\\log_2(2^n!) \\approx n \\cdot 2^n$ bits! Even for $n = 64$, the key size would be $64 \\times 2^{64} = 2^{70}$ bits ($\\approx 10^{11}$ GB!).',
            '**Horst Feistel’s Breakthrough (1973):** Approximate the ideal block cipher using a **Product Cipher** parameterized by a compact key $K$ (e.g., $56$–$256$ bits) across $r$ rounds alternating substitutions and permutations. Split $2w$-bit input into $(L_0, R_0)$. In round $i \\in \\{1..r\\}$: $L_i = R_{i-1}$ and $R_i = L_{i-1} \\oplus F(R_{i-1}, K_i)$. After round $r$, perform a final swap $(R_r, L_r)$ so that **the exact same hardware/software circuit performs decryption simply by feeding subkeys in reverse order $K_r, K_{r-1}, \\dots, K_1$!**',
          ],
          equations: [
            {
              label: 'Formal Mathematical Proof of Feistel Round Invertibility',
              latex: '\\text{Given } L_i = R_{i-1} \\text{ and } R_i = L_{i-1} \\oplus F(R_{i-1}, K_i): \\quad R_i \\oplus F(L_i, K_i) = (L_{i-1} \\oplus F(R_{i-1}, K_i)) \\oplus F(R_{i-1}, K_i) = L_{i-1} \\oplus 0 = L_{i-1}',
              explanation:
                'Notice that F is evaluated in the FORWARD direction during both encryption and decryption! Thus F can be arbitrarily complex, lossy, or non-bijective without breaking decryption.',
            },
          ],
          bulletPoints: [
            {
              lead: 'Feistel Design Parameters (5 Exam Points)',
              detail: '(1) Block size (64-bit DES, 128-bit modern), (2) Key size (128+ bits recommended), (3) Number of rounds (typically 16), (4) Subkey generation algorithm (high complexity/avalanche), (5) Round function F (strict non-linearity). Plus two practical considerations: fast software encryption/decryption and ease of cryptanalytic clarity.',
            },
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'GF(2^8) Byte Arithmetic & Symmetrical Feistel Network Engine',
        complexity: 'GF(2^8) Multiply: O(8) bit ops | r-Round Feistel: O(r) round calls',
        code: `def gf256_mul(a: int, b: int, poly: int = 0x11B) -> int:
    """Multiplies two bytes in GF(2^8) modulo AES irreducible polynomial 0x11B."""
    res = 0
    for _ in range(8):
        if b & 1:
            res ^= a
        msb_set = a & 0x80
        a = (a << 1) & 0xFF
        if msb_set:
            a ^= (poly & 0xFF)  # 0x1B
        b >>= 1
    return res

def feistel_round_f(half_block: int, subkey: int) -> int:
    """Non-invertible toy round function using GF(2^8) S-like cubing + rotation."""
    mixed = gf256_mul(half_block ^ subkey, (half_block + 0x3D) & 0xFF)
    return ((mixed << 3) | (mixed >> 5)) & 0xFF

def feistel_cipher(block16: int, subkeys: list[int], decrypt: bool = False) -> int:
    keys = subkeys[::-1] if decrypt else subkeys
    L = (block16 >> 8) & 0xFF
    R = block16 & 0xFF
    for k in keys:
        L, R = R, L ^ feistel_round_f(R, k)
    # Final swap makes encryption and decryption structurally identical
    return (R << 8) | L`,
        traceTitle: 'Verification Trace: 4-Round 16-Bit Feistel Encrypt & Reverse-Subkey Decrypt',
        traceSteps: [
          { step: 'Input Plaintext', state: 'P = 0x4B7A -> L0=0x4B, R0=0x7A', explanation: 'Subkeys K = [0x1A, 0x5C, 0x9E, 0xF3].' },
          { step: 'Encrypt Rounds 1..4', state: 'L4=0xD2, R4=0x89 -> Pre-output Swap: C = 0x89D2', explanation: 'Final swap places R4 on left and L4 on right.' },
          { step: 'Decrypt Input', state: 'LD_0 = R4 = 0x89, RD_0 = L4 = 0xD2', explanation: 'Feed reversed keys [0xF3, 0x9E, 0x5C, 0x1A] into identical function!' },
          { step: 'Decrypt Round 1', state: 'LD_1 = 0xD2 (=L4=R3), RD_1 = 0x89 ^ F(0xD2, 0xF3) = L3', explanation: 'Exact reversal of every intermediate state down to (R0, L0), final swap -> 0x4B7A!' },
        ],
        edgeCases: [
          'If you omit the final swap (R_r, L_r) at the end of encryption, decryption still works ONLY if you swap the input halves before running reversed subkeys.',
          'In GF(2^8), 0 has no multiplicative inverse; AES S-Box explicitly maps 0x00^(-1) -> 0x00 before its affine bit matrix.',
        ],
      },
      takeawayMatrix: {
        caption: 'Comparison of Prime Fields GF(p), Extension Fields GF(2^n), and Ordinary Modular Ring Z_(2^n)',
        headers: ['Algebraic System', 'Element Set Size', 'Addition Operator', 'Multiplication Operator', 'Multiplicative Inverses'],
        rows: [
          ['Z_(2^n) (Modulo 256)', '2^n integers', '(a + b) mod 2^n', '(a * b) mod 2^n', 'ONLY odd integers (half the elements fail!)'],
          ['GF(p) (Prime Field)', 'p integers (0..p-1)', '(a + b) mod p', '(a * b) mod p', 'ALL p - 1 non-zero elements (via Extended Euclid)'],
          ['GF(2^n) (Binary Galois)', '2^n bit-polynomials', 'Bitwise XOR (Carry-free!)', 'Polynomial mult mod irreducible m(x)', 'ALL 2^n - 1 non-zero bytes (Exact byte alignment!)'],
        ],
      },
      examSpotlight: {
        weightage: '10–12 Marks (Feistel Proof + Confusion/Diffusion + GF(2^8) or Primitive Root Numerical)',
        highYieldDefinitions: [
          {
            concept: 'Strict Avalanche Criterion (SAC)',
            preciseStatement: 'A cryptographic function satisfies SAC if, whenever a single input bit is complemented, each of the output bits changes with an exact probability of 1/2.',
          },
          {
            concept: 'Bit Independence Criterion (BIC)',
            preciseStatement: 'Requires that output bits j and k change independently whenever any single input bit i is inverted, preventing pairwise bit correlations.',
          },
        ],
        commonTraps: [
          {
            trap: 'Saying GF(8) is identical to Z_8 (integers modulo 8).',
            correction: 'Z_8 is NOT a field because 2 * 4 ≡ 0 (mod 8) has zero divisors! GF(8) = GF(2^3) MUST be constructed via binary polynomials of degree < 3 modulo an irreducible cubic like x^3 + x + 1.',
          },
        ],
        pastPaperPatterns: [
          'Prove mathematically that decryption in a Feistel cipher recovers the original plaintext regardless of whether the round function F is invertible. List all Feistel design parameters. (10 Marks)',
          'Verify whether g = 3 is a primitive root of prime p = 7, and construct the discrete logarithm table modulo 7. (5 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'it410-q4',
          questionType: 'Numerical / Derivation',
          marks: 5,
          question:
            'Determine whether $g = 2$ or $g = 3$ is a primitive root modulo prime $p = 7$.',
          options: [
            'Both 2 and 3 are primitive roots modulo 7',
            'g = 2 has order 3 (not primitive); g = 3 has order 6 (primitive root)',
            'g = 2 has order 6 (primitive root); g = 3 has order 3',
            'Neither is a primitive root modulo 7',
          ],
          correctOptionIndex: 1,
          hint: 'Compute powers k = 1, 2, 3, 6 (divisors of p-1 = 6) modulo 7.',
          solutionSteps: [
            'Step 1: For p = 7, phi(7) = 6. A primitive root must have multiplicative order equal to 6.',
            'Step 2: Test g = 2: 2^1 ≡ 2, 2^2 ≡ 4, 2^3 = 8 ≡ 1 (mod 7)! Since ord_7(2) = 3 < 6, g = 2 only generates {1, 2, 4} and is NOT a primitive root.',
            'Step 3: Test g = 3: 3^1 ≡ 3, 3^2 = 9 ≡ 2, 3^3 ≡ 2*3 = 6, 3^4 ≡ 6*3 = 18 ≡ 4, 3^5 ≡ 4*3 = 12 ≡ 5, 3^6 ≡ 5*3 = 15 ≡ 1 (mod 7).',
            'Step 4: Powers of 3 generate {3, 2, 6, 4, 5, 1} = all 6 elements of Z_7*.',
          ],
          finalConclusion: 'g = 3 is a primitive root modulo 7 (along with 3^5 ≡ 5 mod 7), whereas g = 2 has order 3.',
        },
      ],
    },
    {
      id: 'it410-mod4',
      indexNumber: '04',
      lectureSpan: 'Lectures 12–15 (Part I)',
      referenceBooks: 'R1 (Stallings Ch. 3 & 6), R2 (Schneier)',
      title: 'DES, Strength of DES, Meet-in-the-Middle & Triple DES (3DES)',
      overview: {
        formalDefinition:
          '**Data Encryption Standard (DES / FIPS 46)** is a 16-round symmetric Feistel block cipher operating on $64$-bit plaintext blocks using a $56$-bit effective key (supplied as $64$ bits with $8$ odd-parity bits). **Triple DES (3DES / ANSI X9.52)** cascades three DES stages in **Encrypt-Decrypt-Encrypt (EDE)** configuration to achieve $112$-bit cryptographic strength.',
        highLevelIntuition:
          'DES pioneered modern block cipher architecture through its **Mangler Function $F$** combining $32 \\to 48$-bit Expansion ($E$), $48$-bit Subkey XOR, **eight $6 \\times 4$ non-linear S-Boxes** (the sole source of non-linear confusion in DES!), and a $32$-bit Straight Permutation ($P$). When $56$-bit keys became vulnerable to hardware brute-force, **Double DES** failed unexpectedly due to Diffie & Hellman’s **Meet-in-the-Middle ($2^{57}$) attack**, necessitating **Triple DES**.',
        coreTheoremLatex:
          '\\text{2DES Security} = O(2^{57}) \\ll 2^{112}; \\qquad \\text{3DES EDE: } C = E_{K_3}\\!\\left(D_{K_2}\\!\\left(E_{K_1}(P)\\right)\\right)',
      },
      keyTerms: [
        {
          term: 'DES S-Box Indexing',
          definition: 'Each of the 8 DES S-Boxes takes a 6-bit input b1 b2 b3 b4 b5 b6: the outer 2 bits (b1 b6) select row 0..3, and the inner 4 bits (b2 b3 b4 b5) select column 0..15, outputting a 4-bit integer.',
          examNote: 'Classic 3-mark numerical: e.g., input 011011 -> row = 01_2 = 1, col = 1101_2 = 13.',
        },
        {
          term: 'Meet-in-the-Middle Attack',
          definition: 'Known-plaintext space-time tradeoff against Double DES: since E_K1(P) = D_K2(C), precompute & sort E_K1(P) for all 2^56 K1 values, then test D_K2(C) for 2^56 K2 values, reducing 2^112 to ~2^57 ops.',
        },
        {
          term: 'DES Weak Keys',
          definition: 'Four 56-bit keys (where C0 and D0 are each all-0s or all-1s) causing all 16 subkeys K1..K16 to be identical, making DES an involution: E_K(E_K(P)) = P.',
        },
        {
          term: 'Complementation Property',
          definition: 'Algebraic quirk of DES: if C = E_K(P), then bitwise complement C_bar = E_{K_bar}(P_bar), cutting chosen-plaintext brute-force effort in half from 2^56 to 2^55.',
        },
      ],
      diagramId: 'it410-des-3des',
      diagramCaption:
        'Top: Internal 32->48->32 bit pipeline of the DES Mangler Function F(R, K). Bottom: Triple DES Encrypt-Decrypt-Encrypt (EDE) cascade.',
      technicalSections: [
        {
          id: 'it410-m4-s1',
          title: '4.1 Complete Internal Architecture of DES (Encryption & Key Schedule)',
          paragraphs: [
            '**Overall Flow:** A $64$-bit plaintext block passes through **Initial Permutation ($IP$)** (pure bit-wiring convenience from 1970s 8-bit buses; zero cryptographic security value), splits into $L_0$ ($32$ bits) and $R_0$ ($32$ bits), executes **16 identical Feistel rounds**, performs a **32-bit Swap** $(R_{16}, L_{16})$, and finishes with **Final Inverse Permutation ($IP^{-1}$)**.',
            '**Key Schedule ($64 \\to 56 \\to 48$ bits):** Every 8th bit ($8, 16, 24, 32, 40, 48, 56, 64$) is stripped by **Permuted Choice 1 (PC-1)**, leaving $56$ bits divided into $C_0$ ($28$ bits) and $D_0$ ($28$ bits). In round $i$, both halves undergo a **left circular shift**: by **1 bit** in rounds $1, 2, 9, 16$, and by **2 bits** in all other 12 rounds (total shifts $= 4 \\times 1 + 12 \\times 2 = 28$, returning $C_{16}=C_0, D_{16}=D_0$!). Finally, **Permuted Choice 2 (PC-2)** compresses the $56$ bits $(C_i, D_i)$ into the $48$-bit round subkey $K_i$.',
            '**Inside the Round Function $F(R_{i-1}, K_i)$:** (1) **Expansion Permutation $E$** duplicates $16$ boundary bits of the $32$-bit $R_{i-1}$ across $8$ overlapping $4$-bit blocks to form $48$ bits; (2) **Key Mixing** computes $48$-bit $A = E(R_{i-1}) \\oplus K_i$; (3) **Substitution via 8 S-Boxes ($S_1 \\dots S_8$)** maps each $6$-bit chunk $b_1 b_2 b_3 b_4 b_5 b_6$ to $4$ bits using row $= 2b_1 + b_6 \\in \\{0..3\\}$ and column $= 8b_2 + 4b_3 + 2b_4 + b_5 \\in \\{0..15\\}$, yielding $32$ bits; (4) **Straight P-Box ($P$)** permutes the $32$ S-Box output bits so the $4$ output bits of any single S-Box in round $i$ feed into $6$ different S-Boxes in round $i+1$, accelerating the **Avalanche Effect** (after Round 3, $\\approx 18$ bits flip; by Round 5, $\\approx 34/64$ bits flip!).',
          ],
        },
        {
          id: 'it410-m4-s2',
          title: '4.2 Strength of DES, Differential Resistance & Weak Keys',
          paragraphs: [
            '**1. Key Size ($56$ bits):** $2^{56} \\approx 7.21 \\times 10^{16}$ keys. Already in July 1998, the Electronic Frontier Foundation’s **$250,000 Deep Crack** machine broke a DES challenge in **56 hours** (and in 22 hours in 1999 with distributed.net). Thus single DES is completely obsolete against brute-force.',
            '**2. Nature of S-Box Design & Timing Attacks:** Despite 1970s public suspicion of an NSA trapdoor, when Biham & Shamir published **Differential Cryptanalysis** in 1990, they discovered IBM & NSA had secretly hardened DES’s S-Boxes specifically against differential trails! Breaking 16-round DES via Differential Cryptanalysis requires $2^{47}$ chosen plaintexts, and Matsui’s **Linear Cryptanalysis (1993)** requires $2^{43}$ known plaintexts — both far less practical than $2^{55}$ hardware key search.',
            '**3. Weak & Semi-Weak Keys:** Because key shifts happen independently on $C_0$ and $D_0$, if $C_0 \\in \\{0^{28}, 1^{28}\\}$ and $D_0 \\in \\{0^{28}, 1^{28}\\}$, all 16 subkeys are identical ($K_1 = K_2 = \\dots = K_{16}$), giving **4 Weak Keys** (`0x0101010101010101`, `0xFEFEFEFEFEFEFEFE`, `0xE0E0E0E0F1F1F1F1`, `0x1F1F1F1F0E0E0E0E`) where $E_K(E_K(P)) = P$. Additionally, **6 pairs (12 keys) of Semi-Weak Keys** satisfy $E_{K_1}(E_{K_2}(P)) = P$.',
          ],
        },
        {
          id: 'it410-m4-s3',
          title: '4.3 Why Double DES Fails (Meet-in-the-Middle) & Triple DES (3DES)',
          paragraphs: [
            '**Double DES ($C = E_{K_2}(E_{K_1}(P))$):** Uses two $56$-bit keys ($112$ bits total). Notice first that DES does **NOT** form a group ($\\exists K_3: E_{K_2}(E_{K_1}(P)) = E_{K_3}(P)$ was disproved; if it were a group, 2DES would collapse to $2^{56}$). Even so, **Diffie & Hellman (1977)** broke 2DES with the **Meet-in-the-Middle Attack**:',
          ],
          equations: [
            {
              label: 'Meet-in-the-Middle Equivalence & False-Alarm Elimination',
              latex: 'C = E_{K_2}(E_{K_1}(P)) \\iff X = E_{K_1}(P) = D_{K_2}(C); \\qquad N_{\\text{false}}^{(1)} = \\frac{2^{112}}{2^{64}} = 2^{48}, \\quad N_{\\text{false}}^{(2)} = \\frac{2^{112}}{2^{128}} = 2^{-16}',
              explanation:
                'Given 2 known-plaintext pairs (P_1, C_1) and (P_2, C_2): (1) Encrypt P_1 under all 2^56 K_1 values and store sorted table (X, K_1) in O(2^56) memory; (2) Decrypt C_1 under each of 2^56 K_2 values; for each of the ~2^48 table collisions on (P_1, C_1), test candidate (K_1, K_2) against (P_2, C_2), reducing expected false alarms to 2^(-16) ≈ 0! Total work: 2^56 + 2^56 = 2^57 DES operations.',
            },
          ],
          bulletPoints: [
            {
              lead: 'Triple DES with Two Keys (Tuchman E-D-E, 112-bit Key)',
              detail: 'C = E_{K1}(D_{K2}(E_{K1}(P))). No known practical attack beats O(2^112) brute-force (Merkle-Hellman / van Oorschot-Wiener attacks require unrealistic 2^56 chosen/known plaintexts). Setting K1 = K2 gives single DES compatibility!',
            },
            {
              lead: 'Triple DES with Three Keys (168-bit Key, 112-bit Effective Security)',
              detail: 'C = E_{K3}(D_{K2}(E_{K1}(P))). Used in PGP and S/MIME. Note: Even with 168 key bits, a Meet-in-the-Middle attack cutting between stage 1 and stage 2/3 reduces theoretical security from 2^168 to 2^112 operations.',
            },
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Authentic DES S-Box S1 Lookup & Meet-in-the-Middle Attack Demonstration',
        complexity: 'S-Box Lookup: O(1) | Meet-in-the-Middle on k-bit Toy Cipher: O(2^k log 2^k) vs O(2^(2k))',
        code: `# Official FIPS 46-3 DES S-Box S1 (4 rows x 16 columns)
DES_S1 = [
    [14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7],
    [0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
    [4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
    [15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13],
]

def des_s1_lookup(six_bit_val: int) -> tuple[int, int, int]:
    """Extracts outer bits (b1,b6) as row and inner 4 bits (b2..b5) as col."""
    b1 = (six_bit_val >> 5) & 1
    b6 = six_bit_val & 1
    row = (b1 << 1) | b6
    col = (six_bit_val >> 1) & 0x0F
    return row, col, DES_S1[row][col]

def meet_in_the_middle_demo(P1: int, C1: int, P2: int, C2: int, E, D, k_bits: int = 8):
    """Recovers (K1, K2) in 2*(2^k) ops instead of 2^(2k) brute-force ops."""
    forward_table: dict[int, list[int]] = {}
    for k1 in range(1 << k_bits):
        mid = E(k1, P1)
        forward_table.setdefault(mid, []).append(k1)
    for k2 in range(1 << k_bits):
        mid = D(k2, C1)
        if mid in forward_table:
            for k1 in forward_table[mid]:
                if E(k2, E(k1, P2)) == C2:
                    return k1, k2
    return None`,
        traceTitle: 'Step-by-Step S-Box S1 Evaluation on 6-Bit Input 011011_2 (27)',
        traceSteps: [
          { step: '1. Parse 6-bit Chunk', state: 'b1 b2 b3 b4 b5 b6 = 0 1 1 0 1 1', explanation: 'MSB b1 = 0, LSB b6 = 1; middle bits = 1101.' },
          { step: '2. Compute Row Index', state: 'row = (b1 b6)_2 = 01_2 = 1', explanation: 'Selects Row 1 (0-indexed) of S1.' },
          { step: '3. Compute Column Index', state: 'col = (b2 b3 b4 b5)_2 = 1101_2 = 13', explanation: 'Selects Column 13 (0-indexed) of S1.' },
          { step: '4. Table Output', state: 'DES_S1[1][13] = 5 -> 0101_2', explanation: 'Outputs 4-bit nonlinear nibble 0101_2.' },
        ],
        edgeCases: [
          'Always count S-Box rows (0..3) and columns (0..15) from ZERO, not ONE! Counting from 1 is the #1 mistake in DES numericals.',
          'Because block size of 3DES remains 64 bits (not 128), encrypting >2^32 blocks (~32 GB) under a single key risks Sweet32 birthday collisions!',
        ],
      },
      takeawayMatrix: {
        caption: 'Structural & Security Comparison: Single DES vs. Double DES vs. 2-Key 3DES vs. 3-Key 3DES',
        headers: ['Variant', 'Block Size', 'Key Bits (Raw / Effective)', 'Encryption Formula', 'Best Attack Work Factor'],
        rows: [
          ['Single DES', '64 bits', '64 / 56 bits', 'C = E_K(P)', '2^55 Brute-Force (Complementation) / 2^43 Linear'],
          ['Double DES (2DES)', '64 bits', '128 / 112 bits', 'C = E_K2(E_K1(P))', '2^57 Ops + 2^56 Memory (Meet-in-the-Middle!)'],
          ['2-Key Triple DES', '64 bits', '128 / 112 bits', 'C = E_K1(D_K2(E_K1(P)))', '2^112 Brute-Force (or 2^56 if 2^56 KP given)'],
          ['3-Key Triple DES', '64 bits', '192 / 168 bits', 'C = E_K3(D_K2(E_K1(P)))', '2^112 Meet-in-the-Middle Effective Strength'],
        ],
      },
      examSpotlight: {
        weightage: '12–15 Marks (Major Long-Answer ESA Topic: DES Diagram + Mangler F + 2DES MITM Proof)',
        highYieldDefinitions: [
          {
            concept: 'Why Decrypt in the Middle of 3DES (EDE vs EEE)?',
            preciseStatement: 'Using Decrypt in stage 2 confers zero extra or reduced security compared to EEE, ONLY hardware/legacy backward compatibility: setting K1 = K2 (or K1 = K2 = K3) causes E_K1 and D_K1 to cancel out, allowing a 3DES chip to interoperate seamlessly with legacy single-DES systems.',
          },
        ],
        commonTraps: [
          {
            trap: 'Stating that 3-Key 3DES has 168-bit security.',
            correction: '3-Key 3DES has a 168-bit key length (192 bits with parity), but its EFFECTIVE cryptographic security is 112 bits because a Meet-in-the-Middle split between K1 and (K2, K3) takes 2^56 + 2^112 ≈ 2^112 operations.',
          },
        ],
        pastPaperPatterns: [
          'Explain the single round structure of DES with neat diagrams of Key Schedule and Function F. How do the 8 S-boxes convert 48 bits to 32 bits? (12 Marks)',
          'Explain the Meet-in-the-Middle attack on Double DES and prove how many known plaintext-ciphertext pairs are needed to uniquely identify (K1, K2). (8 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'it410-q5',
          questionType: 'Numerical / Derivation',
          marks: 6,
          question:
            'In Double DES ($64$-bit block, two $56$-bit keys), if an attacker intercepts **only ONE** known plaintext-ciphertext pair $(P_1, C_1)$, how many false candidate key pairs $(K_1, K_2)$ are expected to survive the Meet-in-the-Middle check?',
          options: ['Zero false candidates', '2^8 = 256 candidates', '2^48 candidates', '2^56 candidates'],
          correctOptionIndex: 2,
          hint: 'There are 2^112 total key pairs mapping P_1 into 2^64 possible 64-bit ciphertexts.',
          solutionSteps: [
            'Step 1: Total ordered key pairs (K_1, K_2) = 2^56 × 2^56 = 2^112.',
            'Step 2: Number of possible 64-bit ciphertext outputs for a fixed P_1 is 2^64.',
            'Step 3: Assuming uniform pseudorandom mapping, expected candidate key pairs producing C_1 = 2^112 / 2^64 = 2^(112 - 64) = 2^48 false alarms!',
            'Step 4: Testing those 2^48 survivors on a SECOND pair (P_2, C_2) leaves 2^48 / 2^64 = 2^(-16) = 1/65,536 expected false keys.',
          ],
          finalConclusion: '2^48 false candidate key pairs survive a single pair; two pairs uniquely isolate the true key with probability 1 - 2^(-16).',
        },
      ],
    },
    {
      id: 'it410-mod5',
      indexNumber: '05',
      lectureSpan: 'Lectures 12–17 (Part II)',
      referenceBooks: 'R1 (Stallings Ch. 6), R2 (Schneier Ch. 9 & 14)',
      title: 'Block Cipher Modes of Operation (ECB, CBC, CFB, OFB) & Modern Ciphers (RC5, AES)',
      overview: {
        formalDefinition:
          'A **Mode of Operation** is an algorithmic construction defined by NIST SP 800-38A that extends a fixed-length $b$-bit block cipher $E_K: \\{0,1\\}^b \\to \\{0,1\\}^b$ to securely encrypt arbitrary-length messages or real-time character/bit streams while hiding repetitive block patterns.',
        highLevelIntuition:
          'A raw block cipher is merely a deterministic codebook for one $64$- or $128$-bit block. Encrypting a bitmap image or multi-block database directly in **ECB** leaks macroscopic visual and structural patterns! **CBC** chains blocks via XOR; **CFB** and **OFB** turn a block cipher into a **Stream Cipher** (using *only* the $E_K$ circuit even during decryption!); while **RC5** (`RC5-w/r/b`) exemplifies modern software-efficient design via **data-dependent rotations**.',
        coreTheoremLatex:
          '\\text{CFB Decrypt: } P_j = C_j \\oplus \\text{MSB}_s(E_K(I_j)); \\qquad \\text{OFB: } O_j = E_K(O_{j-1}), \\; C_j = P_j \\oplus O_j',
      },
      keyTerms: [
        {
          term: 'Initialization Vector (IV)',
          definition: 'Block-sized value seeding CBC, CFB, and OFB so identical plaintexts encrypt to completely distinct ciphertexts. Must be unpredictable in CBC and strictly unique (nonce) in OFB/CTR.',
        },
        {
          term: 'Error Propagation',
          definition: 'Characterization of how many decrypted plaintext bits/blocks are corrupted when a single bit error occurs in transmitted ciphertext C_j.',
          examNote: 'Favorite exam comparison table column across ECB, CBC, CFB, OFB!',
        },
        {
          term: 'RC5 Data-Dependent Rotation',
          definition: 'Core source of cryptographic non-linearity in Ronald Rivest’s RC5 cipher: x <<< y rotates w-bit word x cyclically left by (y mod w) bits.',
          formula: 'x \\lll y = x \\lll (y \\bmod w)',
        },
      ],
      diagramId: 'it410-block-modes',
      diagramCaption:
        'Use the interactive mode tabs above the schematic to inspect exact XOR, IV, Shift-Register, and Feedback wiring across ECB, CBC, CFB, and OFB.',
      technicalSections: [
        {
          id: 'it410-m5-s1',
          title: '5.1 Exhaustive Analysis of Block Cipher Modes (ECB, CBC, CFB, OFB & CTR)',
          paragraphs: [
            '**1. Electronic Codebook (ECB):** $C_j = E_K(P_j)$ and $P_j = D_K(C_j)$ for $j = 1 \\dots N$ (with PKCS#7 padding on final block). *Pros:* Parallel encryption & decryption, random block access, 1-bit transmission error affects **only $P_j$**. *Fatal Flaw:* Identical plaintext blocks $P_i = P_j$ always yield $C_i = C_j$ (the famous "ECB Penguin" pattern leak) and enable cut-and-paste block substitution.',
            '**2. Cipher Block Chaining (CBC):** $C_0 = \\text{IV}$, $C_j = E_K(P_j \\oplus C_{j-1})$, and $P_j = D_K(C_j) \\oplus C_{j-1}$. *Properties:* Hides identical plaintext blocks; requires padding; **encryption is strictly sequential**, whereas **decryption IS parallelizable** ($P_j$ only needs $C_j$ and $C_{j-1}$!). *Transmission Error Propagation:* A 1-bit error in $C_j$ completely scrambles **all $b$ bits of $P_j$** (due to avalanche inside $D_K(C_j)$) AND flips **the exact corresponding 1 bit in $P_{j+1}$** (via $\\oplus C_j$), with $P_{j+2}$ onward completely unaffected!',
            '**3. $s$-Bit Cipher Feedback (CFB):** Converts a $b$-bit block cipher into a **self-synchronizing stream cipher** operating on $s$-bit units ($s=1, 8,$ or $b$) with **no padding needed**! Shift register $I_1 = \\text{IV}$; $C_j = P_j \\oplus \\text{MSB}_s(E_K(I_j))$; next shift register $I_{j+1} = (I_j \\ll s) \\mid C_j$. Crucially, **CFB Decryption ALSO uses $E_K$ (never $D_K$!)** because $P_j = C_j \\oplus \\text{MSB}_s(E_K(I_j))$. *Error Propagation:* 1 bit error in $C_j$ flips 1 bit in $P_j$ and scrambles the next $\\lceil b/s \\rceil$ units until the bad $C_j$ shifts out of the $b$-bit register (self-synchronizing!).',
            '**4. Output Feedback (OFB) & Counter (CTR):** In **OFB**, $O_0 = \\text{Nonce}$, $O_j = E_K(O_{j-1})$, $C_j = P_j \\oplus O_j$. Because feedback comes **before** the plaintext XOR, keystream $O_1, O_2, \\dots$ can be **precomputed offline** and a 1-bit transmission error in $C_j$ flips **ONLY that single bit in $P_j$ (zero error propagation)** — ideal for noisy satellite links, though vulnerable to controlled bit-flipping if unauthenticated, and **not self-synchronizing** if bits are dropped. **CTR Mode** computes $C_j = P_j \\oplus E_K(\\text{Nonce} \\parallel j)$, combining OFB’s zero error propagation with **full parallel encryption, parallel decryption, and random-access seek**.',
          ],
        },
        {
          id: 'it410-m5-s2',
          title: '5.2 Modern Symmetric Cipher: RC5 (`RC5-w/r/b`) & AES Comparison',
          paragraphs: [
            'Designed by **Ronald Rivest (1994)** for RSA Security, **RC5** is a fast, compact, parameterized symmetric block cipher denoted **`RC5-w/r/b`**:',
          ],
          bulletPoints: [
            {
              lead: 'Parameter w (Word Size in Bits)',
              detail: 'RC5 encrypts 2-word blocks (block size = 2w bits). Permissible w ∈ {16, 32, 64} => block sizes 32, 64, or 128 bits.',
            },
            {
              lead: 'Parameter r (Number of Rounds) & b (Key Length in Bytes)',
              detail: 'Both r and b can range from 0 to 255! Standard nominal version is RC5-32/12/16 (64-bit blocks, 12 rounds, 16-byte = 128-bit key).',
            },
            {
              lead: 'Three Primitive Operations Only',
              detail: '(1) Two’s complement addition/subtraction modulo 2^w (+, -), (2) Bitwise XOR (⊕), and (3) Data-dependent cyclic rotation (x <<< y and x >>> y). Zero lookup tables or S-Boxes -> tiny hardware/RAM footprint!',
            },
            {
              lead: 'Key Expansion Magic Constants (P_w, Q_w)',
              detail: 'Subkey array S[0 .. 2r + 1] of t = 2(r + 1) words is initialized via S[0] = P_w and S[i] = (S[i-1] + Q_w) mod 2^w, where P_w = Odd((e - 2)*2^w) and Q_w = Odd((phi - 1)*2^w) (for w=32: P_32 = 0xB7E15163, Q_32 = 0x9E3779B9), then mixed over 3*max(t, c) passes with key array L[0..c-1].',
            },
          ],
          equations: [
            {
              label: 'RC5 Encryption & Exact Inverse Decryption Equations',
              latex: '\\begin{aligned} &\\textbf{Encrypt:} \\; A = A + S[0]; \\; B = B + S[1]; \\; \\text{for } i=1..r:\\; A = ((A \\oplus B) \\lll B) + S[2i]; \\; B = ((B \\oplus A) \\lll A) + S[2i+1] \\\\ &\\textbf{Decrypt:} \\; \\text{for } i=r..1:\\; B = ((B - S[2i+1]) \\ggg A) \\oplus A; \\; A = ((A - S[2i]) \\ggg B) \\oplus B; \\; B = B - S[1]; \\; A = A - S[0] \\end{aligned}',
              explanation:
                'Every addition mod 2^w is inverted by subtraction mod 2^w, every left rotation <<< is inverted by right rotation >>> using the still-intact partner word, and XOR is self-inverse.',
            },
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Complete Reference Implementation of RC5-32/12/16 (Key Expansion, Encrypt & Decrypt)',
        complexity: 'Key Schedule: O(r + c) | Encrypt/Decrypt: O(r) CPU word instructions',
        code: `MASK32 = 0xFFFFFFFF
P32, Q32 = 0xB7E15163, 0x9E3779B9

def rotl32(val: int, shift: int) -> int:
    s = shift & 31
    return ((val << s) | (val >> (32 - s))) & MASK32

def rotr32(val: int, shift: int) -> int:
    s = shift & 31
    return ((val >> s) | (val << (32 - s))) & MASK32

def rc5_key_schedule(key: bytes, r: int = 12) -> list[int]:
    c = max(1, (len(key) + 3) // 4)
    L = [0] * c
    for i in range(len(key) - 1, -1, -1):
        L[i // 4] = ((L[i // 4] << 8) + key[i]) & MASK32
    t = 2 * (r + 1)
    S = [P32]
    for i in range(1, t):
        S.append((S[i - 1] + Q32) & MASK32)
    i = j = A = B = 0
    for _ in range(3 * max(t, c)):
        A = S[i] = rotl32((S[i] + A + B) & MASK32, 3)
        B = L[j] = rotl32((L[j] + A + B) & MASK32, (A + B))
        i = (i + 1) % t
        j = (j + 1) % c
    return S

def rc5_encrypt_block(A: int, B: int, S: list[int], r: int = 12) -> tuple[int, int]:
    A = (A + S[0]) & MASK32
    B = (B + S[1]) & MASK32
    for i in range(1, r + 1):
        A = (rotl32(A ^ B, B) + S[2 * i]) & MASK32
        B = (rotl32(B ^ A, A) + S[2 * i + 1]) & MASK32
    return A, B

def rc5_decrypt_block(A: int, B: int, S: list[int], r: int = 12) -> tuple[int, int]:
    for i in range(r, 0, -1):
        B = rotr32((B - S[2 * i + 1]) & MASK32, A) ^ A
        A = rotr32((A - S[2 * i]) & MASK32, B) ^ B
    return (A - S[0]) & MASK32, (B - S[1]) & MASK32`,
        traceTitle: 'Single RC5 Round Trace (w = 32, Round i = 1)',
        traceSteps: [
          { step: 'Pre-whitening', state: 'A0 = (P_left + S[0]) mod 2^32, B0 = (P_right + S[1]) mod 2^32', explanation: 'Initial subkey whitening prevents unkeyed first-round differential entry.' },
          { step: 'Half-Round 1A', state: 'shift = B0 & 31 -> A1 = (((A0 ^ B0) <<< shift) + S[2]) mod 2^32', explanation: 'Rotation depends dynamically on data bits of B0!' },
          { step: 'Half-Round 1B', state: 'shift = A1 & 31 -> B1 = (((B0 ^ A1) <<< shift) + S[3]) mod 2^32', explanation: 'Updated A1 immediately governs rotation of B0 ^ A1.' },
          { step: 'Decryption Reversal', state: 'B0 = (((B1 - S[3]) >>> (A1 & 31)) ^ A1)', explanation: 'Because A1 is still intact before step 2 of decryption, exact shift is known!' },
        ],
        edgeCases: [
          'In OFB and CTR modes, reusing the same (Key, IV/Nonce) pair across two messages turns the mode into a Two-Time Pad (C1 XOR C2 = P1 XOR P2), completely destroying confidentiality.',
          'In RC5 with r = 0 rounds, encryption reduces solely to modular addition whitening (A + S[0], B + S[1]) with zero diffusion.',
        ],
      },
      takeawayMatrix: {
        caption: 'Master Exam Comparison Matrix: Block Cipher Modes of Operation',
        headers: ['Mode', 'Padding Needed?', 'Parallel Encrypt / Decrypt', 'Uses D_K on Decrypt?', '1-Bit Ciphertext Error Impact'],
        rows: [
          ['ECB', 'Yes (Full block)', 'Yes / Yes', 'Yes (D_K)', 'Scrambles all b bits of P_j ONLY'],
          ['CBC', 'Yes (Full block)', 'No / YES', 'Yes (D_K)', 'Scrambles all b bits of P_j + flips 1 matching bit of P_(j+1)'],
          ['s-bit CFB', 'No (Stream)', 'No / YES', 'NO (Uses E_K only!)', 'Flips 1 bit of P_j + scrambles next ceil(b/s) units'],
          ['OFB', 'No (Stream)', 'No / No (Keystream offline)', 'NO (Uses E_K only!)', 'Flips ONLY the 1 corresponding bit in P_j (Zero propagation)'],
          ['CTR', 'No (Stream)', 'YES / YES (Random seek)', 'NO (Uses E_K only!)', 'Flips ONLY the 1 corresponding bit in P_j (Zero propagation)'],
        ],
      },
      examSpotlight: {
        weightage: '10–15 Marks (Modes Comparison + Error Propagation Numerical + RC5 Architecture)',
        highYieldDefinitions: [
          {
            concept: 'AES (Rijndael) vs. DES Structural Shift',
            preciseStatement: 'Unlike DES (64-bit Feistel network), AES is a 128-bit Substitution-Permutation Network (SPN) over a 4×4 byte State matrix with 10/12/14 rounds for 128/192/256-bit keys, applying four invertible transformations per round: SubBytes (GF(2^8) inverse + affine), ShiftRows, MixColumns (skipped in final round), and AddRoundKey.',
          },
        ],
        commonTraps: [
          {
            trap: 'Drawing D_K (DES Decryption box) inside the receiver schematic of CFB or OFB.',
            correction: 'CRITICAL TRAP! Both CFB and OFB XOR the plaintext with the output of E_K; to reproduce that exact same keystream mask at the receiver, the receiver MUST also run E_K (forward encryption), NEVER D_K!',
          },
        ],
        pastPaperPatterns: [
          'Compare ECB, CBC, CFB, and OFB modes of operation with block diagrams. Suppose bit 14 of ciphertext block C_3 is flipped during transmission: trace the exact corruption in recovered plaintext under CBC and 8-bit CFB (for 64-bit DES). (12 Marks)',
          'Describe the RC5 symmetric encryption algorithm (`RC5-w/r/b`), explaining its magic constants, key expansion, and data-dependent rotations. (10 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'it410-q6',
          questionType: 'Conceptual / Analytical',
          marks: 5,
          question:
            'In $8$-bit CFB mode using $64$-bit DES, suppose a single bit error occurs in transmitted $8$-bit ciphertext character $C_1$. How many decrypted $8$-bit plaintext characters are corrupted before normal decryption resumes automatically?',
          options: [
            'Only P_1 (1 character)',
            'P_1 and P_2 (2 characters)',
            'P_1 plus the next 8 characters P_2 .. P_9 (9 characters total)',
            'All remaining characters in the stream forever',
          ],
          correctOptionIndex: 2,
          hint: 'C_1 enters the right end of the 64-bit (8-byte) shift register and takes 64 / 8 = 8 shifts to exit.',
          solutionSteps: [
            'Step 1: When C_1 arrives with 1 flipped bit, P_1 = C_1 XOR MSB_8(E_K(IV)) immediately suffers a 1-bit error.',
            'Step 2: Next, corrupted C_1 is shifted into the rightmost 8 bits of the 64-bit shift register.',
            'Step 3: Because E_K has the avalanche property, while C_1 remains anywhere inside the 64-bit shift register (for j = 2, 3, 4, 5, 6, 7, 8, 9 — i.e., 64/8 = 8 subsequent encryption calls), MSB_8(E_K(I_j)) is pseudorandomly garbled.',
            'Step 4: After 8 shifts, C_1 falls off the left end of the 64-bit register, and P_10 decrypts cleanly (self-synchronization)!',
          ],
          finalConclusion: '9 characters total: 1 bit in P_1 + complete scrambling of the next 8 characters (P_2 through P_9).',
        },
      ],
    },
    {
      id: 'it410-mod6',
      indexNumber: '06',
      lectureSpan: 'Lectures 16–23',
      referenceBooks: 'R1 (Stallings Ch. 2, 3, 7), R2 (Schneier)',
      title: 'Stream Ciphers, Pseudo-Random Numbers, One-Time Pad & Cryptanalysis',
      overview: {
        formalDefinition:
          'A **Synchronous Stream Cipher** expands a short secret seed $K \\in \\{0,1\\}^k$ via a deterministic **Cryptographically Secure Pseudo-Random Bit Generator (CSPRBG)** into a keystream $z_1 z_2 \\dots$ to encrypt $c_i = p_i \\oplus z_i$. When $z_1 z_2 \\dots$ is a truly uniform, non-repeating random sequence of length $\\ge |P|$, it becomes the **Vernam One-Time Pad (OTP)** achieving Claude Shannon’s **Perfect Secrecy**.',
        highLevelIntuition:
          'Lectures 16–23 unite three deeply connected questions: (1) Can any cipher ever be mathematically **unbreakable** even against infinite computing power? (**Yes — the One-Time Pad**, proved via Shannon entropy); (2) How do we practically approximate a random keystream from a compact key? (**PRNGs**: contrasting predictable statistical **LCGs** against number-theoretic **Blum Blum Shub** and **RC4**); and (3) How do modern cryptanalysts attack real ciphers? (**Differential & Linear Cryptanalysis**).',
        coreTheoremLatex:
          '\\Pr[P = x \\mid C = y] = \\Pr[P = x] \\iff I(P; C) = H(P) - H(P \\mid C) = 0',
      },
      keyTerms: [
        {
          term: 'One-Time Pad (OTP)',
          definition: 'Vernam cipher using a truly random keystream K as long as plaintext P, used strictly once: C = P XOR K. Only known unconditionally secure cipher.',
        },
        {
          term: 'Linear Congruential Generator (LCG)',
          definition: 'Fast statistical PRNG X_(n+1) = (a*X_n + c) mod m. Good for simulations, but cryptographically broken because observing 3-4 consecutive outputs reveals (a, c, m).',
          formula: 'X_{n+1} = (a X_n + c) \\bmod m',
        },
        {
          term: 'Blum Blum Shub (BBS)',
          definition: 'Provably secure CSPRBG X_(i+1) = X_i^2 mod (p*q) outputting LSB b_i = X_i mod 2, where primes p ≡ q ≡ 3 (mod 4). Satisfies the Next-Bit Test.',
        },
        {
          term: 'Differential Cryptanalysis',
          definition: 'Chosen-plaintext attack (Biham & Shamir) tracking high-probability XOR input differences ΔX = X ⊕ X* -> output differences ΔY = Y ⊕ Y* across cipher rounds to deduce last-round subkey bits.',
        },
        {
          term: 'Linear Cryptanalysis',
          definition: 'Known-plaintext attack (Mitsuru Matsui) finding linear XOR equations relating subsets of plaintext, ciphertext, and key bits that hold with probability p != 1/2 (bias ε = |p - 1/2|).',
        },
      ],
      diagramId: 'it410-stream-otp-cryptanalysis',
      diagramCaption:
        'Left: Keystream-driven Stream Cipher / Vernam XOR architecture. Right: Adversary capability escalation across COA, KPA, CPA, and CCA.',
      technicalSections: [
        {
          id: 'it410-m6-s1',
          title: '6.1 One-Time Pad (Vernam Cipher) & Proof of Shannon Perfect Secrecy',
          paragraphs: [
            'Proposed by Gilbert Vernam (AT&T, 1917) and proved unbreakable by **Claude Shannon (1949)**, the **One-Time Pad** encrypts an $L$-bit message $P$ with a **truly random** $L$-bit key $K$ chosen uniformly from $\\{0,1\\}^L$: $C = P \\oplus K$ and $P = C \\oplus K$.',
            '**Mathematical Proof of Perfect Secrecy:** Fix any candidate plaintext $x \\in \\{0,1\\}^L$ and any observed ciphertext $y \\in \\{0,1\\}^L$. There exists **exactly one** key $k = x \\oplus y$ that maps $x$ to $y$, occurring with uniform probability $\\Pr[K = x \\oplus y] = 2^{-L}$ independent of $P$. By Bayes’ Rule: $\\Pr[C = y] = \\sum_{x\'} \\Pr[P = x\'] \\Pr[K = x\' \\oplus y] = 2^{-L} \\sum_{x\'} \\Pr[P = x\'] = 2^{-L}$. Hence $\\Pr[P = x \\mid C = y] = \\frac{\\Pr[P=x] \\cdot 2^{-L}}{2^{-L}} = \\Pr[P = x]$! Even an unbounded adversary trying all $2^L$ keys obtains **every conceivable $L$-bit message (including valid decoys) with equal likelihood**.',
            '**Three Non-Negotiable Practical Limitations of OTP:** (1) Generating massive quantities of true physical entropy (TRNG) at gigabit rates is difficult; (2) **Key Distribution Problem**: for every $1\\text{ GB}$ of data, you must securely transport $1\\text{ GB}$ of key ahead of time; (3) **Absolute Single-Use Rule (Two-Time Pad Failure)**: If $C_1 = P_1 \\oplus K$ and $C_2 = P_2 \\oplus K$, an eavesdropper computes $C_1 \\oplus C_2 = (P_1 \\oplus K) \\oplus (P_2 \\oplus K) = P_1 \\oplus P_2$, stripping $K$ completely and recovering both plaintexts via crib-dragging (historically broke Soviet VENONA traffic!).',
          ],
        },
        {
          id: 'it410-m6-s2',
          title: '6.2 Pseudo-Random Number Generators (Lectures 21–23): LCG vs. Blum Blum Shub & RC4',
          paragraphs: [
            'A **Cryptographically Secure PRNG (CSPRNG)** must satisfy three tiered requirements: **(R1) Uniformity & Independence** (passes NIST SP 800-22 statistical tests: frequency, runs, Maurer universal test), **(R2) Unpredictability / Next-Bit Test** (given first $k$ bits, no polynomial-time algorithm predicts bit $k+1$ with probability $> 1/2 + \\text{negl}$), and **(R3) Backward Insecurity Resistance** (compromising future state cannot reveal seed).',
            '**1. Linear Congruential Generator (LCG — Lehmer):** $X_{n+1} = (a X_n + c) \\bmod m$. By the **Hull-Dobell Theorem**, LCG achieves full period $m$ iff: (i) $\\gcd(c, m) = 1$, (ii) $a - 1$ is divisible by all prime factors of $m$, and (iii) if $4 \\mid m$, then $4 \\mid (a - 1)$ (e.g., Park-Miller `m = 2^31 - 1, a = 16807, c = 0`). **Why LCG is Cryptographically Broken:** Given $X_0, X_1, X_2, X_3$, setting $\\Delta_n = X_{n+1} - X_n$ satisfies $\\Delta_1 \\equiv a \\Delta_0 \\pmod m$ and $\\Delta_2 \\Delta_0 - \\Delta_1^2 \\equiv 0 \\pmod m$, revealing $m$ via GCD and solving $(a, c)$ linearly!',
            '**2. Blum Blum Shub (BBS) Generator:** Choose two large distinct primes $p, q$ such that **$p \\equiv 3 \\pmod 4$ and $q \\equiv 3 \\pmod 4$** (Blum integers, $n = p \\cdot q$). Pick random seed $s$ with $\\gcd(s, n) = 1$. Set $X_0 = s^2 \\bmod n$, and for $i = 1, 2, \\dots$: $X_i = X_{i-1}^2 \\bmod n$, outputting **least significant bit $B_i = X_i \\bmod 2$**. BBS is **provably CSPRBG**: predicting $B_{i+1}$ or inverting $X_i$ is polynomially equivalent to the intractable **Quadratic Residuosity / Integer Factoring Problem**! (In **RC4**, a $256$-byte permutation array `S[0..255]` is scrambled by KSA and emits 1 byte per clock in PRGA — fast, but deprecated in TLS due to biased initial bytes).',
          ],
          workedExample: {
            title: 'Worked Exam Numerical: Blum Blum Shub (BBS) Bitstream Generation',
            problemStatement: 'Given Blum primes p = 7 and q = 11 (both ≡ 3 mod 4) and seed s = 2, generate the first 5 pseudorandom bits using BBS.',
            steps: [
              '1. Verify Blum primes: 7 mod 4 = 3, 11 mod 4 = 3 -> n = p * q = 77; gcd(2, 77) = 1.',
              '2. Initialize X_0 = s^2 mod 77 = 2^2 mod 77 = 4.',
              '3. i = 1: X_1 = 4^2 mod 77 = 16 -> B_1 = 16 mod 2 = 0.',
              '4. i = 2: X_2 = 16^2 mod 77 = 256 mod 77 = 25 (since 3*77 = 231) -> B_2 = 25 mod 2 = 1.',
              '5. i = 3: X_3 = 25^2 mod 77 = 625 mod 77 = 9 (since 8*77 = 616) -> B_3 = 9 mod 2 = 1.',
              '6. i = 4: X_4 = 9^2 mod 77 = 81 mod 77 = 4 -> B_4 = 4 mod 2 = 0.',
              '7. i = 5: X_5 = 4^2 mod 77 = 16 -> B_5 = 16 mod 2 = 0.',
            ],
            finalAnswer: 'Generated BBS output bits B_1..B_5 = 01100.',
          },
        },
        {
          id: 'it410-m6-s3',
          title: '6.3 Cryptanalysis Models: COA, KPA, CPA, CCA & Differential vs. Linear',
          paragraphs: [
            '**Classical Attack Hierarchy** (ordered from hardest for attacker / least info to strongest attacker): **(1) Ciphertext-Only (COA)**: Attacker has only $Y$; **(2) Known-Plaintext (KPA)**: Attacker has historical $(X_i, Y_i)$ pairs (e.g., standard file headers `%PDF-1.5`, HTTP headers); **(3) Chosen-Plaintext (CPA)**: Attacker submits crafted $X_i$ to an encryption oracle and receives $E_K(X_i)$; **(4) Chosen-Ciphertext (CCA / Adaptive CCA2)**: Attacker submits crafted $Y_i \\neq Y^*$ to a decryption oracle and observes $D_K(Y_i)$. Modern secure systems demand **IND-CCA2** security.',
            '**Differential vs. Linear Cryptanalysis:** **Differential Cryptanalysis** (Biham & Shamir, 1990) is a **Chosen-Plaintext Attack** analyzing how fixed XOR differences $\\Delta X = X \\oplus X^\'$ propagate through non-linear S-boxes into expected output differences $\\Delta Y$ with high probability $p_D$ ("differential characteristic"). **Linear Cryptanalysis** (Matsui, 1993) is a **Known-Plaintext Attack** constructing linear XOR approximations $P[i_1 \\oplus \\dots \\oplus i_a] \\oplus C[j_1 \\oplus \\dots \\oplus j_b] = K[k_1 \\oplus \\dots \\oplus k_c]$ holding with probability $1/2 + \\epsilon$; by Matsui’s Piling-Up Lemma, $N \\approx \\epsilon^{-2}$ known plaintexts recover key parity bits.',
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Blum Blum Shub CSPRBG & Two-Time Pad Vulnerability Exploit Demo',
        complexity: 'BBS: O(k * (log n)^2) for k bits | Two-Time Pad XOR: O(L)',
        code: `def blum_blum_shub(p: int, q: int, seed: int, num_bits: int) -> tuple[str, list[int]]:
    assert p % 4 == 3 and q % 4 == 3, "p and q must be congruent to 3 mod 4"
    n = p * q
    x = (seed * seed) % n
    states, bits = [], []
    for _ in range(num_bits):
        x = (x * x) % n
        states.append(x)
        bits.append(x & 1)
    return "".join(map(str, bits)), states

def two_time_pad_crib_drag(c1: bytes, c2: bytes, crib: bytes) -> list[tuple[int, str]]:
    """Exploits C1 ^ C2 == P1 ^ P2 by sliding a guessed word (crib) along the XOR stream."""
    p1_xor_p2 = bytes(a ^ b for a, b in zip(c1, c2))
    hits = []
    for pos in range(len(p1_xor_p2) - len(crib) + 1):
        candidate = bytes(p1_xor_p2[pos + i] ^ crib[i] for i in range(len(crib)))
        if all(32 <= b <= 122 for b in candidate):
            hits.append((pos, candidate.decode("ascii")))
    return hits`,
        traceTitle: 'Crib-Dragging Trace When Key K is Reused on Two Messages',
        traceSteps: [
          { step: '1. Intercept Reused OTP', state: 'C1 = P1 ^ K,  C2 = P2 ^ K', explanation: 'Sender mistakenly encrypts two ASCII messages with identical keystream K.' },
          { step: '2. Eliminate Key K', state: 'X = C1 ^ C2 = (P1 ^ K) ^ (P2 ^ K) = P1 ^ P2', explanation: 'K ^ K = 0! Key completely vanishes from X.' },
          { step: '3. Slide Crib " the "', state: 'X[pos : pos+5] ^ " the " -> reveals P2[pos : pos+5]', explanation: 'Wherever " the " occurs in P1, readable English immediately pops out of P2!' },
        ],
        edgeCases: [
          'Even if OTP achieves Perfect Secrecy (Confidentiality), it has ZERO Integrity protection (malleability): flipping bit i of C deterministically flips bit i of decrypted P!',
          'In BBS, outputting multiple bits per squaring is only provably safe up to O(log log n) LSBs; outputting too many bits leaks internal state.',
        ],
      },
      takeawayMatrix: {
        caption: 'Comparison of Random/Pseudo-Random Bit Generation & Stream Schemes',
        headers: ['Scheme / Generator', 'Mathematical Law', 'Deterministic?', 'Cryptographically Secure?', 'Primary Application / Flaw'],
        rows: [
          ['TRNG (Thermal/Quantum)', 'Physical entropy sampling', 'No (Non-deterministic)', 'Yes (Information-theoretic)', 'Generating master keys, nonces, seeds'],
          ['LCG (Lehmer)', 'X_(n+1) = (aX_n + c) mod m', 'Yes (Periodic <= m)', 'NO (Predictable from 3-4 outputs)', 'Monte Carlo simulations ONLY'],
          ['Blum Blum Shub (BBS)', 'X_(i+1) = X_i^2 mod pq; LSB', 'Yes', 'YES (Provable via Factoring/QR)', 'High-assurance key generation (Slow)'],
          ['CTR / OFB (AES-CTR)', 'Z_i = E_K(Nonce || i)', 'Yes', 'YES (Under PRF assumption)', 'High-speed TLS / Disk stream encryption'],
          ['One-Time Pad (Vernam)', 'C = P XOR K (|K| = |P|)', 'True Random Pad', 'Unconditionally Secure (Perfect)', 'Diplomatic hotlines; fails on key reuse'],
        ],
      },
      examSpotlight: {
        weightage: '10–14 Marks (PRNG BBS Numerical + OTP Perfect Secrecy + Differential vs Linear Cryptanalysis)',
        highYieldDefinitions: [
          {
            concept: 'Next-Bit Test (Yao, 1982)',
            preciseStatement: 'A bit generator passes the Next-Bit Test if there is no polynomial-time algorithm that, on input of the first k bits of an output sequence, can predict the (k+1)-st bit with probability significantly greater than 1/2. Passing the Next-Bit Test is necessary and sufficient for passing ALL polynomial-time statistical tests!',
          },
        ],
        commonTraps: [
          {
            trap: 'Writing that One-Time Pad guarantees message authenticity/integrity.',
            correction: 'OTP guarantees ONLY unconditional CONFIDENTIALITY! Because every plaintext is equally likely, an active attacker knowing P = "PAY $100" can compute Δ = "PAY $100" XOR "PAY $999" and transmit C\' = C XOR Δ, causing receiver to decrypt "PAY $999"!',
          },
          {
            trap: 'Confusing Differential (CPA) and Linear (KPA) attack models.',
            correction: 'Differential Cryptanalysis is a CHOSEN-Plaintext Attack (attacker chooses pairs with specific ΔX), whereas Linear Cryptanalysis is a KNOWN-Plaintext Attack (passively collects N random pairs).',
          },
        ],
        pastPaperPatterns: [
          'Explain Blum Blum Shub (BBS) pseudorandom bit generator. Why is it called a CSPRBG, and why do Linear Congruential Generators fail in cryptography? Illustrate BBS for p=11, q=19, s=3. (10 Marks)',
          'What is the One-Time Pad? Prove why it achieves Shannon’s Perfect Secrecy and explain its practical difficulties. Differentiate Differential and Linear Cryptanalysis. (10 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'it410-q7',
          questionType: 'Architecture / Proof',
          marks: 6,
          question:
            'Using Blum Blum Shub with $p = 11, q = 19$ ($n = 209$) and seed $s = 3$, compute $X_0, X_1, X_2, X_3$ and the first 3 output bits $B_1 B_2 B_3$.',
          options: ['B_1 B_2 B_3 = 1 1 0', 'B_1 B_2 B_3 = 1 0 1', 'B_1 B_2 B_3 = 0 1 1', 'B_1 B_2 B_3 = 0 0 1'],
          correctOptionIndex: 2,
          hint: 'X_0 = 3^2 mod 209 = 9; then X_1 = 9^2 mod 209 = 81 -> odd!',
          solutionSteps: [
            'Wait — check carefully! X_0 = s^2 mod 209 = 9.',
            'Step 1 (i=1): X_1 = 9^2 mod 209 = 81 -> B_1 = 81 mod 2 = 1.',
            'Step 2 (i=2): X_2 = 81^2 mod 209 = 6561 mod 209. Since 209 * 31 = 6479, 6561 - 6479 = 82 -> B_2 = 82 mod 2 = 0.',
            'Step 3 (i=3): X_3 = 82^2 mod 209 = 6724 mod 209. Since 209 * 32 = 6688, 6724 - 6688 = 36 -> B_3 = 36 mod 2 = 0.',
          ],
          finalConclusion: 'X_0 = 9, X_1 = 81 (B_1=1), X_2 = 82 (B_2=0), X_3 = 36 (B_3=0) => Output = 100. (Let us double-check option alignment!)',
        },
      ],
    },
  ],
};

// Ensure Q7 options match exact arithmetic 100!
it410Course.modules[5].practiceQuestions[0].options = [
  'B_1 B_2 B_3 = 1 0 0 (X_1=81, X_2=82, X_3=36)',
  'B_1 B_2 B_3 = 1 1 0 (X_1=81, X_2=83, X_3=36)',
  'B_1 B_2 B_3 = 0 1 1 (X_1=18, X_2=81, X_3=37)',
  'B_1 B_2 B_3 = 1 0 1 (X_1=81, X_2=82, X_3=37)',
];
it410Course.modules[5].practiceQuestions[0].correctOptionIndex = 0;
