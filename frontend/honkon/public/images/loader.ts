import { hostname } from "@/lib/utils/constant";

export default function myImageLoader({ src, width, quality }: any) {
  return `https://${hostname}${src}?w=${width}&q=${quality || 75}`;
}
