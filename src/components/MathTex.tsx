import React, { useMemo, useState } from 'react';
import katex from 'katex';
import { KeyTerm } from '../types/study';

interface MathProps {
  math: string;
  display?: boolean;
  className?: string;
}

export const MathTex: React.FC<MathProps> = ({ math, display = false, className = '' }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(math, {
        displayMode: display,
        throwOnError: false,
        strict: false,
      });
    } catch {
      return math;
    }
  }, [math, display]);

  if (display) {
    return (
      <div
        className={`overflow-x-auto py-2 ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

interface TermHoverBadgeProps {
  termObj: KeyTerm;
  matchedText: string;
}

const InlineTermPopover: React.FC<TermHoverBadgeProps> = ({ termObj, matchedText }) => {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        onBlur={() => setOpen(false)}
        className="text-[#60a5fa] underline decoration-[#3b82f6]/50 decoration-dotted underline-offset-4 hover:text-[#f3f4f6] hover:decoration-[#06b6d4] transition-colors cursor-help font-medium focus:outline-none focus-visible:ring-1 focus-visible:ring-[#3b82f6] rounded-sm"
      >
        {matchedText}
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute z-40 bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 sm:w-80 p-3.5 rounded-lg bg-[#121216] border border-[#3b82f6]/40 shadow-2xl text-left pointer-events-none block"
        >
          <span className="block text-xs font-semibold text-[#60a5fa] mb-1">
            {termObj.term}
          </span>
          <span className="block text-xs leading-relaxed text-[#f3f4f6]/90">
            <RichAcademicText text={termObj.definition} />
          </span>
          {termObj.formula && (
            <span className="block mt-2 pt-2 border-t border-white/10 text-xs text-[#06b6d4]">
              <MathTex math={termObj.formula} />
            </span>
          )}
          {termObj.examNote && (
            <span className="block mt-1.5 text-[11px] text-[#9ca3af]">
              Exam Note: {termObj.examNote}
            </span>
          )}
        </span>
      )}
    </span>
  );
};

interface RichAcademicTextProps {
  text: string;
  keyTerms?: KeyTerm[];
  className?: string;
}

/**
 * Renders mixed academic text containing $$display math$$, $inline math$,
 * **bold emphasis**, `inline code`, and interactive glossary hover cards.
 */
export const RichAcademicText: React.FC<RichAcademicTextProps> = ({
  text,
  keyTerms,
  className = '',
}) => {
  const tokens = useMemo(() => {
    // Split first by $$...$$, $...$, **...**, `...`
    const pattern = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$|\*\*[^*]+?\*\*|`[^`]+?`)/g;
    const rawParts = text.split(pattern).filter((part) => part.length > 0);
    return rawParts;
  }, [text]);

  const termPattern = useMemo(() => {
    if (!keyTerms || keyTerms.length === 0) return null;
    const sorted = [...keyTerms].sort((a, b) => b.term.length - a.term.length);
    const escaped = sorted.map((t) =>
      t.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    if (escaped.length === 0) return null;
    return {
      regex: new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi'),
      lookup: new Map(sorted.map((t) => [t.term.toLowerCase(), t])),
    };
  }, [keyTerms]);

  const usedTerms = new Set<string>();

  return (
    <span className={className}>
      {tokens.map((token, idx) => {
        if (token.startsWith('$$') && token.endsWith('$$') && token.length > 4) {
          return <MathTex key={idx} math={token.slice(2, -2)} display />;
        }
        if (token.startsWith('$') && token.endsWith('$') && token.length > 2) {
          return <MathTex key={idx} math={token.slice(1, -1)} />;
        }
        if (token.startsWith('**') && token.endsWith('**') && token.length > 4) {
          return (
            <strong key={idx} className="font-semibold text-[#f3f4f6]">
              <RichAcademicText text={token.slice(2, -2)} />
            </strong>
          );
        }
        if (token.startsWith('`') && token.endsWith('`') && token.length > 2) {
          return (
            <code
              key={idx}
              className="px-1.5 py-0.5 rounded bg-[#121216] border border-white/10 font-mono text-[0.86em] text-[#60a5fa]"
            >
              {token.slice(1, -1)}
            </code>
          );
        }

        if (!termPattern) {
          return <React.Fragment key={idx}>{token}</React.Fragment>;
        }

        const subParts = token.split(termPattern.regex);
        return (
          <React.Fragment key={idx}>
            {subParts.map((sub, sIdx) => {
              const lower = sub.toLowerCase();
              const found = termPattern.lookup.get(lower);
              if (found && !usedTerms.has(found.term.toLowerCase())) {
                usedTerms.add(found.term.toLowerCase());
                return (
                  <InlineTermPopover
                    key={`${idx}-${sIdx}`}
                    termObj={found}
                    matchedText={sub}
                  />
                );
              }
              return <React.Fragment key={`${idx}-${sIdx}`}>{sub}</React.Fragment>;
            })}
          </React.Fragment>
        );
      })}
    </span>
  );
};
