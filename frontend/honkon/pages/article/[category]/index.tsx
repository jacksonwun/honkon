import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import ThumbBox from "@/components/common/ThumbBox";
import ThumbBoxWithDes from "@/components/common/ThimbBoxWithDes";
import ThumbBoxLarge from "@/components/common/ThumbBoxLarge";

import styles from "styles/Article.module.scss";

export default function PostPage() {
  const router = useRouter();
  const category = router.query.category as string;
  const APIKey = "681364f2de7f4226ac8dc47d35f283bb";

  const [data, setData] = useState();

  useEffect(() => {
    const getNewsAsync = async () => {
      const resopnse = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=681364f2de7f4226ac8dc47d35f283bb",
        { method: "GET", headers: { "x-api-key": APIKey } }
      );
      const resopnseJson = await resopnse.json();
      console.log("json", resopnseJson);
      if (resopnseJson["status"] == "ok") {
        setData(resopnseJson);
      }
    };
    getNewsAsync();
  }, []);

  console.log(data);

  const ThumbDesHtml = (num: number) => {
    return (
      <ThumbBoxWithDes
        cat={data ? data["articles"][num]["topic"] : ""}
        title={data ? data["articles"][num]["title"] : ""}
        picURL={data ? data["articles"][num]["media"] : ""}
        slug="japan-cancels-cherry-blossom"
        des={data ? data["articles"][num]["excerpt"] : ""}
      />
    );
  };

  const ThumbHtml = (num: number) => {
    return (
      <ThumbBox
        cat={data ? data["articles"][num]["topic"] : ""}
        title={data ? data["articles"][num]["title"] : ""}
        picURL={data ? data["articles"][num]["media"] : ""}
        slug="japan-cancels-cherry-blossom"
      />
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="text-center">
            <h1 className="text-center mt-5">Category List: {category}</h1>
            <p className="text-secondary fs-15">
              This text can be added in the category Description field in
              dashboard
            </p>
          </div>
          <h5 className="text-muted font-weight-medium mb-3">World News</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-7">
          <ThumbBoxLarge
            cat={data ? data["articles"][0]["topic"] : ""}
            title={data ? data["articles"][0]["title"] : ""}
            picURL={data ? data["articles"][0]["media"] : ""}
            slug="japan-cancels-cherry-blossom"
            des={data ? data["articles"][0]["des"] : ""}
          />
        </div>
        <div className="col-lg-5">
          <div className={styles.thumbBoxWithDesList}>{ThumbDesHtml(0)}</div>
          <div className={styles.thumbBoxWithDesList}>{ThumbDesHtml(1)}</div>
          <div className={styles.thumbBoxWithDesList}>{ThumbDesHtml(2)}</div>
          <div className={styles.thumbBoxWithDesList}>{ThumbDesHtml(3)}</div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12">
          <h5 className="text-muted font-weight-medium mb-3">Popular News</h5>
        </div>
      </div>
      <div className="row">
        <ul className={styles.thumbBoxTable}>
          <li className={styles.thumbBoxList}>{ThumbHtml(4)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(5)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(6)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(7)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(8)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(9)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(10)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(11)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(12)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(13)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(14)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(15)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(16)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(17)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(18)}</li>
          <li className={styles.thumbBoxList}>{ThumbHtml(19)}</li>
        </ul>
      </div>
    </div>
  );
}
