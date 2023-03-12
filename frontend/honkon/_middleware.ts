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

import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.locale === "en") {
    const locale = req.cookies.get("NEXT_LOCALE")?.value || "en";

    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  }
}

export const config = {
  matcher: ["/", "/about"], // paths on which middleware will work
};
