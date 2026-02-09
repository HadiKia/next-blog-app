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
import { useEffect } from "react";

const RHFRichTextEditor = ({
  label,
  wrapperClassName,
  isRequired,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const editor = useEditor({
    content: value || "",
    extensions: [
      StarterKit,
      Underline,
      Highlight,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: placeholder || "متن خود را وارد کنید...",
        emptyEditorClass: "is-editor-empty",
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
      onChange(editor.getHTML());
    },
    onBlur: () => {
      onBlur?.();
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "");
    }
  }, [value, editor]);

  return (
    <div className={wrapperClassName}>
      <span className="text-secondary-600 text-sm mb-2 inline-block">
        {label}
        {isRequired && <span className="text-error-500 ms-1">*</span>}
      </span>

      <MenuBar editor={editor} />
      <EditorContent editor={editor} />

      {error && (
        <span className="text-error-500 block text-xs mt-2">
          {error.message}
        </span>
      )}
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
          type="button"
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
          type="button"
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
          type="button"
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
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive("paragraph") ? "is-active" : ""}
        >
          p
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <BoldIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <ItalicIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        >
          <UnderlineIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "is-active" : ""}
        >
          <ListBulletIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "is-active" : ""}
        >
          <NumberedListIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive("codeBlock") ? "is-active" : ""}
        >
          <CodeBracketIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "is-active" : ""}
        >
          quote
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          Hr
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          Br
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "is-active" : ""}
        >
          <StrikethroughIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          <Bars3BottomRightIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          <Bars3Icon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          <Bars3BottomLeftIcon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={
            editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
          }
        >
          <Bars4Icon />
        </button>
        <button
          title="highlight"
          type="button"
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={editor.isActive("highlight") ? "is-active" : ""}
        >
          <PaintBrushIcon />
        </button>
      </div>
    </div>
  );
};
