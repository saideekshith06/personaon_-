"use client";

import React, { useState, useEffect, useRef } from "react";
import CursorInteractiveDots from "./CursorInteractiveDots";

interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
}

// ─── Suggestion Chips (shown in TRY ASKING panel) ──────────────────────────
const SUGGESTIONS = [
  "How does PersonaOn answer in my voice?",
  "What can PersonaOn do that note apps can't?",
  "How is this different from a meeting summarizer?",
  "What gets captured automatically?"
];

// ─── Knowledge Base (RAG-style) ───────────────────────────────────────────
const KB: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["generate my weekly executive summary brief", "executive brief", "weekly brief"],
    answer: "Weekly Executive Synthesis: Apex Retail checkout latency blocker is tracked at 100ms. Lever ATS integration dependencies are fully resolved for Sarah Jenkins. Valuation runway projections ($1.5M for 18 months seed expansion) have been logged in Christian Vance Capital's diligence folder."
  },
  {
    keywords: ["what pricing objections did lauren sinclair raise", "lauren objections", "lauren pricing"],
    answer: "Lauren Sinclair objections log: Lauren requested flat SLA competitor alignment during the Enterprise Pitch. We offered a concession to waive the custom domain routing setup fees in exchange for a finalized contract review by Friday."
  },
  {
    keywords: ["retrieve candidate alexander's tech profile", "alexander tech profile", "alexander candidate"],
    answer: "Candidate Dossier: Alexander (Full Stack Lead). Technical Profile: Scaled multi-tenant custom domain routing layout cutting load speeds by 30%. Expected Comp: $140,000 base + equity incentives. Available to start upon Lever ATS compliance sign-off."
  },
  {
    keywords: ["voice", "sound", "tone", "my voice", "answer in my voice", "own words", "style"],
    answer: "PersonaOn doesn't generate a synthetic voice — it learns your actual phrasing, vocabulary, and communication patterns from your real meetings and writing. When someone queries your memory, responses come back in language that reflects how you actually speak, not a template."
  },
  {
    keywords: ["note", "notes", "note app", "notion", "obsidian", "docs", "evernote", "different from notes"],
    answer: "Note apps store text you manually write. PersonaOn captures context you'd never have time to write down — who said what, what was promised, what was left open, and how it all connects across every meeting. Six months later you can ask 'what did Hemanth need before Q3?' and get a precise answer. No notes app can do that."
  },
  {
    keywords: ["summarizer", "summary", "otter", "fireflies", "fathom", "recap", "transcript", "transcription", "different from"],
    answer: "Summarizers give you a recap of one meeting and then forget it. PersonaOn compounds across meetings — it links commitments, tracks follow-through, and builds a searchable layer of your entire working relationship with a person or project. It's the difference between a filing cabinet and a working memory."
  },
  {
    keywords: ["capture", "captured", "captures", "what does it capture", "automatic", "automatically", "what gets saved", "stored", "indexed"],
    answer: "PersonaOn automatically captures decisions, commitments, blockers, next steps, objections, deadlines, client preferences, hiring requirements, investor concerns, and relationship context — all indexed silently while you focus on the conversation. Nothing needs to be manually tagged."
  },
  {
    keywords: ["how does it work", "how it works", "how does personaon work", "explain", "what is personaon", "what is it"],
    answer: "PersonaOn joins your meetings silently as an observer — on Zoom, Google Meet, or Teams. It listens, transcribes, and extracts structured context: who promised what, what was left open, what changed. After the call, everything is indexed and searchable. You can query it in plain language anytime."
  },
  {
    keywords: ["join", "auto join", "auto-join", "joins automatically", "how does it join", "calendar", "meeting invite"],
    answer: "PersonaOn connects to your Google or Outlook calendar. When a meeting starts, it auto-joins as a silent observer — no manual recording needed, no button to press. It just runs."
  },
  {
    keywords: ["search", "query", "ask", "find", "recall", "look up", "retrieve", "remember", "memory"],
    answer: "After your meetings, you can query your memory in plain language — like 'What did we promise the Acme team?' or 'What was Lauren's objection last month?' PersonaOn finds the exact context from your actual conversations, not a summary."
  },
  {
    keywords: ["founder", "founders", "startup", "ceo", "early stage", "investor meeting", "pitch"],
    answer: "Founders use PersonaOn to track investor commitments, product promises, user feedback, and hiring discussions across dozens of parallel conversations. Instead of scattered notes and Slack threads, everything is in one searchable memory layer that grows with every call."
  },
  {
    keywords: ["sales", "account manager", "ae", "account executive", "client", "deal", "crm", "renewal"],
    answer: "Sales teams use PersonaOn to remember the personal context that wins deals — a client's dog's name, a competitor objection from three calls ago, a pricing concession you offered last quarter. It's relationship intelligence that no CRM captures automatically."
  },
  {
    keywords: ["recruiter", "recruiting", "hiring", "candidate", "interview", "compensation", "offer"],
    answer: "Recruiters use PersonaOn to track candidate expectations, compensation discussions, interview feedback, and hiring manager alignment — all without manual data entry. Every conversation is indexed and searchable across the entire hiring pipeline."
  },
  {
    keywords: ["consultant", "consulting", "client work", "stakeholder", "deliverable", "report"],
    answer: "Consultants use PersonaOn to capture the exact vocabulary and framing clients use in discovery calls — so deliverables are written in the client's own language, not paraphrased. It cuts report-writing time significantly."
  },
  {
    keywords: ["manager", "executive", "1:1", "one on one", "team", "direct report", "promise", "commitment"],
    answer: "Managers use PersonaOn to never lose track of what they promised their teams — review conversations, design sign-offs, career goals. It creates an audit trail of commitments that builds trust over time."
  },
  {
    keywords: ["investor", "investing", "portfolio", "due diligence", "mrr", "valuation", "pitch"],
    answer: "Investors use PersonaOn to track valuation commitments, revenue projections, and milestone promises across hundreds of portfolio meetings. Instead of scattered notes, they have a searchable due-diligence vault that spans quarters."
  },
  {
    keywords: ["price", "pricing", "cost", "free", "plan", "subscription", "paid"],
    answer: "PersonaOn offers a free plan that covers the core capture and memory loop. Paid plans unlock deeper cross-meeting intelligence, team sharing, and advanced query features. You can start free — no credit card needed."
  },
  {
    keywords: ["privacy", "secure", "security", "data", "gdpr", "my data", "stored", "who sees"],
    answer: "Your meeting data is encrypted and stored privately — only you can query your memory vault. PersonaOn never uses your conversations to train shared models or exposes your data to other users."
  },
  {
    keywords: ["zoom", "meet", "teams", "google meet", "microsoft teams", "platform", "works with", "integrate"],
    answer: "PersonaOn works with Zoom, Google Meet, and Microsoft Teams today. It joins via calendar link — no plugins required on any participant's side."
  },
  {
    keywords: ["compound", "compounding", "over time", "gets better", "learn", "improve", "smarter"],
    answer: "The more meetings PersonaOn sees, the deeper its understanding of your relationships, recurring workflows, and communication patterns. One meeting gives you a recap. Fifteen meetings give you a working intelligence layer that understands your context, your vocabulary, and your commitments."
  },
  {
    keywords: ["start", "get started", "sign up", "try", "begin", "onboard", "how do i start"],
    answer: "Getting started takes about two minutes — connect your Google or Outlook calendar, and PersonaOn will automatically join your next meeting. No setup for other participants. No manual recording. It just runs."
  }
];

