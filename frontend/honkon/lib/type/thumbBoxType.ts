export interface IThumbBox {
  cat: string;
  catSlug: string;
  title: string;
  picURL: string;
  slug: string;
  des: string | null;
  isLarge: boolean | null;
  customCSS: string | null;
  href?: string;
}

export interface ThumbBoxWithDes {
  cat: string;
  title: string;
  picURL: string;
  slug: string;
  des: string;
}
