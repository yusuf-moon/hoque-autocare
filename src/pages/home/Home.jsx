import { useEffect, useRef, useState } from "react";
import "./Home.css";

/* ───────────── DETAILED E-RICKSHAW SVG ─────────────
   Matches the blue cartoon-style e-rickshaw reference.
   Stylized side-3/4 view with canopy, handlebars, headlight,
   yellow bumper, side mirrors, hanging straps & two rear wheels.
*/
// const RickshawSVG = () => (
//   <svg
//     className="ha-rickshaw"
//     viewBox="0 0 640 460"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     aria-label="Hoque Autocare electric rickshaw"
//   >
//     {/* sand / floor */}
//     <ellipse cx="320" cy="430" rx="260" ry="18" fill="#fde7c3" />
//     <ellipse cx="320" cy="426" rx="220" ry="10" fill="#f6cf95" opacity="0.7" />

//     {/* shadow under vehicle */}
//     <ellipse cx="320" cy="408" rx="200" ry="12" fill="#0a2540" opacity="0.16" />

//     {/* ── Canopy / Roof ── */}
//     {/* roof top */}
//     <path d="M170 110 H540 L520 78 H190 Z" fill="#bfe0ff" stroke="#0a2540" strokeWidth="2" strokeLinejoin="round"/>
//     {/* roof front lip */}
//     <path d="M540 110 L548 116 L528 116 Z" fill="#9bcef7" stroke="#0a2540" strokeWidth="2" strokeLinejoin="round"/>
//     {/* roof side */}
//     <rect x="170" y="110" width="370" height="12" rx="2" fill="#88c2f0" stroke="#0a2540" strokeWidth="2"/>

//     {/* ── Roof support pillars (4) ── */}
//     <rect x="178" y="122" width="6" height="74" fill="#2b7fff" stroke="#0a2540" strokeWidth="1.5"/>
//     <rect x="278" y="122" width="6" height="74" fill="#2b7fff" stroke="#0a2540" strokeWidth="1.5"/>
//     <rect x="404" y="122" width="6" height="74" fill="#2b7fff" stroke="#0a2540" strokeWidth="1.5"/>
//     <rect x="528" y="122" width="6" height="74" fill="#2b7fff" stroke="#0a2540" strokeWidth="1.5"/>

//     {/* ── Side rails (window frame bars) on driver side ── */}
//     <rect x="190" y="130" width="80" height="58" rx="3" fill="none" stroke="#0a2540" strokeWidth="1.5"/>
//     <line x1="208" y1="130" x2="208" y2="188" stroke="#0a2540" strokeWidth="1.5"/>
//     <line x1="226" y1="130" x2="226" y2="188" stroke="#0a2540" strokeWidth="1.5"/>
//     <line x1="244" y1="130" x2="244" y2="188" stroke="#0a2540" strokeWidth="1.5"/>
//     <line x1="190" y1="160" x2="270" y2="160" stroke="#0a2540" strokeWidth="1.2"/>

//     {/* mirror box on canopy left edge */}
//     <rect x="160" y="120" width="14" height="20" rx="2" fill="#0a2540"/>

//     {/* ── Hanging straps from roof ── */}
//     <path d="M310 122 V148 H304 V158 H316 V148 H310" stroke="#0a2540" strokeWidth="1.5" fill="none"/>
//     <path d="M348 122 V152 H342 V162 H354 V152 H348" stroke="#0a2540" strokeWidth="1.5" fill="none"/>
//     <path d="M386 122 V148 H380 V158 H392 V148 H386" stroke="#0a2540" strokeWidth="1.5" fill="none"/>

//     {/* ── Passenger seat back (rear) ── */}
//     <path d="M414 130 H520 V215 H414 Z" fill="#2b7fff" stroke="#0a2540" strokeWidth="2"/>
//     <path d="M414 130 H520 V145 H414 Z" fill="#1d6fe8"/>
//     {/* passenger silhouette (black behind seat) */}
//     <ellipse cx="468" cy="198" rx="22" ry="20" fill="#0a2540" opacity="0.85"/>

//     {/* ── Driver seat back (front-mid) ── */}
//     <path d="M298 156 H398 V232 H298 Z" fill="#2b7fff" stroke="#0a2540" strokeWidth="2"/>
//     <path d="M298 156 H398 V172 H298 Z" fill="#1d6fe8"/>

