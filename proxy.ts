import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isMyJourneyRoute = createRouteMatcher(["/my-journey(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  if (isMyJourneyRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/(.*)",
  ],
};
