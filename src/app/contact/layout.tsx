import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Budget Glass Company",
  description:
    "Contact Budget Glass Company for all your glass repair and replacement needs in Richmond. Available 24/7 for emergency service.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
