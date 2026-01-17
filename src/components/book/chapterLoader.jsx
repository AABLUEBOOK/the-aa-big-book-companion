// Lazy chapter content loader - loads content on demand
const chapterModules = {
   "preface": () => import("./content/prefaceContent"),
   "foreword-first": () => import("./content/forewordFirstContent"),
   "foreword-second": () => import("./content/forewordSecondContent"),
   "foreword-third": () => import("./content/forewordThirdContent"),
   "foreword-fourth": () => import("./content/forewordFourthContent"),
   "doctors-opinion": () => import("./content/doctorsOpinionContent"),
  "bills-story": () => import("./content/billsStoryContent"),
  "there-is-solution": () => import("./content/thereIsSolutionContent"),
  "more-about-alcoholism": () => import("./content/moreAboutAlcoholismContent"),
  "we-agnostics": () => import("./content/weAgnosticsContent"),
  "how-it-works": () => import("./content/howItWorksContent"),
  "into-action": () => import("./content/intoActionContent"),
  "working-with-others": () => import("./content/workingWithOthersContent"),
  "to-wives": () => import("./content/toWivesContent"),
  "family-afterward": () => import("./content/familyAfterwardContent"),
  "to-employers": () => import("./content/toEmployersContent"),
  "vision-for-you": () => import("./content/visionForYouContent"),
  // Personal Stories - Part I: Pioneers of A.A.
  "dr-bob-nightmare": () => import("./content/doctorBobsNightmareContent"),
  "aa-number-three": () => import("./content/aaNumberThreeContent"),
  "gratitude-in-action": () => import("./content/gratitudeInActionContent"),
  "women-suffer-too": () => import("./content/womenSufferTooContent"),
  "our-southern-friend": () => import("./content/ourSouthernFriendContent"),
  "vicious-cycle": () => import("./content/viciousCycleContent"),
  "jims-story": () => import("./content/jimsStoryContent"),
  "man-who-mastered-fear": () => import("./content/manWhoMasteredFearContent"),
  "he-sold-himself-short": () => import("./content/heSoldHimselfShortContent"),
  "keys-of-the-kingdom": () => import("./content/keysOfTheKingdomContent"),
  
  // Personal Stories - Part II: They Stopped in Time
  "missing-link": () => import("./content/missingLinkContent"),
  "fear-of-fear": () => import("./content/fearOfFearContent"),
  "housewife-who-drank": () => import("./content/housewifeWhoDrankContent"),
  "physician-heal-thyself": () => import("./content/physicianHealThyselfContent"),
  "my-chance-to-live": () => import("./content/myChanceToLiveContent"),
  "student-of-life": () => import("./content/studentOfLifeContent"),
  "crossing-river-denial": () => import("./content/crossingRiverDenialContent"),
  "because-im-alcoholic": () => import("./content/becauseImAlcoholicContent"),
  "me-an-alcoholic": () => import("./content/meAnAlcoholicContent"),
  "aa-taught-him": () => import("./content/aaTaughtHimContent"),
  // TODO: Still need content files for these stories:
  // "my-next-two-weeks": () => import("./content/myNextTwoWeeksContent"),
  // "another-quiet-victory": () => import("./content/anotherQuietVictoryContent"),
  // Part II & Part III Stories
  "perpetual-quest": () => import("./content/perpetualQuestContent"),
  "drunk-like-you": () => import("./content/drunkLikeYouContent"),
  "acceptance-was-answer": () => import("./content/acceptanceWasAnswerContent"),
  "window-of-opportunity": () => import("./content/windowOfOpportunityContent"),
  // Part III: They Lost Nearly All
  "my-bottle-my-resentments": () => import("./content/myBottleMyResentmentsContent"),
  "he-lived-only-to-drink": () => import("./content/heLivedOnlyToDrinkContent"),
  "safe-haven": () => import("./content/safeHavenContent"),
  "listening-to-wind": () => import("./content/listeningToWindContent"),
  "twice-gifted": () => import("./content/twiceGiftedContent"),
  "building-new-life": () => import("./content/buildingNewLifeContent"),
  "on-the-move": () => import("./content/onTheMoveContent"),
  "vision-of-recovery": () => import("./content/visionOfRecoveryContent"),
  "gutter-bravado": () => import("./content/gutterBravadoContent"),
  "empty-on-the-inside": () => import("./content/emptyOnTheInsideContent"),
  "grounded": () => import("./content/groundedContent"),
  "another-chance": () => import("./content/anotherChanceContent"),
  "late-start": () => import("./content/lateStartContent"),
  "freedom-from-bondage": () => import("./content/freedomFromBondageContent"),
  "aa-taught-him-sobriety": () => import("./content/aaTaughtHimContent"),
  // TODO: Still need content files for Part III stories:
  // "news-hawk": () => import("./content/newsHawkContent"),
  // "european-drinker": () => import("./content/europeanDrinkerContent"),
  // "he-who-loses-life": () => import("./content/heWhoLosesLifeContent"),
  // "rum-radio-rebellion": () => import("./content/rumRadioRebellionContent"),
  // "teenagers-decision": () => import("./content/teenagersDecisionContent"),
  // "growing-up-all-over": () => import("./content/growingUpAllOverContent"),
  // "unto-second-generation": () => import("./content/untoSecondGenerationContent"),
  // "one-mans-passage": () => import("./content/oneMansPassageContent"),
  
  // Appendices
  "appendices": () => import("./content/appendicesContent"),
};

// Cache for loaded chapters - exported for search index sharing
const cache = new Map();

// Export cache getter for search index to share
export function getCache() {
  return cache;
}

export async function loadChapterContent(chapterId) {
  // Check cache first
  if (cache.has(chapterId)) {
    return cache.get(chapterId);
  }
  
  // Check inline content
  if (inlineContent[chapterId]) {
    cache.set(chapterId, inlineContent[chapterId]);
    return inlineContent[chapterId];
  }
  
  // Check if we have a loader for this chapter
  if (chapterModules[chapterId]) {
    try {
      const module = await chapterModules[chapterId]();
      const contentKey = Object.keys(module)[0];
      const content = module[contentKey];
      cache.set(chapterId, content);
      return content;
    } catch (e) {
      console.warn(`Failed to load chapter: ${chapterId}`);
    }
  }
  
  // Return default content
  return { paragraphs: [{ text: "Content for this chapter will be added soon." }] };
}

// Preload next chapter for smoother navigation
export function preloadChapter(chapterId) {
  if (!cache.has(chapterId) && chapterModules[chapterId]) {
    chapterModules[chapterId]().catch(() => {});
  }
}