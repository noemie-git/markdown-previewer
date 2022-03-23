import React, { Component } from "https://cdn.skypack.dev/react";
import ReactDOM from "https://cdn.skypack.dev/react-dom";
import { marked } from "https://cdn.skypack.dev/marked";

marked.setOptions({
  renderer: new marked.Renderer(),
  breaks: true });


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdownText: placeholder,
      html: marked.parse(placeholder) };


    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //do something with markdown parser;
    console.log('cock');
    console.log(event.currentTarget.value);
    this.setState({
      //markdownText: event.currentTarget.value,
      html: marked.parse(event.currentTarget.value) });


  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "editorWrapper" }, /*#__PURE__*/
      React.createElement("div", { className: "editorTitle" }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-free-code-camp" }), "Editor"), /*#__PURE__*/


      React.createElement("textarea", { id: "editor", type: "text", onChange: this.handleChange }, this.state.markdownText)), /*#__PURE__*/


      React.createElement("div", { className: "previewerWrapper" }, /*#__PURE__*/
      React.createElement("div", { className: "previewerTitle" }, /*#__PURE__*/
      React.createElement("i", { className: "fa fa-free-code-camp" }), "Previewer"), /*#__PURE__*/


      React.createElement("div", { id: "preview", type: "text", dangerouslySetInnerHTML: { __html: this.state.html } }))));




  }}
;

const placeholder = `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("markdownApp"));