export default function TitleSection() {
  return (
    <section className="relative w-full py-6 md:py-12">
      <div className="relative mx-auto w-fit">
        <div className="pointer-events-none absolute -inset-2 md:-inset-4 rounded-2xl backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] [mask-image:radial-gradient(closest-side,black_78%,transparent_100%)] [-webkit-mask-image:radial-gradient(closest-side,black_78%,transparent_100%)] [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat] [mask-position:center] [-webkit-mask-position:center] [mask-size:100%_100%] [-webkit-mask-size:100%_100%]" />

        <div className="relative z-10 rounded-xl px-4 md:px-8 py-4 md:py-6 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white">
            Thirty Degrees
          </h1>
          <h3 className="text-sm md:text-base text-white/90">
            A project by damian and robin
          </h3>
        </div>
      </div>
    </section>
  );
}
