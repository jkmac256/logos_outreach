import React from "react";

import banner from "../assets/images/banner.png";
import school_1 from "../assets/images/school_1.jpeg";
import prayer_meeting from "../assets/images/prayer_meeting.jpg";
import leaders_training from "../assets/images/leaders_training.jpg";
import mission from "../assets/images/mission.jpg";
import school_9 from "../assets/images/school_9.jpg";
import Sir_Elliot_1 from "../assets/images/Sir_Elliot_1.jpg";
import Sir_Elliot_5 from "../assets/images/Sir_Elliot_5.jpg";

const programs = [
  {
    title: "High School Ministry",
    desc: "Weekly Bible studies, sharing Christ, and mentorship in schools. We intentionally walk alongside students during their most formative years, helping them build strong foundations of faith and character. Through mentorship, discipleship, and encouragement, we inspire them to become godly leaders who can influence their schools and communities with the love of Christ.",
    img: school_1,
    width: "w-[800px]",
    height: "h-[full]",
  },
  {
    title: "Campus Ministry",
    desc: "Bible studies for university students, deepening their walk with Christ. This ministry provides a safe space for students to wrestle with questions of faith, identity, and purpose while being equipped with biblical truth. By engaging young adults in meaningful fellowship and outreach, we raise leaders who will not only excel academically but also stand boldly as witnesses for Jesus in their universities and beyond.",
    img: school_9,
    width: "w-[600px]",
    height: "h-[480px]",
  },
  {
    title: "Bible Studies",
    desc: "Encouraging personal Bible reading through reading plans. Our Bible studies are designed to help young people cultivate a hunger for God’s Word, giving them the tools and accountability to read and apply Scripture in their daily lives. By creating communities of study and discussion, we nurture believers who are deeply rooted in the Word and able to live out their faith with confidence.",
    img: Sir_Elliot_1,
    width: "w-[580px]",
    height: "h-[650px]",
  },
  {
    title: "Holiday Maker’s Retreats",
    desc: "Youth camps with Bible quizzes, games, and fellowship. These retreats offer young people a chance to step away from daily routines and encounter God in a refreshing environment. With a blend of spiritual teaching, fun activities, worship, and bonding, the retreats strengthen friendships and encourage youth to return home with renewed vision, passion, and commitment to Christ.",
    img: mission,
    width: "w-[820px]",
    height: "h-[370px]",
  },
  {
    title: "Leaders Trainings",
    desc: "Equipping leaders to disciple others. Through our leadership programs, we intentionally raise disciples who are able to disciple others, multiplying impact in schools, universities, churches, and communities. The training focuses on character development, servant leadership, practical ministry skills, and biblical knowledge, ensuring that leaders are both spiritually mature and practically equipped.",
    img: leaders_training,
    width: "w-[540px]",
    height: "h-[380px]",
  },
  {
    title: "Weekly Devotional",
    desc: "Weekly devotionals distributed in schools and colleges. These devotionals are simple but powerful tools that provide spiritual nourishment, encouragement, and guidance to students throughout the week. They are written to be relatable and practical, helping readers reflect on biblical truths and apply them to real-life challenges they face as young people in today’s world.",
    img: Sir_Elliot_5,
    width: "w-[380px]",
    height: "h-[560px]",
  },
  {
    title: "Prayer Meetings",
    desc: "Friday night gatherings to pray for personal needs, families, and the nation. These meetings are a vital part of our ministry, where we unite in seeking God’s presence and power. In an atmosphere of worship and intercession, we believe God not only answers prayers but also transforms hearts, revives communities, and raises young people who stand in the gap for their generation.",
    img: prayer_meeting,
    width: "w-[420px]",
    height: "h-[580px]",
  },
];

export default function Programs() {
  return (
    <div className="bg-white text-[#1E40AF] min-h-screen px-6 py-16">
      <h1 className="text-4xl font-bold text-[#FF8C00] text-center mb-6">
        Our Programs
      </h1>
      <p className="max-w-4xl mx-auto text-center mb-12 text-[#1E40AF]/90 text-2xl">
        Through our programs, we create spaces where students and young people
        can encounter Christ, grow in discipleship, and be equipped for
        leadership. Each initiative is designed to meet young people where they
        are—whether in schools, universities, retreats, or prayer gatherings—
        and guide them into a deeper relationship with Jesus. These programs are
        not just events or activities, but intentional avenues where lives are
        transformed, faith is strengthened, and future leaders are raised.
      </p>

      {/* Alternating Program Layouts */}
      <div className="max-w-6xl mx-auto space-y-20">
        {programs.map((p, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              i % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-[#FF8C00] mb-4">
                {p.title}
              </h2>
              <p className="text-[#1E40AF]/90 leading-relaxed text-2xl">
                {p.desc}
              </p>
            </div>

            {/* Image Section */}
            <div className={`flex-1 flex justify-center`}>
              <img
                src={p.img}
                alt={p.title}
                className={`${p.width} ${p.height} object-cover rounded-2xl shadow-lg border border-gray-200`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
