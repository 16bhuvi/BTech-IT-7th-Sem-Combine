import React, { useMemo, useState } from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { SubjectCourse } from '../types/study';
import { RichAcademicText } from './MathTex';

interface ExamPracticeArenaProps {
  course: SubjectCourse;
  completedIds: Record<string, boolean>;
  onToggleComplete: (id: string) => void;
}

export const ExamPracticeArena: React.FC<ExamPracticeArenaProps> = ({
  course,
  completedIds,
  onToggleComplete,
}) => {
  const [filterType, setFilterType] = useState<string>('ALL');
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});

  const allQuestions = useMemo(() => {
    return course.modules.flatMap((m) => {
      const moduleQuestions = m.practiceQuestions.map((q) => ({
        ...q,
        moduleIndex: m.indexNumber,
        moduleTitle: m.title,
      }));
      // Also surface Past Paper Long-Answer Prompts from Exam Spotlight!
      const longPrompts = m.examSpotlight.pastPaperPatterns.map((promptText, idx) => ({
        id: `${m.id}-long-${idx}`,
        questionType: 'Architecture / Proof' as const,
        marks: 10,
        question: promptText,
        options: undefined,
        correctOptionIndex: undefined,
        hint: `Refer to Module ${m.indexNumber} (${m.title}) architectural schematic, equations, and Key Takeaway Matrix.`,
        solutionSteps: [
          `1. Formal Definition & Core Concept: Begin with the exact mathematical definition from Module ${m.indexNumber}.`,
          `2. Labeled Architectural Schematic: Reproduce the clean block/flow diagram (${m.diagramCaption}).`,
          `3. Mathematical Proof / Numerical Walkthrough: Show every intermediate step clearly (${m.codeImplementation.complexity}).`,
          `4. Comparative Matrix & Edge-Case Note: Conclude with 4–6 structured comparison points from the Takeaway Matrix to secure full 10/10 ESA marks.`,
        ],
        finalConclusion: `Complete coverage verified in Module ${m.indexNumber}: ${m.title}.`,
        moduleIndex: m.indexNumber,
        moduleTitle: m.title,
      }));
      return [...moduleQuestions, ...longPrompts];
    });
  }, [course]);

  const filtered = useMemo(() => {
    if (filterType === 'ALL') return allQuestions;
    return allQuestions.filter((q) => q.questionType === filterType);
  }, [allQuestions, filterType]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-[#1e1e24] border border-white/[0.08] p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-[#60a5fa] mb-1">
              {course.code} · Periodical Test I ({course.examSchedule.periodicalTest1}) &amp; ESA ({course.examSchedule.semesterExam})
            </div>
            <h2 className="text-xl font-bold text-[#f3f4f6]">
              University Examination Question Bank &amp; Worked Solutions
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#121216] border border-white/10">
            {[
              { id: 'ALL', label: 'All Questions' },
              { id: 'Numerical / Derivation', label: 'Numericals' },
              { id: 'Conceptual / Analytical', label: 'Conceptual' },
              { id: 'Architecture / Proof', label: 'Long-Answer ESA' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilterType(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  filterType === tab.id
                    ? 'bg-[#2563eb] text-[#f3f4f6]'
                    : 'text-[#9ca3af] hover:text-[#f3f4f6]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map((q, idx) => {
            const picked = selectedAnswers[q.id];
            const isOpen = Boolean(revealedIds[q.id]);
            const done = Boolean(completedIds[q.id]);

            return (
              <div
                key={q.id}
                className="rounded-lg bg-[#121216] border border-white/[0.08] p-5 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#9ca3af]">
                  <div>
                    <span className="text-[#60a5fa]">Q{idx + 1}</span>
                    <span className="mx-2">·</span>
                    <span>Module {q.moduleIndex}</span>
                    <span className="mx-2">·</span>
                    <span>{q.questionType}</span>
                    <span className="mx-2">·</span>
                    <span className="text-[#06b6d4]">{q.marks} Marks</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onToggleComplete(q.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs transition-colors whitespace-nowrap shrink-0 ${
                      done
                        ? 'bg-[#2563eb]/20 border-[#3b82f6] text-[#60a5fa]'
                        : 'bg-[#0a0a0c] border-white/10 text-[#9ca3af] hover:text-[#f3f4f6]'
                    }`}
                  >
                    <Check className="w-3 h-3" />
                    <span>{done ? 'Practiced' : 'Mark Practiced'}</span>
                  </button>
                </div>

                <p className="text-sm sm:text-[15px] font-medium text-[#f3f4f6] leading-relaxed">
                  <RichAcademicText text={q.question} />
                </p>

                {q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, oIdx) => {
                      const isRight = oIdx === q.correctOptionIndex;
                      let cls =
                        'bg-[#0a0a0c] border-white/10 text-[#f3f4f6]/90 hover:border-[#3b82f6]/60';
                      if (picked !== undefined) {
                        if (isRight) {
                          cls = 'bg-[#2563eb]/20 border-[#3b82f6] text-[#f3f4f6]';
                        } else if (picked === oIdx) {
                          cls = 'bg-[#1e1e24] border-[#9ca3af] text-[#9ca3af]';
                        }
                      }
                      return (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() =>
                            setSelectedAnswers((prev) => ({ ...prev, [q.id]: oIdx }))
                          }
                          className={`p-3 rounded border text-left text-xs sm:text-sm transition-colors ${cls}`}
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

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setRevealedIds((prev) => ({ ...prev, [q.id]: !prev[q.id] }))
                    }
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#2563eb] hover:bg-[#3b82f6] text-xs font-medium text-[#f3f4f6] transition-colors whitespace-nowrap shrink-0"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>{isOpen ? 'Hide Solution Rubric' : 'Show Solution Rubric'}</span>
                  </button>
                  <span className="text-xs text-[#9ca3af]">
                    Hint: <RichAcademicText text={q.hint} />
                  </span>
                </div>

                {isOpen && (
                  <div className="p-4 rounded bg-[#0a0a0c] border border-[#3b82f6]/35 space-y-2">
                    <ol className="space-y-1.5 text-xs sm:text-sm font-mono text-[#f3f4f6]/90">
                      {q.solutionSteps.map((st, sIdx) => (
                        <li key={sIdx} className="leading-relaxed">
                          <RichAcademicText text={st} />
                        </li>
                      ))}
                    </ol>
                    <div className="pt-2 border-t border-white/10 text-xs sm:text-sm font-semibold text-[#06b6d4]">
                      Result: <RichAcademicText text={q.finalConclusion} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
