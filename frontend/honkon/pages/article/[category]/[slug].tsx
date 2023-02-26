import { useRouter } from "next/router";
import Image from "next/image";
import SuggestionBottom from "@/components/article/SuggestionBottom";

import ArticleMeta from "@/components/article/ArticleMeta";

const Article = () => {
  const router = useRouter();
  const slug = router.query.slug as string;

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <ArticleMeta slug={slug} />
          <SuggestionBottom />
        </div>
      </div>
    </div>
  );
};

export default Article;
