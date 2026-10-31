import { SubjectCourse } from '../types/study';

export const cs411Course: SubjectCourse = {
  id: 'cs411',
  code: 'CS 411',
  shortTitle: 'Computer Graphics',
  fullTitle: 'Computer Graphics — Unit 1 (Section A)',
  instructor: 'Dr. Aditi Paul, Assistant Professor, IT VII Semester',
  credits: 4,
  maxMarks: '100 (CA: 40 + ESA: 60)',
  examSchedule: {
    assignment1: '27 August 2026 (10 Marks)',
    periodicalTest1: '9–12 September 2026 (Lectures 01–18, 10 Marks)',
    semesterExam: '2–19 December 2026 (Lectures 01–50, 60 Marks)',
  },
  syllabusVerbatim:
    'Components of Graphics Systems: Display devices - Refresh CRTs, Random scan and Raster scan monitors, color CRT monitors, DVST, Plasma-panel displays, Hard copy devices-printers, plotters. Display processors-Random scan systems, Raster scan systems. Interactive Input devices: keyboards, touch panels, light pens, tablets, joysticks, trackball, mouse. Logical classification - Locator, Stroke, String, Valuator, Choice, Pick devices. Interactive picture construction techniques - positioning methods, constraints, grids, gravity field, rubber band methods, sketching, dragging.',
  courseOutcomes: [
    'CO 1: Apply knowledge of mathematics, science, and engineering to implement basic transformation and scan conversion.',
    'CO 2: Apply the knowledge of coordinate system necessary to understand the impact of engineering solutions.',
    'CO 3: Apply aesthetic judgments and critical thinking skills to art and graphics related issues.',
    'CO 4: Recognize and evaluate critical and aesthetic issues within computer graphics and mixed media.',
  ],
  recommendedBooks: [
    'R1. Hearn, Donald & Baker, M. Pauline. Computer Graphics — C Version, 2nd Ed. Pearson Education.',
    'R2. Foley, van Dam, Feiner & Hughes. Computer Graphics: Principles and Practice. Addison-Wesley.',
    'R3. Harrington, Steven. Computer Graphics: A Programming Approach. McGraw-Hill.',
    'R4. Rogers, David F. Procedural Elements for Computer Graphics, 2nd Ed. McGraw-Hill.',
  ],
  handouts: [
    {
      id: 'cs411-pdf',
      title: 'CS 411 Official Course Handout (Pages 1–3)',
      subtitle: 'Banasthali Vidyapith · B.Tech. (IT) VII Semester · Dr. Aditi Paul',
      type: 'pdf',
      src: '/assets/aistudio/B.Tech_CS_VIII_Sem_CG_CS411_handout_2023-24__1___1___4__089e5275.pdf',
      notes: 'Contains CO1–CO4, Section A/B/C Syllabus, Assessment Dates, and Detailed Lecture Plan (Lectures 01–12 cover Section A).',
    },
  ],
  formulas: [
    {
      id: 'f-fb-size',
      category: 'Frame Buffer & CLUT',
      name: 'Frame Buffer Memory Capacity',
      latex: '\\text{Size}_{\\text{bits}} = W \\times H \\times N, \\qquad \\text{Size}_{\\text{bytes}} = \\frac{W \\times H \\times N}{8}',
      variables: 'W = horizontal pixels, H = vertical scanlines, N = bit-planes (bits per pixel)',
      complexityOrBound: '1024 x 1024 x 24-bit True Color = 3,145,728 Bytes = 3 MB exact',
      examContext: 'Divide by 1024 for KB and 1024^2 (= 1,048,576) for MB in Computer Graphics memory problems!',
    },
    {
      id: 'f-clut',
      category: 'Frame Buffer & CLUT',
      name: 'Color Lookup Table (CLUT) Palette & Size',
      latex: '\\text{Simultaneous Colors} = \\min(W \\cdot H, 2^n), \\quad \\text{Total Palette} = 2^w, \\quad \\text{CLUT Size} = 2^n \\times w \\text{ bits}',
      variables: 'n = bit-planes in Frame Buffer; w = width of each CLUT entry (e.g., w = 24 bits for 8R+8G+8B)',
      complexityOrBound: 'n = 8, w = 24 => CLUT uses only 256 * 3 = 768 Bytes!',
      examContext: 'Distinguish carefully between "total available palette colors" (2^w) and "simultaneously displayable colors" (2^n).',
    },
    {
      id: 'f-scan-timing',
      category: 'Raster CRT Timing',
      name: 'Pixel Access Time & Active Scanline Rate',
      latex: 'T_{\\text{frame}} = \\frac{1}{f}, \\quad T_{\\text{active}} = T_{\\text{frame}} - T_{\\text{v-retrace}} - H \\cdot T_{\\text{h-retrace}}, \\quad t_{\\text{pixel}} = \\frac{T_{\\text{active}}}{W \\times H}',
      variables: 'f = refresh rate (frames/sec); T_v-retrace = vertical retrace time; T_h-retrace = horizontal retrace per line',
      complexityOrBound: 'If retrace ignored: t_pixel = 1 / (f * W * H); Horiz Scan Rate = f * H lines/sec',
      examContext: 'High-frequency Hearn & Baker numerical! Check whether retrace times are given or neglected.',
    },
    {
      id: 'f-aspect',
      category: 'CRT Geometry',
      name: 'Aspect Ratio & Resolution Density',
      latex: '\\text{Aspect Ratio} = \\frac{W_{\\text{points}}}{H_{\\text{points}}} \\text{ (with equal spacing)}, \\qquad \\text{Transfer Time} = \\frac{\\text{Size}_{\\text{bits}}}{\\text{Bandwidth}_{\\text{bps}}}',
      variables: 'Standard CRT = 4:3, Widescreen = 16:9',
      complexityOrBound: 'Square pixels require W_pixels / H_pixels == Physical_Width / Physical_Height',
      examContext: 'Hearn & Baker defines Aspect Ratio as vertical-to-horizontal OR horizontal-to-vertical; state your ratio explicitly (e.g., W:H = 4:3).',
    },
  ],
  modules: [
    {
      id: 'cs411-mod1',
      indexNumber: '01',
      lectureSpan: 'Lectures 01–03',
      referenceBooks: 'R1 (Hearn & Baker Ch. 1–2), R2 (Foley et al.)',
      title: 'Introduction to Computer Graphics, Conceptual Framework & Refresh CRT Physics',
      overview: {
        formalDefinition:
          '**Computer Graphics (CG)** encompasses the computational creation, storage, geometric manipulation, and visual rendering of models and images of objects from engineering, scientific, and artistic domains. In **Interactive Computer Graphics**, the user exercises real-time two-way control over image content, structure, and appearance via feedback input devices.',
        highLevelIntuition:
          'First distinguish **Computer Graphics** (synthesizing images from geometric/mathematical descriptions $\\text{Model} \\to \\text{Image}$) from **Image Processing** (enhancing or extracting features from existing images $\\text{Image} \\to \\text{Image/Features}$). Every classical display pipeline begins with the **Refresh Cathode Ray Tube (CRT)**, where thermionically emitted electrons are focused, accelerated, and deflected onto a phosphor-coated screen whose **persistence** dictates the minimum flicker-free refresh rate.',
        coreTheoremLatex:
          '\\text{Persistence } \\tau_{10\\%} = t(I_0 \\to 0.10\\, I_0); \\qquad \\text{CFF (Critical Fusion Freq)} \\propto \\frac{1}{\\tau_{10\\%}}',
      },
      keyTerms: [
        {
          term: 'Persistence',
          definition: 'Time taken for light emitted from the CRT phosphor screen to decay to one-tenth (10%) of its original peak fluorescence intensity after electron excitation stops.',
          examNote: 'Low-persistence phosphors (10–60 microseconds) are mandatory for animation to prevent motion-blur ghost trails!',
        },
        {
          term: 'Fluorescence vs. Phosphorescence',
          definition: 'Fluorescence is instantaneous light emitted DURING electron bombardment as excited electrons drop orbitals; Phosphorescence is sustained afterglow emitted AFTER beam removal.',
        },
        {
          term: 'Resolution',
          definition: 'Maximum number of distinguishable points (pixels) that can be displayed without overlap horizontally and vertically on a CRT (or points per cm/inch).',
        },
        {
          term: 'Critical Fusion Frequency (CFF)',
          definition: 'Minimum refresh rate (typically 60 Hz) above which pulsing phosphor flashes fuse in human visual perception into a steady, flicker-free image.',
        },
      ],
      diagramId: 'cs411-crt-architecture',
      diagramCaption:
        'Internal cross-section of an Electrostatic Refresh CRT showing Heater/Cathode, Control Grid, Focusing/Accelerating Anodes, Deflection Plates, and Phosphor Screen.',
      technicalSections: [
        {
          id: 'cs411-m1-s1',
          title: '1.1 Interactive vs. Non-Interactive CG & Conceptual Framework',
          paragraphs: [
            '**Non-Interactive (Passive) CG:** The observer has zero real-time control over the generated image; rendering follows a static batch script (e.g., offline ray-traced film VFX frames, broadcast TV title crawls). **Interactive CG:** Continuous closed-loop human-computer interaction ($\\le 100\\text{ ms}$ latency) such as CAD workstations, flight simulators, and surgical planners.',
            '**Foley & van Dam Conceptual Framework of Interactive CG (4 Core Components):** **(1) Application Data Structure / Model** (geometric coordinates + non-geometric engineering attributes in world space); **(2) Application Program** (reads model, handles domain physics/logic, invokes graphics API calls like OpenGL/PHIGS); **(3) Graphics System** (intermediary hardware/software converting abstract API primitives into frame-buffer pixels and polling input events); and **(4) Input/Output Hardware**. **Eight Major Application Domains:** CAD/CADD, Presentation Graphics, Computer Art, Entertainment/Gaming, Education & Training Simulators, Visualization (Scientific vs. Business), Image Processing, and Graphical User Interfaces (WIMP).',
          ],
        },
        {
          id: 'cs411-m1-s2',
          title: '1.2 Refresh CRT Hardware Operation & Electrostatic vs. Magnetic Deflection',
          paragraphs: [
            'Inside the evacuated CRT glass funnel: **(1) Electron Gun (Heater + Cathode):** Current heats a coil filament inside a cylindrical metallic cathode, boiling off a cloud of negatively charged electrons via *thermionic emission*. **(2) Control Grid:** A metal cylinder capping the cathode held at a **variable negative voltage**: a **high negative voltage** repels electrons and dims/cutoffs the beam (0 intensity), whereas a **smaller negative voltage** allows more electrons through, increasing pixel **brightness**! **(3) Focusing System:** Forces the mutually repulsive electron beam to converge into a tiny sharp spot right at the screen face (electrostatic lens or magnetic coil). **(4) Accelerating Anode:** High positive voltage ($15\\text{–}25\\text{ kV}$) imparts high kinetic energy to electrons.',
            '**(5) Deflection Systems:** Two perpendicular pairs control $(x, y)$ position — *Vertical Deflection* adjusts $y$ and *Horizontal Deflection* adjusts $x$. **Commercial CRTs prefer Magnetic Deflection Coils** mounted externally on the neck yoke (allowing wider deflection angles $90^\\circ\\text{–}110^\\circ$ and shorter tubes), whereas oscilloscopes use internal **Electrostatic Deflection Plates** (faster high-frequency response). When fast electrons hit the phosphor coating, kinetic energy converts partly to heat and partly to **photon emission**.',
          ],
        },
      ],
      codeImplementation: {
        language: 'C++',
        title: 'CRT Geometry, Aspect Ratio, Dot Pitch & Bandwidth Estimator',
        complexity: 'Time: O(1) | Space: O(1)',
        code: `#include <iostream>
#include <cmath>
#include <numeric>

struct CRTMetrics {
    int gcd_w, gcd_h;
    double diagonal_pixels;
    double dot_pitch_mm;
    double bandwidth_mbps;
};

CRTMetrics analyze_crt_display(int width_px, int height_px, double diag_inches, int bpp, int refresh_hz) {
    int g = std::gcd(width_px, height_px);
    double diag_px = std::hypot(static_cast<double>(width_px), static_cast<double>(height_px));
    double diag_mm = diag_inches * 25.4;
    // Approximate pixel spacing (dot pitch) along diagonal
    double pitch_mm = diag_mm / diag_px;
    double bw_mbps = (static_cast<double>(width_px) * height_px * bpp * refresh_hz) / 1e6;
    return {width_px / g, height_px / g, diag_px, pitch_mm, bw_mbps};
}`,
        traceTitle: 'Hardware Spec Audit: 1280×1024 Monitor (19-inch Diagonal, 24-bit, 75 Hz)',
        traceSteps: [
          { step: '1. Exact Aspect Ratio', state: 'gcd(1280, 1024) = 256 -> 5 : 4', explanation: '1280/256 = 5, 1024/256 = 4 (SXGA is 5:4, NOT 4:3!).' },
          { step: '2. Diagonal Pixel Count', state: 'sqrt(1280^2 + 1024^2) = 1639.20 pixels', explanation: '19 inches * 25.4 mm/in = 482.6 mm physical diagonal.' },
          { step: '3. Dot Pitch', state: '482.6 / 1639.2 = 0.294 mm', explanation: 'High-sharpness workstation monitor (<0.30 mm).' },
          { step: '4. Uncompressed Bitrate', state: '1280 * 1024 * 24 * 75 = 2,359.30 Mbps', explanation: 'Requires ~295 MB/s video RAM read bandwidth!' },
        ],
        edgeCases: [
          'Spot intensity across a single CRT pixel follows a 2D Gaussian bell profile; two adjacent spots are resolvable when separated by at least the diameter where intensity drops to 60% of peak.',
        ],
      },
      takeawayMatrix: {
        caption: 'CRT Subsystem Functional Responsibility Matrix',
        headers: ['CRT Component', 'Electrical Polarity / Field', 'Primary Function Controlled', 'Failure / Misadjustment Symptom'],
        rows: [
          ['Heater + Cathode', 'Thermal + Negative Source', 'Thermionic emission of electron cloud', 'Completely dead/dark screen'],
          ['Control Grid', 'Variable Negative (-V)', 'Beam current -> Pixel Intensity (Brightness)', 'Washed-out black level or dim image'],
          ['Focusing Anode/Coil', 'Positive Electrostatic / Mag', 'Converges beam to pinpoint spot at phosphor', 'Blurry, defocused text & edges'],
          ['Accelerating Anode', 'High Positive (+15-25 kV)', 'Imparts kinetic velocity (screen luminance)', 'Shrunken raster ("blooming") & dim glow'],
          ['Deflection Coils/Plates', 'Transverse E or B Field', 'Steers beam to (x, y) screen coordinate', 'Collapsed single horizontal/vertical bright line'],
        ],
      },
      examSpotlight: {
        weightage: '6–10 Marks (CRT Labeled Diagram + Persistence/Resolution/Aspect Ratio Short Notes)',
        highYieldDefinitions: [
          {
            concept: 'Image Processing vs. Computer Graphics Inverse Relation',
            preciseStatement: 'Computer Graphics synthesizes 2D pictures from abstract 3D/2D mathematical models (Model -> Image), whereas Digital Image Processing / Computer Vision analyzes or reconstructs models/features starting from sampled pixel arrays (Image -> Model/Image).',
          },
        ],
        commonTraps: [
          {
            trap: 'Saying Accelerating Anode controls pixel brightness.',
            correction: 'Accelerating Anode applies a FIXED constant high positive voltage! Pixel-by-pixel brightness/intensity modulation is controlled strictly by varying the NEGATIVE voltage on the CONTROL GRID!',
          },
        ],
        pastPaperPatterns: [
          'Draw a neat labeled diagram of a Refresh Cathode Ray Tube (CRT) and explain the working of the Electron Gun, Control Grid, Focusing System, and Phosphor Persistence. (10 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'cs411-q1',
          questionType: 'Numerical / Derivation',
          marks: 5,
          question:
            'A CRT screen measures $12\\text{ inches}$ wide by $9\\text{ inches}$ high and can resolve $100$ points per inch in both directions. Calculate (a) its resolution, (b) its aspect ratio, and (c) the frame buffer size in bytes if $8$ bits per pixel are stored.',
          options: [
            '(a) 1200×900, (b) 4:3, (c) 1,080,000 Bytes (~1.03 MB)',
            '(a) 1200×900, (b) 16:9, (c) 8,640,000 Bytes',
            '(a) 1080×720, (b) 4:3, (c) 777,600 Bytes',
            '(a) 1200×900, (b) 3:4, (c) 135,000 Bytes',
          ],
          correctOptionIndex: 0,
          hint: 'Multiply inches by 100 pts/inch; 8 bits/pixel = 1 byte/pixel.',
          solutionSteps: [
            'Step 1: Horizontal points W = 12 in × 100 pts/in = 1200; Vertical points H = 9 in × 100 pts/in = 900 => Resolution = 1200 × 900.',
            'Step 2: Aspect Ratio W : H = 1200 : 900 = 4 : 3.',
            'Step 3: Frame buffer memory = 1200 × 900 × (8 bits / 8 bits/byte) = 1,080,000 Bytes (1,080,000 / 1,048,576 ≈ 1.03 MB).',
          ],
          finalConclusion: 'Resolution = 1200×900; Aspect Ratio = 4:3; Frame Buffer = 1,080,000 Bytes.',
        },
      ],
    },
    {
      id: 'cs411-mod2',
      indexNumber: '02',
      lectureSpan: 'Lectures 04–05',
      referenceBooks: 'R1 (Hearn & Baker Ch. 2)',
      title: 'Raster Scan vs. Random Scan Systems, Interlacing & Display Processor Architecture',
      overview: {
        formalDefinition:
          'In a **Raster Scan System**, the electron beam sweeps systematically across every row (scan line) from top to bottom, modulating intensity from a discrete **Refresh Frame Buffer**. In a **Random Scan (Vector / Calligraphic) System**, the beam is directed **only** to screen parts where picture lines are to be drawn, cycling sequentially through endpoint commands in a **Refresh Display File**.',
        highLevelIntuition:
          'Raster vs. Random Scan is the single most fundamental architectural trade-off in Unit 1 of Computer Graphics. Raster Scan treats the screen as a discrete $W \\times H$ matrix of pixels (enabling photorealistic shading and constant $60\\text{ Hz}$ refresh independent of scene complexity, at the cost of **staircase aliasing / jaggies** and **scan conversion** overhead), whereas Random Scan draws crisp continuous mathematical vectors between arbitrary endpoints $(x_1, y_1) \\to (x_2, y_2)$!',
        coreTheoremLatex:
          'f_{\\text{horiz}} = f_{\\text{frame}} \\times H_{\\text{lines}}; \\qquad \\text{Interlaced: } 30 \\text{ full frames/s} = 60 \\text{ half-fields/s (Odd + Even)}',
      },
      keyTerms: [
        {
          term: 'Horizontal & Vertical Retrace',
          definition: 'Horizontal Retrace returns the blanked (turned-off) electron beam from the right edge to the left start of the next scanline; Vertical Retrace returns it from bottom-right back to top-left corner.',
        },
        {
          term: 'Interlacing',
          definition: 'Bandwidth-halving CRT refresh technique scanning each frame in two passes: Field 1 sweeps all ODD-numbered lines (0, 2, 4...) in 1/60s, and Field 2 sweeps all EVEN-numbered lines (1, 3, 5...) in 1/60s.',
        },
        {
          term: 'Bitmap vs. Pixmap',
          definition: 'A 1-bit-per-pixel binary frame buffer is specifically called a Bitmap; a multi-bit-per-pixel grayscale/color frame buffer is called a Pixmap.',
        },
        {
          term: 'Scan Conversion (Rasterization)',
          definition: 'Display processor task digitizing continuous geometric primitives (lines, circles, polygons) into discrete integer (x, y) pixel intensity values inside the Frame Buffer.',
        },
      ],
      diagramId: 'cs411-raster-vs-random',
      diagramCaption:
        'Left: Interlaced Raster Scan odd/even fields and horizontal/vertical blanked retrace trajectories. Right: Dedicated Display Processor Raster Architecture.',
      technicalSections: [
        {
          id: 'cs411-m2-s1',
          title: '2.1 Raster Scan Operation, Retrace Blanking & Interlacing',
          paragraphs: [
            'During each horizontal sweep, the Video Controller reads pixel intensities from the **Frame Buffer** (`0/1` in a 1-bit **Bitmap**, $N$-bit values in a **Pixmap**). At the end of each scanline, the beam is **blanked** (control grid driven to cutoff so no diagonal return streak appears!) and snaps left (**Horizontal Retrace**, $\\approx 17\\%$ of line time). After the bottom scanline, the blanked beam returns to top-left (**Vertical Retrace**).',
            '**Why Interlacing Eliminates Flicker at 30 Hz Frame Rates:** On slower/older hardware (like NTSC $30\\text{ Hz}$ or PAL $25\\text{ Hz}$ TV), refreshing progressively at $30\\text{ Hz}$ allows top scanlines to decay noticeably before the beam returns, causing severe **screen flicker**. Interlacing paints **all odd lines in $1/60\\text{ s}$** and **all even lines in the next $1/60\\text{ s}$**. Because adjacent scanlines are tightly packed, the human eye integrates the **effective refresh rate as $60\\text{ fields/sec}$**, eliminating large-area flicker! *(Works well as long as adjacent scanlines display similar intensities; 1-pixel thin horizontal lines still shimmer at 30 Hz).*',
          ],
        },
        {
          id: 'cs411-m2-s2',
          title: '2.2 Random Scan (Vector) Systems & Display Processor Architectures',
          paragraphs: [
            '**Random Scan Operation:** An application program translates user geometry into a **Display File (Refresh Display List / Display Program)** stored in system/display memory containing opcodes for point plotting, vector line drawing, and character strokes. The Display Processor executes this display program $30\\text{–}60$ times per second. If a scene has very few lines, the processor **delays** the next cycle so it does not exceed $60\\text{ Hz}$ (which would overheat deflection coils or burn phosphor!); if a scene has **too many lines**, refresh time exceeds $1/30\\text{ s}$, causing visible **flicker**!',
            '**Raster Display Processor Architecture:** In a basic raster system, the frame buffer sits in main system RAM and the Video Controller contends with the CPU on the system bus. High-performance workstations add a dedicated **Display Processor (Graphics Controller / GPU)** with its own fast private **Display Processor Memory** and **Frame Buffer VRAM**, freeing the main CPU from **Scan Conversion**, polygon filling, character rasterization, and run-length decoding.',
          ],
          workedExample: {
            title: 'Worked Exam Numerical: Raster Pixel Access Time WITH Horizontal & Vertical Retrace',
            problemStatement:
              'Consider a non-interlaced raster monitor with resolution 1280 × 1024 (1024 scanlines, 1280 pixels/line), refresh rate 60 Hz, horizontal retrace time 5 microseconds (5 μs) per scanline, and vertical retrace time 500 microseconds (500 μs) per frame. Calculate (a) total frame time, (b) fraction of time spent in retrace, and (c) exact access time per pixel during active scanning.',
            steps: [
              '1. Total time per frame T_frame = 1 / 60 s = 16,666.67 μs (0.016667 s).',
              '2. Total retrace time per frame T_retrace = T_vert + (H * T_horiz) = 500 μs + (1024 * 5 μs) = 500 + 5,120 = 5,620 μs.',
              '3. Retrace fraction = 5,620 / 16,666.67 = 0.3372 (33.72% of every frame is spent in blanked retrace!).',
              '4. Active beam drawing time T_active = 16,666.67 - 5,620 = 11,046.67 μs = 11.0467 × 10^(-3) s.',
              '5. Total pixels per frame = 1280 × 1024 = 1,310,720 pixels.',
              '6. Active pixel access time t_pixel = 11,046.67 μs / 1,310,720 = 0.008428 μs = 8.43 nanoseconds (ns)! (Note: if retrace were ignored, 1 / (60*1280*1024) = 12.72 ns).',
            ],
            finalAnswer: 'T_frame = 16.67 ms; Retrace Fraction = 33.72%; Active Pixel Time = 8.43 ns.',
          },
        },
      ],
      codeImplementation: {
        language: 'C++',
        title: 'Video Controller Timing & Random-Scan Flicker Threshold Analyzer',
        complexity: 'Time: O(1) | Space: O(1)',
        code: `#include <iostream>

struct ScanTimings {
    double frame_ms;
    double retrace_pct;
    double active_pixel_ns;
    double horiz_scan_khz;
};

ScanTimings compute_raster_timing(int W, int H, double fps, double h_ret_us, double v_ret_us) {
    double frame_us = 1e6 / fps;
    double ret_us = v_ret_us + H * h_ret_us;
    double active_us = frame_us - ret_us;
    double pixel_ns = (active_us * 1000.0) / (static_cast<double>(W) * H);
    double h_khz = (fps * H) / 1000.0;
    return {frame_us / 1000.0, (ret_us / frame_us) * 100.0, pixel_ns, h_khz};
}`,
        traceTitle: 'Video Controller Register Update Cycle (Per Pixel & Per Scanline)',
        traceSteps: [
          { step: 'Frame Start', state: 'X_reg = 0, Y_reg = H - 1 (top scanline)', explanation: 'Vertical retrace completes; beam positioned at top-left.' },
          { step: 'Pixel Clock Tick', state: 'Read FrameBuffer[Y_reg][X_reg] -> DAC -> Control Grid; X_reg++', explanation: 'Must complete every 8.43 ns!' },
          { step: 'End of Line (X_reg > W-1)', state: 'Blank Beam -> Horizontal Retrace (5 us); X_reg = 0; Y_reg--', explanation: 'Repeats across all 1024 scanlines.' },
          { step: 'End of Frame (Y_reg < 0)', state: 'Blank Beam -> Vertical Retrace (500 us); Y_reg = H - 1', explanation: 'Starts next 60 Hz refresh cycle.' },
        ],
        edgeCases: [
          'If an exam problem does NOT specify horizontal/vertical retrace times, compute nominal pixel time t_pixel = 1 / (f * W * H) and explicitly state "Assuming negligible retrace overhead".',
        ],
      },
      takeawayMatrix: {
        caption: 'Exhaustive Exam Comparison: Raster Scan Displays vs. Random Scan (Vector) Displays',
        headers: ['Feature / Metric', 'Raster Scan System', 'Random Scan (Vector) System'],
        rows: [
          ['Beam Trajectory', 'Fixed top-to-bottom horizontal scanlines across entire screen', 'Directed ONLY along geometric endpoints of lines in scene'],
          ['Picture Definition Store', 'Frame Buffer (2D grid of discrete pixel intensities)', 'Refresh Display File (List of vector MOVE/LINE opcodes)'],
          ['Resolution & Line Smoothness', 'Lower; diagonal lines suffer staircase aliasing ("jaggies")', 'Very high; continuous analog beam deflection yields smooth lines'],
          ['Shaded / Realistic Scenes', 'Excellent (supports millions of per-pixel colors & textures)', 'Incapable of filled photorealistic shaded interiors'],
          ['Refresh Rate Dependency', 'Constant (60–120 Hz), independent of picture complexity', 'Depends on number of lines (flickers if line count too high!)'],
          ['Hardware Cost & Standard', 'Low cost (mass TV/LCD synergy); universal modern standard', 'Historically expensive specialized CAD/oscilloscope displays'],
        ],
      },
      examSpotlight: {
        weightage: '10–14 Marks (Guaranteed Question: Raster vs Random Scan + Architecture + Timing Numerical)',
        highYieldDefinitions: [
          {
            concept: 'Refresh Display File (Display List)',
            preciseStatement: 'Memory buffer in a Random Scan system storing high-level vector plotting instructions (opcodes + x,y coordinates + character codes) cycled through 30–60 times per second by the Display Processor.',
          },
        ],
        commonTraps: [
          {
            trap: 'Confusing Display File (Random Scan) with Frame Buffer (Raster Scan).',
            correction: 'Random Scan has NO pixel Frame Buffer — it uses a Display File of endpoint commands! Raster Scan uses a pixel Frame Buffer!',
          },
        ],
        pastPaperPatterns: [
          'Differentiate between Raster Scan and Random Scan display systems (minimum 6 points). Draw and explain the architecture of a Raster Graphics System with a Display Processor. (12 Marks)',
          'How much time is spent scanning across each row of pixels during screen refresh on a raster system with resolution 1280 × 1024 and refresh rate 60 frames/sec? Also find pixel access rate. (6 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'cs411-q2',
          questionType: 'Numerical / Derivation',
          marks: 5,
          question:
            'A raster system has a resolution of $640 \\times 480$ and refreshes at $60\\text{ frames/sec}$ (ignoring retrace overhead). How many pixels are accessed per second, and what is the access time per pixel?',
          options: [
            '18,432,000 pixels/sec; 54.25 nanoseconds/pixel',
            '307,200 pixels/sec; 3.25 microseconds/pixel',
            '36,864,000 pixels/sec; 27.13 nanoseconds/pixel',
            '18,432,000 pixels/sec; 542.5 nanoseconds/pixel',
          ],
          correctOptionIndex: 0,
          hint: 'Pixel rate R = W * H * f; access time t = 1 / R.',
          solutionSteps: [
            'Step 1: Pixels per frame = 640 × 480 = 307,200 pixels.',
            'Step 2: Pixels accessed per second = 307,200 × 60 = 18,432,000 pixels/sec (18.432 MHz pixel clock).',
            'Step 3: Access time per pixel = 1 / 18,432,000 s = 5.4253 × 10^(-8) s = 54.25 nanoseconds.',
          ],
          finalConclusion: '18.432 million pixels/sec; 54.25 ns per pixel.',
        },
      ],
    },
    {
      id: 'cs411-mod3',
      indexNumber: '03',
      lectureSpan: 'Lectures 05–07',
      referenceBooks: 'R1 (Hearn & Baker Ch. 2)',
      title: 'Color CRT Monitors (Beam Penetration vs. Shadow Mask) & Non-Refreshing DVST',
      overview: {
        formalDefinition:
          '**Color CRT Monitors** generate multi-chromatic output by combining emissions from layered or triad-grouped phosphors using either the **Beam Penetration Method** (velocity-modulated single beam over 2 phosphor coats) or the **Shadow Mask Method** (intensity-modulated 3-gun RGB triad convergence). **Direct View Storage Tubes (DVST)** eliminate refreshing altogether by storing the image as a static electrostatic positive charge distribution directly behind the phosphor screen.',
        highLevelIntuition:
          'Why did early vector terminals only display **Red, Orange, Yellow, and Green**, whereas raster monitors displayed **16.77 million colors**? Because Beam Penetration relies on changing high-voltage beam acceleration on the fly across two stacked phosphor coats, whereas Shadow Mask places three dedicated R, G, B guns converged through a precision-etched metal mask! Meanwhile, **DVST** solved the vector flicker limit before cheap DRAM existed by trading away dynamic selective erasure.',
        coreTheoremLatex:
          '\\text{Beam Penetration Colors} = 4 \\text{ (R, O, Y, G)}; \\qquad \\text{Shadow Mask Colors} = (2^b)^3 = 2^{3b} \\text{ (for } b \\text{ bits/gun)}',
      },
      keyTerms: [
        {
          term: 'Beam Penetration Method',
          definition: 'Random-scan color CRT method using two stacked phosphor layers (outer Green, inner Red on glass side); electron beam speed controls penetration depth to yield 4 colors.',
        },
        {
          term: 'Shadow Mask Method',
          definition: 'Raster-scan color CRT method using 3 electron guns (R, G, B) arranged in a delta-delta triangle (or in-line) firing through a perforated metal shadow mask onto RGB phosphor dot triads.',
        },
        {
          term: 'DVST (Direct View Storage Tube)',
          definition: 'Non-refreshing CRT using two guns: a high-speed Primary Gun writing a positive charge image onto a Storage Grid, and a continuous low-speed Flood Gun illuminating those charged regions.',
        },
      ],
      diagramId: 'cs411-color-crt-dvst',
      diagramCaption:
        'Left: Two-layer Red/Green Beam Penetration cross-section. Right: Three-gun RGB Shadow Mask convergence onto a phosphor dot triad.',
      technicalSections: [
        {
          id: 'cs411-m3-s1',
          title: '3.1 Color CRT Monitors: Beam Penetration vs. Shadow Mask',
          paragraphs: [
            '**1. Beam Penetration Method (Used with Random Scan):** Inside the glass faceplate, two phosphor layers are coated — typically **Red on the inner side** (closest to electron gun, or vice versa depending on tube; in Hearn & Baker: **outer layer Green, inner layer Red facing gun** — wait: let us state Hearn & Baker’s exact convention clearly: two layers of phosphor, usually **red and green**, are coated onto the inside of the CRT screen! **Slow electrons** excite *only* the first/outer **Red** layer; **very fast high-voltage electrons** penetrate right through the red layer to excite predominantly the **Green** layer; **intermediate beam speeds** excite combinations of red and green to emit **Orange** and **Yellow**!). *Pros:* Inexpensive (single gun, no shadow mask, full vector resolution). *Cons:* Limited to **only 4 colors**; switching accelerating anode voltage takes several milliseconds, degrading refresh quality.',
            '**2. Shadow Mask Method (Used with Raster Scan):** Screen has closely spaced **phosphor triads** (each triad has 1 Red, 1 Green, and 1 Blue dot). Three electron guns (one each for R, G, B) are arranged in a **Delta-Delta triangular pattern** (with circular mask holes & triangular dot triads) or **In-Line arrangement** (3 guns in a horizontal line with vertical slot **Aperture Grille / Trinitron**, easier convergence!). All three beams are deflected and converged to pass through the **same hole** in the metal **Shadow Mask**, diverging slightly past the hole so the Red gun strikes ONLY the Red dot, Green strikes Green, and Blue strikes Blue! Varying the 3 gun currents independently produces white (`R+G+B`), yellow (`R+G`), magenta (`R+B`), cyan (`G+B`), and $2^{24} = 16.77\\text{M}$ colors.',
          ],
        },
        {
          id: 'cs411-m3-s2',
          title: '3.2 Non-Refreshing CRT: Direct View Storage Tube (DVST)',
          paragraphs: [
            'Before inexpensive solid-state RAM made large frame buffers affordable, displaying 50,000+ architectural CAD lines on a Random Scan CRT caused intolerable flicker. Tektronix solved this with the **Direct View Storage Tube (DVST)**, which stores picture information **inside the CRT itself** rather than refreshing from memory:',
          ],
          bulletPoints: [
            {
              lead: 'Primary Electron Gun (Writing Gun — Does NOT Hit Screen!)',
              detail: 'Fires a focused high-speed electron beam NOT at the phosphor, but at a fine-wire **Storage Mesh / Collector Grid** coated with dielectric right behind the screen. Secondary electron emission knocks electrons OFF the dielectric, leaving a **positively charged pattern** matching the drawn lines!',
            },
            {
              lead: 'Flood Gun (Continuous Illumination)',
              detail: 'Emits a continuous wide cloud of slow, low-energy electrons uniformly toward the screen. Negatively charged un-written mesh areas repel flood electrons; positively charged written traces ATTRACT flood electrons right through the mesh to strike the long-persistence phosphor continuously — **zero flicker**!',
            },
            {
              lead: 'Advantages & Fatal Drawbacks of DVST',
              detail: 'Pros: No frame buffer/refresh needed; displays arbitrarily complex static blueprints at sharp resolution with zero flicker. Cons: (1) Ordinarily displays ONLY monochrome (green) at single intensity; (2) **Cannot selectively erase or move part of an image** — erasing requires neutralizing the entire storage grid (causing an unpleasant bright green screen flash) and redrawing everything from scratch (~seconds), precluding dynamic animation!',
            },
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Additive RGB Color Triad Mixing & Chromaticity Simulator',
        complexity: 'Time: O(1) | Space: O(1)',
        code: `def shadow_mask_rgb_synthesis(bits_per_gun: int, r_level: int, g_level: int, b_level: int) -> dict:
    """Computes total color palette and normalized additive triad chromaticity."""
    max_lvl = (1 << bits_per_gun) - 1
    total_palette = 1 << (3 * bits_per_gun)
    rn, gn, bn = r_level / max_lvl, g_level / max_lvl, b_level / max_lvl
    hex_code = f"#{int(rn*255):02X}{int(gn*255):02X}{int(bn*255):02X}"
    named = {
        (1, 0, 0): "Primary Red", (0, 1, 0): "Primary Green", (0, 0, 1): "Primary Blue",
        (1, 1, 0): "Additive Yellow (R+G)", (0, 1, 1): "Additive Cyan (G+B)",
        (1, 0, 1): "Additive Magenta (R+B)", (1, 1, 1): "White", (0, 0, 0): "Black",
    }.get((round(rn), round(gn), round(bn)), "Custom RGB Shade")
    return {"bits_per_pixel": 3 * bits_per_gun, "palette_size": total_palette, "hex": hex_code, "shade": named}`,
        traceTitle: 'Shadow Mask Gun Bit-Depth Scaling',
        traceSteps: [
          { step: '1 Bit / Gun (3-bit RGB)', state: '2^3 = 8 distinct colors', explanation: 'Black, R, G, B, Yellow(R+G), Cyan(G+B), Magenta(R+B), White(R+G+B).' },
          { step: '4 Bits / Gun (12-bit)', state: '2^12 = 4,096 colors', explanation: '16 intensity steps per gun.' },
          { step: '8 Bits / Gun (24-bit True Color)', state: '2^24 = 16,777,216 colors', explanation: '256 intensity steps per gun -> full human perceptual smoothness.' },
        ],
        edgeCases: [
          'Additive CRT/LCD RGB primaries (R+G=Yellow, R+G+B=White) are the EXACT COMPLEMENT of Subtractive Hard-Copy Printer CMY primaries (Cyan absorbs Red, Magenta absorbs Green, Yellow absorbs Blue -> C+M+Y = Black)!',
        ],
      },
      takeawayMatrix: {
        caption: 'Three-Way Comparison: Beam Penetration CRT vs. Shadow Mask CRT vs. DVST',
        headers: ['Parameter', 'Beam Penetration CRT', 'Shadow Mask CRT', 'DVST (Storage Tube)'],
        rows: [
          ['Scan Technology', 'Random Scan (Vector)', 'Raster Scan', 'Non-Refreshing Vector Storage'],
          ['Electron Guns', '1 Gun (variable accel voltage)', '3 Guns (R, G, B)', '2 Guns (Primary Writing + Flood)'],
          ['Color Capability', '4 Colors (Red, Orange, Yellow, Green)', 'Millions (up to 16.77M True Color)', 'Monochrome (Single intensity green)'],
          ['Refresh Memory Needed', 'Small Vector Display List', 'Large Pixel Frame Buffer', 'NONE (Stored as mesh charge!)'],
          ['Selective Erasure / Motion', 'Yes (Fast list edit)', 'Yes (60 Hz frame buffer update)', 'NO (Full screen flash erase required)'],
        ],
      },
      examSpotlight: {
        weightage: '8–10 Marks (Beam Penetration vs Shadow Mask + DVST Working & Limitations)',
        highYieldDefinitions: [
          {
            concept: 'Delta-Delta vs. In-Line Shadow Mask',
            preciseStatement: 'Delta-Delta arranges the 3 guns and phosphor dots in equilateral triangles (harder corner convergence); Precision In-Line places all 3 guns and phosphor stripes side-by-side horizontally, simplifying high-resolution beam convergence.',
          },
        ],
        commonTraps: [
          {
            trap: 'Writing that the Primary Gun in a DVST directly illuminates the phosphor screen.',
            correction: 'In DVST, the Primary Gun ONLY writes a positive electrostatic pattern onto the Storage Grid! Illumination comes strictly from the continuous low-velocity Flood Gun!',
          },
        ],
        pastPaperPatterns: [
          'Compare and contrast the Beam Penetration method and Shadow Mask method used in Color CRT monitors with neat diagrams. (8 Marks)',
          'Explain the construction, working principle, advantages, and drawbacks of Direct View Storage Tube (DVST). Why is DVST unsuitable for interactive animation? (8 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'cs411-q3',
          questionType: 'Conceptual / Analytical',
          marks: 5,
          question:
            'In a Shadow Mask Color CRT where each of the three electron guns (Red, Green, Blue) can be driven to $64$ distinct intensity levels, how many bits per pixel are required in a direct-color frame buffer, and how many total distinct colors can be displayed?',
          options: [
            '18 bits/pixel; 262,144 distinct colors',
            '6 bits/pixel; 64 distinct colors',
            '24 bits/pixel; 16,777,216 distinct colors',
            '18 bits/pixel; 192 distinct colors',
          ],
          correctOptionIndex: 0,
          hint: '64 levels = 2^6 => 6 bits per gun × 3 guns = 18 bits/pixel.',
          solutionSteps: [
            'Step 1: Number of bits per electron gun b = log_2(64) = 6 bits.',
            'Step 2: Total bits per pixel across 3 guns (R, G, B) = 3 × 6 = 18 bit-planes.',
            'Step 3: Total distinct color combinations = 64 × 64 × 64 = 2^18 = 262,144 colors.',
          ],
          finalConclusion: '18 bits/pixel yielding 2^18 = 262,144 colors.',
        },
      ],
    },
    {
      id: 'cs411-mod4',
      indexNumber: '04',
      lectureSpan: 'Lectures 06–08',
      referenceBooks: 'R1 (Hearn & Baker Ch. 2 & Ch. 4), E1',
      title: 'Flat Panel Displays (Plasma, TFEL, LED, LCD) & Color Lookup Tables (CLUT)',
      overview: {
        formalDefinition:
          '**Flat-Panel Displays** refer to thin, lightweight, low-volume video devices partitioned into **Emissive Displays** (Plasma panels, Thin-Film Electroluminescent displays, LEDs — converting electrical energy directly into photons) and **Non-Emissive Displays** (Liquid Crystal Displays — using electro-optical polarization twisting to modulate external/backlit light). **Color Lookup Tables (CLUTs)** decouple frame-buffer bit depth $n$ from DAC palette precision $w$.',
        highLevelIntuition:
          'Flat panels eliminate the bulky真空 deflection funnel of CRTs by addressing pixels via **orthogonal row-column conductor grids**. Meanwhile, **CLUTs** solve a classic memory engineering bottleneck: instead of storing full $24$-bit RGB inside every single pixel of VRAM ($3\\text{ MB}$ at $1024\\times1024$), store an **$8$-bit index** ($1\\text{ MB}$ VRAM) pointing into a tiny $256 \\times 24$-bit hardware SRAM lookup table — giving instant zero-copy color-table animation and $66.7\\%$ VRAM savings!',
        coreTheoremLatex:
          '\\text{VRAM Saved via CLUT} = W \\cdot H \\cdot (w - n) - 2^n \\cdot w \\text{ bits}',
      },
      keyTerms: [
        {
          term: 'Emissive vs. Non-Emissive Display',
          definition: 'Emissive panels (Plasma, TFEL, LED/OLED) generate their own light from electrical power; Non-Emissive panels (LCD) act as light valves modulating a backlight or ambient reflection.',
        },
        {
          term: 'Nematic Liquid Crystal',
          definition: 'Organic compounds having long crystalline rod-like molecular alignment between solid and isotropic liquid states; twisted 90 degrees between orthogonal polarizers in Twisted-Nematic (TN) LCDs.',
        },
        {
          term: 'Active-Matrix TFT LCD',
          definition: 'Places a dedicated Thin-Film Transistor + storage capacitor at EVERY (row, col) pixel intersection to hold charge steadily between refresh scans, providing high contrast and fast response.',
        },
        {
          term: 'Color Lookup Table (CLUT)',
          definition: 'High-speed hardware register array of 2^n entries (each w bits wide) translating n-bit frame-buffer pixel codes into w-bit RGB DAC voltages on the fly.',
        },
      ],
      diagramId: 'cs411-flatpanel-clut',
      diagramCaption:
        '8-Bit Plane Frame Buffer indexing into a 256-entry × 24-bit wide Color Lookup Table (CLUT) driving three 8-bit RGB DACs.',
      technicalSections: [
        {
          id: 'cs411-m4-s1',
          title: '4.1 Emissive Flat Panels: Plasma, TFEL & LED Displays',
          paragraphs: [
            '**1. Plasma Panels (Gas-Discharge Displays):** Two glass plates enclose a thin region filled with **neon-xenon gas**. Horizontal gold/transparent conductor ribbons line one glass plate; vertical ribbons line the other. Applying a **firing voltage** ($\approx 180\\text{–}200\\text{ V}$) across $(x_i, y_j)$ breaks down the gas into glowing **plasma** of ions and electrons (emitting UV that excites RGB phosphors in modern plasma). Because plasma cells retain wall charge, a lower **$60\\text{ kHz}$ alternating sustain voltage** keeps fired pixels glowing **without needing an external refresh frame buffer**! *(Rugged, wide viewing angle, large sizes, high power consumption).*',
            '**2. Thin-Film Electroluminescent (TFEL) Displays:** Identical sandwich grid structure, except the gas cavity is replaced by a **solid-state film of Zinc Sulfide doped with Manganese ($\\text{ZnS:Mn}$)** (~1 micron thick). Applying $\\approx 200\\text{ V}$ accelerates electrons through the doped layer, exciting manganese atoms to emit bright **amber-yellow light**. Requires more power than LCDs and harder to achieve full RGB.',
            '**3. Light-Emitting Diode (LED / OLED) Matrices:** Matrix of semiconductor p-n junctions arranged into pixel triads; refresh scan-line rates match CRT video controllers with ultra-fast sub-millisecond switching.',
          ],
        },
        {
          id: 'cs411-m4-s2',
          title: '4.2 Non-Emissive Flat Panels: Twisted-Nematic Passive vs. Active-Matrix LCD',
          paragraphs: [
            '**Twisted-Nematic (TN) LCD Optical Valve Physics:** Two glass plates, each bonded with a **light polarizer at $90^\\circ$ right angles** to the other, sandwich a thin layer of **nematic liquid crystal**. Grooves on the inner plates twist the rod molecules smoothly through a **$90^\\circ$ helix**:',
          ],
          bulletPoints: [
            {
              lead: 'OFF State (Zero Voltage -> Bright Pixel in Normally-White Mode)',
              detail: 'Unpolarized light passes through Rear Polarizer (becoming horizontally polarized), its polarization plane is guided 90° smoothly along the helical liquid-crystal rods, and it exits cleanly through the vertical Front Polarizer -> BRIGHT pixel!',
            },
            {
              lead: 'ON State (Voltage Applied Across Row/Col -> Dark Pixel)',
              detail: 'Electric field aligns rod molecules parallel to the field (destroying the 90° twist!); horizontally polarized light reaches the vertical Front Polarizer unrotated and is BLOCKED -> DARK pixel!',
            },
            {
              lead: 'Passive-Matrix vs. Active-Matrix (TFT)',
              detail: 'Passive-Matrix pulses row/col grids directly (slow response, ghost crosstalk). Active-Matrix places a Thin-Film Transistor (TFT) + capacitor at every pixel corner to latch exact analog voltage continuously!',
            },
          ],
        },
        {
          id: 'cs411-m4-s3',
          title: '4.3 N-Bit Plane Frame Buffers & Color Lookup Tables (CLUT)',
          paragraphs: [
            '**1-Bit Monochrome:** 1 bit-plane $\\implies 2$ levels (ON/OFF). **$N$-Bit Gray Level:** $N$ bit-planes feed a single $N$-bit DAC producing $2^N$ gray shades (e.g., $N=8 \\implies 256$ shades). **Direct $3k$-Bit Color Frame Buffer:** Three groups of $k$ bit-planes feed three $k$-bit DACs ($k=8 \\implies 24$ planes $= 16,777,216$ simultaneous colors).',
            '**$N$-Bit CLUT (Pseudo-Color) Frame Buffer:** Frame buffer has $n$ planes (e.g., $n = 8$), so each pixel stores an $n$-bit integer $0 \\dots 2^n - 1$ used ONLY as a **table address** into a $2^n \\times w$-bit **Lookup Table** ($w = 24$). Thus **at most $2^n = 256$ distinct colors can appear simultaneously on screen**, chosen freely from a **palette of $2^w = 16,777,216$ colors**!',
          ],
          workedExample: {
            title: 'Worked Exam Numerical: Frame Buffer & CLUT Memory Comparison',
            problemStatement:
              'A 1024 × 1024 raster workstation wants to display shades from a 24-bit True Color palette (16.77M colors). Compare the total memory (Frame Buffer + CLUT in bytes) required for (a) Direct 24-bit True Color without CLUT vs. (b) an 8-bit Frame Buffer with a 24-bit wide CLUT.',
            steps: [
              '1. Case (a) Direct 24-bit Frame Buffer: 1024 × 1024 × 24 bits / 8 = 1,048,576 × 3 Bytes = 3,145,728 Bytes (3.00 MB exact).',
              '2. Case (b) 8-bit Frame Buffer size = 1024 × 1024 × 8 / 8 = 1,048,576 Bytes (1.00 MB).',
              '3. Case (b) CLUT size = 2^8 entries × 24 bits/entry = 256 × 3 Bytes = 768 Bytes.',
              '4. Total memory in Case (b) = 1,048,576 + 768 = 1,049,344 Bytes (~1.0007 MB).',
              '5. Net memory saved = 3,145,728 - 1,049,344 = 2,096,384 Bytes (~2.00 MB saved, i.e., 66.64% reduction!).',
            ],
            finalAnswer: 'Direct 24-bit = 3,145,728 Bytes; 8-bit + CLUT = 1,049,344 Bytes (saves ~2 MB; displays 256 simultaneous colors).',
          },
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'VRAM & CLUT Memory / Bandwidth Calculator',
        complexity: 'Time: O(1) | Space: O(1)',
        code: `def clut_memory_analysis(W: int, H: int, n_planes: int, w_dac_bits: int) -> dict:
    fb_bytes = (W * H * n_planes) / 8
    clut_bytes = ((1 << n_planes) * w_dac_bits) / 8
    direct_bytes = (W * H * w_dac_bits) / 8
    simultaneous = min(W * H, 1 << n_planes)
    palette = 1 << w_dac_bits
    return {
        "fb_bytes": int(fb_bytes),
        "clut_bytes": int(clut_bytes),
        "total_with_clut_bytes": int(fb_bytes + clut_bytes),
        "direct_no_clut_bytes": int(direct_bytes),
        "simultaneous_colors": simultaneous,
        "total_palette_colors": palette,
    }`,
        traceTitle: 'Edge-Case Check: What if n_planes = 24 on a tiny 256×256 icon screen?',
        traceSteps: [
          { step: '1. Pixel Count', state: 'W * H = 256 * 256 = 65,536 pixels', explanation: 'Screen physically contains only 65,536 pixels!' },
          { step: '2. Palette Capacity', state: '2^24 = 16,777,216 colors', explanation: 'Each pixel can independently pick any of 16.77M colors.' },
          { step: '3. Simultaneous Colors Trap!', state: 'min(W*H, 2^n) = min(65536, 16777216) = 65,536!', explanation: 'You can NEVER simultaneously display more colors than total pixels on screen!' },
        ],
        edgeCases: [
          'Exam Trap: If W × H < 2^n (e.g., 512 × 512 = 262,144 pixels on a 24-bit 16.77M color buffer), maximum SIMULTANEOUS colors on screen is 262,144 (W × H), NOT 16,777,216!',
        ],
      },
      takeawayMatrix: {
        caption: 'Comparison of Flat-Panel Display Technologies',
        headers: ['Display Type', 'Category', 'Active Medium', 'Operating Voltage / Power', 'Key Strength / Limitation'],
        rows: [
          ['Plasma Panel', 'Emissive', 'Neon-Xenon ionized gas', '~180-200V AC sustain (High W)', 'Self-sustaining memory; wide viewing angle'],
          ['TFEL Display', 'Emissive', 'Solid ZnS:Mn thin film', '~200V (High W)', 'Extremely rugged solid-state; mostly monochrome'],
          ['LED / OLED', 'Emissive', 'Semiconductor p-n / organic', '2-5V DC (Low W)', 'Infinite black contrast, sub-ms response'],
          ['Passive LCD', 'Non-Emissive', '90° Twisted Nematic LC', '3-5V (Ultra-low W)', 'Cheap, battery-friendly; slow & ghosting'],
          ['Active TFT LCD', 'Non-Emissive', 'TN/IPS LC + per-pixel TFT', '3-5V + Backlight', 'Sharp contrast, zero crosstalk, dominant FPD'],
        ],
      },
      examSpotlight: {
        weightage: '10–12 Marks (Emissive vs Non-Emissive LCD/Plasma + CLUT Diagram & Numerical)',
        highYieldDefinitions: [
          {
            concept: 'Color-Table Animation',
            preciseStatement: 'Fast raster animation trick cycling RGB values inside the tiny 256-entry CLUT between frames without modifying a single pixel inside the multi-megabyte Frame Buffer (used for fluid flow, blinking warnings, and palette fades).',
          },
        ],
        commonTraps: [
          {
            trap: 'Saying an LCD emits polarized light.',
            correction: 'LCD is NON-EMISSIVE — it emits ZERO light of its own! It merely rotates/blocks polarized light supplied by a rear backlight (transmissive) or ambient mirror (reflective).',
          },
        ],
        pastPaperPatterns: [
          'Classify Flat Panel Displays into Emissive and Non-Emissive devices. Explain the working principle of Plasma Panels and Twisted-Nematic Active-Matrix LCDs. (10 Marks)',
          'Draw the architecture of an N-bit plane Color Frame Buffer with a Lookup Table (CLUT). For a 1024×768 system with 12-bit frame buffer and 24-bit CLUT, find frame buffer size, CLUT size, palette size, and max simultaneous colors. (8 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'cs411-q4',
          questionType: 'Numerical / Derivation',
          marks: 6,
          question:
            'A $512 \\times 512$ raster display uses a **direct $24$-bit** True Color frame buffer. What is the **maximum number of distinct colors** that can appear **simultaneously** on the screen at any single instant?',
          options: [
            '16,777,216 colors (2^24)',
            '262,144 colors (512 × 512)',
            '256 colors (2^8)',
            '786,432 colors (512 × 512 × 3)',
          ],
          correctOptionIndex: 1,
          hint: 'Compare the total number of pixels physically present on the screen against 2^24!',
          solutionSteps: [
            'Step 1: Palette size supported by 24 bits/pixel = 2^24 = 16,777,216 possible colors.',
            'Step 2: Total pixels on a 512 × 512 screen = 2^9 × 2^9 = 2^18 = 262,144 pixels.',
            'Step 3: Even if every single pixel on screen has a completely unique color, at most 262,144 pixels exist simultaneously!',
            'Step 4: Therefore max simultaneous colors = min(W × H, 2^24) = min(262,144, 16,777,216) = 262,144.',
          ],
          finalConclusion: '262,144 simultaneous colors (bounded by pixel count 512 × 512 < 2^24!).',
        },
      ],
    },
    {
      id: 'cs411-mod5',
      indexNumber: '05',
      lectureSpan: 'Lectures 09–12',
      referenceBooks: 'R1 (Hearn & Baker Ch. 2 & Ch. 8), R4 (Rogers)',
      title: 'Input Devices, Logical Classification, Picture Construction & Hard Copy Devices',
      overview: {
        formalDefinition:
          'Graphics standards (**GKS, PHIGS**) abstract diverse physical input hardware into **six device-independent Logical Input Classes** — `LOCATOR`, `STROKE`, `STRING`, `VALUATOR`, `CHOICE`, and `PICK` — enabling portable **Interactive Picture Construction Techniques** (Positioning, Constraints, Grids, Gravity Fields, Rubber-Banding, Dragging, and Sketching).',
        highLevelIntuition:
          'If a CAD application hardcoded serial mouse registers directly, porting it to a digitizer tablet or touch screen would require rewriting the entire application! Logical classification decouples **what data type the application needs** (a coordinate? a scalar? an object ID?) from **how physical hardware senses it**. Combined with visual construction aids like **Gravity Fields** and **Rubber-Band XOR drawing**, users construct exact engineering geometry effortlessly.',
        coreTheoremLatex:
          '\\text{Logical Input Space} = \\{\\text{LOCATOR}, \\text{STROKE}, \\text{STRING}, \\text{VALUATOR}, \\text{CHOICE}, \\text{PICK}\\}',
      },
      keyTerms: [
        {
          term: 'LOCATOR vs. PICK',
          definition: 'A LOCATOR returns a geometric coordinate position (x, y), whereas a PICK device identifies and returns the ID/handle of a displayed graphical object or segment (NOT coordinates!).',
          examNote: 'Single most tested distinction in Lectures 09-10!',
        },
        {
          term: 'Light Pen',
          definition: 'Pencil-shaped photoelectric PICK/pointing device generating an interrupt pulse at the exact microsecond the CRT electron beam sweeps across the phosphor spot under its lens.',
        },
        {
          term: 'Gravity Field',
          definition: 'Interactive construction aid surrounding existing lines/endpoints with an invisible attraction buffer; any cursor click inside the buffer automatically snaps exactly onto the line or endpoint.',
        },
        {
          term: 'Rubber-Band Method',
          definition: 'Dynamic primitive construction anchoring initial point P1 on mouse-down and continuously erasing/redrawing the stretched line/rectangle/circle to live cursor Pt until mouse-up.',
        },
      ],
      diagramId: 'cs411-input-construction',
      diagramCaption:
        'Left: The Six GKS/PHIGS Logical Input Device Classes. Right: Endpoint-weighted Gravity Field snapping + dynamic Rubber-Band line stretching.',
      technicalSections: [
        {
          id: 'cs411-m5-s1',
          title: '5.1 Six Logical Classifications of Input Devices & Three Operating Modes',
          paragraphs: [
            '**The Six Logical Classes:** **(1) LOCATOR:** Supplies a single coordinate position $(x, y)$ in world/normalized coordinates (Mouse, Tablet stylus, Joystick, Trackball). **(2) STROKE:** Supplies an **ordered sequence/series of coordinate positions** $[(x_1, y_1), \\dots, (x_n, y_n)]$ generated by continuous movement (freehand tablet sketching, continuous mouse drag). **(3) STRING:** Supplies a string of alphanumeric characters (Keyboard). **(4) VALUATOR:** Supplies a **single bounded scalar real number** $v \\in [v_{\\min}, v_{\\max}]$ used to set rotation angles, zoom factors, or speeds (Rotary control dials/potentiometers, GUI scrollbars/sliders). **(5) CHOICE:** Selects from a predefined menu of discrete actions/options (Function keys `F1..F12`, button boxes, on-screen menu icons). **(6) PICK:** Selects a graphical component/segment from the scene (Light Pen via beam timing; or simulated via mouse Locator + **Pick Window** bounding-box hit-testing!).',
            '**Three Input Interaction Modes:** *Request Mode* (application suspends and waits until user triggers input), *Sample Mode* (application polls current device state asynchronously without waiting), and *Event Mode* (devices push timestamped events asynchronously into an **Event Queue** polled by the app).',
          ],
        },
        {
          id: 'cs411-m5-s2',
          title: '5.2 Physical Input Hardware & Hard Copy Devices (Printers & Plotters)',
          paragraphs: [
            '**Key Physical Input Mechanisms:** **(a) Touch Panels** use three sensing physics: *Optical* (rows/columns of IR LEDs and photodetectors along bezel; finger breaks two orthogonal IR beams), *Electrical/Capacitive* (transparent Indium Tin Oxide layers changing capacitance/voltage on contact), and *Acoustical* (high-frequency ultrasonic surface waves reflected by finger absorption!). **(b) Light Pens** detect the brief bright **fluorescence flash** as the CRT electron gun refreshes the pixel under the pen; the video controller’s $(X, Y)$ or Display List counter at that instant reveals what was pointed to! *(Fails on black unlit pixels and non-scanning LCDs).* **(c) Graphics Tablets** use electromagnetic wire grids or magnetostrictive/sonic delay strips for sub-millimeter CAD precision.',
            '**Hard Copy Output Devices:** Classified by **Impact** (strikes ribbon onto paper: Dot-Matrix pin head, Drum/Chain line printers) vs. **Non-Impact** (**Laser Printer**: rotating laser scans positively charged selenium/OPC drum, neutralizing background or image charge so charged toner adheres and is thermally fused; **Inkjet**: continuous electrostatic deflection or drop-on-demand piezoelectric/thermal bubble; **Electrostatic** & **Electrothermal**). **Plotters** draw continuous engineering vectors: *Flatbed Plotter* (paper fixed flat; pen carriage moves in $X$ and $Y$), *Drum Plotter* (drum rotates paper along $X$ while pen carriage moves along $Y$, enabling long continuous rolls).',
          ],
        },
        {
          id: 'cs411-m5-s3',
          title: '5.3 Seven Interactive Picture Construction Techniques',
          paragraphs: [
            'Dr. Aditi Paul’s Lecture 09–10 syllabus lists **seven interactive construction techniques** that every student must define and illustrate:',
          ],
          bulletPoints: [
            {
              lead: '1. Basic Positioning Methods',
              detail: 'User moves screen cursor via Locator and clicks to deposit coordinates (echoed visually via crosshairs or numeric coordinate readouts).',
            },
            {
              lead: '2. Constraints (Directional / Geometric Locks)',
              detail: 'Rule altering input coordinates to enforce exact geometry — most commonly Horizontal/Vertical Ortho-Constraint: if |dx| >= |dy|, snap y2 = y1 (perfect horizontal line); else snap x2 = x1 (perfect vertical line)!',
            },
            {
              lead: '3. Grids',
              detail: 'Rectangular network of regularly spaced reference lines; any cursor click rounds (x, y) to the nearest grid intersection (round(x/g)*g, round(y/g)*g) so components align cleanly.',
            },
            {
              lead: '4. Gravity Field',
              detail: 'To connect a new line cleanly to an existing line without microscopic pixel-hunting, software creates a shaded/invisible boundary buffer around existing segments — slightly WIDER around endpoints (dumbbell shape) so vertices snap effortlessly without gaps or overshoots!',
            },
            {
              lead: '5. Rubber-Band Methods',
              detail: 'Fix endpoint P1 = (x1, y1); as cursor moves to P_t, erase previous temporary primitive (fast bitwise XOR drawing mode: Screen ^ Line ^ Line == Screen!) and draw new P1->P_t until release. Works for lines, rectangles, circles, and arcs.',
            },
            {
              lead: '6. Dragging & 7. Sketching',
              detail: 'Dragging picks an existing symbol/object and translates it continuously with the cursor before dropping it into place. Sketching samples rapid STROKE coordinates to draw freehand polylines or splines.',
            },
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Interactive Construction Engine: Grid Snap, Ortho Constraint & Dumbbell Gravity Field',
        complexity: 'Time: O(S) over S existing segments | Space: O(1)',
        code: `import math

def apply_construction_aids(
    raw_x: float, raw_y: float,
    anchor: tuple[float, float] | None,
    segments: list[tuple[float, float, float, float]],
    grid_step: float = 10.0,
    endpoint_grav_r: float = 12.0,
    line_grav_r: float = 6.0,
    ortho_constraint: bool = False,
) -> tuple[float, float, str]:
    # 1. Check Endpoint Gravity first (larger attraction circle around vertices)
    for x1, y1, x2, y2 in segments:
        for vx, vy in [(x1, y1), (x2, y2)]:
            if math.hypot(raw_x - vx, raw_y - vy) <= endpoint_grav_r:
                return vx, vy, "Snapped to Endpoint Gravity Field"
    # 2. Check Line-Segment Perpendicular Gravity Field
    for x1, y1, x2, y2 in segments:
        dx, dy = x2 - x1, y2 - y1
        len_sq = dx * dx + dy * dy
        if len_sq > 0:
            t = max(0.0, min(1.0, ((raw_x - x1) * dx + (raw_y - y1) * dy) / len_sq))
            proj_x, proj_y = x1 + t * dx, y1 + t * dy
            if math.hypot(raw_x - proj_x, raw_y - proj_y) <= line_grav_r:
                return round(proj_x, 2), round(proj_y, 2), "Snapped to Line Gravity Field"
    # 3. Grid Rounding
    gx = round(raw_x / grid_step) * grid_step
    gy = round(raw_y / grid_step) * grid_step
    # 4. Directional Ortho Constraint relative to Rubber-Band Anchor
    if ortho_constraint and anchor is not None:
        ax, ay = anchor
        if abs(gx - ax) >= abs(gy - ay):
            return gx, ay, "Horizontal Constraint + Grid"
        return ax, gy, "Vertical Constraint + Grid"
    return gx, gy, "Grid Intersection Snap"`,
        traceTitle: 'Priority Resolution Trace During Interactive CAD Line Endpoint Placement',
        traceSteps: [
          { step: 'Click at (104, 197)', state: 'Existing vertex V = (100, 200), dist = 5.0 <= 12.0', explanation: 'Endpoint Gravity overrides grid -> snaps cleanly to exact vertex (100, 200).' },
          { step: 'Drag to (248, 203)', state: 'Anchor=(100,200), Ortho=ON -> |dx|=150 >= |dy|=0', explanation: 'Grid gives (250, 200); Ortho locks y = 200 -> exact horizontal segment!' },
        ],
        edgeCases: [
          'Why XOR drawing (`pixel ^= color`) was classic for Rubber-Banding: drawing the same temporary line a second time in XOR mode restores the exact underlying background pixels in O(L) without saving/redrawing the entire scene!',
        ],
      },
      takeawayMatrix: {
        caption: 'Logical Input Device Classification & Physical Hardware Mapping',
        headers: ['Logical Class', 'Data Returned to App', 'Primary Physical Device', 'Simulated Software Equivalent'],
        rows: [
          ['LOCATOR', 'Single coordinate (x, y)', 'Mouse, Stylus Tablet, Trackball', 'Arrow keys incrementing cursor (x, y)'],
          ['STROKE', 'Array [(x_1,y_1)...(x_n,y_n)]', 'Continuous Tablet / Mouse Drag', 'Repeated Sample-mode Locator polling'],
          ['STRING', 'Character string "ABC..."', 'Alphanumeric Keyboard', 'On-screen virtual keyboard Picks'],
          ['VALUATOR', 'Scalar float in [min, max]', 'Potentiometer Dial, Throttle', 'GUI Slider / Scrollbar via Locator'],
          ['CHOICE', 'Integer menu/button ID', 'Function Keypad / Button Box', 'Clicking toolbar icon / pull-down menu'],
          ['PICK', 'Graphical Segment/Object ID', 'CRT Light Pen (beam timing)', 'Mouse Locator + Pick-Window Hit Test'],
        ],
      },
      examSpotlight: {
        weightage: '10–12 Marks (6 Logical Input Devices + 7 Picture Construction Techniques + Touch/Light Pen)',
        highYieldDefinitions: [
          {
            concept: 'Pick Window (Hit Detection)',
            preciseStatement: 'When simulating a logical PICK device with a mouse (Locator), a small tolerance square [x - d, x + d] × [y - d, y + d] called the Pick Window is centered at the cursor; any primitive intersecting or bounded within this window is selected.',
          },
        ],
        commonTraps: [
          {
            trap: 'Classifying a Light Pen as a native LOCATOR device.',
            correction: 'A Light Pen is natively a **PICK** device because it fires when the Display Processor draws a specific Display List instruction! To make a Light Pen act as a Locator on an empty screen area, you must flash a special tracking cross/raster pattern.',
          },
        ],
        pastPaperPatterns: [
          'Explain the six logical classifications of input devices with physical and simulated examples of each. Differentiate between Locator, Stroke, and Pick devices. (10 Marks)',
          'Discuss interactive picture construction techniques: Constraints, Grids, Gravity Field, Rubber-Band methods, Sketching, and Dragging with neat sketches. (10 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'cs411-q5',
          questionType: 'Conceptual / Analytical',
          marks: 5,
          question:
            'Why does a **Light Pen** have an enlarged dumbbell-like equivalent in **Gravity Fields**, and why does a traditional CRT Light Pen **fail completely** on a modern LCD monitor or on a completely black region of a CRT screen?',
          options: [
            'Gravity fields enlarge around endpoints to prioritize vertex joins; Light Pens require the transient CRT electron-beam fluorescence pulse, which neither dark pixels nor non-scanning steady-state LCD backlights produce.',
            'Light pens use ultrasonic waves absorbed by LCD glass; gravity fields shrink at endpoints.',
            'Light pens emit laser beams that reflect off black pixels; LCDs have too high resolution.',
            'Gravity fields use magnetic coils; Light pens only work on Plasma displays.',
          ],
          correctOptionIndex: 0,
          hint: 'Recall what triggers the Light Pen photocell interrupt!',
          solutionSteps: [
            'Part 1 (Dumbbell Gravity Field): Enlarging the gravity radius around line endpoints makes it easy for users to snap precisely to vertices when closing polygons without accidentally snapping mid-segment.',
            'Part 2 (Light Pen Physics): A CRT Light Pen contains a passive fast photodiode that waits for the microsecond burst of fluorescence as the scanning electron beam sweeps under its tip, latching the Video Controller’s instantaneous (X, Y) or Display File address.',
            'Part 3 (Failure on Black CRT & LCD): On a black CRT pixel, the electron beam is blanked (zero light flash -> no interrupt!). On an LCD, pixels hold steady continuous backlight polarization via TFT capacitors rather than a sequential microsecond flying-spot flash.',
          ],
          finalConclusion:
            'Dumbbell gravity prioritizes exact vertex closure; CRT Light Pens rely strictly on flying-spot electron-beam fluorescence pulses.',
        },
      ],
    },
  ],
};
