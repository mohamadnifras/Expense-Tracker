import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "../@/components/ui/sonner";


const outfit = Outfit({
  subsets: ["latin"],
});



export const metadata = {
  title: "Expenses-Tracker",
  description: "Track your income and expenses with ease.",
   icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={outfit.className}
        >
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
