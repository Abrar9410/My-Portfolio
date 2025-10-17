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
import { useRouter } from "next/navigation";
import { updateProject } from "@/actions/project";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format, formatISO, parseISO } from "date-fns";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { IProject } from "@/types";

const updateProjectSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    overview: z.string().min(3, "Overview must be at least 3 characters"),
    technologies: z.string().min(1, "Mention the technologies used for this Project"),
    startDate: z.date("Provide the starting date"),
    endDate: z.date().optional(),
    thumbnail: z
        .any()
        .refine(
            (file) => file === undefined || file === null || file instanceof File,
            { message: "Thumbnail must be a valid file" }
        )
        .optional(),
    details: z
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
            { message: "Project Details cannot be empty!" }
        ),
    github_repo: z.url("Please provide a valid URL (e.g. https://example.com)"),
    live_link: z.url("Please provide a valid URL (e.g. https://example.com)"),
    featured: z.enum(["yes", "no"])
});

type ProjectFormValues = z.infer<typeof updateProjectSchema>;

export default function UpdateProjectForm({project}: {project: IProject}) {

    const [contentHTML, setContentHTML] = useState(project.detailsHTML);
    const [submitting, setSubmitting] = useState(false);
    const router = useRouter();

    const form = useForm<ProjectFormValues>({
        resolver: zodResolver(updateProjectSchema),
        defaultValues: {
            title: project.title,
            overview: project.overview,
            technologies: project.technologies.join(", "),
            startDate: parseISO(project.startDate),
            endDate: project.endDate !== "Present" ? parseISO(project.endDate as string) : undefined,
            details: project.detailsJSON,
            github_repo: project.github_repo,
            live_link: project.live_link,
            featured: project.featured ? "yes" : "no"
        },
    });

    const onSubmit = async (data: ProjectFormValues) => {
        setSubmitting(true);
        const { thumbnail, details, startDate, endDate, featured, ...rest } = data;
        const toastId = toast.loading("Adding New Project...");

        try {
            const formData = new FormData();
            formData.append(
                "data",
                JSON.stringify({
                    ...rest,
                    detailsJSON: details,
                    detailsHTML: contentHTML,
                    technologies: rest.technologies.split(",").map((t) => t.trim()),
                    startDate: formatISO(startDate),
                    endDate: endDate ? formatISO(endDate) : "Present",
                    featured: featured === "yes" ? true : false
                })
            );
            if (thumbnail) {
                formData.append("file", thumbnail);
            };

            const res = await updateProject(project._id, formData);

            if (res.success) {
                toast.success(res.message, { id: toastId });
                setContentHTML("");
                form.reset();
                router.push("/projects");
            } else {
                toast.error(res.message, { id: toastId });
            }
        } catch (err) {
            console.error(err);
            toast.error("An error occurred while adding the project", { id: toastId });
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
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter project title" {...field} />
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
                            <FormLabel className="w-max mx-auto text-yellow-500">
                                Thumbnail Image (Upload only if you want to change the current Thumbnail)
                            </FormLabel>
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
                            <FormLabel>Overview</FormLabel>
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
                    name="technologies"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Technologies (comma-separated)</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g. nextjs, typescript, react" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Start-Date & End-Date */}
                <div className="flex justify-center gap-8">
                    {/* Start-Date */}
                    <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="w-max mx-auto">Started on:</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "max-w-[240px] pl-3 text-left font-normal cursor-pointer",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick starting date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            captionLayout="dropdown"
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    
                    {/* End-Date */}
                    <FormField
                        control={form.control}
                        name="endDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel className="w-max mx-auto">Ended on:</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "max-w-[240px] pl-3 text-left font-normal cursor-pointer",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Pick ending date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            captionLayout="dropdown"
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Rich Text Editor */}
                <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Project Details</FormLabel>
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

                <div className="flex max-sm:flex-col justify-center gap-8">
                    {/* GitHub Repo Link */}
                    <FormField
                        control={form.control}
                        name="github_repo"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>GitHub Link</FormLabel>
                                <FormControl>
                                    <Input type="url" placeholder="Enter GitHub Repo Link" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Live Link */}
                    <FormField
                        control={form.control}
                        name="live_link"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Live Link</FormLabel>
                                <FormControl>
                                    <Input type="url" placeholder="Enter Live Link" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Featured? */}
                <div className="flex justify-center">
                    <FormField
                        control={form.control}
                        name="featured"
                        render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Is Featured?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue="no"
                                        className="flex flex-col"
                                    >
                                        <FormItem className="flex items-center gap-3">
                                            <FormControl>
                                                <RadioGroupItem value="yes" className="cursor-pointer" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Yes
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center gap-3">
                                            <FormControl>
                                                <RadioGroupItem value="no" className="cursor-pointer" />
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                No
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <Button
                    type="submit"
                    className="w-full bg-portfolio text-foreground dark:text-background cursor-pointer"
                    disabled={submitting}
                >
                    {submitting ? (
                        <span className="w-3 h-3 border-2 animate-spin border-y-foreground dark:border-y-background border-x-transparent rounded-full" />
                    ) : (
                        "Update Project"
                    )}
                </Button>
            </form>
        </Form>
    );
}