// ─── Intent Engine ─────────────────────────────────────────────────────────
function getAnswer(input: string, lastAiText: string): string {
  const q = input.toLowerCase().trim();

  // 1. Very short / ambiguous → ask clarification
  if (q.length <= 5 && !/\s/.test(q)) {
    return `Could you clarify what you mean by "${input}"? I want to make sure I give you the right context.`;
  }

  // 2. Greetings
  if (/^(hi|hey|hello|sup|yo|hiya)$/.test(q)) {
    return "Hey! Ask me anything about how PersonaOn captures work memory, how it compares to meeting summarizers, or how it fits your workflow.";
  }

  // 3. Thanks / positive
  if (/^(thanks|thank you|thx|cool|great|awesome|nice|got it|ok|okay)$/.test(q)) {
    return "Glad that helps! Anything else you'd like to know — how it works, who it's for, or how to get started?";
  }

  // 4. Score each KB entry by keyword matches
  let bestScore = 0;
  let bestAnswer = "";

  for (const entry of KB) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(kw)) {
        // Longer keyword matches score higher
        score += kw.split(" ").length * 2;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestAnswer = entry.answer;
    }
  }

  if (bestScore >= 2) return bestAnswer;

  // 5. Single-word partial match fallback
  const words = q.split(/\s+/).filter((w) => w.length > 3);
  for (const entry of KB) {
    for (const kw of entry.keywords) {
      if (words.some((w) => kw.includes(w))) {
        return entry.answer;
      }
    }
  }

  // 6. Context-aware follow-up: if last AI message was a clarification
  if (lastAiText.toLowerCase().includes("clarify")) {
    return `Got it — let me try to help. PersonaOn is a work memory layer that captures everything said in your meetings — commitments, blockers, decisions, follow-ups — and makes it queryable in plain language. What aspect were you curious about?`;
  }

  // 7. True fallback
  return "Could you rephrase that? I can help with how PersonaOn captures meeting context, how it compares to other tools, who it's built for, or how to get started.";
}

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: "5px", alignItems: "center", padding: "4px 0" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            width: "7px",
            height: "7px",
            borderRadius: "50%",
            background: "#999",
            animation: "dotBounce 1.2s infinite ease-in-out",
            animationDelay: `${i * 0.18}s`
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "greeting",
      role: "ai",
      text: "Hi — I'm a live PersonaOn demo. Ask me anything about how work memory works, what makes it different, or how to start capturing your meetings."
    }
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const [input, setInput] = useState("");
  const [askedSuggestions, setAskedSuggestions] = useState<Set<string>>(new Set());
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = chatScrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, isThinking]);

  const ask = (question: string) => {
    if (isThinking) return;

    const userMsg: Message = { id: Date.now() + "-u", role: "user", text: question };

    setMessages((prev) => {
      const lastAi = [...prev].reverse().find((m) => m.role === "ai");
      const answer = getAnswer(question, lastAi?.text ?? "");

      setIsThinking(true);
      const delay = 700 + Math.random() * 700;
      setTimeout(() => {
        const aiMsg: Message = { id: Date.now() + "-a", role: "ai", text: answer };
        setMessages((p) => [...p, aiMsg]);
        setIsThinking(false);
      }, delay);

      return [...prev, userMsg];
    });

    setAskedSuggestions((prev) => new Set(prev).add(question));
    setInput("");
  };

  const handleSubmit = () => {
    const q = input.trim();
    if (!q || isThinking) return;
    ask(q);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Only show suggestions that haven't been asked yet, up to 3
  const visibleSuggestions = SUGGESTIONS.filter((q) => !askedSuggestions.has(q)).slice(0, 3);

  return (
    <section
      style={{
        position: "relative",
        padding: "80px 0 48px 0",
        overflow: "hidden",
        textAlign: "center",
        background: "radial-gradient(circle at top, rgba(0, 98, 209, 0.03) 0%, transparent 70%)"
      }}
    >
      {/* Interactive Dot pattern bg */}
      <CursorInteractiveDots />
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "400px",
          background: "radial-gradient(circle, rgba(0, 98, 209, 0.05) 0%, transparent 60%)",
          filter: "blur(40px)",
          zIndex: 0,
          pointerEvents: "none"
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Headline */}
        <div style={{ maxWidth: "800px", margin: "0 auto", marginBottom: "60px" }}>
          <h1
            style={{
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "var(--text-dark)",
              marginBottom: "16px"
            }}
          >
            More than meeting notes.<br />
            <span style={{ color: "var(--text-light-muted)" }}>PersonaOn builds your work memory.</span>
          </h1>
          <p style={{ color: "var(--text-dark-muted)", fontSize: "1.1rem", maxWidth: "600px", margin: "0 auto 32px auto", lineHeight: "1.6" }}>
            Meetings are where work happens, but important context gets lost after calls. We capture, organize, and remember the details so you don't have to.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
            <button className="btn-black" style={{ padding: "14px 28px", borderRadius: "30px", fontSize: "1rem", fontWeight: 600 }}>
              Get Started
            </button>
            <button 
              className="btn-outline" 
              style={{ 
                padding: "14px 28px", 
                borderRadius: "30px", 
                fontSize: "1rem", 
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer"
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download for Windows
            </button>
          </div>
        </div>

        {/* Main Demo Card */}
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "10px",
            background: "rgba(255,255,255,0.6)",
            borderRadius: "32px",
            border: "1px solid rgba(255,255,255,0.9)",
            boxShadow: "0 40px 80px -20px rgba(0,0,0,0.07)",
            backdropFilter: "blur(20px)",
            animation: "float 6s ease-in-out infinite"
          }}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "24px",
              display: "grid",
              gridTemplateColumns: "300px 1fr",
              minHeight: "420px",
              border: "1px solid rgba(0,0,0,0.06)",
              overflow: "hidden"
            }}
            className="hero-grid"
          >
            {/* LEFT PANEL */}
            <div
              style={{
                borderRight: "1px solid rgba(0,0,0,0.06)",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                background: "#ffffff"
              }}
            >
              {/* Profile */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "#111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1.3rem",
                  flexShrink: 0
                }}>
                  P
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: "var(--text-dark)" }}>PersonaOn Demo</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-dark-muted)", marginTop: "2px" }}>Live demo · ask anything about how work memory works</div>
                </div>
              </div>

              {/* Live badge */}
              <div>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: "20px",
                  padding: "5px 12px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "#15803d"
                }}>
                  <span style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    animation: "livePulse 1.5s infinite"
                  }} />
                  LIVE
                </span>
              </div>

              {/* Content tiles */}
              <div style={{ marginTop: "8px" }}>
                <div style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  color: "var(--text-dark-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: "14px",
                  textAlign: "left"
                }}>
                  ACTIVE MEMORY OUTLETS
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {[
                    { 
                      label: "EXECUTIVE DOSSIER", 
                      sub: "Generate weekly alignment brief", 
                      prompt: "Generate my weekly executive summary brief",
                      icon: (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#006E61" strokeWidth="2.5">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <line x1="16" y1="13" x2="8" y2="13"></line>
                          <line x1="16" y1="17" x2="8" y2="17"></line>
                          <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                      )
                    },
                    { 
                      label: "DEAL OBJECTIONS LOG", 
                      sub: "Track pricing roadblocks", 
                      prompt: "What pricing objections did Lauren Sinclair raise?",
                      icon: (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1E50FF" strokeWidth="2.5">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                      )
                    },
                    { 
                      label: "CANDIDATE DOSSIER", 
                      sub: "Sync technical ATS specifications", 
                      prompt: "Retrieve candidate Alexander's tech profile",
                      icon: (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.5">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      )
                    }
                  ].map((tile, i) => (
                    <button
                      key={tile.label}
                      onClick={() => ask(tile.prompt)}
                      disabled={isThinking}
                      className="outlet-tile-card"
                      style={{
                        width: "100%",
                        background: "rgba(0, 0, 0, 0.015)",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        borderRadius: "14px",
                        padding: "16px 14px",
                        textAlign: "left",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        outline: "none"
                      }}
                    >
                      <div style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "#ffffff",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}>
                        {tile.icon}
                      </div>
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ fontSize: "0.62rem", fontWeight: 800, color: "var(--text-dark-muted)", letterSpacing: "0.08em", marginBottom: "2px" }}>
                          {tile.label}
                        </div>
                        <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--text-dark)", lineHeight: "1.2" }}>{tile.sub}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT PANEL: Chat */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                background: "#fafafa",
                padding: "24px",
                gap: "0"
              }}
            >
              {/* Scrollable chat area */}
              <div
                ref={chatScrollRef}
                style={{
                  flex: 1,
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  paddingBottom: "16px",
                  minHeight: "220px",
                  maxHeight: "260px"
                }}
                className="chat-scroll"
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    style={{
                      display: "flex",
                      flexDirection: msg.role === "user" ? "row-reverse" : "row",
                      alignItems: "flex-start",
                      gap: "10px",
                      animation: "msgSlide 0.3s ease"
                    }}
                  >
                    {/* AI avatar */}
                    {msg.role === "ai" && (
                      <div style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        background: "#111",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                        fontWeight: 800,
                        color: "#fff",
                        flexShrink: 0,
                        marginTop: "2px"
                      }}>
                        P
                      </div>
                    )}

                    {/* Bubble */}
                    <div
                      style={{
                        maxWidth: "82%",
                        padding: msg.role === "user" ? "11px 18px" : "0",
                        background: msg.role === "user" ? "#111111" : "transparent",
                        borderRadius: msg.role === "user" ? "20px 20px 4px 20px" : "0",
                        fontSize: "0.88rem",
                        color: msg.role === "user" ? "#ffffff" : "var(--text-dark)",
                        lineHeight: 1.55,
                        fontWeight: msg.role === "user" ? 500 : 400
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Thinking dots */}
                {isThinking && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      animation: "msgSlide 0.2s ease"
                    }}
                  >
                    <div style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      background: "#111",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      color: "#fff",
                      flexShrink: 0
                    }}>
                      P
                    </div>
                    <TypingDots />
                  </div>
                )}


              </div>

              {/* Suggestions: TRY ASKING */}
              {visibleSuggestions.length > 0 && (
                <div style={{ marginBottom: "16px" }}>
                  <div style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    color: "var(--text-dark-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "10px"
                  }}>
                    TRY ASKING
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {visibleSuggestions.map((item) => (
                      <button
                        key={item}
                        onClick={() => ask(item)}
                        disabled={isThinking}
                        style={{
                          background: "#ffffff",
                          border: "1px solid rgba(0,0,0,0.08)",
                          borderRadius: "12px",
                          padding: "11px 16px",
                          fontSize: "0.85rem",
                          color: "var(--text-dark)",
                          textAlign: "left",
                          cursor: isThinking ? "not-allowed" : "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          transition: "all 0.2s",
                          fontWeight: 500,
                          opacity: isThinking ? 0.5 : 1
                        }}
                        onMouseEnter={(e) => {
                          if (!isThinking) {
                            e.currentTarget.style.background = "#f5f5f7";
                            e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                            e.currentTarget.style.transform = "translateX(2px)";
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#ffffff";
                          e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        <span>{item}</span>
                        <span style={{ color: "#bbb", fontSize: "0.9rem", flexShrink: 0, marginLeft: "8px" }}>›</span>
                      </button>
                    ))}

                  </div>
                </div>
              )}

              {/* Input bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#ffffff",
                  border: "1.5px solid",
                  borderColor: input ? "#111" : "rgba(0,0,0,0.1)",
                  borderRadius: "30px",
                  padding: "10px 10px 10px 20px",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  boxShadow: input ? "0 0 0 3px rgba(0,0,0,0.04)" : "none"
                }}
              >
                {/* Mic icon (decorative) */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#bbb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask anything — in your own words"
                  disabled={isThinking}
                  style={{
                    flex: 1,
                    border: "none",
                    outline: "none",
                    fontSize: "0.9rem",
                    background: "transparent",
                    color: "var(--text-dark)"
                  }}
                />

                <button
                  onClick={handleSubmit}
                  disabled={!input.trim() || isThinking}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "none",
                    background: input.trim() && !isThinking ? "#111" : "#e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: input.trim() && !isThinking ? "pointer" : "not-allowed",
                    transition: "all 0.2s",
                    flexShrink: 0
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke={input.trim() && !isThinking ? "#fff" : "#aaa"}
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>

              {/* Footer label */}
              <div style={{ textAlign: "center", marginTop: "10px", fontSize: "0.72rem", color: "#ccc", letterSpacing: "0.08em", fontWeight: 600 }}>
                PERSONAON.COM/DEMO
              </div>

            </div>
          </div>
        </div>

        {/* Two bottom cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", maxWidth: "900px", margin: "32px auto 0 auto", textAlign: "left" }}
          className="hero-cards"
        >
          <div className="card-light" style={{ padding: "24px", borderRadius: "16px", border: "1px solid var(--border-light)" }}>
            <h4 style={{ fontWeight: 700, marginBottom: "8px" }}>No Choice. It Just Runs.</h4>
            <p style={{ fontSize: "0.9rem", color: "var(--text-dark-muted)" }}>
              Auto-join Google Meet, Zoom, and Teams effortlessly. Never worry about forgetting to hit record.
            </p>
          </div>
          <div className="card-light" style={{ padding: "24px", borderRadius: "16px", border: "1px solid var(--border-light)" }}>
            <h4 style={{ fontWeight: 700, marginBottom: "8px" }}>Every Detail Documented.</h4>
            <p style={{ fontSize: "0.9rem", color: "var(--text-dark-muted)" }}>
              Transcription, summary, and action items available minutes after your call wraps up.
            </p>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .chat-scroll::-webkit-scrollbar { width: 3px; }
        .chat-scroll::-webkit-scrollbar-track { background: transparent; }
        .chat-scroll::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.07); border-radius: 4px; }

        .outlet-tile-card:hover {
          transform: translateY(-2px);
          background: rgba(0, 0, 0, 0.03) !important;
          border-color: rgba(30, 80, 255, 0.15) !important;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02) !important;
        }

        @keyframes msgSlide {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotBounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
