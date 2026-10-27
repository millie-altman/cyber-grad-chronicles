import type { Metadata } from "next";
import { AIToolsPage } from "../../military-spouse-hub/career/ai-tools/page";

export const metadata: Metadata = {
  alternates: { canonical: "/career/ai-tools" },
};

export default function CareerAIToolsPage() {
  return <AIToolsPage includeSiteChrome={false} />;
}
