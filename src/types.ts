export interface PortfolioCategory {
  id: string;
  name: string;
  enName: string;
  coverImage: string;
  description: string;
  count: number;
}

export interface PortfolioProject {
  id: string;
  categoryId: string;
  categoryName: string;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  area: string;
  coverImage: string;
  gallery: string[];
  client: string;
  architect: string;
  scope: string[];
  systemsUsed: string[];
  materials: string[];
  description: string;
  highlights: string[];
  features: { label: string; value: string }[];
}

export interface MethodCategory {
  id: string;
  name: string;
  enName: string;
  coverImage: string;
  description: string;
  count: number;
}

export interface MethodItem {
  id: string;
  categoryId: string;
  categoryName: string;
  title: string;
  subtitle: string;
  coverImage: string;
  gallery: string[];
  overview: string;
  features: string[];
  specs: { label: string; value: string }[];
  applications: string[];
  constructionSteps: { step: string; title: string; desc: string }[];
  structureDetails: { name: string; desc: string }[];
  applicableMaterials: string[];
}
