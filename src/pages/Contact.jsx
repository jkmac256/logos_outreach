export default function Contact() {
  return (
    <div className="bg-white text-[#1E40AF] min-h-screen px-6 py-16 text-center text-2xl">
      <h1 className="text-4xl font-bold text-[#FF8C00] mb-8">
        Contact & Partner
      </h1>

      {/* Google Map Embed */}
      <div className="w-full max-w-4xl h-96 rounded-lg mb-8 mx-auto overflow-hidden border border-[#1E40AF]/20 shadow-md">
        <iframe
          title="Logos Outreach Church Location"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7979.1835787317!2d30.674071045398286!3d-0.6105579975339053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sKatete%20Mbarara%2C%20PO%20BOX%20420367!5e0!3m2!1sen!2suk!4v1761572167566!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <p className="max-w-2xl mx-auto mb-4 text-xl">
        At <span className="font-semibold">Logos Outreach</span>, we believe in 
        building lasting partnerships for the advancement of the Gospel. 
        Whether you have a question, desire to serve alongside us, 
        or want to support our mission, we would love to connect with you.
      </p>

      <p className="mb-2">
        LOGOS OUTREACH • Katete Mbarara, PO BOX 420367, Uganda
      </p>
      <p className="mb-2">
        Email:{" "}
        <a
          href="mailto:logosoutreach08@gmail.com"
          className="text-[#FF8C00] font-medium hover:underline"
        >
          logosoutreach08@gmail.com
        </a>
      </p>
      <p>
        WhatsApp:{" "}
        <a
          href="tel:+256704849907"
          className="text-[#FF8C00] font-medium hover:underline"
        >
          +256704849907
        </a>
      </p>

      <h2 className="text-2xl font-bold text-[#FF8C00] mt-12">
        How to Partner With Us
      </h2>
      <p className="max-w-2xl mx-auto mt-4">
        You can play a vital role in fulfilling the Great Commission with us. 
        Here are a few meaningful ways you can get involved:
      </p>
      <ul className="mt-6 space-y-3 text-lg">
        <li>🙏 Pray with us regularly for students, leaders, and the nation.</li>
        <li>🤝 Volunteer in our evangelism campaigns and discipleship programs.</li>
        <li>💰 Give financially to support the ongoing ministry work.</li>
        <li>🎓 Sponsor a student so they can be reached, equipped, and discipled.</li>
        <li>👥 Support a staff member who is serving full-time in the mission field.</li>
      </ul>

      <p className="max-w-2xl mx-auto mt-10 text-[#1E40AF]/90">
        Every prayer, every gift, and every act of service makes a difference. 
        Together, we can reach this generation with the transforming power of the Gospel of Jesus Christ. 
        Thank you for considering partnering with us!
      </p>
    </div>
  );
}
