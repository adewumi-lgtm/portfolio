"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FiCode, FiPenTool, FiMail, FiEdit3, FiVideo } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import { FiCheckCircle, FiLayers, FiTrendingUp } from "react-icons/fi";


const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];
const PORTFOLIO = [
  {
    title: "Web Development (Ecommerce Website System)",
    cover: "/images/website-development-portfolio-cover-image.jpg",
    url: "https://melon-python-39e.notion.site/Ecommerce-Website-System-308397bb562280c88717da92946df016",
  },
  {
    title: "Video & Motion Projects",
    cover: "/images/brand-video-portfolio-cover-imag.jpg",
    url: "https://melon-python-39e.notion.site/Branded-Promotional-Assets-308397bb562280fab499ea83dc2b39c0?pvs=73",
  },
  {
    title: "Email Marketing & Automation Building",
    cover: "/images/email-automation-ortfolio-cover-image.png",
    url: "https://melon-python-39e.notion.site/EMAIL-AUTOMATION-308397bb562280afa5c6c730b2d00cac?pvs=73",
  },
  {
    title: "High-Converting Amazon Product Visuals",
    cover: "/images/amazon-cover-image.jpg",
    url: "https://melon-python-39e.notion.site/Full-Amazon-Listing-Sets-30b397bb562280d79eb4f90f5dea24f6?pvs=73",
  },
  {
    title: "E-commerce Compliance & Recovery",
    cover: "/images/E-commerce-Compliance&Recovery-cover-image.jpg",
    url: "https://melon-python-39e.notion.site/E-commerce-Compliance-Recovery-30c397bb5622802f8aeffdef46b53d08?pvs=73",
  },
  {
    title: "Image Editing & Compositing",
    cover: "/images/Image-Editing-Compositing-cover-image.webp",
    url: "https://melon-python-39e.notion.site/Image-Editing-Compositing-30c397bb562280b9be36f9e9de04008e?pvs=73",
  },
];

const SERVICES = [
  {
    title: "Web Development",
    desc: "Modern, responsive websites built for speed, clarity, and conversion.",
    icon: FiCode,
    percent: 98,
  },
  {
    title: "Graphic Design",
    desc: "Clean visuals that look premium and communicate value fast.",
    icon: FiPenTool,
    percent: 92,
  },
  {
    title: "Email Marketing",
    desc: "Email flows and campaigns that drive clicks, sales, and retention.",
    icon: FiMail,
    percent: 88,
  },
  {
    title: "Content Writing",
    desc: "Clear, persuasive writing that matches your brand voice.",
    icon: FiEdit3,
    percent: 82,
  },
  {
    title: "Promotional Videos",
    desc: "Short, engaging promo videos that hold attention and sell.",
    icon: FiVideo,
    percent: 86,
  },
];

const CONTACT = {
  email: "adebayoadewumi14@gmail.com",
  phone: "+2347055845259", // optional
  whatsapp: "https://wa.me/2347055845259",
  linkedin: "https://www.linkedin.com/in/adebayo-adewumi-976408350",
  twitter: "https://x.com/Jasminefav18011",
  facebook: "https://facebook.com/adebayo.adewumi.534108",
  telegram: "https://t.me/Adewumi_aa",
};

