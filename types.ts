export type Auftrag = {
  id: string;
  hof: string;
  arbeit: string;
  feld: string;
  erledigt: boolean;
  rechnung_gestellt: boolean;
  created_at: string;
  updated_at: string;
};

export type NeuerAuftrag = {
  hof: string;
  arbeit: string;
  feld: string;
  erledigt: boolean;
  rechnung_gestellt: boolean;
};

export type Filter = "alle" | "offen" | "erledigt" | "rechnung_offen" | "loeschbereit";
