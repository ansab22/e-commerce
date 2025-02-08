import React from "react";
import HeroBanner from "@/components/home/heroBanner";
import LatestCollection from "@/components/home/latestCollection";
import BestSeller from "@/components/home/bestSeller";
import CutomerSerPolicy from "@/components/home/CutomerSerPolicy";
import BeforeFoter from "@/components/home/beforeFoter";
function index() {
  return (
    <>
      <HeroBanner />
      <LatestCollection />
      <BestSeller />
      <CutomerSerPolicy />
      <BeforeFoter />
    </>
  );
}

export default index;
