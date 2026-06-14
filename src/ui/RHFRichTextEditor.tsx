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
  LinkIcon,
  ListBulletIcon,
  NumberedListIcon,
  PaintBrushIcon,
  StrikethroughIcon,
  UnderlineIcon,
} from "@heroicons/react/24/outline";

import Highlight from "@tiptap/extension-highlight";
import TiptapLink from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import TiptapUnderline from "@tiptap/extension-underline";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import type { FieldError } from "react-hook-form";
import Modal from "./Modal";
import Button from "./Button";

type RHFRichTextEditorProps = {
  label: string;
  wrapperClassName?: string;
  isRequired?: boolean;
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: FieldError;
};

type MenuBarProps = {
  editor: Editor | null;
};

const RHFRichTextEditor = ({
  label,
  wrapperClassName,
  isRequired,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
}: RHFRichTextEditorProps) => {
  const editor = useEditor({
    content: value || "",
    extensions: [
      StarterKit,
      TiptapUnderline,
      Highlight,
      TiptapLink,
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
          "textField__input rounded-t-none min-h-40 prose min-w-full prose-headings:text-secondary-700 prose-p:text-secondary-700 prose-strong:text-secondary-700 prose-a:inline prose-a:text-blue-500 prose-a:pointer-events-none",
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

const MenuBar = ({ editor }: MenuBarProps) => {
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  if (!editor) return null;

  const handleLinkSubmit = () => {
    if (linkUrl) {
      editor.chain().focus().extendMarkRange("link").setLink({ href: linkUrl }).run();
    }
    setLinkUrl("");
    setShowLinkInput(false);
  };

  const handleLinkToggle = () => {
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
    } else {
      setShowLinkInput(true);
    }
  };

  return (
    <div className="control-group">
      <Modal
        open={showLinkInput}
        onClose={() => {
          setShowLinkInput(false);
          setLinkUrl("");
        }}
        title="آدرس لینک"
      >
        <input
          type="url"
          value={linkUrl}
          onChange={(e) => setLinkUrl(e.target.value)}
          placeholder="آدرس لینک را وارد کنید"
          className="textField__input mb-4"
          onKeyDown={(e) => {
            if (e.key === "Enter") handleLinkSubmit();
            if (e.key === "Escape") {
              setShowLinkInput(false);
              setLinkUrl("");
            }
          }}
          autoFocus
        />
        
        <Button variant="secondary" onClick={handleLinkSubmit} className="w-full">
          تایید
        </Button>
      </Modal>
      <div className="button-group">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
        >
          <H1Icon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
        >
          <H2Icon />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
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
          onClick={handleLinkToggle}
          className={editor.isActive("link") ? "is-active" : ""}
        >
          <LinkIcon />
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
          className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
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
          className={editor.isActive({ textAlign: "justify" }) ? "is-active" : ""}
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
