// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import acceptLanguage from "accept-language";
// import { fallbackLng, languages } from "./lib/utils/constant";

// acceptLanguage.languages(languages);

// export const config = {
//   matcher: "/:lng*",a
// };

// const cookieName = "i18next";

// export function middleware(req: NextRequest) {
//   let lng;
//   if (req.cookies.has(cookieName))
//     lng = acceptLanguage.get(req.cookies.get(cookieName)?.value);
//   if (!lng) lng = acceptLanguage.get(req.headers.get("Accept-Language"));
//   if (!lng) lng = fallbackLng;

//   if (req.nextUrl.pathname === "/") {
//     return NextResponse.rewrite(new URL(`/${lng}`, req.url));
//   }

//   //   if (req.headers.has("referer")) {
//   //     const refererUrl = new URL(req.headers.get("referer"));
//   //     const lngInReferer = languages.find((l) =>
//   //       refererUrl.pathname.startsWith(`/${l}`)
//   //     );
//   //     const response = NextResponse.next();
//   //     if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
//   //     return response;
//   //   }

//   return NextResponse.next();
// }

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export const middleware = (request: NextRequest) => {
  const { nextUrl, headers } = request;

  // Early return if it is a public file such as an image
  if (PUBLIC_FILE.test(nextUrl.pathname)) {
    return undefined;
  }

  // Get language part of the accept-language header
  const language =
    headers
      .get("accept-language")
      ?.split(",")?.[0]
      .split("-")?.[0]
      .toLowerCase() || "en";

  // Cloned url to work with
  const url = nextUrl.clone();

  if (nextUrl.locale === "uk" && language === "en") {
    url.pathname = `/en${nextUrl.pathname}`;
    return NextResponse.redirect(url);
  }

  return undefined;
};

// export const config = {
//   matcher: ["/", "/about"], // paths on which middleware will work
// };
