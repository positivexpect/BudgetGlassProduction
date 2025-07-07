import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shower Door Gallery | Budget Glass",
  description:
    "Browse our collection of custom shower door installations and upload your own project photos.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
