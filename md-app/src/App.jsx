import { useState, useEffect } from 'react';
import defaultText from './defaultMD';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import './App.css';

// Main Body of Application
function App() {
  // change state of input text ot update live
  const [inputVal, setInputVal] = useState(defaultText);
  return (
    <div className="body bg-bg min-h-screen w-full">
      <Header />
      <div className="flex gap-2 h-[calc(100vh-4.75rem)] sm:h-[calc(100vh-5.25rem)] bg-black">
        <Editor inputVal={ inputVal }  setInputVal={ setInputVal } />
        <Preview inputVal={ inputVal } />
      </div>
    </div>
  );
}

const Header = () => {
  const title = '<< Markdown Preview >>';
  return (
    <header className="bg-bg">
      <h1 className=" text-xl sm:text-3xl font-title text-fg text-center hover:tracking-wide sm:hover:tracking-[0.5rem] transition-all duration-300 p-6">{ title }</h1>
    </header>
  );
}

const Editor = ({ inputVal, setInputVal }) => {
  const title = 'Editor (M ⇩)';
  return (
    <section className="editor w-full flex flex-col gap-2">
      <h1 className="bg-fg text-bg text-lg sm:text-2xl font-def font-semibold p-2 text-center">{ title }</h1>
      {/* onchange method is an anonymouse function that sets the the state inputVal to the text inputs value */}
      <textarea id="editor" onChange={ (e) => { setInputVal(e.target.value) } } value={inputVal} className="display grow bg-bg overflow-auto text-white px-4 select-none focus:outline-fg py-2 text-lg"></textarea>
    </section>
  );
}

const Preview = ({ inputVal }) => {
  const title = 'Preview (HTML)';
  const htmlContent = marked.parse(inputVal, { breaks: true });
  console.log(htmlContent);
  useEffect(() => {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [inputVal]);

  return (
    <section className="preview w-full flex flex-col gap-2">
      <h1 className="bg-fg text-bg  text-lg sm:text-2xl font-def font-semibold p-2 text-center">{ title }</h1>
      <div id="preview" dangerouslySetInnerHTML={{ __html: htmlContent }} className="pt-4 grow bg-bg overflow-auto text-white px-4 max-w-[50vw]">
      </div>
    </section>
  );
}

export default App
