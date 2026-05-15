import Image from "next/image";
import MainSlider from "./_components/MainSlider/MainSlider";
import CategorySliderHome from "./_components/CategorySliderHome/CategorySliderHome";
import { getCategory } from "@/api/Category.api";
import Products from "./(pages)/products/page";

export default async function Home() {

  const {data} = await getCategory()

  return (
    <>
    <MainSlider/>
    <CategorySliderHome data={data}/>
    <Products/>
    </>
  );
}
