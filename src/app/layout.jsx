import vazirFont from "@/constants/localFont";
import AuthProvider from "@/context/AuthContext";
import { DarkModeProvider } from "@/context/DarkModeContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: "وب اپلیکیشن مدیریت بلاگ",
};

export const viewport = {
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "rgb(240, 241, 243)",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "rgb(30, 32, 35)",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <DarkModeProvider>
          <Toaster />
          <ReactQueryProvider>
            <AuthProvider>{children}</AuthProvider>
          </ReactQueryProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
