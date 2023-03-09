import React from "react";
import Image from "next/image";

import stylesFeatureBlog from "styles/home/feature/featureblog.module.scss";
import { IFeatureBlog } from "@/lib/type/articleType";
import Link from "next/link";
import styles from "styles/Home.module.scss";

const FeatureBlog = ({
  title,
  slug,
  category_slug,
  category,
  author,
}: IFeatureBlog) => (
  <Link href={`article/${category}/${slug}`} className={styles.noDecoration}>
    <div className={stylesFeatureBlog.box}>
      <p className={stylesFeatureBlog.title}>{title}</p>
      <div className={stylesFeatureBlog.info}>
        <span className="fs-12 text-muted">2 Hours ago</span>
        {author && (
          <div>
            <Image
              src="/assets/images/dashboard/Profile_1.jpg"
              className={stylesFeatureBlog.image}
              alt="Avatar"
              width={150}
              height={150}
            />
            <span className="fs-12 text-muted">{author}</span>
          </div>
        )}
      </div>
    </div>
  </Link>
);

export default FeatureBlog;
