import { useState } from "react";
import AceEditor from "react-ace";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

import './MardownEditor.scss';
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

const MarkdownEditor = () => {
const defaultMarkDown = `
# Markit Down
## _The Last Markdown Editor, Ever_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)


Markit Down is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Markit Down
- Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Tech

Markit Down uses a number of open source projects to work properly:

- [AngularJS] - HTML enhanced for web apps!
- [Ace Editor] - awesome web-based text editor
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Twitter Bootstrap] - great UI boilerplate for modern web apps
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]
- [Gulp] - the streaming build system
- [Breakdance](https://breakdance.github.io/breakdance/) - HTML
to Markdown converter
- [jQuery] - duh

And of course Markit Down itself is open source with a (public repository)[dill]
 on GitHub.

 ## Installation

 Dillinger requires [Node.js](https://nodejs.org/) v10+ to run.
 
 Install the dependencies and devDependencies and start the server.
 
 
 ## Plugins
 
 Dillinger is currently extended with the following plugins.
 Instructions on how to use them in your own application are linked below.
 
 | Plugin | README |
 | ------ | ------ |
 | Dropbox | [plugins/dropbox/README.md][PlDb] |
 | GitHub | [plugins/github/README.md][PlGh] |
 | Google Drive | [plugins/googledrive/README.md][PlGd] |
 | OneDrive | [plugins/onedrive/README.md][PlOd] |
 | Medium | [plugins/medium/README.md][PlMe] |
 | Google Analytics | [plugins/googleanalytics/README.md][PlGa] |
 
 ## Development
 
 Want to contribute? Great!
 
 Dillinger uses Gulp + Webpack for fast developing.
 Make a change in your file and instantaneously see your updates!
 
 Open your favorite Terminal and run these commands.
 
 Second Tab:

 
 #### Building for source
 
 For production release:
 

 
### Docker
 
 Dillinger is very easy to install and deploy in a Docker container.
 
 By default, the Docker will expose port 8080, so change this within the
 Dockerfile if necessary. When ready, simply use the Dockerfile to
 build the image.

 This will create the dillinger image and pull in the necessary dependencies.
 Be sure to swap out ${`package.json.version`} with the actual
 version of Dillinger.
 
 Once done, run the Docker image and map the port to whatever you wish on
 your host. In this example, we simply map port 8000 of the host to
 port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

 
> Note: ${`--capt-add=SYS-ADMIN`} is required for PDF rendering.
 
 Verify the deployment by navigating to your server address in
 your preferred browser.
 

`;
    const [markdown, setMarkdown] = useState(defaultMarkDown);

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
                    <div className="preview-wrapper">
                        <div id="preview" className="preview-content">
                            <ReactMarkdown
                                className="prose"
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