import React, {useState} from 'react';
import './App.css';
import marked from 'marked';

function App() {
  const initialState = `
  # Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  Heres some code, \`<div></div>\`, between 2 backticks.



You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://bom.to/YgUVtsI9)`
  const [markdown, setMarkdown] = useState(initialState)
  const markdownResult = marked(markdown)

  return (
    <div className="row">
      <div className="col-12"><h1>Convert Markdown</h1></div>
      <div id="editor_box" className="col-6">
        <textarea id="editor" className="form-control" value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
      </div>
      <div id="preview" className="col-6" dangerouslySetInnerHTML={{__html: markdownResult}}>
      </div>
    </div>
  );
}

export default App;
