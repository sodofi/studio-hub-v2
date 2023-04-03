import { type NextPage } from "next";
import { clsx } from "clsx";
import { useState, useCallback } from "react";
import Head from "next/head";
import Header from "../components/Header";
import GooeyAnimation from "../components/GooeyAnimation";
import GithubButton from "../components/GithubButton";

const Home: NextPage = () => {
  const [codeSnippet, setCodeSnippet] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [generated, setGenerated] = useState<string>("");
  const [maxWords, setMaxWords] = useState("150");
  const [audience, setAudience] = useState("non-technical product managers");
  const [purpose, setPurpose] = useState(
    `Pretend that communicating these explanations is critical to a 
     person's professional career; meaning, accuracy and correctness 
     are of utmost importance.`
  );
  const [copied, setCopied] = useState(false);

  const prompt = `
  I'd like for you to act as a creative, nuanced translator of code. 
  I will send you a snippet of code and it will be your job to analyze, 
  understand, and transform the code into plain, imaginative English. 
  The description must be appealing to ${audience}.
  Now, generate one English explanation and make sure the generated explanation 
  is at max ${maxWords} words and written in a professional tone. ${purpose} 
  Don't use the word "snippet" or name the functions or variables directly in 
  your response.
  
  My first code snippet is: 
  ${codeSnippet}
  `;

  const generateEnglish = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setGenerated("");
      setLoading(true);
      setCopied(false);

      try {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        });

        if (!res.ok) {
          throw new Error(res.statusText);
        }

        const data = res.body;
        if (!data) {
          return;
        }

        const reader = data.getReader();
        const decoder = new TextDecoder();

        let done = false;
        while (!done) {
          const { value, done: readerDone } = await reader.read();
          done = readerDone;
          const chunk = decoder.decode(value);
          setGenerated((prev) => prev + chunk);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
    [codeSnippet]
  );

  return (
    <>
      <Head>
        <title>StudioHub</title>
        <meta name="description" content="landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main
        className={clsx(
          "flex min-h-screen flex-col items-center justify-center",
          "bg-gradient-to-b from-[#eeedf0] to-[#a872c7]"
        )}
      >
        <div
          className={clsx(
            "container flex flex-col items-center justify-center",
            "mx-auto gap-10 px-8 py-8"
          )}
        >
          <h1
            className={clsx(
              "sm:text[5rem] text-6xl font-extrabold text-white",
              "tracking-tight"
            )}
          >
            Studio<span className="text-[hsl(280,55%,74%)]">Hub</span>
          </h1>
          <h2
            className={clsx(
              "font-mono text-2xl font-bold",
              "sm:text[2.5rem] tracking-tight text-white"
            )}
          >
            Code Communication, Made Effortless.
          </h2>
          <GooeyAnimation />
          <div className="mb-8 w-full max-w-xl">
            <div className="mt-4 flex items-center space-x-2">
              <p
                className={clsx(
                  "text-base font-medium text-stone-800",
                  "tracking-tight subpixel-antialiased"
                )}
              >
                Copy a snippet of code you'd like clarified!
              </p>
            </div>
            <textarea
              value={codeSnippet}
              onChange={(e) => setCodeSnippet(e.target.value)}
              rows={5}
              className={clsx(
                "my-3 w-full rounded-md border-slate-200 text-xs",
                "bg-slate-100 px-1.5 py-1.5 font-mono font-medium",
                "text-zinc-600 shadow-sm focus:border-white",
                "focus:ring-white"
              )}
            ></textarea>
            <div
              className={clsx(
                "container flex flex-row items-center justify-center",
                "mx-auto gap-2 px-2 py-2"
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
                <option value="non-technical product managers">
                  Non-Technical
                </option>
                <option value="experienced, technically fluent software engineers">
                  Technical
                </option>
                <option value="members of computer science academia">
                  Academic/Research
                </option>
                <option value="a person with no programming experience">
                  No programming experience
                </option>
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
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                className={clsx(
                  "my-3 rounded-md border-slate-200 text-xs",
                  "bg-slate-100 px-1.5 py-1.5 font-mono font-medium",
                  "text-zinc-600 shadow-sm focus:border-white",
                  "focus:ring-white"
                )}
                style={{ width: "120px" }}
              >
                <option value="Pretend that communicating these explanations is critical to a person's professional career; meaning, accuracy and correctness are of utmost importance.">
                  Professional
                </option>
                <option value="Pretend that communicating these explanations is critical to a person's academic progession; include a short list of the skills the user would have utilized in writing the code.">
                  Academic/Educational
                </option>
                <option value="Pretend that communicating these explanations is critical to helping a person understand the code that someone else wrote.">
                  Collaboration/Group Work
                </option>
              </select>
            </div>
            {!loading && (
              <button
                onClick={(e) => generateEnglish(e)}
                className={clsx(
                  "text-baseline rounded-lg bg-stone-800 px-3 py-2",
                  "w-full text-white hover:bg-stone-800/80"
                )}
              >
                Clarify Code &rarr;
              </button>
            )}
            {loading && (
              <button
                className={clsx(
                  "text-small rounded-lg bg-stone-800 px-3 py-2",
                  "w-full text-white hover:bg-stone-800/80"
                )}
                disabled
              >
                <div className="flex items-center justify-center space-x-2">
                  <div
                    className={clsx(
                      "h-3 w-3 animate-spin rounded border-2 border-white"
                    )}
                  ></div>
                  <p className="ml-2">Generating...</p>
                </div>
              </button>
            )}
            {generated && (
              <>
                <h2 className="mt-10 text-2xl font-bold text-stone-800">
                  Generated Explanation:
                </h2>
                <div
                  className={clsx(
                    "mt-2 flex items-center space-x-2 rounded-md",
                    "border-2 border-solid border-stone-700 px-3 py-2",
                    "from-[#eeedf0] to-[#a872c7]",
                    "shadow-md hover:bg-gradient-to-r"
                  )}
                >
                  <p
                    className={clsx(
                      "font-sans text-sm font-normal tracking-tight",
                      "subpixel-antialiased"
                    )}
                  >
                    {generated}
                  </p>
                </div>
                <button
                  className={clsx(
                    "text-baseline rounded-lg bg-stone-800 px-3 py-2",
                    "w-full text-white hover:bg-stone-800/80",
                    copied && "bg-green-500"
                  )}
                  onClick={() => {
                    navigator.clipboard.writeText(generated);
                    setCopied(true);
                  }}
                >
                  {copied ? "Copied!" : "Copy to Clipboard"}
                </button>
              </>
            )}
          </div>
          <GithubButton />
        </div>
      </main>
    </>
  );
};

export default Home;
