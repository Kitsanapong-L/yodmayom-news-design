import HomeLoader from "@/components/homepage/HomeLoading"
import HomeHero from "@/components/homepage/HomeHero"
import HomeBento from "@/components/homepage/HomeBento"
import LazyDotGrid from "@/components/homepage/LazyDotGrid"

export function Home() {
  return (
    <HomeLoader>
      <HomeHero />
      <HomeBento />

      <footer className="relative mx-3 mt-10 max-w-6xl overflow-hidden rounded-2xl border bg-card/80 shadow-2xl backdrop-blur-xl sm:mx-6 sm:rounded-3xl lg:mx-auto">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 [mask-image:linear-gradient(to_bottom,transparent,black_40%)] opacity-45 sm:h-44 dark:opacity-70">
          <LazyDotGrid
            dotSize={3}
            gap={10}
            baseColor="#8b7ca3"
            activeColor="#c4b5fd"
            proximity={100}
            strength={0.7}
            glow={0.25}
            opacity={0.65}
            fade={0.35}
            mouseInteraction
            clickShock={false}
          />
        </div>

        <div className="relative z-10 flex min-h-48 flex-col gap-1 px-5 py-6 text-sm text-muted-foreground sm:min-h-64 sm:flex-row sm:items-start sm:justify-between sm:px-10 sm:py-8 lg:px-12">
          <p>© 2026 Yodmayom. All rights reserved.</p>
          <p className="sm:text-right">Build by Kitsanapong Laporm</p>
        </div>
      </footer>
    </HomeLoader>
  )
}

export default Home
