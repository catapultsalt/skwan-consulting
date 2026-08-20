export type FAQItem = {
  question: string;
  answer: string;
};

export const homeFaqs: FAQItem[] = [
  {
    question: "Do we need to be technical?",
    answer:
      "No. Most of my clients aren't. I build in tools your team can run, I document everything, and training is part of every engagement. The goal is that you don't need me forever.",
  },
  {
    question: "Which AI tools do you use?",
    answer:
      'Whichever ones fit your stack, your data, and your budget. I sell outcomes, not software, and I have no reseller deals. Sometimes the right call in an audit is "don\'t buy anything yet." I\'ll tell you that too.',
  },
  {
    question: "How fast do we see results?",
    answer:
      'One automation ships during the two-week audit. Sprints ship working systems in 30 days. If a proposal ever says "phase one, quarter three," run.',
  },
  {
    question: "Why not hire someone full time?",
    answer:
      "Eventually, maybe you should, and I'll help you scope the role. But a full-time senior hire is $150K+ plus ramp time. Most companies your size need the system first and the headcount later.",
  },
  {
    question: "Will AI replace my team?",
    answer:
      "Not the way I build it. The wins come from removing the repetitive 30 percent of everyone's week so the humans do more of the work customers actually pay for.",
  },
  {
    question: "Who does the work?",
    answer:
      "I do. No juniors, no handoffs, no offshore bench. That's also why I only take four clients at a time.",
  },
];

export const auditFaqs: FAQItem[] = [
  {
    question: "What do you need from us?",
    answer:
      "About four hours of your team's time across two weeks, read access to the relevant tools, and straight answers in the interviews. That's it.",
  },
  {
    question: "What if we already started with AI?",
    answer:
      "Even better. Half of every audit is figuring out what to stop. Sunk pilots are data, not embarrassment.",
  },
  {
    question: "Is our data safe?",
    answer:
      "Access is least-privilege and read-only wherever possible, everything runs in accounts you own, and a confidentiality clause is standard in the agreement. You can revoke my access in one click the day we're done.",
  },
  {
    question: "What happens after?",
    answer:
      "You'll have a roadmap you can run yourself, hand to your team, or hire me to execute in 30-day sprints. Around half of audit clients continue; the roadmap is priced so it stands alone either way.",
  },
];

export const fitFor = [
  "You have real customers and real revenue ($1M to $50M)",
  "You're done with AI theater and want something running this quarter",
  "Retention, expansion, or pipeline is on your goals doc",
  "You'd rather own a system than rent an agency",
];

export const notFor = [
  "Pre-revenue or pre-product",
  "You want a strategy deck, not working software",
  "You need regulated, formal ML engineering (I'll refer you to people who do that well)",
  "You're looking for the cheapest pair of hands",
];

