import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import dynamic from "next/dynamic";

const AliphaticDetails = dynamic(
  () => import("../../components/isotope/AliphaticDetails"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <SafraLayout>
      <PageBanner pageName={"Aliphatics"} />
      <AliphaticDetails />
    </SafraLayout>
  );
};
export default page;