const TOOLS = [
{ name: "Figma", src: "/images/figma.svg" },
  { name: "wordpress", src: "/Images/wordpress.svg" },
  { name: "wix", src: "/Images/wix.svg" },
  { name: "wikipedia", src: "/Images/wikipedia.svg" },
  { name: "stripe", src: "/Images/stripe.svg" },
  { name: "Notion", src: "/images/notion.svg" },
  { name: "pinterest", src: "/Images/pinterest.svg" },
  { name: "mailchimp", src: "/Images/mailchimp.svg" },
  { name: "javascript", src: "/Images/javascript.svg" },
  { name: "Shopify", src: "/shopify.svg" },
  { name: "ilovepdf", src: "/Images/ilovepdf.svg" },
  { name: "html5", src: "/Images/html5.svg" },
  { name: "grammarly", src: "/Images/grammarly.svg" },
  { name: "googletranslate", src: "/Images/googletranslate.svg" },
  { name: "googletasks", src: "/Images/googletasks.svg" },
  { name: "googletagmanager", src: "/Images/googletagmanager.svg" },
  { name: "googleslides", src: "Images/googleslides.svg" },
  { name: "googlesheets", src: "/Images/googlesheets.svg" },
  { name: "googlesearchconsole", src: "/Images/googlesearchconsole.svg" },
  { name: "googlemeet", src: "/Images/googlemeet.svg" },
  { name: "googlemarketingplatform", src: "/Images/googlemarketingplatform.svg" },
  { name: "googledocs", src: "/Images/googledocs.svg" },
  { name: "googleanalytics", src: "/Images/googleanalytics.svg" },
  { name: "google", src: "/Images/google.svg" },
  { name: "gmail", src: "/Images/gmail.svg" },
  { name: "github", src: "/Images/github.svg" },
  { name: "evernote", src: "/Images/evernote.svg" },
  { name: "css", src: "/Images/css.svg" },
  { name: "googledrive", src: "/Images/googledrive.svg" },
  { name: "googledrive", src: "/Images/googledrive.svg" },
];

const TESTIMONIALS = [
  {
    name: "Crystal Crystiaa",
    role: "Crystal Crystina",
    quote: "Working with Adewumi was one of the best decisions I made for my brand. She helped me build a complete email automation system that significantly improved our conversion rate within just two months. She also supported with SEO and product optimization, which boosted our visibility and overall performance. I’m truly grateful for her dedication and strategic approach.",
    avatar: "/Images/Crytsal-image.png",
  },
  {
    name: "Deron Blaides",
    role: "Blaides Clothing Store",
    quote: "We’ve been working together for over a year, and the experience has been amazing. Adewumi has built two conversion-focused e-commerce websites for my brand, and we continue to maintain a strong working relationship. Her creativity, reliability, and results-driven mindset truly stand out.",
    avatar: "/Images/deron-blaides.jpg",
  },
  {
    name: "Hala Maatouk",
    role: "Halte Bijoux",
    quote: "Adewumi built my website from scratch and transformed it into a clean, high-converting platform in just two months. She understood the brand vision and executed it beautifully. Our collaboration is still ongoing, and I genuinely appreciate her professionalism, consistency, and attention to detail.",
    avatar: "/Images/Hala's-image.png",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [videoOpen, setVideoOpen] = useState(false);
  const servicesRef = useRef(null);
  const [servicesInView, setServicesInView] = useState(false);


  const sectionIds = useMemo(() => NAV.map((n) => n.id), []);

  // Close menu on ESC
 useEffect(() => {
  const onKey = (e) => {
    if (e.key === "Escape") {
      setMenuOpen(false);
      setVideoOpen(false);
    }
  };
  
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}, []);

useEffect(() => {
  if (!servicesRef.current) return;

  const obs = new IntersectionObserver(
    ([entry]) => {
      // true when you enter the section, false when you leave it
      setTimeout(() => {
  setServicesInView(entry.isIntersecting);
}, 80);
    },
    { threshold: 0.20 }
  );

  obs.observe(servicesRef.current);
  return () => obs.disconnect();
}, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  // Active section highlight
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        // Adjust so header doesn’t mess with it
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.05, 0.1, 0.2, 0.4, 0.6],
      }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [sectionIds]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Sticky header height compensation
    const headerOffset = 80;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          {/* Left: Logo/Name */}
          <button
            onClick={() => scrollToId("home")}
            className="text-sm font-semibold tracking-tight"
            aria-label="Go to Home"
          >
            {/* Replace with your name/logo later */}
            Adewumi
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToId(item.id)}
                className={`text-sm transition ${
                  activeId === item.id ? "font-semibold" : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden rounded-lg p-2 hover:bg-zinc-100"
            aria-label="Open menu"
          >
            <span className="block h-[2px] w-6 bg-zinc-900" />
            <span className="mt-1 block h-[2px] w-6 bg-zinc-900" />
            <span className="mt-1 block h-[2px] w-6 bg-zinc-900" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu overlay"
          />
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-4">
              <div className="text-sm font-semibold">Menu</div>
              <button
                onClick={() => setMenuOpen(false)}
                className="rounded-lg p-2 hover:bg-zinc-100"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-3" aria-label="Mobile Primary">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToId(item.id)}
                  className={`rounded-xl px-4 py-3 text-left text-sm transition ${
                    activeId === item.id ? "bg-zinc-100 font-semibold" : "hover:bg-zinc-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* MAIN PAGE SECTIONS */}
      <main className="mx-auto max-w-6xl px-4">
        {/* HERO */}
        <section id="home" className="scroll-mt-24 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-500">PORTFOLIO</p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
  I help brands grow with high-converting websites, visuals, email systems, and promo content.
</h1>

<p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600">
  Web Development • Graphic Design • Email Marketing • Content Writing • Promotional Videos clean execution,
  fast turnaround, and business-focused results.
</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToId("portfolio")}
                  className="rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
                >
                  View Work
                </button>
                <button
                  onClick={() => scrollToId("contact")}
                  className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Circular face image placeholder */}
            <div className="flex justify-center md:justify-end">
              <div className="h-52 w-52 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 md:h-64 md:w-64">
                {/* We'll replace this with your hero face image later */}
                <img
  src="/images/hero-image-name.jpg"
  alt="Adewumi portrait"
  className="h-full w-full object-cover"
