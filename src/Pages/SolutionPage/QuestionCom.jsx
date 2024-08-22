import { marked } from "marked";

function QuestionCom() {
  const question = `
## Slip No 1 
### 1)
## Slip No 1 
### 1)

> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.
> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.
> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.
> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.
> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.
> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.
> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.
> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.
> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.
> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.
> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.
> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.
> lsadflkdsklfjklsadjfsdajlkfjsadklfjsaldkfjklsdajfsadjlkfjslk;.



`;

  return (
    <div className="preview-container" style={{ overflow: "screenY" }}>
      <div dangerouslySetInnerHTML={{ __html: marked(question) }}></div>
    </div>
  );
}

export default QuestionCom;
