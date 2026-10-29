export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-16 md:py-20" aria-labelledby={`${id}-title`}>
      <div className="mb-8 md:mb-10">
        <h2 id={`${id}-title`} className="text-2xl font-semibold text-white md:text-3xl">
          {title}
        </h2>
        {subtitle && <p className="mt-2 max-w-2xl text-sm text-white/60 md:text-base">{subtitle}</p>}
      </div>
      {children}
    </section>
  )
}
