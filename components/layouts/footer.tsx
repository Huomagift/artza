import Link from "next/link";
import Image from "next/image";
import { FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <footer className="mt-4">
  <div className="mx-auto w-full max-w-8xl px-6 sm:px-6 py-10">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 text-center sm:text-left place-items-center">
      <div className="place-items-center">
        {/* Logo and Tagline */}
        <Image src="/assets/artza-logo-2.png" alt="Artza Logo" width={75} height={75} className="place-items-center" />
        <h4 className="text-2xl font-bold">Artza</h4>
        <p className="mt-2 text-sm text-center"><i>Where <b className="text-amber-500">Vision</b> becomes <b className="text-amber-500">Masterpiece</b></i></p>
      </div>

      {/* Quick Links */}
      <div className="place-items-center">
        <h5 className="font-semibold">Quick links</h5>
        <ul className="mt-2 space-y-1 text-sm text-center">
          <li><Link href="/home" className="hover:underline text-amber-500">Home</Link></li>
          <li><Link href="/" className="hover:underline text-amber-500">Events</Link></li>
          <li><Link href="/services" className="hover:underline text-amber-500">Services</Link></li>
          <li><Link href="/about" className="hover:underline text-amber-500">About</Link></li>
          <li><Link href="/contact" className="hover:underline text-amber-500">Contact</Link></li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="place-items-center">
        <h5 className="font-semibold">Follow</h5>
        <ul className="mt-2 space-y-1 text-sm text-amber-500">
          <li>
            <Link href="https://www.instagram.com/artza_world?igsh=cGZ4c3NmZXJ5cWFp" className="flex items-center justify-center sm:justify-start gap-2 hover:underline">
              <FaInstagramSquare /> Instagram
            </Link>
          </li>
          <li>
            <Link href="https://www.tiktok.com/@artza_world?_t=ZS-90V00KnlhDg&_r=1" className="flex items-center justify-center sm:justify-start gap-2 hover:underline">
              <FaTiktok /> TikTok
            </Link>
          </li>
          <li>
            <Link href="https://wa.me/2349073887686" className="flex items-center justify-center sm:justify-start gap-2 hover:underline">
            <FaWhatsapp /> WhatsApp
            </Link>
          </li>
          <li>
            <Link href="https://x.com/ArtzaOrg?t=2AbC-h_F_EtzC9lnmblyQA&s=09" className="flex items-center justify-center sm:justify-start gap-2 hover:underline">
              <FaXTwitter /> X
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="text-center text-sm py-4 border-t">
    <span className="text-amber-500">&copy;</span> {new Date().getFullYear()} Artza. All rights reserved.
  </div>
</footer>

    )
}

export default Footer;