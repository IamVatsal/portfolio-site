"use client";
import React, { useEffect } from 'react';
import { FieldNote } from '../Utils/types';
import { X, Clock, Tag } from 'lucide-react';

interface NoteModalProps {
  note: FieldNote | null;
  onClose: () => void;
}

const NoteModal: React.FC<NoteModalProps> = ({ note, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (note) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [note, onClose]);

  if (!note) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#F9F7F7] dark:bg-[#112D4E] text-[#112D4E] dark:text-[#F9F7F7] rounded-2xl border border-[#DBE2EF] dark:border-[#3F72AF]/40 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#DBE2EF] dark:border-[#3F72AF]/30 flex items-center justify-center text-[#112D4E] dark:text-[#DBE2EF] hover:bg-[#DBE2EF]/40 transition-colors"
          aria-label="Close note"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mono text-xs font-semibold text-[#3F72AF] dark:text-[#DBE2EF] uppercase tracking-wider mb-2">
            <span>{note.number} / {note.type}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {note.readTime}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
            {note.title}
          </h2>

          <div className="flex flex-wrap gap-1.5 pb-4 border-b border-[#DBE2EF] dark:border-[#3F72AF]/20">
            {note.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs mono rounded bg-[#DBE2EF]/50 dark:bg-[#0b1a2d] text-[#112D4E] dark:text-[#DBE2EF] border border-[#DBE2EF] dark:border-[#3F72AF]/30"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-[#112D4E]/85 dark:text-[#DBE2EF]/90 leading-relaxed font-normal">
          {note.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-[#DBE2EF] dark:border-[#3F72AF]/20 flex justify-between items-center text-xs mono text-[#112D4E]/60 dark:text-[#DBE2EF]/60">
          <span>Author: Vatsal</span>
          <button
            onClick={onClose}
            className="hover:text-[#3F72AF] dark:hover:text-white transition-colors"
          >
            Close Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
