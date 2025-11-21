// Complete Big Book Content - populated from the full text
import { prefaceContent } from "./content/prefaceContent";
import { forewordFirstContent } from "./content/forewordFirstContent";
import { forewordSecondContent } from "./content/forewordSecondContent";
import { doctorsOpinionContent } from "./content/doctorsOpinionContent";
import { billsStoryContent } from "./content/billsStoryContent";
import { thereIsSolutionContent } from "./content/thereIsSolutionContent";
import { moreAboutAlcoholismContent } from "./content/moreAboutAlcoholismContent";
import { weAgnosticsContent } from "./content/weAgnosticsContent";
import { howItWorksContent } from "./content/howItWorksContent";
import { intoActionContent } from "./content/intoActionContent";
import { toEmployersContent } from "./content/toEmployersContent";
import { visionForYouContent } from "./content/visionForYouContent";
import { appendicesContent } from "./content/appendicesContent";

export const CHAPTER_CONTENT = {
  "preface": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'This is the fourth edition of the book "Alcoholics Anonymous." The first edition appeared in April 1939, and in the following sixteen years, more than 300,000 copies went into circulation. The second edition, published in 1955, reached a total of more than 1,150,500 copies. The third edition, which came off press in 1976, achieved a circulation of approximately 19,550,000 in all formats.' },
      { text: 'Because this book has become the basic text for our Society and has helped such large numbers of alcoholic men and women to recovery, there exists strong sentiment against any radical changes being made in it. Therefore, the first portion of this volume, describing the A.A. recovery program, has been left largely untouched in the course of revisions made for the second, third, and fourth editions.' },
      { text: 'The second edition added the appendices, the Twelve Traditions, and the directions for getting in touch with A.A. The chief change was in the section of personal stories, which was expanded to reflect the Fellowship\'s growth.', highlight: 'pink' },
      { text: 'In the third edition, Part I was left unchanged. Nine of the stories in Part II were carried over from the second edition; eight new stories were added. In Part III, eight stories were retained; five new ones were added.' },
      { 
        segments: [
          { text: 'This fourth edition includes the Twelve Concepts for World Service and revises the three sections of ' },
          { text: 'personal stories', highlight: 'pink' },
          { text: '. New stories have been added across all parts to reflect current membership.' }
        ]
      },
      { 
        segments: [
          { text: 'All changes made over the years in the Big Book have had the same purpose: to represent the current membership of Alcoholics Anonymous more accurately, and thereby to reach more alcoholics. If you have a drinking problem, we hope that you may pause in reading one of the forty-two ' },
          { text: 'personal stories', highlight: 'pink' },
          { text: ' and think: "Yes, that happened to me"; or, more important, "Yes, I\'ve felt like that"; or, most important, "Yes, I believe this program can work for me too."' }
        ]
      }
    ]
  },

  "foreword-first": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'FOREWORD TO FIRST EDITION. This is the Foreword as it appeared in the first printing of the first edition in 1939.' },
      { 
        segments: [
          { text: 'We, of Alcoholics Anonymous, are more than one hundred men and women who have ' },
          { text: 'recovered', highlight: 'pink' },
          { text: ' from a seemingly hopeless state of mind and body. To show other alcoholics precisely how we have ' },
          { text: 'recovered', highlight: 'pink' },
          { text: ' is the main ' },
          { text: 'purpose of this book', highlight: 'pink' },
          { text: '.' }
        ]
      },
      { text: 'For them, we hope these pages will prove so convincing that no further authentication will be necessary. We think this account of our experiences will help everyone to better understand the alcoholic.' },
      { text: 'It is important that we remain anonymous because we are too few at present to handle the overwhelming number of personal appeals which may result from this publication.' },
      { text: 'When writing or speaking publicly about alcoholism, we urge each of our Fellowship to omit his personal name, designating himself instead as a member of Alcoholics Anonymous.' },
      { text: 'We are not an organization in the conventional sense of the word. There are no fees or dues whatsoever. The only requirement for membership is an honest desire to stop drinking.' },
      { text: 'We shall be interested to hear from those who are getting results from this book, particularly from those who have commenced work with other alcoholics.' }
    ]
  },

  "foreword-second": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'FOREWORD TO SECOND EDITION. Figures given in this foreword describe the Fellowship as it was in 1955.' },
      { text: 'Since the original Foreword to this book was written in 1939, a wholesale miracle has taken place. Our earliest printing voiced the hope that every alcoholic who journeys will find the Fellowship of Alcoholics Anonymous at his destination.' },
      { 
        segments: [
          { text: 'Sixteen years have elapsed between our first printing of this book and the presentation in 1955 of our second edition. In that brief space, Alcoholics Anonymous has mushroomed into nearly 6,000 groups whose membership is far above 150,000 ' },
          { text: 'recovered', highlight: 'pink' },
          { text: ' alcoholics.' }
        ]
      },
      { text: 'The spark that was to flare into the first A.A. group was struck at Akron, Ohio, in June 1935, during a talk between a New York stockbroker and an Akron physician.' },
      { text: 'With the appearance of the new book a great deal began to happen. Dr. Harry Emerson Fosdick reviewed it with approval. By the end of 1939 it was estimated that 800 alcoholics were on their way to recovery.' },
      { text: 'In the spring of 1940, John D. Rockefeller, Jr. gave a dinner for many of his friends to which he invited A.A. members to tell their stories. By the close of 1941, A.A. numbered 8,000 members. A.A. had become a national institution.' },
      { text: 'While the internal difficulties of our adolescent period were being ironed out, public acceptance of A.A. grew by leaps and bounds. For this there were two principal reasons: the large numbers of recoveries, and reunited homes. These made their impressions everywhere. Of alcoholics who came to A.A. and really tried, 50% got sober at once and remained that way; 25% sobered up after some relapses, and among the remainder, those who stayed on with A.A. showed improvement.' }
    ]
  },

  "foreword-third": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'By March 1976, when this edition went to the printer, the total worldwide membership of Alcoholics Anonymous was conservatively estimated at more than 1,000,000, with almost 28,000 groups meeting in over 90 countries.' },
      { text: 'Surveys of groups in the United States and Canada indicate that A.A. is reaching out to more and more people. Women now make up more than one-fourth of the membership.' },
      { text: 'The basic principles of the A.A. program hold good for individuals with many different lifestyles, just as the program has brought recovery to those of many different nationalities.' },
      { text: 'In spite of the great increase in the size and the span of this Fellowship, at its core it remains simple and personal. Each day, somewhere in the world, recovery begins when one alcoholic talks with another alcoholic, sharing experience, strength, and hope.' }
    ]
  },

  "foreword-fourth": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'This fourth edition came off press in November 2001, at the start of a new millennium. Since the third edition was published in 1976, worldwide membership of A.A. has just about doubled, to an estimated two million or more.' },
      { text: 'Literature has played a major role in A.A. growth, and a striking phenomenon of the past quarter-century has been the explosion of translations of our basic literature into many languages and dialects.' },
      { text: 'As the message of recovery has reached larger numbers of people, it has also touched the lives of a vastly greater variety of suffering alcoholics. The stories represent a membership whose characteristics have widened to encompass virtually anyone who suffers from alcoholism.' }
    ]
  },

  "doctors-opinion": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'We of Alcoholics Anonymous believe that the reader will be interested in the medical estimate of the plan of recovery described in this book.' },
      { text: 'A well-known doctor, chief physician at a nationally prominent hospital specializing in alcoholic and drug addiction, gave Alcoholics Anonymous this letter:' },
      { text: 'The doctor wrote: I have specialized in the treatment of alcoholism for many years. In late 1934 I attended a patient who, though he had been a competent businessman of good earning capacity, was an alcoholic of a type I had come to regard as hopeless.' },
      { text: 'In the course of his third treatment he acquired certain ideas concerning a possible means of recovery. As part of his rehabilitation he commenced to present his conceptions to other alcoholics. This man and over one hundred others appear to have recovered.' },
      { text: 'I personally know scores of cases who were of the type with whom other methods had failed completely. These facts appear to be of extreme medical importance. These men may well have a remedy for thousands of such situations.' },
      { text: 'The physician who gave us this letter confirms what we who have suffered alcoholic torture must believe—that the body of the alcoholic is quite as abnormal as his mind.' },
      { text: 'The doctor\'s theory that we have an allergy to alcohol interests us. As ex-problem drinkers, we can say that his explanation makes good sense.' },
      { text: 'Though we work out our solution on the spiritual as well as an altruistic plane, we favor hospitalization for the alcoholic who is very jittery or befogged.' }
    ]
  },

  "bills-story": billsStoryContent,
  "there-is-solution": thereIsSolutionContent,
  "more-about-alcoholism": moreAboutAlcoholismContent,
  "we-agnostics": weAgnosticsContent,
  "how-it-works": howItWorksContent,
  "into-action": intoActionContent,

  "working-with-others": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'Practical experience shows that nothing will so much insure immunity from drinking as intensive work with other alcoholics. It works when other activities fail.' },
      { text: 'We landed in England. I visited Winchester Cathedral. Much moved, I wandered outside. My attention was caught by a doggerel on an old tombstone. Ominous warning—which I failed to heed.' },
      { text: 'Twenty-two, and a veteran of foreign wars, I went home at last. I fancied myself a leader, for had not the men of my battery given me a special token of appreciation?' },
      { text: 'I took a night law course, and obtained employment as investigator for a surety company. The drive for success was on. My work took me about Wall Street and little by little I became interested in the market.' },
      { text: 'By the time I had completed the course, I knew the law was not for me. The inviting maelstrom of Wall Street had me in its grip.' },
      { text: 'For the next few years fortune threw money and applause my way. I had arrived. Drink was taking an important and exhilarating part in my life.' },
      { text: 'In 1929 I contracted golf fever. Liquor caught up with me much faster. I began to be jittery in the morning. Golf permitted drinking every day and every night.' },
      { text: 'Abruptly in October 1929 hell broke loose on the New York stock exchange. I was staring at an inch of the tape. I was finished and so were many friends. I went back to the bar.' },
      { text: 'My friends had dropped several million—so what? Tomorrow was another day. As I drank, the old fierce determination to win came back. But drinking caught up with me again. This time we stayed broke.' },
      { text: 'We went to live with my wife\'s parents. I found a job; then lost it as the result of a brawl with a taxi driver. My wife began to work in a department store, coming home exhausted to find me drunk.' },
      { text: 'Liquor ceased to be a luxury; it became a necessity. Bathtub gin, two bottles a day, and often three, got to be routine. I began to waken very early in the morning shaking violently.' },
      { text: 'Then I got a promising business opportunity. Then I went on a prodigious bender, and that chance vanished. I woke up. This had to be stopped. I saw I could not take so much as one drink. I was through forever.' },
      { text: 'Shortly afterward I came home drunk. There had been no fight. Where had been my high resolve? I simply didn\'t know. Someone had pushed a drink my way, and I had taken it. Was I crazy?' },
      { text: 'The remorse, horror and hopelessness of the next morning are unforgettable. The courage to do battle was not there. My brain raced uncontrollably. The market had gone to hell again. Well, so had I. The market would recover, but I wouldn\'t.' },
      { text: 'My brother-in-law is a physician, and through his kindness and that of my mother I was placed in a nationally-known hospital for the mental and physical rehabilitation of alcoholics. I met a kind doctor who explained that though certainly selfish and foolish, I had been seriously ill, bodily and mentally.' },
      { text: 'For three or four months the goose hung high. I went to town regularly and even made a little money. Surely this was the answer—self-knowledge. But it was not, for the frightful day came when I drank once more.' },
      { text: 'Trembling, I stepped from the hospital a broken man. Fear sobered me for a bit. Then came the insidious insanity of that first drink. How dark it is before the dawn! In reality that was the beginning of my last debauch. I was soon to be catapulted into what I like to call the fourth dimension of existence.' },
      { text: 'Near the end of that bleak November, I sat drinking in my kitchen. With a certain satisfaction I reflected there was enough gin concealed about the house to carry me through that night and the next day.' },
      { text: 'My musing was interrupted by the telephone. The cheery voice of an old school friend asked if he might come over. He was sober. Rumor had it that he had been committed for alcoholic insanity.' },
      { text: 'The door opened and he stood there, fresh-skinned and glowing. There was something about his eyes. He was inexplicably different. I pushed a drink across the table. He refused it. Simply, but smilingly, he said he had got religion.' },
      { text: 'I was aghast. So that was it—last summer an alcoholic crackpot; now, I suspected, a little cracked about religion. But he did no ranting. In a matter of fact way he told how two men had appeared in court, persuading the judge to suspend his commitment. That was two months ago and the result was self-evident. It worked!' },
      { text: 'He had come to pass his experience along to me—if I cared to have it. I was shocked, but interested. Certainly I was interested. I had to be, for I was hopeless. He talked for hours.' },
      { text: 'I had always believed in a Power greater than myself. I had often pondered these things. I was not an atheist.' },
      { text: 'But my friend sat before me, and he made the point-blank declaration that God had done for him what he could not do for himself. His human will had failed. Doctors had pronounced him incurable. Then he had, in effect, been raised from the dead, suddenly taken from the scrap heap to a level of life better than the best he had ever known!' },
      { text: 'My friend suggested what then seemed a novel idea. He said, why don\'t you choose your own conception of God? That statement hit me hard. It melted the icy intellectual mountain in whose shadow I had lived and shivered many years. I stood in the sunlight at last.' },
      { text: 'At the hospital I was separated from alcohol for the last time. There I humbly offered myself to God, as I then understood Him, to do with me as He would. I placed myself unreservedly under His care and direction.' },
      { text: 'My schoolmate visited me, and I fully acquainted him with my problems and deficiencies. We made a list of people I had hurt or toward whom I felt resentment. I expressed my entire willingness to approach these individuals, admitting my wrong.' },
      { text: 'I was to test my thinking by the new God-consciousness within. I was to sit quietly when in doubt, asking only for direction and strength to meet my problems as He would have me.' },
      { text: 'Simple, but not easy; a price had to be paid. It meant destruction of self-centeredness. These were revolutionary and drastic proposals, but the moment I fully accepted them, the effect was electric. There was a sense of victory, followed by such a peace and serenity as I had never known.' },
      { text: 'While I lay in the hospital the thought came that there were thousands of hopeless alcoholics who might be glad to have what had been so freely given me. Perhaps I could help some of them. They in turn might work with others.' },
      { text: 'My wife and I abandoned ourselves with enthusiasm to the idea of helping other alcoholics to a solution of their problems. Many times I have gone to my old hospital in despair. On talking to a man there, I would be amazingly lifted up and set on my feet.' },
      { text: 'We commenced to make many fast friends and a fellowship has grown up among us of which it is a wonderful thing to feel a part. The joy of living we really have, even under pressure and difficulty.' },
      { text: 'An alcoholic in his cups is an unlovely creature. Our struggles with them are variously strenuous, comic, and tragic. But there is a vast amount of fun about it all. Most of us feel we need look no further for Utopia. We have it with us right here and now.' }
    ]
  },

  "there-is-solution": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: "We, of ALCOHOLICS ANONYMOUS, know thousands of men and women who were once just as hopeless as Bill. Nearly all have recovered. They have solved the drink problem." },
      { text: "We are average Americans. All sections of this country and many of its occupations are represented, as well as many political, economic, social, and religious backgrounds. We are people who normally would not mix. But there exists among us a fellowship, a friendliness, and an understanding which is indescribably wonderful." },
      { text: "The tremendous fact for every one of us is that we have discovered a common solution. We have a way out on which we can absolutely agree, and upon which we can join in brotherly and harmonious action. This is the great news this book carries to those who suffer from alcoholism." },
      { text: "An illness of this sort—and we have come to believe it an illness—involves those about us in a way no other human sickness can. If a person has cancer all are sorry for him and no one is angry or hurt. But not so with the alcoholic illness, for with it there goes annihilation of all the things worth while in life." },
      { text: "We hope this volume will inform and comfort those who are, or who may be affected. There are many. Highly competent psychiatrists who have dealt with us have found it sometimes impossible to persuade an alcoholic to discuss his situation without reserve. Strangely enough, wives, parents and intimate friends usually find us even more unapproachable than do the psychiatrist and the doctor." },
      { text: "But the ex-problem drinker who has found this solution, who is properly armed with facts about himself, can generally win the entire confidence of another alcoholic in a few hours. Until such an understanding is reached, little or nothing can be accomplished." },
      { text: "That the man who is making the approach has had the same difficulty, that he obviously knows what he is talking about, that his whole deportment shouts at the new prospect that he is a man with a real answer, that he has no attitude of Holier Than Thou, nothing whatever except the sincere desire to be helpful; that there are no fees to pay, no axes to grind, no people to please, no lectures to be endured—these are the conditions we have found most effective." },
      { text: 'You may already have asked yourself why it is that all of us became so very ill from drinking. Doubtless you are curious to discover how and why, in the face of expert opinion to the contrary, we have recovered from a hopeless condition of mind and body. If you are an alcoholic who wants to get over it, you may already be asking—"What do I have to do?"' },
      { text: 'How many times people have said to us: "I can take it or leave it alone. Why can\'t he?" "Why don\'t you drink like a gentleman or quit?" "That fellow can\'t handle his liquor." "Why don\'t you try beer and wine?" "His will power must be weak." "The doctor told him that if he ever drank again it would kill him, but there he is all lit up again."' },
      { text: "Moderate drinkers have little trouble in giving up liquor entirely if they have good reason for it. They can take it or leave it alone. Then we have a certain type of hard drinker. He may have the habit badly enough to gradually impair him physically and mentally. If a sufficiently strong reason becomes operative, this man can also stop or moderate, although he may find it difficult and troublesome." },
      { text: "But what about the real alcoholic? He may start off as a moderate drinker; he may or may not become a continuous hard drinker; but at some stage of his drinking career he begins to lose all control of his liquor consumption, once he starts to drink." },
      { text: "Here is the fellow who has been puzzling you, especially in his lack of control. He does absurd, incredible, tragic things while drinking. He is a real Dr. Jekyll and Mr. Hyde. He is seldom mildly intoxicated. He is always more or less insanely drunk." },
      { text: "Why does he behave like this? If hundreds of experiences have shown him that one drink means another debacle with all its attendant suffering and humiliation, why is it he takes that one drink? Why can't he stay on the water wagon? What has become of the common sense and will power that he still sometimes displays with respect to other matters?" },
      { text: "We know that while the alcoholic keeps away from drink, as he may do for months or years, he reacts much like other men. We are equally positive that once he takes any alcohol whatever into his system, something happens, both in the bodily and mental sense, which makes it virtually impossible for him to stop." },
      { text: "Therefore, the main problem of the alcoholic centers in his mind, rather than in his body. If you ask him why he started on that last bender, the chances are he will offer you any one of a hundred alibis. Sometimes these excuses have a certain plausibility, but none of them really makes sense in the light of the havoc an alcoholic's drinking bout creates." },
      { text: "Once in a while he may tell the truth. And the truth, strange to say, is usually that he has no more idea why he took that first drink than you have. Once this malady has a real hold, they are a baffled lot. There is the obsession that somehow, someday, they will beat the game." },
      { text: "The tragic truth is that if the man be a real alcoholic, the happy day may not arrive. He has lost control. At a certain point in the drinking of every alcoholic, he passes into a state where the most powerful desire to stop drinking is of absolutely no avail. This tragic situation has already arrived in practically every case long before it is suspected." },
      { text: "The fact is that most alcoholics, for reasons yet obscure, have lost the power of choice in drink. Our so-called will power becomes practically nonexistent. We are unable, at certain times, to bring into our consciousness with sufficient force the memory of the suffering and humiliation of even a week or a month ago. We are without defense against the first drink." },
      { text: "When this sort of thinking is fully established in an individual with alcoholic tendencies, he has probably placed himself beyond human aid, and unless locked up, may die or go permanently insane. These stark and ugly facts have been confirmed by legions of alcoholics throughout history." },
      { text: "There is a solution. Almost none of us liked the self-searching, the leveling of our pride, the confession of shortcomings which the process requires for its successful consummation. But we saw that it really worked in others, and we had come to believe in the hopelessness and futility of life as we had been living it." },
      { text: "The great fact is just this, and nothing less: That we have had deep and effective spiritual experiences which have revolutionized our whole attitude toward life, toward our fellows and toward God's universe. The central fact of our lives today is the absolute certainty that our Creator has entered into our hearts and lives in a way which is indeed miraculous." },
      { text: "If you are as seriously alcoholic as we were, we believe there is no middle-of-the-road solution. We were in a position where life was becoming impossible, and if we had passed into the region from which there is no return through human aid, we had but two alternatives: One was to go on to the bitter end, blotting out the consciousness of our intolerable situation as best we could; and the other, to accept spiritual help." }
    ]
  },

  "more-about-alcoholism": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: "Most of us have been unwilling to admit we were real alcoholics. No person likes to think he is bodily and mentally different from his fellows. Therefore, it is not surprising that our drinking careers have been characterized by countless vain attempts to prove we could drink like other people." },
      { text: "The idea that somehow, someday he will control and enjoy his drinking is the great obsession of every abnormal drinker. The persistence of this illusion is astonishing. Many pursue it into the gates of insanity or death." },
      { text: "We learned that we had to fully concede to our innermost selves that we were alcoholics. This is the first step in recovery. The delusion that we are like other people, or presently may be, has to be smashed." },
      { text: "We alcoholics are men and women who have lost the ability to control our drinking. We know that no real alcoholic ever recovers control. All of us felt at times that we were regaining control, but such intervals—usually brief—were inevitably followed by still less control, which led in time to pitiful and incomprehensible demoralization." },
      { text: "We are convinced to a man that alcoholics of our type are in the grip of a progressive illness. Over any considerable period we get worse, never better. We are like men who have lost their legs; they never grow new ones. Neither does there appear to be any kind of treatment which will make alcoholics of our kind like other men." },
      { text: "Despite all we can say, many who are real alcoholics are not going to believe they are in that class. By every form of self-deception and experimentation, they will try to prove themselves exceptions to the rule, therefore nonalcoholic. If anyone who is showing inability to control his drinking can do the right-about-face and drink like a gentleman, our hats are off to him." },
      { text: "We do not like to pronounce any individual as alcoholic, but you can quickly diagnose yourself. Step over to the nearest barroom and try some controlled drinking. Try to drink and stop abruptly. Try it more than once. It will not take long for you to decide, if you are honest with yourself about it." },
      { text: "About one year prior to this experience a man was brought in to be treated for chronic alcoholism. He had but partially recovered from a gastric hemorrhage and seemed to be a case of pathological mental deterioration. He had lost everything worthwhile in life and was only living, one might say, to drink. He frankly admitted and believed that for him there was no hope." },
      { text: "Following the elimination of alcohol, there was found to be no permanent brain injury. He accepted the plan outlined in this book. One year later he called to see me, and I experienced a very strange sensation. I knew the man by name, and partly recognized his features, but there all resemblance ended. From a trembling, despairing, nervous wreck, had emerged a man brimming over with self-reliance and contentment." },
      { text: "When I need a mental uplift, I often think of another case brought in by a physician prominent in New York. The patient had made his own diagnosis, and deciding his situation hopeless, had hidden in a deserted barn determined to die. He was rescued by a searching party, and, in desperate condition, brought to me." },
      { text: 'However, he did become "sold" on the ideas contained in this book. He has not had a drink for a great many years. I see him now and then and he is as fine a specimen of manhood as one could wish to meet.' },
      { text: "For those who are unable to drink moderately the question is how to stop altogether. We are assuming, of course, that the reader desires to stop. Whether such a person can quit upon a nonspiritual basis depends upon the extent to which he has already lost the power to choose whether he will drink or not." },
      { text: "So we shall describe some of the mental states that precede a relapse into drinking, for obviously this is the crux of the problem. What sort of thinking dominates an alcoholic who repeats time after time the desperate experiment of the first drink?" },
      { text: "Our first example is a friend we shall call Jim. This man has a charming wife and family. He inherited a lucrative automobile agency. He is a good salesman. Everybody likes him. He is an intelligent man, normal so far as we can see, except for a nervous disposition. He did no drinking until he was thirty-five." },
      { text: '"I came to work on Tuesday morning. I remember I felt irritated that I had to be a salesman for a concern I once owned. Then I decided to drive into the country and see one of my prospects for a car. On the way I felt hungry so I stopped at a roadside place where they have a bar. I had no intention of drinking. I just thought I would get a sandwich."' },
      { text: '"Suddenly the thought crossed my mind that if I were to put an ounce of whiskey in my milk it couldn\'t hurt me on a full stomach. I ordered a whiskey and poured it into the milk. I vaguely sensed I was not being any too smart, but felt reassured as I was taking the whiskey on a full stomach."' },
      { text: "Thus started one more journey to the asylum for Jim. Here was the threat of commitment, the loss of family and position, to say nothing of that intense mental and physical suffering which drinking always caused him. He had much knowledge about himself as an alcoholic. Yet all reasons for not drinking were easily pushed aside in favor of the foolish idea that he could take whiskey if only he mixed it with milk!" },
      { text: "Whatever the precise definition of the word may be, we call this plain insanity. How can such a lack of proportion, of the ability to think straight, be called anything else? You may think this an extreme case. To us it is not far-fetched, for this kind of thinking has been characteristic of every single one of us." },
      { text: "Fred is partner in a well known accounting firm. His income is good, he has a fine home, is happily married and the father of promising children of college age. He has so attractive a personality that he makes friends with everyone. If ever there was a successful business man, it is Fred. To all appearance he is a stable, well balanced individual. Yet, he is alcoholic." },
      { text: '"I was much impressed with what you fellows said about alcoholism, and I frankly did not believe it would be possible for me to drink again. I reasoned I was not so far advanced as most of you fellows, that I had been usually successful in licking my other personal problems, and that I would therefore be successful where you men failed."' },
      { text: '"One day I went to Washington to present some accounting evidence to a government bureau. Physically, I felt fine. Neither did I have any pressing problems or worries. My business came off well, I was pleased and knew my partners would be too. It was the end of a perfect day, not a cloud on the horizon."' },
      { text: '"As I crossed the threshold of the dining room, the thought came to mind that it would be nice to have a couple of cocktails with dinner. That was all. Nothing more. I ordered a cocktail and my meal. Then I ordered another cocktail. After dinner I decided to take a walk. When I returned to the hotel it struck me a highball would be fine before going to bed, so I stepped into the bar and had one."' },
      { text: '"As soon as I regained my ability to think, I went carefully over that evening in Washington. Not only had I been off guard, I had made no fight whatever against the first drink. This time I had not thought of the consequences at all. I had commenced to drink as carelessly as though the cocktails were ginger ale."' },
      { text: '"Two of the members of Alcoholics Anonymous came to see me. They grinned, which I didn\'t like so much, and then asked me if I thought myself alcoholic and if I were really licked this time. I had to concede both propositions. They cited cases out of their own experience by the dozen. This process snuffed out the last flicker of conviction that I could do the job myself."' },
      { text: '"Then they outlined the spiritual answer and program of action which a hundred of them had followed successfully. The moment I made up my mind to go through with the process, I had the curious feeling that my alcoholic condition was relieved, as in fact it proved to be."' },
      { text: "Once more: The alcoholic at certain times has no effective mental defense against the first drink. Except in a few rare cases, neither he nor any other human being can provide such a defense. His defense must come from a Higher Power." }
    ]
  },

  "we-agnostics": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: "In the preceding chapters you have learned something of alcoholism. We hope we have made clear the distinction between the alcoholic and the non-alcoholic. If, when you honestly want to, you find you cannot quit entirely, or if when drinking, you have little control over the amount you take, you are probably alcoholic." },
      { text: "If that be the case, you may be suffering from an illness which only a spiritual experience will conquer. To one who feels he is an atheist or agnostic such an experience seems impossible, but to continue as he is means disaster, especially if he is an alcoholic of the hopeless variety." },
      { text: "To be doomed to an alcoholic death or to live on a spiritual basis are not always easy alternatives to face. But it isn't so difficult. About half our original fellowship were of exactly that type. At first some of us tried to avoid the issue, hoping against hope we were not true alcoholics. But after a while we had to face the fact that we must find a spiritual basis of life—or else." },
      { text: "If a mere code of morals or a better philosophy of life were sufficient to overcome alcoholism, many of us would have recovered long ago. But we found that such codes and philosophies did not save us, no matter how much we tried. Our human resources, as marshalled by the will, were not sufficient; they failed utterly.", highlight: "yellow" },
      { text: "Lack of power, that was our dilemma. We had to find a power by which we could live, and it had to be a Power greater than ourselves. Obviously. But where and how were we to find this Power? Well, that's exactly what this book is about. Its main object is to enable you to find a Power greater than yourself which will solve your problem.", highlight: "blue" },
      { text: "Here difficulty arises with agnostics. Many times we talk to a new man and watch his hope rise as we discuss his alcoholic problems and explain our fellowship. But his face falls when we speak of spiritual matters, especially when we mention God, for we have re-opened a subject which our man thought he had neatly evaded or entirely ignored." },
      { text: 'My friend suggested what then seemed a novel idea. He said, "Why don\'t you choose your own conception of God?" That statement hit me hard. It melted the icy intellectual mountain in whose shadow I had lived and shivered many years. I stood in the sunlight at last.' },
      { text: "Much to our relief, we discovered we did not need to consider another's conception of God. Our own conception, however inadequate, was sufficient to make the approach and to effect a contact with Him. As soon as we admitted the possible existence of a Creative Intelligence, a Spirit of the Universe underlying the totality of things, we began to be possessed of a new sense of power and direction." },
      { text: "When, therefore, we speak to you of God, we mean your own conception of God. This applies, too, to other spiritual expressions which you find in this book. Do not let any prejudice you may have against spiritual terms deter you from honestly asking yourself what they mean to you." },
      { text: 'We needed to ask ourselves but one short question. "Do I now believe, or am I even willing to believe, that there is a Power greater than myself?" As soon as a man can say that he does believe, or is willing to believe, we emphatically assure him that he is on his way.' },
      { text: "Besides a seeming inability to accept much on faith, we often found ourselves handicapped by obstinacy, sensitiveness, and unreasoning prejudice. Many of us have been so touchy that even casual reference to spiritual things made us bristle with antagonism. Faced with alcoholic destruction, we soon became as open minded on spiritual matters as we had tried to be on other questions." },
      { text: "The practical individual of today is a stickler for facts and results. Nevertheless, the twentieth century readily accepts theories of all kinds, provided they are firmly grounded in fact. We have numerous theories, for example, about electricity. Everybody believes them without a murmur of doubt. Why this ready acceptance? Simply because it is impossible to explain what we see, feel, direct, and use, without a reasonable assumption as a starting point." },
      { text: "When the perfectly logical assumption is suggested that underneath the material world and life as we see it, there is an All Powerful, Guiding, Creative Intelligence, right there our perverse streak comes to the surface and we laboriously set out to convince ourselves it isn't so." },
      { text: "Instead of regarding ourselves as intelligent agents, spearheads of God's ever advancing Creation, we agnostics and atheists chose to believe that our human intelligence was the last word, the alpha and the omega, the beginning and end of all. Rather vain of us, wasn't it?" },
      { text: "We, who have traveled this dubious path, beg you to lay aside prejudice, even against organized religion. We have learned that whatever the human frailties of various faiths may be, those faiths have given purpose and direction to millions. People of faith have a logical idea of what life is all about." },
      { text: "On one proposition, however, these men and women are strikingly agreed. Every one of them has gained access to, and believes in, a Power greater than himself. This Power has in each case accomplished the miraculous, the humanly impossible." },
      { text: "Here are thousands of men and women, worldly indeed. They flatly declare that since they have come to believe in a Power greater than themselves, to take a certain attitude toward that Power, and to do certain simple things, there has been a revolutionary change in their way of living and thinking." },
      { text: "When we saw others solve their problems by a simple reliance upon the Spirit of the Universe, we had to stop doubting the power of God. Our ideas did not work. But the God idea did." },
      { text: "Logic is great stuff. We liked it. We still like it. It is not by chance we were given the power to reason, to examine the evidence of our senses, and to draw conclusions. That is one of man's magnificent attributes." },
      { text: "When we became alcoholics, crushed by a self-imposed crisis we could not postpone or evade, we had to fearlessly face the proposition that either God is everything or else He is nothing. God either is, or He isn't. What was our choice to be?" },
      { text: "Imagine life without faith! Were nothing left but pure reason, it wouldn't be life. But we believed in life—of course we did. We could not prove life in the sense that you can prove a straight line is the shortest distance between two points, yet, there it was." },
      { text: "Actually we were fooling ourselves, for deep down in every man, woman, and child, is the fundamental idea of God. It may be obscured by calamity, by pomp, by worship of other things, but in some form or other it is there. For faith in a Power greater than ourselves, and miraculous demonstrations of that power in human lives, are facts as old as man himself." },
      { text: "We finally saw that faith in some kind of God was a part of our make-up, just as much as the feeling we have for a friend. Sometimes we had to search fearlessly, but He was there. He was as much a fact as we were. We found the Great Reality deep down within us. In the last analysis it is only there that He may be found." },
      { text: 'One night, when confined in a hospital, he was approached by an alcoholic who had known a spiritual experience. Our friend\'s gorge rose as he bitterly cried out: "If there is a God, He certainly hasn\'t done anything for me!" But later, alone in his room, he asked himself this question: "Is it possible that all the religious people I have known are wrong?"' },
      { text: 'Then, like a thunderbolt, a great thought came. It crowded out all else: "Who are you to say there is no God?" This man recounts that he tumbled out of bed to his knees. In a few seconds he was overwhelmed by a conviction of the Presence of God. It poured over and through him with the certainty and majesty of a great tide at flood.' },
      { text: "Thus was our friend's cornerstone fixed in place. No later vicissitude has shaken it. His alcoholic problem was taken away. That very night, years ago, it disappeared. Save for a few brief moments of temptation the thought of drink has never returned; and at such times a great revulsion has risen up in him. Seemingly he could not drink even if he would. God had restored his sanity." },
      { text: "What is this but a miracle of healing? Yet its elements are simple. Circumstances made him willing to believe. He humbly offered himself to his Maker—then he knew. Even so has God restored us all to our right minds. To this man, the revelation was sudden. Some of us grow into it more slowly. But He has come to all who have honestly sought Him. When we drew near to Him He disclosed Himself to us!" }
    ]
  },

  "how-it-works": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'Rarely have we seen a person fail who has thoroughly followed our path. Those who do not recover are people who cannot or will not completely give themselves to this simple program, usually men and women who are constitutionally incapable of being honest with themselves. There are such unfortunates. They are not at fault; they seem to have been born that way.' },
      { text: 'Our stories disclose in a general way what we used to be like, what happened, and what we are like now. If you have decided you want what we have and are willing to go to any length to get it—then you are ready to take certain steps.' },
      { text: 'Remember that we deal with alcohol—cunning, baffling, powerful! Without help it is too much for us. But there is One who has all power—that One is God. May you find Him now!' },
      { text: 'Half measures availed us nothing. We stood at the turning point. We asked His protection and care with complete abandon.' },
      { text: 'Here are the steps we took, which are suggested as a program of recovery:' },
      { text: '1. We admitted we were powerless over alcohol—that our lives had become unmanageable.\n2. Came to believe that a Power greater than ourselves could restore us to sanity.\n3. Made a decision to turn our will and our lives over to the care of God as we understood Him.\n4. Made a searching and fearless moral inventory of ourselves.\n5. Admitted to God, to ourselves, and to another human being the exact nature of our wrongs.\n6. Were entirely ready to have God remove all these defects of character.\n7. Humbly asked Him to remove our shortcomings.\n8. Made a list of all persons we had harmed, and became willing to make amends to them all.\n9. Made direct amends to such people wherever possible, except when to do so would injure them or others.\n10. Continued to take personal inventory and when we were wrong promptly admitted it.\n11. Sought through prayer and meditation to improve our conscious contact with God as we understood Him, praying only for knowledge of His will for us and the power to carry that out.\n12. Having had a spiritual awakening as the result of these steps, we tried to carry this message to alcoholics, and to practice these principles in all our affairs.' },
      { text: 'Being convinced, we were at Step Three, which is that we decided to turn our will and our life over to God as we understood Him. The first requirement is that we be convinced that any life run on self-will can hardly be a success.' },
      { text: 'Selfishness—self-centeredness! That, we think, is the root of our troubles. Driven by a hundred forms of fear, self-delusion, self-seeking, and self-pity, we step on the toes of our fellows and they retaliate.' },
      { text: 'Many of us said to our Maker, as we understood Him: "God, I offer myself to Thee—to build with me and to do with me as Thou wilt. Relieve me of the bondage of self, that I may better do Thy will. Take away my difficulties, that victory over them may bear witness to those I would help of Thy Power, Thy Love, and Thy Way of life. May I do Thy will always!"' },
      { text: 'Resentment is the "number one" offender. It destroys more alcoholics than anything else. From it stem all forms of spiritual disease, for we have been not only mentally and physically ill, we have been spiritually sick.' },
      { text: 'In dealing with resentments, we set them on paper. We listed people, institutions or principles with whom we were angry. We asked ourselves why we were angry.' },
      { text: 'This was our course: We realized that the people who wronged us were perhaps spiritually sick. Though we did not like their symptoms and the way these disturbed us, they, like ourselves, were sick too.' }
    ]
  },

  "into-action": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'This brings us to the Fifth Step in the program of recovery. We admitted to God, to ourselves, and to another human being, the exact nature of our defects.' },
      { text: 'If we skip this vital step, we may not overcome drinking. Time after time newcomers have tried to keep to themselves certain facts about their lives. Trying to avoid this humbling experience, they have turned to easier methods. Almost invariably they got drunk.' },
      { text: 'We must be entirely honest with somebody if we expect to live long or happily in this world.' },
      { text: 'Once we have taken this step, withholding nothing, we are delighted. We can look the world in the eye. We can be alone at perfect peace and ease. Our fears fall from us. We begin to feel the nearness of our Creator.' },
      { text: 'If we are painstaking about this phase of our development, we will be amazed before we are half way through. We are going to know a new freedom and a new happiness. We will not regret the past nor wish to shut the door on it.' },
      { text: 'We will comprehend the word serenity and we will know peace. No matter how far down the scale we have gone, we will see how our experience can benefit others. That feeling of uselessness and self-pity will disappear.' },
      { text: 'We will lose interest in selfish things and gain interest in our fellows. Self-seeking will slip away. Our whole attitude and outlook upon life will change. Fear of people and of economic insecurity will leave us.' },
      { text: 'We will intuitively know how to handle situations which used to baffle us. We will suddenly realize that God is doing for us what we could not do for ourselves. Are these extravagant promises? We think not. They are being fulfilled among us—sometimes quickly, sometimes slowly.' },
      { text: 'Continue to watch for selfishness, dishonesty, resentment, and fear. When these crop up, we ask God at once to remove them. We discuss them with someone immediately and make amends quickly if we have harmed anyone.' },
      { text: 'Love and tolerance of others is our code. And we have ceased fighting anything or anyone—even alcohol.' },
      { text: 'We are not cured of alcoholism. What we really have is a daily reprieve contingent on the maintenance of our spiritual condition.' },
      { text: 'When we retire at night, we constructively review our day. Were we resentful, selfish, dishonest or afraid? Do we owe an apology? Have we kept something to ourselves which should be discussed with another person at once?' },
      { text: 'On awakening let us think about the twenty-four hours ahead. Before we begin, we ask God to direct our thinking, especially asking that it be divorced from self-pity, dishonest or self-seeking motives.' }
    ]
  },

  "working-with-others": {
    highlights: [
      { text: "CHAPTER 7", type: "sidebar" }
    ],
    paragraphs: [
      { text: 'Practical experience shows that nothing will so much insure immunity from drinking as intensive work with other alcoholics. It works when other activities fail.', highlight: 'blue' },
      { text: 'Life will take on new meaning. To watch people recover, to see them help others, to watch loneliness vanish, to see a fellowship grow up about you, to have a host of friends—this is an experience you must not miss.', highlight: 'blue' },
      { text: 'When you discover a prospect for Alcoholics Anonymous, find out all you can about him. If he does not want to stop drinking, don\'t waste time trying to persuade him.', highlight: 'yellow' },
      { text: 'See your man alone, if possible. At first engage in general conversation. After a while, turn the talk to some phase of drinking. Tell him enough about your drinking habits, symptoms, and experiences to encourage him to speak of himself.', highlight: 'yellow' },
      { text: 'If you are satisfied that he is a real alcoholic, begin to dwell on the hopeless feature of the malady. Show him, from your own experience, how the queer mental condition surrounding that first drink prevents normal functioning of the will power.', highlight: 'yellow' },
      { text: 'Outline the program of action, explaining how you made a self-appraisal, how you straightened out your past and why you are now endeavoring to be helpful to him. It is important for him to realize that your attempt to pass this on to him plays a vital part in your own recovery.', highlight: 'yellow' },
      { text: 'Never avoid these responsibilities, but be sure you are doing the right thing if you assume them. Helping others is the foundation stone of your recovery.', highlight: 'blue' },
      { text: 'Burn the idea into the consciousness of every man that he can get well regardless of anyone. The only condition is that he trust in God and clean house.', highlight: 'blue' }
    ]
  },

  "to-wives": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'With few exceptions, our book thus far has spoken of men. But what we have said applies quite as much to women. Our activities in behalf of women who drink are on the increase.' },
      { text: 'Try not to condemn your alcoholic husband no matter what he says or does. He is just another very sick, unreasonable person. Treat him, when you can, as though he had pneumonia.' },
      { text: 'The first principle of success is that you should never be angry. Even though your husband becomes unbearable and you have to leave him temporarily, you should, if you can, go without rancor.' },
      { text: 'Be determined that your husband\'s drinking is not going to spoil your relations with your children or your friends. They need your companionship and your help. It is possible to have a full and useful life, though your husband continues to drink.' },
      { text: 'We wives found that, like everybody else, we were afflicted with pride, self-pity, vanity and all the things which go to make up the self-centered person. Now we try to put spiritual principles to work in every department of our lives.' }
    ]
  },

  "family-afterward": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'Successful readjustment means the opposite of wrapping in cotton wool. All members of the family should meet upon the common ground of tolerance, understanding and love.' },
      { text: 'Cessation of drinking is but the first step away from a highly strained, abnormal condition. Let families realize, as they start their journey, that all will not be fair weather.' },
      { text: 'The alcoholic\'s past becomes the principal asset of the family and frequently it is almost the only one! This painful past may be of infinite value to other families still struggling with their problem.' },
      { text: 'We are sure God wants us to be happy, joyous, and free. We cannot subscribe to the belief that this life is a vale of tears, though it once was just that for many of us.' },
      { text: 'We have three little mottoes which are apropos: First Things First, Live and Let Live, Easy Does It.' }
    ]
  },

  "to-employers": toEmployersContent,
  "vision-for-you": visionForYouContent,

  "tightrope": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'Drinking was always a part of my family background. All the men in my family drank. As long as a person held down a job, didn\'t embarrass his family or friends too frequently, and kept out of trouble, he was entitled to get drunk on a regular basis.' },
      { text: 'I was raised in a conservative religion. Because I had a quick mind and was comfortable with academics, I became something of a teacher\'s pet. So when I went away to college, I was an alcoholic waiting to happen.' },
      { text: 'It was at this time that I also began to struggle with the question of my sexuality. Drinking helped me to forget and evade. I always tried to project the image of the conservative, masculine, deep-voiced loner.' },
      { text: 'I wound up living two separate and distinct lives—that of the gay man with friends and interests to match and that of the straight man with a totally separate set of friends and interests.' },
      { text: 'The slide toward active alcoholism was slowly accelerating. By the end of my drinking, only two people were willing to have anything to do with me on a social basis, and both were heavy drinkers.' },
      { text: 'Then a miracle occurred. The look of disgust and pity on the face of that stranger was the jolt I needed. I suddenly realized that my life was totally insane, that my drinking was out of control.' },
      { text: 'I called my former lover, and he put me in contact with an individual who took me to my first meeting. I heard two things I have never forgotten. The first was "You don\'t have to drink again." The second thing I heard was "You don\'t have to be alone anymore."' },
      { text: 'When we saw others solve their problems by a simple reliance upon the Spirit of the Universe, we had to stop doubting the power of God.' }
    ]
  },

  "flooded-with-feeling": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'When I first came to A.A., I thought everyone had drunk more than I had. But I kept coming to meetings, and I came to realize that I was on the same road. I just hadn\'t gone as far—yet.' },
      { text: 'I had my first drink in my senior year of high school. I never made that mistake again of bringing too little!' },
      { text: 'I became a teacher and didn\'t drink too often for a while. My cure for drinking was isolation. Life had shrunk down to an endless, awful now.' },
      { text: 'A new teacher came to my school, and I invited myself over to her place for a drink. I remember telling her, as I lifted the glass, that this might not be such a great idea but, "I believe it\'s worth the risk."' },
      { text: 'A few days later a teacher came up to me at work and said that she was an alcoholic and that she was going to A.A. The next day I asked her how often she went to meetings.' },
      { text: 'Halfway through the meeting I had the strangest idea. People were introducing themselves as alcoholics, and I had the urge to do the same. For the first time in years, I felt that I belonged.' },
      { text: 'Something happened. A barrier collapsed. Without moving or speaking, I was carried away on a flood of emotion. I know that I took the Third Step that night.' },
      { text: 'I can say that doubting God\'s existence was no barrier at all to a spiritual experience. Alcoholics Anonymous gives me the freedom to believe and to doubt as much as I need to.' }
    ]
  },

  "winner-takes-all": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'My parents were very much in love. When their son was about two years old, he followed some older children outside and was hit by a car. My parents were stricken with grief.' },
      { text: 'When this little girl was born, she brought them great joy. They tried again to have another little boy, but they had me instead. Not only was I a girl, but I was also born legally blind.' },
      { text: 'From the very beginning I felt different and unwanted. I came to the conclusion that I was bad and God knew I was bad, so God made me handicapped to punish me.' },
      { text: 'It was during my high school years that I discovered alcohol, and my problems were over. Now I was pretty and smart. For the first time I felt as if I fit in.' },
      { text: 'When I got on my knees and said, "God, change me or let me die," I called Alcoholics Anonymous and asked for help.' },
      { text: 'They started to explain to me that alcoholism is a disease. I started going to meetings. One night a friend said that even though he had been in jail, he was no different from me. It was then that I knew I was not unique.' },
      { text: 'I learned that handicapped is not a dirty word. I learned that I was not bad—that I was one of God\'s special children, that God had a plan for my life.' },
      { text: 'Since A.A., it doesn\'t matter how bad things get—I always have a feeling that everything is going to be all right.' }
    ]
  },

  "my-bottle-my-resentments-and-me": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'When I rode into a small mountain town in an empty freight car, my matted beard and filthy hair would have reached nearly to my belt, if I\'d had a belt. I wore a lice-infested, grimy Mexican poncho over a reeking pajama top, and a ragged pair of jeans stuffed into cowboy boots with no heels.' },
      { text: 'I carried a knife in one boot and a .38 revolver in the other. For six years I\'d been fighting for survival on skid rows and riding across the country in freights. I hadn\'t eaten in a long time, so was half starved and down to 130 pounds. I was mean and I was drunk.' },
      { text: 'I believe my alcoholism really began when I was eleven years old and my mother was brutally murdered. Until then my life had been much the same as any of the other boys who lived in a small town during that period.' },
      { text: 'One night my mother failed to return home from her job at a car manufacturing plant. A few days later the police came and arrested my father. They had found mom\'s mutilated body in a field outside of town. In that instant the family life I knew was destroyed!' },
      { text: 'At school the gossip was vicious. At home there was chaos and no one would tell me what was happening, so I withdrew and began to block out the reality around me. I became extremely lonely and defiant.' },
      { text: 'After several years of semidelinquent adolescence, I was old enough to join the marines. The discipline, the authority, the tight schedule went against my very nature. Every night found me at a bar drinking until they threw me out.' },
      { text: 'I left with my hatred, resentment, and the clothes on my back. In the largest city close by I could be found, dead broke, drinking myself into oblivion on skid row.' },
      { text: 'For the next six years I went from skid row to skid row. One boxcar headed in any direction was as good as another. I had no place to go. One thing about it, I never got lost, because I never cared where I was!' },
      { text: 'One scorching day, when I was in a desert town drinking, I felt as though I had reached the point where I couldn\'t go on. I fell to the ground and moaned, "Oh, God! Please help me." Today I know it was that my Higher Power took over my life.' },
      { text: 'I ran into one of my old hobo buddies, an older man. He told me he\'d quit drinking, and how he\'d managed to do it. My first thought was If he can do that, I can do that—and much better, because I\'m only thirty-three.' },
      { text: 'The next day we both quit drinking. There are no words to explain why it happened or how it happened; it just did. It was a miracle!' },
      { text: 'My sponsor told me if I wanted to form a relationship with my Higher Power, it would be necessary for me to change. I had to surrender and accept I was an alcoholic. These resentments eased with time as I began to comprehend my own defects of character.' },
      { text: 'Gradually the ice that was my heart melted and I changed as my relationship with my Higher Power grew. Life began to take on a whole new meaning.' },
      { text: 'An article about my life appeared in a magazine. My oldest brother just happened to subscribe to this magazine and just happened to read the article. After more than thirty years, my family had found me. God has done for me what I could not do for myself!' },
      { text: 'I believe that I am living proof of the A.A. saying "Don\'t give up until the miracle happens."' }
    ]
  },

  "he-lived-only-to-drink": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'On looking back at my life, I can\'t see anything that would have warned me or my family of the devastation that alcoholism had in store for us.' },
      { text: 'My father was a minister, and I attended his church every Sunday. My parents were both educators and champions of community outreach. There was caring and togetherness among us.' },
      { text: 'It was not until I was an adult, away from the family and doing graduate work at a prestigious East Coast university, that I had my first real drink of alcohol. I still remember that first sensation of the warm whiskey radiating through my body.' },
      { text: 'But most of all I remember that first night. I belonged. I was at home in the universe; I was comfortable with people. What a discovery! What a revelation!' },
      { text: 'The following year I began my career as a teacher. Before the school year ended, I had been asked to resign because of my drinking. From that first night at the bar, I had made a profound decision: Alcohol was my friend and I would follow it to the ends of the earth.' },
      { text: 'I wound up in an insane asylum, which probably saved my life. I do not remember how I got there. When I was released, I moved to a large city to make a new beginning. My life had become a series of new beginnings.' },
      { text: 'I sold my blood. I prostituted myself; I drank more. I became homeless and slept in the bus and train terminals. I drank my way to the men\'s municipal shelter and made it my home. By this time I lived only to drink.' },
      { text: 'It was at this point that a woman who was a social worker on skid row and a sober member of Alcoholics Anonymous sat me down and told me her story. I had been preached to, analyzed, cursed, and counseled, but no one had ever said, "I identify with what\'s going on with you. It happened to me, and this is what I did about it."' },
      { text: 'I genuinely believed that I was different until much later, when I had what I now know to be my first spiritual awakening: that I was an alcoholic and I didn\'t have to drink! I also learned that alcoholism, as an equal opportunity illness, does not discriminate.' },
      { text: 'In early sobriety I had to continue to live in a flophouse filled with active drunks. I realized that I had to separate my sobriety from everything else that was going on in my life. No matter what happened or didn\'t happen, I couldn\'t drink.' },
      { text: 'More important, I came to believe that I cannot do this alone. In A.A. I faced the pervasive "we" of the Twelve Steps and gradually realized that I can separate and protect my sobriety only inasmuch as I rely on the sober experience of other A.A. members.' },
      { text: 'The rewards of sobriety are bountiful. Among these rewards for me are release from the prison of uniqueness, and the realization that participation in the A.A. way of life is a blessing and a privilege beyond estimate.' }
    ]
  },

  "safe-haven": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'Prison. What a wonderful life it is. Here I am, sitting in a cell waiting for my hotpot to heat up so I can have a cup of instant coffee and reminisce.' },
      { text: 'I didn\'t grow up in a home that used alcohol, but when I took my first drink at the age of thirteen, I knew I would drink again.' },
      { text: 'At age sixteen I got a part-time job as a disc jockey for a local radio station. Drinking and partying went hand in hand with this job. When the alcoholism became obvious to my employers, I would simply resign and seek employment with another broadcasting company.' },
      { text: 'One night the storm was extremely turbulent. What no one knew was that all of those "professional" storm reports were called in from the safety of my back patio as I ad-libbed a little better with each fresh glass of bourbon and cola.' },
      { text: 'I had experienced run-ins with the law several times. But nothing could compare with the time the police asked me to come downtown for questioning concerning a murder. This was quite enough to get my full attention though.' },
      { text: 'I went home and called a friend who gave me her phone number and encouraged me to call if I would like to meet her friends. I admitted that I had a drinking problem and wanted to stop. She picked me up and took me to my first A.A. meeting.' },
      { text: 'In Alcoholics Anonymous, I knew I had found a protective haven. But during the ensuing 4½ years I fell into the category known as a "chronic slipper."' },
      { text: 'It was a beautiful September weekend just before Labor Day. I made the decision to buy a case of beer and a bottle of wine. I drank whiskey on top of the beer and wine, blacked out, committed a drunken crime, was arrested, and within ten days was convicted and sentenced to twenty years in prison.' },
      { text: 'As a result of that episode, I ended up seeing a psychiatrist to find out what was wrong with me. She said she thought I was an alcoholic and gave me a copy of the Big Book.' },
      { text: 'One day I heard something that was music to my ears. An A.A. meeting was to be held in the chapel. When I walked into the meeting, I took a seat in the circle of chairs, where I once again found a protective haven.' },
      { text: 'As I pen this story, 3½ years have passed since that meeting in the chapel. A.A. has accomplished so many things in my life today. It has given me my sanity and an all-around sense of balance.' },
      { text: 'The trial officials who convicted me and the victims of my crime have all decided to support my early release from prison. Coincidence? I think not. These are just samples of God doing for me what I couldn\'t do for myself.' },
      { text: 'From experience, I\'ve realized that I cannot go back and make a brand-new start. But through A.A., I can start from now and make a brand-new end.' }
    ]
  },

  "listening-to-the-wind": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'I started drinking when I was around eleven years old. I stayed with my brother and his wife just outside of Gallup, New Mexico. We were poor. The smell of beans and fresh tortillas symbolized home to me.' },
      { text: 'I had a hard time reading and understanding school work, so I skipped school every chance I got. I met a boy and together we ditched school and stole a truck. We drank tequila and explored the red mesas together.' },
      { text: 'When I was fifteen years old, I arrived alone in San Francisco with a guitar, a small suitcase, and $30. Three days later I found myself sleeping in a doorway to stay out of the rain.' },
      { text: 'Sometime in the middle of the long, restless night, a kindly middle-aged white man laid his hand on my shoulder. The price he asked in return seemed little. Thus began a long and somewhat profitable career in prostitution.' },
      { text: 'I started stealing and robbed a gas station and a liquor store. One night, I was pulled from a car, pistol whipped, and left to die in the mud with rain falling softly upon me.' },
      { text: 'The judge said I could not be rehabilitated, and I was charged with eighteen counts of felony. I would not see the streets again for nearly twenty-six months. I was seventeen years old.' },
      { text: 'When I got off the bus, I got a waitressing job in a bar. A few weeks later I saw him, the only Indian I had met in a very long time. That man became the father of my first-born child.' },
      { text: 'My son was born, and on the day of his birth, I found my purpose in life: I was born to be a mom. He was beautiful. I had never felt like this in my life.' },
      { text: 'I needed transportation. Where could I get lots of money? I could take the bus to the next town, work all night, and come home in the morning if I could get someone to watch my little boy. The night job paid well.' },
      { text: 'I met a wonderful man at the beach, and we fell in love. I told him I worked for the government and held a top security clearance. He proposed. The relationship broke up over my drinking.' },
      { text: 'This mountain town was a place I had visited as a child with Dad and Grandma. I got a job cleaning cabins and got back on welfare. By this time I was consuming nearly a fifth of tequila each day.' },
      { text: 'One day I got up as usual. The next conscious memory was the emergency room. They said I was suffering from malnutrition. I was nearly thirty pounds underweight.' },
      { text: 'One thing led to another, and we wound up married. The most powerful motive I had was getting out of the streets. The marriage was a farce. One night I caught my husband with another woman.' },
      { text: 'One evening during a party at my home, a woman there was writing something down on a small piece of paper. She came right up to me and handed me the small blue paper: "If you ever want to stop drinking, call Alcoholics Anonymous, 24 hours a day."' },
      { text: 'I was afraid to go on the street, so I turned to Mothers\' Aid. One morning I woke up alone. I needed a drink, and the bottle on the bedside table was dry. I found my empty purse on the floor. I remembered the number in the pocket of my jeans.' },
      { text: 'Five minutes later she pulled into my driveway. She must have been some kind of an angel. How had she appeared from nowhere that day in the laundromat?' },
      { text: 'The A.A. woman made sure I had no more alcohol in the house. I went to meetings every day and started taking the steps. That feeble request to God worked. From that day on, I knew that I had found a Higher Power and that He would help me.' },
      { text: 'The Twelve Steps worked like a crowbar, prying into my dishonesty and fear. I made some friends for the first time in my life. Real friends that cared, even when I was broke and feeling desperate.' },
      { text: 'I met my current husband in an A.A. meeting. Together we carry the message to Indian people on reservations all over the country. Our daughter was born during my early sobriety.' },
      { text: 'My life is filled with honesty today. I am in love and proud to be a Native American. I stand at the top of the sacred mountain, and I listen to the wind. I have a conscious daily contact with my Creator today, and He loves me.' }
    ]
  },

  "twice-gifted": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'Today is Sunday, my favorite day of the week. Things are usually peaceful, and I always get that wonderfully humbling, it\'s amazing to be alive, feeling.' },
      { text: 'Sunday used to be pretty wild in the old days. I cannot remember a time without booze in my life. By the time I actually reached legal drinking age, I had definitely gone beyond weekend party drinking.' },
      { text: 'During my young adulthood, drinking was the way I related to others. Over the years I grew up and got a life, but it was only a façade. I never did mature other than in the physical way.' },
      { text: 'Then a few things began to change. Some years before I finally gave up drinking, my body started to give me signals. Tests were run, but no real diagnosis was ever confirmed.' },
      { text: 'About one year prior to this experience a man was brought in to be treated for chronic alcoholism. He had lost everything worthwhile in life. Following the elimination of alcohol, he accepted the plan outlined in this book.' },
      { text: 'During my late forties, it was not unusual for me to have a drink alone in the evening. Any event was an occasion for excessive celebration. This was where I got my first bar tab.' },
      { text: 'I was forty-nine when my second husband and I were married. We had ten years of laughter, sharing, and wonderment well laced with martinis and Scotch. I watched him die of alcoholism. But I learned nothing from his death.' },
      { text: 'My early sixties saw me drunk every night. I bounced checks, pawned silver, mourned, and I continued my drinking. Finally on one cold winter day, I called Alcoholics Anonymous.' },
      { text: 'A series of circumstances brought me to a new doctor. The new physician took one look at my appearance and my blood test results, and asked if I drank. He explained that I had a disease called cirrhosis of the liver.' },
      { text: 'My new doctor gave me a referral to a liver transplant clinic. The doctors made it clear that if I wanted to live, I was going to have to prove that alcohol was no longer going to be part of my life.' },
      { text: 'That meeting more of what the people in A.A. were saying started to pass through my ears, and into my head, and finally into my heart. I found myself willing, and after some weeks of just showing up, I began to believe that this program could work for me.' },
      { text: 'During the six months of evaluation, I had a blood test at least weekly. After a six-month period I was officially listed as a candidate for a liver transplant. A year and a half later I was given a second chance and a second gift of life.' },
      { text: 'My physical being has certainly undergone a transformation, but the major transformation has been spiritual. The hopelessness has been replaced by abundant hope and sincere faith.' },
      { text: 'Today my life is filled with miracles big and small, not one of which would ever have come to pass had I not found the door of Alcoholics Anonymous.' }
    ]
  },

  "building-a-new-life": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'We had been in the fields all day baling hay. When the work was done, the men brought out a gallon of muscatel. I took a few drinks because I wanted to be like the men. I was six years old.' },
      { text: 'My early years were spent on my aunt and uncle\'s farm. Life was hard work in those days. By age eight I was guiding a horse-drawn plow by myself.' },
      { text: 'At thirteen I was tall, strong, and looked older. I went around with guys who were eighteen, and they took me to a Halloween party. By the end of the night, I had passed out in the outhouse.' },
      { text: 'By fifteen, I was sneaking out nightly to drink beer in the fields with the other pickers. Primed with beer, I could talk to girls and go to dances.' },
      { text: 'Two days before Christmas I was on the way to basic training. On the train, we bought liquor to celebrate Christmas. We were warned that the M.P.\'s were throwing bottles out the windows, so we drank ours hard and fast.' },
      { text: 'At home on leave, I married a young woman from my hometown, and our first daughter was born the next year. When I came home from the air force, the party really started.' },
      { text: 'I got too smart and forgot all that company had done for me. I complained about money I thought they had promised, and they fired me. That\'s when I really started drinking.' },
      { text: 'For the next five years, I drank every day. Finally I was injured on the job. On the fourth day the boss came to my house to check on me. I returned, drunk, before they left.' },
      { text: 'Three more daughters had been born. I took whatever construction work I could get. I wondered why I should make all this money for other people. I should become a contractor myself.' },
      { text: 'I curtailed my drinking a little and business started getting good, so I started drinking more. By the third year I spent all my time in bars. I lost my business.' },
      { text: 'My wife went on welfare, and I even stopped contributing after a while. I had to have enough to drink. I continued to work construction, but I wasn\'t very dependable.' },
      { text: 'I was arrested driving while intoxicated, but it was reduced to reckless driving. That was at the same time as my first try at A.A. I couldn\'t get sober, and I couldn\'t get drunk.' },
      { text: 'After that I moved to California. I did a lot of drinking on the job. I would go to the all-night store every morning to buy a bottle of wine for my thermos.' },
      { text: 'I went on a ten-day binge. By mid-January I was having hallucinations that would not go away. I called a residential treatment program and said I wanted help.' },
      { text: 'I began to think I was in prison and these guys wanted to kill me. When they opened the door, I ran for a window. The staff called the sheriff\'s department, and it took three deputies, two counselors, and two nurses to hold me down.' },
      { text: 'It was three days later when I woke up, naked and stinking. They cleaned me up and I felt great. I went to the treatment sessions and listened to everything. I wanted what the A.A.\'s had.' },
      { text: 'I have been sober ever since. I was finally accountable for my own recovery. I was responsible for taking the action. To me sobriety is a gift from God.' },
      { text: 'Once I was sober, my wife took me back. I felt that I had to go back to take care of the kids I had once left on welfare. I have beautiful relationships with all my kids.' },
      { text: 'There have been some hard times during these years of sobriety. When I was five years sober, the daughter who drove me to the treatment program disappeared. When I lost a second daughter to cancer, I went to lots of meetings.' },
      { text: 'What I\'ve learned is that it doesn\'t matter what hardships I\'ve endured in sobriety, I have not had to go back to drinking. As long as I work the program, keep being of service, and keep my spiritual life together, I can live a decent life.' }
    ]
  },

  "on-the-move": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'I thought my life had come to an end when I arrived at my first meeting of Alcoholics Anonymous at twenty-eight years old. I had been drinking since my early teens, and booze had been the answer to my problems.' },
      { text: 'As a very young boy, perhaps ten or eleven years old, I had begun to steal drinks when my parents were not looking, or my friends and I would convince someone to buy us beer.' },
      { text: 'A turning point came when I was fifteen. My mom was in the middle of an ugly divorce. In a drunken brawl, I attempted to kill my stepfather. I was dragged out of the house by the police.' },
      { text: 'The results were that I was given a choice by the judge: Go to juvenile hall until I was twenty-five, or leave the state until I was at least twenty-one. I did not want to go to juvenile hall.' },
      { text: 'Over the next thirteen years I learned the fine art of geographics. I landed in Japan. Then I moved to New England, then out to California.' },
      { text: 'There came a time when, looking into the mirror, I honestly did not know who was looking back at me. I had arrived at a "jumping-off point."' },
      { text: 'I began the process of speeding up the day when life would end. My doctor has six or seven suicide attempts on my medical records. My last such attempt was very public at Thanksgiving dinner.' },
      { text: 'As a result, I ended up seeing a psychiatrist. She said she thought I hadn\'t told the truth since I walked into the office, and that I was an alcoholic. She gave me a copy of the Big Book.' },
      { text: 'I eventually made it to my first meeting. When I drove up, I saw that the address was actually a church. As a nice Jewish boy, I was not about to wander into a church.' },
      { text: 'I didn\'t like A.A. and the people in it for a long time. I didn\'t trust anyone. It never occurred to me that they had sponsors and were working the Twelve Steps.' },
      { text: 'Then something happened that I now believe helped me to stay sober. I woke up one morning and couldn\'t feel my legs. Several months later, I was diagnosed with multiple sclerosis.' },
      { text: 'After white-knuckling it for almost two years in A.A., I finally broke down and saw that I could not stay sober all by myself. I did the unimaginable—I informed my sponsor that I was ready to work the Twelve Steps.' },
      { text: 'That man took me through the steps in a loving, gentle way. He taught me to look inward at my soul, to welcome a Higher Power into my life, and to reach out to others.' },
      { text: 'When I was four years sober, I took a trip back to my home city. I made amends to the man I had attempted to kill when I was fifteen years old.' },
      { text: 'A.A., and the steps of recovery, have shown me how to look at events in a different way. I can now understand how some things which once seemed like major disasters, turned out to be blessings.' },
      { text: 'I am truly a grateful alcoholic today. I do not regret the past nor wish to shut the door on it. I am aware that I am not the only person on this earth with problems.' }
    ]
  },

  "a-vision-of-recovery": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'I thought I was different because I\'m an Indian. I heard that statement from many Natives at my early A.A. meetings. I would only shrug and say: You think you\'re different, what about me? I\'m a red-headed Indian.' },
      { text: 'I grew up on a reservation in Canada. As a young fellow, I was a proud Mic-Mac Indian. My family had a reputation: They were hard drinkers, violent and tough.' },
      { text: 'There were times when I witnessed my father\'s rages and I was full of fear. I swore that I would not be like him, but I didn\'t see that alcohol and the rages were related.' },
      { text: 'I always thought I was different. On many occasions I wished I had black hair like my friends. Mic-Mac was the language in our home, but I would not speak it.' },
      { text: 'I was ten years old when I had my first drink of alcohol. I got deathly sick, threw up, and had diarrhea. The next day I was full of fear that my parents would find out.' },
      { text: 'A few years later, a few friends and I got a bottle of rum from a bootlegger. I got really drunk, and it was great. I remember having a feeling of complete freedom.' },
      { text: 'I spent a number of years in and out of juvenile correctional facilities, and after my eighteenth birthday, I began spending time in county jail. I got a high when I came home.' },
      { text: 'While in a juvenile detention center, I received word that my mother was dying of cancer. I was allowed home. One evening I was asked to stay home with my mother. Self-pity set in. When she refused to take her medicine, I almost forced it into her mouth; then I left.' },
      { text: 'That very evening, as I sat in jail, my mother died. I felt shame and remorse, and for years I believed I was somehow responsible for my mother\'s death.' },
      { text: 'I was to meet a young girl and have a son. I promised my son that "tomorrow" I would take him to the movies. That night I took a drink. The day after the promised movie I was guilty and remorseful.' },
      { text: 'The next few years saw me living with my father. My driving record included many accidents. I began to feel like a clown juggling too many balls.' },
      { text: 'I can certainly identify with our co-founder Bill W. when he says on page 4 of the Big Book: "the old fierce determination to win came back." I would take a drink, and then I knew everything was going to be all right.' },
      { text: 'One evening during a party at my home, an argument led to fighting. One of my brothers stabbed me in the back with a knife, and I fell to the floor unconscious.' },
      { text: 'I can honestly say that nothing worked for me until I joined Alcoholics Anonymous. Eventually I ended up in a treatment center, and after a twenty-eight-day program, I began attending A.A. meetings on a regular basis.' },
      { text: 'After three months in A.A., I returned home one evening to hear the music of a party next door. I was full of fear. I called my sponsor, but there was no answer. I went into my bedroom and said: "Well, Buddy, I guess there\'s just you and me." That feeble request to God worked.' },
      { text: 'Over the next few months I worked on Step One. I listened to speakers and began a Big Book study. For a guy who has spent years in jails, hospitals, psychiatric wards, there was only one answer—Alcoholics Anonymous and the Twelve Steps.' }
    ]
  },

  "gutter-bravado": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'I was born in a major midwestern city at the tail end of the baby boom. My parents were not well-to-do, but they were employed and pursuing the American dream.' },
      { text: 'Growing up, my big brother and I went to church on Sundays and attended parochial schools. I was a smart but mischievous kid, and at some point I decided it was easier to lie than to suffer the consequences.' },
      { text: 'Eventually my brother went off to college, and I started venturing into the world on my own. Sharing a few beers or a stolen bottle with friends on Friday nights was my approach to maturity.' },
      { text: 'In the mid-sixties I had the opportunity to visit my brother in California. These were heady times. There was music in the air and dancing in the streets.' },
      { text: 'By the fall of 1968, after leaving three different schools, I decided I\'d had enough. So I quit the books, packed my guitar, left home, and headed back to the West Coast.' },
      { text: 'My tiny grubstake soon started to run out, and work was hard to find. I began living hand-to-mouth. With winter approaching, I roamed the waterfront and the streets.' },
      { text: 'My moments of escape came when I persuaded someone to share their wine or vodka. With a drink in me, my confidence returned. Drinking to escape became as important as eating to survive.' },
      { text: 'I sought employment, often with a hangover. The jobs I found I considered to be menial. My thievery, tardiness, and absenteeism were the reasons for my dismissals.' },
      { text: 'With my first thousand dollars I bought a motorcycle. For years afterward I lived the biker lifestyle. Ride hard, live fast, and die young were the new rules.' },
      { text: 'In the mid-seventies I was hired by the steel industry, a union job at good pay. The first stop after work was the tavern. This was where I got my first bar tab.' },
      { text: 'My life became the pursuit of intoxication. After a few drinks I felt more normal and in control. I changed from a furtive loner into a party animal.' },
      { text: 'I had a growing uneasiness that I was in a vicious circle. I had no friends—only acquaintances. This fact was underscored by the bullet holes in my car, courtesy of one acquaintance I had double-crossed.' },
      { text: 'Finally an indiscretion committed years earlier came back to haunt me. I was about to have a forced encounter with the federal judicial system. I began to feel like a clown juggling too many balls.' },
      { text: 'The judge had no trouble coming up with a few ideas. I got house arrest with electronic monitoring. Five years in the penitentiary waited after that.' },
      { text: 'When the court eventually called me in for my violations, they gave me two choices: get help or go to jail. After careful thought I chose the first.' },
      { text: 'No longer the party animal, I was broke and my rent was overdue. Not drinking wasn\'t an option, but drinking didn\'t help. Such was my condition as I left to check myself into the hospital.' },
      { text: 'After a week I felt a little better. I found the doctors and nurses to be knowledgeable, but I sensed that while they knew much about alcoholism, they had learned it in books—they had not lived it.' },
      { text: 'However, there was one man on the staff who seemed different. He mentioned being a member of Alcoholics Anonymous. He may have saved my life just by being there, and to this day he doesn\'t even know it.' },
      { text: 'I walked out of there on a sunny afternoon. I intended to go to a meeting that night. Soon my old instincts began to take over. I sat down at the bar. Couldn\'t I make it just one day without drinking?' },
      { text: 'I realized that yes, I probably could make it just one day. Besides, I was going to a meeting that night. I could drink tomorrow if I wanted to—and that\'s just what I planned to do.' },
      { text: 'At my first meeting that night the people made me welcome. I met others like me and it felt good. The tomorrows came and went, and to this day, I still haven\'t found it necessary to take another drink.' },
      { text: 'The meetings gave me what my sponsor likes to call one of the most important words in the Big Book: A.A. put a "we" in my life. I no longer had to be alone.' },
      { text: 'I took to A.A. immediately and believed like a child that if I leveled my pride enough to thoroughly follow their path, I\'d get what they had. And it worked.' }
    ]
  },

  "empty-on-the-inside": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'I spent my life "acting as if"—either acting as if I knew or acting as if I didn\'t care. I always felt as though everyone else had been given the directions to life and I had been somewhere else when God was handing them out.' },
      { text: 'I don\'t know where I learned the attitude that it wasn\'t all right not to know, but it was a certainty in my life, and it almost killed me.' },
      { text: 'My father joined Alcoholics Anonymous when I was seven. Many of my childhood Friday nights were spent at open A.A. meetings because we couldn\'t afford a babysitter.' },
      { text: 'I was fifteen the first time I got drunk. I can tell you where I was, who I was with, what I was wearing. It was an important day for me.' },
      { text: 'Within a year I was a poster child for adolescent treatment of alcoholism. My grades plunged, my friends changed, I wrecked a car, my appearance went downhill.' },
      { text: 'I managed to graduate and went on to college, where I promptly flunked out. I couldn\'t make it to class. I thought that I had to be with my friends all the time.' },
      { text: 'Second, social conversation was a skill that I never acquired. When I met someone, I felt totally inadequate. For me it was one more thing that it wasn\'t all right not to know.' },
      { text: 'I loved to drink. Drinking put me into the middle of life. I was a social drinker—drinking made me extremely social. I always had a tremendous capacity for alcohol.' },
      { text: 'For fourteen years my drinking took me places I never meant to go. First I moved south, since I knew the town I grew up in was my problem.' },
      { text: 'My first marriage was really a one-night stand that lasted five years. We had two children and I wanted out, but to leave would have meant taking responsibility.' },
      { text: 'At one point I lost a job that meant a lot to me, as the direct result of my drinking. I called my father and told him I went to a meeting. Within a week he mailed me a box with the Big Book and other A.A. materials.' },
      { text: 'I was under arrest for child endangerment. I had left my sleeping children home alone and gone to drink. They were removed from my custody and placed with my mother.' },
      { text: 'Then started my rounds of the treatment centers. I could talk a good game. After all, I had grown up with A.A. But inside, I was relieved that my kids had to live with my mom.' },
      { text: 'While I was in treatment, my dad died and I inherited almost enough money to kill myself. I got to drink the way I wanted to for 2½ years.' },
      { text: 'Near the end, I was living in an attic apartment. When I woke up at 5:30, it was gray outside. Was it 5:30 a.m. or 5:30 p.m.? I couldn\'t tell.' },
      { text: 'I finally got on my knees and asked God for help. I couldn\'t go on the way I was living. I found the Big Book my father had sent me. I read "Bill\'s Story" again. This time it made sense.' },
      { text: 'I would love to tell you that I have been sober ever since, but that is not the case. I believe that we get more than one "moment of grace" from God—but it is up to us to seize the moment by taking action.' },
      { text: 'By the end of two weeks of drinking, I was out of money. I had less than one dollar. If there had been one more dollar, I might not be sober today. By the grace of God, I was out of plans.' },
      { text: 'Mom deposited me at the local detox center. Detox told me I already knew everything treatment was going to teach me. I had never expected to live to see thirty. I knew I would live, and that was far more terrifying. I had surrendered.' },
      { text: 'The first night out of detox, a woman spoke about not wanting to work or care for her daughter, she just wanted to drink. That was me! She became my first sponsor.' },
      { text: 'The second night I sat in the "new guy chair." When it came time to hold hands and pray, I had no hand to hold. I felt my hand being taken—someone had taken the time to be sure that the circle was complete.' },
      { text: 'The local clubhouse had a noon Big Book meeting every day, and I went, every day. I was not one of those people who walked into meetings and said, "Thank God, I\'m home." I just didn\'t want what I had anymore.' },
      { text: 'When I was two weeks sober, a man\'s nine-year-old daughter was killed by a drunk driver. Three days later he was at a meeting saying maybe one alcoholic would get sober because of it. I realized I could call my children and tell them I loved them. My life changed that day.' },
      { text: 'I remarried in Alcoholics Anonymous. We agreed to never be higher than third on each other\'s list, with God always first and Alcoholics Anonymous second. He is my partner and my best friend.' },
      { text: 'Our son is the third generation of A.A.\'s in my family. After a suicide attempt at age fourteen, we found out he too was an alcoholic. We trust Alcoholics Anonymous.' },
      { text: 'I have learned how to be a good A.A. member by watching good A.A. members and doing what they do. And I finally have the freedom of believing that it is all right not to know.' }
    ]
  },

  "grounded": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'I am an alcoholic. I am part Comanche Indian and grew up poor but in a loving home until alcoholism took both of my parents. I vowed I would never be an alcoholic.' },
      { text: 'I graduated from high school at seventeen and joined the marine corps. I found a home there. Four and a half years later I was given an opportunity to go into flight training.' },
      { text: 'Drinking was encouraged; the pilot persona was one of hard, gutsy flying with equally hard drinking. I did not need any encouragement and reveled in the squadron camaraderie.' },
      { text: 'One year into my training, I met a young beauty. I was drunk the night I met her. We were married two weeks after graduation. We have just celebrated our thirty-fifth anniversary.' },
      { text: 'We immediately had two sons, and I left to go to war in Vietnam. I spent 11½ years total time in the marine corps before deciding to get out. I joined a major airline.' },
      { text: 'My drinking continued to escalate. I had two charges of driving under the influence, years apart, which I wrote off to bad luck.' },
      { text: 'One night, after a hard afternoon and late evening of drinking, I and my two fellow flight crew members were arrested. We were charged with violation of a federal law. I was devastated.' },
      { text: 'I arrived home the next day, sick at heart and unable to look my wife in the face. I was diagnosed as an alcoholic and in treatment that night. The news media picked up the story, and it was blared all over the world.' },
      { text: 'I became notorious in commercial aviation. I lost my FAA medical certificate. My career was over via the six o\'clock news. I was joke fodder for the late-night TV comics.' },
      { text: 'I learned I was going to federal prison. With nothing left, I dedicated myself to learning about recovery. I worked as hard as I had worked to earn my wings, but this time my life was at stake.' },
      { text: 'I got out of treatment determined to complete ninety A.A. meetings in ninety days. I completed my ninety meetings in sixty-seven days. I went through an intense, media-covered three-week trial.' },
      { text: 'I was found guilty and sentenced to sixteen months in federal prison. I chose to go into prison and get it over. From somewhere I remembered: "Cowards die a thousand deaths, a brave man only once."' },
      { text: 'On the day I entered prison, nine of my fellow pilots began making our family\'s house payments, which they did for nearly four years.' },
      { text: 'I started an A.A. meeting in prison, which was opposed by the prison administration. The weekly meeting was a quiet oasis in the desert.' },
      { text: 'For a long time I did not consider flying again, but I could not purge the dream from my heart. I had to begin at the very bottom, with a private license.' },
      { text: 'My lawyer worked for three years after my conviction without taking a cent from me. He was one more person who entered my life in a manner I could only ascribe to Divine Providence.' },
      { text: 'I knew no one would ever hire me to fly passengers. I was an ex-con, a convicted felon, a drunk. It took several months for the FAA to process my licenses.' },
      { text: 'On the exact day they arrived, I received a phone call that the president of the airline had decided personally to reinstate me. I marveled at the courage of such a man and such an airline.' },
      { text: 'Almost four years after my arrest, I signed my back-to-work agreement. Restored to full seniority! My back-to-work agreement said I would retire as a copilot. Last year I was notified that I could once again be a captain.' },
      { text: 'I retired at age sixty, and I checked out as a 747 captain. The circle, so sacred to my Indian people, will once again have been completed.' }
    ]
  },

  "another-chance": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'I am an African-American alcoholic. I don\'t know when I became an alcoholic, but I do believe I became one because I drank too much too often.' },
      { text: 'I always blamed my drinking on being poor, or on anything other than the truth—that I liked what booze did for me, that when I had a drink I was as big and had as much as the next person.' },
      { text: 'At one point I lost a job that meant a lot to me. I went to a meeting of Alcoholics Anonymous and said, "I am an alcoholic." My father mailed me a box with the Big Book.' },
      { text: 'So, divorced, I moved back home. Within a year I was under arrest for child endangerment. I had left my sleeping children home alone. They were removed from my custody.' },
      { text: 'Then started my rounds of the treatment centers. I could talk a good game. After all, I had grown up with A.A. But the message my kids got from me was "Yes, I love you; now go away."' },
      { text: 'While I was in treatment, my dad died and I inherited almost enough money to kill myself. I got to drink the way I wanted to for 2½ years.' },
      { text: 'Near the end, I was living in an attic apartment. It was November, cold and gray. When I woke up at 5:30, I couldn\'t tell if it was a.m. or p.m. I was twenty-eight years old.' },
      { text: 'I finally got on my knees and asked God for help. I found the Big Book my father had sent me. I read "Bill\'s Story" again. This time it made sense. I slept, holding the book like a teddy bear.' },
      { text: 'For the next few days every time I went to my favorite watering hole, I was surrounded by people talking about sobering up. My bartender wanted to quit drinking.' },
      { text: 'By the end of two weeks of drinking, I was out of money. I called Mom, and she deposited me at the local detox center. She told me I could go in or not but that she was done with me.' },
      { text: 'Detox told me I already knew everything treatment was going to teach me. I had never expected to live to see thirty. I knew I would live, and that was far more terrifying. I had surrendered.' },
      { text: 'The first night out of detox, a woman spoke. That was me! She became my first sponsor. The second night when it came time to hold hands and pray, someone took the time to be sure that the circle was complete.' },
      { text: 'I went to a noon Big Book meeting every day. I was not one of those people who said, "Thank God, I\'m home." I just didn\'t want what I had anymore.' },
      { text: 'When I was two weeks sober, a man\'s daughter was killed by a drunk driver. He said maybe one alcoholic would get sober because of it. I realized I could call my children. My life changed that day.' },
      { text: 'I remarried in A.A. We agreed to never be higher than third on each other\'s list, with God always first and Alcoholics Anonymous second.' }
    ]
  },

  "a-late-start": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'I am a seventy-five-year-old alcoholic. For fifty-five of those years I led what is known as a normal middle-class life. Alcohol had as little part in it as candied yams.' },
      { text: 'I attended private school and later a midwestern college. I married, had children, worked, experienced the pain of the death of my parents and of a child. I enjoyed horseback riding, swimming, tennis.' },
      { text: 'What happened to me somewhere between the ages of fifty-five and sixty-three? I\'ve no idea! What I do know is that at sixty-five I was a crawling, dirty maggot of a woman.' },
      { text: 'I was twenty when I had my first drink, and I didn\'t like the way it made me feel. I didn\'t drink again until I was in my early thirties and thought it made me seem cool and sophisticated.' },
      { text: 'When I was thirty-five, my twelve-year-old son was diagnosed with an incurable cancer. For the following five years while my son lived, I seldom drank. Agony did not make me a drunk. Happiness opened that door much later.' },
      { text: 'During my mid-forties, my interest in alcohol began to gain momentum. By the time I was sixty, anyone wise in the ways of alcoholism would have known I was in for big trouble.' },
      { text: 'I watched my second husband die of alcoholism for two harrowing years. But I learned nothing from his death, and my drinking escalated as I bottle-fed my sorrow.' },
      { text: 'My early sixties saw me drunk every night. I bounced checks, pawned silver, mourned, and I continued drinking. I called Alcoholics Anonymous, and that evening two ladies took me to a meeting.' },
      { text: 'I had a drink first, of course, and when it came time to identify myself, I stated that my brain told me I was an alcoholic but the rest of me didn\'t believe it. That was the end of my first try at A.A.' },
      { text: 'Some months later my daughter found me sprawled across the living room floor, passed out cold. Seven days in detox and eight weeks of help, and I was dry, sober, and ready. The doctor suggested A.A., but I would have none of it. I was cured.' },
      { text: 'A year and a half later I retired. I gave myself permission to have a drink only when dining out. My self-imposed hell was in my own home. I sat shivering in fear of some unknown tragedy.' },
      { text: 'Once again my daughter came to my rescue, and I checked into detox. For six months I didn\'t drink, attended meetings, and sometimes read the Big Book. I was not impressed and didn\'t really believe the messages I heard.' },
      { text: 'Then one day I was called on to share. I announced that in no way was I a "grateful alcoholic," that I hated my condition, that I did not enjoy the meetings.' },
      { text: 'My healing began with the arrogance of that statement. One woman came to me and said I was about to "go out." She offered to help me find a sponsor. With the patience of unconditional love, she led me through the steps.' },
      { text: 'The Third Step was the most difficult for me. But having completed it, I found that I could face the other steps if I could remember to relax, trust the program, and implement the step rather than fight it.' },
      { text: 'A.A. has given me serenity of purpose and the opportunity to be of service to God and to the people about me. I will have peace of mind in exact proportion to the peace of mind I bring into the lives of other people.' },
      { text: 'I\'ve had many spiritual experiences. One morning I realized I had to get rid of my resentment against my mother or I was going to get drunk. In my prayers I asked God to point out some way to be free of this resentment.' },
      { text: 'A friend brought me magazines, and I found an article by a clergyman: "If you have a resentment you want to be free of, if you will pray for the person or thing that you resent, you will be free."' },
      { text: 'It worked for me then, and it has worked for me many times since. This great experience released me from the bondage of hatred and replaced it with love.' },
      { text: 'It\'s been ten years since I retired, seven years since I joined A.A. Now I can truly say that I am a grateful alcoholic. A.A. has filled my days with friends, laughter, growth, and the feeling of worth.' }
    ]
  },

  "freedom-from-bondage": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'The mental twists that led up to my drinking began many years before I ever took a drink, for I am one of those whose history proves conclusively that my drinking was "a symptom of a deeper trouble."' },
      { text: 'I am an only child, and when I was seven years old, my parents separated very abruptly. With no explanation at all, I was taken from my home in Florida to my grandparents\' home in the Midwest.' },
      { text: 'I came to the conclusion that if I never allowed myself to love anybody or anything, I could never be hurt again. It became second nature for me to remove myself from anything I found myself growing fond of.' },
      { text: 'In my late teens I became aware of emotions: restlessness, anxiety, fear, and insecurity. I decided that all these would vanish if I only had a lot of money. With cold calculation I set about to marry a fortune.' },
      { text: 'The only thing this changed was my surroundings. It was impossible for me to say, "Maybe there is something wrong with me." I convinced myself my unhappiness was the fault of the man I had married.' },
      { text: 'I was married and divorced again before I was twenty-three, this time to a prominent band leader. I thought this would give me ego-strength, but again nothing changed inside me.' },
      { text: 'If I had been able to turn to the church, I\'m sure they could not have shown me that the need for self-analysis that A.A. has shown me is vital if I am to survive. So I had no place to go.' },
      { text: 'I wasn\'t afraid of anything after I learned about drinking. It seemed right that with liquor I could always retire to my little private world where nobody could get at me to hurt me.' },
      { text: 'For the next ten years I progressed as rapidly as humanly possible into what I believed to be hopeless alcoholism. My husband was soon in uniform and among the first to go overseas.' },
      { text: 'The last three years of my drinking, I drank on my job. The amount of willpower exercised to control my drinking during working hours would have made me president.' },
      { text: 'About this time I met a man who had three motherless children. It seemed logical that if I married this man and took responsibility for these children that they would keep me sober. The children kept me sober for three weeks.' },
      { text: 'I was drunk for sixty days around the clock, and it was my intention, literally, to drink myself to death. Finally, in desperation, my family appealed to a doctor, and he suggested A.A.' },
      { text: 'I was put in a sanitarium to be defogged. I realized for the first time that as a practicing alcoholic, I had no rights. I had lived with no sense of social obligation nor moral responsibility.' },
      { text: 'I attended my first A.A. meeting eight years ago. I have not had a drink since that time. One of the truly great things A.A. has taught me is that reality has two sides; I had only known the grim side before.' },
      { text: 'A.A. has taught me that I will have peace of mind in exact proportion to the peace of mind I bring into the lives of other people.' },
      { text: 'One morning I realized I had to get rid of my resentment against my mother. In my prayers I asked God to point out some way to be free. A friend brought magazines, and I found this: "If you will pray for the person you resent, you will be free."' },
      { text: 'It worked for me then, and it has worked for me many times since. This great experience released me from the bondage of hatred and replaced it with love.' }
    ]
  },

  "a-a-taught-him-to-handle-sobriety": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'When I had been in A.A. only a short while, an oldtimer told me something that has affected my life ever since. "A.A. does not teach us how to handle our drinking," he said. "It teaches us how to handle sobriety."' },
      { text: 'I guess I always knew that the way to handle my drinking was to quit. After my very first drink—a tiny glass of sherry my father gave me at age thirteen—I went up to bed and prayed I wouldn\'t drink anymore!' },
      { text: 'I was raised in Kansas, the only child of loving parents who just drank socially. We moved frequently. In each new place, I was the new kid—a skinny, shy kid—to be tested and beaten up.' },
      { text: 'By the time I reached high school, I was an overachiever. An honor student in college, I became editor of the yearbook. I sold my first article to a national magazine while still an undergraduate.' },
      { text: 'Upon graduation I ventured to New York to pursue my writing career. Regarded as something of a "boy wonder," I began to see myself that way. I also began visiting bars after work. By age twenty-two, I was a daily drinker.' },
      { text: 'Then I joined the navy and was commissioned to write speeches for admirals. I also got into my first disciplinary trouble caused by drinking, on two separate occasions.' },
      { text: 'In the last year of my navy service, I was married. Our courtship was mainly in bars and night spots. On our honeymoon we had iced champagne by the bedside day and night. The pattern was set.' },
      { text: 'By twenty-nine I was having trouble coping with life because of my drinking. Neurotic fears plagued me. I read self-help books. I turned to religion with fervor.' },
      { text: 'The early promise of the "boy wonder" faded. My values became distorted. To wear expensive clothes, to have bartenders know what to serve me—these were the enduring values in life, I thought.' },
      { text: 'When I encountered disappointments or frustrations, my solution was to drink. When I was criticized, the bottle was my refuge. I had to fortify myself with a couple of belts.' },
      { text: 'At age forty I developed a large lump in my potbelly, and I feared it was a tumor. The doctor said I had to quit drinking. I did. I went on the wagon for ten months—except that I didn\'t enjoy life without drinking.' },
      { text: 'When my liver had recovered, I resumed drinking. At first, just one drink, on occasion. Soon my drinking was as bad as ever. I had to carry a bottle of vodka in my briefcase and gulp from the bottle in public toilets.' },
      { text: 'The enlargement of my liver degenerated into cirrhosis. I vomited every morning. I could not face food. My doctor warned me I might die. But now all choice was gone. I had to drink.' },
      { text: 'I was attending a convention in Chicago. Suddenly I began vomiting and losing rectally great quantities of blood. I found myself on a stretcher and whisked away to a hospital.' },
      { text: 'The doctors told me that if I ever took another drink, it might be my last. I thought I had learned my lesson. But within two months I was drinking again. In the next half-year I experienced two more esophageal hemorrhages.' },
      { text: 'My doctor sent me to a psychiatrist who happened to be Dr. Harry Tiebout, the psychiatrist who probably knew more about alcoholism than any other. He was a nonalcoholic trustee on the General Service Board of A.A.' },
      { text: 'It was Dr. Tiebout who persuaded me to seek help through A.A. I acquired a sponsor and began attending meetings but continued to drink. Within a few days I found myself drying out on a drunk farm.' },
      { text: 'As the sober days grew into sober months and then into sober years, a new and beautiful life began to emerge. My relationship with my wife was restored to a love and happiness we had not known.' },
      { text: 'All these things and many more, A.A. gave me. But above all, it taught me how to handle sobriety. I have learned how to relate to people; before A.A., I could never do that comfortably without alcohol.' },
      { text: 'God willing, we members of A.A. may never again have to deal with drinking, but we have to deal with sobriety every day. How do we do it? By learning through practicing the Twelve Steps.' },
      { text: 'We are taught to differentiate between our wants (which are never satisfied) and our needs (which are always provided for). We cast off the burdens of the past and the anxieties of the future.' },
      { text: 'Above all, we reject fantasizing and accept reality. A.A. led me gently from fantasizing to embrace reality with open arms. And I found it beautiful! For, at last, I was at peace with myself.' }
    ]
  },

  "me-an-alcoholic": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'When I try to reconstruct what my life was like "before," I see a coin with two faces. One side I turned to myself and the world was respectable—even distinguished.' },
      { text: 'I was father, husband, taxpayer, home owner. I was clubman, athlete, artist, musician, author, editor, aircraft pilot, and world traveler. I was listed in Who\'s Who in America.' },
      { text: 'The other side of the coin was sinister, baffling. I was inwardly unhappy most of the time. There would be times when life seemed insufferably dull—I had to break out by getting drunk.' },
      { text: 'The insidiousness of alcoholism is an appalling thing. In all the twenty-five years of my drinking, there were only a few occasions when I took a morning drink. My binges were one-night stands only.' },
      { text: 'I was never drunk on the job, never missed a day\'s work, was seldom rendered totally ineffective by a hangover. I continued to advance in my chosen field. How could such a man possibly be called an alcoholic?' },
      { text: 'Of course I drank. Everybody did in the set which I regarded as the apex of civilization. My wife loved to drink. My associates, and all the wits and literary lights I so much admired, also drank.' },
      { text: 'How easy it was, in the beginning, to forget that those binges ever happened! After a day or two of groveling remorse, I\'d come up with an explanation. "The nervous tension had piled up and just had to spill over."' },
      { text: 'My growing inward unhappiness was a very real thing. A friend had found help in psychoanalysis. After a particularly ugly one-nighter, my wife suggested I try it. To cut a long story short, I spent seven years and $10,000 on my psychiatric adventure.' },
      { text: 'I learned many fascinating things. But meanwhile I was getting worse. My binges remained one-nighters. But they were occurring with alarming frequency. In seven years the intervals between them decreased from eight months to ten days!' },
      { text: 'I was now head of a publishing venture in which nearly a million dollars had been invested. My opinions were quoted in Time and Newsweek. I addressed the public by radio and TV. It was a fantastic structure, built on a crumbling foundation.' },
      { text: 'After my last binge I came home and smashed my dining room furniture to splinters, kicked out six windows and two balustrades. When I woke up sober, my handiwork confronted me. It is impossible for me to reproduce my despair.' },
      { text: 'I crawled back to my analyst. After talking with him, I heard myself saying, "Doc, I think I\'m an alcoholic." "Yes," he said, surprisingly, "you are."' },
      { text: '"There\'s nothing I can do," he said, "and nothing medicine can do. However, I\'ve heard of an organization called Alcoholics Anonymous. They might work." I looked up an A.A. meeting and went there—alone.' },
      { text: 'Here I found an ingredient that had been lacking in any other effort I had made to save myself. Here was power! Power to live to the end of any given day, power to have friends, power to be sane, power to stay sober.', highlight: 'blue' },
      { text: 'That was seven years ago and I haven\'t had a drink during those seven years. Moreover, I am deeply convinced that so long as I continue to strive toward the principles in this book, this remarkable power will continue to flow through me.', highlight: 'blue' },
      { text: 'My story has a happy ending but not of the conventional kind. I had a lot more hell to go through. My tower of worldly success collapsed. My alcoholic wife divorced me and took all my remaining property.' },
      { text: 'The most terrible blow befell me after I\'d found sobriety through A.A. One night my son, when he was only sixteen, was suddenly and tragically killed. The Higher Power was on deck to see me through, sober.', highlight: 'blue' },
      { text: 'There have been some wonderful things too. My new wife and I have a baby who is right out of heaven. My work is on a much deeper and more significant level than it ever was before.' }
    ]
  },

  "the-perpetual-quest": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'When I was a newly minted lawyer starting out in criminal law, there were five of us in our law office. Within a dozen years, three of these five promising lawyers were dead from alcoholism, struck down at the peak of their careers.' },
      { text: 'My husband and I met and married in law school in a romantic haze of alcohol, twinkling lights, and much promise. We worked and played hard, threw fabulous parties, and prided ourselves on staying away from drugs.' },
      { text: 'Until I was four years old, I lived upstairs from a tavern. My mother worked for relatives who also lived over the tavern. Despite my pleas, my mother married a violent man, and we moved away.' },
      { text: 'By the age of fourteen I had my first drunk, which ended in a minor police visit to my home. By age eighteen I was a daily drinker, and by age twenty-one I had my first year-long binge in France.' },
      { text: 'At law school we drank a lot of beer in student pubs. As new lawyers, we beavered in the office early, then ran off to court. Lunch was the training ground for the perpetual quest for the best martini—usually two or three of them.' },
      { text: 'Evenings we drank with lawyers, writers, media types. When I drank, the fear evaporated and I became articulate and apparently very funny. We would get home by one or two in the morning, and the next day we would be up early to start all over again.' },
      { text: 'Unfortunately, by the time we thought it was time to have a "real life" and maybe start a family, the marriage disintegrated. I was twenty-eight, getting divorced, drinking all the time, and seeing a psychiatrist three times a week.' },
      { text: 'I stumbled into a private controlled-drinking program, which helped me hook a very large rug, row by row, well into many late nights during the initial thirty-day mandatory period of abstinence.' },
      { text: 'Incredibly, I did not connect the improved manageability of my life in this short period to the absence of booze. Unfortunately, I started to get drunk again.' },
      { text: 'Many drunks later, I tried everything: more therapy, different psychiatrists, biofeedback, relaxation exercises, Antabuse, lots of self-help books. All to no avail, because I\'d always end up drunk.' },
      { text: 'I couldn\'t keep dragging myself off to work in the morning and spending half the energy concealing that I was a barely functioning drunk. I would go home to drink until I passed out, come to in the middle of the night terrified.' },
      { text: 'One day I was so hungover at lunchtime I called a friend and had a little cry. "I\'ve tried everything and nothing works," I said. My friend suggested we contact a man she knew who was a member of Alcoholics Anonymous.' },
      { text: 'My first meeting back at A.A. was on an unseasonably hot June night, but there was not a cool drink in sight. The smoke could have choked a horse. A fanatical woman eagerly explained they had this important book I should buy. "I\'ll give you the money, but I don\'t want your book!"' },
      { text: 'For the next few months, I continued to get drunk despite dragging my body to meetings every few days. I would stare at the large vodka bottle and say, "You won\'t get me!" but it did.' },
      { text: 'My last hangover was on a Friday before a long summer weekend. Later that Friday night, I was dragging myself up the deserted street thinking that the whole world had someplace to go, and someone to go with.' },
      { text: 'Instead of going to a bar or home with my regular giant weekend supply of booze, I went to my club to swim. I wrapped myself in a bathrobe and sat in a dark corner of the locker room for two hours, feeling desperately sorry for myself.' },
      { text: 'Close to eight o\'clock, I leaped up and raced off to a meeting I\'d had no intention of attending. It was a bit like getting a rap on the head with an invisible hammer and having my brain flip over.' },
      { text: 'Late that night at home, there was a presence in the room with me, even though I lived alone. The next morning I knew I didn\'t have to drink.' },
      { text: 'In the weeks and months that followed, I did everything that was suggested to me. I went to a meeting every day, read the books, and got a sponsor who told me to have a quiet time every morning.' },
      { text: 'I joined a downtown group that met near my office right after work at 5:15. I would not have made it to 8:00 p.m. Soon, I got into service and was given bank books and told to keep the meeting going.' },
      { text: 'I became as compulsive about A.A. as I had been about drinking. I went to every A.A. get-together possible. I listened to tapes. I read and reread the literature, laughing into the night over Dr. Bob and the Good Oldtimers.' },
      { text: 'Many years later, although alcohol is not part of my life and I no longer have the compulsion to drink, it can still occur to me what a good drink tastes like. Such thoughts are like red flags, telling me something is not right.' },
      { text: 'The hardest thing I had to deal with in sobriety was my own anger and the violence I lived through in my childhood. I would never have recovered from violence and alcoholism without A.A.\'s Twelve Steps.' },
      { text: 'When I was five years sober, I met a man in A.A. who was also five years sober. He said that the rocks in my head fit the holes in his. Today we have a daughter who has never seen her parents drink.' }
    ]
  },

  "appendices": appendicesContent,

  "a-drunk-like-you": {
    highlights: [],
    paragraphs: [
      { text: 'Usually our stories start out by telling what we were like, what happened, and what we are like now. For me, what it was like was nothing in particular. Only much later did I realize that those things were in my past also.' },
      { text: 'My family and I were attending a relative\'s bris, a Jewish ritual circumcision. After the ceremonies I fell asleep. When they came to wake me, I was very belligerent and threatening. I scared them. That was it.' },
      { text: 'My wife\'s sister-in-law suggested we see a counselor. I was having anxiety attacks for no reason. I was having trouble getting technicians to work for me. I would beat up my desk with my desk chair.' },
      { text: 'The most serious thing to me was that I was contemplating suicide. I had an actual plan—a plan for an accident that would raise no question in the minds of the insurance company.' },
      { text: 'We found a psychiatric social worker at the local Jewish Family Services agency. When I saw her by myself, she would talk about drinking. I don\'t know why she kept bringing it up. I drank, but not that much.' },
      { text: 'One day she asked if I could limit myself to five drinks in a day. I said, "Sure." Was I surprised when I found that I couldn\'t. That should have been my first clue.' },
      { text: 'Then I hit on a clever solution. Put off the first drink as long as possible and go to bed after the last drink. I told the counselor I was able to keep it to five a day. But she said if you had to control something, it was out of control.' },
      { text: 'During one session she suggested that I try not drinking at all one weekend. Much to my surprise the weekend went well. She said, "What about the meeting?" I said, "What meeting?" She said, "The A.A. meeting."' },
      { text: 'The meeting went okay. Since they were all saying they were alcoholics, it wasn\'t too hard for me to say, "Hi, I\'m an alcoholic," and offer my suggestion. After the meeting he said to be sure and come back next week.' },
      { text: 'The discussion was very interesting. I didn\'t think I was "powerless over alcohol," but I knew "my life was unmanageable."' },
      { text: 'One night we were talking about when we started drinking. I was given my first drink at my bris at eight days old. Later at my cousin\'s bar mitzvah I had my first real drink. It was good, smooth and warm and wonderful.' },
      { text: 'At that First Step table we figured out that was alcoholic drinking—having one and going back for a second right away. I know now I never had just one drink, ever.' },
      { text: 'Somebody asked how many did I buy? "I stopped in the package store every day and bought one." "How many did you have left at the end of the week?" "None," I said. He said, "a bottle-a-day man."' },
      { text: 'I saw the counselor once a week, and I went to this men\'s meeting once a week, and everything was getting better. After my three months were up, I got my pocket piece.' },
      { text: 'A couple of weeks later the large company I was with had a large staff cutback, and I was fired. I was very upset. After all, I was better now.' },
      { text: 'Between losing my job and my flight to a convention, I decided maybe I was not an alcoholic and I needed to test that theory. If I could have one drink and no more, I was not an alcoholic.' },
      { text: 'On the plane I said, "Yes" to drinks. I drank for the whole flight. As we approached our destination, I found my ninety-day pocket piece. Wow, those guys at the meeting were right—I am powerless over alcohol.' },
      { text: 'I put that coin back in my pocket and from that day to this, some 15½ years later, I have had no urge to drink. When I got back to my meeting, I told them what had happened.' },
      { text: 'They suggested I get a sponsor, go to more meetings, and identify, not compare. They suggested I find a Higher Power. I wanted no part of God.' },
      { text: 'With this resistance I plodded along for a few months. Whenever people asked how I was doing, I would say, "Fine, just fine," no matter how hard I was crying inside.' },
      { text: 'I was sober about six months, and I was not getting any better. I contemplated suicide almost every day. I decided I had had enough. I went to my Tuesday night meeting, fully intent on sharing honestly.' },
      { text: 'I arrived at the meeting and no one else was there. Then a man walked through the door. He suggested we have a meeting. For the next forty-five minutes I talked. I made completely honest contact with another human being.' },
      { text: 'When I had finished, he told me something simple: "You don\'t have to drink over it." Here was a man telling me that, independent of my life situation, I did not have to drink. He gave me hope.' }
    ]
  },

  "acceptance-was-the-answer": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'If there ever was anyone who came to A.A. by mistake, it was I. I just didn\'t belong here. Never in my wildest moments had it occurred to me that I might like to be an alcoholic.' },
      { text: 'My major problems were marital. "If you had my wife, you\'d drink too." Max and I had been married for twenty-eight years when I ended up in A.A. It started as a good marriage, but it deteriorated.' },
      { text: 'I had sent her to four consecutive psychiatrists, and not one of them had gotten me sober. I also sent my kids to psychiatrists. One time, even the dog had a psychiatric diagnosis.' },
      { text: 'The harder I worked with Max, the sicker she got. When it ended up at a psycho ward, I wasn\'t surprised. But when that steel door slammed shut, and she was the one that went home, I truly was amazed.' },
      { text: 'I had begun to drink in the early years of pharmacy school, in order to get to sleep. After studying until one or two in the morning, I would drink two beers, jump in bed, sleep real fast, and wake up smart.' },
      { text: 'I drank my way through schools and always got honors. As I went through pharmacy school, graduate school, medical school, and into practice, my drinking kept increasing. But I thought it was because my responsibilities were increasing.' },
      { text: 'The longer the drinking continued, the shorter the time the alcohol would keep me asleep. But I never became a morning drinker. I had a 5:00 a.m. shutoff time.' },
      { text: 'One day I asked myself what I would do for a patient who felt this rotten. The answer came: I\'d give him something to pep him up. So I immediately started taking and shooting pep pills.' },
      { text: 'Eventually, I was taking forty-five milligrams of long-acting Benzedrine and forty-five of short-acting just to get out of bed. I took more through the day. When I overshot the mark, I\'d take tranquilizers to level off.' },
      { text: 'I just loved intravenous Demerol, but I found it hard to practice good medicine while shooting morphine. For a period I was injecting Pentothal intravenously to put myself to sleep.' },
      { text: 'I never in my life took a tranquilizer, sedative, or pep pill because I was a pillhead. I always took it because I had the symptom that only that pill would relieve. Every pill was medically indicated.' },
      { text: 'Today, I find I can\'t work my A.A. program while taking pills. I can\'t say, "Thy will be done," and take a pill. Giving up alcohol alone was not enough; I\'ve had to give up all mood- and mind-affecting chemicals.' },
      { text: 'On two occasions I decided I would take absolutely nothing. On each occasion I had a convulsion on Sunday morning. The neurologist couldn\'t figure out why and decided to send me to the Mayo Clinic.' },
      { text: 'After nine days of tests at Mayo, I was put in the locked ward. When we got home, I got a bottle of Scotch and went to bed. The next day, Max called the neurologist who arranged for me to see a local psychiatrist.' },
      { text: 'Time went by very slowly on my second nut ward. They wanted me to make leather belts! Had I gone to school all those years just to make leather belts?' },
      { text: 'In the hospital I hung on to the idea that if I could just control the external environment, the internal environment would become comfortable. Today we have turned our wills and lives over to the care of God.' },
      { text: 'One day my psychiatrist asked, "How\'d you like to talk to the man from A.A.?" My reaction was that I\'d already helped all the patients on the ward. But by the look on his face, I could tell it would make him happy if I agreed.' },
      { text: 'Against my better judgment, I went to a meeting that night, and a strange thing began to happen. The psychiatrist became quite interested and would ask me all kinds of questions about the A.A. meetings.' },
      { text: 'Eventually the psychiatrist discharged me, and Max and I began going to meetings ourselves. Right from the start, I felt they weren\'t doing anything for me, but they sure were helping Max.' },
      { text: 'Although we enjoyed the laughter in the early days, I heard a lot of things that I thought were stupid. I interpreted "sober" as meaning "drinking but not being drunk."' },
      { text: 'Finally, after seven months, I decided to try it. I am amazed at how many of my problems have become manageable or have simply disappeared since I quit drinking.' },
      { text: 'It helped me to become convinced that alcoholism was a disease, not a moral issue; that I had been drinking as a result of a compulsion; and that sobriety was not a matter of willpower.' },
      { text: 'At last, acceptance proved to be the key to my drinking problem. After seven months, I was finally able to say, "Okay, God. I really am an alcoholic. And it\'s all right with me. Now, what am I going to do about it?"' },
      { text: 'When I stopped living in the problem and began living in the answer, the problem went away. From that moment on, I have not had a single compulsion to drink.' },
      { text: 'And acceptance is the answer to all my problems today. When I am disturbed, it is because I find some person, place, thing, or situation unacceptable to me, and I can find no serenity until I accept that it is exactly the way it is supposed to be at this moment.' },
      { text: 'Nothing, absolutely nothing, happens in God\'s world by mistake. Until I could accept my alcoholism, I could not stay sober; unless I accept life completely on life\'s terms, I cannot be happy.' },
      { text: 'I need to concentrate not so much on what needs to be changed in the world as on what needs to be changed in me and in my attitudes.' },
      { text: 'Shakespeare said, "All the world\'s a stage, and all the men and women merely players." He forgot to mention that I was the chief critic. I was always able to see the flaw in every person, every situation.' },
      { text: 'For years I was sure the worst thing that could happen would be that I would turn out to be an alcoholic. Today I find it\'s the best thing that has ever happened to me.' }
    ]
  },

  "window-of-opportunity": {
    highlights: [],
    tabs: [],
    paragraphs: [
      { text: 'I got sober while I was still in college. Once, outside of a meeting, I overheard a conversation. A nurse was describing the common perception of students as arrogant and self-centered.' },
      { text: 'She said: "Two years ago a student was brought in by ambulance. He had gotten drunk, walked through a second-story window, and fallen twenty feet headfirst into a concrete window well. He was the single most obnoxious person I have ever met."' },
      { text: 'At that point I interrupted her. "That was me," I said. "That was my last drunk." I had walked through that window when I was nineteen years old.' },
      { text: 'I had always been a "good kid" growing up, the kind of son other mothers loved. I was at the top of my classes. My earliest memories included threats by my parents to throw me out onto the street for the slightest acts of disobedience.' },
      { text: 'As I grew older, I made a plan. I would be dutiful until I graduated from high school. Then I would escape to college, secure my economic future, and never go home again.' },
      { text: 'Like many alcoholics, I had spent much of my life feeling different. I covered those feelings by being one of the smartest people in any group. I became a performer in crowds, always ready with a quick joke.' },
      { text: 'I went to a college filled with people who had also spent their lives at the top of their classes. Suddenly, I was no longer special. Many of them had what I only dreamed of—money.' },
      { text: 'My shaky confidence crumbled. I was terrified of being found out. I knew that if others discovered who I really was, they wouldn\'t like me and I would be left alone, worthless and alone.' },
      { text: 'Then I discovered alcohol. I had tried it a few times in high school, but never enough to get drunk. When I got to college, that fear left me. It was not long before my history surpassed everyone\'s.' },
      { text: 'My drinking career was short and destructive. I got drunk for the first time in October. By November people were willing to wager money that I could not go one week without a drink.' },
      { text: 'By January I was a daily drunk and by April a daily drug user as well. One of the primary differences between alcoholics and nonalcoholics is that nonalcoholics change their behavior to meet their goals and alcoholics change their goals to meet their behavior.', highlight: 'yellow' },
      { text: 'Everything that had been important to me was swept away in a wave of booze. I realized quickly that I could not drink and function at any high level. I was willing to give up anything so that I could keep drinking.' },
      { text: 'I went from being a solid A student to nearly flunking out, from being a class leader to being shunned. I never went to class and did little reading. I forsook everything that makes college worthwhile in favor of drinking.' },
      { text: 'It did not take long for me to come to the attention of the college deans. I first agreed to enter counseling. I saw it as a bargain. Not surprisingly, the counseling had no effect.' },
      { text: 'About a year later I realized I was in trouble. I had failed a class. The spring term was looking equally bleak. My life had become unmanageable, and I knew it.' },
      { text: 'I went back to the dean and, for the first time, admitted that I had a problem with alcohol. The dean allowed me to withdraw from that class on one condition—I had to enter a treatment center. I agreed.' },
      { text: 'A few days went by. With the pressure lifted, my life did not look so unmanageable. So I thanked the dean but told him I would be okay on my own. I did not go to a rehab. Two weeks later I walked through a second-story window.' },
      { text: 'After insulting the emergency room personnel, I slipped into unconsciousness, where I remained for five days. I awoke in a neck brace with complete double vision. I was flown home and the future looked bleak.' },
      { text: 'My college was assessing how to respond to student alcohol abuse and were waiting to try out their latest idea: Alcoholics Anonymous. I was the test case. They told me I would never get back into this college unless I went to A.A.' },
      { text: 'One definition of a bottom is the point when the last thing you lost or the next thing you are about to lose is more important to you than booze. For me, it was clear. I was willing to do anything to get back into school.' },
      { text: 'I went to my first A.A. meeting with no idea what A.A. was about. A.A., like prison, was shameful and was never discussed. I also had no idea what alcoholism was.' },
      { text: 'I was surprised by my first meeting. The room was filled with well-dressed, smiling, happy people. No rancid coats. No bloodshot eyes. But laughter.' },
      { text: 'Then a woman introduced herself and said she was an alcoholic. She spoke about feelings, of insecurity replaced by confidence, fear replaced by faith, resentment replaced by love, and despair replaced by joy.' },
      { text: 'After the meeting, people welcomed me with open arms and gave me their telephone numbers. The speaker said, "If you\'re an apple, you can be the best apple you can be, but you can never be an orange." I was an apple all right, and for the first time I understood I had spent my life trying to be an orange.' },
      { text: 'My progress in A.A. was slow. I refused to go to meetings outside of my neighborhood. I would not go to meetings on other nights. I bounced from one sick relationship to another. I was too proud to ask what a sponsor was.' },
      { text: 'I plodded along for a few months. I was sober about six months, and I was not getting any better. I contemplated suicide almost every day. My emotions swung between paralyzing despair and murderous rage.' },
      { text: 'I decided I had had enough. I went to my Tuesday night meeting, fully intent on sharing honestly. I arrived and no one else was there. Then a man walked through the door.' },
      { text: 'He asked me how I was doing. The pain, fear, misery, anger, loss, resentment, and despair came pouring out. For the first time I made completely honest contact with another human being. I was met with acceptance and love.' },
      { text: 'When I had finished, he told me something simple: "You don\'t have to drink over it." If I stuck with A.A., I could stay sober under any and all conditions. He gave me hope.' },
      { text: 'I began to change. I began to pray. I became actively involved in working the steps. I began working with a sponsor and became active in my home group. My life began to change.' },
      { text: 'Just before my first anniversary, I was readmitted to my college. I arrived back terrified. The answer was simple—I threw myself into A.A. Very loving people took me under their wings.' },
      { text: 'After graduation I attended law school. I was sure I would get drunk because "those people weren\'t doing it right!" Driven by fear and conceit, I set out to remake A.A. in my image.' },
      { text: 'After some time my sponsor asked: "These people who aren\'t doing it right, are they staying sober?" I admitted they were. "Now it\'s time for you to listen to figure out how they are staying sober." Slowly but surely, some wisdom and humility began to creep in.' },
      { text: 'I was fortunate to spend time abroad during law school. I have been in meetings in probably a dozen countries and have always been amazed at the message that transcends all differences. There is a solution. Together, we can live soberly, joyously, and freely.' },
      { text: 'I am now thirty-three years old. In one month I will celebrate my fourteenth sober A.A. anniversary. I am surrounded by loving friends. I have reconciled with my parents.' },
      { text: 'I was married shortly after my ninth anniversary. One week before my twelfth anniversary, our son was born. Through him I learned more about unconditional love, the value of wonder, and the sheer joy of being alive.' },
      { text: 'I once knew a woman who was crying before a meeting. She was approached by a five-year-old girl who told her, "You don\'t have to cry here. This is a good place. They took my daddy and they made him better." That is exactly what A.A. did for me.' }
    ]
  }
};