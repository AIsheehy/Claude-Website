import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";

export const metadata: Metadata = {
  title: "Planning Permission Applications",
  description:
    "Secure planning permission without the fear of refusal, delays or costly mistakes. A complete, done-for-you service from initial advice to council submission.",
};

export default function PlanningPermissionPage() {
  return (
    <ServicePageContent
      eyebrow="Planning permission applications"
      headline="Secure planning permission, without the fear of refusal, delays or costly mistakes."
      lede={
        <>
          A complete, done-for-you service &mdash; from initial advice to drawings to
          submission &mdash; so you can move forward with clarity, confidence and the
          strongest possible chance of approval.
        </>
      }
    />
  );
}
