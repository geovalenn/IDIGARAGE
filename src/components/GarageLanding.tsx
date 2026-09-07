"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getContent } from "@/lib/translations";
import {
  isPlaceholder,
  siteConfig,
  trackEvent,
  whatsappUrl,
  type Locale,
} from "@/lib/site";

type IconProps = { className?: string };

function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 20.5 11.7Z" />
      <path d="M8.2 7.6c.2-.5.4-.5.7-.5h.5c.2 0 .4.1.5.4l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.7 1.3 1.8 2.4 3.2 3 .2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .3-.1 1.3-.9 1.8-.7.5-1.7.7-2.8.4-1.1-.3-2.6-1-4.2-2.4-2-1.7-3.2-4-3.3-5.3 0-.6.2-1.1.4-1.4Z" />
    </svg>
  );
}

function MapIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 7 8 5-8 5V7Z" />
    </svg>
  );
}

function BeforeAfter({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const [position, setPosition] = useState(54);

  return (
    <div className="before-after" style={{ "--split": `${position}%` } as React.CSSProperties}>
      <div className="ba-stage">
        <Image
          className="ba-image"
          src="/images/after-repair.webp"
          alt={locale === "id" ? "Panel kendaraan setelah diperbaiki" : "Vehicle panel after repair"}
          fill
          loading="eager"
          sizes="(max-width: 900px) 100vw, 58vw"
        />
        <div className="ba-before-layer">
          <Image
            className="ba-image"
            src="/images/before-repair.webp"
            alt={locale === "id" ? "Panel kendaraan sebelum diperbaiki" : "Vehicle panel before repair"}
            fill
            loading="eager"
            sizes="(max-width: 900px) 100vw, 58vw"
          />
        </div>
        <div className="ba-shade" />
        <span className="ba-label ba-label-before">{c.hero.before}</span>
        <span className="ba-label ba-label-after">{c.hero.after}</span>
        <div className="ba-divider" aria-hidden="true">
          <span>‹ ›</span>
        </div>
        <input
          className="ba-range"
          type="range"
          min="8"
          max="92"
          value={position}
          onChange={(event) => {
            setPosition(Number(event.target.value));
            trackEvent("before_after_interaction");
          }}
          aria-label={c.hero.slider}
        />
      </div>
      <div className="ba-meta">
        <span>{c.hero.slider}</span>
        <span>{c.common.visualNote}</span>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <header className={`section-heading section-heading-${align} reveal`}>
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  );
}

export default function GarageLanding({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const links = useMemo(
    () => [
      ["#home", c.nav.home],
      ["#services", c.nav.services],
      ["#projects", c.nav.projects],
      ["#process", c.nav.process],
      ["#testimonials", c.nav.testimonials],
      ["#gallery", c.nav.gallery],
      ["#contact", c.nav.contact],
    ],
    [c],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", Boolean(lightbox || menuOpen));
    return () => document.body.classList.remove("modal-open");
  }, [lightbox, menuOpen]);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 3200);
    return () => window.clearTimeout(timer);
  }, [notice]);

  function openWhatsApp(message: string, eventName: string) {
    const url = whatsappUrl(message);
    if (!url) {
      setNotice(c.messages.missingWhatsapp);
      return;
    }
    trackEvent(eventName);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function openMaps() {
    if (isPlaceholder(siteConfig.maps)) {
      setNotice(c.messages.missingMaps);
      return;
    }
    trackEvent("maps_click");
    window.open(siteConfig.maps, "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`} aria-label="Main navigation">
        <div className="nav-inner">
          <Link href={`/${locale}#home`} className="brand" aria-label="IDI Garage home">
            <Image src="/images/idi-garage-logo.webp" alt="IDI Garage" width={72} height={72} loading="eager" />
            <span>
              <strong>IDI</strong>
              <small>Garage · Bintaro</small>
            </span>
          </Link>

          <div className="nav-links">
            {links.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </div>

          <div className="nav-actions">
            <div className="locale-switch" aria-label="Language selection">
              <Link className={locale === "id" ? "active" : ""} href="/id">ID</Link>
              <span>/</span>
              <Link className={locale === "en" ? "active" : ""} href="/en">EN</Link>
            </div>
            <button className="button button-small" onClick={() => openWhatsApp(c.messages.consult, "whatsapp_click")}>
              WhatsApp <ArrowIcon />
            </button>
            <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <MenuIcon />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-top">
          <span className="mono">IDI / GARAGE</span>
          <button onClick={() => setMenuOpen(false)} aria-label={c.common.close}><CloseIcon /></button>
        </div>
        <div className="mobile-menu-links">
          {links.map(([href, label], index) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              <span>{String(index + 1).padStart(2, "0")}</span>{label}
            </a>
          ))}
        </div>
        <div className="mobile-menu-bottom">
          <div className="locale-switch">
            <Link className={locale === "id" ? "active" : ""} href="/id">Indonesia</Link>
            <span>/</span>
            <Link className={locale === "en" ? "active" : ""} href="/en">English</Link>
          </div>
          <button className="button" onClick={() => openWhatsApp(c.messages.consult, "whatsapp_click")}>
            {c.common.whatsapp}<ArrowIcon />
          </button>
        </div>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-content">
            <h1>{c.hero.title}</h1>
            <p className="hero-description">{c.hero.description}</p>
            <div className="hero-actions">
              <button className="button" onClick={() => openWhatsApp(c.messages.consult, "whatsapp_click")}>
                {c.common.whatsapp}<ArrowIcon />
              </button>
              <button className="button button-ghost" onClick={() => openWhatsApp(c.messages.photo, "send_photo_click")}>
                {c.common.sendPhoto}<ArrowIcon />
              </button>
            </div>
            <div className="hero-footnote">
              <span>01</span>
              <p>Paint</p><i />
              <p>Body repair</p><i />
              <p>Detailing</p>
            </div>
          </div>
          <div className="hero-visual">
            <BeforeAfter locale={locale} />
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <SectionHeading eyebrow={c.services.eyebrow} title={c.services.title} intro={c.services.intro} />
            <div className="service-grid">
              {c.services.items.map(([title, description], index) => (
                <article className={`service-card reveal service-card-${index + 1}`} key={title}>
                  <div className="service-number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="service-card-media" aria-hidden="true">
                    <Image
                      src={index % 3 === 0 ? "/images/paint-process.webp" : index % 3 === 1 ? "/images/detailing.webp" : "/images/after-repair.webp"}
                      alt=""
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />
                  </div>
                  <div className="service-card-copy">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span className="service-link">{c.common.viewDetail}<ArrowIcon /></span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section facts-section">
          <div className="container">
            <SectionHeading eyebrow={c.facts.eyebrow} title={c.facts.title} />
            <div className="facts-grid">
              {c.facts.items.map(([number, title, description]) => (
                <article className="fact-card reveal" key={number}>
                  <span className="fact-number">{number}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section comparison-section" id="projects">
          <div className="container">
            <div className="comparison-head">
              <SectionHeading eyebrow={c.comparison.eyebrow} title={c.comparison.title} intro={c.comparison.intro} />
              <div className="filter-list reveal" role="tablist" aria-label="Project filters">
                {c.comparison.filters.map((filter, index) => (
                  <button
                    key={filter}
                    className={activeFilter === index ? "active" : ""}
                    onClick={() => setActiveFilter(index)}
                    role="tab"
                    aria-selected={activeFilter === index}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="comparison-project reveal">
              <BeforeAfter locale={locale} />
              <div className="comparison-project-copy">
                <div>
                  <p className="mono">{String(activeFilter + 1).padStart(2, "0")} / {c.comparison.filters[activeFilter]}</p>
                  <h3>{c.comparison.project}</h3>
                  <span>{c.comparison.service}</span>
                </div>
                <p>{c.common.visualNote}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="process-layout">
              <div className="process-sticky">
                <SectionHeading eyebrow={c.process.eyebrow} title={c.process.title} intro={c.process.intro} />
                <div className="process-photo reveal">
                  <Image src="/images/paint-process.webp" alt={locale === "id" ? "Proses pengecatan di paint booth" : "Painting process inside a paint booth"} fill sizes="(max-width: 900px) 100vw, 42vw" />
                  <span>{c.common.visualNote}</span>
                </div>
              </div>
              <div className="process-list">
                {c.process.items.map(([number, title, description]) => (
                  <article className="process-step reveal" key={number}>
                    <span>{number}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section advantages-section">
          <div className="container">
            <SectionHeading eyebrow={c.advantages.eyebrow} title={c.advantages.title} align="center" />
            <div className="advantages-grid">
              {c.advantages.items.map(([title, description], index) => (
                <article className="advantage-card reveal" key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <p className="warranty-note">{c.advantages.warranty}</p>
          </div>
        </section>

        <section className="section works-section">
          <div className="container">
            <SectionHeading eyebrow={c.projects.eyebrow} title={c.projects.title} intro={c.projects.intro} />
            <div className="works-grid">
              {c.projects.items.map(([title, subtitle, image], index) => (
                <button className="work-card reveal" key={title} onClick={() => setLightbox(image)}>
                  <Image src={image} alt={`${title} — ${subtitle}`} fill sizes="(max-width: 800px) 100vw, 33vw" />
                  <span className="work-index">0{index + 1}</span>
                  <span className="asset-badge">{c.common.soon}</span>
                  <span className="work-overlay">
                    <small>{subtitle}</small>
                    <strong>{title}</strong>
                    <em>{c.projects.view}<ArrowIcon /></em>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="container">
            <SectionHeading eyebrow={c.gallery.eyebrow} title={c.gallery.title} intro={c.gallery.intro} />
            <div className="gallery-grid">
              {[
                ["/images/after-repair.webp", "After finish"],
                ["/images/paint-process.webp", "Paint booth"],
                ["/images/detailing.webp", "Detailing"],
                ["/images/before-repair.webp", "Before repair"],
                ["/images/after-repair.webp", "Quality control"],
              ].map(([image, label], index) => (
                <button className={`gallery-item gallery-item-${index + 1} reveal`} key={`${label}-${index}`} onClick={() => setLightbox(image)}>
                  <Image src={image} alt={label} fill sizes="(max-width: 700px) 100vw, 50vw" />
                  <span>{label}<ArrowIcon /></span>
                </button>
              ))}
            </div>
            <p className="gallery-note">{c.common.visualNote}</p>
          </div>
        </section>

        <section className="section testimonials-section" id="testimonials">
          <div className="container testimonial-layout">
            <SectionHeading eyebrow={c.testimonials.eyebrow} title={c.testimonials.title} />
            <div className="testimonial-empty reveal">
              <div className="quote-mark">“</div>
              <div>
                <h3>{c.testimonials.emptyTitle}</h3>
                <p>{c.testimonials.emptyText}</p>
              </div>
              <span>Verified stories only</span>
            </div>
          </div>
        </section>

        <section className="video-section">
          <Image src="/images/paint-process.webp" alt="" fill sizes="100vw" />
          <div className="video-overlay" />
          <div className="video-copy reveal">
            <h2>{c.video.title}</h2>
            <p>{c.video.subtitle}</p>
          </div>
          <button
            className="play-button reveal"
            onClick={() => {
              trackEvent("video_play");
              setNotice(c.video.empty);
            }}
            aria-label={c.video.play}
          >
            <PlayIcon />
            <span>{c.video.play}</span>
          </button>
          <span className="video-note">{c.common.visualNote}</span>
        </section>

        <section className="section about-section">
          <div className="container about-grid">
            <div className="about-photo reveal">
              <Image src="/images/detailing.webp" alt={locale === "id" ? "Proses detailing kendaraan" : "Vehicle detailing process"} fill sizes="(max-width: 900px) 100vw, 48vw" />
              <span>IDI / 2026</span>
            </div>
            <div className="about-copy">
              <SectionHeading eyebrow={c.about.eyebrow} title={c.about.title} />
              <p className="reveal">{c.about.body}</p>
              <div className="about-signature reveal">{c.about.signature}</div>
            </div>
          </div>
        </section>

        <section className="section location-section" id="contact">
          <div className="container location-grid">
            <div>
              <SectionHeading eyebrow={c.location.eyebrow} title={c.location.title} />
              <button className="button button-dark reveal" onClick={openMaps}>{c.common.maps}<ArrowIcon /></button>
            </div>
            <div className="location-details reveal">
              <div>
                <span>01</span>
                <p>{c.location.address}</p>
                <strong>{isPlaceholder(siteConfig.address) ? c.location.waiting : siteConfig.address}</strong>
              </div>
              <div>
                <span>02</span>
                <p>{c.location.hours}</p>
                <strong>{isPlaceholder(siteConfig.openingHours) ? c.location.waiting : siteConfig.openingHours}</strong>
              </div>
              <div>
                <span>03</span>
                <p>{c.location.contact}</p>
                <strong>{isPlaceholder(siteConfig.phone) ? c.location.waiting : siteConfig.phone}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <Image src="/images/after-repair.webp" alt="" fill sizes="100vw" />
          <div className="final-cta-shade" />
          <div className="final-cta-content reveal">
            <h2>{c.finalCta.title}</h2>
            <p>{c.finalCta.body}</p>
            <div className="hero-actions">
              <button className="button" onClick={() => openWhatsApp(c.messages.photo, "send_photo_click")}>
                {c.common.sendPhoto}<ArrowIcon />
              </button>
              <button className="button button-ghost" onClick={openMaps}>{c.common.maps}<ArrowIcon /></button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Image src="/images/idi-garage-logo.webp" alt="IDI Garage" width={112} height={112} />
            <div>
              <strong>IDI Garage</strong>
              <p>{c.footer.strap}</p>
            </div>
          </div>
          <div className="footer-links">
            <div>
              <p>Navigation</p>
              {links.slice(1).map(([href, label]) => <a href={href} key={href}>{label}</a>)}
            </div>
            <div>
              <p>Connect</p>
              <button onClick={() => openWhatsApp(c.messages.consult, "whatsapp_click")}>WhatsApp</button>
              <span>Instagram — soon</span>
              <span>TikTok — soon</span>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>Bintaro · Indonesia</span>
          <span>{c.footer.rights}</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      <button className="floating-whatsapp" onClick={() => openWhatsApp(c.messages.consult, "whatsapp_click")} aria-label={c.common.whatsapp}>
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </button>

      <div className="mobile-bottom-cta">
        <button onClick={() => openWhatsApp(c.messages.consult, "whatsapp_click")}><WhatsAppIcon />WhatsApp</button>
        <button onClick={openMaps}><MapIcon />Maps</button>
      </div>

      {notice ? <div className="toast" role="status">{notice}</div> : null}

      {lightbox ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} aria-label={c.common.close}><CloseIcon /></button>
          <div className="lightbox-image" onClick={(event) => event.stopPropagation()}>
            <Image src={lightbox} alt="IDI Garage visual preview" fill sizes="100vw" />
          </div>
          <p>{c.common.visualNote}</p>
        </div>
      ) : null}
    </>
  );
}
