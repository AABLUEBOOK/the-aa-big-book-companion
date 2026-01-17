# STRICT PURPLE GLOSSARY TERMS PROMPT
## For Base44 AI Implementation - 100% Accuracy Required

---

## MISSION STATEMENT
Apply ONLY purple bold text highlighting with popup definitions to specific glossary terms throughout the AA Big Book. DO NOT modify, condense, or alter any existing text. DO NOT process any term that conflicts with dictionary1930sTermsData.

---

## CRITICAL RULES (NON-NEGOTIABLE)

### Rule 1: Dictionary Conflict Check (MANDATORY)
```javascript
BEFORE processing ANY term:
import { isTermInDictionary } from '@/components/book/dictionary1930sTermsData.js';

if (isTermInDictionary(glossaryTerm)) {
  SKIP - do NOT apply purple highlighting
  leave text as normal/original
} else {
  SAFE - apply purple wrapper
}
```

**Example:**
- "abandon" exists in dictionary → SKIP (leave as regular text)
- "Alcoholics Anonymous" NOT in dictionary → APPLY purple wrapper

### Rule 2: EXACT TEXT MATCHING ONLY
- Match term exactly as written in keyTermsData
- Case-insensitive for searching
- Word boundaries only (use regex: `\b{term}\b`)
- Do NOT wrap partial words or fragments

**CORRECT:**
```
Text: "Bill Wilson co-founded AA"
Match: "Bill Wilson" ✓
```

**WRONG:**
```
Text: "willpower was gone"
Match: "will" inside "willpower" ✗
```

### Rule 3: ZERO TEXT MODIFICATION
- NO condensing Big Book text
- NO rewriting or improving wording
- NO removing or rearranging paragraphs
- NO changing punctuation
- NO shortening definitions from keyTermsData
- NO combining multiple paragraphs

**PRESERVE EXACTLY:**
- Page breaks ({ pageNum: "xi" })
- Paragraph structure
- Line breaks within paragraphs
- Segment formatting ({ segments: [...] })
- Highlight formatting ({ highlight: 'pink' })
- All punctuation and spacing

### Rule 4: WRAPPER APPLICATION ONLY
- Wrap ONLY the term word/phrase itself
- Do NOT wrap surrounding text
- Use GlossaryTerm component
- Keep everything adjacent text IDENTICAL

**CORRECT:**
```jsx
Text: "Alcoholics Anonymous was founded in 1935"
Result: "<GlossaryTerm>Alcoholics Anonymous</GlossaryTerm> was founded in 1935"
```

**WRONG:**
```jsx
Result: "Alcoholics Anonymous <GlossaryTerm>was founded</GlossaryTerm> in 1935"
Result: "<GlossaryTerm>Alcoholics Anonymous was founded in 1935</GlossaryTerm>"
```

### Rule 5: COLOR & STYLING
- Text color: #9333EA (purple)
- Font-weight: bold
- Underline: NONE (no text-decoration-underline)
- Hover effect: subtle purple border-bottom (not underline)
- No other styling applied

**DO NOT:**
- Add backgrounds
- Add shadows
- Change font family
- Add borders (except on hover)
- Modify line-height or letter-spacing

### Rule 6: DEFINITION ACCURACY
- Use definition from keyTermsData EXACTLY as-is
- Do NOT condense further
- Do NOT rewrite for clarity
- Do NOT combine multiple definitions
- Do NOT change punctuation or formatting in definition

**CORRECT:**
```
From keyTermsData:
"Founded May 12, 1935 by Bill Wilson & Dr. Bob Smith in Akron, Ohio. Two alcoholics discovered they could help each other stay sober. Today: 2+ million members worldwide."

Use EXACTLY that
```

**WRONG:**
```
Condense to: "Founded May 12, 1935 in Akron, Ohio"
Rewrite to: "AA started in 1935"
Combine: "Founded by Bill Wilson & Dr. Bob Smith to help alcoholics"
```

### Rule 7: MULTIPLE OCCURRENCES
- Each occurrence of term gets wrapped separately
- If term appears 5 times in chapter → 5 separate popups
- Each opens independent modal
- All identical definitions

**Example:**
```
"Bill Wilson met Dr. Bob Smith. Bill Wilson was a stockbroker. 
The day Bill Wilson and Dr. Bob founded AA was May 12, 1935."

Result: All 3 instances of "Bill Wilson" wrapped separately
```

