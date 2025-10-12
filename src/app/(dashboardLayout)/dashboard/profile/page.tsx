import { Metadata } from "next";
import { Card, CardContent, CardHeader, /*CardTitle*/ } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { EditProfile } from "@/components/modals/EditProfile";
import { ChangePassword } from "@/components/modals/ChangePassword";
import { getMe } from "@/actions/user";
import ProfileField from "@/components/dashboard/profilePage/ProfileField";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";


export const metadata: Metadata = {
    title: "Profile",
    description: ""
};


const ProfilePage = async () => {

    const user = await getMe();

    return (
        <div className="p-4 sm:p-6">
            <Card className="max-w-3xl mx-auto shadow-md">
                {/* Header Section */}
                <CardHeader className="flex flex-col items-center">
                    <div className="w-40 h-48 border border-foreground rounded-xl overflow-hidden">
                        <Image
                            src={user.picture ? user.picture as string : "https://res.cloudinary.com/example.png"}
                            alt={user.name?.slice(0, 1).toUpperCase() as string}
                            width={160}
                            height={192}
                            className="object-cover"
                        />
                    </div>
                </CardHeader>

                {/* Content Section */}
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
                        <ProfileField label="Name" value={user.name} />
                        <ProfileField label="Email" value={user.email} />
                    </div>

                    <Separator />

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between max-sm:gap-4">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <EditProfile user={user}>
                                    <Button disabled variant="default" className="w-full sm:w-40 border border-white bg-[#151925] text-white hover:bg-white hover:text-[#151925] cursor-pointer">
                                        Edit Profile
                                    </Button>
                                </EditProfile>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-red-500">This button is temporarily Disabled</p>
                            </TooltipContent>    
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ChangePassword>
                                    <Button disabled variant="outline" className="w-full sm:w-40 cursor-pointer">
                                        Change Password
                                    </Button>
                                </ChangePassword>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p className="text-red-500">This button is temporarily Disabled</p>
                            </TooltipContent>    
                        </Tooltip>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProfilePage;