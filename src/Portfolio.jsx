import React, { useState } from "react";
import { X, Minimize2, Maximize2 } from "lucide-react";

const TerminalPortfolio = () => {
  const [openWindow, setOpenWindow] = useState(null);
  const [minimized, setMinimized] = useState({});

  const windows = {
    about: {
      title: "about",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/164544390?v=4"
              className="rounded-full w-24 h-24 border-2 border-green-500"
              alt="Profile"
            />
            <div>
              <h3 className="text-xl font-bold text-green-400">Lei Zhang</h3>
              <p className="text-green-500">Full-Stack Developer</p>
            </div>
          </div>
          <p className="text-green-400 leading-relaxed">
            I'm a Master of Science student in Information Systems at
            Northeastern University with a background in Computational Media and
            hands-on experience in full-stack web development. I'm especially
            interested in contributing to projects that combine technology,
            creativity, and data to make a meaningful impact on users and
            communities.
          </p>
        </div>
      ),
    },
    skills: {
      title: "skills",
      content: (
        <div className="space-y-4">
          {" "}
          <div class="skills">
            <div class="skills__row">
              <div class="skills__item skills__item--html skills__item-fade-in">
                <img
                  src="https://www.svgrepo.com/show/303206/javascript-logo.svg"
                  alt=""
                />
                <div class="skills__item-name">JAVASCRIPT</div>
              </div>
              <div class="skills__item skills__item-fade-in">
                <img
                  src="https://www.svgrepo.com/show/373669/html.svg"
                  alt=""
                />
                <div class="skills__item-name">HTML</div>
              </div>
              <div class="skills__item skills__item-fade-in">
                <img
                  src="https://www.svgrepo.com/show/354200/postgresql.svg"
                  alt=""
                />
                <div class="skills__item-name">POSTGRESQL</div>
              </div>
            </div>
            <div class="skills__row">
              <div class="skills__item skills__item-fade-in">
                <img
                  src="https://www.svgrepo.com/show/452092/react.svg"
                  alt=""
                />
                <div class="skills__item-name">REACT</div>
              </div>
              <div class="skills__item skills__item-fade-in">
                <img
                  src="https://www.svgrepo.com/show/354298/ruby.svg"
                  alt=""
                />
                <div class="skills__item-name">RUBY</div>
              </div>
              <div class="skills__item skills__item-fade-in">
                <img
                  src="https://www.svgrepo.com/show/376345/rails.svg"
                  alt=""
                />
                <div class="skills__item-name">RAILS</div>
              </div>
              <div class="skills__item skills__item-fade-in">
                <img
                  src="https://www.svgrepo.com/show/355140/node.svg"
                  alt=""
                />
                <div class="skills__item-name">NODE.JS</div>
              </div>
            </div>
            <div class="skills__row">
              <div class="skills__item skills__item-fade-in">
                <img
                  src="https://www.svgrepo.com/show/303600/typescript-logo.svg"
                  alt=""
                />
                <div class="skills__item-name">TYPESCRIPT</div>
              </div>
              <div class="skills__item skills__item-fade-in">
                <img
                  src="https://www.svgrepo.com/show/452185/css-3.svg"
                  alt=""
                />
                <div class="skills__item-name">CSS</div>
              </div>
              <div class="skills__item skills__item-fade-in">
                <img src="https://www.svgrepo.com/show/452210/git.svg" alt="" />
                <div class="skills__item-name">GIT</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    projects: {
      title: "projects",
      content: (
        <div className="space-y-6">
          <div className="border border-green-500/30 p-4 rounded">
            <h3 className="text-green-400 font-bold mb-2">
              KanjAI - AI-Powered Kanji Learning Platform
            </h3>
            <p className="text-green-500/80 text-sm mb-3">
              Built with React, TypeScript, Node.js, Express, and PostgreSQL.
              Features AI-generated kanji mnemonics, SRS scheduling, EXP
              leveling, and an interactive AI chat bot.
            </p>
            <div className="flex gap-2">
              <a
                href="https://kanjai-frontend.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-green-500 px-2 py-1 hover:bg-green-500/20"
              >
                [ live app ]
              </a>
              <a
                href="https://github.com/Mauoser/Kanjai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-green-500 px-2 py-1 hover:bg-green-500/20"
              >
                [ github ]
              </a>
            </div>
          </div>

          <div className="border border-green-500/30 p-4 rounded">
            <h3 className="text-green-400 font-bold mb-2">
              Intervy - AI Interview Coach
            </h3>
            <p className="text-green-500/80 text-sm mb-3">
              Built with React, TypeScript, Vite, Shadcn UI, and TailwindCSS.
              Provides personalized interview practice with real-time feedback.
            </p>
            <div className="flex gap-2">
              <a
                href="https://youtu.be/D2I2us_6M2c?si=zYVilhDeq9dQF2ui&t=52"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-green-500 px-2 py-1 hover:bg-green-500/20"
              >
                [ live app ]
              </a>
              <a
                href="https://github.com/Mauoser/bunpofy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-green-500 px-2 py-1 hover:bg-green-500/20"
              >
                [ github ]
              </a>
            </div>
          </div>

          <div className="border border-green-500/30 p-4 rounded">
            <h3 className="text-green-400 font-bold mb-2">
              bunpofy - Language Learning
            </h3>
            <p className="text-green-500/80 text-sm mb-3">
              Full-stack platform with interfaces for teachers and students.
              Features AI-powered assistant for custom games and feedback.
            </p>
            <div className="flex gap-2">
              <a
                href="https://youtu.be/D2I2us_6M2c?si=zYVilhDeq9dQF2ui&t=52"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-green-500 px-2 py-1 hover:bg-green-500/20"
              >
                [ demo ]
              </a>
              <a
                href="https://github.com/Mauoser/bunpofy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-green-500 px-2 py-1 hover:bg-green-500/20"
              >
                [ github ]
              </a>
            </div>
          </div>
          <div className="border border-green-500/30 p-4 rounded">
            <h3 className="text-green-400 font-bold mb-2">
              Movie Catalog - Interactive Movie Browser
            </h3>
            <p className="text-green-500/80 text-sm mb-3">
              Built with React, React Router, Vite, Tailwind CSS, and Appwrite.
              Fetches latest movies from an external API. Features a dynamic
              trending section that mimics Netflix-style popularity by tracking
              real user searches through Appwrite's backend.
            </p>

            <div className="flex gap-2">
              <a
                href="https://movie-catalog-er64.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-green-500 px-2 py-1 hover:bg-green-500/20"
              >
                [ live app ]
              </a>
              <a
                href="https://github.com/Mauoser/bunpofy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs border border-green-500 px-2 py-1 hover:bg-green-500/20"
              >
                [ github ]
              </a>
            </div>
          </div>
        </div>
      ),
    },
    contact: {
      title: "contact",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-green-500">$ location --current</p>
            <div class="pl-4 flex items-center gap-2 text-gray-300">
              <svg
                class="w-4 h-4 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Boston, MA
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-green-500">$ contact --email</p>
            <a
              href="mailto:zhang.l5@northeastern.edu"
              class="inline-flex items-center gap-3 px-4 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 21 21">
                <path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z" />
              </svg>
              zhang.l5@northeastern.edu
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-green-500">$ cat resume.pdf</p>
            <a
              href="Lei Zhang Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-3 bg-green-500/10 text-green-400 rounded-lg border border-green-500/20 hover:bg-green-500/20 transition-colors"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"></path>
              </svg>
              Download Resume
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-green-500">$ ls ./social-links</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <a
                href="https://github.com/Mauoser"
                target="_blank"
                class="flex items-center gap-3 px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
              >
                <div class="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                  <svg
                    class="w-6 h-6 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-200">GitHub</p>
                  <p class="text-gray-400">@Mauoser</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/zenrei/"
                target="_blank"
                class="flex items-center gap-3 px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors border border-gray-700/50 group"
              >
                <div class="p-2 bg-gray-700/50 rounded-lg group-hover:bg-gray-600/50 transition-colors">
                  <svg
                    class="w-6 h-6 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-200">LinkedIn</p>
                  <p class="text-gray-400">Lei Zhang</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      ),
    },
  };

  const openPopup = (windowKey) => {
    setOpenWindow(windowKey);
    setMinimized((prev) => ({ ...prev, [windowKey]: false }));
  };

  const closePopup = () => {
    setOpenWindow(null);
  };

  const toggleMinimize = () => {
    if (openWindow) {
      setMinimized((prev) => ({ ...prev, [openWindow]: !prev[openWindow] }));
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-green-400 font-mono p-4 overflow-hidden">
      {/* Scanline effect */}
      <div className="scanline pointer-events-none"></div>

      {/* CRT overlay */}
      <div className="overlay pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div className="border border-green-500 bg-black/80 backdrop-blur-sm mb-6">
          <div className="flex items-center gap-2 bg-black/50 backdrop-blur-lg border px-3 py-2 border-b border-green-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-sm">lei_zhang@portfolio:~</span>
          </div>

          <div className="bg-black/50 backdrop-blur-lg border border-green-500 p-6">
            <div className="mb-6">
              <p className="text-green-500 mb-2">$ whoami</p>
              <h1 className="text-4xl font-bold mb-2">Lei Zhang</h1>
              <p className="text-green-500">Full-Stack Developer</p>
            </div>

            <div className="mb-4">
              <p className="text-green-500 mb-2">$ cd navigation/</p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => openPopup("about")}
                  className="px-4 py-2 border border-green-500 hover:bg-green-500/20 transition-colors"
                >
                  [ about ]
                </button>
                <button
                  onClick={() => openPopup("skills")}
                  className="px-4 py-2 border border-green-500 hover:bg-green-500/20 transition-colors"
                >
                  [ skills ]
                </button>

                <button
                  onClick={() => openPopup("projects")}
                  className="px-4 py-2 border border-green-500 hover:bg-green-500/20 transition-colors"
                >
                  [ projects ]
                </button>
                <button
                  onClick={() => openPopup("contact")}
                  className="px-4 py-2 border border-green-500 hover:bg-green-500/20 transition-colors"
                >
                  [ contact ]
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-green-500/50 text-sm">
          <p>Press buttons to open windows</p>
        </div>
      </div>

      {/* Popup Window */}
      {openWindow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closePopup}
          ></div>

          {/* Window */}
          <div
            className={`relative w-full max-w-2xl transition-all duration-300 ${
              minimized[openWindow] ? "h-12" : "max-h-[80vh]"
            }`}
          >
            <div className="border border-green-500 bg-black shadow-2xl shadow-green-500/20">
              {/* Window Title Bar */}
              <div className="flex items-center justify-between bg-green-500/20 px-3 py-2 border-b border-green-500">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400"
                    onClick={closePopup}
                  ></div>
                  <div
                    className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer hover:bg-yellow-400"
                    onClick={toggleMinimize}
                  ></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-sm">
                    lei_zhang@{windows[openWindow].title}:~
                  </span>
                </div>
                <button
                  onClick={closePopup}
                  className="hover:text-green-300 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Window Content */}
              {!minimized[openWindow] && (
                <div className="p-6 overflow-y-auto max-h-[70vh]">
                  <p className="text-green-500 mb-4">
                    $ cat {windows[openWindow].title}.txt
                  </p>
                  {windows[openWindow].content}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalPortfolio;
