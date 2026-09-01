export type UseCase = {
  title: string;
  number: string;
  sees: string;
  asks: string;
  understands: string;
  outcome: string;
  status: "Works in v0";
};

export const useCases: UseCase[] = [
  {
    number: "01",
    title: "Vision",
    sees: "A medicine label, sign, diagram, product, or whiteboard.",
    asks: "Read this and explain it simply.",
    understands: "The visible object or text and the spoken request as one interaction.",
    outcome: "Reads, explains, summarizes, or translates what is in view.",
    status: "Works in v0",
  },
  {
    number: "02",
    title: "Memory",
    sees: "A preference, fact, decision, or earlier interaction worth keeping.",
    asks: "Remember that my demo beverage is saffron lemonade.",
    understands: "What should be stored and when that memory becomes relevant later.",
    outcome: "Recalls the fact in a future conversation or forgets it after confirmation.",
    status: "Works in v0",
  },
  {
    number: "03",
    title: "Productivity",
    sees: "A spoken task, meeting note, email request, or calendar intention.",
    asks: "Create a calendar event tomorrow at 5 PM called EDITH demo rehearsal.",
    understands: "The intended action, required details, connected service, and risk level.",
    outcome: "Captures notes, drafts email, or prepares calendar actions for confirmation.",
    status: "Works in v0",
  },
  {
    number: "04",
    title: "Commerce",
    sees: "A food request, grocery need, or restaurant in the user’s surroundings.",
    asks: "Book a table here for two tonight at 8 PM.",
    understands: "The service, restaurant context, time, date, guest count, and confirmation state.",
    outcome: "Searches, prepares the action, and completes it after explicit approval.",
    status: "Works in v0",
  },
  {
    number: "05",
    title: "Orchestration",
    sees: "A visible UI bug, the relevant project, and connected Codex and Gmail agents.",
    asks: "Fix this in Codex and email me the summary.",
    understands: "The visual issue, coding task, project context, agent sequence, and approval state.",
    outcome: "Delegates the fix, prepares the summary, and reports the workflow result through EDITH.",
    status: "Works in v0",
  },
];
