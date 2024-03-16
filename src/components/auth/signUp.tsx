import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const formSchema = z.object({
  fullName: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  password: z.string().refine(
    (value) => {
      // Regular expression to check for at least one lowercase letter,
      // one uppercase letter, and one number
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
      return passwordRegex.test(value);
    },
    {
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, and one number.",
    }
  ),
});

const SignUp = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async(values: z.infer<typeof formSchema>) => {
   
  };

  return (
    <div className="max-w-[400px] m-auto border rounded-xl p-5 shadow-gray-300 shadow-sm dark:shadow-none">
      <h1 className="text-center font-bold text-xl">Register</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
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
                  <Input placeholder="*****" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <p className="pt-2">
        Already a user?{" "}
        <Link
          to={"/signIn"}
          className="dark:text-blue-400 text-blue-700 hover:to-blue-600"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
