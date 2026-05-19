import VerticalPage from "../../components/VerticalPage";
import { VERTICALS } from "../../data/verticals";

const v = VERTICALS["business-loan-leads"];

export const metadata = {
  title: v.metaTitle,
  description: v.metaDescription,
  keywords: [v.keyword],
  alternates: { canonical: "/business-loan-leads" },
  openGraph: { title: v.metaTitle, description: v.metaDescription, type: "website" },
};

export default function Page() {
  return <VerticalPage slug="business-loan-leads" />;
}
