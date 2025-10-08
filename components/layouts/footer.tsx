import Link from "next/link";
import { FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <footer className="mt-8">
  <div className="mx-auto w-full max-w-8xl px-6 sm:px-6 py-10">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-16 text-center sm:text-left place-items-center">
      <div className="place-items-center">
        <h4 className="text-xl font-bold">Artza</h4>
        <p className="mt-2 text-sm text-center"><i>Where <b>Vision</b> becomes <b>Masterpiece</b></i></p>
      </div>

      {/* Quick Links */}
      <div className="place-items-center">
        <h5 className="font-semibold">Quick links</h5>
        <ul className="mt-2 space-y-1 text-sm text-center">
          <li><Link href="/home" className="hover:underline">Home</Link></li>
          <li><Link href="/events" className="hover:underline">Events</Link></li>
          <li><Link href="/services" className="hover:underline">Services</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>

      {/* Social Links */}
      <div className="place-items-center">
        <h5 className="font-semibold">Follow</h5>
        <ul className="mt-2 space-y-1 text-sm">
          <li>
            <Link href="https://www.instagram.com/artza_world?igsh=cGZ4c3NmZXJ5cWFp" className="flex items-center justify-center sm:justify-start gap-2 hover:underline">
              <FaInstagramSquare /> Instagram
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center justify-center sm:justify-start gap-2 hover:underline">
              <FaTiktok /> TikTok
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center justify-center sm:justify-start gap-2 hover:underline">
              <FaXTwitter /> X
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="text-center text-sm py-4 border-t">
    &copy; {new Date().getFullYear()} Artza. All rights reserved.
  </div>
</footer>

    )
}

export default Footer;