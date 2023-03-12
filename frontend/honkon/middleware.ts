import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export const middleware = (request: NextRequest) => {
  const { nextUrl, geo, headers, cookies }: any = request;
  const url = nextUrl.clone();
  const country = geo?.country?.toLowerCase() || "us";
  const language =
    headers
      .get("accept-language")
      ?.split(",")?.[0]
      .split("-")?.[0]
      .toLowerCase() || "en";

  console.log({
    nextLocale: nextUrl.locale,
    pathname: nextUrl.pathname,
    geo: geo,
    cookie: cookies.NEXT_LOCALE,
    clientCountry: country,
    clientLanguage: language,
  });

  try {
    if (PUBLIC_FILE.test(nextUrl.pathname)) {
      return undefined;
    }
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
    if (country === "uk") {
      url.pathname = `/en${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    // Handle the default locale fallback to english
    if (nextUrl.locale === "default") {
      url.pathname = `/en${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    // If everything else falls through continue on with response as normal
    url.pathname = `/en${nextUrl.pathname}`;
    return NextResponse.redirect(url);
  } catch (error) {
    console.log(error);
  }
};

export const config = {
  matcher: ["/", "/about"], // paths on which middleware will work
};