//     {/* ── Lower body / floor of rickshaw ── */}
//     <path
//       d="M170 232 Q170 218 184 218 H536 Q548 218 548 232 V312 Q548 332 528 332 H188 Q170 332 170 312 Z"
//       fill="#2b7fff"
//       stroke="#0a2540"
//       strokeWidth="2"
//     />
//     {/* floor highlight */}
//     <path d="M180 224 H536 V236 H180 Z" fill="#5ea3ff"/>
//     {/* footwell line */}
//     <path d="M270 245 H410" stroke="#1d6fe8" strokeWidth="3" strokeLinecap="round"/>

//     {/* ── Front fairing / cowl ── */}
//     <path
//       d="M158 232 Q140 232 138 256 L138 308 Q138 332 162 332 H184 V232 Z"
//       fill="#1d6fe8"
//       stroke="#0a2540"
//       strokeWidth="2"
//     />
//     {/* yellow bumper guard */}
//     <rect x="120" y="276" width="30" height="46" rx="4" fill="#ffd23f" stroke="#0a2540" strokeWidth="1.8"/>
//     <line x1="125" y1="284" x2="145" y2="284" stroke="#0a2540" strokeWidth="1.2"/>
//     <line x1="125" y1="294" x2="145" y2="294" stroke="#0a2540" strokeWidth="1.2"/>
//     <line x1="125" y1="304" x2="145" y2="304" stroke="#0a2540" strokeWidth="1.2"/>
//     <line x1="125" y1="314" x2="145" y2="314" stroke="#0a2540" strokeWidth="1.2"/>

//     {/* headlight */}
//     <circle cx="155" cy="266" r="14" fill="#fff" stroke="#0a2540" strokeWidth="2"/>
//     <circle cx="155" cy="266" r="7" fill="#bfe0ff"/>
//     <circle cx="153" cy="263" r="2.5" fill="#fff"/>

//     {/* small indicators */}
//     <circle cx="178" cy="252" r="4" fill="#ff7a3c" stroke="#0a2540" strokeWidth="1.2"/>
//     <circle cx="178" cy="282" r="4" fill="#ff7a3c" stroke="#0a2540" strokeWidth="1.2"/>

//     {/* ── Handlebars + steering ── */}
//     <line x1="200" y1="196" x2="138" y2="158" stroke="#9aa7b6" strokeWidth="3.2" strokeLinecap="round"/>
//     <line x1="200" y1="196" x2="200" y2="232" stroke="#9aa7b6" strokeWidth="3.2" strokeLinecap="round"/>
//     {/* left grip */}
//     <rect x="124" y="148" width="22" height="8" rx="3" fill="#0a2540"/>
//     {/* mirror left */}
//     <line x1="135" y1="150" x2="118" y2="120" stroke="#9aa7b6" strokeWidth="2"/>
//     <ellipse cx="116" cy="116" rx="9" ry="11" fill="#0a2540" stroke="#0a2540" strokeWidth="1.5"/>
//     <ellipse cx="116" cy="116" rx="5" ry="7" fill="#5a7a9c"/>
//     {/* mirror right (on body) */}
//     <line x1="298" y1="180" x2="285" y2="158" stroke="#9aa7b6" strokeWidth="2"/>
//     <ellipse cx="282" cy="154" rx="8" ry="10" fill="#0a2540" stroke="#0a2540" strokeWidth="1.5"/>
//     <ellipse cx="282" cy="154" rx="4.5" ry="6.5" fill="#5a7a9c"/>

//     {/* steering wheel (driver) */}
//     <ellipse cx="370" cy="230" rx="22" ry="8" fill="#0a2540"/>
//     <ellipse cx="370" cy="226" rx="14" ry="5" fill="#2b3b54"/>

//     {/* battery vent grille on body */}
//     <rect x="468" y="262" width="46" height="34" rx="4" fill="#1d6fe8" stroke="#0a2540" strokeWidth="1.5"/>
//     <line x1="476" y1="270" x2="476" y2="290" stroke="#0a2540" strokeWidth="1.4"/>
//     <line x1="486" y1="270" x2="486" y2="290" stroke="#0a2540" strokeWidth="1.4"/>
//     <line x1="496" y1="270" x2="496" y2="290" stroke="#0a2540" strokeWidth="1.4"/>
//     <line x1="506" y1="270" x2="506" y2="290" stroke="#0a2540" strokeWidth="1.4"/>