/>
              </div>
            </div>
          </div>

          {/* Proof Strip (overlapping feel) */}
          <div className="relative z-10 mt-10 -mb-12">
            <div className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-md md:grid-cols-3">
              <ProofItem
  Icon={FiCheckCircle}
  title="15+ Projects Delivered"
  subtitle="Across web, design & marketing"
/>
<ProofItem
  Icon={FiLayers}
  title="Multi-Channel Expertise"
  subtitle="Web • Amazon • Email • Video"
/>
<ProofItem
  Icon={FiTrendingUp}
  title="Results-Driven Execution"
  subtitle="Built for growth & performance"
/>
            </div>
          </div>
        </section>

        {/* ABOUT INTRO */}
        <section id="about" className="scroll-mt-24 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-widest text-zinc-500">ABOUT</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
            About me
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-start">
  {/* LEFT COLUMN */}
  <div>
    <p className="text-sm leading-relaxed text-zinc-600">
      I care deeply about consistency not just in design, but in results.
For me, every project is more than a task; it’s a responsibility to help a brand grow in a measurable way.

I enjoy building systems that create real satisfaction for my clients whether that’s a high-converting website, a clean visual identity, an optimized product page, or an email automation flow that increases retention and sales. When their business improves, I genuinely feel like I’m growing alongside them.

My work is structured, intentional, and performance-focused. I don’t just create assets I build digital foundations that support long-term growth.
    </p>
  </div>

  {/* RIGHT COLUMN */}
  <div>
    <h3 className="text-sm font-semibold tracking-widest text-zinc-900">
      WHAT I DO
    </h3>

    <ul className="mt-4 space-y-3 text-sm text-zinc-700">
      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-900" />
        <span>Build conversion-focused websites from scratch</span>
      </li>
      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-900" />
        <span>Design high-performing product visuals (Amazon & e-commerce)</span>
      </li>
      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-900" />
        <span>Develop structured email automation systems</span>
      </li>
      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-900" />
        <span>Optimize product listings and SEO for visibility</span>
      </li>
      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-900" />
        <span>Create promotional videos that hold attention</span>
      </li>
      <li className="flex gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-zinc-900" />
        <span>Maintain long-term digital consistency for growing brands</span>
      </li>
    </ul>
  </div>
</div>
        </section>

        {/* SERVICES */}
        <section
  id="services"
  ref={servicesRef}
  className="scroll-mt-24 py-16 md:py-24"
