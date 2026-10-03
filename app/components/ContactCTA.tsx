"use client";
import React, { useState } from 'react';
import { USER_INFO } from '../Utils/constants';
import { ArrowUpRight, Copy, Check, Send } from 'lucide-react';

const ContactCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(USER_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="w-full bg-[#3F72AF] text-white py-20 md:py-28 relative overflow-hidden">
      {/* Subtle geometric background motif */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (Matches Photo) */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Have a good<br />problem?
            </h2>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href={`mailto:${USER_INFO.email}`}
                className="text-xl sm:text-2xl font-mono text-white/95 hover:text-white underline decoration-white/40 hover:decoration-white underline-offset-8 transition-colors flex items-center gap-2"
              >
                <span>{USER_INFO.email}</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/15 hover:bg-white/25 text-white text-xs mono transition-colors"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <p className="text-base text-white/80 max-w-md font-light mb-8">
              No pitch decks required. Just a clear question.
            </p>

            <div className="mono text-xs text-white/70 uppercase tracking-widest pt-6 border-t border-white/20">
              LET'S BUILD SOMETHING WORTH EXPLAINING
            </div>
          </div>

          {/* Right Column: Interactive Direct Message Form */}
          <div className="lg:col-span-5 bg-white/10 rounded-2xl p-7 border border-black/10 shadow-2xl backdrop-blur-md">
            {formSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Message Dispatched!</h3>
                <p className="text-xs text-[#DBE2EF]/80 max-w-xs mx-auto">
                  Thank you for reaching out, {formState.name || 'friend'}. I'll read your note and get back to you promptly at {formState.email}.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormState({ name: '', email: '', message: '' });
                  }}
                  className="mono text-xs text-[#3F72AF] hover:text-white underline transition-colors pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-xs mono uppercase tracking-wider text-[#DBE2EF]/80 mb-2">
                  Drop a Quick Note
                </div>

                <div>
                  <label className="block text-xs mono text-[#DBE2EF]/80 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/10 border border-white/15 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none  transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs mono text-[#DBE2EF]/80 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="ada@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/10 border border-white/15 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none  transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs mono text-[#DBE2EF]/80 mb-1">
                    The Problem / Idea
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="We're building a system that needs low-latency telemetry and clean state handling..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/10 border border-white/15 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none  transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-white text-[#112D4E] hover:bg-[#DBE2EF] font-bold text-xs mono tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Query</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
