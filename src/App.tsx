import React, { useEffect, useMemo, useState } from 'react';
import {
  Check,
  Search,
  BookOpen,
  X,
  RotateCcw,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { ALL_COURSES, getCourseById } from './data/coursesRegistry';
import { SubjectCourse } from './types/study';
import { TopicCard } from './components/TopicCard';
import { InteractiveLabs } from './components/InteractiveLabs';
import { FormulaVault } from './components/FormulaVault';
import { ExamPracticeArena } from './components/ExamPracticeArena';
import { HandoutViewer } from './components/HandoutViewer';

type WorkspaceTab = 'notes' | 'lab' | 'formulas' | 'practice' | 'handouts';

const STORAGE_KEY = 'btech_it_sem7_unit1_mastery_v1';

export default function App() {
  const [activeCourseId, setActiveCourseId] = useState<SubjectCourse['id']>('it410');
  const [activeTab, setActiveTab] = useState<WorkspaceTab>('notes');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showSyllabusMeta, setShowSyllabusMeta] = useState<boolean>(false);
  const [showReadinessModal, setShowReadinessModal] = useState<boolean>(false);

  const [completedIds, setCompletedIds] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedIds));
    } catch {
      // Ignore storage quota errors in restricted sandboxes
    }
  }, [completedIds]);

  const activeCourse = useMemo(() => getCourseById(activeCourseId), [activeCourseId]);

  const handleToggleComplete = (id: string) => {
    setCompletedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Compute per-course mastery metrics
  const courseProgress = useMemo(() => {
    const computeForCourse = (c: SubjectCourse) => {
      const checkableIds: string[] = [];
      for (const m of c.modules) {
        checkableIds.push(m.id);
        for (const s of m.technicalSections) checkableIds.push(s.id);
        for (const q of m.practiceQuestions) checkableIds.push(q.id);
      }
      const done = checkableIds.filter((id) => completedIds[id]).length;
      const total = checkableIds.length;
      const pct = total === 0 ? 0 : Math.round((done / total) * 100);
      return { done, total, pct };
    };

    return {
      current: computeForCourse(activeCourse),
      byCourse: ALL_COURSES.map((c) => ({
        course: c,
        stats: computeForCourse(c),
      })),
    };
  }, [activeCourse, completedIds]);

  const filteredModules = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return activeCourse.modules;
    return activeCourse.modules.filter((m) => {
      if (
        m.title.toLowerCase().includes(q) ||
        m.overview.formalDefinition.toLowerCase().includes(q) ||
        m.overview.highLevelIntuition.toLowerCase().includes(q)
      ) {
        return true;
      }
      if (
        m.keyTerms.some(
          (kt) =>
            kt.term.toLowerCase().includes(q) ||
            kt.definition.toLowerCase().includes(q)
        )
      ) {
        return true;
      }
      return m.technicalSections.some(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.paragraphs.some((p) => p.toLowerCase().includes(q))
      );
    });
  }, [activeCourse, searchQuery]);

  const resetCourseProgress = (course: SubjectCourse) => {
    setCompletedIds((prev) => {
      const next = { ...prev };
      for (const m of course.modules) {
        delete next[m.id];
        for (const s of m.technicalSections) delete next[s.id];
        for (const q of m.practiceQuestions) delete next[q.id];
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f3f4f6] flex flex-col">
      {/* STRICT 3-ZONE TOP BAR CONTRACT */}
      <header className="sticky top-0 z-30 bg-[#0a0a0c]/95 backdrop-blur border-b border-white/[0.08] px-6 py-3.5 no-print">
        <div className="max-w-[1380px] mx-auto flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand Wordmark */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('notes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-base sm:text-lg font-bold tracking-tight text-[#f3f4f6] whitespace-nowrap shrink-0 font-display"
          >
            B.Tech IT Sem VII
          </a>

          {/* Zone 2: 5 Clean Single-Line Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#9ca3af]">
            {(
              [
                { id: 'notes', label: 'Syllabus Notes' },
                { id: 'lab', label: 'Interactive Lab' },
                { id: 'formulas', label: 'Formula Vault' },
                { id: 'practice', label: 'Exam Practice' },
                { id: 'handouts', label: 'Handout Archive' },
              ] as const
            ).map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => setActiveTab(link.id)}
                className={`py-1 border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === link.id
                    ? 'border-[#3b82f6] text-[#f3f4f6]'
                    : 'border-transparent hover:text-[#f3f4f6]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action Button */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setShowReadinessModal(true)}
              className="px-4 py-2 text-xs font-semibold text-[#f3f4f6] bg-[#2563eb] hover:bg-[#3b82f6] rounded-lg transition-colors whitespace-nowrap shrink-0 tabular-nums"
            >
              Exam Readiness ({courseProgress.current.pct}%)
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Strip (Visible only below md; concise height) */}
      <div className="md:hidden border-b border-white/[0.08] bg-[#121216] px-4 py-2 flex items-center gap-2 overflow-x-auto no-print">
        {(
          [
            { id: 'notes', label: 'Notes' },
            { id: 'lab', label: 'Live Lab' },
            { id: 'formulas', label: 'Formulas' },
            { id: 'practice', label: 'Practice' },
            { id: 'handouts', label: 'Handouts' },
          ] as const
        ).map((link) => (
          <button
            key={link.id}
            type="button"
            onClick={() => setActiveTab(link.id)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap shrink-0 ${
              activeTab === link.id
                ? 'bg-[#2563eb] text-[#f3f4f6]'
                : 'text-[#9ca3af] hover:text-[#f3f4f6]'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* WORKSPACE COURSE TOOLBAR & ACADEMIC HERO */}
      <div id="top" className="border-b border-white/[0.08] bg-[#121216]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 py-6 space-y-5">
          {/* Interactive Subject Course Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#0a0a0c] border border-white/10">
              {ALL_COURSES.map((course) => {
                const isSelected = course.id === activeCourseId;
                return (
                  <button
                    key={course.id}
                    type="button"
                    onClick={() => {
                      setActiveCourseId(course.id);
                      setSearchQuery('');
                    }}
                    className={`px-3.5 py-2 rounded-md text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-[#2563eb] text-[#f3f4f6]'
                        : 'text-[#9ca3af] hover:text-[#f3f4f6]'
                    }`}
                  >
                    <span className="font-mono font-semibold mr-1.5">{course.code}</span>
                    <span>{course.shortTitle}</span>
                  </button>
                );
              })}
            </div>

            <div className="text-xs text-[#9ca3af] font-mono tabular-nums">
              <span>Mastered Items: {courseProgress.current.done}/{courseProgress.current.total}</span>
              <span className="mx-2">·</span>
              <span className="text-[#60a5fa]">{courseProgress.current.pct}% Complete</span>
            </div>
          </div>

          {/* Course Title, Unboxed Metadata & Progress Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-8 space-y-2.5">
              {/* Unboxed Zero-Pill Academic Metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#9ca3af]">
                <span>Banasthali Vidyapith</span>
                <span aria-hidden="true">·</span>
                <span>B.Tech. (IT) VII Semester (July – Dec 2026)</span>
                <span aria-hidden="true">·</span>
                <span>{activeCourse.credits} Credits</span>
                <span aria-hidden="true">·</span>
                <span>Max Marks: {activeCourse.maxMarks}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-[#f3f4f6] tracking-tight [text-wrap:balance]">
                {activeCourse.fullTitle}
              </h1>

              <p className="text-sm text-[#9ca3af]">{activeCourse.instructor}</p>
            </div>

            <div className="lg:col-span-4 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-[#9ca3af] tabular-nums">
                <span>Periodical Test I: {activeCourse.examSchedule.periodicalTest1.split('(')[0]}</span>
                <span className="text-[#06b6d4]">{courseProgress.current.pct}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#0a0a0c] border border-white/10 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#2563eb] to-[#06b6d4] transition-transform duration-200 origin-left"
                  style={{
                    transform: `scaleX(${Math.max(0.02, courseProgress.current.pct / 100)})`,
                  }}
                />
              </div>
              <button
                type="button"
                onClick={() => setShowSyllabusMeta((v) => !v)}
                className="flex items-center gap-1.5 text-xs font-medium text-[#60a5fa] hover:text-[#f3f4f6] transition-colors"
              >
                {showSyllabusMeta ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
                <span>
                  {showSyllabusMeta
                    ? 'Hide Verbatim Section A Syllabus & Course Outcomes'
                    : 'Inspect Verbatim Section A Syllabus, COs & Textbooks'}
                </span>
              </button>
            </div>
          </div>

          {/* Expandable Verbatim Syllabus & Course Outcomes Drawer */}
          {showSyllabusMeta && (
            <div className="rounded-lg bg-[#0a0a0c] border border-white/[0.08] p-5 grid grid-cols-1 lg:grid-cols-12 gap-6 text-xs leading-relaxed">
              <div className="lg:col-span-5 space-y-2">
                <div className="font-semibold text-[#60a5fa]">
                  Official Unit 1 (Section A) Syllabus Verbatim:
                </div>
                <p className="text-[#f3f4f6]/90">{activeCourse.syllabusVerbatim}</p>
                <div className="pt-2 text-[#9ca3af] font-mono">
                  <div>Home Assignment I: {activeCourse.examSchedule.assignment1}</div>
                  <div>Periodical Test I: {activeCourse.examSchedule.periodicalTest1}</div>
                  <div>Semester Exam: {activeCourse.examSchedule.semesterExam}</div>
                </div>
              </div>
              <div className="lg:col-span-4 space-y-2">
                <div className="font-semibold text-[#60a5fa]">Course Outcomes (COs):</div>
                <ul className="space-y-1 text-[#9ca3af]">
                  {activeCourse.courseOutcomes.map((co, idx) => (
                    <li key={idx}>{co}</li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-3 space-y-2">
                <div className="font-semibold text-[#06b6d4]">Prescribed Textbooks:</div>
                <ul className="space-y-1.5 text-[#9ca3af]">
                  {activeCourse.recommendedBooks.map((bk, idx) => (
                    <li key={idx}>{bk}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* MAIN WORKSPACE CONTAINER */}
      <main className="flex-1 max-w-[1380px] w-full mx-auto px-4 sm:px-6 py-8">
        {activeTab === 'notes' && (
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Sticky Navigation & Search Sidebar */}
            <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-20 space-y-5 no-print">
              <div className="relative">
                <Search className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={`Search ${activeCourse.code} notes...`}
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#121216] border border-white/10 text-xs text-[#f3f4f6] placeholder:text-[#9ca3af]/70 focus:outline-none focus:border-[#3b82f6]"
                />
              </div>

              <div className="rounded-xl bg-[#121216] border border-white/[0.08] p-4 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-[#f3f4f6]">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-[#3b82f6]" />
                    <span>Unit 1 Modules</span>
                  </span>
                  <span className="font-mono text-[#9ca3af] tabular-nums">
                    {activeCourse.modules.length} Chapters
                  </span>
                </div>

                <nav className="space-y-1">
                  {activeCourse.modules.map((mod) => {
                    const done = Boolean(completedIds[mod.id]);
                    return (
                      <a
                        key={mod.id}
                        href={`#${mod.id}`}
                        className="flex items-start gap-2.5 p-2 rounded-md hover:bg-[#1e1e24] transition-colors group"
                      >
                        <span
                          className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center border text-[10px] font-mono shrink-0 ${
                            done
                              ? 'bg-[#2563eb] border-[#3b82f6] text-[#f3f4f6]'
                              : 'border-white/15 text-[#9ca3af]'
                          }`}
                        >
                          {done ? <Check className="w-2.5 h-2.5" /> : mod.indexNumber}
                        </span>
                        <div className="min-w-0">
                          <div className="text-xs font-medium text-[#f3f4f6]/90 group-hover:text-[#60a5fa] leading-snug">
                            {mod.title}
                          </div>
                          <div className="text-[11px] font-mono text-[#9ca3af] mt-0.5">
                            {mod.lectureSpan}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </nav>

                <div className="pt-3 border-t border-white/[0.07] space-y-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('lab')}
                    className="w-full px-3 py-2 rounded-lg bg-[#1e1e24] hover:bg-[#2563eb] text-xs font-medium text-[#f3f4f6] transition-colors text-center"
                  >
                    Launch {activeCourse.code} Live Lab
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('practice')}
                    className="w-full px-3 py-2 rounded-lg bg-[#0a0a0c] border border-white/10 hover:border-[#3b82f6] text-xs font-medium text-[#60a5fa] transition-colors text-center"
                  >
                    Open University Question Bank
                  </button>
                </div>
              </div>
            </aside>

            {/* Primary Detailed Study Notes Stream */}
            <div className="flex-1 min-w-0 space-y-8">
              {filteredModules.map((mod) => (
                <TopicCard
                  key={mod.id}
                  module={mod}
                  completedIds={completedIds}
                  onToggleComplete={handleToggleComplete}
                />
              ))}

              {filteredModules.length === 0 && (
                <div className="rounded-xl bg-[#1e1e24] border border-white/[0.08] p-10 text-center space-y-3">
                  <p className="text-sm text-[#9ca3af]">
                    No Unit 1 modules in {activeCourse.code} matched &ldquo;{searchQuery}&rdquo;.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-4 py-2 rounded-lg bg-[#2563eb] text-xs font-medium text-[#f3f4f6]"
                  >
                    Clear Search Filter
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'lab' && <InteractiveLabs courseId={activeCourseId} />}

        {activeTab === 'formulas' && <FormulaVault activeCourse={activeCourse} />}

        {activeTab === 'practice' && (
          <ExamPracticeArena
            course={activeCourse}
            completedIds={completedIds}
            onToggleComplete={handleToggleComplete}
          />
        )}

        {activeTab === 'handouts' && <HandoutViewer activeCourse={activeCourse} />}
      </main>

      {/* CLEAN QUIET FOOTER */}
      <footer className="border-t border-white/[0.08] bg-[#0a0a0c] px-6 py-6 text-xs text-[#9ca3af] no-print">
        <div className="max-w-[1380px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            B.Tech. Information Technology Semester VII · Complete Unit 1 (Section A) Study Engine
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#f3f4f6] transition-colors"
            >
              Back to Top
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setShowReadinessModal(true)}
              className="hover:text-[#f3f4f6] transition-colors"
            >
              Progress Summary
            </button>
          </div>
        </div>
      </footer>

      {/* EXAM READINESS & MASTERY MODAL */}
      {showReadinessModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="w-full max-w-xl rounded-xl bg-[#1e1e24] border border-white/15 p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div>
                <h2 className="text-lg font-bold text-[#f3f4f6]">
                  Semester VII Unit 1 Exam Readiness Matrix
                </h2>
                <p className="text-xs text-[#9ca3af] mt-0.5">
                  Progress persists automatically in browser storage across study sessions.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowReadinessModal(false)}
                className="p-1.5 rounded-lg bg-[#121216] text-[#9ca3af] hover:text-[#f3f4f6]"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {courseProgress.byCourse.map(({ course, stats }) => (
                <div
                  key={course.id}
                  className="p-4 rounded-lg bg-[#121216] border border-white/[0.08] space-y-2.5"
                >
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-[#f3f4f6]">
                      {course.code} — {course.shortTitle}
                    </span>
                    <span className="font-mono text-[#60a5fa] tabular-nums">
                      {stats.done}/{stats.total} ({stats.pct}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#0a0a0c] overflow-hidden">
                    <div
                      className="h-full bg-[#3b82f6] origin-left transition-transform"
                      style={{ transform: `scaleX(${stats.pct / 100})` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#9ca3af]">
                    <span>PT-I: {course.examSchedule.periodicalTest1}</span>
                    <button
                      type="button"
                      onClick={() => resetCourseProgress(course)}
                      className="flex items-center gap-1 text-[#9ca3af] hover:text-[#f3f4f6]"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset {course.code}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowReadinessModal(false)}
                className="px-4 py-2 rounded-lg bg-[#2563eb] hover:bg-[#3b82f6] text-xs font-semibold text-[#f3f4f6]"
              >
                Continue Studying
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
