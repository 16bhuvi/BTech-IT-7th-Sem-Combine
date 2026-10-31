import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { ALL_COURSES } from '../data/coursesRegistry';
import { SubjectCourse } from '../types/study';

interface HandoutViewerProps {
  activeCourse: SubjectCourse;
}

export const HandoutViewer: React.FC<HandoutViewerProps> = ({ activeCourse }) => {
  const allHandouts = ALL_COURSES.flatMap((c) =>
    c.handouts.map((h) => ({ ...h, courseCode: c.code }))
  );
  const initialId = activeCourse.handouts[0]?.id ?? allHandouts[0].id;
  const [selectedId, setSelectedId] = useState<string>(initialId);

  const selected =
    allHandouts.find((h) => h.id === selectedId) ?? allHandouts[0];

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-[#1e1e24] border border-white/[0.08] p-6 space-y-5">
        <div className="pb-4 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-[#60a5fa] mb-1">
            Official Banasthali Vidyapith Syllabus &amp; Course Handout Archive (July – Dec 2026)
          </div>
          <h2 className="text-xl font-bold text-[#f3f4f6]">
            Original Course Handouts &amp; Lecture Plans
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {allHandouts.map((h) => (
            <button
              key={h.id}
              type="button"
              onClick={() => setSelectedId(h.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium border transition-colors whitespace-nowrap shrink-0 ${
                selected.id === h.id
                  ? 'bg-[#2563eb] border-[#3b82f6] text-[#f3f4f6]'
                  : 'bg-[#121216] border-white/10 text-[#9ca3af] hover:text-[#f3f4f6]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>
                {h.courseCode} — {h.title.split('—')[1]?.trim() ?? h.title}
              </span>
            </button>
          ))}
        </div>

        <div className="rounded-lg bg-[#121216] border border-white/[0.08] p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold text-[#f3f4f6]">{selected.title}</h3>
              <p className="text-xs text-[#9ca3af]">{selected.subtitle}</p>
            </div>
            <a
              href={selected.src}
              download
              className="px-3 py-1.5 rounded bg-[#1e1e24] border border-white/10 text-xs font-mono text-[#60a5fa] hover:border-[#3b82f6] transition-colors whitespace-nowrap shrink-0"
            >
              Download Original File
            </a>
          </div>

          <p className="text-xs text-[#9ca3af] border-t border-white/[0.06] pt-2">
            Coverage Note: {selected.notes}
          </p>

          <div className="rounded-lg overflow-hidden bg-[#0a0a0c] border border-white/10">
            {selected.type === 'image' ? (
              <img
                src={selected.src}
                alt={selected.title}
                referrerPolicy="no-referrer"
                className="w-full max-h-[780px] object-contain mx-auto block"
              />
            ) : (
              <object
                data={selected.src}
                type="application/pdf"
                className="w-full h-[720px] block"
              >
                <div className="p-8 text-center space-y-3">
                  <p className="text-sm text-[#9ca3af]">
                    Inline PDF preview is restricted in this browser frame. Use the download link above to inspect the PDF directly.
                  </p>
                </div>
              </object>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
