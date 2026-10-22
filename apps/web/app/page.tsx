import DotGrid from "@/components/DotGrid"
import HomeLoader from "@/components/homepage/HomeLoading"
import HomeHero from "@/components/homepage/HomeHero"
import AnimatedContent from "@/components/AnimatedContent"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function Home() {
  return (
    <HomeLoader>
      <HomeHero />

      <section
        aria-labelledby="content-layout-title"
        className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-medium text-primary">
            Content layout(test)
          </p>
          <h2
            id="content-layout-title"
            className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Yodmayom
          </h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            What do we work on?
          </p>
        </div>

        <div className="grid auto-rows-[minmax(12rem,auto)] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          <AnimatedContent
            className="md:col-span-2 lg:col-span-7 lg:row-span-2"
            distance={48}
            duration={0.7}
            initialOpacity={0}
            animateOpacity
            blur={6}
            threshold={0.15}
          >
            <Card className="h-full overflow-hidden">
              <CardHeader>
                <CardDescription>Featured content</CardDescription>
                <CardTitle>Main content highlights (test)</CardTitle>
              </CardHeader>
              <CardContent className="flex h-full min-h-72 flex-col gap-4">
                <div className="flex-1 rounded-xl border border-dashed bg-muted/30" />
                <div className="space-y-2">
                  <div className="h-3 w-full max-w-md rounded-full bg-muted" />
                  <div className="h-3 w-3/5 rounded-full bg-muted" />
                </div>
              </CardContent>
            </Card>
          </AnimatedContent>

          <AnimatedContent
            className="lg:col-span-5"
            distance={48}
            duration={0.7}
            initialOpacity={0}
            animateOpacity
            blur={6}
            threshold={0.15}
            delay={0.08}
          >
            <Card className="h-full">
              <CardHeader>
                <CardDescription>Latest updates</CardDescription>
                <CardTitle>Recent news (test)</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-[5rem_1fr] gap-4">
                <div className="aspect-square rounded-xl border border-dashed bg-muted/30" />
                <div className="space-y-3 pt-1">
                  <div className="h-3 w-full rounded-full bg-muted" />
                  <div className="h-3 w-4/5 rounded-full bg-muted" />
                  <div className="h-3 w-2/5 rounded-full bg-muted" />
                </div>
              </CardContent>
            </Card>
          </AnimatedContent>

          <AnimatedContent
            className="lg:col-span-5"
            distance={48}
            duration={0.7}
            initialOpacity={0}
            animateOpacity
            blur={6}
            threshold={0.15}
            delay={0.16}
          >
            <Card className="h-full">
              <CardHeader>
                <CardDescription>Announcement</CardDescription>
                <CardTitle>Important notice (test)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="h-3 w-full rounded-full bg-muted" />
                <div className="h-3 w-5/6 rounded-full bg-muted" />
                <div className="h-3 w-1/2 rounded-full bg-muted" />
              </CardContent>
            </Card>
          </AnimatedContent>

          <AnimatedContent
            className="md:col-span-2 lg:col-span-8"
            distance={48}
            duration={0.7}
            initialOpacity={0}
            animateOpacity
            blur={6}
            threshold={0.15}
            delay={0.08}
          >
            <Card className="h-full">
              <CardHeader>
                <CardDescription>Upcoming</CardDescription>
                <CardTitle>coming soon</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="h-24 rounded-xl border border-dashed bg-muted/30"
                  />
                ))}
              </CardContent>
            </Card>
          </AnimatedContent>

          <AnimatedContent
            className="md:col-span-2 lg:col-span-4"
            distance={48}
            duration={0.7}
            initialOpacity={0}
            animateOpacity
            blur={6}
            threshold={0.15}
            delay={0.16}
          >
            <Card className="h-full">
              <CardHeader>
                <CardDescription>Do you want to see more?</CardDescription>
                <CardTitle>You can see more at here (test)</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-12 rounded-xl border border-dashed bg-muted/30"
                  />
                ))}
              </CardContent>
            </Card>
          </AnimatedContent>
        </div>
      </section>

      <footer className="relative mx-3 mt-10 max-w-6xl overflow-hidden rounded-2xl border bg-card/80 shadow-2xl backdrop-blur-xl sm:mx-6 sm:rounded-3xl lg:mx-auto">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 [mask-image:linear-gradient(to_bottom,transparent,black_40%)] opacity-45 sm:h-44 dark:opacity-70">
          <DotGrid
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
