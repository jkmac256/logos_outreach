import React from "react";

// Import images (replace with your actual image paths)
import banner from "../assets/images/banner.png";
import vision from "../assets/images/vision.jpg";
import mission from "../assets/images/mission.jpg";
import story from "../assets/images/story.jpg";

export default function AboutMinistry() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[#1E40AF] text-white py-20 text-center">
        <img
          src={banner}
          alt="About Logos Outreach"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">About Logos Outreach</h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Discover the heart, mission, and vision of Logos Outreach Ministry.
          </p>
        </div>
      </div>

      {/* About the Ministry Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 text-xl">
        <h2 className="text-4xl font-bold text-[#1E40AF] mb-4">About the Ministry</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <span className="text-[#FF8C00] font-semibold">2 Corinthians 5:18-19</span> — 
          "Now all things are of God, who has reconciled us to Himself through Jesus Christ, 
          and has given us the ministry of reconciliation, that is, that God was in Christ 
          reconciling the world to Himself, not imputing their trespasses to them, and has 
          committed to us the word of reconciliation."
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Logos Outreach, launched in December 2021, is both an outreach and discipleship 
          ministry with a mandate of reaching out to High Schools, Universities, and Families 
          with the Gospel of the Lord Jesus Christ: concerning His death, burial, and resurrection. 
          These discipleships take on three stages:
        </p>
        <ul className="list-decimal list-inside text-gray-700 leading-relaxed mb-4">
          <li>Reaching out to win souls</li>
          <li>Equipping them with the Word of God</li>
          <li>Sending them out to do the works of ministry</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mb-4">
          These outreaches and discipleship classes take place through visiting schools, universities, families, 
          and through social media. We also carry out periodic meetings such as conferences and retreats.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We also have weekly meetings under the church program, namely: Tuesday ministers’ meeting, 
          Friday prayer night, and Sunday service.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#1E40AF] mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-xl">
            Logos Outreach exists to reach young people in high schools, colleges, and universities with the Gospel of Jesus Christ—proclaiming His death, burial, and resurrection. Our mission is rooted in the conviction that the truth of God’s Word has the power to transform lives and inspire young people to live out their faith boldly, wherever God sends them.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={mission}
            alt="Our Mission"
            className="rounded-2xl shadow-lg object-cover w-full h-80"
          />
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <img
            src={vision}
            alt="Our Vision"
            className="rounded-2xl shadow-lg object-cover w-full h-80"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold text-[#1E40AF] mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-xl">
            We envision a generation deeply rooted in Christ, equipped to disciple others, and empowered to carry the message of hope into their communities and beyond. We see young leaders raised up to influence schools, families, and workplaces with integrity and faith, creating ripples of transformation across nations.
          </p>
        </div>
      </div>

      {/* Story / Background Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-[#1E40AF] mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-xl">
            Founded with a passion to reconcile young people to God through Christ, Logos Outreach has grown into a ministry dedicated to evangelism, discipleship, and leadership development. Inspired by <span className="text-[#FF8C00] font-semibold">2 Corinthians 5:18-19</span>, we believe in the ministry of reconciliation and the call to empower students who will disciple others.
          </p>
          <p className="text-gray-700 leading-relaxed text-xl">
            From humble beginnings, Logos Outreach has become a movement that partners with churches, schools, and individuals to equip the next generation to stand firm in the Word and spread the light of Christ everywhere.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={story}
            alt="Our Story"
            className="rounded-2xl shadow-lg object-cover w-full h-80"
          />
        </div>
      </div>
    </div>
  );
}
