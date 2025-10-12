"use client";

import { useEffect, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import TiptapMenuBar from "./TiptapMenuBar";
import { TextSelection } from "@tiptap/pm/state";

interface TiptapEditorProps {
    contentJSON: object;
    onChange: (contentJSON: object, contentHTML: string) => void;
}

export default function TiptapEditor({ contentJSON, onChange }: TiptapEditorProps) {

    const skipUpdate = useRef(false);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: {
                    HTMLAttributes: {
                        class: "list-disc ml-10"
                    }
                },
                orderedList: {
                    HTMLAttributes: {
                        class: "list-decimal ml-10"
                    }
                }
            }),
            Placeholder.configure({
                placeholder: "Write your blog content here...",
            }),
            TextAlign.configure({
                types: ["heading", "paragraph"]
            }),
            Highlight
        ],
        content: contentJSON,
        onUpdate: ({ editor }) => {
            if (skipUpdate.current) {
                // Skip the update triggered by programmatic setContent()
                skipUpdate.current = false;
                return;
            }

            const json = editor.getJSON();
            const html = editor.getHTML();
            onChange(json, html);
        },
        editorProps: {
            attributes: {
                class:
                    "min-h-[300px] border border-input rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-primary ProseMirror max-w-none",
            },
            transformPastedHTML(html) {
                // Remove scripts, styles, and event handlers (onClick, etc.)
                const clean = html
                    .replace(/<script.*?>.*?<\/script>/gi, "")
                    .replace(/<style.*?>.*?<\/style>/gi, "")
                    .replace(/\s?on\w+="[^"]*"/g, "")
                    .replace(/\s?style="[^"]*"/g, "")
                    .replace(/<meta.*?>/gi, "")
                    .replace(/<!--.*?-->/g, ""); // remove comments
                return clean.trim();
            },
        },
        immediatelyRender: false,
    });

    useEffect(() => {
        if (editor && contentJSON) {
            skipUpdate.current = true;
            // Save cursor position
            const { from, to } = editor.state.selection;

            // Update content
            editor.commands.setContent(contentJSON);

            // Restore cursor position
            const newFrom = Math.min(from, editor.state.doc.content.size);
            const newTo = Math.min(to, editor.state.doc.content.size);
            const textSelection = new TextSelection(
                editor.state.doc.resolve(newFrom),
                editor.state.doc.resolve(newTo)
            );
            editor.view.dispatch(editor.state.tr.setSelection(textSelection));
        }
    }, [editor, contentJSON])

    if (!editor) return null;

    return (
        <div className="space-y-3">
            {/* MenuBar */}
            <TiptapMenuBar editor={editor} />

            {/* Editor */}
            <EditorContent editor={editor} />
        </div>
    );
}
