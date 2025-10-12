export default function Footer() {
  return (
    <footer className="bg-[#1E40AF] text-white px-6 py-10 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold text-[#FF8C00]">LOGOS OUTREACH</h2>
          <p>Katete Mbarara, PO BOX 420367, Uganda</p>
          <p>
            Email:{" "}
            <a
              href="mailto:logosoutreach08@gmail.com"
              className="text-[#FF8C00]"
            >
              logosoutreach08@gmail.com
            </a>
          </p>
          <p>
            WhatsApp:{" "}
            <a href="tel:+256704849907" className="text-[#FF8C00]">
              +256704849907
            </a>
          </p>
        </div>

        <div className="text-center md:text-right text-gray-300">
          <p>
            © {new Date().getFullYear()} Logos Outreach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
