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

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Link } from "react-router-dom";

const formSchema = z.object({
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

const CreateHouse = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="max-w-[400px] m-auto border rounded-xl p-5 shadow-gray-300 shadow-sm dark:shadow-none">
      <h1 className="text-center font-bold text-xl">Create House</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
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
          {/* <div className="flex sm:flex-row flex-col sm:items-center gap-10"> */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input placeholder="" type="number" {...field} />
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
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                  <FormMessage />
                </FormItem>
              )}
            />
          {/* </div> */}
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateHouse;
