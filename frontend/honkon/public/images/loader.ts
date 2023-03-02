const hostname: string = process.env.NEXT_AWS_S3_FRONTEND_STATIC_HOSTNAME;

export default function myImageLoader({ src, width, quality }: any) {
  return `https://${hostname}${src}?w=${width}&q=${quality || 75}`;
}
