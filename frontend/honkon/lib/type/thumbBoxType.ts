export interface ThumbBox {
  cat: string;
  catSlug: string;
  title: string;
  picURL: string;
  slug: string;
  des: string | null;
  isLarge: boolean | null;
}

export interface ThumbBoxWithDes {
  cat: string;
  title: string;
  picURL: string;
  slug: string;
  des: string;
}
