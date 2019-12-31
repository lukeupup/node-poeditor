export type FuzzyState = 0 | 1;
export type ProofreadState = 0 | 1;

export interface Term  {
  term: string,
  context?: string,
  plural?: string,
  created?: string,
  updated?: string,
  reference?: string,
  tags?: string[],
  comment?: string,
  translation?: {
    content: string;
    fuzzy?: FuzzyState;
    proofread?: ProofreadState;
    updated?: string;
  }
}

export interface LanguageInfo {
  name: string;
  code: string;
  translations: number;
  percentage: number;
  updated: string;
}

export const projects: {
  list(token: string): Promise<any>;
  add(token: string, name: string, description: string): Promise<any>;
  view(token: string, id: string): Promise<any>;
  update(token: string, id: string, obj: any): Promise<any>;
  sync(token: string, id: string, obj: any): Promise<any>;
  delete(token: string, id: string): Promise<any>;
  export(token: string, id: string, obj: any): Promise<any>;
};

export interface LanguageListResponse {
  languages: LanguageInfo[]
}

export const languages: {
  available(token: string): Promise<any>;
  list(token: string, id: string): Promise<LanguageListResponse>;
  add(token: string, id: string, lang: string): Promise<any>;
  delete(token: string, id: string, lang: string): Promise<any>;
  update(token: string, id: string, lang: string, data: any, fuzzy_trigger?: FuzzyState): Promise<any>;
};

export interface TermListResponse {
  terms: Term[]
}

export const terms: {
  list(token: string, id: string, language?: string): Promise<TermListResponse>;
  add(token: string, id: string, data: Term[]): Promise<any>;
  update(token: string, id: string, data: any): Promise<any>;
  delete(token: string, id: string, data: any): Promise<any>;
};

export const contributors: {
  list(token: string, id: string, lang: string): Promise<any>;
  add(token: string, id: string, obj: any): Promise<any>;
  remove(token: string, id: string, obj: any): Promise<any>;
};