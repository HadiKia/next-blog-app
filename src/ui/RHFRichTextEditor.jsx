"use client";

import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  Bars3Icon,
  Bars4Icon,
  BoldIcon,
  CodeBracketIcon,
  H1Icon,
  H2Icon,
  H3Icon,
  ItalicIcon,
  ListBulletIcon,
  NumberedListIcon,
  PaintBrushIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "@heroicons/react/24/outline";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const RHFRichTextEditor = ({
  label,
  wrapperClassName,
  isRequired,
  placeholder,
}) => {
  const editor = useEditor({
    content: "",
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Placeholder.configure({
        placeholder: placeholder || "متن خود را وارد کنید...",
        emptyEditorClass: "is-editor-empty",
        showOnlyWhenEditable: true,
      }),
    ],
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "textField__input rounded-t-none min-h-40 prose min-w-full prose-headings:text-secondary-800 prose-p:text-secondary-800 prose-strong:text-secondary-800",
      },
    },
    onUpdate: ({ editor }) => {
      console.log(editor.getHTML());
    },
  });

  return (
    <div className={wrapperClassName}>
      <span className="text-secondary-600 text-sm inline-block mb-2 ">
        {label}
        {isRequired && <span className="text-error-500 ms-1">*</span>}
      </span>

      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default RHFRichTextEditor;

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="control-group">
      <div className="button-group">
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          }
        >
          <H1Icon />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }
        >
          <H2Icon />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }
        >
          <H3Icon />
        </button>

        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          p
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <BoldIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <ItalicIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        >
          <UnderlineIcon />
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <ListBulletIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <NumberedListIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          <CodeBracketIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          quote
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          Hr
        </button>
        <button onClick={() => editor.chain().focus().setHardBreak().run()}>
          Br
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <StrikethroughIcon />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          <Bars3BottomRightIcon />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          <Bars3Icon />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          <Bars3BottomLeftIcon />
        </button>

        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
        >
          <Bars4Icon />
        </button>
        <button
          title="highlight"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive("highlight") ? "is-active" : ""}
        >
          <PaintBrushIcon />
        </button>
      </div>
    </div>
  );
};
