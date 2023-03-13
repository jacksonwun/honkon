import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export const middleware = (request: NextRequest) => {
  const { nextUrl, geo, headers, cookies }: any = request;
  const url = nextUrl.clone();
  const country = geo?.country?.toLowerCase() || "uk";
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
    if (nextUrl.locale !== "default") {
      return undefined;
    }

    if (cookies.NEXT_LOCALE && nextUrl.locale === "default") {
      url.pathname = `/${cookies.NEXT_LOCALE}${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    if (country === "zh-hk") {
      url.pathname = `/zh-hk${nextUrl.pathname}`;
      return NextResponse.redirect(url);
    }

    url.pathname = `/en${nextUrl.pathname}`;
    return NextResponse.redirect(url);
  } catch (error) {
    console.log(error);
  }
};

export const config = {
  matcher: ["/", "/about"], // paths on which middleware will work
};
