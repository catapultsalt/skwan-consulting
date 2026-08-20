export const realityCheckSections = [
  {
    title: "Mandate",
    questions: [
      "Can you name the one business metric your AI effort is supposed to move?",
      "Did your last pilot end with a decision, or did it just quietly stop?",
      "Is a single person accountable for the result?",
      "Have you written down what success in 90 days looks like, in numbers?",
      "If your AI budget vanished tomorrow, would anything measurable change?",
    ],
  },
  {
    title: "Data and workflow",
    questions: [
      "Could you export a clean list of customers, deals, or tickets in under ten minutes?",
      "Does the data your AI would need live somewhere it can actually be reached?",
      "Are your core workflows written down anywhere, or do they live in people's heads?",
      "When a process breaks, do you find out from a dashboard or from an angry customer?",
      "Do your tools talk to each other, or do humans re-type between them?",
    ],
  },
  {
    title: "People and adoption",
    questions: [
      'Would your team describe past tool rollouts as "it stuck" or "it faded"?',
      "Has anyone on your team shipped an automation others actually use?",
      "Do you know who on your team quietly uses AI every day already?",
      "Is there room in anyone's week to learn a new way of working?",
      "Does leadership use the tools it asks the team to use?",
    ],
  },
  {
    title: "Follow-through",
    questions: [
      "Do you know what your ten most repeated workflows cost per month in hours?",
      "Can you name what your last software purchase returned, in dollars or hours?",
      "Do you review what's working monthly, or only when something breaks?",
      "Is anyone measuring how fast new customers reach first value?",
      "If a pilot works, do you know what rolling it out would involve?",
    ],
  },
] as const;

export const scoringCopy = [
  "16-20: You're readier than most; the bottleneck is prioritization, and an audit turns readiness into a ranked plan.",
  "10-15: Solid bones, a few load-bearing gaps; fix those first or the pilots will keep stalling.",
  "Below 10: Good news, actually. You now know why past attempts faded, and the fixes are cheaper than another failed pilot.",
] as const;