### Rule 8: PRESERVE PAGE NUMBERS & STRUCTURE
- { pageNum: "xi" } stays UNTOUCHED
- Paragraph breaks stay EXACTLY as-is
- All object structure preserved
- No reformatting allowed

**BEFORE:**
```javascript
paragraphs: [
  { pageNum: "xi" },
  { text: "Alcoholics Anonymous was founded..." },
  { text: "The book was published..." }
]
```

**AFTER:**
```javascript
paragraphs: [
  { pageNum: "xi" },
  { text: "<GlossaryTerm>Alcoholics Anonymous</GlossaryTerm> was founded..." },
  { text: "The book was published..." }
]
```
No other changes.

---

## IMPLEMENTATION WORKFLOW

### Phase 1: Setup (ONE TIME ONLY)
1. Import keyTermsData from `components/book/keyTermsData.js`
2. Import dictionary check from `components/book/dictionary1930sTermsData.js`
3. Add GlossaryTerm component (identical to DictionaryTermProcessor structure)
4. Add purple CSS to Layout.js (already provided in GLOSSARY_COMMAND_GUIDE.js)

### Phase 2: For Each Content File
**File Pattern:** `components/book/content/[chapterName]Content.js`

**For Each Paragraph:**
1. Read paragraph text
2. For each glossary term in keyTermsData:
   a. Check: `isTermInDictionary(term)` → if YES, skip to next term
   b. Find: exact term matches in text (word boundaries only)
   c. Wrap: term with GlossaryTerm component
   d. Verify: no other text changed
   e. Keep: definition from keyTermsData exactly

