import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Image from "next/image";

import styles from "styles/Home.module.scss";
import articleStyles from "styles/Article.module.scss";
import ThumbBox from "@/components/common/ThumbBox";

import ArticleAPI from "../../../../lib/api/article";
import { fetcher } from "../../../../lib/utils/fetcher";
import { SERVER_BASE_URL } from "../../../../lib/utils/constant";
import { IEditorList, IEditor } from "@/lib/type/articleType";

const SectionCLeft = (initialList: any) => {
  const router = useRouter();
  const locale = router.locale as string;

  const { data: fetchedList, error: error } = useSWR(
    `${SERVER_BASE_URL}/${locale}/articles/editors/`,
    fetcher
  );

  console.log(`${SERVER_BASE_URL}/${locale}/articles/editors/`);

  const data: any = fetchedList || initialList;

  return (
    <>
      <div className="col-lg-9">
        <div className="row">
          {data.results && (
            <ul className={articleStyles.thumbBoxTable}>
              {data.results.map(function (object: IEditor, i: number) {
                return (
                  <li className={articleStyles.thumbBox3List} key={i}>
                    <ThumbBox
                      cat={object.category}
                      catSlug={object.category_slug}
                      title={object.title}
                      picURL={object.pic}
                      slug={object.slug}
                      des={null}
                      isLarge={null}
                      customCSS={null}
                      href="article/"
                    />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

SectionCLeft.getInitialProps = async ({ locale }: any) => {
  const { data } = await ArticleAPI.getEditor(locale);
  return data;
};

export default SectionCLeft;
