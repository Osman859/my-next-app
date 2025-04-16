import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0">
              <Link href="/" className="inline-block">
                <div className="flex items-center">
                  <div className="text-emerald-500 mr-2">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 16V8C20.9996 7.6493 20.9071 7.30483 20.7315 7.00133C20.556 6.69782 20.3037 6.44539 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44539 3.44398 6.69782 3.26846 7.00133C3.09294 7.30483 3.00036 7.6493 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9987C3.44398 17.3022 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3022 20.7315 16.9987C20.9071 16.6952 20.9996 16.3507 21 16Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span className="text-white text-2xl font-bold">rednsay</span>
                </div>
              </Link>
              <p className="text-gray-500 mt-2">
                © 2024 RednSay Solutions Private Limited.
                <br />
                All rights reserved.
              </p>
            </div>

            <div className="flex items-center mb-8 md:mb-0">
              <div className="flex gap-8">
                <Link
                  href="/contact"
                  className="text-white hover:text-gray-300 transition"
                >
                  Contact
                </Link>
                <Link
                  href="/about"
                  className="text-white hover:text-gray-300 transition"
                >
                  About
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </div>
              
              <a
                href="mailto:contact@rednsay.com"
                className="text-gray-400 hover:text-white transition mt-4"
              >
                contact@rednsay.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;