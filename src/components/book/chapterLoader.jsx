// Lazy chapter content loader - loads content on demand
const chapterModules = {
  "preface": () => import("./content/prefaceContent"),
  "foreword-first": () => import("./content/forewordFirstContent"),
  "foreword-second": () => import("./content/forewordSecondContent"),
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

// Static inline content for smaller chapters (no separate file needed)
const inlineContent = {
  "foreword-third": {
    paragraphs: [
      { text: 'BY March 1976, when this edition went to the printer, the total worldwide membership of Alcoholics Anonymous was conservatively estimated at more than 1,000,000, with almost 28,000 groups meeting in over 90 countries.' },
      { text: 'Surveys of groups in the United States and Canada indicate that A.A. is reaching out, not only to more and more people, but to a wider and wider range. Women now make up more than one-fourth of the membership; among newer members, the proportion is nearly one-third. Seven percent of the A.A.\'s surveyed are less than 30 years of age—among them, many in their teens.' },
      { text: 'The basic principles of the A.A. program, it appears, hold good for individuals with many different lifestyles, just as the program has brought recovery to those of many different nationalities. The Twelve Steps that summarize the program may be called los Doce Pasos in one country, les Douze Étapes in another, but they trace exactly the same path to recovery that was blazed by the earliest members of Alcoholics Anonymous.' },
      { text: 'In spite of the great increase in the size and the span of this Fellowship, at its core it remains simple and personal. Each day, somewhere in the world, recovery begins when one alcoholic talks with another alcoholic, sharing experience, strength, and hope.' }
    ]
  },
  "foreword-fourth": {
    paragraphs: [
      { text: 'This fourth edition of "Alcoholics Anonymous" came off press in November 2001, at the start of a new millennium. Since the third edition was published in 1976, worldwide membership of A.A. has just about doubled, to an estimated two million or more, with nearly 100,800 groups meeting in approximately 150 countries around the world.' },
      { text: 'Literature has played a major role in A.A.\'s growth, and a striking phenomenon of the past quarter-century has been the explosion of translations of our basic literature into many languages and dialects. In country after country where the A.A. seed was planted, it has taken root, slowly at first, then growing by leaps and bounds when literature has become available. Currently, "Alcoholics Anonymous" has been translated into forty-three languages. (In 2021, Alcoholics Anonymous is in seventy-three languages.)' },
      { text: 'As the message of recovery has reached larger numbers of people, it has also touched the lives of a vastly greater variety of suffering alcoholics. When the phrase "We are people who normally would not mix" (page 17 of this book) was written in 1939, it referred to a Fellowship composed largely of men (and a few women) with quite similar social, ethnic, and economic backgrounds. Like so much of A.A.\'s basic text, those words have proved to be far more visionary than the founding members could ever have imagined. The stories added to this edition represent a membership whose characteristics—of age, gender, race, and culture—have widened and have deepened to encompass virtually anyone the early members could have imagined would be affected by alcoholism.' }
    ]
  }
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