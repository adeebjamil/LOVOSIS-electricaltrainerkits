import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Trainer Kits - Lab Equipment",
  description:
    "Browse our complete range of electrical trainer kits including Basic Electrical, Power Electronics, PLC Training, Motor Control, and more. Industrial-grade lab equipment.",
  openGraph: {
    title: "Electrical Trainer Kits | Lovosis Technology",
    description:
      "Bridge the gap between theory and practice with our state-of-the-art laboratory equipment designed for modern engineering education.",
    type: "website",
  },
};

export default function ElectricalTrainerKitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
