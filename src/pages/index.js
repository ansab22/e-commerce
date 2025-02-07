import React from "react";
import HeroBanner from "@/components/home/heroBanner";
import LatestCollection from "@/components/home/latestCollection";
import BestSeller from "@/components/home/bestSeller";
function index() {
  return (
    <>
      <HeroBanner />
      <LatestCollection />
      <BestSeller />
    </>
  );
}

export default index;