//     {/* HOQUE plate */}
//     <rect x="240" y="298" width="120" height="26" rx="4" fill="#fff" stroke="#0a2540" strokeWidth="1.6"/>
//     <text x="300" y="316" textAnchor="middle"
//       fontFamily="'Bricolage Grotesque', serif" fontWeight="700"
//       fontSize="14" fill="#0a2540" letterSpacing="2">HOQUE</text>

//     {/* ── Front wheel (motorcycle style) ── */}
//     <ellipse cx="178" cy="370" rx="40" ry="40" fill="#1f2937" stroke="#0a2540" strokeWidth="2.5"/>
//     <ellipse cx="178" cy="370" rx="24" ry="24" fill="#9aa7b6"/>
//     <ellipse cx="178" cy="370" rx="18" ry="18" fill="#cbd5e1"/>
//     <circle cx="178" cy="370" r="6" fill="#0a2540"/>
//     {/* tread */}
//     {Array.from({ length: 12 }).map((_, i) => {
//       const a = (i * 30 * Math.PI) / 180;
//       return (
//         <line key={`ft-${i}`}
//           x1={178 + 36 * Math.cos(a)} y1={370 + 36 * Math.sin(a)}
//           x2={178 + 40 * Math.cos(a)} y2={370 + 40 * Math.sin(a)}
//           stroke="#0a2540" strokeWidth="2"/>
//       );
//     })}
//     {/* spokes */}
//     {[0, 60, 120, 180, 240, 300].map((angle, i) => (
//       <line key={`fs-${i}`}
//         x1={178 + 6 * Math.cos((angle * Math.PI) / 180)}
//         y1={370 + 6 * Math.sin((angle * Math.PI) / 180)}
//         x2={178 + 22 * Math.cos((angle * Math.PI) / 180)}
//         y2={370 + 22 * Math.sin((angle * Math.PI) / 180)}
//         stroke="#0a2540" strokeWidth="1.6"/>
//     ))}
//     {/* fork */}
//     <line x1="174" y1="332" x2="174" y2="232" stroke="#9aa7b6" strokeWidth="3.5"/>
//     <line x1="184" y1="332" x2="184" y2="232" stroke="#9aa7b6" strokeWidth="3.5"/>

