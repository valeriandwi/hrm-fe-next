import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";
import { THEME } from "@/constants/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HR Management",
  description: "HR Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider theme={THEME}>{children}</ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
