import React from "react";
import Image from "next/image";
import FeatureBlog from "./FeatureBlog";

const FeatureBlogList = () => (
  <>
    <div className="row">
      <div className="col-sm-6">
        <FeatureBlog />
      </div>
      <div className="col-sm-6">
        <FeatureBlog />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6">
        <FeatureBlog />
      </div>
      <div className="col-sm-6">
        <FeatureBlog />
      </div>
    </div>
    <div className="row">
      <div className="col-sm-6">
        <FeatureBlog />
      </div>
      <div className="col-sm-6">
        <FeatureBlog />
      </div>
    </div>
  </>
);

export default FeatureBlogList;