>
  <div className="grid gap-10 md:grid-cols-2 md:items-start">
    {/* Left: Section intro */}
    <div>
      <p className="text-xs font-semibold tracking-widest text-zinc-500">SERVICES</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
        Services I offer
      </h2>
      <p className="mt-4 max-w-xl text-zinc-600">
        A focused mix of development, design, and marketing built to help brands look
        credible, communicate clearly, and convert better.
      </p>
    </div>

    {/* Right: Progress bars */}
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="space-y-5">
        {SERVICES.map((s) => (
  <Progress
    key={s.title}
    label={s.title}
    value={s.percent}
    start={servicesInView}
  />
))}
      </div>
    </div>
  </div>

  {/* Bottom: Service cards grid */}
  {/* DESKTOP GRID (unchanged look) */}
<div className="mt-10 hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
  {SERVICES.map((s) => (
    <ServiceCard
      key={s.title}
      title={s.title}
      desc={s.desc}
      Icon={s.icon}
    />
  ))}
</div>

{/* MOBILE STACKING EFFECT */}
<div className="mt-10 sm:hidden">
  <div className="relative">
    {SERVICES.map((s, i) => (
      <div
        key={s.title}
        className="sticky"
        style={{
          top: 90,
          zIndex: 10 + i,
        }}
      >
        <div className={i === 0 ? "" : "-mt-6"}>
          <ServiceCard
            title={s.title}
            desc={s.desc}
            Icon={s.icon}
          />
        </div>
      </div>
    ))}

    {/* This gives space so stacking can happen */}
  </div>
</div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="scroll-mt-24 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-widest text-zinc-500">PORTFOLIO</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
            Selected projects
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {PORTFOLIO.map((item) => (
    <PortfolioCard
      key={item.title}
      title={item.title}
      href={item.url}
      cover={item.cover}
    />
  ))}
</div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="scroll-mt-24 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-widest text-zinc-500">TESTIMONIALS</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
            What clients say
          </h2>

          <div className="mt-10">
           <div className="hidden gap-6 md:grid md:grid-cols-3">
  {TESTIMONIALS.slice(0, 3).map((t) => (
    <TestimonialCard key={t.name} t={t} />
  ))}
</div>

            <div className="md:hidden">
  <div className="flex gap-4 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] snap-x snap-mandatory">
    {TESTIMONIALS.slice(0, 3).map((t) => (
      <div key={t.name} className="min-w-[85%] snap-start">
        <TestimonialCard t={t} />
      </div>
    ))}
  </div>
</div>

            {/* Featured Video Testimonial */}
<div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
  <p className="text-sm font-semibold">Featured video testimonial</p>

  <button
    type="button"
    onClick={() => setVideoOpen(true)}
    className="group mt-4 relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100"
    aria-label="Play video testimonial"
  >
    <div className="absolute inset-0 p-5">
      <p className="text-xs font-semibold tracking-widest text-zinc-500">
        VIDEO TESTIMONIAL
      </p>
      <p className="mt-2 max-w-sm text-sm text-zinc-600">
        A client sharing His experience working with me.
      </p>
    </div>

    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex items-center gap-3 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold shadow-sm transition group-hover:scale-[1.03]">
        <span className="text-base">▶</span>
        <span>Play</span>
      </div>
    </div>
  </button>
  {videoOpen && (
  <div
    className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4"
    role="dialog"
    aria-modal="true"
  >
    <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
      {/* Close */}
      <button
        type="button"
        onClick={() => setVideoOpen(false)}
        className="absolute right-3 top-3 z-10 rounded-lg bg-white/90 px-3 py-2 text-sm font-semibold text-zinc-900 hover:bg-white"
        aria-label="Close video"
      >
        ✕
      </button>

      {/* Video */}
<div
  className="relative w-full overflow-hidden bg-black"
  style={{ aspectRatio: "16 / 9" }}
>
  <video
    src="/videos/Blaides-testimonial.mp4"
    controls
    autoPlay
    className="absolute inset-0 h-full w-full"
  />
      </div>
    </div>

    {/* Click outside to close */}
    <button
      type="button"
      className="absolute inset-0 -z-10"
      onClick={() => setVideoOpen(false)}
      aria-label="Close overlay"
    />
  </div>
)}

  <p className="mt-3 text-sm text-zinc-600">
  Deron Blaides (BlaidesClothingStore) Built and optimized conversion-focused e-commerce websites. Ongoing collaboration for over 1 year.
