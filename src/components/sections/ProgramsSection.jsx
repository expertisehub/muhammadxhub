import { ArrowRight } from "lucide-react";

export default function ProgramsSection({
  programs,
  scrollRef,
  setSelectedProgram,
}) {
  return (
    <section id="programs" className="bg-muted/40 py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            Our Programs
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold">
            Practical training. Real opportunity.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Five interconnected programs designed to equip Northern Nigerian
            youth with skills, mindset, and a network.
          </p>
        </div>
        <div
          className="mt-14 overflow-x-auto pb-6 scrollbar-hide scroll-smooth"
          ref={scrollRef}
        >
          <div className="flex min-w-max gap-6 snap-x snap-mandatory">
            {[...programs, ...programs].map((program, index) => (
              <article
                key={`${program.title}-${index}`}
                className="snap-start group min-w-[320px] max-w-[320px] overflow-hidden rounded-[2rem] bg-white border border-border shadow-soft hover:shadow-glow transition-shadow duration-300 flex flex-col cursor-pointer"
                style={{ animationDelay: `${index * 80}ms` }}
                onClick={() => setSelectedProgram(program)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={program.img}
                    alt={program.title}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-semibold text-lg">
                    {program.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground flex-1 leading-relaxed">
                    {program.desc}
                  </p>
                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
