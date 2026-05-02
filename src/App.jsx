import TextType from "./components/TextType/TextType";
import { useState, useEffect } from "react";
import StarBorder from "./components/StarBorder/StarBorder";
import LineWaves from "./components/backgrounds/LineWaves";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import GradientText from "./components/GradientText/GradientText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import CircularGallery from "./components/CircularGallery/CircularGallery";
import { listProyek, listsertif, listTools, listExcel } from "./components/data";
import AOS from "aos";
import "aos/dist/aos.css";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
  console.log("Animation completed!");
};

function App() {
  const [activeTab, setActiveTab] = useState("project");

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 80,
    });
  }, []);

  return (
    <>
      <div className="container max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-20">

        {/* ===== HOME ===== */}
        <div
          className="home relative grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 items-center"
          id="home"
        >
          <div className="fixed inset-0 -z-10">
            <LineWaves
              speed={0.3}
              innerLineCount={32}
              outerLineCount={36}
              warpIntensity={1}
              rotation={-45}
              edgeFadeWidth={0}
              colorCycleSpeed={1}
              brightness={0.2}
              color1="#1ad1c1"
              color2="#00ff83"
              color3="#9a00ff"
              enableMouseInteraction
              mouseInfluence={2}
            />
          </div>

          <div
            className="flex flex-col justify-center items-start p-4 sm:p-6"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <SplitText
              text="Hadi Wiranata"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white pb-2"
              delay={100}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="text-2xl sm:text-3xl md:text-4xl"
            >
              Bachelor of Computer Science in Information Systems
            </GradientText>'
            <div className="text-white mb-8">
            <TextType 
              text={["An Information Systems graduate with a strong foundation in technology and business analysis. Enthusiastic about learning new things and creating practical solutions through the use of information technology."]}
              typingSpeed={2}
              pauseDuration={10000}
              showCursor
              cursorCharacter="_"
              deletingSpeed={100}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
</div>
            <div className="flex space-x-2 flex-wrap">
              <StarBorder 
                as="button" 
                className="custom-class" 
                color="cyan" 
                speed="5s"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/assets/cv/CV_Hadi_wiranata.pdf'; // path file CV kamu
                  link.download = 'CV-Hadi-Wiranata.pdf';
                  link.click();
                }}
              >
                Download CV
              </StarBorder>
              <StarBorder as="button" className="custom-class" color="cyan" speed="5s" button onClick={() => window.location.href = "#project"}>
                Show Project
              </StarBorder>
            </div>
          </div>

          <div
            className="flex justify-center items-center p-4 mx-5 rounded-xl pb-20"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div>
              <ProfileCard
                name="Hadi Wiranata"
                handle="nata_311"
                status="Online"
                contactText="Contact Me"
                avatarUrl="project/fotofoto.jpeg"
                title=" "
                showUser
                Info={true}
                behindGlowColor="rgba(125, 190, 255, 0.67)"
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>
          </div>
        </div>

