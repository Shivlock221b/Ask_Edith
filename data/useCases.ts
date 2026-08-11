export type UseCase = {
  title: string;
  number: string;
  sees: string;
  asks: string;
  understands: string;
  outcome: string;
  status: "Works in v0" | "Exploring" | "Future";
};

export const useCases: UseCase[] = [
  {
    number: "01",
    title: "Objects",
    sees: "An unfamiliar connector on a workbench.",
    asks: "What is this connector used for?",
    understands: "The object in view and the spoken question belong together.",
    outcome: "Explains the connector using visual context.",
    status: "Works in v0",
  },
  {
    number: "02",
    title: "Learning",
    sees: "A diagram, machine, or physical object.",
    asks: "Explain this to me.",
    understands: "What “this” refers to without a long description.",
    outcome: "Turns the surrounding world into learning context.",
    status: "Works in v0",
  },
  {
    number: "03",
    title: "Accessibility",
    sees: "A path, room, object, or obstacle ahead.",
    asks: "What’s in front of me?",
    understands: "The relevant visual scene around the user.",
    outcome: "Describes the visual context through audio.",
    status: "Exploring",
  },
  {
    number: "04",
    title: "Shopping",
    sees: "Several products on a shelf.",
    asks: "Which one is better for me?",
    understands: "Which physical products are being discussed.",
    outcome: "Could compare options against personal constraints.",
    status: "Future",
  },
  {
    number: "05",
    title: "Restaurant",
    sees: "A restaurant across the street.",
    asks: "Can you book this place for four tonight?",
    understands: "Which restaurant “this place” refers to.",
    outcome: "Could hand context to a booking agent.",
    status: "Future",
  },
];
