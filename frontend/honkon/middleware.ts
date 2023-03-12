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
  // Get the information we need from the request object
  const { nextUrl, geo, headers, cookies }: any = request;
  // Cloned url to work with
  const url = nextUrl.clone();
  // Client country, defaults to us
  const country = geo?.country?.toLowerCase() || "us";
  // Client language, defaults to en
  const language =
    headers
      .get("accept-language")
      ?.split(",")?.[0]
      .split("-")?.[0]
      .toLowerCase() || "en";

  // // Helpful console.log for debugging
  // console.log({
  //   nextLocale: nextUrl.locale,
  //   pathname: nextUrl.pathname,
  //   cookie: cookies.NEXT_LOCALE,
  //   clientCountry: country,
  //   clientLanguage: language,
  // });

  try {
    // Early return if it is a public file such as an image
    if (PUBLIC_FILE.test(nextUrl.pathname)) {
      return undefined;
    }
    // Early return if this is an api route
    if (nextUrl.pathname.includes("/api")) {
      return undefined;
    }

    // Early return if we are on a locale other than default
    if (nextUrl.locale !== "default") {
      return undefined;
    }

    // Early return if there is a cookie present and on default locale
    if (cookies.NEXT_LOCALE && nextUrl.locale === "default") {
      url.pathname = `/${cookies.NEXT_LOCALE}${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    // Redirect All France
    if (country === "zh-hk") {
      url.pathname = `/zh-hk${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    // Redirect all Great Britain
    if (language === "uk") {
      url.pathname = `/en${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    // Handle the default locale fallback to english
    if (nextUrl.locale === "default") {
      url.pathname = `/en${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    // If everything else falls through continue on with response as normal
    return undefined;
  } catch (error) {
    console.log(error);
  }
};

// export const config = {
//   matcher: ["/", "/about"], // paths on which middleware will work
// };
