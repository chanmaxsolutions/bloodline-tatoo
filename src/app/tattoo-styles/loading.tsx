function TattooStylesIndexLoading() {
  return (
    <div className="min-w-0 bg-background" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading tattoo styles</span>
      <section className="border-t border-border/50 bg-surface pt-28 pb-10 md:pt-36 md:pb-12 lg:pb-14">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-4 sm:px-6 lg:px-8">
          <div className="h-5 w-32 rounded-xs bg-surface-elevated motion-safe:animate-pulse" />
          <div className="h-12 w-full max-w-xl rounded-xs bg-surface-elevated motion-safe:animate-pulse" />
          <div className="h-20 w-full max-w-2xl rounded-xs bg-surface-elevated motion-safe:animate-pulse" />
        </div>
      </section>
      <section className="bg-surface pb-10 md:pb-12 lg:pb-14">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-8">
          {Array.from({ length: 4 }, (_, index) => (
            <div
              key={index}
              className="aspect-5/6 rounded-xl bg-surface-elevated motion-safe:animate-pulse md:aspect-2/3 md:min-h-[280px]"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default TattooStylesIndexLoading;
