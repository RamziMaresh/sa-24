import Preloader from "../components/Preloader";
import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import "./globals.css";
import '@emailjs/browser';


export const metadata = {
  title: {
    template: "Safra - Safra provides better solutions",
    default: "Safra - Safra provides better solutions", // a default is required when creating a template
  },
  description: "Since 1990, Safra is a manufacturer of hydrocarbon solvents having a fully automated refinery located at Yanbu Industrial City on the west coast of Saudi Arabia, and corporate office at Jeddah. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}