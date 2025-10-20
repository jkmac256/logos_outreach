import React, { useState, useEffect } from "react";

// Import images
import banner from "../assets/images/banner.png";
import founder from "../assets/images/Sir_Elliot_2.jpg";
import slide1 from "../assets/images/school_1.jpeg";
import slide2 from "../assets/images/school_9.jpg";
import slide3 from "../assets/images/prayer_meeting.jpg";
import program1 from "../assets/images/mission.jpg";
import program2 from "../assets/images/leaders_training.jpg";
import program3 from "../assets/images/prayer_meeting.jpg";
import program4 from "../assets/images/school_9.jpg";
import galler_1 from "../assets/images/gallery_1.jpg";
import gallery_2 from "../assets/images/gallery_2.jpg";
import gallery_3 from "../assets/images/gallery_3.jpg";
import Book_1 from "../assets/books/THE_MIND.pdf";
import Book_2 from "../assets/books/WHY_I_NEED_JESUS.pdf";
import Book_3 from "../assets/books/BE_PURE_PR._ELLIOT_NUWAHA.pdf";

export default function Home() {
  const slides = [
    {
      img: slide1,
      text: "Reaching Schools with the Gospel",
    },
    {
      img: slide2,
      text: "Raising Young Disciples for Christ",
    },
    {
      img: banner,
      text: "Transforming Lives through Prayer",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-white text-[#1E40AF]">

      {/* ===== Hero Slideshow ===== */}
      <div className="relative text-center h-150">
        <div className="relative w-full h-90 md:h-150 overflow-hidden rounded-2xl shadow-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white text-5xl md:text-7xl font-semibold drop-shadow-lg px-4">
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Founder Section ===== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img
              src={banner}
              alt="Pr. Elliot"
              className="w-80 md:w-120 h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="flex justify-center">
            <p className="text-blue max-w-3xl mx-auto mb-8 text-lg sm:text-xl md:text-2xl drop-shadow-md px-4">
              <span className="text-[#FF8C00] font-semibold">LOGOS OUTREACH MINISTRIES:</span> Founded with a passion to reconcile young people to God through Christ — bringing the Gospel of Christ to youth in
              schools and universities. Our heart is to see a generation
              transformed by the Word of God and equipped to influence their
              world with the light of Christ.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Programs Section ===== */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-[#FF8C00] text-center mb-12">
          Our Programs
        </h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            {
              title: "School Outreach",
              img: program1,
              desc: "Reaching schools with the Gospel and nurturing young believers.",
            },
            {
              title: "Discipleship Sessions",
              img: program2,
              desc: "Equipping young people with the Word to live and share Christ.",
            },
            {
              title: "Prayer Meetings",
              img: program3,
              desc: "Gathering believers to seek God’s face and intercede for our generation.",
            },
            {
              title: "University Missions",
              img: program4,
              desc: "Empowering university students to stand for Christ and spread His Word.",
            },
          ].map((program, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={program.img}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#FF8C00] mb-3">
                  {program.title}
                </h3>
                <p className="text-[#1E40AF]/90 leading-relaxed">
                  {program.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/programs"
            className="px-8 py-4 bg-[#FF8C00] text-white rounded-lg shadow-lg hover:bg-[#e67c00] transition"
          >
            Explore Our Programs
          </a>
        </div>
      </section>

      {/* ===== Impact Stories ===== */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-[#FF8C00] text-center mb-12">
          Impact Stories
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[slide1, slide2, slide3].map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={img}
                alt={`Story ${i + 1}`}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-4">
                <p className="text-[#1E40AF]/90 text-lg">
                  Testimonial or story snippet goes here. Highlight the
                  transformation and youth engagement.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Call to Action ===== */}
      <section className="py-20 px-6 bg-[#1E40AF] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg sm:text-xl">
          Partner with us to transform the next generation through discipleship,
          outreach, and the Gospel.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-[#FF8C00] rounded-lg shadow-lg hover:bg-[#e67c00] transition"
        >
          Partner With Us
        </a>
      </section>

      {/* ===== Devotionals (WhatsApp Channel) ===== */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-[#FF8C00] mb-6">Devotionals</h2>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-[#1E40AF]/90 mb-10">
          Our daily devotionals are short, Spirit-filled reflections that help
          you grow in your faith and walk closely with God each day. Join our
          WhatsApp channel to receive today’s devotional, stay encouraged, and
          stay connected with what God is doing through Logos Outreach.
        </p>
        <a
          href="https://whatsapp.com/channel/0029VbBlSTK3GJOuTYZqsd2D"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[#FF8C00] text-white rounded-lg shadow-lg hover:bg-[#e67c00] transition"
        >
          View Today’s Devotional
        </a>
      </section>

      {/* ===== Pr. Elliot’s Books ===== */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-[#FF8C00] mb-6">
          Pr. Elliot’s Writings
        </h2>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-[#1E40AF]/90 mb-12">
          Dive deeper into God’s Word through the inspired writings of Pr.
          Elliot. These books are a rich resource for discipleship, growth, and
          revelation.
        </p>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "The Mind",
              desc: "A powerful insight about the mind.",
              file: Book_1,
            },
            {
              title: "Why i need Jesus",
              desc: "Reasons why you need Jesus daily.",
              file: Book_2,
            },
            {
              title: "Be pure",
              desc: "Revealing the power of Purity.",
              file: Book_3,
            },
          ].map((book, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-6"
            >
              <h3 className="text-2xl font-bold text-[#FF8C00] mb-3">
                {book.title}
              </h3>
              <p className="text-[#1E40AF]/90 mb-4">{book.desc}</p>
              <a
                href={book.file}
                download
                className="inline-block px-6 py-3 bg-[#1E40AF] text-white rounded-lg hover:bg-[#162d7d] transition"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Gallery ===== */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-[#FF8C00] text-center mb-12">
          Gallery
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[galler_1, gallery_2, gallery_3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
