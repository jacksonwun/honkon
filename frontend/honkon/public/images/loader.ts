const hostname: string = process.env.REACT_APP_AWS_S3_FRONTEND_STATIC_HOSTNAME;

export default function myImageLoader({ src, width, quality }: any) {
  return `https://${hostname}${src}?w=${width}&q=${quality || 75}`;
}
