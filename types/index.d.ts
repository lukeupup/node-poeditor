declare module 'node-poeditor' {
  export const projects: {
    list(token: string): Promise<any>;
    add(token: string, name: string, description: string): Promise<any>;
    view(token: string, id: string): Promise<any>;
    update(token: string, id: string, obj: any): Promise<any>;
    sync(token: string, id: string, obj: any): Promise<any>;
    delete(token: string, id: string): Promise<any>;
    export(token: string, id: string, obj: any): Promise<any>;
  };

  export const languages: {
    available(token: string): Promise<any>;
    list(token: string, id: string): Promise<any>;
    add(token: string, id: string, lang: string): Promise<any>;
    delete(token: string, id: string, lang: string): Promise<any>;
  };

  export const terms: {
    list(token: string, id: string, language?: string): Promise<any>;
    add(token: string, id: string, data: any): Promise<any>;
    update(token: string, id: string, data: any): Promise<any>;
    delete(token: string, id: string, data: any): Promise<any>;
  };

  export const contributors: {
    list(token: string, id: string, lang: string): Promise<any>;
    add(token: string, id: string, obj: any): Promise<any>;
    remove(token: string, id: string, obj: any): Promise<any>;
  };
}
