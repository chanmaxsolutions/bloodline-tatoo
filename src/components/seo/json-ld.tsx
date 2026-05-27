interface JsonLdProps {
  data: Record<string, unknown> | readonly Record<string, unknown>[];
}

function JsonLd({ data }: JsonLdProps) {
  const graphs = Array.isArray(data) ? data : [data];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graphs.length === 1 ? graphs[0] : graphs),
      }}
    />
  );
}

export { JsonLd };
