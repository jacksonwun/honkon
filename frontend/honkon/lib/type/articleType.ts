export interface IArticle {
  cat: string;
  catSlug: string;
  title: string;
  picURL: string;
  slug: string;
}

export interface ICategory {
  category: any;
  description: string;
}

export interface IthumbBox {
  category: string;
  category_slug: string;
  slug: string;
  author: string;
  title:string;  
  caption: string;  
  pic: string;
  isLarge: boolean;
}