import { ShareDataProvider } from "@/context/ShareDataContext";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/public/assets/fonts/fontawesome/css/all.min.css";
import "@/public/assets/fonts/flaticon/flaticon.css";
import "@/components/common/NiceSelect/NiceSelect.css";
import "@/public/assets/css/animate.css";
import "@/public/assets/css/splitting.css";
import "@/public/assets/css/style.css";
import "@/public/assets/css/responsive.css";

export const metadata = {
  title: "MedDoctors - Medical & Health Next.js Template",
  keywords:
    "MedDoctors, clinic, corona, dental, dentist, doctor, health, health care, healthcare, hospital, medical, medical care, medicine, pharmacy, physician, surgeon",
  description:
    "MedDoctors is a Medical & Health Next.js Template. Designed with great attention to details, flexibility and performance. It is ultra professional, smooth and sleek, with a clean modern layout. MedDoctors specially designed for Medical, Doctor, Health, Health Care, Healthcare, Hospital, Medical Care, Medicine, Dental, Dentist, Pharmacy and other Medical & Health related services. MedDoctors comes with most advanced and latest web technologies, enjoyable UX and the most beautiful design trends. Our template provides a platform to simply edit elements, choose styles and play around with the look and feel of your site!!. Build beautiful, intelligent websites with over 03+ Homepage Concepts ready to go or combine, build a layout has never been easier. There is a huge range of +31 styled pages waiting for your customization, anything you can think of can be built with our template. If you are searching for innovative, modern and clean Next.js template, you must choose MedDoctors. MedDoctors comes with necessary features and pages such as Medical, Health, Doctor, Dentist and more. MedDoctors comes with necessary features for Medical & Health websites such as about pages, Testimonials, Clients, questions & answers, gallery, Departments, Doctor & single Doctor profiles, awesome blog pages and more. This Next.js template can easily satisfy all of your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ShareDataProvider>{children}</ShareDataProvider>
      </body>
    </html>
  );
}
