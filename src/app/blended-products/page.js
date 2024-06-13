import PageBanner from "../../components/PageBanner";
import SafraLayout from "../../layouts/SafraLayout";
import dynamic from "next/dynamic";

const BlendedDetails= dynamic(
    () => import("../../components/isotope/BlendedDetails"),
    {
        ssr: false,
    }
);



const page = () => {
    return (
        <SafraLayout>
            <PageBanner pageName={"Blended Products"} />
            <BlendedDetails />
        </SafraLayout>
    );
};
export default page;
