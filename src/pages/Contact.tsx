import { useState, type SubmitEvent } from "react";
import { MailIcon, MessageCircleIcon, SendIcon } from "lucide-react";

import { Layout } from "@/components/layout";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL as string | undefined;
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined; // digits only, with country code
const TELEGRAM_USERNAME = import.meta.env.VITE_TELEGRAM_USERNAME as string | undefined; // without "@"

const fieldClass = "space-y-1.5";
const labelClass = "text-sm font-medium";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `Project inquiry from ${name}`;
    const body = [
      message,
      "",
      "--",
      "Contact details:",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
    ]
      .filter((line) => line !== null)
      .join("\n");

    const params = new URLSearchParams({
      view: "cm",
      fs: "1",
      to: CONTACT_EMAIL ?? "",
      su: subject,
      body,
    });

    window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank", "noopener,noreferrer");
  };

  const whatsappHref = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Risbel, I'd like to talk about a project.")}`
    : undefined;
  const telegramHref = TELEGRAM_USERNAME ? `https://t.me/${TELEGRAM_USERNAME}` : undefined;

  return (
    <Layout>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-muted-foreground">
        Tell me about your project. Submitting opens Gmail with your message ready to send.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 max-w-xl space-y-4">
        <div className={fieldClass}>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <Input id="name" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
        </div>

        <div className={fieldClass}>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div className={fieldClass}>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 555 000 0000"
          />
        </div>

        <div className={fieldClass}>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project..."
            className="w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-2 text-base outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm dark:bg-input/30"
          />
        </div>

        <button type="submit" className={cn(buttonVariants({ variant: "default", size: "xl" }), "transition-colors")}>
          Send via Gmail <MailIcon />
        </button>
      </form>

      <div className="mt-10 max-w-xl space-y-3">
        <p className="text-sm text-muted-foreground">Or contact me directly:</p>
        <div className="flex flex-wrap gap-3">
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "xl" }), "transition-colors")}
            >
              WhatsApp <MessageCircleIcon />
            </a>
          )}
          {telegramHref && (
            <a
              href={telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "xl" }), "transition-colors")}
            >
              Telegram <SendIcon />
            </a>
          )}
        </div>
      </div>
    </Layout>
  );
}