</p>
            </div>
          </div>
        </section>

        {/* TOOLS */}
        <section id="tools" className="scroll-mt-24 py-16 md:py-24">
  <p className="text-xs font-semibold tracking-widest text-zinc-500">TOOLS</p>
  <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
    Tools I use
  </h2>

  {/* Desktop Grid */}
<div className="mt-14 hidden gap-10 sm:grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
  {TOOLS.map((t) => (
    <ToolIcon key={t.name} name={t.name} src={t.src} />
  ))}
</div>

  {/* Mobile Carousel */}
<div className="mt-12 sm:hidden">
  <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
    {TOOLS.map((t) => (
      <div key={t.name} className="min-w-[40%] snap-start">
        <ToolIcon name={t.name} src={t.src} />
      </div>
    ))}
  </div>
</div>
</section>
        {/* BACKGROUND STORY */}
        <section id="story" className="scroll-mt-12 py-16 md:py-16">
          <p className="text-xs font-semibold tracking-widest text-zinc-500">BACKGROUND STORY</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
            My story
          </h2>

          <div className="mt-10 overflow-hidden rounded-[36px] border border-zinc-200 bg-white shadow-lg">
            <div className="relative grid gap-0 md:grid-cols-2">
  <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-zinc-200 md:block" />
              {/* Left: Graduation image */}
              <div className="bg-zinc-100">
                <img
  src="/images/graduation-image.png"
  alt="Adewumi graduation portrait"
  className="h-full w-full object-cover"
/>
              </div>

              {/* Right: Story text */}
              <div className="pt-14 pb-8 px-5 md:pt-16 md:pb-10 md:px-8 max-w-xl">
           <div className="mb-16 md:mb-20 text-center">
  <h3 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
    MY BACKGROUND
  </h3>
  <h3 className="mt-1 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
    STORY
  </h3>
</div>
                <p className="mt-6 text-sm leading-relaxed text-zinc-700 whitespace-pre-line">
  I’ve always been a curious person.

  Growing up, I constantly found myself asking questions how things work, why some brands grow faster than others, and what makes certain businesses stand out. That curiosity naturally followed me into my academic journey.

  When I resumed my HND studies, I met a friend who introduced me to the world of tech. From the very first attempt, it felt like I had opened a long-closed book. Something instantly clicked. What started as curiosity quickly became passion.

  I became deeply invested in understanding digital systems how websites convert, how email automation nurtures customers, and how structured branding influences growth. The more I learned, the more I realized I wasn’t just building digital assets I was building solutions.

  In 2025, I graduated with a Second Class Upper degree, but more importantly, I graduated with clarity. I knew this was the path I wanted to pursue.

  Today, I channel that same curiosity into helping store owners grow their brands with structured, conversion-focused systems. Seeing measurable results for clients is what truly excites me because growth isn’t just about numbers, it’s about impact.
</p>
    <div className="h-px w-16 bg-zinc-900" />
    <p className="mt-5 text-lg font-semibold tracking-tight text-zinc-900 md:text-xl">
      “Curiosity turned into clarity. Clarity turned into purpose.”
    </p>

              </div>
            </div>
          </div>
        </section>
        
        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 py-16 md:py-24">
          <p className="text-xs font-semibold tracking-widest text-zinc-500">CONTACT</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
            Contact me
          </h2>

          <div className="mt-10 relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-10">
            {/* Big faded background text */}
            <div className="pointer-events-none absolute -bottom-6 left-4 select-none text-5xl font-black tracking-tight text-zinc-200/60 md:text-7xl">
              LET’S WORK
            </div>

            <div className="relative grid gap-8 md:grid-cols-2">
              <div>
                <p className="text-sm text-zinc-600">Email</p>
                <p className="mt-1 font-semibold">
  <a
    className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
    href={`mailto:${CONTACT.email}`}
  >
    {CONTACT.email}
  </a>
</p>

                <p className="mt-5 text-sm text-zinc-600">Phone / WhatsApp</p>
                <p className="mt-1 font-semibold">
  <a
    className="underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900"
    href={CONTACT.whatsapp}
  >
    {CONTACT.phone}
  </a>
