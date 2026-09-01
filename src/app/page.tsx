import { ServicePageContent } from "@/components/service/ServicePageContent";
import { planningPermissionContent } from "@/lib/planningPermissionContent";

export default function Home() {
  return <ServicePageContent {...planningPermissionContent} eyebrowHiddenOnMobile />;
}
