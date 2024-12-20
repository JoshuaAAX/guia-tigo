
import "./globals.css";
import Homebar from "@/components/Homebar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Homebar/>
        {children}
      </body>
    </html>
  );
}
