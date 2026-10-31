import { SubjectCourse } from '../types/study';

export const electivesCourse: SubjectCourse = {
  id: 'electives',
  code: 'IT 412 / CS 508',
  shortTitle: 'Electives: IoT & Big Data',
  fullTitle: 'VII Semester IT Electives — Unit 1 (IT 412 IoT & CS 508 Big Data Analytics)',
  instructor: 'Department of Computer Science & IT — B.Tech. VII Semester Electives',
  credits: 4,
  maxMarks: '100 (CA: 40 + ESA: 60)',
  examSchedule: {
    assignment1: '27 August 2026 (10 Marks)',
    periodicalTest1: '9–12 September 2026 (10 Marks)',
    semesterExam: '2–19 December 2026 (60 Marks)',
  },
  syllabusVerbatim:
    'IT 412 Section A: Introduction of IoT, Sensing, Actuation, Sensor Networks, M2M to IoT - industrial structure, architecture for conversion of M2M to IoT, design principles, capabilities, IoT network architecture, IoT Architecture Reference Model, SDN & SDN for IoT, Data Handling & Analytics, Cloud and Fog Computing, Sensor-Cloud, Domain specific applications. | CS 508 Section A: Introduction to Big Data Analytics, Evolution, Structuring Big Data, Types, 4Vs, Advantages, Comparing Report and Analysis, Analytic Process, Types of Analytics, Framing the Problem, Statistical Significance vs Business Importance, Making Inferences, History & Ensemble Methods, Visualization.',
  courseOutcomes: [
    'IT 412 CO 1–2: Understand IoT design solutions, M2M-to-IoT conversion, SDN/Fog/Sensor-Cloud architectures, and domain applications.',
    'CS 508 CO 1 & 6: Understand Big Data 4Vs, structuring paradigms, statistical vs. business significance, and ensemble analytics.',
  ],
  recommendedBooks: [
    'IT 412 R1. Holler, J. et al. (2014). From Machine-to-Machine to the Internet of Things. Academic Press.',
    'IT 412 R2. Bahga, A. & Madisetti, V. (2014). Internet of Things: A Hands-On Approach. VPT.',
    'CS 508 R1. White, Tom (2012). Hadoop: The Definitive Guide. O’Reilly Media.',
    'CS 508 R3. Loshin, David (2013). Big Data Analytics: From Strategic Planning to Enterprise Integration. Elsevier.',
  ],
  handouts: [
    {
      id: 'elective-pdf',
      title: 'Official B.Tech (IT) VII Semester Elective Syllabus Booklet (Pages 1–11)',
      subtitle: 'Covers MCTR 426, IT 412 (IoT), RS 401, CS 508 (Big Data Analytics), and AI 504',
      type: 'pdf',
      src: '/assets/aistudio/Syllabus_BTECH_IT__VII_Semester_for_Elective_Papers__3e92e15d.pdf',
      notes: 'Pages 5–6 contain IT 412 Internet of Things; Pages 8–9 contain CS 508 Big Data Analytics.',
    },
  ],
  formulas: [
    {
      id: 'f-fog-latency',
      category: 'IT 412 (IoT & Fog)',
      name: 'Fog vs. Cloud End-to-End Service Latency & Bandwidth Reduction',
      latex: 'L_{\\text{total}} = 2\\, d_{\\text{prop}} + \\frac{S_{\\text{pkt}}}{B_{\\text{link}}} + T_{\\text{queue}} + T_{\\text{proc}}; \\qquad \\text{BW}_{\\text{saved}} = 1 - \\frac{R_{\\text{filtered}}}{R_{\\text{raw}}}',
      variables: 'd_prop = propagation delay (~1-5ms Fog vs 50-150ms WAN Cloud); R_raw = raw sensor sampling rate',
      complexityOrBound: 'Edge/Fog aggregation routinely cuts core WAN traffic by 80%–98%',
      examContext: 'Use to justify why safety-critical IIoT actuation cannot rely on distant Cloud round-trips.',
    },
    {
      id: 'f-ensemble-err',
      category: 'CS 508 (Big Data Ensembles)',
      name: 'Binomial Majority-Vote Ensemble Error Rate & Bagging Variance',
      latex: 'P_{\\text{ens}} = \\sum_{k = \\lceil M/2 \\rceil}^{M} \\binom{M}{k} \\epsilon^k (1 - \\epsilon)^{M - k}; \\qquad \\text{Var}(\\bar{f}) = \\rho \\sigma^2 + \\frac{1 - \\rho}{M}\\sigma^2',
      variables: 'M independent base classifiers each with error epsilon < 0.5; rho = pairwise tree correlation',
      complexityOrBound: 'As M -> inf with independent errors (rho=0), Var -> 0 and P_ens -> 0 exponentially!',
      examContext: 'Explains why Random Forest subsamples sqrt(d) features at each split: to reduce correlation rho!',
    },
    {
      id: 'f-adaboost',
      category: 'CS 508 (Big Data Ensembles)',
      name: 'AdaBoost Classifier Weight & Sample Re-Weighting',
      latex: '\\alpha_t = \\frac{1}{2} \\ln\\!\\left(\\frac{1 - \\epsilon_t}{\\epsilon_t}\\right), \\qquad w_i^{(t+1)} = \\frac{w_i^{(t)} \\exp(-\\alpha_t y_i h_t(x_i))}{Z_t}',
      variables: 'epsilon_t = weighted error of weak learner t; y_i, h_t(x_i) in {-1, +1}; Z_t = normalization constant',
      complexityOrBound: 'Misclassified points (-y_i * h_t = +1) get multiplied by exp(+alpha_t) > 1!',
      examContext: 'Frequently tested numerical: for epsilon_t = 0.2, alpha_t = 0.5 * ln(4) = 0.693.',
    },
  ],
  modules: [
    {
      id: 'elec-mod1',
      indexNumber: '01',
      lectureSpan: 'IT 412 Section A (Part I)',
      referenceBooks: 'Holler et al. Ch. 1–5; Bahga & Madisetti Ch. 1–2',
      title: 'IT 412: IoT Fundamentals, Sensing/Actuation, WSN & M2M-to-IoT Conversion',
      overview: {
        formalDefinition:
          'The **Internet of Things (IoT)** is a dynamic global network infrastructure with self-configuring capabilities based on standard and interoperable IP communication protocols where physical and virtual **"Things"** possess unique identities, physical attributes, virtual personalities, and intelligent interfaces seamlessly integrated into the information network (ITU-T Y.2060).',
        highLevelIntuition:
          'Traditional **Machine-to-Machine (M2M)** systems built isolated vertical hardware silos (e.g., proprietary Modbus/ZigBee factory telemetry tied to one vendor’s SCADA box). **IoT** transforms M2M into a **horizontal, IP-addressed (IPv6 / 6LoWPAN), cloud-native ecosystem** where physical sensors and actuators share data across applications via standardized gateways and Reference Models (IoT-A / CISCO 7-Layer).',
        coreTheoremLatex:
          '\\text{IoT Loop: } \\text{Physical Env} \\xrightarrow{\\text{Transducer/ADC}} \\text{WSN / 6LoWPAN} \\xrightarrow{\\text{Gateway}} \\text{Analytics} \\xrightarrow{\\text{DAC/PWM}} \\text{Actuator}',
      },
      keyTerms: [
        {
          term: 'Sensor vs. Actuator',
          definition: 'A Sensor converts a physical phenomenon (temperature, pressure, IR light) into an electrical analog/digital signal; an Actuator converts an electrical control signal (PWM/voltage) back into physical mechanical action (solenoid valve, servo motor, relay).',
        },
        {
          term: 'M2M (Machine-to-Machine)',
          definition: 'Direct point-to-point / area-network communication between remote machines (often via cellular/wired non-IP links) for closed-loop telemetry without open web/cloud interoperability.',
        },
        {
          term: 'IoT-A Reference Model',
          definition: 'European Lighthouse architectural reference decomposing IoT systems into Domain Model, Information Model, Functional Model, Communication Model, and Trust/Security/Privacy.',
        },
      ],
      diagramId: 'elec-iot-architecture',
      diagramCaption:
        'Left: CISCO 7-Layer IoT Reference Architecture. Right: Protocol-Translating IoT Gateway converting legacy non-IP M2M islands to IPv6/MQTT/CoAP.',
      technicalSections: [
        {
          id: 'elec-m1-s1',
          title: '1.1 Sensing, Actuation & Wireless Sensor Networks (WSN)',
          paragraphs: [
            '**Sensors** are classified as *Active vs. Passive* (requires external excitation power like radar/ultrasonic vs. self-generating thermocouple/piezoelectric), *Analog vs. Digital* (continuous voltage fed to ADC vs. discrete I2C/SPI bitstreams), and *Scalar vs. Vector/Multimedia*. Key sensor metrics: **Sensitivity, Resolution, Linearity, Hysteresis, Drift, and Quantization Error** ($\\pm \\frac{1}{2}\\text{ LSB}$ for an $N$-bit ADC with step $\\Delta = V_{\\text{ref}} / 2^N$). **Actuators** include *Electrical* (relays, thyristors), *Electromechanical* (DC/Stepper/Servo motors), *Hydraulic*, and *Pneumatic* drivers.',
            '**Wireless Sensor Networks (WSN):** Comprise hundreds of battery-powered, resource-constrained **motes** (microcontroller + IEEE 802.15.4 transceiver + sensors) routing multi-hop packets to a **Sink / Base Station**. WSNs form the *perception fabric* of IoT, whereas IoT extends WSNs with global IPv6 addressability, web APIs, and heterogeneous actuator cloud integration.',
          ],
        },
        {
          id: 'elec-m1-s2',
          title: '1.2 M2M vs. IoT & Architecture for Converting M2M to IoT',
          paragraphs: [
            '**ETSI M2M High-Level Architecture** comprises three domains: **(1) M2M Device & Area Network Domain** (non-IP ZigBee, Bluetooth, M-Bus, Modbus nodes + **M2M Gateway** providing proxy translation), **(2) Network Domain** (3G/LTE/Fiber core), and **(3) Application Domain** (M2M Service Capabilities + vertical client apps).',
            '**Conversion of M2M to IoT** requires four architectural upgrades: **(1) Smart IoT Gateways** performing protocol translation (`ZigBee/Modbus` $\\leftrightarrow$ `6LoWPAN/IPv6 + CoAP/MQTT`); **(2) Virtualization of Physical Devices** into Digital Twins / RESTful Virtual Entities (`GET /sensors/temp-04`); **(3) Transition from Closed Vertical Silos to Horizontal PaaS Middleware**; and **(4) Data-Centric Schema Enrichment** (attaching JSON-LD / SenML semantic metadata for cross-domain analytics).',
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'N-Bit Sensor ADC Quantization & M2M-to-SenML IoT Gateway Formatter',
        complexity: 'Time: O(1) per sample | Space: O(1)',
        code: `import json

def m2m_register_to_iot_senml(raw_adc: int, adc_bits: int, v_ref: float, device_eui: str) -> str:
    """Translates raw Modbus 12-bit ADC register from M2M node into RFC 8428 SenML JSON."""
    step_v = v_ref / ((1 << adc_bits) - 1)
    voltage = raw_adc * step_v
    # TMP36 linear calibration: Temp (C) = (V_out - 0.5V) * 100
    temp_c = round((voltage - 0.5) * 100.0, 2)
    payload = [{"bn": f"urn:dev:mac:{device_eui}:", "n": "temperature", "u": "Cel", "v": temp_c}]
    return json.dumps(payload)`,
        traceTitle: 'Gateway Conversion Trace: 12-Bit ADC (V_ref = 3.3V, Raw = 930)',
        traceSteps: [
          { step: '1. M2M Raw Frame', state: 'Modbus Reg 0x0001 = 930 (12-bit integer)', explanation: 'Opaque vendor-specific integer — useless outside proprietary SCADA.' },
          { step: '2. ADC Voltage Recovery', state: 'V = 930 * (3.3 / 4095) = 0.7495 V', explanation: 'Max quantization error = +/- 0.40 mV.' },
          { step: '3. IoT SenML Output', state: '[{"bn":"urn:dev:mac:...","n":"temperature","u":"Cel","v":24.95}]', explanation: 'Self-describing standard IETF RFC 8428 payload ready for MQTT/CoAP!' },
        ],
        edgeCases: [
          'Always apply Nyquist sampling f_s >= 2 * f_max on analog IoT sensors to prevent high-frequency mechanical/AC noise from aliasing into baseband readings.',
        ],
      },
      takeawayMatrix: {
        caption: 'High-Yield Exam Comparison: Machine-to-Machine (M2M) vs. Internet of Things (IoT)',
        headers: ['Dimension', 'Machine-to-Machine (M2M)', 'Internet of Things (IoT)'],
        rows: [
          ['Communication Protocols', 'Proprietary / Non-IP (Modbus, ZigBee, GSM SMS)', 'Standard IP-based (IPv6, 6LoWPAN, MQTT, CoAP, HTTP)'],
          ['Primary Focus', 'Hardware-centric point-to-point device pairing', 'Software, Data & Cloud-Service-centric horizontal fabric'],
          ['Integration Scope', 'Isolated vertical single-purpose silos', 'Cross-domain horizontal multi-application sharing'],
          ['Scalability & Naming', 'Hardcoded hardware IDs / SIM MSISDNs', 'Global IPv6 addressing (2^128) + DNS-SD / URI discovery'],
          ['Analytics Tier', 'On-premise SCADA thresholds', 'Elastic Edge + Fog + Big Data Cloud ML pipelines'],
        ],
      },
      examSpotlight: {
        weightage: '10–15 Marks in IT 412 (M2M vs IoT + Reference Model + Gateway Conversion)',
        highYieldDefinitions: [
          {
            concept: 'Six Capabilities of IoT Systems',
            preciseStatement: 'Dynamic & Self-Adapting, Self-Configuring (OTA updates & plug-and-play discovery), Interoperable Communication Protocols, Unique Identity, Integrated into Information Network, and Context-Awareness.',
          },
        ],
        commonTraps: [
          {
            trap: 'Treating WSN and IoT as identical.',
            correction: 'Every WSN is a subset/enabler of IoT, NOT the reverse: a standalone forest-fire WSN without IP/Internet gateway connectivity is not IoT, and an IP-connected smart refrigerator is a single IoT device without a multi-hop WSN!',
          },
        ],
        pastPaperPatterns: [
          'Differentiate between M2M and IoT across communication protocols, hardware vs software emphasis, and service integration. Explain the architecture for converting M2M to IoT. (10 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'elec-q1',
          questionType: 'Numerical / Derivation',
          marks: 5,
          question:
            'An Arduino/STM32 IoT node uses a $10$-bit ADC with reference voltage $V_{\\text{ref}} = 5.0\\text{ V}$. What is the voltage resolution (step size) per LSB, and what digital integer is produced for an analog sensor output of $2.50\\text{ V}$?',
          options: [
            '~4.888 mV/step; Digital reading ≈ 512',
            '~1.221 mV/step; Digital reading ≈ 2048',
            '~19.61 mV/step; Digital reading ≈ 128',
            '~0.500 V/step; Digital reading = 5',
          ],
          correctOptionIndex: 0,
          hint: '10-bit ADC has 2^10 = 1024 levels (0..1023).',
          solutionSteps: [
            'Step 1: Number of discrete quantization intervals = 2^10 - 1 = 1023 (or 1024 levels).',
            'Step 2: Step resolution ΔV = 5.0 V / 1023 = 0.0048876 V ≈ 4.888 mV.',
            'Step 3: Digital output D = round(2.50 / 5.00 × 1023) = round(511.5) = 512.',
          ],
          finalConclusion: 'Resolution ≈ 4.89 mV/LSB; Digital ADC code = 512.',
        },
      ],
    },
    {
      id: 'elec-mod2',
      indexNumber: '02',
      lectureSpan: 'IT 412 Section A (Part II)',
      referenceBooks: 'Bahga & Madisetti Ch. 1, 4, 8; Holler et al.',
      title: 'IT 412: SDN for IoT, Cloud & Fog Computing, Sensor-Cloud & Domain Applications',
      overview: {
        formalDefinition:
          '**Software-Defined Networking (SDN)** decouples the network **Control Plane** (routing intelligence) from the **Data Plane** (packet forwarding switches) via open Southbound protocols (**OpenFlow**). **Fog Computing** extends Cloud compute/storage downward to local network edge gateways, while **Sensor-Cloud** virtualizes physical single-owner WSNs into multi-tenant on-demand **Sensors-as-a-Service (Se-aaS)**.',
        highLevelIntuition:
          'Imagine 50,000 heterogenous IoT devices flooding a smart city network: traditional distributed OSPF/BGP routers cannot dynamically isolate compromised IoT botnets or prioritize emergency ambulance telemetry! **SDN for IoT** gives a centralized controller programmable per-flow visibility. Simultaneously, **Fog Computing** processes urgent sub-$10\\text{ ms}$ control loops locally rather than hauling terabytes of raw vibration waveforms to a distant Cloud.',
        coreTheoremLatex:
          '\\text{SDN Split: } \\text{Apps} \\xleftrightarrow{\\text{Northbound REST}} \\text{SDN Controller} \\xleftrightarrow{\\text{Southbound OpenFlow}} \\text{IoT Flow Switches}',
      },
      keyTerms: [
        {
          term: 'SDN Control vs. Data Plane',
          definition: 'Control Plane is the logically centralized "brain" maintaining global topology and installing rules; Data Plane is the high-speed switch hardware executing Match-Action Flow Tables.',
        },
        {
          term: 'Fog Computing',
          definition: 'Decentralized computing tier coined by Cisco sitting between end IoT devices and the Cloud (on routers, base stations, edge micro-servers) offering millisecond latency, location awareness, and mobility.',
        },
        {
          term: 'Sensor-Cloud',
          definition: 'Cloud virtualization architecture decoupling physical WSN ownership from multi-user consumption by provisioning customizable Virtual Sensors and Virtual Sensor Groups on demand.',
        },
      ],
      diagramId: 'elec-iot-sdn-fog',
      diagramCaption:
        'Left: 3-Plane SDN-IoT Architecture (Northbound & Southbound OpenFlow APIs). Right: Cloud-Fog-Edge latency and bandwidth continuum.',
      technicalSections: [
        {
          id: 'elec-m2-s1',
          title: '2.1 SDN Architecture & Why SDN is Transformative for IoT (SDN-IoT)',
          paragraphs: [
            'Conventional routers bundle vendor-proprietary control software and forwarding ASICs inside every box. **SDN** separates **(1) Infrastructure/Data Plane** (simple packet switches with TCAM **Flow Tables** storing `Match Fields | Priority | Counters | Actions`), **(2) Control Plane** (centralized SDN NOS like ONOS, OpenDaylight, Ryu communicating downward via **Southbound OpenFlow / NETCONF**), and **(3) Application Plane** (QoS slicing, DDoS quarantine, load balancing communicating upward via **Northbound REST APIs**).',
            '**Four Specific Benefits of SDN for IoT (SDN-WISE / 6LoWPAN-SDN):** (1) Offloads heavy multi-hop routing tables from tiny $8\\text{ KB}$-RAM sensor motes; (2) Instant **automated quarantine** when an IoT camera starts a Mirai DDoS flood (`Action = DROP`); (3) **Dynamic QoS slicing** giving medical/industrial alarms zero-queue express paths over bulk firmware traffic; (4) Vendor-agnostic heterogeneous WSN + WiFi + 5G orchestration.',
          ],
        },
        {
          id: 'elec-m2-s2',
          title: '2.2 Cloud vs. Fog Computing, Sensor-Cloud & Domain-Specific IoT Applications',
          paragraphs: [
            '**Fog vs. Cloud Computing:** Cloud provides virtually infinite batch ML & archival storage, but suffers from **$50\\text{–}200\\text{ ms}$ WAN latency**, backhaul bandwidth saturation, and outage vulnerability if the internet link drops. **Fog Nodes** sit 1 hop from sensors, delivering **$1\\text{–}10\\text{ ms}$ real-time actuation**, local filtering/compression, and offline autonomy.',
            '**Sensor-Cloud Architecture:** Consists of three actors: *(1) Sensor Owners* who register physical WSN motes (earning rental revenue), *(2) Sensor-Cloud Infrastructure Provider* managing virtualization via **SenML / SensorML** templates, and *(3) End Users* provisioning **Virtual Sensors** (1-to-1, Many-to-1 spatial average, or Derived composite virtual sensors) with elastic pay-as-you-go billing!',
            '**Domain-Specific IoT Applications:** *(a) Home Automation* (Smart lighting LDR/PIR, HVAC Nest thermostats, smart locks); *(b) Industrial IoT / IIoT* (predictive bearing vibration FFT maintenance, automated guided vehicles, cold-chain logistics); *(c) Smart Surveillance & Cities* (edge video intrusion analytics, smart parking ultrasonic/magnetic nodes, structural bridge strain gauges).',
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'SDN OpenFlow Match-Action Evaluator & Fog Bandwidth Reduction Calculator',
        complexity: 'Time: O(F) flow rules | Space: O(F)',
        code: `def evaluate_iot_fog_savings(num_sensors: int, hz: float, bytes_per_sample: int, window_sec: float) -> dict:
    """Computes WAN bandwidth saved when Fog node sends 1 summary JSON (64B) per window."""
    raw_bps = num_sensors * hz * bytes_per_sample * 8
    fog_bps = (64 * 8) / window_sec  # Aggregated min/max/mean/anomaly summary
    reduction_pct = (1.0 - (fog_bps / raw_bps)) * 100.0
    return {"raw_wan_kbps": round(raw_bps / 1000, 2), "fog_wan_kbps": round(fog_bps / 1000, 3), "bandwidth_saved_pct": round(reduction_pct, 3)}`,
        traceTitle: 'Industrial Turbine Monitoring: 200 Vibration Sensors @ 100 Hz (8 Bytes/Sample)',
        traceSteps: [
          { step: 'Cloud-Only Raw Stream', state: '200 * 100 * 8 * 8 = 1,280.0 kbps continuous uplink', explanation: 'Saturates cellular/satellite industrial backhaul.' },
          { step: 'Fog Edge FFT Summary', state: '1 summary packet (64B) every 5s = 0.102 kbps', explanation: 'Local Fog detects spike in <3 ms AND saves 99.992% WAN bandwidth!' },
        ],
        edgeCases: [
          'If an OpenFlow switch encounters a packet matching ZERO flow entries ("Table-Miss"), it encapsulates the header in an OpenFlow PACKET_IN message up to the SDN Controller.',
        ],
      },
      takeawayMatrix: {
        caption: 'Architectural Comparison: Cloud Computing vs. Fog Computing vs. Sensor-Cloud',
        headers: ['Attribute', 'Cloud Computing', 'Fog Computing', 'Sensor-Cloud'],
        rows: [
          ['Physical Location', 'Centralized hyperscale data centers', 'Distributed local gateways / routers', 'Cloud middleware virtualizing WSNs'],
          ['End-to-End Latency', 'High (50–200 ms WAN)', 'Very Low (1–15 ms LAN)', 'Moderate (Cached/streamed virtual feeds)'],
          ['Core Problem Solved', 'Petabyte storage & heavy model training', 'Real-time actuation & WAN offload', 'Multi-tenancy over single-owner physical WSNs'],
          ['Network Dependency', 'Fails if WAN internet link drops', 'Operates autonomously during WAN cut', 'Requires gateway-to-cloud uplink'],
        ],
      },
      examSpotlight: {
        weightage: '10–12 Marks in IT 412 (SDN for IoT + Fog vs Cloud + Sensor-Cloud Virtualization)',
        highYieldDefinitions: [
          {
            concept: 'Northbound vs. Southbound SDN Interfaces',
            preciseStatement: 'Southbound APIs (e.g., OpenFlow, OVSDB, NETCONF) connect the SDN Controller downward to physical/virtual switches; Northbound APIs (REST/Java) connect network applications upward to the SDN Controller.',
          },
        ],
        commonTraps: [
          {
            trap: 'Saying Fog Computing replaces Cloud Computing.',
            correction: 'Fog COMPLEMENTS Cloud — Fog handles millisecond transient control & filtering at the edge, then forwards distilled summaries to the Cloud for long-horizon historical analytics!',
          },
        ],
        pastPaperPatterns: [
          'Explain Software-Defined Networking (SDN) architecture and how SDN solves scalability and security challenges in IoT. Compare Cloud Computing, Fog Computing, and Sensor-Cloud. (12 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'elec-q2',
          questionType: 'Conceptual / Analytical',
          marks: 5,
          question:
            'In a **Sensor-Cloud** platform, three environmental agencies simultaneously request temperature feeds over Tonk district at $1\\text{ min}$, $5\\text{ min}$, and $15\\text{ min}$ intervals using a single physical WSN deployed by a private provider. Which mechanism enables this without physical hardware conflicts?',
          options: [
            'Virtual Sensor abstraction & multi-tenant middleware multiplexing in Sensor-Cloud',
            'Installing three separate physical microcontrollers on each pole',
            'Beam Penetration CRT multiplexing',
            'Electronic Codebook (ECB) block replication',
          ],
          correctOptionIndex: 0,
          hint: 'Sensor-Cloud decouples physical WSN motes from logical user instances.',
          solutionSteps: [
            'Step 1: Physical WSN samples at the finest common granularity (1 min) and pushes readings to the Sensor-Cloud virtualization layer.',
            'Step 2: Middleware instantiates three isolated Virtual Sensors (VS_1, VS_2, VS_3) with independent sub-sampling schedules, access controls, and billing meters.',
          ],
          finalConclusion: 'Sensor-Cloud Virtual Sensor abstraction provides isolated multi-tenant Se-aaS over shared physical sensors.',
        },
      ],
    },
    {
      id: 'elec-mod3',
      indexNumber: '03',
      lectureSpan: 'CS 508 Section A',
      referenceBooks: 'Loshin Ch. 1–4; White Ch. 1; Miner & Shook',
      title: 'CS 508: Big Data Analytics, 4Vs, Reporting vs. Analysis, Statistical Significance & Ensembles',
      overview: {
        formalDefinition:
          '**Big Data** refers to high-volume, high-velocity, and high-variety information assets that exceed the storage, memory, or processing capacity of single-node vertical RDBMS architectures, demanding cost-effective, horizontally distributed analytical processing (**Hadoop/Spark + Ensemble ML**) for enhanced insight and decision-making.',
        highLevelIntuition:
          'CS 508 Section A bridges foundational data architecture (**Structured, Semi-Structured, Quasi-Structured, Unstructured** + the **4Vs**) with rigorous analytical methodology: distinguishing backward-looking **Reporting** from root-cause **Analysis**, navigating the trap between **Statistical Significance ($p$-value)** and **Practical Business Importance (Effect Size)** on million-row datasets, and combining weak/high-variance models via **Ensemble Methods (Bagging, Random Forest, Boosting)**.',
        coreTheoremLatex:
          '\\text{Large-}N \\text{ Trap: } SE = \\frac{\\sigma}{\\sqrt{N}} \\implies Z = \\frac{\\Delta \\mu}{\\sigma / \\sqrt{N}} \\to \\infty \\text{ as } N \\to 10^8 \\text{ even for trivial } \\Delta \\mu!',
      },
      keyTerms: [
        {
          term: 'Quasi-Structured vs. Semi-Structured Data',
          definition: 'Semi-structured data contains explicit self-describing tags/hierarchy (JSON, XML); Quasi-structured data is textual clickstream/log data with erratic formatting requiring regex/heuristics to parse.',
        },
        {
          term: 'Reporting vs. Analysis',
          definition: 'Reporting organizes data into informational summaries monitoring HOW a business is performing ("What happened?"); Analysis explores data interactively to explain WHY it happened and recommend action!',
        },
        {
          term: 'Statistical Significance vs. Business Importance',
          definition: 'At Big Data scale (N = 10^7), tiny 0.01% differences produce p < 0.0001 (statistically significant), yet may have zero financial ROI (no business importance)! Always check Effect Size (Cohen’s d / ROI).',
        },
        {
          term: 'Bagging vs. Boosting',
          definition: 'Bagging trains M deep models in parallel on bootstrap samples to cut VARIANCE; Boosting trains M shallow weak learners sequentially on re-weighted errors to cut BIAS.',
        },
      ],
      diagramId: 'elec-bda-ensemble',
      diagramCaption:
        'Comparison of Parallel Bootstrap Aggregating (Bagging / Random Forest) versus Sequential Error-Reweighted Boosting (AdaBoost / GBM).',
      technicalSections: [
        {
          id: 'elec-m3-s1',
          title: '3.1 Structuring Big Data (4 Types), The 4Vs & Reporting vs. Analysis',
          paragraphs: [
            '**Four Structural Tiers of Big Data:** **(1) Structured Data** ($\approx 10\text{–}15\\%$ of enterprise volume): conforms strictly to fixed RDBMS relational schemas (`CREATE TABLE`, OLTP rows/columns). **(2) Semi-Structured Data:** lacks rigid relational tables but embeds self-describing hierarchical markers (`XML`, `JSON`, `Avro`, email headers). **(3) Quasi-Structured Data:** textual records with inconsistent formats requiring specialized parsing (HTTP server clickstreams, scraped URLs). **(4) Unstructured Data** ($\approx 80\\%$ of enterprise volume): raw PDFs, medical X-rays, CCTV video, call-center audio, free-form social posts.',
            '**The 4Vs (IBM / Laney):** **Volume** (terabytes to zettabytes), **Velocity** (real-time streaming bounded-latency ingestion), **Variety** (multi-modal schemas), and **Veracity** (noise, fake accounts, sensor drift, trustworthiness — often joined by a 5th V: **Value**).',
            '**Comparing Reporting and Analysis:** *Reporting* translates raw data into static/scheduled KPIs, alerts, and scorecards (**pushes** standardized metrics to users; raises questions). *Analysis* transforms metrics into actionable insights (**pulls** ad-hoc hypotheses to answer root-cause questions and prescribe business interventions).',
          ],
        },
        {
          id: 'elec-m3-s2',
          title: '3.2 Framing the Analytic Problem, Types of Analytics & Statistical vs. Business Significance',
          paragraphs: [
            '**The 6-Stage Analytic Process Lifecycle:** (1) *Business Problem Framing* (translate vague executive pain into quantifiable target + constraints), (2) *Analytics Problem Framing* (formulate target variable $Y$, loss metric, horizon), (3) *Data Identification & Conditioning*, (4) *Methodology Selection & Model Building*, (5) *Validation & Statistical Inference*, (6) *Deployment & Lifecycle Monitoring*. **Four Maturity Tiers:** *Descriptive* ("What happened?"), *Diagnostic* ("Why?"), *Predictive* ("What will happen?"), *Prescriptive* ("What optimal decision should we take?").',
            '**The Big Data $p$-Value Trap (Statistical Significance vs. Business Importance):** Standard error shrinks as $\\sigma / \\sqrt{N}$. When $N = 50,000,000$ web sessions, a button color increasing conversion from $2.000\\%$ to $2.004\\%$ yields $Z > 6$ ($p < 10^{-9}$, **overwhelmingly statistically significant**), yet generates $\$400$/year while costing $\$50,000$ to engineer (**zero business importance**)! Always evaluate confidence intervals, **Effect Size**, and net expected monetary value.',
          ],
        },
        {
          id: 'elec-m3-s3',
          title: '3.3 Ensemble Methods (Bagging, Random Forest, Boosting, Stacking) & Visualization',
          paragraphs: [
            '**Bias-Variance Decomposition:** $\\mathbb{E}[(y - \\hat{f}(x))^2] = \\text{Bias}^2 + \\text{Variance} + \\sigma_{\\text{noise}}^2$. **Ensemble Methods** combine $M$ base learners to strictly outperform any single learner:',
          ],
          bulletPoints: [
            {
              lead: 'Bagging (Bootstrap Aggregating — Breiman, 1996)',
              detail: 'Draws M bootstrap datasets D_1..D_M of size N WITH replacement (each contains ~1 - (1 - 1/N)^N ≈ 63.2% unique records; remaining 36.8% form Out-of-Bag validation set!). Trains M models in parallel -> cuts Variance!',
            },
            {
              lead: 'Random Forest',
              detail: 'Improves Bagging of trees by selecting a random subset of m = floor(sqrt(d)) features at EVERY node split, decorrelating trees (lowering rho) so averaging reduces variance dramatically.',
            },
            {
              lead: 'Boosting (AdaBoost & Gradient Boosting)',
              detail: 'Trains weak learners (stumps) SEQUENTIALLY; each learner focuses heavily on tuples misclassified (or residuals left) by previous learners -> cuts Bias!',
            },
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Ensemble Majority-Vote Gain & AdaBoost Alpha / Re-Weighting Calculator',
        complexity: 'Time: O(M) | Space: O(1)',
        code: `import math

def ensemble_majority_error(M: int, base_err: float) -> float:
    """Computes exact binomial failure rate of M independent classifiers via majority vote."""
    half = (M // 2) + 1
    prob = 0.0
    for k in range(half, M + 1):
        prob += math.comb(M, k) * (base_err ** k) * ((1.0 - base_err) ** (M - k))
    return round(prob, 5)

def adaboost_round_say(weighted_err: float) -> dict[str, float]:
    alpha = 0.5 * math.log((1.0 - weighted_err) / weighted_err)
    return {
        "alpha_say": round(alpha, 4),
        "misclassified_multiplier": round(math.exp(alpha), 4),
        "correct_multiplier": round(math.exp(-alpha), 4),
    }`,
        traceTitle: '25-Classifier Ensemble vs Single Classifier (Base Error = 0.35)',
        traceSteps: [
          { step: 'Single Base Learner (M=1)', state: 'Error rate = 35.0%', explanation: 'Mediocre individual classifier (only slightly better than 50% coin flip).' },
          { step: '5-Model Ensemble (M=5)', state: 'Majority Error (k>=3) = 23.52%', explanation: 'Noticeable drop via binomial cancellation.' },
          { step: '25-Model Ensemble (M=25)', state: 'Majority Error (k>=13) = 6.04%!', explanation: 'Error plunges from 35% down to 6.04% using independent learners!' },
        ],
        edgeCases: [
          'Warning: If individual base learner error epsilon > 0.50 (worse than random guessing), majority voting makes the ensemble WORSE (approaching 100% error as M grows)!',
        ],
      },
      takeawayMatrix: {
        caption: 'Comparison of Reporting vs. Analysis and Bagging vs. Boosting',
        headers: ['Comparison Pair', 'Left Paradigm', 'Right Paradigm', 'Core Takeaway'],
        rows: [
          ['Reporting vs. Analysis', 'Reporting: Static KPIs ("What?")', 'Analysis: Root-cause & Action ("Why/How?")', 'Reports raise alerts; Analysis drives decisions'],
          ['Stat Sig vs. Business Imp', 'p-value < 0.05 (Non-zero effect)', 'Effect Size & Net Dollar ROI', 'Big N makes trivial noise statistically significant!'],
          ['Bagging vs. Boosting', 'Parallel Bootstrap (Cuts Variance)', 'Sequential Re-weight (Cuts Bias)', 'Bagging resists noise; AdaBoost overfits noisy labels'],
        ],
      },
      examSpotlight: {
        weightage: '15–20 Marks in CS 508 (4Vs, Structuring Big Data, Reporting vs Analysis, Ensemble Numerical)',
        highYieldDefinitions: [
          {
            concept: '63.2% Bootstrap Rule (Out-of-Bag Estimate)',
            preciseStatement: 'When sampling N items with replacement N times, probability an item is NEVER picked is (1 - 1/N)^N -> e^(-1) ≈ 0.368 (36.8% Out-of-Bag test set), so ~63.2% distinct records appear in each bootstrap bag.',
          },
        ],
        commonTraps: [
          {
            trap: 'Claiming Boosting can be trivially parallelized across rounds.',
            correction: 'Because Round t+1 weights/residuals depend directly on Round t predictions, Boosting rounds are inherently SEQUENTIAL (parallelism in XGBoost happens INSIDE feature-split finding of a single tree, NOT across boosting rounds!).',
          },
        ],
        pastPaperPatterns: [
          'Explain the 4Vs of Big Data and differentiate Structured, Semi-Structured, Quasi-Structured, and Unstructured data with examples. Compare Reporting and Analysis. (10 Marks)',
          'Distinguish between Statistical Significance and Business Importance in Big Data Analytics. Explain Bagging and Boosting ensemble methods, and compute ensemble error for 5 independent classifiers each having error 0.3. (10 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'elec-q3',
          questionType: 'Numerical / Derivation',
          marks: 6,
          question:
            'An ensemble combines $M = 3$ **independent** binary classifiers by majority vote. Each individual classifier has an error probability $\\epsilon = 0.20$. Calculate the exact error probability of the majority-vote ensemble.',
          options: ['0.104 (10.4%)', '0.200 (20.0%)', '0.008 (0.8%)', '0.096 (9.6%)'],
          correctOptionIndex: 0,
          hint: 'Majority of 3 fails iff AT LEAST 2 classifiers fail (k = 2 or k = 3).',
          solutionSteps: [
            'Step 1: Ensemble makes an error iff k = 2 classifiers err OR all k = 3 classifiers err.',
            'Step 2: P(k = 2) = C(3, 2) * (0.20)^2 * (0.80)^1 = 3 * 0.04 * 0.80 = 0.096.',
            'Step 3: P(k = 3) = C(3, 3) * (0.20)^3 * (0.80)^0 = 1 * 0.008 * 1 = 0.008.',
            'Step 4: Total Ensemble Error P_ens = 0.096 + 0.008 = 0.104 (10.4%, nearly halving the 20% single-model error!).',
          ],
          finalConclusion: 'Ensemble error = 0.104 (10.4%).',
        },
      ],
    },
  ],
};
