function TattooStyleDetailLoading() {
  return (
    <main className="min-w-0">
      <div className="min-w-0 bg-background" aria-busy="true" aria-live="polite">
        <span className="sr-only">Loading tattoo style</span>
        <section className="relative min-h-[min(52vh,440px)] bg-surface-strong md:min-h-[min(58vh,520px)]">
          <div className="mx-auto flex min-h-[min(52vh,440px)] w-full max-w-7xl flex-col items-center justify-end px-4 pb-10 pt-28 md:min-h-[min(58vh,520px)] md:pb-14 md:pt-36">
            <div className="flex w-full max-w-3xl flex-col items-center gap-4 md:gap-5">
              <div className="h-4 w-48 rounded-xs bg-surface-elevated/80 motion-safe:animate-pulse" />
              <div className="h-14 w-full max-w-lg rounded-xs bg-surface-elevated/80 motion-safe:animate-pulse md:h-16" />
              <div className="h-5 w-full max-w-md rounded-xs bg-surface-elevated/70 motion-safe:animate-pulse" />
            </div>
          </div>
        </section>
        <div className="mx-auto w-full max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8 md:py-12">
          <div className="space-y-4">
            <div className="h-8 w-full max-w-md rounded-xs bg-surface-elevated motion-safe:animate-pulse" />
            <div className="h-24 w-full rounded-xs bg-surface-elevated motion-safe:animate-pulse" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }, (_, index) => (
              <div
                key={index}
                className="aspect-3/4 rounded-md bg-surface-elevated motion-safe:animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default TattooStyleDetailLoading;
