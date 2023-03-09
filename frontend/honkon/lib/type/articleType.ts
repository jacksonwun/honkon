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
  title: string;
  caption: string;
  pic: string;
  isLarge: boolean;
}

export interface INewsBox {
  cat: string;
  catSlug: string;
  title: string;
  slug: string;
  timestamp: string;
  index: number;
}

export interface IEditorList {
  results?: any;
}

export interface IEditor {
  category: string;
  category_slug: string;
  slug: string;
  author: string;
  title: string;
  caption: string;
  pic: string;
  isLarge: boolean;
}

export interface IFeatureBlog {
  category: string;
  category_slug: string;
  slug: string;
  author?: string;
  title: string;
  caption?: string;
  pic?: string;
  isLarge?: boolean;
}

export interface CarouselObj {
  title: string;
  description: string;
  url: string;
  alt: string;
}
