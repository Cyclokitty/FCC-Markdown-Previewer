"use strict";

var Previewer = function Previewer(props) {
  return React.createElement(
    "div",
    { className: "previewer" },
    React.createElement(PreviewerHead, null),
    React.createElement(PreviewerMD, null),
    React.createElement(PreviewerFoot, null)
  );
};

var PreviewerHead = function PreviewerHead(props) {
  return React.createElement(
    "div",
    { className: "container-fluid" },
    React.createElement(
      "div",
      { className: "heading" },
      React.createElement(
        "h1",
        null,
        "Free Code Camp"
      ),
      React.createElement(
        "h2",
        null,
        "Markdown Previewer"
      ),
      React.createElement(
        "p",
        null,
        "Markdowns are a simple way of adding format to your plain text, like headings, subheadings, lists and images. We use them a lot in the ",
        React.createElement(
          "a",
          { href: "https://gitter.im/FreeCodeCamp/FreeCodeCamp", target: "_blank" },
          "FCC Gitter chatrooms"
        ),
        ". "
      )
    ),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6" },
        React.createElement(
          "h2",
          null,
          "What to Type:"
        )
      ),
      React.createElement(
        "div",
        { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6" },
        React.createElement(
          "h2",
          null,
          "How It Will Look:"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6 examples1 pre-scrollable" },
        "#Biggest Heading",
        React.createElement("br", null),
        "##Sub-Heading",
        React.createElement("br", null),
        "######Smallest sub-heading",
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("br", null),
        "**This is bold text**",
        React.createElement("br", null),
        "__This is bold text__",
        React.createElement("br", null),
        "*This is italic text*",
        React.createElement("br", null),
        "_This is italic text_",
        React.createElement("br", null),
        "~~Deleted text~~",
        React.createElement("br", null),
        "Superscript: 19^th^",
        React.createElement("br", null),
        "Subscript: H~2~O",
        React.createElement("br", null),
        "++Inserted text++",
        React.createElement("br", null),
        "==Marked text==",
        React.createElement("br", null),
        React.createElement("br", null),
        "Ordered List:",
        React.createElement("br", null),
        "I like:",
        React.createElement("br", null),
        "1. The Graham Norton Show",
        React.createElement("br", null),
        "2. Iced espresso",
        React.createElement("br", null),
        "3. Reddit's AskReddit subreddit",
        React.createElement("br", null),
        React.createElement("br", null),
        "### Images",
        React.createElement("br", null),
        "![MountieCat](https://octodex.github.com/images/mountietocat.png)",
        React.createElement("br", null),
        "![FemaleCoderCat](https://octodex.github.com/images/femalecodertocat.png)",
        React.createElement("br", null)
      ),
      React.createElement(
        "div",
        { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6 examples2 pre-scrollable" },
        React.createElement(
          "h1",
          null,
          "Biggest Heading"
        ),
        React.createElement(
          "h2",
          null,
          "Sub-Heading"
        ),
        React.createElement(
          "h6",
          null,
          "Smallest sub-heading"
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "This is bold text"
          )
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "strong",
            null,
            "This is bold text"
          )
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "em",
            null,
            "This is italic text"
          )
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "em",
            null,
            "This is italic text"
          )
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "del",
            null,
            "Deleted text"
          )
        ),
        React.createElement(
          "p",
          null,
          "Superscript: 19",
          React.createElement(
            "sup",
            null,
            "th"
          )
        ),
        React.createElement(
          "p",
          null,
          "Subscript: H",
          React.createElement(
            "sub",
            null,
            "2"
          ),
          "O"
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "ins",
            null,
            "Inserted text"
          )
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "mark",
            null,
            "Marked text"
          )
        ),
        React.createElement(
          "p",
          null,
          "Ordered List:"
        ),
        React.createElement(
          "p",
          null,
          "I like:"
        ),
        React.createElement(
          "ol",
          null,
          React.createElement(
            "li",
            null,
            "The Graham Norton Show"
          ),
          React.createElement(
            "li",
            null,
            "Iced espresso"
          ),
          React.createElement(
            "li",
            null,
            "Reddit's AskReddit subreddit"
          )
        ),
        React.createElement(
          "h3",
          null,
          "Images"
        ),
        React.createElement(
          "p",
          null,
          React.createElement("img", { src: "https://octodex.github.com/images/mountietocat.png", alt: "Mountie Cat", title: "Mountie Cat", className: "img-responsive", width: "200" }),
          React.createElement("img", { src: "https://octodex.github.com/images/femalecodertocat.png", alt: "Female Coder Cat", title: "Female Coder Cat", className: "img-responsive", width: "200" })
        )
      )
    )
  );
};

var PreviewerMD = React.createClass({
  displayName: "PreviewerMD",

  rawMarkup: function rawMarkup(value) {
    var md = new Remarkable();
    var rawMarkup = md.render(value);
    return { __html: rawMarkup };
  },
  getInitialState: function getInitialState() {
    return {
      playground: ''
    };
  },
  onUpdateText: function onUpdateText() {
    this.setState({
      value: this.refs.rawText.value
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "container-fluid" },
      React.createElement(
        "div",
        { className: "playgroundTitle" },
        React.createElement(
          "h2",
          null,
          "Try Markdown Yourself:"
        )
      ),
      React.createElement(
        "div",
        { className: "playground" },
        React.createElement(
          "div",
          { className: "row heading" },
          React.createElement(
            "div",
            { className: "col-xs-12 col-sm-12 col-md-12 col-lg-12" },
            React.createElement(
              "p",
              null,
              "Type in the box on the left and watch the markdown text appear on the right."
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row text" },
          React.createElement(
            "div",
            { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6 pre-scrollable" },
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("textarea", { className: "form-control", rows: "12", id: "input", type: "text", placeholder: "Playground-- type here!", ref: "rawText", defaultValue: this.state.playground, onChange: this.onUpdateText })
            )
          ),
          React.createElement(
            "div",
            { className: "col-xs-6 col-sm-6 col-md-6 col-lg-6 pre-scrollable" },
            React.createElement(
              "div",
              { className: "well text", rows: "12" },
              React.createElement("div", { id: "preview", dangerouslySetInnerHTML: this.rawMarkup(this.state.value) })
            )
          )
        )
      )
    );
  }
});

var PreviewerFoot = function PreviewerFoot(props) {
  return React.createElement(
    "div",
    { className: "container-fluid" },
    React.createElement(
      "div",
      { className: "footer" },
      React.createElement(
        "h3",
        null,
        "Made by ",
        React.createElement(
          "a",
          { href: "https://www.freecodecamp.com/cyclokitty" },
          " @Cyclokitty"
        )
      ),
      React.createElement(
        "p",
        null,
        "with blood, sweat, tears and powered by vats of coffee and several coconut popsicles"
      ),
      React.createElement(
        "p",
        null,
        "... and React, Sass, and Bootstrap."
      )
    )
  );
};

//this needs to be at the bottom of the script and is only called after the composite components have been defined.

ReactDOM.render(React.createElement(Previewer, null), document.getElementById("content"));