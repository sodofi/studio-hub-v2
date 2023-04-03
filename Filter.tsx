import React from "react";
import { clsx } from "clsx";
import Link from "next/link";

import { useState, useCallback } from "react";

export default function Filter() {

  const [maxWords, setMaxWords] = useState("150");
  const [audience, setAudience] = useState("non-technical product managers");
  const [purpose, setPurpose] = useState("Pretend that communicating these explanations is critical to a person's professional career; meaning, accuracy and correctness are of utmost importance.");

    return (
        <div
              className={clsx(
                "container flex flex-row items-center justify-content",
                "gap-2 px-5"
              )}
            >
              <p
                className={clsx(
                  "text-sm font-medium text-stone-800",
                  "tracking-tight subpixel-antialiased"
                )}
              >
                Summary Length:
              </p>
              <select
                value={maxWords}
                onChange={(e) => setMaxWords(e.target.value)}
                className={clsx(
                  "my-3 rounded-md border-slate-200 text-xs",
                  "bg-slate-100 px-1.5 py-1.5 font-mono font-medium",
                  "text-zinc-600 shadow-sm focus:border-white",
                  "focus:ring-white"
                )}
                style={{ width: "100px" }}
              >
                <option value="50">50 words</option>
                <option value="100">100 words</option>
                <option value="150">150 words</option>
                <option value="200">200 words</option>
                <option value="400">400 words</option>
              </select>
              <p
                className={clsx(
                  "text-sm font-medium text-stone-800",
                  "tracking-tight subpixel-antialiased"
                )}
              >
                Target Audience:
              </p>
              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className={clsx(
                  "border-slate-0 my-3 rounded-md text-xs",
                  "bg-slate-100 px-1.5 py-1.5 font-mono font-medium",
                  "text-zinc-600 shadow-sm focus:border-white",
                  "focus:ring-white"
                )}
                style={{ width: "120px" }}
              >
                <option value="non-technical product managers">Non-Technical</option>
                <option value="experienced, technically fluent software engineers">Technical</option>
                <option value="members of computer science academia">Academic/Research</option>
                <option value="a person with no programming experience">No programming experience</option>
              </select>
              <p
                className={clsx(
                  "text-sm font-medium text-stone-800",
                  "tracking-tight subpixel-antialiased"
                )}
              >
                Purpose:
              </p>
              <select
                value={maxWords}
                onChange={(e) => setPurpose(e.target.value)}
                className={clsx(
                  "my-3 rounded-md border-slate-200 text-xs",
                  "bg-slate-100 px-1.5 py-1.5 font-mono font-medium",
                  "text-zinc-600 shadow-sm focus:border-white",
                  "focus:ring-white"
                )}
                style={{ width: "120px" }}
              >
                <option value="Pretend that communicating these explanations is critical to a person's professional career; meaning, accuracy and correctness are of utmost importance.">Professional</option>
                <option value="Pretend that communicating these explanations is critical to a person's academic progession; include a short list of the skills the user would have utilized in writing the code.">Academic/Educational</option>
                <option value="Pretend that communicating these explanations is critical to helping a person understand the code that someone else wrote.">Collaboration/Group Work</option>
              </select>

              <button onClick={(e) => {location.href="http://localhost:3000/profile-page2"}} className={clsx(
                  "text-xs rounded-lg bg-stone-800 ml-3 px-0 py-2",
                  "w-24 text-white hover:bg-stone-600"
                )} >Save</button>
                <button className={clsx(
                  "text-xs rounded-lg border-stone-800 bg-stone-800 bg-opacity-10 px-0 py-2",
                  "w-24 text-stone-800 hover:bg-stone-800 hover:text-white"
                )}>Cancel</button>
            </div>

    );
}