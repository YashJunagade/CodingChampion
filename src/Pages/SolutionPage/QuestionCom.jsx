import { marked } from "marked";
import DOMPurify from "dompurify";

function QuestionCom() {
  const question = `
# Markdown Previewer
## This is a H2
### This is a H3

**Bold Text**  
*Italic Text*  
~~Strikethrough~~

\`Inline code\`

\`\`\`javascript
// Code block
function hello() {
  return "Hello World!";
}
\`\`\`

# Markdown Previewer
## This is a H2
### This is a H3

**Bold Text**  
*Italic Text*  
~~Strikethrough~~

\`Inline code\`

\`\`\`javascript
// Code block
function hello() {
  return "Hello World!";
}
\`\`\`

# Markdown Previewer
## This is a H2
### This is a H3

**Bold Text**  
*Italic Text*  
~~Strikethrough~~

\`Inline code\`

\`\`\`javascript
// Code block
function hello() {
  return "Hello World!";
}
\`\`\`

# Markdown Previewer
## This is a H2
### This is a H3

**Bold Text**  
*Italic Text*  
~~Strikethrough~~

\`Inline code\`

\`\`\`javascript
// Code block
function hello() {
  return "Hello World!";
}
\`\`\`

# Markdown Previewer
## This is a H2
### This is a H3

**Bold Text**  
*Italic Text*  
~~Strikethrough~~

\`Inline code\`

\`\`\`javascript
// Code block
function hello() {
  return "Hello World!";
}
\`\`\`

# Markdown Previewer
## This is a H2
### This is a H3

**Bold Text**  
*Italic Text*  
~~Strikethrough~~

\`Inline code\`

\`\`\`javascript
// Code block
function hello() {
  return "Hello World!";
}
\`\`\`

# Markdown Previewer
## This is a H2
### This is a H3

**Bold Text**  
*Italic Text*  
~~Strikethrough~~

\`Inline code\`

\`\`\`javascript
// Code block
function hello() {
  return "Hello World!";
}
\`\`\`
`;

  return (
    <div
      className="preview-container"
      style={{
        maxHeight: "100%",
        overflowY: "auto",
        padding: "10px",
      }}
    >
      <div
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(marked(question, { breaks: true })),
        }}
      ></div>
    </div>
  );
}

export default QuestionCom;
