import { createFileRoute } from "@tanstack/react-router";
import defaultCover from "@/assets/cover-default.jpg";
import { QrCard } from "@/components/QrCard";
import { UploadablePhoto } from "@/components/UploadablePhoto";

const LINKEDIN = "https://www.linkedin.com/in/sylvester-a-66057741/";
const EMAIL = "sylvester.abanseka@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Sylvester Abanseka, DBA — Security GRC Executive" },
      {
        name: "description",
        content:
          "Dr. Sylvester Abanseka, DBA, CISSP — Principal Information Security GRC leader at Cloudflare, founder of Proxim Advisory, and Brazilian jiu-jitsu practitioner.",
      },
      { property: "og:title", content: "Dr. Sylvester Abanseka, DBA — Security GRC Executive" },
      {
        property: "og:description",
        content:
          "Enterprise governance, risk and compliance leadership. Founder of Proxim Advisory. Brazilian jiu-jitsu on the mats.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const capabilities = [
  "Enterprise Governance",
  "Cybersecurity Strategy",
  "Enterprise Risk Management",
  "Executive Advisory",
  "Regulatory Compliance",
  "Cloud Security",
  "Privacy Governance",
  "Third-Party Risk",
  "AI Governance",
  "Security Assurance",
];

const experience = [
  {
    org: "Cloudflare",
    role: "Principal Information Security GRC Leader",
    period: "2021 – Present",
    detail:
      "Strategic governance leadership for enterprise security initiatives and executive customer engagements. Previously Senior Manager, Security Assurance. Selected twice to represent Cloudflare at Gartner Executive Summits, moderating discussions on innovation, business agility and “Zero Trust as a Culture, Not Just a Control.”",
  },
  {
    org: "VMware",
    role: "Information Security Governance Leader",
    period: "Earlier",
    detail: "Governance frameworks and control assurance across a global cloud technology estate.",
  },
  {
    org: "Vodafone",
    role: "Security & Privacy Technical Security Auditor",
    period: "Earlier",
    detail: "Technical security and privacy auditing across telecommunications infrastructure.",
  },
  {
    org: "GlaxoSmithKline · BAE Systems Applied Intelligence · Balfour Beatty · British Army",
    role: "Security, engineering and team leadership roles",
    period: "Foundation years",
    detail:
      "Pharmaceutical, defence, engineering and critical infrastructure environments — including team lead responsibility in the British Army.",
  },
];

