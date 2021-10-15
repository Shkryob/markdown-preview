import {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {plainText as markdownExample} from './example.md'
import marked from "marked"

marked.setOptions({
    breaks: true,
});

function compileMarkdown(md) {
    return marked(md);
}

function App() {
    const [mdState, setMDState] = useState(markdownExample)
    const compiledExample = compileMarkdown(mdState)
    const [htmlState, setHTMLState] = useState(compiledExample)

    function updateText(event) {
        setMDState(event.target.value);
        setHTMLState(compileMarkdown(event.target.value));
    }

    return (
        <div className="App">
            <header className="App-header">
                <textarea id="editor" onChange={updateText} value={mdState}></textarea>
                <div id="preview" dangerouslySetInnerHTML={{__html: htmlState}}></div>
            </header>
        </div>
    )
}

export default App
