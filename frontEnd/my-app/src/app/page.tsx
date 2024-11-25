import Banner from "@/components/banner/banner";
import Promotion from "@/components/promotion/promotion";
import FeatureCar from "@/components/featureCar/featureCar";
import Toped from "@/components/toped/toped";
import FeatureInfo from "@/components/featuresInfo/featureInfo";
import OurService from "@/components/sevicer/ourService";
export default function Home() {
  return (
    <>
      <div className="app">
        <Banner />
        <Promotion />
        <FeatureCar />
        <Toped />
        <FeatureInfo />
        <OurService/>
      </div>
    </>
  );
}
