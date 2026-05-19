import VerticalPage from "../../components/VerticalPage";
import { VERTICALS } from "../../data/verticals";

const v = VERTICALS["insurance-leads"];

export const metadata = {
  title: v.metaTitle,
  description: v.metaDescription,
  keywords: [v.keyword],
  alternates: { canonical: "/insurance-leads" },
  openGraph: { title: v.metaTitle, description: v.metaDescription, type: "website" },
};

export default function Page() {
  return <VerticalPage slug="insurance-leads" />;
}
