import { getBusinessStructuredData } from "@/lib/structured-data";

export function StructuredData() {
  const structuredData = getBusinessStructuredData();

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      type="application/ld+json"
    />
  );
}
