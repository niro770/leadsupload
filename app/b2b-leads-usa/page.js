import VerticalPage from "../../components/VerticalPage";
import { VERTICALS } from "../../data/verticals";

const v = VERTICALS["b2b-leads-usa"];

export const metadata = {
  title: v.metaTitle,
  description: v.metaDescription,
  keywords: [v.keyword],
  alternates: { canonical: "/b2b-leads-usa" },
  openGraph: { title: v.metaTitle, description: v.metaDescription, type: "website" },
};

export default function Page() {
  return <VerticalPage slug="b2b-leads-usa" />;
}
