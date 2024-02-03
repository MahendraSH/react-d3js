export interface d3LinkItem {
  to: string;
  label: string;
  id: number;
}

export const d3Links = [
  { to: "/radmon-circle", label: "Randmon Circle", id: 1 },
  { to: "/rect-lines", label: "react x and y  lines using Reactangle", id: 2 },
  { to: "/grid-d3", label: "Grid using react", id: 3 },
  { to: "/rain", label: "Rain using Reactangle", id: 4 },
].sort((a, b) => a.id - b.id);
