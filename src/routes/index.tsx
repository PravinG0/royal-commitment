import { createFileRoute } from "@tanstack/react-router";
import { OurCommitment } from "@/components/OurCommitment";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Commitment | Royal Medical Center" },
      {
        name: "description",
        content:
          "Royal Medical Center provides personalized Hormone Replacement Therapy Programs with transparent pricing and licensed medical supervision.",
      },
      { property: "og:title", content: "Our Commitment | Royal Medical Center" },
      {
        property: "og:description",
        content:
          "Personalized hormone therapy with ongoing monitoring, transparent pricing, and licensed medical supervision.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <OurCommitment />
    </main>
  );
}
