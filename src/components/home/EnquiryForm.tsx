"use client";

import { FormEvent, useState } from "react";
import { Field, controlClassName } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { IconCheck } from "@/components/icons";
import { trackFormSubmission } from "@/lib/analytics";
import styles from "./EnquiryForm.module.css";

type Status = "idle" | "submitting" | "success" | "error";

const helpOptions = [
  "Planning Permission",
  "Lawful Development Certificate",
  "House Extension",
  "Loft Extension",
  "Architectural Drawings",
  "Other",
];

export function EnquiryForm({
  compact = false,
  submitLabel = "Get A Free Project Assessment",
}: {
  compact?: boolean;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      trackFormSubmission();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon}>
          <IconCheck width={20} height={20} />
        </span>
        <h3>Thank you — that&rsquo;s with us.</h3>
        <p>
          We&rsquo;ll review the details and be in touch shortly. If it&rsquo;s urgent, call us
          on the number above.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className={styles.honeypot} aria-hidden="true" />

      <Field label="What do you need help with?" htmlFor="service">
        <select id="service" name="service" className={controlClassName} defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          {helpOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label={compact ? "Tell us how we can help" : "Tell us about your project"} htmlFor="message">
        <textarea
          id="message"
          name="message"
          className={controlClassName}
          placeholder="A few lines about the property and what you're hoping to do"
        />
      </Field>

      <Field label="Property Address" htmlFor="address">
        <input
          id="address"
          name="address"
          type="text"
          className={controlClassName}
          placeholder="e.g. 12 High Street, Sutton, SM2 6LE"
        />
      </Field>

      <Field label="Email address" htmlFor="email" required>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={controlClassName}
          placeholder="jane@email.com"
        />
      </Field>

      <Button type="submit" size="lg" className={styles.submit}>
        {status === "submitting" ? "Sending…" : submitLabel}
      </Button>
      {status === "error" && (
        <p className={styles.errorText}>
          Something went wrong sending that — please call us instead, or try again.
        </p>
      )}
      <p className={styles.smallprint}>No Obligation. No Marketing Emails. Response Within Hours.</p>
    </form>
  );
}