</p>

                <div className="mt-6 flex flex-wrap gap-3">
  <a
    href={CONTACT.whatsapp}
    className="rounded-xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-900"
  >
    Message on WhatsApp
  </a>

  <a
    href={CONTACT.linkedin}
    className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-zinc-50"
  >
    Connect on LinkedIn
  </a>
</div>
              </div>

              {/* Social icons */}
              <div className="flex flex-wrap items-start gap-3 md:justify-end">
  <SocialCircle href={CONTACT.twitter} label="Twitter" Icon={FaXTwitter} />
  <SocialCircle href={CONTACT.linkedin} label="LinkedIn" Icon={FaLinkedinIn} />
  <SocialCircle href={CONTACT.facebook} label="Facebook" Icon={FaFacebookF} />
  <SocialCircle href={CONTACT.telegram} label="Telegram" Icon={FaTelegram} />
  <SocialCircle href={`mailto:${CONTACT.email}`} label="Email" Icon={FiMail} />
</div>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-200/60 py-10 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Adewumi. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

/* ---------- Small UI helpers (placeholders for now) ---------- */

function ProofItem({ Icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-white p-4">
      <div
        className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100"
        aria-hidden="true"
      >
        <Icon className="text-zinc-900" size={18} />
      </div>
      <div>
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-1 text-sm text-zinc-600">{subtitle}</p>
      </div>
    </div>
  );
}

function Progress({ label, value, start }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // When section leaves view, reset to 0
    if (!start) {
      setDisplayValue(0);
      return;
    }

    let rafId;
    const duration = 900;
    const startTime = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(eased * value);

      setDisplayValue(current);

      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [start, value]);

  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <p className="font-medium">{label}</p>
        <p className="text-zinc-600">{displayValue}%</p>
      </div>

      <div className="mt-2 h-2 w-full rounded-full bg-zinc-100 overflow-hidden">
        <div
          className="h-2 rounded-full bg-zinc-950 transition-[width] duration-700 ease-out"
          style={{ width: `${displayValue}%` }}
        />
      </div>
    </div>
  );
}

function ServiceCard({ title, desc, Icon }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100" aria-hidden="true">
        {Icon ? <Icon className="text-zinc-900" size={18} /> : null}
      </div>

      <p className="mt-4 text-sm font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>
    </div>
  );
}

function PortfolioCard({ title, href, cover }) {
  return (
    <a
      href={href}
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
        <img
          src={cover}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
      </div>

      <div className="flex items-center justify-between p-4">
        <p className="text-sm font-semibold">{title}</p>
        <span className="text-sm text-zinc-600 transition group-hover:text-zinc-950">
          View my project →
        </span>
      </div>
    </a>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="text-sm text-zinc-600">★★★★★</div>

      <p className="mt-3 text-sm leading-relaxed text-zinc-700">
        {t.quote}
      </p>

      <div className="mt-5 flex items-center gap-3">
        <img
          src={t.avatar}
          alt={`${t.name} avatar`}
          className="h-10 w-10 rounded-full object-cover border border-zinc-200"
          loading="lazy"
        />
        <div>
          <p className="text-sm font-semibold">{t.name}</p>
          <p className="text-xs text-zinc-500">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

function ToolIcon({ name, src }) {
  return (
    <div className="flex items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <img
        src={src}
        alt={name}
        className="h-10 w-10 object-contain"
        loading="lazy"
      />
    </div>
  );
}

function SocialCircle({ href, label, Icon }) {
  return (
    <a
      href={href}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-900 shadow-sm hover:bg-zinc-50"
      aria-label={label}
    >
      <Icon size={18} />
    </a>
  );
}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Adewumi", // your name
      url: "https://yourdomain.com",
      sameAs: [
        CONTACT.twitter,
        CONTACT.linkedin,
        CONTACT.facebook,
        CONTACT.telegram,
      ],
      knowsAbout: [
        "Web Development",
        "Graphic Design",
        "Email Marketing",
        "Content Writing",
        "Promotional Videos",
      ],
    }),
  }}
/>