import { useState } from "react";
import AceEditor from "react-ace";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

// import "./App.scss";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('# Heading 1');

    const handleEditorChange = (value) => {
        setMarkdown(value)
    }
    return (
        <>
            <div className="App">
                <div className="navbar">Navbar</div>
                <div className="header">Header</div>
                <div className="main">
                    <div className="editor-header">
                        <span>Mardown</span>
                        <a className="btn btn-square btn-sm btn-outline" href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="editor-header">
                        <span>Preview</span>
                        <a href="#" className="btn btn-square btn-outline btn-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="editor">
                        <AceEditor
                            name="text-editor"
                            placeholder="Placeholder Text"
                            mode="markdown"
                            theme="github"
                            fontSize={14}
                            showPrintMargin={false}
                            showGutter={true}
                            highlightActiveLine={true}
                            value={markdown}
                            onChange={handleEditorChange}
                            setOptions={{
                                enableBasicAutocompletion: true,
                                enableLiveAutocompletion: true,
                                enableSnippets: false,
                                showLineNumbers: true,
                                tabSize: 2,
                            }}
                        />
                    </div>
                    <div className="preview">
                        <div className="preview-content prose">
                            <ReactMarkdown
                                children={markdown}
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    code: MarkComponent,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

const MarkComponent = ({ value, language }) => {
    return (
        <SyntaxHighlighter language={language ?? null} style={docco}>
            {value ?? ''}
        </SyntaxHighlighter>
    )
}

export default MarkdownEditor;