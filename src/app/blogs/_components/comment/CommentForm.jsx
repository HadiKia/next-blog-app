import Button from "@/ui/Button";
import TextArea from "@/ui/TextArea";
import { useState } from "react";

const CommentForm = () => {
  const [text, setText] = useState("");
  return (
    <form>
      <TextArea
        name="text"
        label="نظر شما"
        value={text}
        isRequired
        onChange={(e) => setText(e.target.value)}
      />
      <Button>تأیید</Button>
    </form>
  );
};

export default CommentForm;
