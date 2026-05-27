"use client";

import React, { useState, useEffect, useRef } from "react";

interface Speaker {
  name: string;
  text: string;
  isUser: boolean;
  initials: string;
}

interface RememberItem {
  category: string;
  example: string;
}

interface ICPData {
  id: string;
  name: string;
  role: string;
  themeColor: string;
  pillColor: string;
  bgGlow: string;
  initials: string;
  quote: string;
  painText: string;
  beforeOutcomes: string[];
  afterOutcomes: string[];
  remembersList: RememberItem[];
  details: {
    preTitle: string;
    preSub: string;
    briefCardTitle: string;
    briefItems: string[];
    inSpeakers: Speaker[];
    postQuery: string;
    postAnswer: string;
    postSource: string;
  };
}

export default function ICPInteractiveWorkflow() {
  const [activeIcpIdx, setActiveIcpIdx] = useState(0);
  const [activePhase, setActivePhase] = useState<"pre" | "in" | "post">("pre");
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [typedText, setTypedText] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [autoplayProgress, setAutoplayProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 1.5>(1);
  
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null);

  const icps: ICPData[] = [
    {
      id: "founders",
      name: "Founders",
      role: "Sarah Jenkins, CEO at TechStart",
      themeColor: "#1E50FF", // Premium Blue
      pillColor: "rgba(30, 80, 255, 0.08)",
      bgGlow: "radial-gradient(circle, rgba(30, 80, 255, 0.15) 0%, transparent 70%)",
      initials: "SJ",
      quote: "PersonaOn is our permanent brain. As a founder, I'm talking to dozens of early users and investors. Our work memory prevents alignment drift and keeps product specs perfectly synchronized without manual notes.",
      painText: "Founders constantly switch between investor calls, hiring discussions, product meetings, customer discovery, and team coordination. Important context often gets fragmented across meetings, notes, Slack messages, and follow-ups.",
      beforeOutcomes: [
        "Scattered pitch details and user feedback",
        "Forgotten follow-ups with key investors",
        "Repeated product explanation sessions",
        "Severe cognitive fatigue from context switching"
      ],
      afterOutcomes: [
        "Persistent workflow memory of all user requests",
        "Searchable startup due diligence records",
        "Absolute context continuity between syncs",
        "AI-assisted investor email updates"
      ],
      remembersList: [
        { category: "Investor Updates", example: "Christian Vance's compliance expectations for seed routing" },
        { category: "Roadmap Commitments", example: "Sarah Jenkins' promise to release domain specifications by Tuesday" },
        { category: "Product Feedback", example: "Hemanth's blocker regarding OAuth2 before Q3 domain integrations" },
        { category: "Hiring Priorities", example: "Alexander's Next.js custom routing benefits and salary expectations" }
      ],
      details: {
        preTitle: "Syncing Calendar & Discovery Specs",
        preSub: "Retrieves integration details and stated objections from prior tester calls automatically.",
        briefCardTitle: "Sarah's Preparation Brief • TechStart",
        briefItems: [
          "Beta Tester: Hemanth Corp",
          "Prior Blocker: Compliance certifications, custom domain routing",
          "Stated Positions: Must have OAuth2 support before Q3 renewal"
        ],
        inSpeakers: [
          { name: "Hemanth", text: "We need standard compliance docs to proceed with the domain integration next Tuesday.", isUser: false, initials: "H" },
          { name: "Sarah (You)", text: "Our OAuth2 flow is fully compliant. I will carry forward the SLA paperwork tomorrow.", isUser: true, initials: "SJ" }
        ],
        postQuery: "What are Hemanth's integration requirements?",
        postAnswer: "Hemanth requires standard compliance documents for custom domain integration and full OAuth2 support before their Q3 renewal.",
        postSource: "Discovery Call • May 24, 2026"
      }
    },
    {
      id: "recruiters",
      name: "Recruiters",
      role: "Elena Rostova, Talent Partner",
      themeColor: "#EC4899", // Pink
      pillColor: "rgba(236, 72, 153, 0.08)",
      bgGlow: "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)",
      initials: "ER",
      quote: "PersonaOn allows us to compare candidate nuances side-by-side with complete objectivity. It saves us hours of debriefing and ensures every hiring decision is grounded in real discussion.",
      painText: "Recruiters manage dozens of candidate conversations, hiring manager updates, scheduling workflows, and follow-ups simultaneously. Context loss and repetitive coordination become major operational bottlenecks.",
      beforeOutcomes: [
        "Mixed candidate details across hundreds of resumes",
        "Forgotten salary expectations and timeline constraints",
        "Hiring manager misalignment on role specifications",
        "Repetitive, draining introductory screening calls"
      ],
      afterOutcomes: [
        "Clear technical capability mapping",
        "Persistent record of candidate timeline expectations",
        "Absolute alignment with hiring managers",
        "Relationship-aware candidate intelligence profiles"
      ],
      remembersList: [
        { category: "Candidate Expectations", example: "Alexander's Next.js expertise and domain layout skills" },
        { category: "Interview Feedback", example: "Scalable multi-tenant routing capability performance review" },
        { category: "Compensation Details", example: "$140,000 base expectation + standard equity package" },
        { category: "Hiring Timelines", example: "Available to start immediately upon compliance clearance" }
      ],
      details: {
        preTitle: "Candidate Technical Mapping",
        preSub: "Retrieves compensation expectations, technical backgrounds, and hiring timelines instantly.",
        briefCardTitle: "Elena's Preparation Brief • Recruitment",
        briefItems: [
          "Candidate: Alexander (Full Stack Lead)",
          "Expected Comp: $140,000 base + equity incentives",
          "Tech Profile: Next.js, Typescript, hates legacy Babel"
        ],
        inSpeakers: [
          { name: "Alexander", text: "I designed a multi-tenant custom domain routing layout that cut load time by 30%.", isUser: false, initials: "A" },
          { name: "Elena (You)", text: "Excellent. Our engineering team values scalable multi-tenant routing highly.", isUser: true, initials: "ER" }
        ],
        postQuery: "What load speed benefit did Alexander claim?",
        postAnswer: "Alexander claimed his multi-tenant custom domain routing layout cut load time by 30%.",
        postSource: "Alexander Interview • May 08, 2026"
      }
    },
    {
      id: "consultants",
      name: "Consultants",
      role: "Zoe Lin, Principal Consultant",
      themeColor: "#8B5CF6", // Purple/Violet
      pillColor: "rgba(139, 92, 246, 0.08)",
      bgGlow: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
      initials: "ZL",
      quote: "Client needs are rarely expressed clearly in transcripts. By querying my PersonaOn memory twin, I can pull direct client phrases to write high-conviction deliverables in half the time.",
      painText: "Consultants run multiple client workstreams, stakeholder workshops, and discovery reviews simultaneously. Trying to write high-conviction reports from memory or incomplete scribbled notes leads to hours of stressful manual synthesis.",
      beforeOutcomes: [
        "Incomplete notes that miss crucial stakeholder insights",
        "Hours wasted re-listening to meeting recordings",
        "Vague recommendations that clients push back on",
        "Fragmented action items across multiple Slack channels"
      ],
      afterOutcomes: [
        "Automatic, persistent context harvesting across teams",
        "Precise client vocabulary preserved for report writing",
        "Direct connection to project blockers and dates",
        "Effortless, structured summaries delivered instantly"
      ],
      remembersList: [
        { category: "Stakeholder Insights", example: "Apex Lead characterization of cart friction points" },
        { category: "Client Requirements", example: " checkout latency must drop to 100ms for ROI targets" },
        { category: "Project Blockers", example: "Database optimization compliance backlog delays" },
        { category: "Meeting Outcomes", example: "Agreement to focus audit scope entirely on database queries" }
      ],
      details: {
        preTitle: "Discovery Context Harvesting",
        preSub: "Recalls exact customer vocabulary and business bottlenecks from prior introductory calls.",
        briefCardTitle: "Zoe's Preparation Brief • Lin Consulting",
        briefItems: [
          "Client Partner: Apex Retail Group",
          "Stated Pain: Losing 20% cart conversions on checkout latency",
          "Tone Profile: Direct, metric-driven, highly focused on ROI"
        ],
        inSpeakers: [
          { name: "Apex Lead", text: "Our main friction point is cart checkout. If we can drop latency to 100ms, it unlocks massive growth.", isUser: false, initials: "AL" },
          { name: "Zoe (You)", text: "Understood. We will focus our audit on optimizing the database queries to hit that target.", isUser: true, initials: "ZL" }
        ],
        postQuery: "How did Apex describe database pain?",
        postAnswer: "They characterized checkout latency as 'our main friction point' and estimated dropping it to 100ms 'unlocks massive growth.'",
        postSource: "Consulting Discovery • May 15, 2026"
      }
    },
    {
      id: "sales",
      name: "Sales & Account Managers",
      role: "Marcus Vance, Enterprise AE",
      themeColor: "#10B981", // Emerald Green
      pillColor: "rgba(16, 185, 129, 0.08)",
      bgGlow: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)",
      initials: "MV",
      quote: "In enterprise sales, context is your ultimate moat. PersonaOn gives us a 10-second anticipation brief before calls that helps us close deals and manage accounts with deep empathy.",
      painText: "Sales and account managers are constantly talking to prospects, handling procurement barriers, negotiating contracts, and answering technical questions. Keeping track of specific client objections, key decision-makers, and previous promises is a daily battle.",
      beforeOutcomes: [
        "Incomplete CRM data and lost client alignment",
        "Forgotten personal connection points (like their dog's name)",
        "Competitor interest discovered too late during negotiations",
        "Uncoordinated handoffs between AEs and CSMs"
      ],
      afterOutcomes: [
        "10-second preparation briefs before every deal call",
        "Deeper client empathy using context persistence",
        "Precise retrieval of pricing concessions and terms",
        "Seamless deal-to-success operational transition"
      ],
      remembersList: [
        { category: "Renewal Dates", example: "Enterprise setup renewal scheduled for early Q3" },
        { category: "Procurement Blockers", example: "Waiving custom routing fees was required by Lauren" },
        { category: "Client Objections", example: "Stated preference for competitor flat rate pricing models" },
        { category: "Relationship History", example: "Client lead's retriever 'Finn' and recent hiking trip details" }
      ],
      details: {
        preTitle: "Relationship Equity Briefing",
        preSub: "Highlights personal connections, pricing concessions, and competitor concerns automatically.",
        briefCardTitle: "Marcus's Preparation Brief • Vance Accounts",
        briefItems: [
          "Client SLA Lead: Lauren Sinclair",
          "Personal Note: Golden Retriever named Finn (had hike last week)",
          "Competitor Alert: Stated interest in competitor flat rate pricing"
        ],
        inSpeakers: [
          { name: "Lauren", text: "We love the product, but our pricing has to align with the competitor’s flat SLA rate.", isUser: false, initials: "LS" },
          { name: "Marcus (You)", text: "If we waive the domain routing setup fees, can we close the deal by Friday?", isUser: true, initials: "MV" }
        ],
        postQuery: "What concession did we offer Lauren?",
        postAnswer: "We offered to waive the custom domain routing setup fees in exchange for closing the deal by Friday.",
        postSource: "Enterprise Pitch • May 20, 2026"
      }
    },
    {
      id: "investors",
      name: "Investors",
      role: "Christian Vane, Managing Partner",
      themeColor: "#06B6D4", // Cyan
      pillColor: "rgba(6, 182, 212, 0.08)",
      bgGlow: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)",
      initials: "CV",
      quote: "As an investor, you hear hundreds of pitches. PersonaOn serves as our permanent due diligence vault, letting us track valuation commitments and metrics over quarters of meetings.",
      painText: "Investors listen to hundreds of pitches, founder updates, and portfolio metrics every month. Tracking valuation promises, engineering milestone commits, and MRR growth across quarters becomes a massive bookkeeping burden.",
      beforeOutcomes: [
        "Fragmented startup metrics scattered in legacy spreadsheets",
        "Forgotten milestones and target valuation dates",
        "Weak quarterly comparison data between review pitches",
        "Time-draining note-taking during critical partner briefings"
      ],
      afterOutcomes: [
        "Compounded, persistent due diligence records",
        "Immediate audit trail of founder commitments",
        "Unbiased comparative analysis of growth metrics",
        "Seamless transfer of deal context across partners"
      ],
      remembersList: [
        { category: "Valuation Prompts", example: "TechStart seed round seeking $1.5M over 18 months" },
        { category: "Milestone Promises", example: "Founder Sarah Jenkins' revenue projection of $80k by October" },
        { category: "Objection History", example: "Vane Capital requirement for compliance audits on accounts" },
        { category: "Startup Performance", example: "TechStart MRR claims of $45,000 growing at 12% MoM" }
      ],
      details: {
        preTitle: "Due Diligence Auditing",
        preSub: "Tracks milestone promises, runway commitments, and MRR performance stats from early pitches.",
        briefCardTitle: "Christian's Preparation Brief • Vane Capital",
        briefItems: [
          "Startup: TechStart Corp (Seed Pitch)",
          "MRR Claims: $45,000 MRR growing at 12% MoM",
          "Target Runway: Seeking $1.5M for 18 months of engineering scaling"
        ],
        inSpeakers: [
          { name: "Sarah", text: "Our target MRR is $80k by October. We're waiving custom pricing for early customers.", isUser: false, initials: "S" },
          { name: "Christian (You)", text: "If we lead the seed round, we will require compliance audits on early accounts.", isUser: true, initials: "CV" }
        ],
        postQuery: "What is TechStart's revenue target?",
        postAnswer: "TechStart's target MRR is $80,000 by October, and they are waiving custom pricing for early customers.",
        postSource: "TechStart Pitch • May 02, 2026"
      }
    },
    {
      id: "managers",
      name: "Managers & Executives",
      role: "David Cole, VP of Product",
      themeColor: "#F59E0B", // Amber/Gold
      pillColor: "rgba(245, 158, 11, 0.08)",
      bgGlow: "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)",
      initials: "DC",
      quote: "Leading remote teams requires flawless alignment. With PersonaOn, I don't get distracted by taking notes. I can look my team in the eye, knowing our collective promises are fully preserved.",
      painText: "Leaders manage dozens of one-on-ones, product updates, resource alignments, and executive reviews. Details of employee commitments, critical design sign-offs, and project hurdles quickly blur together.",
      beforeOutcomes: [
        "Forgotten commitments made during rapid-fire 1:1 syncs",
        "Alignment drift across decentralized project tracks",
        "Wasted meeting time recapping previous blocker states",
        "Disjointed team tracking without structured records"
      ],
      afterOutcomes: [
        "Absolute audit trail of executive design commitments",
        "Flawless project alignment across teams",
        "Effortless recall of career blocker status details",
        "Reduced meeting loops through automated context persistence"
      ],
      remembersList: [
        { category: "Team Promises", example: "Promise to review Figma domain layouts before Friday sync" },
        { category: "Product Specs", example: "Sarah Jenkins' custom domain layout compliance specifications" },
        { category: "Career Goals", example: "Sarah's design track career targets and blocker remediation" },
        { category: "Project Blockers", example: "Sarah waiting on client design compliance spec sheets" }
      ],
      details: {
        preTitle: "1:1 Promise Auditing",
        preSub: "Reviews commitments, design targets, and unresolved career blockers automatically.",
        briefCardTitle: "David's Preparation Brief • Internal Sync",
        briefItems: [
          "Direct Report: Sarah (Product Design Lead)",
          "Prior Promise: Review Figma domain mockups before Friday",
          "Key Blocker: Waiting on client design compliance details"
        ],
        inSpeakers: [
          { name: "Sarah", text: "I finished the domain layout, but I need David's signoff on compliance rules.", isUser: false, initials: "S" },
          { name: "David (You)", text: "I will sign off on the compliance specifications by tomorrow morning, Sarah.", isUser: true, initials: "DC" }
        ],
        postQuery: "What did David promise Sarah?",
        postAnswer: "David promised to sign off on the design compliance specifications by tomorrow morning.",
        postSource: "Product Sync 1:1 • May 12, 2026"
      }
    }
  ];

  const activeIcp = icps[activeIcpIdx];

  // Simulation parameters
  const baseDuration = 6000;
  const stageDuration = baseDuration / playbackSpeed;

  // Timeline progression
  useEffect(() => {
    if (!isAutoplay) {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      return;
    }

    const tickInterval = 50;
    const totalTicks = stageDuration / tickInterval;
    let currentTick = (autoplayProgress / 100) * totalTicks;

    progressTimerRef.current = setInterval(() => {
      currentTick += 1;
      const nextProgress = (currentTick / totalTicks) * 100;

      if (nextProgress >= 100) {
        setAutoplayProgress(0);
        setActivePhase((prev) => {
          if (prev === "pre") return "in";
          if (prev === "in") return "post";
          return "pre";
        });
      } else {
        setAutoplayProgress(nextProgress);
      }
    }, tickInterval);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    };
  }, [isAutoplay, activePhase, activeIcpIdx, playbackSpeed]);

  // Typewriter prompt query
  useEffect(() => {
    if (activePhase !== "post") {
      setTypedText("");
      setShowAnswer(false);
      return;
    }

    setShowAnswer(false);
    let currentText = "";
    const targetQuery = activeIcp.details.postQuery;
    let i = 0;
    const speed = 25 / playbackSpeed;

    const interval = setInterval(() => {
      if (i < targetQuery.length) {
        currentText += targetQuery.charAt(i);
        setTypedText(currentText);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setShowAnswer(true);
        }, 300);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [activePhase, activeIcpIdx, playbackSpeed]);

  const handlePhaseChange = (phase: "pre" | "in" | "post") => {
    setActivePhase(phase);
    setAutoplayProgress(0);
    setIsAutoplay(false);
  };

  const togglePlay = () => {
    setIsAutoplay(!isAutoplay);
  };

  const restartSimulation = () => {
    setActivePhase("pre");
    setAutoplayProgress(0);
    setIsAutoplay(true);
  };

  return (
    <section 
      id="icp-blog" 
      className="section-padding" 
      style={{ 
        background: "var(--bg-light)", 
        borderBottom: "1px solid rgba(0, 0, 0, 0.03)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Decorative radial gradients */}
      <div 
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "950px",
          height: "600px",
          background: activeIcp.bgGlow,
          filter: "blur(90px)",
          pointerEvents: "none",
          transition: "background 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ 
            fontSize: "0.75rem", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            color: "var(--text-dark-muted)", 
            fontWeight: 800, 
            marginBottom: "12px" 
          }}>
            WORKFLOW INTELLIGENCE
          </div>
          
          <h2 style={{ 
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)", 
            fontWeight: 800, 
            letterSpacing: "-0.04em", 
            color: "var(--text-dark)",
            lineHeight: 1.05,
            marginBottom: "8px" 
          }}>
            Compounding operational memory.
          </h2>
          
          <h2 style={{ 
            fontSize: "clamp(2.4rem, 5vw, 3.8rem)", 
            fontWeight: 400, 
            fontStyle: "italic", 
            fontFamily: "'Instrument Serif', Georgia, serif", 
            color: activeIcp.themeColor, 
            letterSpacing: "-0.02em", 
            marginBottom: "24px",
            lineHeight: 1.05,
            transition: "color 0.4s"
          }}>
            How relationships keep moving forward.
          </h2>
          
          <p style={{ 
            color: "var(--text-dark-muted)", 
            fontSize: "1.05rem", 
            maxWidth: "600px", 
            margin: "0 auto",
            lineHeight: 1.5
          }}>
            Select your role below to see how PersonaOn resolves communication chaos by capturing, indexing, and recalling details exactly when they matter most.
          </p>
        </div>

        {/* 6-ICP Selector Row */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "40px",
          maxWidth: "1000px",
          margin: "0 auto 40px auto"
        }}>
          {icps.map((icp, idx) => {
            const isActive = idx === activeIcpIdx;
            return (
              <button
                key={icp.id}
                onClick={() => {
                  setActiveIcpIdx(idx);
                  setActivePhase("pre");
                  setAutoplayProgress(0);
                }}
                style={{
                  background: isActive ? "#000000" : "#ffffff",
                  color: isActive ? "#ffffff" : "#555555",
                  border: isActive ? "1px solid #000000" : "1px solid rgba(0,0,0,0.06)",
                  padding: "10px 22px",
                  borderRadius: "30px",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  boxShadow: isActive ? "0 8px 20px rgba(0,0,0,0.08)" : "0 2px 6px rgba(0,0,0,0.01)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                {isActive && (
                  <span style={{ 
                    width: "6px", 
                    height: "6px", 
                    background: icp.themeColor, 
                    borderRadius: "50%",
                    boxShadow: `0 0 8px ${icp.themeColor}`
                  }}></span>
                )}
                {icp.name}
              </button>
            );
          })}
        </div>

        {/* NEW SECTION: Stories & Outcome Panel (Before / After & Pain) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "36px",
          maxWidth: "1050px",
          margin: "0 auto 36px auto",
          animation: "fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
        className="simulator-grid"
        >
          {/* Left Pane: Operational Reality (The Pain) */}
          <div style={{
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.05)",
            borderRadius: "24px",
            padding: "36px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              <div style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: activeIcp.themeColor,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
                display: "inline-block",
                padding: "4px 10px",
                borderRadius: "10px",
                background: activeIcp.pillColor
              }}>
                The Operational Reality
              </div>
              <h3 style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "var(--text-dark)",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: "16px"
              }}>
                Daily communication chaos.
              </h3>
              <p style={{
                fontSize: "1rem",
                color: "var(--text-dark-muted)",
                lineHeight: 1.6,
                marginBottom: "24px"
              }}>
                {activeIcp.painText}
              </p>
            </div>
            
            <div style={{
              borderTop: "1px solid rgba(0,0,0,0.05)",
              paddingTop: "20px",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <span style={{ fontSize: "1.3rem" }}>💡</span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-dark-muted)", fontWeight: 500, lineHeight: 1.4 }}>
                PersonaOn bridges this gaps automatically, operating silently as your persistent twin.
              </span>
            </div>
          </div>

          {/* Right Pane: Before vs After Outcomes Comparison */}
          <div style={{
            background: "#ffffff",
            border: "1px solid rgba(0,0,0,0.05)",
            borderRadius: "24px",
            padding: "36px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px"
          }}
          className="before-after-grid"
          >
            {/* Before Column */}
            <div style={{ borderRight: "1px solid rgba(0,0,0,0.05)", paddingRight: "16px" }} className="before-col">
              <div style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "#e11d48",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "16px"
              }}>
                Before PersonaOn
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {activeIcp.beforeOutcomes.map((item, idx) => (
                  <li key={idx} style={{
                    fontSize: "0.85rem",
                    color: "var(--text-dark-muted)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    lineHeight: 1.45
                  }}>
                    <span style={{ color: "#ef4444", fontWeight: 800 }}>✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After Column */}
            <div>
              <div style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "#16a34a",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "16px"
              }}>
                After PersonaOn
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {activeIcp.afterOutcomes.map((item, idx) => (
                  <li key={idx} style={{
                    fontSize: "0.85rem",
                    color: "var(--text-dark)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    lineHeight: 1.45,
                    fontWeight: 500
                  }}>
                    <span style={{ color: activeIcp.themeColor, fontWeight: 900 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Live Simulator Dashboard Box */}
        <div style={{
          background: "#ffffff",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          borderRadius: "32px",
          padding: "10px",
          boxShadow: "0 40px 80px -25px rgba(0,0,0,0.06)",
          maxWidth: "1050px",
          margin: "0 auto 36px auto",
          position: "relative"
        }}>
          
          {/* Glassmorphic simulation container */}
          <div style={{
            background: "linear-gradient(to bottom, #ffffff, #fafafb)",
            borderRadius: "24px",
            border: "1px solid rgba(255, 255, 255, 0.8)",
            padding: "36px",
            display: "grid",
            gridTemplateColumns: "1.25fr 1fr",
            gap: "44px",
            alignItems: "stretch"
          }}
          className="simulator-grid"
          >
            
            {/* Left Column: Visual Simulator Console (Dark Room) */}
            <div style={{ 
              background: "#0a0a0a", 
              borderRadius: "20px", 
              padding: "32px", 
              minHeight: "410px", 
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.04)",
              boxShadow: "inset 0 4px 40px rgba(0,0,0,0.6), 0 10px 30px rgba(0,0,0,0.03)"
            }}>
              
              {/* Shifting radial background inside console */}
              <div style={{
                position: "absolute",
                top: "10%",
                left: "10%",
                width: "250px",
                height: "250px",
                background: `radial-gradient(circle, ${activeIcp.themeColor}12 0%, transparent 70%)`,
                pointerEvents: "none",
                zIndex: 0
              }} />

              {/* Console Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ 
                    width: "8px", 
                    height: "8px", 
                    background: activePhase === "in" ? "#ef4444" : "#22c55e", 
                    borderRadius: "50%",
                    animation: activePhase === "in" ? "pulseBorder 1.2s infinite" : "none"
                  }}></span>
                  <span style={{ 
                    fontSize: "0.75rem", 
                    fontWeight: 700, 
                    letterSpacing: "0.08em", 
                    color: "#888888", 
                    fontFamily: "monospace" 
                  }}>
                    {activePhase === "pre" ? "PREPARATION_STAGE" : activePhase === "in" ? "LISTENING_AND_ORGANIZING" : "CONTEXT_SAFELY_SECURED"}
                  </span>
                </div>
                
                <div style={{
                  fontSize: "0.7rem",
                  background: "rgba(255,255,255,0.05)",
                  padding: "5px 12px",
                  borderRadius: "20px",
                  fontWeight: 700,
                  color: activeIcp.themeColor,
                  border: `1px solid ${activeIcp.themeColor}33`,
                  letterSpacing: "0.03em"
                }}>
                  {activePhase === "pre" ? "PRE-MEET" : activePhase === "in" ? "IN-MEET" : "POST-MEET"}
                </div>
              </div>

              {/* STAGE 1 VISUALIZATION: Pre-Call Briefing Sync */}
              {activePhase === "pre" && (
                <div style={{ 
                  position: "relative", 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  gap: "24px", 
                  margin: "44px 0", 
                  zIndex: 1, 
                  animation: "fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)" 
                }}>
                  
                  <div style={{ display: "flex", alignItems: "center", gap: "28px", position: "relative" }}>
                    
                    {/* Calendar Event Node */}
                    <div style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "18px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
                    }}>
                      <div style={{
                        background: activeIcp.themeColor,
                        width: "100%",
                        height: "14px",
                        position: "absolute",
                        top: 0,
                        borderTopLeftRadius: "17px",
                        borderTopRightRadius: "17px"
                      }} />
                      <div style={{ fontSize: "0.85rem", fontWeight: 800, marginTop: "12px", color: "#fff" }}>MAY</div>
                      <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", lineHeight: 1 }}>26</div>
                    </div>

                    {/* Middle animated data sync line */}
                    <div style={{ width: "90px", height: "4px", background: "rgba(255,255,255,0.08)", borderRadius: "2px", position: "relative", overflow: "hidden" }}>
                      <div className="cascade-bar" style={{
                        position: "absolute",
                        top: 0, left: 0, height: "100%", width: "40px",
                        background: `linear-gradient(to right, transparent, ${activeIcp.themeColor})`,
                        animation: "dataStream 1.5s infinite linear"
                      }} />
                      
                      {/* Flowing neural particles */}
                      <span className="dot-particle" style={{ left: "10%", animationDelay: "0s" }}></span>
                      <span className="dot-particle" style={{ left: "40%", animationDelay: "0.3s" }}></span>
                      <span className="dot-particle" style={{ left: "70%", animationDelay: "0.6s" }}></span>
                    </div>

                    {/* Right: Pulsing Memory Orb */}
                    <div className="pulse-orb" style={{
                      width: "74px",
                      height: "74px",
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${activeIcp.themeColor}1a 0%, transparent 75%)`,
                      border: `2px solid ${activeIcp.themeColor}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: `0 0 24px ${activeIcp.themeColor}33`,
                      animation: "pulseOrb 2.5s infinite ease-in-out"
                    }}>
                      <div style={{ 
                        width: "36px", 
                        height: "36px", 
                        borderRadius: "50%", 
                        background: "#000", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        fontSize: "0.95rem", 
                        color: activeIcp.themeColor, 
                        fontWeight: 800,
                        border: "1px solid rgba(255,255,255,0.1)"
                      }}>
                        P
                      </div>
                    </div>

                  </div>

                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "-0.01em" }}>Preparing from past context...</div>
                    <div style={{ fontSize: "0.8rem", color: "#888888", marginTop: "6px" }}>Indexing prior commitments, blockers, and dates</div>
                  </div>

                </div>
              )}

              {/* STAGE 2 VISUALIZATION: In-Meeting Capture */}
              {activePhase === "in" && (
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  gap: "28px", 
                  margin: "34px 0", 
                  zIndex: 1, 
                  animation: "fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)" 
                }}>
                  
                  <div style={{ display: "flex", gap: "24px", alignItems: "center", justifyContent: "center" }}>
                    
                    {/* Participant 1 */}
                    <div style={{ textAlign: "center" }}>
                      <div className="active-border" style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        border: `2px solid rgba(255,255,255,0.1)`,
                        overflow: "hidden",
                        background: "#222222",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#fff"
                      }}>
                        {activeIcp.details.inSpeakers[0].initials}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#888", marginTop: "6px", fontWeight: 500 }}>
                        {activeIcp.details.inSpeakers[0].name.split(" ")[0]}
                      </div>
                    </div>

                    {/* Passive Soundwave visualizer */}
                    <div style={{
                      width: "84px",
                      height: "84px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative"
                    }}>
                      <div style={{ display: "flex", gap: "4px", alignItems: "center", height: "34px" }}>
                        {[0.4, 0.8, 0.5, 0.95, 0.3, 0.7, 0.4].map((val, idx) => (
                          <div 
                            key={idx} 
                            style={{ 
                              width: "3px", 
                              height: "100%", 
                              background: activeIcp.themeColor, 
                              borderRadius: "2px",
                              transformOrigin: "center",
                              animation: `soundWave 1.1s infinite ease-in-out alternate`,
                              animationDelay: `${idx * 0.12}s`,
                              transform: `scaleY(${val})`
                            }} 
                          />
                        ))}
                      </div>
                      <div style={{ 
                        position: "absolute", 
                        bottom: "-14px", 
                        fontSize: "0.6rem", 
                        color: activeIcp.themeColor, 
                        fontWeight: 800, 
                        textTransform: "uppercase", 
                        letterSpacing: "0.08em" 
                      }}>
                        ORGANIZING LISTENING
                      </div>
                    </div>

                    {/* Participant 2 (Active Speaker Glow) */}
                    <div style={{ textAlign: "center" }}>
                      <div className="active-border" style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        border: `2px solid ${activeIcp.themeColor}`,
                        boxShadow: `0 0 16px ${activeIcp.themeColor}44`,
                        overflow: "hidden",
                        background: activeIcp.themeColor,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#fff",
                        animation: "pulseBorder 1.5s infinite"
                      }}>
                        {activeIcp.initials}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: activeIcp.themeColor, marginTop: "6px", fontWeight: 700 }}>
                        {activeIcp.details.inSpeakers[1].name.split(" ")[0]}
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1rem", fontWeight: 700 }}>Listening and organizing important discussion points...</div>
                    <div style={{ fontSize: "0.8rem", color: "#888888", marginTop: "6px" }}>Mapping out speaker alignments automatically</div>
                  </div>

                </div>
              )}

              {/* STAGE 3 VISUALIZATION: Post-Call Memory compounding */}
              {activePhase === "post" && (
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  gap: "20px", 
                  margin: "34px 0", 
                  zIndex: 1, 
                  animation: "fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)" 
                }}>
                  
                  {/* Floating AI vault block */}
                  <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
                    <div className="rotate-vault" style={{
                      width: "84px",
                      height: "84px",
                      borderRadius: "24px",
                      background: `linear-gradient(135deg, ${activeIcp.themeColor}aa 0%, #111111 100%)`,
                      border: `1px solid ${activeIcp.themeColor}33`,
                      boxShadow: `0 12px 30px ${activeIcp.themeColor}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.2rem",
                      animation: "floatVault 4s infinite ease-in-out",
                      borderTopColor: "rgba(255,255,255,0.15)"
                    }}>
                      ⚡
                    </div>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "1rem", fontWeight: 700 }}>AI workflow Twin synced and ready...</div>
                    <div style={{ fontSize: "0.8rem", color: "#888888", marginTop: "6px" }}>Recalling previous commitments and discussion context</div>
                  </div>

                </div>
              )}

              {/* Console Footer */}
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                borderTop: "1px solid rgba(255,255,255,0.06)", 
                paddingTop: "16px", 
                zIndex: 1 
              }}>
                <button
                  onClick={togglePlay}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#888888",
                    fontSize: "0.75rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontWeight: 700,
                    padding: 0,
                    transition: "color 0.2s"
                  }}
                >
                  <span style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: isAutoplay ? activeIcp.themeColor : "#ef4444",
                    boxShadow: isAutoplay ? `0 0 8px ${activeIcp.themeColor}` : "none",
                    animation: isAutoplay ? "pulseOrb 1.5s infinite" : "none"
                  }}></span>
                  {isAutoplay ? "Simulator running" : "Simulator paused"}
                </button>

                <div style={{ fontSize: "0.75rem", color: "#888888", fontWeight: 600 }}>
                  Active Stage: <span style={{ color: activeIcp.themeColor, fontWeight: 800 }}>
                    {activePhase === "pre" ? "1 / 3" : activePhase === "in" ? "2 / 3" : "3 / 3"}
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column: Simulated Interactive Phase Details panel */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              
              {/* Stepper Timeline Navigation Tabs */}
              <div>
                <div style={{ display: "flex", gap: "6px", marginBottom: "28px" }}>
                  {(["pre", "in", "post"] as const).map((phase) => {
                    const isActive = activePhase === phase;
                    const phaseTitle = phase === "pre" ? "1. PRE-CALL" : phase === "in" ? "2. LIVE-CALL" : "3. POST-CALL";
                    return (
                      <button
                        key={phase}
                        onClick={() => handlePhaseChange(phase)}
                        style={{
                          flex: 1,
                          background: isActive ? activeIcp.pillColor : "transparent",
                          color: isActive ? activeIcp.themeColor : "var(--text-dark-muted)",
                          border: "none",
                          padding: "11px 8px",
                          borderRadius: "14px",
                          fontSize: "0.8rem",
                          fontWeight: 800,
                          cursor: "pointer",
                          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                          letterSpacing: "0.02em"
                        }}
                      >
                        {phaseTitle}
                      </button>
                    );
                  })}
                </div>

                {/* DYNAMIC CONTENT VIEWER */}
                <div style={{ minHeight: "260px" }}>
                  
                  {/* PRE-MEET BRIEF CARD SCREEN */}
                  {activePhase === "pre" && (
                    <div style={{ animation: "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                      <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "8px", letterSpacing: "-0.02em" }}>
                        {activeIcp.details.preTitle}
                      </h3>
                      <p style={{ fontSize: "0.95rem", color: "var(--text-dark-muted)", lineHeight: "1.5", marginBottom: "20px" }}>
                        {activeIcp.details.preSub}
                      </p>

                      {/* Mini briefing card */}
                      <div style={{ 
                        background: "#ffffff", 
                        border: "1px solid rgba(0,0,0,0.06)", 
                        borderRadius: "16px", 
                        padding: "20px",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.02)"
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", borderBottom: "1px solid rgba(0,0,0,0.05)", paddingBottom: "10px" }}>
                          <span style={{ width: "6px", height: "6px", background: activeIcp.themeColor, borderRadius: "50%" }}></span>
                          <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--text-dark-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                            {activeIcp.details.briefCardTitle}
                          </span>
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.85rem", color: "var(--text-dark)" }}>
                          {activeIcp.details.briefItems.map((item, idx) => (
                            <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "8px", lineHeight: 1.4 }}>
                              <span style={{ color: activeIcp.themeColor, fontWeight: 800 }}>↳</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* IN-MEETING DIALOGUE SIMULATION SCREEN */}
                  {activePhase === "in" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", animation: "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                      <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "4px", letterSpacing: "-0.02em" }}>
                        Silent Context Capture
                      </h3>
                      <p style={{ fontSize: "0.95rem", color: "var(--text-dark-muted)", lineHeight: "1.5", marginBottom: "8px" }}>
                        PersonaOn maps out speaker dynamics, transcribing and sorting deliverables automatically without interrupting the conversation.
                      </p>

                      {/* Chat bubble stream */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        {activeIcp.details.inSpeakers.map((speak, idx) => (
                          <div key={idx} style={{
                            background: speak.isUser ? activeIcp.pillColor : "#f5f5f7",
                            padding: "12px 18px",
                            borderRadius: speak.isUser ? "16px 16px 0 16px" : "16px 16px 16px 0",
                            border: speak.isUser ? `1px solid ${activeIcp.themeColor}1a` : "1px solid rgba(0,0,0,0.04)",
                            alignSelf: speak.isUser ? "flex-end" : "flex-start",
                            maxWidth: "85%",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.01)"
                          }}>
                            <div style={{ 
                              display: "flex", 
                              alignItems: "center", 
                              gap: "6px", 
                              marginBottom: "4px", 
                              justifyContent: speak.isUser ? "flex-end" : "flex-start" 
                            }}>
                              <div style={{
                                width: "16px",
                                height: "16px",
                                borderRadius: "50%",
                                background: speak.isUser ? activeIcp.themeColor : "#999999",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "0.55rem",
                                fontWeight: 800,
                                color: "#fff"
                              }}>
                                {speak.initials}
                              </div>
                              <span style={{ fontSize: "0.7rem", fontWeight: 800, color: speak.isUser ? activeIcp.themeColor : "#666666" }}>
                                {speak.name}
                              </span>
                            </div>
                            <div style={{ fontSize: "0.85rem", color: "var(--text-dark)", lineHeight: "1.4" }}>
                              "{speak.text}"
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* POST-MEET VAULT QUERY SIMULATION SCREEN */}
                  {activePhase === "post" && (
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px", animation: "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                      <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-dark)", marginBottom: "4px", letterSpacing: "-0.02em" }}>
                        Meeting intelligence safely remembered.
                      </h3>
                      <p style={{ fontSize: "0.95rem", color: "var(--text-dark-muted)", lineHeight: "1.5", marginBottom: "8px" }}>
                        Ask questions in plain language to recall client choices, next actions, and specific promises instantly.
                      </p>

                      {/* Prompt and answer terminal */}
                      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <div style={{ 
                          background: "#fafafa", 
                          border: "1px solid rgba(0,0,0,0.06)", 
                          padding: "11px 18px", 
                          borderRadius: "20px",
                          fontSize: "0.85rem",
                          fontFamily: "monospace",
                          color: "#111111",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          boxShadow: "inset 0 1px 3px rgba(0,0,0,0.02)"
                        }}>
                          <span style={{ color: activeIcp.themeColor, fontWeight: 800 }}>?</span>
                          <span style={{ fontWeight: 600 }}>{typedText}</span>
                          <span className="cursor-blink" style={{ width: "2px", height: "13px", background: activeIcp.themeColor }} />
                        </div>

                        <div style={{
                          background: "#ffffff",
                          border: `1px solid ${activeIcp.themeColor}1a`,
                          borderRadius: "16px",
                          padding: "16px 20px",
                          opacity: showAnswer ? 1 : 0,
                          transform: showAnswer ? "translateY(0)" : "translateY(6px)",
                          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                          boxShadow: "0 6px 20px rgba(0,0,0,0.015)"
                        }}>
                          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "6px" }}>
                            <span style={{ width: "6px", height: "6px", background: activeIcp.themeColor, borderRadius: "50%" }}></span>
                            <span style={{ fontSize: "0.75rem", fontWeight: 800, color: activeIcp.themeColor, letterSpacing: "0.02em" }}>
                              Saved Context: {activeIcp.details.postSource.split("•")[0]}
                            </span>
                          </div>
                          <p style={{ fontSize: "0.85rem", color: "var(--text-dark)", lineHeight: "1.45" }}>
                            {activeIcp.details.postAnswer}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* TIMELINE CONTROLS ROW */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                borderTop: "1px solid rgba(0,0,0,0.06)",
                paddingTop: "20px",
                marginTop: "20px"
              }}>
                <button
                  onClick={togglePlay}
                  style={{
                    background: "rgba(0,0,0,0.03)",
                    border: "none",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    transition: "all 0.2s"
                  }}
                  title={isAutoplay ? "Pause Simulation" : "Play Simulation"}
                >
                  {isAutoplay ? "⏸" : "▶"}
                </button>

                <button
                  onClick={restartSimulation}
                  style={{
                    background: "rgba(0,0,0,0.03)",
                    border: "none",
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    transition: "all 0.2s"
                  }}
                  title="Restart Simulation"
                >
                  🔄
                </button>

                {/* Progress bar line */}
                <div style={{
                  flex: 1,
                  height: "4px",
                  background: "rgba(0,0,0,0.05)",
                  borderRadius: "2px",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  <div style={{
                    width: `${autoplayProgress}%`,
                    height: "100%",
                    background: activeIcp.themeColor,
                    borderRadius: "2px",
                    transition: isAutoplay ? "width 0.05s linear" : "width 0.3s ease"
                  }} />
                </div>

                <button
                  onClick={() => setPlaybackSpeed((prev) => prev === 1 ? 1.5 : 1)}
                  style={{
                    background: "transparent",
                    border: "none",
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    color: "var(--text-dark-muted)",
                    cursor: "pointer",
                    padding: "4px 8px",
                    borderRadius: "8px",
                    transition: "all 0.2s"
                  }}
                >
                  {playbackSpeed}x Speed
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* NEW SECTION: What PersonaOn Remembers Automatically */}
        <div style={{
          maxWidth: "1050px",
          margin: "0 auto 44px auto",
          background: "#ffffff",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "24px",
          padding: "36px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
        }}>
          <div style={{ textAlign: "center", marginBottom: "28px" }}>
            <div style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: activeIcp.themeColor,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "8px"
            }}>
              Persistent Context Engine
            </div>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--text-dark)",
              letterSpacing: "-0.03em"
            }}>
              What PersonaOn Remembers
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-dark-muted)", marginTop: "4px" }}>
              Key variables captured silently and cataloged into your compounding operational memory.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px"
          }}
          className="remembers-grid"
          >
            {activeIcp.remembersList.map((item, idx) => (
              <div key={idx} style={{
                background: "#fafafb",
                border: "1px solid rgba(0,0,0,0.04)",
                borderRadius: "16px",
                padding: "20px",
                transition: "all 0.3s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = activeIcp.themeColor + "33";
                e.currentTarget.style.transform = "translateY(-1.5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              >
                <div style={{
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  color: activeIcp.themeColor,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "8px"
                }}>
                  {item.category}
                </div>
                <p style={{
                  fontSize: "0.85rem",
                  color: "var(--text-dark)",
                  lineHeight: "1.4",
                  fontWeight: 500
                }}>
                  "{item.example}"
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* NEW SECTION: Compounding Memory Concept */}
        <div style={{
          maxWidth: "1050px",
          margin: "0 auto 44px auto",
          background: "linear-gradient(135deg, #09090b 0%, #18181b 100%)",
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "28px",
          padding: "44px",
          color: "#ffffff",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
        }}>
          {/* Subtle glow mesh inside */}
          <div style={{
            position: "absolute",
            bottom: "-30%",
            right: "-10%",
            width: "350px",
            height: "350px",
            background: `radial-gradient(circle, ${activeIcp.themeColor}22 0%, transparent 70%)`,
            pointerEvents: "none",
            filter: "blur(50px)"
          }} />

          <div style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: "40px",
            alignItems: "center"
          }}
          className="simulator-grid"
          >
            <div>
              <div style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: activeIcp.themeColor,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginBottom: "12px"
              }}>
                Compounding Operational Layer
              </div>
              <h3 style={{
                fontSize: "1.9rem",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                marginBottom: "16px"
              }}>
                Memory that grows with your workflows.
              </h3>
              <p style={{
                fontSize: "0.95rem",
                color: "#a1a1aa",
                lineHeight: 1.6,
                marginBottom: "20px"
              }}>
                Traditional summarizers listen to a single meeting, send a static recap email, and completely forget it the next hour.
              </p>
              <p style={{
                fontSize: "0.95rem",
                color: "#a1a1aa",
                lineHeight: 1.6
              }}>
                PersonaOn is a **living memory layer**. The more meetings, follow-ups, and commitments it indexes, the deeper its grasp of your recurring relationships, ongoing deliverables, and operational alignments.
              </p>
            </div>

            {/* Micro visual timeline graph of compounding context */}
            <div style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "20px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              position: "relative"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "#71717a", fontWeight: 700 }}>
                <span>MEETINGS SEEN</span>
                <span style={{ color: activeIcp.themeColor }}>COMPOUNDING IQ LEVEL</span>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { label: "1 Meeting", width: "30%", val: "Simple recap only", glow: false },
                  { label: "5 Meetings", width: "55%", val: "Cross-meeting promises tracked", glow: false },
                  { label: "15+ Meetings", width: "90%", val: "Deep relationship & blocker intelligence", glow: true }
                ].map((row, idx) => (
                  <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem" }}>
                      <span style={{ fontWeight: 600, color: row.glow ? "#fff" : "#a1a1aa" }}>{row.label}</span>
                      <span style={{ fontSize: "0.75rem", color: row.glow ? activeIcp.themeColor : "#71717a", fontWeight: 600 }}>{row.val}</span>
                    </div>
                    <div style={{ height: "6px", background: "rgba(255,255,255,0.05)", borderRadius: "3px", overflow: "hidden" }}>
                      <div style={{
                        width: row.width,
                        height: "100%",
                        background: row.glow ? `linear-gradient(to right, ${activeIcp.themeColor}, #fff)` : "rgba(255,255,255,0.2)",
                        borderRadius: "3px",
                        boxShadow: row.glow ? `0 0 10px ${activeIcp.themeColor}` : "none"
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* NEW SECTION: Differentiation Layer Matrix */}
        <div style={{
          maxWidth: "1050px",
          margin: "0 auto 44px auto",
          background: "#ffffff",
          border: "1px solid rgba(0,0,0,0.05)",
          borderRadius: "24px",
          padding: "36px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
        }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              color: "var(--text-dark-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "8px"
            }}>
              How We Differ
            </div>
            <h3 style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--text-dark)",
              letterSpacing: "-0.03em"
            }}>
              More than another summary tool.
            </h3>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "28px",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            paddingTop: "24px"
          }}
          className="simulator-grid"
          >
            {/* Traditional Summarizers */}
            <div style={{
              background: "#fafafb",
              borderRadius: "18px",
              padding: "24px",
              border: "1px solid rgba(0,0,0,0.03)"
            }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text-dark-muted)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Traditional Meeting Tools
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem", color: "var(--text-dark-muted)" }}>
                <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ color: "#ef4444" }}>✕</span>
                  <span>Summarize individual meetings in isolation</span>
                </li>
                <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ color: "#ef4444" }}>✕</span>
                  <span>Store static transcripts in messy dashboards</span>
                </li>
                <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ color: "#ef4444" }}>✕</span>
                  <span>Require manual tagging and categorization</span>
                </li>
              </ul>
            </div>

            {/* PersonaOn */}
            <div style={{
              background: "linear-gradient(to bottom, #ffffff, #fafafb)",
              borderRadius: "18px",
              padding: "24px",
              border: `1px solid ${activeIcp.themeColor}33`,
              boxShadow: `0 8px 24px ${activeIcp.themeColor}0d`
            }}>
              <div style={{ fontSize: "0.85rem", fontWeight: 800, color: activeIcp.themeColor, marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                PersonaOn Context Layer
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem", color: "var(--text-dark)", fontWeight: 500 }}>
                <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ color: activeIcp.themeColor, fontWeight: 900 }}>✓</span>
                  <span>Maintains operational continuity across meeting lines</span>
                </li>
                <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ color: activeIcp.themeColor, fontWeight: 900 }}>✓</span>
                  <span>Compounds client context to secure relationship memory</span>
                </li>
                <li style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ color: activeIcp.themeColor, fontWeight: 900 }}>✓</span>
                  <span>Organizes variables and commitments automatically</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ICP Voice Statement / Testimonial Box */}
        <div style={{
          maxWidth: "1050px",
          margin: "0 auto",
          background: "linear-gradient(to right, #ffffff, #f7f7f9)",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          borderRadius: "24px",
          padding: "36px",
          display: "flex",
          alignItems: "center",
          gap: "28px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.015)"
        }}
        className="workflow-testimonial"
        >
          <div style={{ 
            width: "64px", 
            height: "64px", 
            borderRadius: "50%", 
            flexShrink: 0,
            background: activeIcp.themeColor,
            border: `2px solid rgba(255, 255, 255, 0.8)`,
            boxShadow: `0 8px 20px ${activeIcp.themeColor}33`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: "1.3rem",
            fontWeight: 800,
            textShadow: "0 1px 3px rgba(0,0,0,0.15)",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
          }}>
            {activeIcp.initials}
          </div>

          <div>
            <p style={{
              fontSize: "1.05rem",
              color: "var(--text-dark)",
              fontStyle: "italic",
              lineHeight: "1.6",
              fontWeight: 400,
              marginBottom: "12px"
            }}>
              "{activeIcp.quote}"
            </p>
            <div>
              <span style={{ fontWeight: 800, fontSize: "0.95rem", color: "var(--text-dark)" }}>
                {activeIcp.role.split(',')[0]}
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-dark-muted)", fontWeight: 500 }}>
                {activeIcp.role.substring(activeIcp.role.indexOf(','))}
              </span>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes soundWave {
          0% { transform: scaleY(0.25); }
          100% { transform: scaleY(1); }
        }
        @keyframes pulseBorder {
          0%, 100% { transform: scale(1); box-shadow: 0 0 4px rgba(255,255,255,0.1); }
          50% { transform: scale(1.04); box-shadow: 0 0 16px rgba(255,255,255,0.3); }
        }
        @keyframes dataStream {
          0% { transform: translateX(-30px); }
          100% { transform: translateX(110px); }
        }
        @keyframes pulseOrb {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50% { transform: scale(1.04); opacity: 1; }
        }
        @keyframes floatVault {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .dot-particle {
          position: absolute;
          top: -2px;
          width: 8px;
          height: 8px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 8px #ffffff;
          opacity: 0;
          animation: particleDrift 1.5s infinite linear;
        }
        
        @keyframes particleDrift {
          0% { transform: translate(0, 0) scale(0.8); opacity: 0; }
          20% { opacity: 0.9; }
          80% { opacity: 0.9; }
          100% { transform: translate(110px, 0) scale(0.4); opacity: 0; }
        }

        .cursor-blink {
          animation: terminalCursor 0.8s infinite steps(2);
        }

        @keyframes terminalCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @media (max-width: 768px) {
          .simulator-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 24px !important;
          }
          .before-after-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .before-col {
            border-right: none !important;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            padding-right: 0 !important;
            padding-bottom: 20px;
          }
          .workflow-testimonial {
            flex-direction: column !important;
            text-align: center !important;
            padding: 28px !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
