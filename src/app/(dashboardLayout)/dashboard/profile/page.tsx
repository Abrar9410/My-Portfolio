import { Metadata } from "next";
import { Card, CardContent, CardHeader, /*CardTitle*/ } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { EditProfile } from "@/components/modals/EditProfile";
import { ChangePassword } from "@/components/modals/ChangePassword";
import { getMe } from "@/actions/user";
import ProfileField from "@/components/dashboard/profilePage/ProfileField";
import Image from "next/image";
import PageLoading from "@/app/loading";


export const metadata: Metadata = {
    title: "Profile",
    description: ""
};


const ProfilePage = async () => {

    const user = await getMe();

    if (!user) {
        return <PageLoading />;
    };

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
                    <p className="text-red-500 text-xs text-center">
                        Buttons are disabled for security
                    </p>
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-between items-center max-sm:gap-4">
                        <EditProfile user={user}>
                            <div className="w-full sm:w-40 px-4 py-2 rounded-lg border bg-[#151925]/70 text-white/70 text-sm hover:bg-white hover:text-[#151925] cursor-not-allowed pointer-events-none">
                                Edit Profile
                            </div>
                        </EditProfile>
                        
                        <ChangePassword>
                            <Button disabled variant="outline" className="w-full sm:w-40 cursor-pointer">
                                Change Password
                            </Button>
                        </ChangePassword>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ProfilePage;