{/* ===== ABOUT ===== */}
<div className="about py-12 sm:py-20 px-4" id="about">
  <div
    className="w-full max-w-6xl mx-auto bg-zinc-900 rounded-2xl sm:rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    data-aos="fade-up"
    data-aos-duration="900"
  >

    {/* ── MOBILE ── */}
    <div className="flex flex-col md:hidden p-5 gap-4">
      {/* Wrapper yang memotong h-screen dari Lanyard */}
      <div style={{ height: "300px", overflow: "hidden" }}>
        <div style={{ height: "100vh", transform: "scale(0.90)", transformOrigin: "top center", marginBottom: "-68vh", marginTop: "-18vh" }}>
          <Lanyard />
        </div>
      </div>

      <h1 className="text-white text-2xl font-bold text-center">ABOUT</h1>
      <div className="text-white text-xs leading-relaxed text-justify">
        <TextType
          text={["A graduate in Information Systems from Universitas Nusantara PGRI Kediri with a strong passion for technology, data analysis, and business solution development. I have a deep curiosity for how technology can be leveraged to solve real-world problems and improve organizational efficiency. Throughout my academic journey, I have consistently explored and adapted to various tools, platforms, and frameworks to enhance productivity and deliver innovative, data-driven solutions. I possess solid proficiency in Microsoft Office applications, particularly Excel for data processing and analysis, Word for structured and professional documentation, and PowerPoint for creating clear, engaging, and impactful presentations. These skills enable me to transform raw data into meaningful insights and communicate them effectively to different audiences. In addition to my technical capabilities, I have foundational skills in visual editing and digital content creation, allowing me to support both analytical and creative aspects of a project. My experience is built from a combination of academic projects and continuous self-development, where I have actively strengthened my problem-solving abilities, critical thinking, and attention to detail. I am also highly adaptable, able to work both independently and collaboratively within a team environment. I value effective communication, continuous learning, and the ability to quickly adjust to new challenges and technologies. With a strong commitment to personal and professional growth, I am eager to contribute my technological, analytical, and creative skills to an organization, delivering impactful results and adding value in a dynamic professional environment."]}
          typingSpeed={2}
          pauseDuration={100000}
          showCursor
          cursorCharacter="_"
          deletingSpeed={100}
          variableSpeedEnabled={false}
        />
      </div>
      <div className="flex flex-row gap-3">
        <div className="bg-zinc-700 p-3 rounded-xl text-center flex-1">
          <h3 className="text-sm font-bold text-white">Fresh Graduate</h3>
          <p className="text-zinc-300 text-xs">Experience</p>
        </div>
        <div className="bg-zinc-700 p-3 rounded-xl text-center flex-1">
          <h3 className="text-sm font-bold text-white">5+</h3>
          <p className="text-zinc-300 text-xs">Project</p>
        </div>
      </div>
    </div>

    {/* ── DESKTOP ── */}
    <div className="hidden md:flex flex-row items-center">
      {/* Teks kiri */}
      <div className="w-2/3 flex flex-col gap-4 p-8 pl-10">
        <h1
          className="text-white text-4xl font-bold"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          ABOUT
        </h1>
        <div className="text-white text-sm text-justify leading-relaxed">
          <TextType
            text={["A graduate in Information Systems from Universitas Nusantara PGRI Kediri with a strong passion for technology, data analysis, and business solution development. I have a deep curiosity for how technology can be leveraged to solve real-world problems and improve organizational efficiency. Throughout my academic journey, I have consistently explored and adapted to various tools, platforms, and frameworks to enhance productivity and deliver innovative, data-driven solutions. I possess solid proficiency in Microsoft Office applications, particularly Excel for data processing and analysis, Word for structured and professional documentation, and PowerPoint for creating clear, engaging, and impactful presentations. These skills enable me to transform raw data into meaningful insights and communicate them effectively to different audiences. In addition to my technical capabilities, I have foundational skills in visual editing and digital content creation, allowing me to support both analytical and creative aspects of a project. My experience is built from a combination of academic projects and continuous self-development, where I have actively strengthened my problem-solving abilities, critical thinking, and attention to detail. I am also highly adaptable, able to work both independently and collaboratively within a team environment. I value effective communication, continuous learning, and the ability to quickly adjust to new challenges and technologies. With a strong commitment to personal and professional growth, I am eager to contribute my technological, analytical, and creative skills to an organization, delivering impactful results and adding value in a dynamic professional environment."]}
            typingSpeed={2}
            pauseDuration={100000}
            showCursor
            cursorCharacter="_"
            deletingSpeed={100}
            variableSpeedEnabled={false}
          />
        </div>
        <div
          className="flex flex-row gap-4 mt-2"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="bg-zinc-700 p-4 rounded-xl text-center flex-1">
            <h3 className="text-2xl font-bold text-white">Fresh Graduate</h3>
            <p className="text-zinc-300 text-sm">Experience</p>
          </div>
          <div className="bg-zinc-700 p-4 rounded-xl text-center flex-1">
            <h3 className="text-2xl font-bold text-white">5+</h3>
            <p className="text-zinc-300 text-sm">Project</p>
          </div>
        </div>
      </div>

      {/* Lanyard kanan — clip h-screen dengan overflow hidden */}
      <div
        className="w-1/3"
        style={{ height: "420px", overflow: "hidden" }}
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <div style={{ height: "100vh", transform: "scale(0.90)", transformOrigin: "top center", marginTop: "-18vh" }}>
          <Lanyard />
        </div>
      </div>
    </div>

  </div>
