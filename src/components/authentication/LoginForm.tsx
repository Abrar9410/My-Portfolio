"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Password from "@/components/ui/Password";
import { login } from "@/actions/auth";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


const loginSchema = z.object({
  email: z.email(),
  password: z.string()
});


export function LoginForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { setUser } = useUser();
  const router = useRouter();
  
  const onSubmit = async (data: z.infer<typeof loginSchema>) => {
    const toastId = toast.loading("Verifying Credentials...")
    try {
      const res = await login(data);
      if (res.success) {
        setUser(res.data.user);
        toast.success(res.message, { id: toastId });
        router.push("/dashboard");
      };
    } catch (err: any) {
      if (err.data.message === "Incorrect Password!") {
        toast.error("Invalid credentials", { id: toastId });
      } else {
        toast.error(err.data.message, { id: toastId });
      };
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Welcome Back!</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your credentials to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john@example.com"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Input your account email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Password {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    Input password for your account.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-portfolio text-foreground dark:text-background cursor-pointer">
              Login
            </Button>
          </form>
        </Form>
      </div>
      {/* <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/register" replace className="underline underline-offset-4">
          Register
        </Link>
      </div> */}
    </div>
  );
}
