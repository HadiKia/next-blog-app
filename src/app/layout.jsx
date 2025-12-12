import Header from "@/components/header/Header";
import vazirFont from "@/constants/localFont";
import AuthProvider from "@/context/AuthContext";
import { DarkModeProvider } from "@/context/DarkModeContext";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    template: "%s | بلاگ اپ",
    default: "بلاگ اپ",
  },
  description: "وب اپلیکیشن مدیریت بلاگ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="light-mode">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <DarkModeProvider>
          <AuthProvider>
            <Toaster />
            <Header />
            <div className="container xl:max-w-screen-xl mt-6">{children}</div>
          </AuthProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
