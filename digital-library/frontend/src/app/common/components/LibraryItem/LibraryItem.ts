interface Link {
    href: string;
    type: string;
  }
  
  interface Library {
    type: string;
    id: number;
    name: string;
    links: {
      alternate: Link;
    };
  }
  
  interface Meta {
    createdByUser: {
      id: number;
      username: string;
      name: string;
      links: {
        alternate: Link;
      };
    };
    numChildren: number;
  }
  
  interface Data {
    key: string;
    version: number;
    parentItem?: string;
    itemType: string;
    linkMode: string;
    title: string;
    accessDate: string | any;
    url: string;
    note: string;
    contentType: string;
    charset: string;
    filename: string;
    md5: string;
    mtime: number;
    tags: any[];
    relations: Record<string, any>;
    dateAdded: string;
    dateModified: string;
    collections?: any[];
  }
  
  export interface Item {
    key: string;
    version: number;
    library: Library;
    links: {
      self: Link;
      alternate: Link;
      up?: Link;
      enclosure: {
        type: string;
        href: string;
        title: string;
        length: number;
      };
    };
    meta: Meta;
    data: Data;
    pdfUrl: string;
  }
  
  