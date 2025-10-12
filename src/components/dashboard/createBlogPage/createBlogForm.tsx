"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import TiptapEditor from "@/components/dashboard/TiptapEditor";
import ImageUploader from "@/components/dashboard/ImageUploader";
import { toast } from "sonner";
import { createBlog } from "@/actions/blog";
import { useRouter } from "next/navigation";

const createBlogSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    overview: z.string().min(3, "Overview must be at least 3 characters"),
    tags: z.string().min(1, "Enter at least one tag"),
    thumbnail: z
        .instanceof(File, { message: "Thumbnail must be a valid file" })
        .refine((file) => file.size > 0, "Thumbnail is required"),
    content: z
        .object({
            type: z.string(),
            content: z.array(z.any()),
        })
        .refine(
            (val) => {
                const t = val.type;
                if (t !== "doc") return false;
                const c = val.content ?? [];
                // If it's totally empty, that's fine (post-reset)
                if (c.length === 0) return true;

                // If there's one empty paragraph, treat it as invalid
                if (
                    c.length === 1 &&
                    c[0].type === "paragraph" &&
                    (!c[0].content || c[0].content.length === 0)
                ) {
                    return false;
                }

                return true;
            },
            { message: "Blog Content cannot be empty!" }
        ),
});

type BlogFormValues = z.infer<typeof createBlogSchema>;

export default function CreateBlogForm() {

    const [contentHTML, setContentHTML] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    const form = useForm<BlogFormValues>({
        resolver: zodResolver(createBlogSchema),
        defaultValues: {
            title: "",
            overview: "",
            tags: "",
            content: { type: "", content: [] },
        },
    });

    const onSubmit = async (data: BlogFormValues) => {
        setSubmitting(true);
        const { thumbnail, content, ...rest } = data;
        const toastId = toast.loading("Creating New Blog...");

        try {
            const formData = new FormData();
            formData.append(
                "data",
                JSON.stringify({
                    ...rest,
                    contentJSON: content,
                    contentHTML: contentHTML,
                    tags: rest.tags.split(",").map((t) => t.trim()),
                })
            );
            formData.append("file", thumbnail);

            const res = await createBlog(formData);

            if (res.success) {
                toast.success(res.message, { id: toastId });
                setContentHTML("");
                form.reset();
                router.push("/blogs");
            } else {
                toast.error(res.message, { id: toastId });
            }
        } catch (err) {
            console.error(err);
            toast.error("An error occurred while creating the blog", { id: toastId });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Title */}
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Blog Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter blog title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Thumbnail */}
                <FormField
                    control={form.control}
                    name="thumbnail"
                    render={({ field }) => (
                        <FormItem className="min-w-64 max-w-md mx-auto">
                            <FormLabel className="w-max mx-auto">Thumbnail Image</FormLabel>
                            <FormControl>
                                <ImageUploader {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Overview */}
                <FormField
                    control={form.control}
                    name="overview"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Blog Overview</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Give some insight..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Tags */}
                <FormField
                    control={form.control}
                    name="tags"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tags (comma-separated)</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. nextjs, typescript, react" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Rich Text Editor */}
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Blog Content</FormLabel>
                            <FormControl>
                                <TiptapEditor
                                    contentJSON={field.value}
                                    onChange={(json, html) => {
                                        setContentHTML(html);
                                        field.onChange(json);
                                    }}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="w-full bg-portfolio text-foreground dark:text-background cursor-pointer"
                    disabled={submitting}
                >
                    {submitting ? (
                        <span className="w-3 h-3 border-2 animate-spin border-y-foreground dark:border-y-background border-x-transparent rounded-full" />
                    ) : (
                        "Create Blog"
                    )}
                </Button>
            </form>
        </Form>
    );
}
