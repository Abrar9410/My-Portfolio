"use client"

import { Editor } from "@tiptap/react";
import { Button } from "@/components/ui/button";
import {
    Bold,
    Italic,
    List,
    ListOrdered,
    Quote,
    Link as LinkIcon,
    Heading1,
    Heading2,
    Heading3,
    Strikethrough,
    AlignLeft,
    AlignCenter,
    AlignRight,
    Highlighter,
    Underline,
} from "lucide-react";
import { useCallback } from "react";


const TiptapMenuBar = ({editor}: {editor: Editor}) => {

    const setLink = useCallback(() => {
        const url = window.prompt("Enter URL");
        if (url) {
            editor?.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
        }
    }, [editor]);

    if (!editor) {
        return null;
    }

    const Options = [
        {
            icon: <Heading1 className="size-4" />,
            onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            pressed: editor.isActive("heading", { level: 1 }),
        },
        {
            icon: <Heading2 className="size-4" />,
            onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            pressed: editor.isActive("heading", { level: 2 }),
        },
        {
            icon: <Heading3 className="size-4" />,
            onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            pressed: editor.isActive("heading", { level: 3 }),
        },
        {
            icon: <Bold className="size-4" />,
            onClick: () => editor.chain().focus().toggleBold().run(),
            pressed: editor.isActive("bold"),
        },
        {
            icon: <Italic className="size-4" />,
            onClick: () => editor.chain().focus().toggleItalic().run(),
            pressed: editor.isActive("italic"),
        },
        {
            icon: <Strikethrough className="size-4" />,
            onClick: () => editor.chain().focus().toggleStrike().run(),
            pressed: editor.isActive("strike"),
        },
        {
            icon: <AlignLeft className="size-4" />,
            onClick: () => editor.chain().focus().setTextAlign("left").run(),
            pressed: editor.isActive({ textAlign: "left" }),
        },
        {
            icon: <AlignCenter className="size-4" />,
            onClick: () => editor.chain().focus().setTextAlign("center").run(),
            pressed: editor.isActive({ textAlign: "center" }),
        },
        {
            icon: <AlignRight className="size-4" />,
            onClick: () => editor.chain().focus().setTextAlign("right").run(),
            pressed: editor.isActive({ textAlign: "right" }),
        },
        {
            icon: <List className="size-4" />,
            onClick: () => editor.chain().focus().toggleBulletList().run(),
            pressed: editor.isActive("bulletList"),
        },
        {
            icon: <ListOrdered className="size-4" />,
            onClick: () => editor.chain().focus().toggleOrderedList().run(),
            pressed: editor.isActive("orderedList"),
        },
        {
            icon: <Underline className="size-4" />,
            onClick: () => editor.chain().focus().toggleUnderline().run(),
            pressed: editor.isActive("underline"),
        },
        {
            icon: <Quote className="size-4" />,
            onClick: () => editor.chain().focus().toggleBlockquote().run(),
            pressed: editor.isActive("blockquote"),
        },
        {
            icon: <Highlighter className="size-4" />,
            onClick: () => editor.chain().focus().toggleHighlight().run(),
            pressed: editor.isActive("highlight"),
        },
    ];

    return (
        <div className="flex flex-wrap gap-2 border border-input p-2 rounded-md *:cursor-pointer z-50">
            {Options.map((option, index) => (
                <Button
                    key={index}
                    type="button"
                    variant={option.pressed ? "default" : "outline"}
                    onClick={option.onClick}
                >
                    {option.icon}
                </Button>
            ))}
            <Button type="button" size="sm" variant="outline" onClick={setLink}>
                <LinkIcon size={16} />
            </Button>
        </div>
    );
};

export default TiptapMenuBar;