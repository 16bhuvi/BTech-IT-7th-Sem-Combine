export type DiagramId =
  | 'it410-osi-symmetric'
  | 'it410-playfair-euclid'
  | 'it410-gf-feistel'
  | 'it410-des-3des'
  | 'it410-block-modes'
  | 'it410-stream-otp-cryptanalysis'
  | 'it401-kdd-pipeline'
  | 'it401-dm-taxonomy'
  | 'it401-cleaning-integration'
  | 'it401-reduction-pca'
  | 'it401-discretization-aoi'
  | 'cs411-crt-architecture'
  | 'cs411-raster-vs-random'
  | 'cs411-color-crt-dvst'
  | 'cs411-flatpanel-clut'
  | 'cs411-input-construction'
  | 'elec-iot-architecture'
  | 'elec-iot-sdn-fog'
  | 'elec-bda-4vs-lifecycle'
  | 'elec-bda-ensemble';

export interface KeyTerm {
  term: string;
  definition: string;
  formula?: string;
  examNote?: string;
}

export interface SubConceptSection {
  id: string;
  title: string;
  paragraphs: string[];
  equations?: {
    label: string;
    latex: string;
    explanation: string;
  }[];
  bulletPoints?: {
    lead: string;
    detail: string;
  }[];
  workedExample?: {
    title: string;
    problemStatement: string;
    steps: string[];
    finalAnswer: string;
  };
}

export interface CodeAndTraceBlock {
  language: 'Python' | 'C++' | 'Java';
  title: string;
  code: string;
  complexity: string;
  traceTitle: string;
  traceSteps: {
    step: string;
    state: string;
    explanation: string;
  }[];
  edgeCases: string[];
}

export interface TakeawayMatrix {
  caption: string;
  headers: string[];
  rows: string[][];
}

export interface ExamSpotlightBlock {
  weightage: string;
  highYieldDefinitions: {
    concept: string;
    preciseStatement: string;
  }[];
  commonTraps: {
    trap: string;
    correction: string;
  }[];
  pastPaperPatterns: string[];
}

export interface ExamPracticeQuestion {
  id: string;
  questionType: 'Numerical / Derivation' | 'Conceptual / Analytical' | 'Architecture / Proof';
  marks: number;
  question: string;
  options?: string[];
  correctOptionIndex?: number;
  hint: string;
  solutionSteps: string[];
  finalConclusion: string;
}

export interface StudyModule {
  id: string;
  indexNumber: string;
  lectureSpan: string;
  referenceBooks: string;
  title: string;
  overview: {
    formalDefinition: string;
    highLevelIntuition: string;
    coreTheoremLatex?: string;
  };
  keyTerms: KeyTerm[];
  diagramId: DiagramId;
  diagramCaption: string;
  technicalSections: SubConceptSection[];
  codeImplementation: CodeAndTraceBlock;
  takeawayMatrix: TakeawayMatrix;
  examSpotlight: ExamSpotlightBlock;
  practiceQuestions: ExamPracticeQuestion[];
}

export interface FormulaVaultItem {
  id: string;
  category: string;
  name: string;
  latex: string;
  variables: string;
  complexityOrBound: string;
  examContext: string;
}

export interface HandoutAsset {
  id: string;
  title: string;
  subtitle: string;
  type: 'image' | 'pdf';
  src: string;
  notes: string;
}

export interface SubjectCourse {
  id: 'it410' | 'it401' | 'cs411' | 'electives';
  code: string;
  shortTitle: string;
  fullTitle: string;
  instructor: string;
  credits: number;
  maxMarks: string;
  examSchedule: {
    periodicalTest1: string;
    assignment1: string;
    semesterExam: string;
  };
  syllabusVerbatim: string;
  courseOutcomes: string[];
  recommendedBooks: string[];
  modules: StudyModule[];
  formulas: FormulaVaultItem[];
  handouts: HandoutAsset[];
}
