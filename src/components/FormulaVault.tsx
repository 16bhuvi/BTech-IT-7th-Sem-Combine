import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { SubjectCourse } from '../types/study';
import { ALL_COURSES } from '../data/coursesRegistry';
import { MathTex } from './MathTex';

interface FormulaVaultProps {
  activeCourse: SubjectCourse;
}

export const FormulaVault: React.FC<FormulaVaultProps> = ({ activeCourse }) => {
  const [scope, setScope] = useState<'current' | 'all'>('current');
  const [query, setQuery] = useState<string>('');

  const items = useMemo(() => {
    const base =
      scope === 'current'
        ? activeCourse.formulas.map((f) => ({ ...f, courseCode: activeCourse.code }))
        : ALL_COURSES.flatMap((c) =>
            c.formulas.map((f) => ({ ...f, courseCode: c.code }))
          );
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.examContext.toLowerCase().includes(q) ||
        item.courseCode.toLowerCase().includes(q)
    );
  }, [activeCourse, scope, query]);

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-[#1e1e24] border border-white/[0.08] p-6 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#60a5fa] mb-1">
              Mathematical &amp; Algorithmic Reference Sheet · Unit 1
            </div>
            <h2 className="text-xl font-bold text-[#f3f4f6]">
              Formula &amp; Complexity Vault
            </h2>
          </div>

          <div className="flex items-center gap-1 p-1 rounded-lg bg-[#121216] border border-white/10">
            <button
              type="button"
              onClick={() => setScope('current')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                scope === 'current'
                  ? 'bg-[#2563eb] text-[#f3f4f6]'
                  : 'text-[#9ca3af] hover:text-[#f3f4f6]'
              }`}
            >
              {activeCourse.code} Only
            </button>
            <button
              type="button"
              onClick={() => setScope('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                scope === 'all'
                  ? 'bg-[#2563eb] text-[#f3f4f6]'
                  : 'text-[#9ca3af] hover:text-[#f3f4f6]'
              }`}
            >
              All Sem VII Subjects
            </button>
          </div>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 text-[#9ca3af] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter formulas by theorem name, cipher, normalization, CRT timing, or complexity..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#121216] border border-white/10 text-sm text-[#f3f4f6] placeholder:text-[#9ca3af]/70 focus:outline-none focus:border-[#3b82f6]"
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {items.map((item) => (
            <div
              key={`${item.courseCode}-${item.id}`}
              className="rounded-lg bg-[#121216] border border-white/[0.08] p-5 space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#9ca3af]">
                <div>
                  <span className="text-[#60a5fa]">{item.courseCode}</span>
                  <span className="mx-2">·</span>
                  <span>{item.category}</span>
                </div>
                <span className="text-[#06b6d4]">{item.complexityOrBound}</span>
              </div>

              <h3 className="text-base font-semibold text-[#f3f4f6]">{item.name}</h3>

              <div className="p-3.5 rounded bg-[#0a0a0c] border border-white/[0.07]">
                <MathTex math={item.latex} display />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="text-[#9ca3af]">
                  <span className="font-semibold text-[#f3f4f6]">Variables: </span>
                  {item.variables}
                </div>
                <div className="text-[#9ca3af]">
                  <span className="font-semibold text-[#60a5fa]">Exam Application: </span>
                  {item.examContext}
                </div>
              </div>
            </div>
          ))}

          {items.length === 0 && (
            <div className="p-8 text-center text-sm text-[#9ca3af] rounded-lg bg-[#121216] border border-white/[0.06]">
              No formulas match &ldquo;{query}&rdquo;. Clear the filter to view all equations.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
