"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/common/container";
import { MagneticButton } from "@/components/common/magnetic-button";
import { SectionTitle } from "@/components/common/section-title";
import { socialLinks, site } from "@/data/site";
import { getPortfolioCopy } from "@/data/portfolio-copy";
import type { Locale } from "@/lib/locale";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type ContactProps = {
  locale: Locale;
};

export function Contact({ locale }: ContactProps) {
  const copy = getPortfolioCopy(locale);
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
            to_name: site.name,
          },
          publicKey
        );

        setStatus("success");
        setForm(initialState);
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      form.subject || copy.contact.labels.subject
    )}&body=${encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`)}`;
    setStatus("success");
    setForm(initialState);
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <Container>
        <div className="space-y-10">
          <SectionTitle
            eyebrow={copy.contact.eyebrow}
            title={copy.contact.title}
            description={copy.contact.description}
          />

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="space-y-3">
                <h3 className="font-heading text-2xl font-semibold text-white">{copy.contact.availability}</h3>
                <p className="text-sm leading-7 text-slate-300">{copy.contact.description}</p>
              </div>

              <div className="space-y-3 text-sm text-slate-200">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Mail className="size-4 text-cyan-300" />
                  <a href={`mailto:${site.email}`} className="hover:text-white">
                    {site.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Phone className="size-4 text-cyan-300" />
                  <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                    {site.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <MapPin className="size-4 text-cyan-300" />
                  <span>{site.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <MagneticButton href={`mailto:${site.email}`} className="bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                  {copy.contact.emailMe}
                </MagneticButton>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.icon === "mail" ? undefined : "_blank"}
                    rel={link.icon === "mail" ? undefined : "noreferrer"}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10"
                  >
                    {link.icon === "github" && <FaGithub className="size-4" />}
                    {link.icon === "linkedin" && <FaLinkedinIn className="size-4" />}
                    {link.icon === "mail" && <Mail className="size-4" />}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-200">
                  <span>{copy.contact.labels.name}</span>
                  <input
                    required
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400"
                    placeholder={copy.contact.placeholders.name}
                  />
                </label>
                <label className="space-y-2 text-sm text-slate-200">
                  <span>{copy.contact.labels.email}</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                    placeholder={copy.contact.placeholders.email}
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm text-slate-200">
                <span>{copy.contact.labels.subject}</span>
                <input
                  required
                  value={form.subject}
                  onChange={(event) => setForm({ ...form, subject: event.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  placeholder={copy.contact.placeholders.subject}
                />
              </label>

              <label className="space-y-2 text-sm text-slate-200">
                <span>{copy.contact.labels.message}</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
                  placeholder={copy.contact.placeholders.message}
                />
              </label>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/15"
                >
                  {status === "sending" ? copy.contact.buttons.sending : copy.contact.buttons.send}
                </button>
                <p className="text-sm text-slate-400">
                  {status === "success"
                    ? copy.contact.status.success
                    : status === "error"
                      ? copy.contact.status.error
                      : copy.contact.status.idle}
                </p>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}