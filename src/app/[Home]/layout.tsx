import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Chatlet",
  description: "Chatlet - Breaking boundaries,Connecting souls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body >{children}</body>
    </html>
  );
}