function Index() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-hero-veil" aria-labelledby="hero">
        <img
          src={defaultCover}
          alt=""
          aria-hidden="true"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-hero-veil" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:items-center sm:py-28">
          <div>
            <h1 id="hero" className="max-w-3xl text-5xl leading-[1.05] sm:text-7xl">
              Dr. Sylvester Abanseka, DBA
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Principal Information Security GRC Leader · Enterprise Governance, Risk & Compliance · Executive
              Security Advisor
            </p>
            <p className="mt-3 text-sm tracking-wide text-primary">CISSP · CCSK · ITIL · ISO 27001 Lead Implementer</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="btn-solid-gold" href={LINKEDIN} target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
              <a className="btn-ghost-gold" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
          </div>
          <UploadablePhoto
            storageKey="sa-portrait-photo"
            label="Upload your professional portrait"
            alt="Dr. Sylvester Abanseka — professional portrait"
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20" aria-labelledby="profile">
        <p className="eyebrow">Executive profile</p>
        <h2 id="profile" className="mt-3 text-3xl sm:text-4xl">
          Translating complex cyber risk into business strategy
        </h2>
        <div className="mt-6 grid gap-6 text-base leading-relaxed text-muted-foreground md:grid-cols-2">
          <p>
            Enterprise cybersecurity and Governance, Risk & Compliance leader with 15+ years of global experience
            building governance strategies, strengthening enterprise risk management and enabling growth across cloud
            technology, telecommunications, defence, pharmaceutical, engineering and critical infrastructure.
          </p>
          <p>
            Currently Principal Information Security GRC Leader at Cloudflare, advising strategic customers and
            partnering with engineering, legal, privacy, product and executive leadership to strengthen governance,
            security and regulatory compliance. A 2026 publication is planned:{" "}
            <em>Automating Business Information Systems for Audit Compliance in Cloud-Native Organizations</em>.
          </p>
        </div>
        <ul className="mt-10 flex flex-wrap gap-2">
          {capabilities.map((c) => (
            <li
              key={c}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-card-foreground"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-y border-border bg-card/40" aria-labelledby="proxim">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="eyebrow">Brainchild</p>
          <h2 id="proxim" className="mt-3 text-3xl sm:text-4xl">
            Proxim Advisory
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Proxim Advisory is my brainchild — an independent advisory practice built on a simple conviction: security
            governance works best when it sits <em>close</em> to the business it protects. Proximity to the decision,
            proximity to the risk, proximity to the people who own the outcome.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Board & executive advisory",
                d: "Turning regulatory and cyber risk into decisions leadership can act on, in language the board already speaks.",
              },
              {
                t: "Governance by design",
                d: "ISO 27001, SOC 2, NIST and GDPR programs designed to scale with cloud-native engineering, not slow it down.",
              },
              {
                t: "Assurance & AI governance",
                d: "Third-party risk, audit readiness and emerging AI governance frameworks built for evidence and automation.",
              },
            ].map((x) => (
              <article key={x.t} className="rounded-2xl border border-border bg-card p-6 shadow-elev">
                <h3 className="text-xl">{x.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{x.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20" aria-labelledby="experience">
        <p className="eyebrow">Track record</p>
        <h2 id="experience" className="mt-3 text-3xl sm:text-4xl">
          Professional experience
        </h2>
        <ol className="mt-10 space-y-8 border-l border-border pl-6">
          {experience.map((e) => (
            <li key={e.org} className="relative">
              <span
                className="absolute -left-[1.7rem] top-2 h-2.5 w-2.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{e.period}</p>
              <h3 className="mt-1 text-2xl">{e.org}</h3>
              <p className="text-sm text-primary">{e.role}</p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl">Education</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Doctorate in Business Administration (DBA) — Management Information Systems & ERP</li>
              <li>MSc — Security Management</li>
              <li>LL.B (Hons) — Bachelor of Laws</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="text-xl">Certifications</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              CISSP · CCSK · ISO 27001 Lead Implementer · AWS Security Specialty · AWS Solutions Architect Associate ·
              Certified Data Protection Officer · ITIL · PRINCE2 · AI Security & Governance
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40" aria-labelledby="bjj">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">Off the clock</p>
            <h2 id="bjj" className="mt-3 text-3xl sm:text-4xl">
              Brazilian jiu-jitsu
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              The mats are where the rest of my thinking gets sharpened. Brazilian jiu-jitsu is my main hobby and my
              most honest teacher: it rewards patience over force, position over panic, and a plan that survives contact
              with a resisting opponent.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              It maps almost perfectly onto security leadership — control the position before you chase the submission,
              manage risk rather than eliminate it, and stay calm under pressure. Training keeps me curious, humble and
              consistent, and it is the discipline I bring back to every boardroom.
            </p>
          </div>
          <div className="space-y-6">
            <UploadablePhoto
              storageKey="sa-bjj-photo"
              label="Upload a photo from the mats"
              alt="Brazilian jiu-jitsu training"
            />
            <ul className="space-y-4">
            {[
              ["Position before submission", "Fix the fundamentals before chasing the flashy outcome."],
              ["Pressure, not panic", "Composure is a leadership skill you can train."],
              ["Every round is feedback", "Losing well is the fastest way to get better."],
            ].map(([t, d]) => (
              <li key={t} className="rounded-2xl border border-border bg-card p-5 shadow-elev">
                <p className="text-lg">{t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20" aria-labelledby="contact">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <p className="eyebrow">Let's talk</p>
            <h2 id="contact" className="mt-3 text-3xl sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Available for executive advisory, governance program leadership and speaking engagements. Scan the code or
              use the details below.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <a className="text-primary hover:underline" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <a className="text-primary hover:underline" href="tel:+12502587187">
                  250-258-7187
                </a>
              </li>
              <li>
                <a className="text-primary hover:underline" href={LINKEDIN} target="_blank" rel="noreferrer">
                  linkedin.com/in/sylvester-a-66057741
                </a>
              </li>
            </ul>
          </div>
          <QrCard url={LINKEDIN} label="Scan to open my LinkedIn profile" />
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dr. Sylvester Abanseka · Proxim Advisory
      </footer>
    </main>
  );
}
