import type { Metadata } from "next";
import { ServicePageContent } from "@/components/service/ServicePageContent";
import { planningPermissionContent } from "@/lib/planningPermissionContent";

export const metadata: Metadata = {
  title: "Planning Permission Applications",
  description:
    "Planning permission advice, drawings and complete application packages — from initial feasibility through to submission, at one fixed price.",
};

export default function PlanningPermissionPage() {
  return <ServicePageContent {...planningPermissionContent} eyebrowHiddenOnMobile />;
}