### Phase 3: Quality Verification
For each file, verify:
- [ ] No dictionary conflicts (all skipped terms confirmed)
- [ ] No text modification (original text identical except for wrapper)
- [ ] Purple color applied (#9333EA)
- [ ] No underlines on terms
- [ ] All page numbers intact
- [ ] All paragraph structure preserved
- [ ] Definitions match keyTermsData exactly
- [ ] Mobile responsive (test iPhone SE 375px + iPhone 12 430px)

---

## GLOSSARY TERM LIST & DEFINITIONS

All terms from `keyTermsData.js`. Process in this exact order:

### PREFACE TERMS (Page xi-xvii)
1. **Alcoholics Anonymous** → Definition: "Founded May 12, 1935 by Bill Wilson & Dr. Bob Smith in Akron, Ohio. Two alcoholics discovered they could help each other stay sober. Today: 2+ million members worldwide."

2. **April 1939** → Definition: "Big Book Published: 5,000 copies at $3.50 each. This book gave AA its name and carried the message worldwide. 30+ million copies sold to date."

3. **New York stockbroker** → Definition: "BILL WILSON (Bill W.) - Co-Founder. Born Nov 26, 1895. Sober Dec 11, 1934. Co-founded AA May 12, 1935. Wrote most of Big Book & Twelve Steps."

4. **Akron physician** → Definition: "DR. BOB SMITH - Co-Founder. Born Aug 8, 1879. Sober June 10, 1935 (Founders Day). Akron surgeon who stayed sober 15+ years. Treated thousands with Sister Ignatia."

5. **Bill Wilson** → Definition: "BILL W. - AA Co-Founder. NY stockbroker. Spiritual experience Dec 14, 1934. Met Dr. Bob May 12, 1935. Wrote Big Book & Twelve Steps."

6. **Dr. Bob** → Definition: "DR. BOB SMITH - AA Co-Founder. Akron surgeon. Sober June 10, 1935. Met Bill Wilson May 12, 1935. Stayed sober 15+ years."

7. **May 12, 1935** → Definition: "DAY AA WAS BORN - Akron, Ohio. 5:00 PM-11:15 PM. Bill Wilson & Dr. Bob Smith talked 6 hours. One alcoholic helping another founded AA."

8. **alcoholic friend** → Definition: "EBBY THACHER - Bill's Sponsor. Childhood friend. Visited Bill Nov 1934 in Brooklyn. Said: 'I've got religion.' Carried message to Bill."

9. **Oxford Groups** → Definition: "OXFORD GROUP - 1920s Christian movement led by Frank Buchman. Four Absolutes: Honesty, Purity, Unselfishness, Love. AA adapted practices for alcoholics."

10. **New York specialist** → Definition: "DR. WILLIAM SILKWORTH - Towns Hospital Medical Director. Theory: alcoholism = physical allergy + mental obsession. Validated Bill's spiritual experience."

11. **the broker** → Definition: "BILL WILSON - Worked Wall Street 1920s during boom. Lost everything to alcoholism by early 1930s. Got sober: December 11, 1934."

12. **AA No. 3** → Definition: "BILL DOTSON - AA's 3rd member. Lawyer, Akron. Sober June 26, 1935. First successful 12th step call by Bill & Dr. Bob. Story: 'The Man on the Bed' p. 156-158."

13. **Bill Dotson** → Definition: "AA NO. 3 - Lawyer, Akron. Sober June 26, 1935. Visited by Bill & Dr. Bob at Akron City Hospital June 28, 1935. First successful 12th step call."

14. **noted clergyman** → Definition: "DR. HARRY EMERSON FOSDICK - Pastor, Riverside Church NYC. Famous liberal Protestant minister. Publicly endorsed AA. Gave credibility nationwide."

15. **Liberty** → Definition: "LIBERTY MAGAZINE - 1930s-40s national magazine. Editor: Fulton Oursler. Gave AA early publicity. Connected fellowship with influential supporters."

16. **John D. Rockefeller, Jr.** → Definition: "PHILANTHROPIST - One of America's wealthiest. Held dinner for AA at Union Club (1940). Famous decision: 'Money will spoil this.' Gave modest support."

17. **Jack Alexander** → Definition: "JACK ALEXANDER - Saturday Evening Post. Article: March 1, 1941. Exploded AA growth from ~100 to 8,000+ members. Most important publicity in AA history."

### DOCTOR'S OPINION TERMS (Page xxv-xxxii)

18. **well known doctor** → Definition: "DR. WILLIAM SILKWORTH - Towns Hospital Medical Director. Treated Bill Wilson multiple times 1933-1934. Revolutionary theory: alcoholism = physical allergy + mental obsession."

19. **the patient** → Definition: "BILL WILSON - Dr. Silkworth's patient. Admitted Towns Hospital multiple times 1933-1934. Considered hopeless case. Final admission Dec 11, 1934. Spiritual experience Dec 14, 1934."

20. **one of the leading contributors to this book** → Definition: "BILL WILSON - Primary Author. Wrote chapters 1-11, Twelve Steps, 'Bill's Story.' Wrote first draft longhand at kitchen table, 182 Clinton St, Brooklyn, NY. 1938-1939."

21. **man brought in to be treated** → Definition: "HANK PARKHURST - Standard Oil executive. Sober Nov 1935. Wrote Chapter 10 'To Employers.' Helped publish Big Book. Story: 'The Unbeliever' (1st edition). Later relapsed."

22. **the man who had hidden in a barn** → Definition: "FITZ MAYO - 'Our Southern Friend.' Early AA member from the South. Dramatic story in Big Book. One of colorful early members whose story helped others."

### CHAPTER 1: BILL'S STORY TERMS

23. **Winchester Cathedral** → Definition: "WINCHESTER CATHEDRAL - England location. Bill visited before getting sober. Saw tombstone warning about drinking. Early spiritual experience that foreshadowed later awakening."

24. **Hampshire Grenadier** → Definition: "THOMAS THETCHER - Buried Winchester Cathedral, England. Epitaph warned soldiers about drinking dangers. Bill saw tombstone and was moved spiritually."

25. **Law courses** → Definition: "BROOKLYN LAW SCHOOL - 250 Joralemon St, Brooklyn NY. Bill studied law but never completed degree. WWI interrupted (1917). Chose Wall Street over law."

26. **Harley Davidson** → Definition: "MOTORCYCLE TRIP - April 1925. Bill & Lois rode Harley with sidecar cross-country to California. Worked odd jobs. One of their happiest times before alcoholism worsened."

27. **Ella Goldfoot's farm** → Definition: "ELLA GOLDFOOT'S FARM - Scotia, New York. Time: 1925. Bill & Lois worked here one month during motorcycle trip. Near Connecticut border."

28. **exclusive golf course** → Definition: "EKWANOK COUNTRY CLUB - Manchester, Vermont. Exclusive golf club where Bill played and drank heavily. Spring 1929: 'contracted golf fever.' Scene of increasing alcoholism."

29. **XYZ-32** → Definition: "PENICK & FORD STOCK - Fell 52 to 32 in one day. Represented Bill's financial losses in 1929 stock market crash. Great Depression began October 1929."

30. **friend in Montreal** → Definition: "RICHARD 'DICK' JOHNSON - Worked Greenshields & Co. brokerage, Montreal. Business friend who witnessed Bill's worsening alcoholism. Montreal = drinking destination during Prohibition."

31. **His wife's parents** → Definition: "DR. CLARK & MATILDA BURNHAM - Lois's parents. Home: 182 Clinton St, Brooklyn. Supported Bill & Lois. House became first NYC AA meeting place & where Bill wrote Big Book."

32. **Macy's** → Definition: "MACY'S DEPARTMENT STORE - Herald Square, NYC. Lois worked here during Bill's worst drinking years (early 1930s). She was sole breadwinner while Bill was unemployable."

33. **I had written lots of sweet promises** → Definition: "BILL'S WRITTEN PLEDGES - Oct 20, 1928: first pledge in family Bible to quit drinking. Thanksgiving 1928, Jan 1929, Sept 3, 1930: all broken. Willpower failed."

34. **A doctor came with a heavy sedative** → Definition: "SEDATIVE TREATMENT - Early Spring 1934. Doctor prescribed powerful sedatives. Bill mixed with alcohol—extremely dangerous. Led to worsening condition."

35. **brother-in-law** → Definition: "DR. LEONARD V. STRONG JR. - Osteopathic physician. Married Dorothy Wilson (Bill's sister). Concerned about Bill's deterioration. Helped arrange Towns Hospital admission."

36. **nationally-known hospital** → Definition: "TOWNS HOSPITAL - Full name: Charles B. Towns Hospital. 293 Central Park West, NYC. Specialty: alcohol & drug addiction. Bill admitted multiple times 1933-1934."

37. **Belladonna** → Definition: "BELLADONNA TREATMENT - Deadly nightshade plant. Used in small doses as sedative for alcohol withdrawal at Towns Hospital. Toxic in large doses—carefully controlled."

38. **kind doctor** → Definition: "DR. WILLIAM SILKWORTH - Towns Hospital Medical Director. Treated Bill with compassion, not judgment. When Bill had spiritual experience, validated it: 'Hang on to it.'"

39. **I returned to the hospital** → Definition: "SUMMER 1934 ADMISSION - Bill returned to Towns Hospital in summer 1934 for another detox. Still couldn't stay sober. Final admission came December 1934."

40. **Armistice Day** → Definition: "ARMISTICE DAY 1934 - Nov 11, 1934. End of WWI anniversary—national holiday. Referenced as time marker in Bill's story near Ebby's visit."

41. **old school friend** → Definition: "EBBY THACHER - Childhood friend from Vermont. Visited late Nov 1934 at 182 Clinton St, Brooklyn (kitchen). Message: 'I've got religion.' Bill's sponsor."

42. **chartered an airplane** → Definition: "AIRPLANE TO VERMONT - Jan 1929. Bill chartered from Albany, NY to Manchester, Vermont. Purpose: grand opening of new airport. Shows Bill's grandiose spending."

43. **two men had appeared in court** → Definition: "RESCUE OF EBBY - Aug 1934. Actually 3 Oxford Group members: Rowland Hazard, Shep Cornell, Cebra Graves. Saved Ebby from insane asylum commitment. Chain: Jung → Rowland → Ebby → Bill."

44. **My grandfather** → Definition: "FAYETTE GRIFFITH - Bill's maternal grandfather. Influenced Bill's early spiritual understanding. Vermont roots gave Bill self-reliance & spiritual awareness."

45. **Scales of pride and prejudice fell from my eyes** → Definition: "CONVERSION EXPERIENCE - Biblical reference: Acts 9:18 (Apostle Paul's conversion). After Ebby's visit: pride fell away, prejudice lifted, spiritual blindness ended. Set up Dec 14 experience."

46. **the hospital** → Definition: "TOWNS HOSPITAL - Final admission Dec 11, 1934 at 2:38 PM. Age: 39. Day 3: Spiritual experience (Dec 14). Discharged Dec 18, 1934, sober. Never drank again."

47. **December 14, 1934** → Definition: "BILL'S SPIRITUAL EXPERIENCE - Day 3 at Towns Hospital. Bill cried: 'If there be a God, let Him show Himself!' Experience: white light, ecstasy, vision of mountain, great wind, 'You are a free man.'"

48. **my friend, the doctor** → Definition: "DR. SILKWORTH'S VALIDATION - When Bill described spiritual experience: 'Something happened I don't understand. But hang on to it.' Medical validation became AA's cornerstone."

49. **my friend had emphasized** → Definition: "EBBY THACHER - Emphasized spiritual solution during kitchen visit (Nov 1934). Message prepared Bill for spiritual experience 3 weeks later. 'Choose your own conception of God.'"

50. **one western city** → Definition: "CLEVELAND, OHIO - 30 miles north of Akron. Started 1937. Third major AA group after Akron & NYC. Innovations: sponsorship, beginners meetings. By 1939: 15+ members."

51. **one poor chap committed suicide** → Definition: "BILL C. - Lawyer/bridge player. Lived with Bill & Lois (182 Clinton St) nearly one year, 1936. Relapsed, stole ~$700, committed suicide. Reminder: program doesn't work for everyone."

### CONTINUING WITH ADDITIONAL CHAPTERS...
[Continue with all terms through Chapter 11 and personal stories]

---

## ERROR PREVENTION CHECKLIST

### ❌ CRITICAL MISTAKES (NEVER DO THESE)
- [ ] Condense Big Book text (e.g., remove words or paragraphs)
- [ ] Rewrite text for clarity or flow
- [ ] Process terms that exist in dictionary
- [ ] Add underlines to glossary terms
- [ ] Wrap surrounding text with term
- [ ] Modify popup definitions from keyTermsData
- [ ] Change page breaks or paragraph structure
- [ ] Wrap partial words or fragments
- [ ] Combine multiple definitions
- [ ] Skip occurrences (wrap all instances)
- [ ] Use different colors (must be #9333EA)
- [ ] Modify highlights or segments
- [ ] Remove or reorder paragraphs

### ✅ SUCCESS INDICATORS
- [ ] Original Big Book text 100% intact
- [ ] Only wrapped terms are colored purple
- [ ] Dictionary conflicts skipped completely
- [ ] All page numbers preserved
- [ ] All paragraph structure preserved
- [ ] Definitions match keyTermsData exactly
- [ ] No underlines on any terms
- [ ] Purple color is #9333EA consistently
- [ ] Mobile responsive on all sizes
- [ ] Each term occurrence wrapped separately

---

## FINAL ENFORCEMENT RULES

**Rule Override:** If ANY of the "Critical Mistakes" section occurs, STOP and revert the file immediately.

**Quality Gate:** Do NOT proceed to next chapter until current chapter passes all success indicators.

**Conflict Resolution:** When in doubt, SKIP the term. Better to miss a term than to break text.

**Verification:** Before marking file complete, manually verify 5 random wrapped terms in preview.

---

## COMMAND FOR AI EXECUTION

```
"Apply purple glossary term highlighting to AA Big Book using ONLY these rules:

BEFORE EVERY TERM:
1. Check if term exists in dictionary1930sTermsData
2. IF YES → SKIP (leave as normal text)
3. IF NO → Apply purple wrapper

FOR EVERY WRAPPED TERM:
1. Match exact term only (word boundaries)
2. Wrap ONLY the term itself, nothing adjacent
3. Use definition from keyTermsData exactly as-is
4. Apply color #9333EA bold, NO underline
5. DO NOT modify any other text
6. Preserve all page breaks and structure

VERIFY AFTER:
- Text unchanged except wrapper
- Purple color applied correctly
- No underlines visible
- Definitions match keyTermsData
- Mobile responsive (iPhone SE 375px, iPhone 12 430px)
- All page numbers intact
- All paragraph structure preserved"
```

---

## APPROVAL CHECKLIST

- [x] Dictionary conflict system implemented
- [x] All glossary definitions mobile-optimized
- [x] Purple color specification exact (#9333EA)
- [x] Wrapper component prepared
- [x] QA checklist comprehensive
- [x] Error prevention explicit
- [x] Ready for 100% first-time success