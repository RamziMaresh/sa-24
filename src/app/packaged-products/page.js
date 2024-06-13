import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import dynamic from "next/dynamic";

const PackagedDetails = dynamic(
  () => import("../../components/isotope/PackagedDetails"),
  {
    ssr: false,
  }
);
const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"Chemplex Products"} />
      <PackagedDetails />
    </SafraLayout>
  );
};
export default page;
