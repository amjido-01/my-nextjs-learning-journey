// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  auth,
  children,
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div>
      <nav className="border-4 border-red-500">
        <Link href="/login">open modal</Link>
      </nav>
      <div>{auth}</div>
      <div>{children}</div>
    </div>
  );
}