</div>

        {/* ===== TOOLS ===== */}
        <div className="tools mt-32 w-full text-white">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl font-bold text-center mb-10"
              data-aos="fade-up"
            >
              Tools
            </h2>
            <p
              className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Applications I use to support my work.
            </p>
            <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 justify-items-center">
              {listTools.map((tool, index) => (
                <div
                  className="flex items-center gap-2 p-3 border-zinc-900 bg-zinc-900 opacity-75 rounded-md hover:bg-zinc-800 border group w-full max-w-sm"
                  key={tool.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <img
                    src={tool.gambar}
                    alt={tool.nama}
                    className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900 rounded"
                  />
                  <div>
                    <h4 className="font-bold">{tool.nama}</h4>
                    <p className="opacity-75 text-sm">{tool.ket}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===== EXPERIENCE ===== */}
        <div className="experience mt-32 w-full text-white" id="experience">
          <div className="max-w-6xl mx-auto">
            <h2
              className="text-3xl font-bold text-center mb-10"
              data-aos="fade-up"
            >
              Experience
            </h2>
            <p
              className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              A collection of my experiences, showcasing my skills in data management, content creation, teamwork, and technical development across various roles.
            </p>
            <div className="grid md:grid-cols-2 gap-6">

              <div
                className="bg-zinc-900 opacity-80 rounded-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-zinc-800 transition"
                data-aos="fade-right"
                data-aos-delay="0"
              >
                <h3 className="text-xl font-bold">Internship at the Department of Housing and Settlement Areas, Kediri City</h3>
                <p className="text-sm text-gray-400">August 1, 2024 – September 1, 2024</p>
                <p className="mt-3 text-sm opacity-80">
                  Performed data entry for apartment (rusun) and cemetery payments using Microsoft Excel, managed and organized administrative databases systematically, developed a simple website for simulating slum area data collection, and supported the preparation of administrative reports with accuracy and timeliness.
                </p>
              </div>

              <div
                className="bg-zinc-900 opacity-80 rounded-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-zinc-800 transition"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <h3 className="text-xl font-bold">Member of KPPS – 2024 General and Regional Elections</h3>
                <p className="text-sm text-gray-400">2024</p>
                <p className="mt-3 text-sm opacity-80">
                  Conducted vote counting and recapitulation at polling stations, managed voter data administration and official documents, used Microsoft Excel for vote calculation and data validation, entered vote counting results into the Sirekap application, and coordinated within the team to ensure accurate and transparent processes.
                </p>
              </div>

              <div
                className="bg-zinc-900 opacity-80 rounded-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-zinc-800 transition"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <h3 className="text-xl font-bold">Streamer & Content Creator – YouTube (EnvyID)</h3>
                <p className="text-sm text-gray-400">2021-Present</p>
                <p className="mt-3 text-sm opacity-80">
                  Created and managed gaming content on YouTube (EnvyID), including gameplay videos and live streaming sessions, performed video editing and content optimization to improve engagement, interacted with audience to build an active community, and consistently uploaded content resulting in growing views and subscribers.
                </p>
              </div>

              <div
                className="bg-zinc-900 opacity-80 rounded-xl p-5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-zinc-800 transition"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <h3 className="text-xl font-bold">Documentation Team – Community Service Program (KKN), Universitas Nusantara PGRI Kediri</h3>
                <p className="text-sm text-gray-400">2025</p>
                <p className="mt-3 text-sm opacity-80">
                  Managed photo and video documentation of activities, served as the director and editor of the After Movie, developed storyboards and organized the content production workflow, and produced a documentation video as the final report of the program.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ===== GALLERY ===== */}
        <div className="porto mt-32 w-full text-white" id="galery">
          <div data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-10">Gallery</h2>
            <div style={{ height: "600px", position: "relative" }}>
              <CircularGallery
                bend={1}
                borderRadius={0.05}
                scrollSpeed={2}
                scrollEase={0.05}
              />
            </div>
          </div>
        </div>

        {/* ===== PORTFOLIO ===== */}
        <div className="porto mt-32 w-full text-white" id="project">
          <div data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-10">Portfolio</h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 text-sm">
              This portfolio contains a collection of my experiences, projects, skills, and certifications.
            </p>
          </div>

          {/* ===== TAB MENU ===== */}
          <div
            className="flex justify-center gap-10 border-b border-zinc-700 mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <button
              onClick={() => setActiveTab("project")}
              className={`pb-2 text-lg font-semibold ${
                activeTab === "project"
                  ? "border-b-2 border-white text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Project Web
            </button>
            <button
              onClick={() => setActiveTab("excel")}
              className={`pb-2 text-lg font-semibold ${
                activeTab === "excel"
                  ? "border-b-2 border-white text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Project MsOffice
            </button>
            <button
              onClick={() => setActiveTab("sertifikasi")}
              className={`pb-2 text-lg font-semibold ${
                activeTab === "sertifikasi"
                  ? "border-b-2 border-white text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Certificate
            </button>
          </div>

          {/* ===== PROJECT ===== */}
          {activeTab === "project" && (
            <div className="porto-box mt-14 grid lg:grid-cols-4 gap-6">
              {listProyek.map((proyek, index) => (
                <div
                  className="p-3 bg-zinc-900 opacity-75 rounded-lg hover:bg-zinc-800 w-full max-w-sm"
                  key={proyek.id}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 80}
                >
                  <img src={proyek.gambar} alt="img" className="w-full bg-zinc-800 p-1 rounded" />
                  <h4 className="font-bold mt-3">{proyek.nama}</h4>
                  <p className="opacity-75 text-sm mt-3">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, i) => (
                      <span key={i} className="text-sm py-1 px-3 bg-zinc-600 rounded-lg mt-2 font-semibold">
                        {tool}
                      </span>
                    ))}
                  </div>
                  {proyek.link && (
                    <a
                      href={proyek.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 bg-zinc-600 rounded-lg p-2 block text-center hover:bg-zinc-700"
                    >
                      Lihat Website
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ===== EXCEL ===== */}
          {activeTab === "excel" && (
            <div className="porto-box mt-14 grid lg:grid-cols-4 gap-6">
              {listExcel.map((item, index) => (
                <div
                  className="p-3 bg-zinc-900 opacity-75 rounded-lg hover:bg-zinc-800 w-full max-w-sm"
                  key={item.id}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 80}
                >
                  <img src={item.gambar} alt="excel" className="w-full bg-zinc-800 p-1 rounded" />
                  <h4 className="font-bold mt-3">{item.nama}</h4>
                  <p className="opacity-75 text-sm mt-3">{item.desk}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 bg-zinc-600 rounded-lg p-2 block text-center hover:bg-zinc-700"
                    >
                      Lihat File Excel
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* ===== SERTIFIKASI ===== */}
          {activeTab === "sertifikasi" && (
            <div className="porto-box mt-14 grid lg:grid-cols-4 gap-6">
              {listsertif.map((sertif, index) => (
                <div
                  className="p-3 bg-zinc-900 opacity-75 rounded-lg hover:bg-zinc-800 w-full max-w-sm"
                  key={sertif.id}
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 80}
                >
                  <img src={sertif.gambar} alt="img" className="w-full bg-zinc-800 p-1 rounded" />
                  <h4 className="font-bold mt-3">{sertif.nama}</h4>
                  <p className="opacity-75 text-sm mt-3">{sertif.desk}</p>
                  {sertif.link && (
                    <a
                      href={sertif.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 bg-zinc-600 rounded-lg p-2 block text-center hover:bg-zinc-700"
                    >
                      Lihat Sertif
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ===== FORM PESAN ===== */}
        <div
          className="Pesan mt-32 text-white"  id="contact"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="w-full max-w-xl mx-auto bg-zinc-900 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-center mb-6">Kirim Pesan</h2>
            <form
              action="https://formspree.io/f/myzbjyqq"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="nama"
                placeholder="Nama Anda"
                className="p-3 rounded-lg bg-zinc-700/60 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Anda"
                className="p-3 rounded-lg bg-zinc-700/60 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400"
                required
              />
              <textarea
                name="pesan"
                placeholder="Tulis pesan Anda..."
                className="p-3 rounded-lg bg-zinc-700/60 border border-zinc-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder-gray-400 h-32 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-zinc-600 hover:bg-zinc-700 text-white font-semibold py-3 rounded-lg transition-all"
              >
                Kirim Pesan
              </button>
            </form>
            <p className="text-sm text-center text-gray-400 mt-4"></p>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;