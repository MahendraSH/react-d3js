export interface d3LinkItem {
  to: string;
  label: string;
  id: number;
}

export const d3Links = [
  { to: "/radmon-circle", label: "Randmon Circle", id: 1 },
  { to: "/rain", label: "Rain using Reactangle", id: 2 },
].sort((a, b) => a.id - b.id);
