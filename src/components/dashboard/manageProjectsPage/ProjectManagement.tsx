/* eslint-disable prefer-const */
"use client"

import { deleteProject, getAllProjects } from "@/actions/project";
import ConfirmationAlert from "@/components/ConfirmationAlert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { IMeta, IProject } from "@/types";
import { format } from "date-fns";
import { Eye, Plus, SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";


interface ProjectManagementProps {
    data: IProject[];
    meta: IMeta;
};


const ProjectManagement = ({ data, meta }: ProjectManagementProps) => {

    const firstMount = useRef(true);
    const [magic, setMagic] = useState<boolean>(false);
    const [projects, setProjects] = useState<IProject[] | []>(data);
    const [metaData, setMetaData] = useState<IMeta>(meta);
    const [currentPage, setCurrentPage] = useState(metaData.page || 1);
    const pageQuery = `page=${currentPage}`;
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filter, setFilter] = useState<string>("");
    const [sort, setSort] = useState<string>("");
    const query = useMemo(() => {
        const queryStr = [searchTerm, filter, sort, pageQuery].filter(Boolean).join("&");
        return queryStr ? `?${queryStr}` : "";
    }, [searchTerm, filter, sort, pageQuery]);


    useEffect(() => {
        if (firstMount.current) {
            firstMount.current = false;
            return;
        }

        const refetch = async () => {
            const res = await getAllProjects(query);
            if (res.success) {
                setProjects(res.data.length > 0 ? res.data : []);
                setMetaData(res.meta);
            };
        };

        refetch();
    }, [query, magic]);


    const handleFilterValueChange = (value: string) => {
        setCurrentPage(1);
        if (value === "none") {
            setFilter("");
        } else {
            setFilter(value);
        }
    };

    const handleSortValueChange = (value: string) => {
        if (value === "none") {
            setSort("");
        } else {
            setSort(value);
        }
        setCurrentPage(1);
    };

    const handleRemoveProject = async (projectId: string, projectTitle: string) => {
        const toastId = toast.loading("Removing Project...");
        const res = await deleteProject(projectId, projectTitle);

        if (res.success) {
            setMagic(!magic);
            toast.success(res.message, { id: toastId });
        } else {
            toast.error(res.message, { id: toastId });
        }
    };

    return (
        <div>
            {/* Search, Filter, Sort */}
            <div className="flex max-[562px]:flex-col justify-center items-center gap-2 mb-10">

                {/* Search */}
                <Input
                    placeholder="Search by Title or Technologies"
                    value={searchTerm.replace("searchTerm=", "")}
                    onChange={(e) => {
                        setSearchTerm(`${e.target.value ? "searchTerm=" + e.target.value : ""}`);
                        setCurrentPage(1);
                    }}
                    className="max-w-xs"
                />

                {/* Filter */}
                <Select value={filter} onValueChange={(val) => handleFilterValueChange(val)}>
                    <SelectTrigger className="w-[130px] cursor-pointer">
                        <SelectValue placeholder="filter" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup className="*:cursor-pointer">
                            <SelectItem value="none">none</SelectItem>
                            <SelectItem value="featured=true">Featured</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                {/* Sort */}
                <Select value={sort} onValueChange={(val) => handleSortValueChange(val)}>
                    <SelectTrigger className="w-[130px] cursor-pointer">
                        <SelectValue placeholder="sort" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup className="*:cursor-pointer">
                            <SelectItem value="none">none</SelectItem>
                            <SelectItem value="sort=title">Title (A-Z) &uarr;</SelectItem>
                            <SelectItem value="sort=-title">Title (Z-A) &darr;</SelectItem>
                            <SelectItem value="sort=createdAt">Date (Oldest) &uarr;</SelectItem>
                            <SelectItem value="sort=-createdAt">Date (Newest) &darr;</SelectItem>
                            <SelectItem value="sort=featured">Featured (False) &uarr;</SelectItem>
                            <SelectItem value="sort=-featured">Featured (True) &darr;</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="flex justify-end mb-4">
                <Link href="/dashboard/add-project">
                    <Button className="bg-portfolio text-black cursor-pointer flex justify-center items-center gap-1">
                        <Plus /> Add New Project
                    </Button>
                </Link>
            </div>

            <div className="space-y-4">

                {/* Table */}
                <div className="overflow-x-auto">
                    <Table className="text-center [&_th]:text-center [&_td]:text-center [&_th]:font-semibold">
                        <TableHeader>
                            <TableRow>
                                <TableHead>Thumbnail</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Overview</TableHead>
                                <TableHead>Added on</TableHead>
                                <TableHead>Technologies</TableHead>
                                <TableHead>Featured</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {projects?.length > 0 ? (
                                projects.map((project: IProject) => (
                                    <TableRow key={project._id}>
                                        <TableCell>
                                            <Image
                                                src={project.thumbnail}
                                                alt="Thumbnail"
                                                width={100}
                                                height={70}
                                                className="w-[100px] h-[70px] mx-auto"
                                            />
                                        </TableCell>
                                        <TableCell>{project.title}</TableCell>
                                        <TableCell className="max-w-lg">{project.overview}</TableCell>
                                        <TableCell>{format(project.createdAt as string, "PP")}</TableCell>
                                        <TableCell className="max-w-lg flex justify-center items-center gap-1 flex-wrap">
                                            {project.technologies.map((tech: string, idx: number) => (
                                                <Badge key={idx} variant="secondary">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </TableCell>
                                        <TableCell>{project.featured ? "✅" : "❌"}</TableCell>
                                        <TableCell>
                                            <div className="flex flex-col justify-center items-center gap-3">
                                                <Link href={`/projects/${project.title}`} className="w-max hover:scale-110">
                                                    <Eye size={18} />
                                                </Link>
                                                <Link href={`/dashboard/manage-projects/update/${project.title}`} className="w-max hover:scale-110">
                                                    <SquarePen size={18} className="text-yellow-500" />
                                                </Link>
                                                <ConfirmationAlert
                                                    onConfirm={() => handleRemoveProject(project._id, project.title)}
                                                    dialogDescription="This Project will be Removed from Portfolio!"
                                                >
                                                    <Trash2 size={18} className="cursor-pointer text-red-500 hover:scale-110" />
                                                </ConfirmationAlert>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center">
                                        No Project Found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {metaData.totalPage > 0 && (
                    <div className="mt-10">
                        <Pagination>
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        onClick={() => setCurrentPage((prev) => prev - 1)}
                                        className={
                                            currentPage === 1
                                                ? "pointer-events-none opacity-50"
                                                : "cursor-pointer"
                                        }
                                    />
                                </PaginationItem>
                                {Array.from({ length: metaData.totalPage }, (_, index) => index + 1).map(
                                    (page) => (
                                        <PaginationItem
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className="cursor-pointer"
                                        >
                                            <PaginationLink isActive={currentPage === page}>
                                                {page}
                                            </PaginationLink>
                                        </PaginationItem>
                                    )
                                )}
                                <PaginationItem>
                                    <PaginationNext
                                        onClick={() => setCurrentPage((prev) => prev + 1)}
                                        className={
                                            currentPage === metaData.totalPage
                                                ? "pointer-events-none opacity-50"
                                                : "cursor-pointer"
                                        }
                                    />
                                </PaginationItem>
                            </PaginationContent>
                        </Pagination>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectManagement;