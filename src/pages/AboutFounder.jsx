import React from "react";
import Sir_Elliot_2 from "../assets/images/Sir_Elliot_2.jpg";

export default function AboutFounder() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#1E40AF] text-white py-20 text-center h-15">
        <h1 className="text-4xl font-bold h-5">About Pr. Elliot Nuwaha</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Learn more about the visionary who started Logos Outreach Ministry.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Founder Image */}
        <div className="flex justify-center">
          <img
            src={Sir_Elliot_2}
            alt="Founder"
            className="rounded-2xl shadow-lg object-cover w-100 h-150"
          />
        </div>

        {/* Founder Bio */}
        <div>
          <h2 className="text-2xl font-bold text-[#1E40AF] mb-4">
            Pr. Elliot Nuwaha
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-xl">
            Pr. Elliot Nuwaha, the director and lead pastor of Logos Outreach,
            established Logos Outreach with a deep passion for 
            spreading the Gospel and uplifting communities through faith,
            education, and outreach programs. Guided by a vision to empower
            individuals spiritually and practically, the founder has dedicated
            years to building a ministry that serves people across different
            backgrounds.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-xl">
            pr. Eliot holds a Bachelor’s degree in Science and Education, majoring
            in Physics and Mathematics at the high school level, and it is with this
            background in Education, that the founder has been instrumental in
            launching initiatives that focus on youth mentorship, community
            development, and spiritual growth.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4 text-xl">
            He carries a deep passion for the Gospel and has ministered for the last seventeen
            years, beginning from his high school days. He has witnessed the hand
            of God change countless lives, especially among young people filling them with the Holy Spirit, 
            transforming their destinies, and
            using them mightily for His glory.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4 text-xl">
            Eliot Nuwaha, is
            happily married to Scorah Nyamwija, and together they have two
            beautiful daughters — Divine Shalom and Divine Khen Nuwaha — as well
            as many spiritual children.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8 text-xl">
            Today, Logos Outreach continues to grow under this vision, touching
            lives and fostering a legacy of hope, compassion, and
            transformation.
          </p>
         
        </div>
      </div>
    </div>
  );
}
