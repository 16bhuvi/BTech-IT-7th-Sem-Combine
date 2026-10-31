import React, { useState } from 'react';
import {
  Check,
  ChevronDown,
  ChevronUp,
  Copy,
  CheckCheck,
  BookOpen,
  Code2,
  ListChecks,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';
import { StudyModule } from '../types/study';
import { MathTex, RichAcademicText } from './MathTex';
import { AcademicDiagram } from './diagrams/AcademicDiagram';

interface TopicCardProps {
  module: StudyModule;
  completedIds: Record<string, boolean>;
  onToggleComplete: (id: string) => void;
}

export const TopicCard: React.FC<TopicCardProps> = ({
  module,
  completedIds,
  onToggleComplete,
}) => {
  const [codeTab, setCodeTab] = useState<'code' | 'trace' | 'edge'>('code');
  const [copied, setCopied] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});
  const [activeTermIdx, setActiveTermIdx] = useState<number | null>(null);

  const isModuleDone = Boolean(completedIds[module.id]);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(module.codeImplementation.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const toggleSubSection = (secId: string) => {
    setCollapsedSections((prev) => ({ ...prev, [secId]: !prev[secId] }));
  };

  return (
    <article
      id={module.id}
      className="rounded-xl bg-[#1e1e24] border border-white/[0.08] p-6 sm:p-8 space-y-8 scroll-mt-24"
    >
      {/* Module Header + Mastery Checkbox */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="space-y-2 max-w-3xl">
          {/* Zero-Pill Metadata Line */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#9ca3af] font-mono">
            <span className="text-[#60a5fa]">Module {module.indexNumber}</span>
            <span aria-hidden="true">·</span>
            <span>{module.lectureSpan}</span>
            <span aria-hidden="true">·</span>
            <span>{module.referenceBooks}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#f3f4f6] tracking-tight leading-snug [text-wrap:balance]">
            {module.indexNumber}. {module.title}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => onToggleComplete(module.id)}
          className={`flex items-center gap-2.5 px-4 py-2 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap shrink-0 self-start ${
            isModuleDone
              ? 'bg-[#2563eb]/20 border-[#3b82f6] text-[#f3f4f6]'
              : 'bg-[#121216] border-white/10 text-[#9ca3af] hover:text-[#f3f4f6] hover:border-white/25'
          }`}
        >
          <span
            className={`w-4 h-4 rounded flex items-center justify-center border ${
              isModuleDone
                ? 'bg-[#2563eb] border-[#3b82f6] text-[#f3f4f6]'
                : 'border-white/25 bg-transparent'
            }`}
          >
            {isModuleDone && <Check className="w-3 h-3" />}
          </span>
          <span>{isModuleDone ? 'Module Mastered' : 'Mark Module Mastered'}</span>
        </button>
      </div>

      {/* 1. Overview & Core Concept */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-[#60a5fa] tracking-wide">
            Overview &amp; Core Concept
          </h3>
          <span className="text-xs text-[#9ca3af]">
            Hover or click dotted terms in prose for quick definitions
          </span>
        </div>

        <div className="rounded-lg bg-[#121216] border border-white/[0.07] p-5 space-y-3.5">
          <p className="text-[15px] leading-relaxed text-[#f3f4f6]/95">
            <RichAcademicText
              text={module.overview.formalDefinition}
              keyTerms={module.keyTerms}
            />
          </p>
          <p className="text-[15px] leading-relaxed text-[#9ca3af]">
            <RichAcademicText
              text={module.overview.highLevelIntuition}
              keyTerms={module.keyTerms}
            />
          </p>
          {module.overview.coreTheoremLatex && (
            <div className="pt-3 border-t border-white/[0.07]">
              <div className="text-[11px] font-mono text-[#9ca3af] mb-1">
                Governing Mathematical Relation:
              </div>
              <MathTex math={module.overview.coreTheoremLatex} display />
            </div>
          )}
        </div>

        {/* Interactive Key Term Cards */}
        <div className="space-y-2.5">
          <div className="text-xs font-medium text-[#9ca3af]">
            Interactive Key Terms Glossary (Click to inspect definition &amp; exam note):
          </div>
          <div className="flex flex-wrap gap-2">
            {module.keyTerms.map((kt, idx) => {
              const isOpen = activeTermIdx === idx;
              return (
                <button
                  key={kt.term}
                  type="button"
                  onClick={() => setActiveTermIdx(isOpen ? null : idx)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                    isOpen
                      ? 'bg-[#2563eb] border-[#3b82f6] text-[#f3f4f6]'
                      : 'bg-[#121216] border-white/10 text-[#f3f4f6]/85 hover:border-[#3b82f6]/60'
                  }`}
                >
                  {kt.term}
                </button>
              );
            })}
          </div>
          {activeTermIdx !== null && module.keyTerms[activeTermIdx] && (
            <div className="rounded-lg bg-[#121216] border border-[#3b82f6]/40 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#60a5fa]">
                  {module.keyTerms[activeTermIdx].term}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTermIdx(null)}
                  className="text-xs text-[#9ca3af] hover:text-[#f3f4f6]"
                >
                  Close
                </button>
              </div>
              <p className="text-sm leading-relaxed text-[#f3f4f6]/90">
                <RichAcademicText text={module.keyTerms[activeTermIdx].definition} />
              </p>
              {module.keyTerms[activeTermIdx].formula && (
                <div className="pt-1 text-sm text-[#06b6d4]">
                  <MathTex math={module.keyTerms[activeTermIdx].formula!} />
                </div>
              )}
              {module.keyTerms[activeTermIdx].examNote && (
                <p className="text-xs text-[#9ca3af] pt-1 border-t border-white/[0.06]">
                  Exam Tip: {module.keyTerms[activeTermIdx].examNote}
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Architectural SVG Diagram */}
      <AcademicDiagram diagramId={module.diagramId} caption={module.diagramCaption} />

      {/* 2. Detailed Technical Breakdown (Collapsible Accordions + Sub-Checkboxes) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-[#60a5fa] tracking-wide flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#3b82f6]" />
            <span>Detailed Technical Breakdown</span>
          </h3>
          <span className="text-xs text-[#9ca3af] font-mono">
            {module.technicalSections.length} Sub-Topics
          </span>
        </div>

        <div className="space-y-4">
          {module.technicalSections.map((sec) => {
            const isCollapsed = Boolean(collapsedSections[sec.id]);
            const isSecDone = Boolean(completedIds[sec.id]);

            return (
              <div
                key={sec.id}
                className="rounded-lg bg-[#121216] border border-white/[0.08] overflow-hidden"
              >
                <div className="flex items-center justify-between gap-3 px-5 py-3.5 bg-[#16161c] border-b border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => toggleSubSection(sec.id)}
                    className="flex items-center gap-3 text-left flex-1 focus:outline-none"
                  >
                    {isCollapsed ? (
                      <ChevronDown className="w-4 h-4 text-[#60a5fa] shrink-0" />
                    ) : (
                      <ChevronUp className="w-4 h-4 text-[#60a5fa] shrink-0" />
                    )}
                    <span className="text-[15px] font-semibold text-[#f3f4f6]">
                      {sec.title}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onToggleComplete(sec.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs border transition-colors whitespace-nowrap shrink-0 ${
                      isSecDone
                        ? 'bg-[#2563eb]/20 border-[#3b82f6] text-[#60a5fa]'
                        : 'bg-[#0a0a0c] border-white/10 text-[#9ca3af] hover:text-[#f3f4f6]'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    <span>{isSecDone ? 'Reviewed' : 'Mark Read'}</span>
                  </button>
                </div>

                {!isCollapsed && (
                  <div className="p-5 space-y-4">
                    {sec.paragraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className="text-[15px] leading-[1.7] text-[#f3f4f6]/90"
                      >
                        <RichAcademicText text={p} keyTerms={module.keyTerms} />
                      </p>
                    ))}

                    {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                      <ul className="space-y-2.5 pt-1">
                        {sec.bulletPoints.map((bp, bIdx) => (
                          <li
                            key={bIdx}
                            className="p-3.5 rounded-md bg-[#0a0a0c] border border-white/[0.06] text-sm leading-relaxed"
                          >
                            <span className="font-semibold text-[#60a5fa] block sm:inline">
                              {bp.lead}:{' '}
                            </span>
                            <span className="text-[#f3f4f6]/88">
                              <RichAcademicText
                                text={bp.detail}
                                keyTerms={module.keyTerms}
                              />
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.equations && sec.equations.length > 0 && (
                      <div className="space-y-3 pt-1">
                        {sec.equations.map((eq, eIdx) => (
                          <div
                            key={eIdx}
                            className="rounded-md bg-[#0a0a0c] border border-[#2563eb]/35 p-4 space-y-1.5"
                          >
                            <div className="text-xs font-mono font-medium text-[#60a5fa]">
                              {eq.label}
                            </div>
                            <MathTex math={eq.latex} display />
                            <p className="text-xs leading-relaxed text-[#9ca3af]">
                              <RichAcademicText text={eq.explanation} />
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {sec.workedExample && (
                      <div className="rounded-lg bg-[#0a0a0c] border border-[#06b6d4]/35 p-4 sm:p-5 space-y-3">
                        <div className="text-xs font-mono font-semibold text-[#06b6d4]">
                          {sec.workedExample.title}
                        </div>
                        <p className="text-sm font-medium text-[#f3f4f6]">
                          Problem: <RichAcademicText text={sec.workedExample.problemStatement} />
                        </p>
                        <ol className="space-y-1.5 text-xs sm:text-sm font-mono text-[#f3f4f6]/88">
                          {sec.workedExample.steps.map((st, sIdx) => (
                            <li key={sIdx} className="leading-relaxed">
                              <RichAcademicText text={st} />
                            </li>
                          ))}
                        </ol>
                        <div className="pt-2 border-t border-white/10 text-xs sm:text-sm font-semibold text-[#60a5fa] font-mono">
                          Final Answer: {sec.workedExample.finalAnswer}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Tabbed Interface: Code Implementation vs. Step-by-Step Dry Run vs. Edge Cases */}
      <section className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-[#3b82f6]" />
            <h3 className="text-sm font-semibold text-[#60a5fa]">
              Algorithmic Implementation &amp; Dry-Run Verification ({module.codeImplementation.language})
            </h3>
          </div>

          <div className="flex items-center gap-1 p-1 rounded-lg bg-[#121216] border border-white/10">
            <button
              type="button"
              onClick={() => setCodeTab('code')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                codeTab === 'code'
                  ? 'bg-[#2563eb] text-[#f3f4f6]'
                  : 'text-[#9ca3af] hover:text-[#f3f4f6]'
              }`}
            >
              Working {module.codeImplementation.language} Code
            </button>
            <button
              type="button"
              onClick={() => setCodeTab('trace')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                codeTab === 'trace'
                  ? 'bg-[#2563eb] text-[#f3f4f6]'
                  : 'text-[#9ca3af] hover:text-[#f3f4f6]'
              }`}
            >
              Step-by-Step Trace
            </button>
            <button
              type="button"
              onClick={() => setCodeTab('edge')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                codeTab === 'edge'
                  ? 'bg-[#2563eb] text-[#f3f4f6]'
                  : 'text-[#9ca3af] hover:text-[#f3f4f6]'
              }`}
            >
              Complexity &amp; Edge Cases
            </button>
          </div>
        </div>

        <div className="rounded-lg bg-[#0a0a0c] border border-white/[0.09] overflow-hidden">
          <div className="flex items-center justify-between gap-4 px-4 py-2.5 bg-[#121216] border-b border-white/[0.07]">
            <div className="text-xs text-[#f3f4f6] font-medium truncate">
              {module.codeImplementation.title}
              <span className="text-[#9ca3af] font-mono ml-2">
                · {module.codeImplementation.complexity}
              </span>
            </div>
            {codeTab === 'code' && (
              <button
                type="button"
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1e1e24] border border-white/10 text-xs text-[#f3f4f6] hover:border-[#3b82f6] transition-colors whitespace-nowrap shrink-0"
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-3.5 h-3.5 text-[#06b6d4]" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#9ca3af]" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            )}
          </div>

          {codeTab === 'code' && (
            <pre className="p-4 sm:p-5 text-xs sm:text-[13px] leading-relaxed font-mono text-[#f3f4f6] overflow-x-auto">
              <code>{module.codeImplementation.code}</code>
            </pre>
          )}

          {codeTab === 'trace' && (
            <div className="p-4 sm:p-5 space-y-3">
              <div className="text-xs font-semibold text-[#06b6d4] font-mono">
                {module.codeImplementation.traceTitle}
              </div>
              <div className="divide-y divide-white/[0.07] border border-white/[0.07] rounded-md overflow-hidden">
                {module.codeImplementation.traceSteps.map((tr, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-12 gap-2 p-3 bg-[#121216] text-xs"
                  >
                    <div className="md:col-span-3 font-mono font-semibold text-[#60a5fa]">
                      {tr.step}
                    </div>
                    <div className="md:col-span-5 font-mono text-[#f3f4f6]">
                      {tr.state}
                    </div>
                    <div className="md:col-span-4 text-[#9ca3af]">{tr.explanation}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {codeTab === 'edge' && (
            <div className="p-4 sm:p-5 space-y-3">
              <div className="text-xs font-mono text-[#60a5fa]">
                Asymptotic Bound: {module.codeImplementation.complexity}
              </div>
              <ul className="space-y-2">
                {module.codeImplementation.edgeCases.map((ec, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded bg-[#121216] border border-white/[0.06] text-xs sm:text-sm text-[#f3f4f6]/90 leading-relaxed"
                  >
                    <span className="font-semibold text-[#06b6d4]">Edge Case {idx + 1}: </span>
                    <RichAcademicText text={ec} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 4. Key Takeaway Matrix */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-[#60a5fa]">
          Key Takeaway Matrix — {module.takeawayMatrix.caption}
        </h3>
        <div className="overflow-x-auto rounded-lg border border-white/[0.09] bg-[#121216]">
          <table className="w-full text-left border-collapse text-xs sm:text-sm tabular-nums">
            <thead>
              <tr className="bg-[#0a0a0c] border-b border-white/10">
                {module.takeawayMatrix.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 font-semibold text-[#60a5fa] whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.06]">
              {module.takeawayMatrix.rows.map((row, rIdx) => (
                <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`px-4 py-3 leading-relaxed ${
                        cIdx === 0
                          ? 'font-semibold text-[#f3f4f6] whitespace-nowrap'
                          : 'text-[#f3f4f6]/85'
                      }`}
                    >
                      <RichAcademicText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Exam Spotlight */}
      <section className="rounded-lg bg-[#121216] border border-[#2563eb]/35 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.07]">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#06b6d4]" />
            <h3 className="text-sm font-semibold text-[#f3f4f6]">
              Exam Spotlight — High-Weightage Traps &amp; University Blueprint
            </h3>
          </div>
          <span className="text-xs font-mono text-[#60a5fa]">
            Expected Weightage: {module.examSpotlight.weightage}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-[#60a5fa]">
              Must-Memorize Precise Definitions:
            </div>
            {module.examSpotlight.highYieldDefinitions.map((d, i) => (
              <div
                key={i}
                className="p-3 rounded bg-[#0a0a0c] border border-white/[0.06] space-y-1"
              >
                <div className="text-xs font-semibold text-[#f3f4f6]">{d.concept}</div>
                <p className="text-xs leading-relaxed text-[#9ca3af]">
                  <RichAcademicText text={d.preciseStatement} />
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-[#06b6d4]">
              Common Examiner Traps &amp; Corrections:
            </div>
            {module.examSpotlight.commonTraps.map((t, i) => (
              <div
                key={i}
                className="p-3 rounded bg-[#0a0a0c] border border-white/[0.06] space-y-1.5"
              >
                <div className="text-xs font-medium text-[#f3f4f6]">
                  Mistake to Avoid: {t.trap}
                </div>
                <p className="text-xs leading-relaxed text-[#60a5fa]">
                  Correction: <RichAcademicText text={t.correction} />
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-white/[0.06]">
          <div className="text-xs font-semibold text-[#9ca3af] mb-2">
            Expected Periodical Test I &amp; Semester ESA Prompts:
          </div>
          <ul className="space-y-1.5 text-xs text-[#f3f4f6]/90 font-mono">
            {module.examSpotlight.pastPaperPatterns.map((pp, idx) => (
              <li key={idx}>
                [{idx + 1}] {pp}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Interactive Practice / Quick Quiz */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <ListChecks className="w-4 h-4 text-[#3b82f6]" />
          <h3 className="text-sm font-semibold text-[#60a5fa]">
            Interactive Self-Assessment &amp; Worked University Questions
          </h3>
        </div>

        <div className="space-y-3">
          {module.practiceQuestions.map((q, qIdx) => {
            const chosen = selectedOptions[q.id];
            const hasOptions = q.options && q.options.length > 0;
            const isCorrect =
              hasOptions && chosen !== undefined && chosen === q.correctOptionIndex;
            const showSol = Boolean(openSolutions[q.id]);
            const isQuizDone = Boolean(completedIds[q.id]);

            return (
              <div
                key={q.id}
                className="rounded-lg bg-[#121216] border border-white/[0.09] p-5 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="text-xs font-mono text-[#9ca3af]">
                    <span>Question {qIdx + 1}</span>
                    <span className="mx-1.5">·</span>
                    <span className="text-[#60a5fa]">{q.questionType}</span>
                    <span className="mx-1.5">·</span>
                    <span>{q.marks} Marks</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleComplete(q.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs border transition-colors whitespace-nowrap shrink-0 ${
                      isQuizDone
                        ? 'bg-[#2563eb]/20 border-[#3b82f6] text-[#60a5fa]'
                        : 'bg-[#0a0a0c] border-white/10 text-[#9ca3af] hover:text-[#f3f4f6]'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    <span>{isQuizDone ? 'Solved' : 'Mark Solved'}</span>
                  </button>
                </div>

                <p className="text-sm sm:text-[15px] font-medium text-[#f3f4f6] leading-relaxed">
                  <RichAcademicText text={q.question} />
                </p>

                {hasOptions && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options!.map((opt, oIdx) => {
                      const isPicked = chosen === oIdx;
                      const isRightOpt = oIdx === q.correctOptionIndex;
                      let stateStyle =
                        'bg-[#0a0a0c] border-white/10 text-[#f3f4f6]/90 hover:border-[#3b82f6]/60';
                      if (chosen !== undefined) {
                        if (isRightOpt) {
                          stateStyle =
                            'bg-[#2563eb]/20 border-[#3b82f6] text-[#f3f4f6]';
                        } else if (isPicked) {
                          stateStyle =
                            'bg-[#1e1e24] border-[#9ca3af] text-[#9ca3af]';
                        }
                      }
                      return (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => {
                            setSelectedOptions((prev) => ({ ...prev, [q.id]: oIdx }));
                            if (oIdx === q.correctOptionIndex && !completedIds[q.id]) {
                              onToggleComplete(q.id);
                            }
                          }}
                          className={`p-3 rounded-md border text-left text-xs sm:text-sm transition-colors ${stateStyle}`}
                        >
                          <span className="font-mono text-[#60a5fa] mr-2">
                            ({String.fromCharCode(65 + oIdx)})
                          </span>
                          <RichAcademicText text={opt} />
                        </button>
                      );
                    })}
                  </div>
                )}

                {chosen !== undefined && hasOptions && (
                  <div className="flex items-center justify-between gap-2 px-3.5 py-2.5 rounded bg-[#0a0a0c] border border-white/10 text-xs">
                    <span
                      className={
                        isCorrect
                          ? 'text-[#06b6d4] font-semibold'
                          : 'text-[#9ca3af] font-medium'
                      }
                    >
                      {isCorrect
                        ? 'Status: Verified Correct — Full Exam Credit'
                        : `Status: Incorrect Selection — Correct Option is (${String.fromCharCode(
                            65 + (q.correctOptionIndex ?? 0)
                          )}). Inspect worked steps below.`}
                    </span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenSolutions((prev) => ({ ...prev, [q.id]: !prev[q.id] }))
                    }
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#2563eb] hover:bg-[#3b82f6] text-xs font-medium text-[#f3f4f6] transition-colors whitespace-nowrap shrink-0"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>
                      {showSol ? 'Hide Worked Solution' : 'View Worked Exam Solution'}
                    </span>
                  </button>
                  <span className="text-xs text-[#9ca3af]">
                    Hint: <RichAcademicText text={q.hint} />
                  </span>
                </div>

                {showSol && (
                  <div className="rounded-md bg-[#0a0a0c] border border-[#3b82f6]/35 p-4 space-y-2.5">
                    <div className="text-xs font-semibold text-[#60a5fa]">
                      Complete Step-by-Step University Marking Scheme:
                    </div>
                    <ol className="space-y-1.5 text-xs sm:text-sm font-mono text-[#f3f4f6]/90">
                      {q.solutionSteps.map((step, sIdx) => (
                        <li key={sIdx} className="leading-relaxed">
                          <RichAcademicText text={step} />
                        </li>
                      ))}
                    </ol>
                    <div className="pt-2 border-t border-white/10 text-xs sm:text-sm font-semibold text-[#06b6d4]">
                      Conclusion: <RichAcademicText text={q.finalConclusion} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};