//     {/* ── Rear wheel (dual on right side, simplified to one big visible) ── */}
//     <ellipse cx="500" cy="376" rx="42" ry="42" fill="#1f2937" stroke="#0a2540" strokeWidth="2.5"/>
//     <ellipse cx="500" cy="376" rx="26" ry="26" fill="#9aa7b6"/>
//     <ellipse cx="500" cy="376" rx="20" ry="20" fill="#cbd5e1"/>
//     <circle cx="500" cy="376" r="7" fill="#0a2540"/>
//     {Array.from({ length: 12 }).map((_, i) => {
//       const a = (i * 30 * Math.PI) / 180;
//       return (
//         <line key={`rt-${i}`}
//           x1={500 + 38 * Math.cos(a)} y1={376 + 38 * Math.sin(a)}
//           x2={500 + 42 * Math.cos(a)} y2={376 + 42 * Math.sin(a)}
//           stroke="#0a2540" strokeWidth="2"/>
//       );
//     })}
//     {[0, 60, 120, 180, 240, 300].map((angle, i) => (
//       <line key={`rs-${i}`}
//         x1={500 + 7 * Math.cos((angle * Math.PI) / 180)}
//         y1={376 + 7 * Math.sin((angle * Math.PI) / 180)}
//         x2={500 + 24 * Math.cos((angle * Math.PI) / 180)}
//         y2={376 + 24 * Math.sin((angle * Math.PI) / 180)}
//         stroke="#0a2540" strokeWidth="1.6"/>
//     ))}
//     {/* rear wheel slight overlap (second rear wheel hint) */}
//     <ellipse cx="446" cy="380" rx="28" ry="28" fill="#0f172a" stroke="#0a2540" strokeWidth="2"/>
//     <ellipse cx="446" cy="380" rx="14" ry="14" fill="#9aa7b6"/>
//     <circle cx="446" cy="380" r="4" fill="#0a2540"/>
//   </svg>
// );
const RickshawSVG = () => (
  <img
    src="/E-Rikshaw image.png"
    alt="E-Rickshaw Vehicle"
    className="ha-rickshaw"
  />
);
const Home = () => {
  const [visible, setVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({ name: "", phone: "", model: "City Pro", message: "" });
  const [formSent, setFormSent] = useState(false);
  const blobRef = useRef(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  // soft cursor-follow blob
  useEffect(() => {
    const handleMove = (e) => {
      if (!blobRef.current) return;
      blobRef.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const stats = [
    { value: "5,000+", label: "Vehicles Sold" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "120 km", label: "Range / Charge" },
    { value: "5 yr", label: "Warranty" },
  ];

  const features = [
    {
      title: "Fast Charge",
      desc: "0 to 80% in under 3 hours with our smart BMS-powered charger.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
    },
    {
      title: "120 km Range",
      desc: "Premium lithium-ion pack delivers a full day of last-mile work.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="16" height="10" rx="2" />
          <line x1="22" y1="11" x2="22" y2="13" />
          <line x1="6" y1="11" x2="6" y2="13" />
          <line x1="10" y1="11" x2="10" y2="13" />
          <line x1="14" y1="11" x2="14" y2="13" />
        </svg>
      ),
    },
    {
      title: "Zero Downtime",
      desc: "Robust steel chassis engineered for India's toughest roads.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      title: "5-Year Warranty",
      desc: "Comprehensive cover on battery, motor, controller and frame.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Govt. Approved",
      desc: "ARAI certified & eligible for FAME-II subsidy and easy loans.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      title: "Comfort First",
      desc: "Wide cushioned seating, soft suspension and weather-proof canopy.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v6" />
          <rect x="3" y="18" width="18" height="3" rx="1" />
        </svg>
      ),
    },
    {
      title: "Smart Dashboard",
      desc: "Digital cluster with battery %, range, trip meter & service alerts.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 12l3 3 5-6" />
        </svg>
      ),
    },
    {
      title: "Easy Finance",
      desc: "Onboard NBFC partners — drive away with as little as ₹15,000 down.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M6 9v.01M18 15v.01" />
        </svg>
      ),
    },
  ];

  const models = [
    {
      name: "City Pro",
      tag: "Best Seller",
      price: "₹1,45,000",
      range: "120 km",
      charge: "3 hrs",
      load: "650 kg",
      seats: "4 + 1",
      color: "#2b7fff",
    },
    {
      name: "Cargo Max",
      tag: "Heavy Duty",
      price: "₹1,72,000",
      range: "100 km",
      charge: "3.5 hrs",
      load: "850 kg",
      seats: "Cargo",
      color: "#0a2540",
    },
    {
      name: "Lite Eco",
      tag: "Most Affordable",
      price: "₹1,18,000",
      range: "90 km",
      charge: "2.5 hrs",
      load: "500 kg",
      seats: "4 + 1",
      color: "#22c55e",
    },
  ];

  const reviews = [
    {
      name: "Rahim Sheikh",
      role: "Driver, Howrah",
      quote:
        "Last 2 years I am driving Hoque rickshaw. Battery is strong, service is fast. My daily income increased by 40%.",
      rating: 5,
    },
    {
      name: "Sanjay Das",
      role: "Owner, 6-vehicle fleet",
      quote:
        "Bought 6 City Pro for my fleet. Zero breakdown till now and the after-sales team picks up calls every time.",
      rating: 5,
    },
    {
      name: "Priya Mondal",
      role: "Cargo Operator, Sealdah",
      quote:
        "Cargo Max carries my full grocery load to the market without sweat. Charging cost is almost nothing compared to diesel.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "What is the warranty on the battery?",
      a: "Our lithium-ion batteries come with a 5-year warranty (covering 1,500+ charge cycles). Lead-acid variants get 12 months replacement cover.",
    },
    {
      q: "Is FAME-II subsidy applicable?",
      a: "Yes — Hoque Autocare is fully ARAI certified and eligible for FAME-II as well as state EV subsidies. We help you with paperwork at zero cost.",
    },
    {
      q: "How much does it cost to charge fully?",
      a: "A full home charge consumes around 6–7 units of electricity, costing roughly ₹45–₹55 — that's about 50 paise per kilometre.",
    },
    {
      q: "Do you offer financing?",
      a: "Yes. We have tie-ups with leading NBFCs offering EMI starting at ₹3,499/month with as little as ₹15,000 down payment.",
    },
    {
      q: "Where can I service my rickshaw?",
      a: "We have 60+ authorised service centres across West Bengal, Bihar and Jharkhand. Free pick-up & drop within city limits.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
    setFormData({ name: "", phone: "", model: "City Pro", message: "" });
  };

  return (
    <main className="ha-home" data-testid="home-page">
      {/* soft moving blob */}
      <div className="ha-cursor-blob" ref={blobRef} aria-hidden="true" />

      {/* ─────────── HERO ─────────── */}
      <section id="home" className="ha-hero" data-testid="hero-section">
        <div className="ha-hero-bg-grid" aria-hidden="true" />
        <div className="ha-hero-blob ha-hero-blob-1" aria-hidden="true" />
        <div className="ha-hero-blob ha-hero-blob-2" aria-hidden="true" />

        <div className="ha-hero-inner">
          <div className="ha-hero-left">
            {/* <div className={`ha-badge ${visible ? "show" : ""}`} data-testid="hero-badge">
              <span className="ha-badge-dot" />
              FAME-II Subsidy Available · Made in India
            </div> */}

            <h1 className={`ha-hero-title ${visible ? "show" : ""}`} data-testid="hero-title">
              Drive the
              <span className="ha-hero-accent"> Electric</span>
              <br/>
              future of last-mile
              {" "}
              <span className="ha-hero-underline">mobility.
                <svg viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 10 Q 60 2 110 8 T 218 6" stroke="#2b7fff" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className={`ha-hero-sub ${visible ? "show" : ""}`} data-testid="hero-sub">
              Hoque Autocare delivers reliable, comfortable and affordable
              electric rickshaws — engineered for Indian roads, backed by
              5-year warranty and a inhouse service network.
            </p>

            <div className={`ha-hero-actions ${visible ? "show" : ""}`}>
              <button
                className="ha-btn-primary"
                onClick={() => document.getElementById("models")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="hero-explore-btn"
              >
                Explore Models
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
              <button
                className="ha-btn-outline"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="hero-quote-btn"
              >
                <span className="ha-play-circle">
                  <svg width="9" height="9" viewBox="0 0 7 8" fill="none">
                    <path d="M1 1l5 3-5 3V1z" fill="#0a2540" />
                  </svg>
                </span>
                Book a Model
              </button>
            </div>

            {/* trust strip */}
            <div className={`ha-trust ${visible ? "show" : ""}`} data-testid="hero-trust-strip">
              <div className="ha-trust-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ffb020">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span><strong>4.9 / 5</strong> from 1,200+ owners</span>
              <span className="ha-trust-divider" />
              {/* <span>60+ Service Centres</span> */}
            </div>
          </div>

          <div className={`ha-hero-right ${visible ? "show" : ""}`} data-testid="hero-vehicle-card">
            
            <div className="ha-vehicle-card">
              <div className="ha-vehicle-glow" />
              <div className="ha-vehicle-tags">
                {/* <span className="ha-tag-pill">⚡ 100% Electric</span>
                <span className="ha-tag-pill ha-tag-pill-alt">120 km Range</span> */}
              </div>
              <RickshawSVG />

              <div className="ha-vehicle-meta">
                <div>
                  <div className="ha-vmeta-label">Starting at</div>
                  <div className="ha-vmeta-price">₹1,18,000<span>*</span></div>
                </div>
                <div className="ha-vmeta-divider" />
                <div>
                  <div className="ha-vmeta-label">EMI from</div>
                  <div className="ha-vmeta-emi">₹3,499 / month</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="ha-stats" data-testid="stats-strip">
          {stats.map((s, i) => (
            <div className="ha-stat" key={s.label} style={{ animationDelay: `${0.15 * i}s` }}>
              <div className="ha-stat-value">{s.value}</div>
              <div className="ha-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── MODELS ─────────── */}
      <section id="models" className="ha-section" data-testid="models-section">
        <div className="ha-section-head">
          <span className="ha-eyebrow">Our Range</span>
          <h2 className="ha-h2">Pick the rickshaw that <em>drives</em> your business.</h2>
          <p className="ha-section-sub">
            Three purpose-built models. One promise — uptime, savings and a smile on every trip.
          </p>
        </div>

        <div className="ha-models-grid">
          {models.map((m, i) => (
            <article
              key={m.name}
              className="ha-model-card"
              style={{ "--accent": m.color }}
              data-testid={`model-card-${i}`}
            >
              <div className="ha-model-tag">{m.tag}</div>
              <div className="ha-model-illu">
                <RickshawSVG />
              </div>
              <h3 className="ha-model-name">{m.name}</h3>
              <div className="ha-model-price">{m.price}<span>onwards</span></div>
              <ul className="ha-model-spec">
                <li><span>Range</span><strong>{m.range}</strong></li>
                <li><span>Charge time</span><strong>{m.charge}</strong></li>
                <li><span>Payload</span><strong>{m.load}</strong></li>
                <li><span>Capacity</span><strong>{m.seats}</strong></li>
              </ul>
              <button
                className="ha-model-btn"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                data-testid={`model-cta-${i}`}
              >
                Get Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* ─────────── FEATURES ─────────── */}
      <section id="features" className="ha-section ha-section-tinted" data-testid="features-section">
        <div className="ha-section-head">
          <span className="ha-eyebrow">Why Hoque Autocare</span>
          <h2 className="ha-h2">Built tough. Priced fair. <em>Backed for life.</em></h2>
          <p className="ha-section-sub">
            Every rickshaw that we deliver is loaded with what really matters to drivers and fleet owners.
          </p>
        </div>
        <div className="ha-features-grid">
          {features.map((f, i) => (
            <div className="ha-feature" key={f.title} data-testid={`feature-card-${i}`}>
              <div className="ha-feature-icon">{f.icon}</div>
              <div className="ha-feature-title">{f.title}</div>
              <div className="ha-feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── REVIEWS ─────────── */}
      <section id="reviews" className="ha-section" data-testid="reviews-section">
        <div className="ha-section-head">
          <span className="ha-eyebrow">Owner Stories</span>
          <h2 className="ha-h2">Trusted by <em>5,000+ drivers</em> across Assam.</h2>
        </div>

        <div className="ha-reviews-grid">
          {reviews.map((r, i) => (
            <figure className="ha-review" key={r.name} data-testid={`review-card-${i}`}>
              <div className="ha-review-stars">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#ffb020">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <blockquote className="ha-review-quote">"{r.quote}"</blockquote>
              <figcaption className="ha-review-author">
                <div className="ha-review-avatar" aria-hidden="true">
                  {r.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <div className="ha-review-name">{r.name}</div>
                  <div className="ha-review-role">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section id="faq" className="ha-section ha-section-tinted" data-testid="faq-section">
        <div className="ha-faq-wrap">
          <div className="ha-faq-left">
            <span className="ha-eyebrow">FAQ</span>
            <h2 className="ha-h2">Questions, <em>answered.</em></h2>
            <p className="ha-section-sub">
              Everything you need to know before buying your first electric rickshaw.
            </p>
            <button
              className="ha-btn-primary ha-btn-primary-sm"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="faq-contact-btn"
            >
              Still have a question? Talk to us
            </button>
          </div>
          <div className="ha-faq-list">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className={`ha-faq-item ${openFaq === i ? "open" : ""}`}
                data-testid={`faq-item-${i}`}
              >
                <button
                  className="ha-faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span>{f.q}</span>
                  <span className="ha-faq-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div className="ha-faq-a">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CONTACT ─────────── */}
      <section id="contact" className="ha-section" data-testid="contact-section">
        <div className="ha-contact">
          <div className="ha-contact-left">
            <span className="ha-eyebrow ha-eyebrow-light">Get a Quote</span>
            <h2 className="ha-h2 ha-h2-light">Let's put you behind the <em>wheel.</em></h2>
            <p className="ha-contact-sub">
              Share your details — our team will call you back within 30 minutes
              with a custom quote, finance options.
            </p>

            <ul className="ha-contact-info">
              <li>
                <span className="ha-ci-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                <div>
                  <div className="ha-ci-label">Call us</div>
                  <a href="tel:+919876543210" data-testid="contact-phone">+91 84867 78872</a>
                </div>
              </li>
              <li>
                <span className="ha-ci-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 6l10 7 10-7"/>
                  </svg>
                </span>
                <div>
                  <div className="ha-ci-label">Email</div>
                  <a href="mailto:sales@hoqueautocare.in" data-testid="contact-email">sales@hoqueautocare.in</a>
                </div>
              </li>
              <li>
                <span className="ha-ci-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <div>
                  <div className="ha-ci-label">Showroom</div>
                  <span data-testid="contact-address">Bhuyanpatty, Nagaon 782001, Assam</span>
                </div>
              </li>
            </ul>
          </div>

          <form className="ha-contact-form" onSubmit={handleSubmit} data-testid="contact-form">
            <div className="ha-form-row">
              <label>
                <span>Your Name</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Rahul Sharma"
                  required
                  data-testid="form-name"
                />
              </label>
              <label>
                <span>Phone</span>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  required
                  data-testid="form-phone"
                />
              </label>
            </div>
            <label>
              <span>Interested in</span>
              <select
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                data-testid="form-model"
              >
                {models.map((m) => (
                  <option key={m.name}>{m.name}</option>
                ))}
                <option>Not sure yet</option>
              </select>
            </label>
            <label>
              <span>Message <em>(optional)</em></span>
              <textarea
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your daily route, payload, etc."
                data-testid="form-message"
              />
            </label>
            <button type="submit" className="ha-btn-primary ha-btn-block" data-testid="form-submit">
              {formSent ? "✓ Quote requested!" : "Request Free Quote"}
              {!formSent && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              )}
            </button>
            <p className="ha-form-disclaimer">
              By submitting, you agree to be contacted by Hoque Autocare. No spam, just a quick callback.
            </p>
          </form>
        </div>
      </section>

      {/* ─────────── FOOTER ─────────── */}
      <footer className="ha-footer" data-testid="footer">
        <div className="ha-footer-inner">
          <div className="ha-footer-brand">
            <div className="ha-footer-logo">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none">
                <path d="M10 16 H38 L34 22 H14 Z" fill="#2b7fff"/>
                <rect x="14" y="22" width="20" height="12" rx="2" fill="#0a2540"/>
                <circle cx="16" cy="36" r="4" fill="#0a2540" stroke="#2b7fff" strokeWidth="1.5"/>
                <circle cx="32" cy="36" r="4" fill="#0a2540" stroke="#2b7fff" strokeWidth="1.5"/>
                <path d="M22 12 L26 12 L24 16 L27 16 L21 24 L23 18 L20 18 Z" fill="#ffd23f"/>
              </svg>
              <div>
                <div className="ha-footer-name">Hoque <span>Autocare</span></div>
                <div className="ha-footer-tag">Electric Rickshaw Dealer</div>
              </div>
            </div>
            <p className="ha-footer-blurb">
              Delivering India's most reliable, affordable e-rickshaws since 2018.
              Made in Assam · Driven across the nation.
            </p>
          </div>

          <div className="ha-footer-cols">
            <div>
              <h4>Company</h4>
              <a href="#home">Home</a>
              <a href="#models">Models</a>
              <a href="#features">Features</a>
              <a href="#reviews">Reviews</a>
            </div>
            <div>
              <h4>Support</h4>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
              <a href="#contact">Service Centres</a>
              <a href="#contact">Spare Parts</a>
            </div>
            <div>
              <h4>Connect</h4>
              <a href="tel:+919876543210">+91 84867 78872</a>
              <a href="mailto:sales@hoqueautocare.in">sales@hoqueautocare.in</a>
              <a href="#">WhatsApp</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>
        <div className="ha-footer-bottom">
          <span>© {new Date().getFullYear()} Hoque Autocare Pvt. Ltd. · All rights reserved.</span>
          <span>Made with <span style={{ color: "#ff6b6b" }}>♥</span> in Assam</span>
        </div>
      </footer>
    </main>
  );
};

export default Home;
