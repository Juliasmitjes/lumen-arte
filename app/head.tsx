export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "LumenArte",
            "url": "https://lumenarte.nl",
            "description":
              "Unieke, duurzame lichtsculpturen en pasteltekeningen.",
            "image": "https://lumenarte.nl/og-image.png",
          }),
        }}
      />
    </>
  );
}
