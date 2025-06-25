import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Ahmed Al-regas. I am a PhD student at the Computer Science and
              Engineering department University of Modern Sciences.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Machine Learning / Computer Vision / Multimodal Learning"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm looking for a research internship for Summer 2024. I'm open to collaboration on research projects."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:ahmedazizz703@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                ahmedazizz703@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/ahmedaziz703"
                target="_blank"
                rel="noreferrer"
              >
                @ahmedaziz703
              </a>
            </li>
            <li>
              <a
                className="text-blue-300"
                href="https://scholar.google.com/citations?user=RuW6xgMAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/ahmed-alrages-810778344"
                target="_blank"
                rel="noreferrer"
              >
                ahmed-alrages-810778344
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://portfolio-orcin-seven-1mk53kxuyx.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                https://portfolio
              </a>
            </li>
            <li>
              Instagarm:{" "}
              <a
                className="text-blue-300"
                href="https://www.instagram.com/a7m_z7?igsh=MW53eThoYzBxdTM1aA=="
                target="_blank"
                rel="noreferrer"
              >
                @a7m_z7
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
