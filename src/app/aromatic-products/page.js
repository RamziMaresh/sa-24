import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import dynamic from "next/dynamic";

const AromaticDetails = dynamic(
  () => import("../../components/isotope/AromaticDetails"),
  {
    ssr: false,
  }
);


const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"Aromatic Solvents"} />
      <AromaticDetails />
    </SafraLayout>
  );
};
export default page;
