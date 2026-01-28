import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    about: [
      { label: "About Us", href: "#about" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Blog", href: "#blog" },
    ],
    paths: [
      { label: "Delivery & Logistics", href: "#paths" },
      { label: "Warehouse & Operations", href: "#paths" },
      { label: "Customer Support", href: "#paths" },
      { label: "Data & Admin", href: "#paths" },
    ],
    support: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact Us", href: "#contact" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  };

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">GigPath</h3>
            <p className="text-gray-400 mb-4">
              Career navigation for gig workers
            </p>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Paths Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Career Paths</h3>
            <ul className="space-y-2">
              {footerLinks.paths.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#linkedin"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400">
              <a
                href="mailto:hello@gigpath.com"
                className="hover:text-white transition-colors"
              >
                hello@gigpath.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© 2026 GigPath. Made with ❤️ for India's gig workers.</p>
        </div>
      </div>
    </footer>
  );
}
