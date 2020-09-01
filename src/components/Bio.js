import React from "react"

export default function Bio() {
  return (
    <div className="w-full mt-4">
      <h1 className="text-base md:text-xl mb-4 w-full font-medium uppercase">
        <span className="uppercase block md:inline mb-2">Matthew Power: </span>
        Designer – Developer
      </h1>
      <div className="font-body mb-4">
        <p className="text-sm md:text-base mb-2">
          <span className="uppercase block md:inline">Previously:</span> Lead
          Developer at{" "}
          <a
            href="https://gotowildplaces.com/"
            className="underline flip"
            target="_blank"
            rel="noopener noreferrer"
          >
            OUST (Wild Places)
          </a>
        </p>
        <p className="text-sm md:text-base mb-0">
          <span className="uppercase block md:inline">Previously:</span>{" "}
          Designer – Developer at{" "}
          <a
            href="https://www.polarnotion.com/"
            className="underline flip"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polar Notion
          </a>
        </p>
      </div>
      <ul className="ml-0 grid grid-cols-2 md:flex flex-row font-body list-disc mb-0">
        <li className="mx-4 mr-6 flip">
          <a
            href="https://www.are.na/matt-power"
            target="_blank"
            rel="noopener noreferrer"
          >
            Are.na
          </a>
        </li>
        <li className="mx-4 mr-6 flip">
          <a
            href="https://github.com/matthewapower"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>
        <li className="mx-4 mr-6 flip">
          <a
            href="https://www.linkedin.com/in/matthewapower/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li className="mx-4 mr-6 flip">
          <a
            href="https://dribbble.com/matthewapower"
            target="_blank"
            rel="noopener noreferrer"
          >
            dribbble
          </a>
        </li>
      </ul>
    </div>
  )
}
