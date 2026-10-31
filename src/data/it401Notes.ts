import { SubjectCourse } from '../types/study';

export const it401Course: SubjectCourse = {
  id: 'it401',
  code: 'IT 401',
  shortTitle: 'Data Mining & Warehousing',
  fullTitle: 'Data Mining and Warehousing — Unit 1 (Section A)',
  instructor: 'Dr. Bharti Nathani, Assistant Professor, Department of Computer Science',
  credits: 4,
  maxMarks: '100 (CA: 40 + ESA: 60)',
  examSchedule: {
    assignment1: '27 August 2026 (10 Marks)',
    periodicalTest1: '9–12 September 2026 (Lectures 01–33, 10 Marks)',
    semesterExam: '2–19 December 2026 (Lectures 01–50, 60 Marks)',
  },
  syllabusVerbatim:
    'Introduction to data mining - Definition, why data mining, on what kind of data, knowledge discovery in databases (KDD), appropriateness of data mining, expert systems vs. data mining systems, data mining functionalities, classification of data mining systems, data mining techniques, major issues. Data Preprocessing - data cleaning, integration and transformation, data reduction, data discretization and concept hierarchy generation. Plus Lectures 13-15: Data Generalization and Summarization, Analytical Characterization.',
  courseOutcomes: [
    'CO 1: Describe the basic concepts of data mining and data warehousing.',
    'CO 2: Apply skills for different data mining techniques in the analysis of data.',
    'CO 3: Describe the schema and organization of data in data warehouse.',
    'CO 4: Apply data mining techniques in wide variety of data like spatial, time series, text, multimedia and World Wide Web.',
    'CO 5: Get experience and encouragement of exploring data mining techniques in real world and doing research.',
  ],
  recommendedBooks: [
    'R1. Han, Jiawei & Kamber, Micheline (2006). Data Mining: Concepts and Techniques, 2nd Ed. Morgan Kaufmann.',
    'R2. Roiger, Richard J. & Geatz, Michael W. (2003). Data Mining: A Tutorial-Based Primer. Pearson Education.',
    'R3. Mattison, Rob (1999). Web Warehousing and Knowledge Management. Tata McGraw Hill.',
    'R5. Inmon, William H. (2005). Building the Data Warehouse, 4th Ed. Wiley Publishing.',
  ],
  handouts: [
    {
      id: 'it401-pdf',
      title: 'IT 401 Official Course Handout (Pages 1–2)',
      subtitle: 'Banasthali Vidyapith · B.Tech. (IT) VII Semester · Dr. Bharti Nathani',
      type: 'pdf',
      src: '/assets/aistudio/IT401_DataMining_andWarehousing_TheoryHandout_BTech__IT_VIISem_1_.docx_fb3bd9ac.pdf',
      notes: 'Complete Syllabus (Sections A, B, C), Assessment Schedule, and Lecture-Wise Schedule (Lectures 1–15 cover Unit 1 / Section A).',
    },
  ],
  formulas: [
    {
      id: 'f-support-conf',
      category: 'Mining Functionalities',
      name: 'Association Rule Support & Confidence',
      latex: '\\text{support}(A \\Rightarrow B) = P(A \\cup B) = \\frac{\\text{count}(A \\cup B)}{|D|}, \\quad \\text{confidence}(A \\Rightarrow B) = P(B \\mid A) = \\frac{\\text{support}(A \\cup B)}{\\text{support}(A)}',
      variables: '|D| is total transactions; A cap B is empty; P(A cup B) means transactions containing BOTH A and B',
      complexityOrBound: 'Range: [0, 1] (often expressed as 0% to 100%)',
      examContext: 'Note Han & Kamber notation: P(A U B) denotes probability a transaction contains itemset A U B (NOT logical OR!).',
    },
    {
      id: 'f-chisq',
      category: 'Data Integration',
      name: 'Pearson Chi-Square Test for Nominal Independence',
      latex: '\\chi^2 = \\sum_{i=1}^{c} \\sum_{j=1}^{r} \\frac{(o_{ij} - e_{ij})^2}{e_{ij}}, \\qquad e_{ij} = \\frac{\\text{count}(A = a_i) \\times \\text{count}(B = b_j)}{n}',
      variables: 'o_ij = observed joint frequency; e_ij = expected frequency under independence; df = (c - 1)(r - 1)',
      complexityOrBound: 'Reject independence (attributes correlated/redundant) if chi^2 > critical value',
      examContext: 'Classic 8-mark numerical on 2x2 contingency table (e.g., Play Chess vs Like Science Fiction).',
    },
    {
      id: 'f-pearson',
      category: 'Data Integration',
      name: 'Pearson Correlation Coefficient for Numeric Attributes',
      latex: 'r_{A,B} = \\frac{\\sum_{i=1}^{n}(a_i - \\bar{A})(b_i - \\bar{B})}{(n-1)\\sigma_A \\sigma_B} = \\frac{\\sum_{i=1}^{n}(a_i b_i) - n\\bar{A}\\bar{B}}{(n-1)\\sigma_A \\sigma_B}',
      variables: 'r in [-1, +1]; sigma_A, sigma_B are sample standard deviations (using n - 1 or n consistently with textbook)',
      complexityOrBound: 'O(n) single-pass computation',
      examContext: 'Note: Han & Kamber 2nd Ed uses n in denominator when sigma uses n; 3rd Ed uses (n-1). Both cancel out identically to sum((a-Abar)(b-Bbar)) / sqrt(sum(a-Abar)^2 * sum(b-Bbar)^2)!',
    },
    {
      id: 'f-norm',
      category: 'Data Transformation',
      name: 'Min-Max, Z-Score & Decimal Scaling Normalization',
      latex: 'v\'_{\\text{mm}} = \\frac{v - \\min_A}{\\max_A - \\min_A}(\\text{new\\_max}_A - \\text{new\\_min}_A) + \\text{new\\_min}_A; \\quad v\'_z = \\frac{v - \\bar{A}}{\\sigma_A}; \\quad v\'_d = \\frac{v}{10^j}',
      variables: 'j is smallest integer such that max(|v\'_d|) < 1',
      complexityOrBound: 'O(n) linear transformation preserving ordering',
      examContext: 'Use Z-score when actual min/max are unknown or extreme outliers dominate Min-Max.',
    },
    {
      id: 'f-aoi-weights',
      category: 'Data Generalization (AOI)',
      name: 'Characteristic t_weight & Discriminant d_weight',
      latex: 't\\_weight(q_a) = \\frac{\\text{count}(q_a \\text{ in } C_j)}{\\sum_{q} \\text{count}(q \\text{ in } C_j)}, \\qquad d\\_weight(q_a) = \\frac{\\text{count}(q_a \\text{ in } C_j)}{\\sum_{k=1}^{m} \\text{count}(q_a \\text{ in } C_k)}',
      variables: 'q_a is a generalized tuple; C_j is target class; C_1..C_m are contrasting classes',
      complexityOrBound: 't_weight measures typicality within target class; d_weight measures uniqueness vs contrasting classes',
      examContext: 'Essential formula for Lectures 13-15 Analytical Characterization & Discrimination questions.',
    },
  ],
  modules: [
    {
      id: 'it401-mod1',
      indexNumber: '01',
      lectureSpan: 'Lectures 01–02',
      referenceBooks: 'R1 (Han & Kamber Ch. 1), R3, R5',
      title: 'Introduction to Data Mining, KDD Architecture & Expert Systems Comparison',
      overview: {
        formalDefinition:
          '**Data Mining** is the automated or semi-automated computational process of discovering **implicit, previously unknown, non-trivial, valid, and potentially actionable patterns or knowledge** from massive volumes of raw data stored in databases, data warehouses, or information repositories.',
        highLevelIntuition:
          'Automated data collection (POS scanners, IoT telemetry, e-commerce logs, satellites) created the **"Data Rich, Information Poor" (DRIP)** paradox: petabytes of data sit in relational tables ("data tombs") while human analysts cannot manually extract strategic rules. Crucially, **Data Mining is NOT the entire process** — it is **Step 5** of the broader 7-stage iterative **Knowledge Discovery in Databases (KDD)** pipeline!',
        coreTheoremLatex:
          '\\text{KDD Pipeline: } \\text{Raw DB} \\xrightarrow{\\text{Clean + Integrate}} \\text{DW} \\xrightarrow{\\text{Select + Transform}} \\text{Task Data} \\xrightarrow{\\text{Data Mining}} \\text{Patterns} \\xrightarrow{\\text{Evaluate}} \\text{Knowledge}',
      },
      keyTerms: [
        {
          term: 'KDD (Knowledge Discovery in Databases)',
          definition: 'End-to-end 7-stage iterative sequence (Cleaning -> Integration -> Selection -> Transformation -> Data Mining -> Pattern Evaluation -> Knowledge Presentation) converting raw data into human-interpretable knowledge.',
        },
        {
          term: 'Interestingness Measure',
          definition: 'Quantitative (objective: support, confidence, lift, chi-square) or user-belief-driven (subjective: unexpectedness, actionability) metric filtering genuinely useful patterns from millions of spurious rules.',
        },
        {
          term: 'Expert System',
          definition: 'Deductive AI rule-engine applying manually elicited human domain-expert IF-THEN rules via an inference engine — suffers from the Knowledge Acquisition Bottleneck.',
        },
        {
          term: 'Transactional Database',
          definition: 'File/table where each record (TID, {i_1, i_2, ..., i_k}) represents a market-basket event (e.g., customer checkout, web clicks), enabling frequent itemset mining.',
        },
      ],
      diagramId: 'it401-kdd-pipeline',
      diagramCaption:
        'Iterative 7-Stage Knowledge Discovery in Databases (KDD) Pipeline highlighting preprocessing dominance (Steps 1–4) and feedback loops.',
      technicalSections: [
        {
          id: 'it401-m1-s1',
          title: '1.1 Evolution of Database Systems & The 7-Step KDD Architecture',
          paragraphs: [
            '**Four Decades of Database Evolution:** (1) *1960s*: Primitive file processing & network/hierarchical DBMS; (2) *1970s–1980s*: Relational Data Model (Codd), SQL, OLTP indexing & transaction management; (3) *Late 1980s–1990s*: Advanced data models (extended-relational, spatial, temporal, multimedia) and **Data Warehousing / OLAP** for multidimensional summarization; (4) *1990s–Present*: **Data Mining, Stream Mining & Web Knowledge Discovery**.',
            '**Detailed 7 Stages of KDD:** Steps 1–4 constitute **Data Preprocessing**, consuming **$60\\%\\text{–}80\\%$ of total KDD engineering time**:',
          ],
          bulletPoints: [
            {
              lead: 'Step 1 — Data Cleaning',
              detail: 'Removes noise, smooths erratic sensor/entry errors, resolves inconsistencies, and imputes missing attribute values.',
            },
            {
              lead: 'Step 2 — Data Integration',
              detail: 'Combines multiple heterogeneous data sources (RDBMS, flat files, legacy ERPs) into a coherent store while resolving schema & redundancy conflicts.',
            },
            {
              lead: 'Step 3 — Data Selection',
              detail: 'Retrieves strictly the task-relevant subset of attributes and tuples from the integrated warehouse via SQL/OLAP queries.',
            },
            {
              lead: 'Step 4 — Data Transformation',
              detail: 'Consolidates selected data into forms appropriate for mining via feature normalization, summary aggregation, and hierarchy generalization.',
            },
            {
              lead: 'Step 5 — Data Mining (Core Algorithmic Engine)',
              detail: 'Applies intelligent algorithms (Apriori, FP-Growth, ID3/C4.5, K-Means, SVM) to extract candidate structural patterns.',
            },
            {
              lead: 'Step 6 — Pattern Evaluation',
              detail: 'Identifies truly interesting patterns representing real knowledge based on objective thresholds (support, confidence, correlation) and subjective novelty/actionability.',
            },
            {
              lead: 'Step 7 — Knowledge Presentation',
              detail: 'Uses visual analytics, decision trees, rule cubes, and interactive dashboards to present mined knowledge to domain decision-makers.',
            },
          ],
        },
        {
          id: 'it401-m1-s2',
          title: '1.2 On What Kind of Data Can Data Mining Be Performed?',
          paragraphs: [
            'A hallmark exam question asks to enumerate and distinguish the repositories amenable to data mining:',
            '**(1) Relational Databases:** Tables of tuples with entity-relationship schemas; mined for customer churn or credit scoring beyond what `SELECT ... GROUP BY` can express. **(2) Data Warehouses:** Subject-oriented, integrated, time-variant, non-volatile repositories organized around multidimensional **Data Cubes**, supporting OLAP roll-up/drill-down alongside **OLAM (Online Analytical Mining)**. **(3) Transactional Databases:** `TID -> {item_1, ..., item_k}` nested lists unsuitable for flat 1NF SQL joins, mined via Market Basket Analysis. **(4) Advanced Repositories:** *Object-Relational DBs*, *Temporal / Sequence / Time-Series DBs* (stock tickers, ECG waveforms), *Spatial & Spatiotemporal DBs* (GIS satellite raster/vector maps), *Text & Multimedia DBs* (high-dimensional audio/image/video descriptors), *Heterogeneous Legacy DBs*, *Data Streams* (single-pass bounded-memory IoT/network packets), and the *World Wide Web* (Web Content, Web Structure via PageRank/HITS, and Web Usage server logs).',
          ],
        },
        {
          id: 'it401-m1-s3',
          title: '1.3 Appropriateness of Data Mining & Expert Systems vs. Data Mining Systems',
          paragraphs: [
            '**When is Data Mining Appropriate (vs. Simple Querying or Deductive Rules)?** Do **NOT** use data mining when deterministic exact lookups suffice (e.g., *"List all customers in Jaipur with balance > 50,000"* $\\to$ standard SQL/OLAP!). Data mining is appropriate **only when**: (a) relationships are hidden, probabilistic, and non-obvious; (b) large cleanable historical datasets exist; (c) domain laws cannot be written down as closed-form physics/accounting formulas; and (d) discovered patterns yield measurable ROI.',
            '**Expert Systems vs. Data Mining Systems:** Traditional **Expert Systems** (e.g., MYCIN, DENDRAL) rely on **Deductive Reasoning**: knowledge engineers interview scarce human experts to manually encode static `IF-THEN` production rules into a Knowledge Base — crippled by the **Knowledge Acquisition Bottleneck**, subjectivity bias, and inability to adapt when distributions drift. **Data Mining Systems** perform **Inductive Learning**: they autonomously extract empirical rules, trees, and clusters directly from millions of historical records, scaling effortlessly and adapting dynamically as new data arrives.',
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Objective Pattern Evaluation: Support, Confidence, Lift & Kulczynski Metrics',
        complexity: 'Time: O(|D|) single scan over transactions | Space: O(1)',
        code: `from dataclasses import dataclass

@dataclass
class AssociationAudit:
    support: float
    confidence: float
    lift: float
    kulczynski: float
    verdict: str

def evaluate_rule_interestingness(
    n_total: int, n_a: int, n_b: int, n_ab: int
) -> AssociationAudit:
    """
    Demonstrates why high Support & Confidence can STILL be misleading!
    Example (Han & Kamber): Buy Computer -> Buy Video (Conf=66%, but P(Video)=75% => Lift=0.89 < 1!).
    """
    p_a = n_a / n_total
    p_b = n_b / n_total
    sup = n_ab / n_total
    conf_a_to_b = n_ab / n_a
    conf_b_to_a = n_ab / n_b
    lift = sup / (p_a * p_b)
    kulc = 0.5 * (conf_a_to_b + conf_b_to_a)
    verdict = "NEGATIVELY CORRELATED (Misleading Strong Rule!)" if lift < 1.0 else (
        "INDEPENDENT" if abs(lift - 1.0) < 1e-6 else "POSITIVELY CORRELATED"
    )
    return AssociationAudit(sup, conf_a_to_b, lift, kulc, verdict)

# Classic Han & Kamber AllElectronics Trap Example (10,000 transactions):
# 6000 buy Games (A), 7500 buy Videos (B), 4000 buy BOTH (AB)
res = evaluate_rule_interestingness(10000, 6000, 7500, 4000)
print(res)`,
        traceTitle: 'Han & Kamber Interestingness Trap Trace (Games => Videos on 10,000 Txns)',
        traceSteps: [
          { step: '1. Compute Support', state: 'sup(Games, Videos) = 4000 / 10000 = 40%', explanation: 'Exceeds typical min_sup = 30%.' },
          { step: '2. Compute Confidence', state: 'conf(Games => Videos) = 4000 / 6000 = 66.67%', explanation: 'Exceeds min_conf = 60% -> Naive Apriori outputs this as a "Strong Rule"!' },
          { step: '3. Check Unconditional Prior', state: 'P(Videos) = 7500 / 10000 = 75.0%', explanation: 'Overall probability of buying Videos is 75%, which DROPS to 66.67% if customer buys Games!' },
          { step: '4. Compute Lift (Correlation)', state: 'Lift = 0.40 / (0.60 * 0.75) = 0.40 / 0.45 = 0.889 < 1', explanation: 'Pattern Evaluation stage rejects rule as negatively correlated!' },
        ],
        edgeCases: [
          'Lift is sensitive to null-transactions (transactions containing neither A nor B); Kulczynski (0.5*(P(B|A)+P(A|B))) paired with Imbalance Ratio is null-invariant!',
        ],
      },
      takeawayMatrix: {
        caption: 'Systematic Comparison: Expert Systems vs. OLAP / DBMS Querying vs. Data Mining Systems',
        headers: ['Dimension', 'DBMS / OLAP Querying', 'Traditional Expert Systems', 'Data Mining Systems'],
        rows: [
          ['Reasoning Paradigm', 'Deterministic Retrieval / Aggregation', 'Deductive (Top-Down Human Rules)', 'Inductive (Bottom-Up Data-Driven)'],
          ['Knowledge Source', 'Explicit user SQL / MDX query', 'Manual Knowledge Engineer interviews', 'Implicit hidden patterns in massive DBs'],
          ['Scalability & Update', 'High on indexed summaries', 'Poor (Brittle rule conflicts as rules > 1000)', 'High (Automated retraining on TB/PB data)'],
          ['Handling Noise/Uncertainty', 'Exact tuple matching', 'Ad-hoc certainty factors', 'Principled statistical & probabilistic models'],
          ['Example Question Answered', '"What were Q3 sales in Jaipur?"', '"Given fever + rash, apply Rule #42"', '"Which subtle attributes predict Q4 churn?"'],
        ],
      },
      examSpotlight: {
        weightage: '8–10 Marks (KDD Diagram + Expert Systems vs Data Mining + Appropriateness)',
        highYieldDefinitions: [
          {
            concept: 'Actionable vs. Unexpected Subjective Interestingness',
            preciseStatement: 'A pattern is subjectively unexpected if it contradicts a user’s prior domain belief ("surprise"), and actionable if the user can directly translate it into a profitable strategic intervention.',
          },
        ],
        commonTraps: [
          {
            trap: 'Treating KDD and Data Mining as 100% synonymous in a 10-mark KDD architecture answer.',
            correction: 'State explicitly: in industry parlance they are sometimes used loosely, but academically in Han & Kamber, Data Mining is strictly ONE essential step (Step 5) inside the 7-step KDD process!',
          },
        ],
        pastPaperPatterns: [
          'Is Data Mining hype or a natural evolution of database technology? Draw and explain the 7 steps of Knowledge Discovery in Databases (KDD). (10 Marks)',
          'Differentiate between Expert Systems and Data Mining Systems. Discuss the appropriateness of Data Mining with examples where Data Mining should NOT be used. (8 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'it401-q1',
          questionType: 'Numerical / Derivation',
          marks: 5,
          question:
            'Out of $10,000$ supermarket transactions, $6,000$ include `Tea`, $7,500$ include `Coffee`, and $4,000$ include both `Tea` and `Coffee`. For a minimum support of $30\\%$ and minimum confidence of $60\\%$, evaluate whether `Tea => Coffee` is both a **strong** association rule and a **positively correlated** interesting rule.',
          options: [
            'Strong rule AND positively correlated (Lift = 1.12)',
            'Strong rule (Sup=40%, Conf=66.7%), but NEGATIVELY correlated (Lift = 0.89 < 1)',
            'Not a strong rule because Support < 30%',
            'Independent (Lift = 1.00)',
          ],
          correctOptionIndex: 1,
          hint: 'Compare P(Coffee | Tea) = 4000/6000 against unconditional P(Coffee) = 7500/10000.',
          solutionSteps: [
            'Step 1: Support(Tea => Coffee) = 4,000 / 10,000 = 0.40 = 40% >= 30% (Passes min_sup).',
            'Step 2: Confidence(Tea => Coffee) = 4,000 / 6,000 = 0.6667 = 66.67% >= 60% (Passes min_conf -> Strong Rule!).',
            'Step 3: Compute Lift = P(Tea U Coffee) / (P(Tea) * P(Coffee)) = 0.40 / (0.60 * 0.75) = 0.40 / 0.45 = 0.8889 < 1.',
            'Step 4: Since Lift < 1, buying Tea actually DECREASES the likelihood of buying Coffee from 75% down to 66.7%!',
          ],
          finalConclusion: 'Strong by Support-Confidence framework, yet negatively correlated and misleading (Lift = 0.89).',
        },
      ],
    },
    {
      id: 'it401-mod2',
      indexNumber: '02',
      lectureSpan: 'Lectures 03–04',
      referenceBooks: 'R1 (Han & Kamber Ch. 1), R3',
      title: 'Data Mining Functionalities, System Classification, Techniques & Major Issues',
      overview: {
        formalDefinition:
          '**Data Mining Functionalities** specify the formal classes of patterns discoverable in mining tasks, partitioned into **Descriptive Mining Tasks** (which characterize general statistical and structural properties of existing data without a pre-specified target variable) and **Predictive Mining Tasks** (which perform inductive inference on historical labeled data to forecast unseen discrete or continuous target values).',
        highLevelIntuition:
          'Because data mining sits at the intersection of Databases, Statistics, Machine Learning, and Visualization, dozens of heterogeneous tools exist. Therefore, Han & Kamber classify Data Mining Systems across **four orthogonal criteria** plus **four DBMS/DW Coupling Schemes**, and catalog **major open research issues** into Methodology, Performance, Data Diversity, and Societal Privacy.',
        coreTheoremLatex:
          '\\text{DM Tasks} = \\underbrace{\\{\\text{Characterization, Discrimination, Association, Clustering}\\}}_{\\text{Descriptive}} \\;\\cup\\; \\underbrace{\\{\\text{Classification, Regression, Outlier/Trend}\\}}_{\\text{Predictive}}',
      },
      keyTerms: [
        {
          term: 'Data Characterization',
          definition: 'Summarization of the general characteristics or features of a target class of data (e.g., summarizing spending profile of customers spending >$5,000/yr via OLAP or AOI).',
        },
        {
          term: 'Data Discrimination',
          definition: 'Comparison of the general features of target class data objects against one or more contrasting classes (e.g., fast-growing software products vs declining-sales products).',
        },
        {
          term: 'Tight Coupling',
          definition: 'Highest-efficiency DBMS/DW integration scheme where the data mining engine is smoothly implemented inside the database/warehouse kernel using native B+-trees, query optimizers, and buffer managers.',
        },
        {
          term: 'Outlier Analysis',
          definition: 'Detection of data objects that do not comply with the general statistical, distance, or density model of the data — critical for credit-card fraud and network intrusion detection.',
        },
      ],
      diagramId: 'it401-dm-taxonomy',
      diagramCaption:
        'Hierarchical taxonomy separating Descriptive (Unsupervised) and Predictive (Supervised) Data Mining Functionalities.',
      technicalSections: [
        {
          id: 'it401-m2-s1',
          title: '2.1 Six Core Data Mining Functionalities',
          paragraphs: [
            'Every university exam question on "Data Mining Functionalities" expects all six canonical categories with concrete domain illustrations:',
          ],
          bulletPoints: [
            {
              lead: '1. Concept / Class Description (Characterization & Discrimination)',
              detail: 'Associates classes/concepts with concise, human-readable summaries. Characterization summarizes ONE target class (output: pie/bar charts, multidimensional cubes, generalized rules). Discrimination contrasts target class C_0 against contrasting classes C_1..C_k.',
            },
            {
              lead: '2. Mining Frequent Patterns, Associations & Correlations',
              detail: 'Discovers frequent itemsets, subsequences (sequential patterns like Laptop -> Mouse -> Bag), and substructures (graphs/trees). Example rule: age(X, "20..29") ^ income(X, "40K..49K") => buys(X, "Laptop") [support = 2%, confidence = 60%].',
            },
            {
              lead: '3. Classification & Numeric Prediction (Regression)',
              detail: 'Classification learns a mapping model M(X) -> {C_1, ..., C_k} for categorical class labels (Decision Trees, Naive Bayes, Neural Nets, SVM). Prediction (Regression) models continuous-valued functions f(X) in R (e.g., forecasting revenue).',
            },
            {
              lead: '4. Cluster Analysis (Unsupervised Learning)',
              detail: 'Groups unlabeled objects into clusters maximizing intra-cluster similarity and minimizing inter-cluster similarity.',
            },
            {
              lead: '5. Outlier (Anomaly) Analysis',
              detail: 'Instead of discarding extreme points as noise, explicitly mines rare deviations (fraudulent transactions, faulty jet engine telemetry).',
            },
            {
              lead: '6. Evolution & Trend Analysis',
              detail: 'Models regularities for objects whose behavior changes over time (time-series periodicity, cyclic seasonal shifts, similarity-based sequence matching).',
            },
          ],
        },
        {
          id: 'it401-m2-s2',
          title: '2.2 Classification of Data Mining Systems & Four DB/DW Coupling Schemes',
          paragraphs: [
            '**Four Classification Criteria for DM Systems:** (1) *According to Kinds of Databases Mined* (relational, transactional, object-relational, DW, spatial, time-series, text, web); (2) *According to Kinds of Knowledge Mined* (characterization, association, classification, clustering, or multiple/integrated); (3) *According to Kinds of Techniques Utilized* (autonomous vs interactive/exploratory; database-oriented, warehouse-oriented, ML, statistical, neural, visualization); (4) *According to Applications Adapted* (finance, telecom, DNA bioinformatics, retail e-commerce).',
            '**Four Architecture Coupling Schemes (Crucial Short-Note Question!):** How tightly is the Data Mining Engine coupled to the DBMS / Data Warehouse?',
          ],
          bulletPoints: [
            {
              lead: '1. No Coupling (Flat-File Fetching)',
              detail: 'DM system does not utilize any DB/DW functions; fetches all raw data from OS flat files into memory. Poor scalability, zero index reuse, redundant preprocessing.',
            },
            {
              lead: '2. Loose Coupling',
              detail: 'Uses DB/DW solely as a storage container via standard SQL/ODBC cursors to fetch dataset chunks into external memory, then mines externally. Struggles when datasets exceed RAM.',
            },
            {
              lead: '3. Semi-Tight Coupling',
              detail: 'Links DM system to DB/DW and implements essential mining primitives (sorting, indexing, aggregation, histograms, precomputation of frequent stats) directly inside the DB.',
            },
            {
              lead: '4. Tight Coupling (Ideal Scalable Architecture)',
              detail: 'DM subsystem is smoothly integrated as a first-class component inside the DB/DW engine, leveraging query processing, indexing, ACID concurrency, and cost-based optimization.',
            },
          ],
        },
        {
          id: 'it401-m2-s3',
          title: '2.3 Major Issues in Data Mining',
          paragraphs: [
            'Han & Kamber organize **Major Issues in Data Mining** into **five overarching categories**: **(1) Mining Methodology & User Interaction Issues:** mining diverse knowledge types, interactive multi-abstraction mining, incorporating background domain constraints, ad-hoc Data Mining Query Languages (DMQL), handling noisy/incomplete data, and pattern interestingness evaluation. **(2) Performance & Scalability Issues:** efficiency and linear scalability $O(N)$ on terabyte datasets, and parallel, distributed, and **incremental** mining algorithms (updating models without re-mining from scratch!). **(3) Issues Relating to Diversity of Database Types:** complex multimedia/GIS/hypertext objects and heterogeneous global networks. **(4) Societal Impacts & Privacy-Preserving Data Mining:** preventing re-identification ("Big Brother" profiling), differential privacy, and ethical algorithmic fairness.',
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Descriptive vs. Predictive Pipeline Comparison: Intra/Inter-Cluster Ratio Audit',
        complexity: 'Time: O(N * K) | Space: O(K)',
        code: `import math

def evaluate_cluster_quality(clusters: list[list[tuple[float, float]]]) -> dict[str, float]:
    """
    Demonstrates the fundamental Clustering objective:
    Minimize Intra-cluster distance (compactness) & Maximize Inter-cluster centroid separation.
    """
    centroids = []
    intra_sum, total_pts = 0.0, 0
    for pts in clusters:
        cx = sum(p[0] for p in pts) / len(pts)
        cy = sum(p[1] for p in pts) / len(pts)
        centroids.append((cx, cy))
        for px, py in pts:
            intra_sum += math.hypot(px - cx, py - cy)
            total_pts += 1
    avg_intra = intra_sum / max(1, total_pts)
    inter_dists = [
        math.hypot(centroids[i][0] - centroids[j][0], centroids[i][1] - centroids[j][1])
        for i in range(len(centroids))
        for j in range(i + 1, len(centroids))
    ]
    avg_inter = sum(inter_dists) / max(1, len(inter_dists))
    return {"avg_intra_dist": round(avg_intra, 3), "avg_inter_dist": round(avg_inter, 3), "separation_ratio": round(avg_inter / avg_intra, 3)}`,
        traceTitle: 'Cluster Separation Audit on Two 2D Customer Segments',
        traceSteps: [
          { step: 'Cluster C1 (Budget)', state: '[(10, 12), (12, 11), (11, 13)] -> Centroid mu_1 = (11.0, 12.0)', explanation: 'Mean intra-cluster radius = 1.138 (tight compactness).' },
          { step: 'Cluster C2 (Premium)', state: '[(80, 85), (82, 84), (78, 86)] -> Centroid mu_2 = (80.0, 85.0)', explanation: 'Mean intra-cluster radius = 1.491.' },
          { step: 'Inter-Cluster Separation', state: '||mu_1 - mu_2||_2 = sqrt(69^2 + 73^2) = 100.45', explanation: 'Separation Ratio = 100.45 / 1.31 = 76.4x -> High-quality unsupervised partition!' },
        ],
        edgeCases: [
          'Never confuse Classification (supervised: class labels KNOWN in training set) with Clustering (unsupervised: class labels UNKNOWN; algorithm discovers natural groupings).',
        ],
      },
      takeawayMatrix: {
        caption: 'Comparison of the Four DBMS / Data Warehouse Coupling Architectures',
        headers: ['Coupling Level', 'Data Access Mechanism', 'Memory Constraint', 'DB Index / Query Reuse', 'Enterprise Suitability'],
        rows: [
          ['No Coupling', 'OS Flat-file I/O', 'Must fit in RAM / custom swap', 'None (0%)', 'Academic prototypes only'],
          ['Loose Coupling', 'SQL SELECT dump to RAM', 'Bottlenecked by client RAM', 'Basic WHERE filtering only', 'Small departmental datasets'],
          ['Semi-Tight Coupling', 'SQL + Built-in DB Mining Primitives', 'Disk-backed intermediate tables', 'Sorting, histograms, group-bys', 'Practical commercial tools'],
          ['Tight Coupling', 'Native In-Database Kernel Operators', 'Full DBMS buffer-pool scalability', '100% Optimizer + Index + ACID', 'Enterprise Terabyte Warehouses'],
        ],
      },
      examSpotlight: {
        weightage: '8–10 Marks (Classification vs Clustering, Coupling Schemes, Major Issues)',
        highYieldDefinitions: [
          {
            concept: 'Incremental Data Mining',
            preciseStatement: 'Algorithms capable of updating previously discovered knowledge structures (frequent itemsets, decision trees, clusters) upon arrival of new database insertions/deletions without re-scanning the entire historical database from scratch.',
          },
        ],
        commonTraps: [
          {
            trap: 'Mixing up Classification vs. Prediction in Han & Kamber terminology.',
            correction: 'In Han & Kamber, "Classification" specifically predicts CATEGORICAL/DISCRETE class labels (e.g., Safe vs Risky loan), whereas "Prediction" (Regression) specifically models CONTINUOUS numerical values (e.g., exact dollar expenditure).',
          },
        ],
        pastPaperPatterns: [
          'How are Data Mining systems classified? Explain the four coupling schemes (No, Loose, Semi-Tight, Tight) between a Data Mining system and a Database/Data Warehouse. (10 Marks)',
          'Discuss the major issues in Data Mining with respect to Mining Methodology, Performance/Scalability, and Social Impacts. (8 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'it401-q2',
          questionType: 'Conceptual / Analytical',
          marks: 5,
          question:
            'Classify each of the following tasks into its exact Data Mining Functionality: (a) Summarizing the demographic profile of honors students; (b) Grouping 1 million unlabelled news articles by topic; (c) Forecasting next Tuesday’s peak electricity load in megawatts; (d) Flagging 0.02% of credit-card swipes with abnormal geolocation velocity.',
          options: [
            '(a) Characterization, (b) Clustering, (c) Regression/Prediction, (d) Outlier Analysis',
            '(a) Discrimination, (b) Classification, (c) Association, (d) Clustering',
            '(a) Classification, (b) Characterization, (c) Outlier Analysis, (d) Regression',
            '(a) Association, (b) Clustering, (c) Classification, (d) Discrimination',
          ],
          correctOptionIndex: 0,
          hint: 'Check whether labels exist, whether output is continuous or discrete, and whether one class or anomalies are targeted.',
          solutionSteps: [
            '(a) Single target group ("honors students") summarized concisely -> Data Characterization.',
            '(b) Unlabeled documents partitioned by intrinsic similarity -> Cluster Analysis.',
            '(c) Continuous numerical target (megawatts) inferred from historical features -> Numeric Prediction (Regression).',
            '(d) Rare 0.02% extreme behavioral deviations -> Outlier Analysis.',
          ],
          finalConclusion: 'Characterization, Clustering, Numeric Prediction (Regression), and Outlier Analysis.',
        },
      ],
    },
    {
      id: 'it401-mod3',
      indexNumber: '03',
      lectureSpan: 'Lectures 05–08',
      referenceBooks: 'R1 (Han & Kamber Ch. 2), R5',
      title: 'Data Preprocessing I: Cleaning, Integration, Correlation & Transformation',
      overview: {
        formalDefinition:
          '**Data Preprocessing** transforms raw, dirty, heterogeneous operational datasets into a clean, non-redundant, normalized representation suitable for algorithmic mining — governed by the principle **"Garbage In, Garbage Out" (GIGO)**: no mining algorithm can extract valid knowledge from systematically corrupted inputs.',
        highLevelIntuition:
          'Real enterprise databases suffer from three pervasive pathologies: **Incompleteness** (`NULL` attributes), **Noise** (random variance/error in a measured variable), and **Inconsistency** (e.g., `2026/07/04` vs `04-07-2026` or schema code changes). Lectures 05–08 provide the exact mathematical toolkit tested in every IT 401 numerical exam: **Binning Smoothing**, **Chi-Square ($\chi^2$) Nominal Independence**, **Pearson’s $r_{A,B}$ Numeric Correlation**, and **Min-Max / Z-Score / Decimal Scaling**.',
        coreTheoremLatex:
          '\\chi^2 = \\sum_{i,j} \\frac{(o_{ij}-e_{ij})^2}{e_{ij}}; \\qquad r_{A,B} = \\frac{\\sum(a_i - \\bar{A})(b_i - \\bar{B})}{\\sqrt{\\sum(a_i-\\bar{A})^2 \\sum(b_i-\\bar{B})^2}}',
      },
      keyTerms: [
        {
          term: 'Equal-Frequency (Equi-Depth) Binning',
          definition: 'Sorting numeric values and partitioning them into N bins so each bin contains approximately the same number k of tuples — preferred over Equal-Width because skewed outliers do not leave empty bins.',
        },
        {
          term: 'Entity Identification Problem',
          definition: 'Schema integration challenge of matching equivalent real-world entities across heterogeneous databases (e.g., matching customer_id in DB1 with cust_number in DB2 via metadata).',
        },
        {
          term: 'Chi-Square Test',
          definition: 'Non-parametric statistical test evaluating whether two NOMINAL/categorical attributes A and B are statistically independent or correlated (redundant).',
        },
        {
          term: 'Z-Score Normalization',
          definition: 'Zero-mean, unit-variance standardization v\' = (v - mean_A) / std_A; ideal when true min/max bounds are unknown or distorted by extreme outliers.',
        },
      ],
      diagramId: 'it401-cleaning-integration',
      diagramCaption:
        'Left: Step-by-step Equal-Frequency Binning Smoothing by Bin Means vs. Bin Boundaries. Right: Comparison of Min-Max, Z-Score, and Decimal Scaling.',
      technicalSections: [
        {
          id: 'it401-m3-s1',
          title: '3.1 Data Cleaning: Missing Values & Noisy Data Smoothing',
          paragraphs: [
            '**Six Strategies for Missing Values:** (1) *Ignore the tuple* (used ONLY when the class label itself is missing in classification; otherwise wastes remaining attribute data); (2) *Fill in manually* (tedious, infeasible at scale); (3) *Use a global constant* like `"Unknown"` or `-∞` (dangerous trap: mining algorithm may falsely discover `"Unknown"` as an interesting frequent pattern!); (4) *Use the attribute mean (symmetric) or median (skewed)*; (5) *Use the attribute mean/median restricted to tuples belonging to the SAME CLASS* (far more accurate!); (6) *Use the most probable value* inferred via Bayesian formula, EM algorithm, or Decision Tree induction (**best fidelity** — preserves inter-attribute relationships!).',
            '**Handling Noisy Data (Random Error / Variance):** **(A) Binning** smooths a **sorted** data array by consulting its local neighborhood: partition sorted values into Equi-Depth bins, then apply *(i) Smoothing by Bin Means*, *(ii) Smoothing by Bin Medians*, or *(iii) Smoothing by Bin Boundaries* (min and max of each bin remain fixed; each internal value is replaced by whichever boundary — min or max — is closer!). **(B) Regression** fits data to linear ($Y = wX + b$) or multiple regression surfaces. **(C) Outlier/Cluster Analysis** isolates points falling outside dense clusters for human + algorithmic inspection.',
          ],
        },
        {
          id: 'it401-m3-s2',
          title: '3.2 Data Integration: Chi-Square (Nominal) & Pearson Correlation (Numeric)',
          paragraphs: [
            'During Data Integration, an attribute $B$ may be **redundant** if it can be derived from another attribute (e.g., `annual_revenue` from `monthly_revenue`) or strongly correlated with $A$. **Crucial Distinction:** Use **$\chi^2$ (Chi-Square)** for **Nominal / Categorical** attributes, and **Pearson’s $r_{A,B}$ + Covariance** for **Numeric** attributes!',
          ],
          workedExample: {
            title: 'Worked Exam Numerical: Chi-Square Contingency Table Test (Han & Kamber Classic)',
            problemStatement:
              'Among 1,500 surveyed individuals: (Play Chess & Like Sci-Fi = 250), (Not Play Chess & Like Sci-Fi = 200), (Play Chess & Not Like Sci-Fi = 50), (Not Play Chess & Not Like Sci-Fi = 1,000). Test at significance alpha = 0.001 (critical chi^2_(df=1) = 10.828) whether Play_Chess and Like_SciFi are correlated.',
            steps: [
              '1. Marginal Row & Column Totals: Total Play Chess = 250 + 50 = 300; Total Not Play Chess = 200 + 1000 = 1200; Total Like Sci-Fi = 250 + 200 = 450; Total Not Like Sci-Fi = 50 + 1000 = 1050; Grand Total n = 1500.',
              '2. Compute Expected Frequencies e_ij = (ColTotal_i * RowTotal_j) / n:',
              '   • e_11 (Chess, SciFi) = (300 * 450) / 1500 = 90',
              '   • e_21 (NoChess, SciFi) = (1200 * 450) / 1500 = 360',
              '   • e_12 (Chess, NoSciFi) = (300 * 1050) / 1500 = 210',
              '   • e_22 (NoChess, NoSciFi) = (1200 * 1050) / 1500 = 840',
              '3. Sum (o_ij - e_ij)^2 / e_ij across all 4 cells:',
              '   chi^2 = (250-90)^2/90 + (200-360)^2/360 + (50-210)^2/210 + (1000-840)^2/840',
              '   chi^2 = 25600/90 + 25600/360 + 25600/210 + 25600/840 = 284.44 + 71.11 + 121.90 + 30.48 = 507.93.',
              '4. Degrees of freedom df = (2 - 1)(2 - 1) = 1. Since 507.93 >> 10.828, REJECT null hypothesis of independence!',
            ],
            finalAnswer: 'chi^2 = 507.93 > 10.828 => Play_Chess and Like_SciFi are strongly correlated!',
          },
        },
        {
          id: 'it401-m3-s3',
          title: '3.3 Data Transformation & Normalization (Distance-Metric Necessity)',
          paragraphs: [
            'Distance-based algorithms (K-Means, KNN, Neural Networks with gradient descent) are **catastrophically skewed** by unnormalized units: an `income` difference of `$20,000` ($20000^2 = 4 \\times 10^8$) completely drowns out an `age` difference of `20 years` ($20^2 = 400$)! Three standard normalizations give all features equal footing:',
          ],
          workedExample: {
            title: 'Worked Exam Numerical: Min-Max, Z-Score & Decimal Scaling',
            problemStatement:
              'Suppose income has min = $12,000, max = $98,000, mean = $54,000, and standard deviation = $16,000. Normalize v = $73,600 using (a) Min-Max onto [0.0, 1.0], (b) Z-Score, and (c) Decimal Scaling.',
            steps: [
              '(a) Min-Max onto [0, 1]: v\' = (73,600 - 12,000) / (98,000 - 12,000) * (1 - 0) + 0 = 61,600 / 86,000 = 0.7163.',
              '(b) Z-Score: v\' = (73,600 - 54,000) / 16,000 = 19,600 / 16,000 = +1.225 (i.e., 1.225 standard deviations above mean).',
              '(c) Decimal Scaling: max(|v|) = 98,000 has 5 digits -> smallest j with 98,000 / 10^j < 1 is j = 5 (10^5 = 100,000). Thus v\' = 73,600 / 100,000 = 0.736.',
            ],
            finalAnswer: 'Min-Max = 0.716; Z-Score = 1.225; Decimal Scaling = 0.736 (j = 5).',
          },
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Equi-Depth Binning Smoother & Chi-Square / Normalization Suite',
        complexity: 'Sorting + Binning: O(N log N) | Chi-Square: O(r * c)',
        code: `import math

def equi_depth_bin_smoothing(data: list[float], bin_depth: int) -> dict[str, list[list[float]]]:
    arr = sorted(data)
    bins = [arr[i : i + bin_depth] for i in range(0, len(arr), bin_depth)]
    by_means, by_medians, by_bounds = [], [], []
    for b in bins:
        mean_v = round(sum(b) / len(b), 2)
        m = len(b)
        med_v = b[m // 2] if m % 2 == 1 else round((b[m // 2 - 1] + b[m // 2]) / 2, 2)
        lo, hi = b[0], b[-1]
        by_means.append([mean_v] * m)
        by_medians.append([med_v] * m)
        by_bounds.append([lo if abs(x - lo) <= abs(hi - x) else hi for x in b])
    return {"bins": bins, "means": by_means, "medians": by_medians, "boundaries": by_bounds}

def chi_square_contingency(observed: list[list[float]]) -> float:
    rows = len(observed)
    cols = len(observed[0])
    row_sums = [sum(r) for r in observed]
    col_sums = [sum(observed[r][c] for r in range(rows)) for c in range(cols)]
    n = sum(row_sums)
    chi2 = 0.0
    for r in range(rows):
        for c in range(cols):
            expected = (row_sums[r] * col_sums[c]) / n
            chi2 += ((observed[r][c] - expected) ** 2) / expected
    return round(chi2, 3)`,
        traceTitle: 'Binning Trace on [13, 15, 16, 16, 19, 20, 20, 21, 22, 22, 25, 25] (Depth = 3)',
        traceSteps: [
          { step: 'Partition', state: 'B1=[13,15,16], B2=[16,19,20], B3=[20,21,22], B4=[22,25,25]', explanation: '12 sorted records -> 4 equi-depth bins of size 3.' },
          { step: 'Bin Means', state: '[14.67]*3, [18.33]*3, [21.0]*3, [24.0]*3', explanation: 'Replaces each tuple with arithmetic mean of its local bin.' },
          { step: 'Bin Boundaries', state: 'B1->[13,16,16], B2->[16,20,20], B3->[20,20,22], B4->[22,25,25]', explanation: 'In B1: |15-13|=2 > |16-15|=1 => 15 snaps to 16!' },
        ],
        edgeCases: [
          'Out-of-bounds error in Min-Max Normalization: if a future test sample v_test exceeds training max_A, v\'_mm falls outside [0, 1]!',
          'Mean Absolute Deviation s_A = (1/n)*sum(|v_i - mean_A|) can replace standard deviation sigma_A in Z-score to prevent squared outlier blow-up.',
        ],
      },
      takeawayMatrix: {
        caption: 'Comparison of Redundancy Tests & Feature Normalization Techniques',
        headers: ['Technique', 'Applicable Attribute Type', 'Output Range', 'Outlier Sensitivity', 'Primary Use Case'],
        rows: [
          ['Chi-Square (χ²)', 'Nominal / Categorical pairs', '[0, +∞)', 'Sensitive if e_ij < 5', 'Testing nominal redundancy in integration'],
          ['Pearson r_(A,B)', 'Numeric continuous pairs', '[-1.0, +1.0]', 'High (Squared deviations)', 'Detecting linear attribute redundancy'],
          ['Min-Max Norm', 'Numeric -> Bounded interval', 'Exact [new_min, new_max]', 'Very High (Squashes inliers)', 'Neural net [0,1] inputs without outliers'],
          ['Z-Score Norm', 'Numeric -> Standardized', 'Unbounded (~[-3, +3])', 'Moderate (Low if using MAD)', 'Unknown bounds or outlier-heavy features'],
          ['Decimal Scaling', 'Numeric -> Power-of-10 shift', '(-1.0, +1.0)', 'Preserves exact decimal digits', 'Fast interpretable order-of-magnitude scaling'],
        ],
      },
      examSpotlight: {
        weightage: '12–15 Marks (Highest Numerical Yield in IT 401 Unit 1!)',
        highYieldDefinitions: [
          {
            concept: 'Disguised Missing Data',
            preciseStatement: 'Syntactically valid placeholder values entered by users when declining or lacking real values (e.g., entering Jan 1 1900 for birthday or 99999 for ZIP code) that evade standard SQL IS NULL checks and silently corrupt means and regressions.',
          },
        ],
        commonTraps: [
          {
            trap: 'Applying Binning BEFORE sorting the numeric array!',
            correction: 'ALWAYS sort the data in ascending order FIRST before partitioning into Equal-Width or Equal-Frequency bins!',
          },
        ],
        pastPaperPatterns: [
          'Given the sorted age dataset: 13, 15, 16, 16, 19, 20, 20, 21, 22, 22, 25, 25, 25, 30, 33, 33, 35, 35, 35, 35, 36, 40, 45, 46, 52, 70. Smooth by bin means and bin boundaries of depth 3, identify outliers, and normalize 35 using Z-score and Decimal Scaling. (12 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'it401-q3',
          questionType: 'Numerical / Derivation',
          marks: 6,
          question:
            'Given numeric dataset $X = [200, 300, 400, 600, 1000]$, compute (a) Min-Max normalization of $v = 600$ onto $[0, 1]$, and (b) Decimal Scaling of $v = 600$.',
          options: [
            '(a) 0.50, (b) 0.06 (with j = 4)',
            '(a) 0.60, (b) 0.60 (with j = 3)',
            '(a) 0.50, (b) 0.60 (with j = 3)',
            '(a) 0.40, (b) 0.06 (with j = 4)',
          ],
          correctOptionIndex: 0,
          hint: 'Watch max(|X|) = 1000 carefully! If j = 3, 1000 / 10^3 = 1.0, which is NOT strictly < 1!',
          solutionSteps: [
            'Step 1 (Min-Max): min = 200, max = 1000 => v\' = (600 - 200) / (1000 - 200) = 400 / 800 = 0.50.',
            'Step 2 (Decimal Scaling Trap!): Definition requires smallest integer j such that max(|v\'|) < 1 (strictly less than 1!).',
            'Step 3: Since max(|X|) = 1000, testing j = 3 gives 1000 / 1000 = 1.0 (fails < 1). Therefore j = 4 (10^4 = 10,000), giving max(|v\'|) = 0.1 < 1.',
            'Step 4: Thus for v = 600, v\'_d = 600 / 10^4 = 600 / 10,000 = 0.06!',
          ],
          finalConclusion: 'Min-Max = 0.50; Decimal Scaling = 0.06 (j = 4 because 1000/10^3 = 1 is not < 1).',
        },
      ],
    },
    {
      id: 'it401-mod4',
      indexNumber: '04',
      lectureSpan: 'Lectures 09–11',
      referenceBooks: 'R1 (Han & Kamber Ch. 2), R5',
      title: 'Data Preprocessing II: Data Reduction (Cube, Subset Selection, PCA, Wavelets & Sampling)',
      overview: {
        formalDefinition:
          '**Data Reduction** obtains a compressed representation $D_{\\text{red}}$ of a dataset $D$ that is orders of magnitude smaller in volume ($|D_{\\text{red}}| \\ll |D|$ or $d\' \\ll d$) yet **maintains analytical integrity** — meaning data mining on $D_{\\text{red}}$ produces identical or nearly identical analytical patterns in dramatically reduced runtime.',
        highLevelIntuition:
          'Mining algorithms with super-linear complexity suffer from both high tuple count $N$ and the **Curse of Dimensionality** (high attribute count $d$). Data Reduction attacks size across **three axes**: (1) **Data Cube Aggregation** (rolling up granularity), (2) **Dimensionality Reduction** (removing irrelevant attributes via greedy wrappers/trees or projecting orthogonal axes via **PCA** & **Wavelets**), and (3) **Numerosity Reduction** (replacing $N$ points with parametric equations or non-parametric histograms/clusters/samples).',
        coreTheoremLatex:
          '\\text{PCA Objective: } \\max_{\\|\\mathbf{e}_1\\|=1} \\mathbf{e}_1^T \\mathbf{\\Sigma} \\mathbf{e}_1 \\implies \\mathbf{\\Sigma} \\mathbf{e}_k = \\lambda_k \\mathbf{e}_k \\quad (\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_d \\ge 0)',
      },
      keyTerms: [
        {
          term: 'Principal Components Analysis (PCA)',
          definition: 'Karhunen-Loève orthogonal linear projection finding c <= d unit eigenvectors e_1..e_c of the covariance matrix ordered by decreasing variance (eigenvalue lambda_i).',
        },
        {
          term: 'Discrete Wavelet Transform (DWT)',
          definition: 'Linear signal processing transform mapping a length-L data vector into L wavelet coefficients at multi-resolution averages & detail differences, zeroing tiny coefficients in O(L) time.',
        },
        {
          term: 'Attribute Subset Selection',
          definition: 'Removing redundant/irrelevant attributes from 2^d candidates using greedy heuristics (Forward Selection, Backward Elimination, Decision Tree Induction) in O(d^2) evaluations.',
        },
        {
          term: 'Stratified Sampling',
          definition: 'Dividing D into mutually exclusive homogeneous strata (e.g., age or rare fraud classes) and drawing proportional/weighted samples from every stratum so skewed minority classes are never missed.',
        },
      ],
      diagramId: 'it401-reduction-pca',
      diagramCaption:
        'Left: Geometric projection of correlated 2D tuples onto Principal Component e_1 (maximum variance). Right: Four pillars of Data Reduction.',
      technicalSections: [
        {
          id: 'it401-m4-s1',
          title: '4.1 Attribute Subset Selection & Heuristic Search',
          paragraphs: [
            'For $d$ attributes, exhaustive search over all $2^d$ subsets is NP-hard / exponential. Four greedy heuristics using statistical significance or **Information Gain** find near-optimal subsets fast:',
          ],
          bulletPoints: [
            {
              lead: '1. Stepwise Forward Selection',
              detail: 'Starts with empty set {}; iteratively adds the single best remaining attribute at each step until no improvement.',
            },
            {
              lead: '2. Stepwise Backward Elimination',
              detail: 'Starts with full set {A_1..A_d}; iteratively deletes the single worst attribute at each step.',
            },
            {
              lead: '3. Combined Forward Selection & Backward Elimination',
              detail: 'At every step, adds the best new attribute AND prunes any existing attribute whose marginal utility fell below threshold.',
            },
            {
              lead: '4. Decision Tree Induction for Feature Selection',
              detail: 'Constructs a C4.5 / ID3 tree on D; ONLY the attributes appearing at internal split nodes form the reduced attribute subset!',
            },
          ],
        },
        {
          id: 'it401-m4-s2',
          title: '4.2 Dimensionality Reduction: PCA vs. Discrete Wavelet Transform (DWT)',
          paragraphs: [
            '**Principal Components Analysis (PCA) 5-Step Algorithm:** **(1)** Normalize $N \\times d$ matrix $\\mathbf{X}$ to zero mean (and unit variance if units differ). **(2)** Compute $d \\times d$ covariance matrix $\\mathbf{\\Sigma} = \\frac{1}{N-1}\\mathbf{X}^T\\mathbf{X}$. **(3)** Solve characteristic equation $\\det(\\mathbf{\\Sigma} - \\lambda \\mathbf{I}) = 0$ for eigenvalues $\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_d$ and orthonormal eigenvectors $\\mathbf{e}_1, \\dots, \\mathbf{e}_d$. **(4)** Select top $c < d$ eigenvectors capturing $\\frac{\\sum_{i=1}^c \\lambda_i}{\\sum_{j=1}^d \\lambda_j} \\ge 95\\%$ of total variance. **(5)** Project $\\mathbf{Y} = \\mathbf{X} \\mathbf{E}_c$ ($N \\times c$).',
            '**DWT vs. PCA Comparison (Classic Exam Question!):** (1) **Time Complexity:** DWT runs in linear **$O(L)$** time vs PCA’s **$O(d^2 N + d^3)$**; (2) **Sparsity & Locality:** Wavelets preserve spatial/temporal multi-resolution locality (handling spikes/discontinuities cleanly, unlike Fourier DFT or global PCA); (3) **Sparse Data:** PCA handles sparse skewed matrices better in low $d$, whereas DWT excels on high-dimensional ordered signals, time-series, and multidimensional data cubes!',
          ],
        },
        {
          id: 'it401-m4-s3',
          title: '4.3 Numerosity Reduction: Parametric vs. Non-Parametric & Sampling',
          paragraphs: [
            '**Parametric Methods** assume data fits a mathematical model and store **only model parameters** + outliers: *Linear/Multiple Regression* ($y = w_0 + w_1 x_1 + \\dots$) and *Log-Linear Models* (estimating joint probabilities in discrete multi-way contingency cubes using low-order marginals).',
            '**Non-Parametric Methods** assume zero functional shape: **(1) Histograms** (*Equal-Width*, *Equal-Frequency*, *V-Optimal* minimizing intra-bucket variance $\\sum n_i \\text{Var}_i$, and *MaxDiff* splitting at the $\\beta - 1$ largest adjacent value gaps); **(2) Clustering** (replacing points by cluster centroid + radius/diameter); **(3) Sampling**: *SRSWOR* (Simple Random Sample Without Replacement), *SRSWR* (With Replacement), *Cluster Sampling* (if tuples sit on $M$ disk pages, sample $s < M$ whole pages for fast sequential disk I/O!), and *Stratified Sampling* (crucial when class distribution is skewed!). Importantly, **sampling complexity is $O(s)$ — proportional to sample size $s$, sub-linear and independent of database size $N$!**',
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Closed-Form 2D PCA Eigenvector Projection & Haar Wavelet Transform',
        complexity: 'Haar DWT: O(L) | 2D Exact Covariance PCA: O(N)',
        code: `import math

def haar_dwt_1d(signal: list[float]) -> tuple[list[float], list[list[float]]]:
    """Computes Hierarchical Pairwise Averages & Detail Coefficients (Length = 2^k)."""
    cur = list(signal)
    details = []
    while len(cur) > 1:
        avgs = [(cur[i] + cur[i + 1]) / 2.0 for i in range(0, len(cur), 2)]
        diffs = [(cur[i] - cur[i + 1]) / 2.0 for i in range(0, len(cur), 2)]
        details.append(diffs)
        cur = avgs
    coeffs = list(cur)
    for d in reversed(details):
        coeffs.extend(d)
    return coeffs, details

# Classic Haar Exam Example: S = [2, 2, 0, 2, 3, 5, 4, 4]
coeffs, levels = haar_dwt_1d([2, 2, 0, 2, 3, 5, 4, 4])
print("Haar Wavelet Coefficients:", coeffs)`,
        traceTitle: 'Haar Wavelet Pyramid Trace on S = [2, 2, 0, 2, 3, 5, 4, 4] (L = 8)',
        traceSteps: [
          { step: 'Res 4 (Pairs)', state: 'Averages = [2, 1, 4, 4] | Detail d1 = [0, -1, -1, 0]', explanation: '(2+2)/2=2, (0+2)/2=1, (3+5)/2=4, (4+4)/2=4; diffs=(a-b)/2.' },
          { step: 'Res 2', state: 'Averages = [1.5, 4.0]   | Detail d2 = [0.5, 0.0]', explanation: '(2+1)/2=1.5, (4+4)/2=4; diffs: (2-1)/2=0.5, (4-4)/2=0.' },
          { step: 'Res 1 (Overall Mean)', state: 'Average  = [2.75]       | Detail d3 = [-1.25]', explanation: '(1.5+4.0)/2 = 2.75; diff = (1.5-4.0)/2 = -1.25.' },
          { step: 'Final Compressed Vector', state: '[2.75, -1.25, 0.5, 0, 0, -1, -1, 0]', explanation: '3 out of 8 coefficients are already exact 0! Keeping top 3 reconstructs trend.' },
        ],
        edgeCases: [
          'In Haar DWT, input length L must be a power of 2; pad trailing zeros if L != 2^k (and normalize by 1/sqrt(2) instead of 1/2 when strict orthonormal energy preservation is required).',
        ],
      },
      takeawayMatrix: {
        caption: 'Comparison of Major Data Reduction Families',
        headers: ['Method', 'Reduction Axis', 'Lossless or Lossy?', 'Time Complexity', 'Ideal Scenario'],
        rows: [
          ['Data Cube Aggregation', 'Granularity Roll-up', 'Lossless at summary level', 'O(N) cuboid build', 'OLAP analytical queries across time/geo'],
          ['Attribute Subset (Tree/Greedy)', 'Attributes (d -> d\')', 'Drops irrelevant columns', 'O(d^2 * N)', 'High-d tabular classification'],
          ['PCA (Karhunen-Loève)', 'Orthogonal Axes (d -> c)', 'Lossy (controllable >=95%)', 'O(d^2 N + d^3)', 'Collinear continuous numeric features'],
          ['Haar / Daubechies DWT', 'Signal Coeffs (L -> k)', 'Lossy thresholded', 'O(L) Linear!', 'Time-series, streams, high-d cubes'],
          ['Stratified / Cluster Sampling', 'Tuples (N -> s)', 'Probabilistic lossy', 'O(s) Sub-linear!', 'Exploratory mining on skewed/disk-paged DBs'],
        ],
      },
      examSpotlight: {
        weightage: '8–10 Marks (PCA vs DWT, Histogram Types V-Optimal vs MaxDiff, Sampling)',
        highYieldDefinitions: [
          {
            concept: 'V-Optimal vs. MaxDiff Histograms',
            preciseStatement: 'V-Optimal considers all possible histogram bucketings for b buckets and selects the one with minimum weighted variance sum_{i=1}^b n_i * Var_i; MaxDiff places bucket boundaries between the b - 1 adjacent sorted pairs having the largest difference (gap) — both far outperform simple Equal-Width!',
          },
        ],
        commonTraps: [
          {
            trap: 'Confusing Cluster Sampling with Clustering-based Reduction.',
            correction: 'Cluster Sampling samples s physical storage blocks/pages (e.g., 5 out of 1000 disk pages) to reduce random disk seeks; Clustering-based Reduction runs K-Means/CLARANS to replace data tuples by cluster centroids!',
          },
        ],
        pastPaperPatterns: [
          'Explain Principal Components Analysis (PCA) step-by-step for dimensionality reduction. How does Discrete Wavelet Transform (DWT) compare against PCA? Compute the Haar wavelet transform of [2, 2, 0, 2, 3, 5, 4, 4]. (10 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'it401-q4',
          questionType: 'Numerical / Derivation',
          marks: 5,
          question:
            'A $4$-dimensional dataset undergoes PCA, yielding covariance eigenvalues $\\lambda_1 = 6.2, \\lambda_2 = 2.8, \\lambda_3 = 0.7, \\lambda_4 = 0.3$. What percentage of total variance is retained if we reduce dimensionality from $d = 4$ to $c = 2$ principal components?',
          options: ['62%', '85%', '90%', '97%'],
          correctOptionIndex: 2,
          hint: 'Proportion of variance retained = (lambda_1 + lambda_2) / (lambda_1 + lambda_2 + lambda_3 + lambda_4).',
          solutionSteps: [
            'Step 1: Total variance = trace(Sigma) = sum of all eigenvalues = 6.2 + 2.8 + 0.7 + 0.3 = 10.0.',
            'Step 2: Variance captured by top c = 2 components = 6.2 + 2.8 = 9.0.',
            'Step 3: Retained variance ratio = 9.0 / 10.0 = 0.90 = 90%.',
          ],
          finalConclusion: '90% of total dataset variance is preserved using half the dimensions (c = 2).',
        },
      ],
    },
    {
      id: 'it401-mod5',
      indexNumber: '05',
      lectureSpan: 'Lectures 12–15',
      referenceBooks: 'R1 (Han & Kamber Ch. 2 & Ch. 4), R3',
      title: 'Discretization, Concept Hierarchies & Attribute-Oriented Induction (AOI)',
      overview: {
        formalDefinition:
          '**Data Discretization** partitions the continuous domain of a numeric attribute into a small finite set of interval labels, enabling **Concept Hierarchy Generation** ($\\text{low-level raw concepts} \\to \\text{higher-level generalized abstractions}$). **Attribute-Oriented Induction (AOI)** (Lectures 13–15) leverages these concept hierarchies to perform linear-time **Data Generalization, Summarization, and Analytical Characterization**.',
        highLevelIntuition:
          'Decision trees (ID3) and association algorithms cannot directly split raw real numbers like `$47,312.84` into meaningful human rules without discretization, nor can OLAP summarize categorical text attributes (like `street -> city -> state -> country`) without a **Concept Hierarchy**. Notice that Lectures 13–15 of Dr. Bharti Nathani’s schedule specifically spotlight **AOI & Analytical Characterization** — a high-scoring differentiator in Banasthali exams!',
        coreTheoremLatex:
          'I(S_1, S_2) = \\frac{|S_1|}{|S|}\\text{Ent}(S_1) + \\frac{|S_2|}{|S|}\\text{Ent}(S_2), \\qquad \\text{Ent}(S_k) = -\\sum_{i=1}^{m} p_i \\log_2(p_i)',
      },
      keyTerms: [
        {
          term: 'Supervised vs. Unsupervised Discretization',
          definition: 'Supervised methods (Entropy-based, ChiMerge) utilize class label purity when placing split/merge boundaries; Unsupervised methods (Binning, Histograms, 3-4-5 Rule, Clustering) ignore class labels.',
        },
        {
          term: '3-4-5 Rule',
          definition: 'Intuitive unsupervised natural-partitioning heuristic splitting numeric ranges recursively into 3, 4, or 5 human-friendly round intervals based on the count of distinct values at the Most Significant Digit (MSD).',
        },
        {
          term: 'Attribute-Oriented Induction (AOI)',
          definition: 'Relational set-oriented generalization technique (Cai, Cercone & Han) replacing low-level attribute values with higher-level concept hierarchy ancestors via Attribute Removal and Attribute Generalization.',
        },
        {
          term: 'Analytical Characterization',
          definition: 'Enhanced AOI workflow that first runs attribute relevance analysis (via Information Gain / Symmetrical Uncertainty) to eliminate weakly relevant attributes BEFORE generalizing!',
        },
      ],
      diagramId: 'it401-discretization-aoi',
      diagramCaption:
        'Left: 3-4-5 Natural Partitioning interval rules by Most Significant Digit span. Right: 4-Level Categorical Concept Hierarchy.',
      technicalSections: [
        {
          id: 'it401-m5-s1',
          title: '5.1 Discretization Methods: Entropy-Based, ChiMerge & The 3-4-5 Rule',
          paragraphs: [
            '**1. Entropy-Based Discretization (Supervised, Top-Down Splitting):** Given sorted tuples $S$ with $m$ classes, evaluate candidate midpoint boundaries $T$ partitioning $S$ into $S_1 (A \\le T)$ and $S_2 (A > T)$. Pick $T^*$ **minimizing expected class entropy** $I(S, T) = \\frac{|S_1|}{|S|}\\text{Ent}(S_1) + \\frac{|S_2|}{|S|}\\text{Ent}(S_2)$ (maximizing Information Gain). Recurse until $\\text{Ent} - I$ fails the **Minimum Description Length Principle (MDLP)** stopping criterion.',
            '**2. ChiMerge (Supervised, Bottom-Up Merging):** Initially treat each distinct value as its own micro-interval. Compute $\\chi^2$ for every **adjacent pair** of intervals; merge the pair with the **SMALLEST $\\chi^2$ value** (because small $\\chi^2$ means both intervals have nearly identical class distributions and are independent of the boundary!). Repeat until all adjacent pairs exceed significance threshold.',
            '**3. Natural Partitioning via 3-4-5 Rule (Unsupervised):** First clip extreme tails by taking `[5th percentile, 95th percentile]` range $[\\text{low}, \\text{high}]$ rounded outward at the Most Significant Digit $msd$: if the range spans **3, 6, or 9** distinct values at $msd$, split into **3 equal intervals** (or **2-3-2** if **7** values); if **2, 4, or 8**, split into **4 equal intervals**; if **1, 5, or 10**, split into **5 equal intervals**.',
          ],
        },
        {
          id: 'it401-m5-s2',
          title: '5.2 Concept Hierarchy Generation for Categorical / Nominal Data',
          paragraphs: [
            'Nominal attributes have discrete unordered strings (`city`, `branch`, `item_category`). Four methods define their Concept Hierarchies: **(1)** Explicit partial/total ordering at schema level by DBA (`street < city < state < country`); **(2)** Explicit data grouping (`{Rajasthan, Gujarat} -> Western_India`); **(3)** **Automatic Hierarchy Generation by Distinct-Value Count** — among semantically linked attributes, **the attribute with the MOST distinct values is placed at the LOWEST level of the hierarchy**, and the one with the fewest distinct values at the highest! Example: `country (15 distinct) > state (365 distinct) > city (3,567 distinct) > street (674,339 distinct)`. *(Exception: time dimensions like `day_of_week (7)` vs `month (12)` require semantic override!)*',
          ],
        },
        {
          id: 'it401-m5-s3',
          title: '5.3 Data Generalization, Summarization & Analytical Characterization (Lectures 13–15)',
          paragraphs: [
            'Whereas OLAP provides user-controlled interactive drilling on prebuilt cubes, **Attribute-Oriented Induction (AOI)** automates offline relational generalization in a single relational scan ($O(N)$) using two core operators controlled by two thresholds:',
          ],
          bulletPoints: [
            {
              lead: 'Operator 1 — Attribute Removal',
              detail: 'If an attribute A has a huge number of distinct values (e.g., student_name, phone_no, street_address) AND there is NO higher-level concept hierarchy defined for A (or its higher level is already expressed by other attributes), REMOVE A completely!',
            },
            {
              lead: 'Operator 2 — Attribute Generalization (Concept Tree Ascension)',
              detail: 'If A has many distinct values AND a concept hierarchy exists for A, climb the hierarchy replacing low-level values (e.g., "CS", "IT", "Physics" -> "Science_&_Engg") and merge identical generalized tuples while summing their `count` aggregate!',
            },
            {
              lead: 'Threshold Control (Attribute Threshold vs. Generalized Relation Threshold)',
              detail: 'Attribute Threshold T_a bounds distinct values per attribute (typically 2 to 8); Generalized Relation Threshold T_r bounds total rows in the final generalized table (typically 10 to 30), presented as Generalized Crosstabs, Bar/Pie Charts, or Quantitative Characteristic Rules with `t_weight`!',
            },
            {
              lead: 'Why Analytical Characterization is Needed Over Basic AOI',
              detail: 'When a table has 80+ attributes, basic AOI keeps too many weakly relevant attributes (producing huge cluttered rules) or drops relevant ones arbitrarily. Analytical Characterization adds a pre-filtering step computing Information Gain for every attribute w.r.t. target vs contrasting classes, discarding irrelevant/weakly-relevant attributes BEFORE running AOI!',
            },
          ],
        },
      ],
      codeImplementation: {
        language: 'Python',
        title: 'Automatic Nominal Concept Hierarchy Sorter & 3-4-5 Partitioning Rule Engine',
        complexity: 'Distinct-Count Hierarchy: O(d * N) | 3-4-5 Rule Step: O(1)',
        code: `import math

def auto_nominal_hierarchy(records: list[dict[str, str]], attrs: list[str]) -> list[tuple[str, int]]:
    """Orders attributes top-down (Root -> Leaf) by ascending distinct value count."""
    counts = [(a, len({row[a] for row in records})) for a in attrs]
    return sorted(counts, key=lambda x: x[1])

def apply_3_4_5_rule_top_level(low_5pct: float, high_95pct: float) -> dict:
    """Computes rounded MSD bounds and top-level 3-4-5 natural intervals."""
    span = high_95pct - low_5pct
    power = 10 ** math.floor(math.log10(span))
    lo_msd = math.floor(low_5pct / power) * power
    hi_msd = math.ceil(high_95pct / power) * power
    m = round((hi_msd - lo_msd) / power)
    if m in (3, 6, 9):
        parts = [lo_msd + i * (hi_msd - lo_msd) / 3 for i in range(4)]
        rule = f"{m} MSDs -> 3 equal intervals"
    elif m == 7:
        parts = [lo_msd, lo_msd + 2 * power, lo_msd + 5 * power, hi_msd]
        rule = "7 MSDs -> 2-3-2 unequal natural intervals"
    elif m in (2, 4, 8):
        parts = [lo_msd + i * (hi_msd - lo_msd) / 4 for i in range(5)]
        rule = f"{m} MSDs -> 4 equal intervals"
    else:  # 1, 5, 10
        parts = [lo_msd + i * (hi_msd - lo_msd) / 5 for i in range(6)]
        rule = f"{m} MSDs -> 5 equal intervals"
    return {"msd_unit": power, "distinct_msds": m, "rule": rule, "boundaries": parts}`,
        traceTitle: 'Han & Kamber Profit Range [-$159,876 .. +$1,838,761] 3-4-5 Rule Trace',
        traceSteps: [
          { step: '1. Clip 5th–95th Pct', state: 'low = -$159,876, high = +$1,838,761', explanation: 'Ignores catastrophic -$351M bankruptcy outlier so intervals stay meaningful.' },
          { step: '2. Round Outward at MSD', state: 'MSD = $1,000,000 -> [-$1,000,000 .. +$2,000,000]', explanation: 'Floor(-0.159M) = -1M; Ceil(+1.838M) = +2M.' },
          { step: '3. Count MSD Span', state: '(+2M - (-1M)) / 1M = 3 distinct million-dollar units', explanation: '3 is in {3, 6, 9} => Partition into 3 equal intervals!' },
          { step: '4. Top-Level Intervals', state: '[-$1M..$0], ($0..+$1M], (+$1M..+$2M]', explanation: 'Clean human-readable financial bands (plus tail buckets at ends).' },
        ],
        edgeCases: [
          'Distinct-value heuristic trap: "Month" (12 values) vs "Day_of_Week" (7 values) — naive counting puts Day_of_Week ABOVE Month, even though weeks cross month boundaries! Domain metadata overrides such calendar anomalies.',
        ],
      },
      takeawayMatrix: {
        caption: 'Comparison of Discretization & Generalization Techniques',
        headers: ['Technique', 'Supervision', 'Direction', 'Core Criterion', 'Strengths / Limitations'],
        rows: [
          ['Binning / Histograms', 'Unsupervised', 'Top-Down', 'Equal width or equal count', 'Very fast O(N log N); ignores class boundaries'],
          ['3-4-5 Rule', 'Unsupervised', 'Top-Down', 'MSD span count (3,4,5,2-3-2)', 'Produces intuitive human-readable round numbers'],
          ['Entropy Discretization', 'Supervised', 'Top-Down Split', 'Min expected class entropy + MDLP', 'High classification accuracy; needs class labels'],
          ['ChiMerge (χ²)', 'Supervised', 'Bottom-Up Merge', 'Merge adjacent pair with min χ²', 'Statistically rigorous class-distribution merging'],
          ['AOI / Analytical Char.', 'Class-Targeted', 'Bottom-Up Climb', 'Attribute Removal + Tree Ascension', 'Linear O(N) relational summarization + t_weight'],
        ],
      },
      examSpotlight: {
        weightage: '10 Marks (3-4-5 Rule + Automatic Concept Hierarchy + AOI vs Analytical Characterization)',
        highYieldDefinitions: [
          {
            concept: 't-weight vs. d-weight in AOI Rules',
            preciseStatement: 'In a characteristic rule TargetClass(X) => Condition(X) [t: w%], t_weight is the percentage of target class tuples satisfying Condition(X) (typicality). In a discriminant rule Cond(X) => TargetClass(X) [d: v%], d_weight is the probability a tuple satisfying Cond(X) belongs to TargetClass rather than contrasting classes (discriminative power).',
          },
        ],
        commonTraps: [
          {
            trap: 'In ChiMerge, merging the pair of adjacent intervals with the LARGEST chi-square value.',
            correction: 'OPPOSITE! Large χ² means the two intervals have DIFFERENT class distributions (keep split!). ChiMerge merges the adjacent pair with the SMALLEST χ² value!',
          },
        ],
        pastPaperPatterns: [
          'Explain the 3-4-5 Rule for numeric concept hierarchy generation with a suitable financial example. How are concept hierarchies generated automatically for categorical data? (10 Marks)',
          'What is Attribute-Oriented Induction (AOI)? Differentiate between Attribute Removal and Attribute Generalization, and explain how Analytical Characterization improves AOI. (10 Marks)',
        ],
      },
      practiceQuestions: [
        {
          id: 'it401-q5',
          questionType: 'Conceptual / Analytical',
          marks: 5,
          question:
            'In a university relational database, four location attributes have the following distinct counts: `street` ($42,100$), `country` ($8$), `city` ($640$), and `state` ($52$). What automatic concept hierarchy order (from **most general root** to **most specific leaf**) is generated, and under what condition does **AOI** perform **Attribute Removal** on `student_roll_no`?',
          options: [
            'country -> state -> city -> street; removed because roll_no has massive distinct values and NO higher-level concept hierarchy.',
            'street -> city -> state -> country; removed because roll_no is numeric.',
            'country -> city -> state -> street; generalized via 3-4-5 rule.',
            'state -> country -> city -> street; kept as primary key in generalized table.',
          ],
          correctOptionIndex: 0,
          hint: 'Fewer distinct values = higher abstraction level; unique identifiers have no meaningful generalizations.',
          solutionSteps: [
            'Step 1: Sort distinct counts ascending for top-down abstraction: country (8) < state (52) < city (640) < street (42,100).',
            'Step 2: Resulting hierarchy: ALL -> country -> state -> city -> street.',
            'Step 3: For `student_roll_no`, distinct values equal N (every tuple unique), exceeding attribute threshold T_a, and no higher-level concept tree exists -> AOI applies Attribute Removal!',
          ],
          finalConclusion: 'Hierarchy: country > state > city > street; `student_roll_no` undergoes Attribute Removal.',
        },
      ],
    },
  ],
};
