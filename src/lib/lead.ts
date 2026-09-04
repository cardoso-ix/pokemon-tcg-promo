export const LEAD_STORAGE_KEY = "tcgLead";

export const buyOptions = [
  { value: "booster", label: "Booster" },
  { value: "box", label: "Box" },
  { value: "singles", label: "Singles" },
  { value: "etb", label: "ETB" },
  { value: "acessorios", label: "Acessórios" },
] as const;

export type LeadStatus = "quente" | "frio";

export type LeadResult = {
  status: LeadStatus;
  groupUrl?: string;
};
