"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Check, Loader2 } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronsUpDown } from "lucide-react"
import { countries } from "@/data/countries-data"
import { headingCss, paragraphCss } from "@/constants"
import { LinePullUp } from "../line-pull-up"
import { CustomButton2 } from "../custom-button"

const formSchema = z.object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    country: z.object({
        code: z.string(),
        name: z.string(),
        dial_code: z.string(),
    }),
    phoneNumber: z.string().optional(),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            country: countries.find((c) => c.code === "US") || countries[0],
            phoneNumber: "",
            message: "",
        },
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await res.json()

            if (!res.ok) {
                console.error(result)
                alert("Failed to send message.")
                return
            }

            setIsSubmitted(true)
            setTimeout(() => {
                setIsSubmitted(false)
                form.reset()
            }, 3000)
        } catch (err) {
            console.error(err)
            alert("Something went wrong.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    }

    function cn(...inputs: any[]) {
        let classes = ""
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i]
            if (typeof input === "string") {
                classes += input + " "
            } else if (typeof input === "object" && input !== null) {
                for (const key in input) {
                    if (input.hasOwnProperty(key) && input[key]) {
                        classes += key + " "
                    }
                }
            }
        }
        return classes.trim()
    }

    return (
        <section className="mb-20">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
                    <div>
                        <LinePullUp text={["Get in touch"]} gradient={false} className={`${headingCss}`} />
                        <LinePullUp text={["Have a project in mind? Let's do it together"]} gradient={false} className={`${paragraphCss} !text-sm font-medium`} />
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <motion.div variants={itemVariants}>
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-foreground">
                                                    First name <span className="text-destructive">*</span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        className="ring-0 focus:ring-0 focus:outline-none focus-visible:ring-transparent focus-visible:outline-none"
                                                        placeholder="First name"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-foreground">
                                                    Last name <span className="text-destructive">*</span>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input className="ring-0 focus:ring-0 focus:outline-none focus-visible:ring-transparent focus-visible:outline-none" placeholder="Last name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </motion.div>
                            </div>

                            <motion.div variants={itemVariants}>
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-foreground">
                                                Email <span className="text-destructive">*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <Input className="ring-0 focus:ring-0 focus:outline-none focus-visible:ring-transparent focus-visible:outline-none" placeholder="you@company.com" type="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-foreground">Phone number</FormLabel>
                                            <div className="flex gap-2">
                                                <div className="w-[180px]">
                                                    <FormField
                                                        control={form.control}
                                                        name="country"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <Popover>
                                                                    <PopoverTrigger asChild>
                                                                        <FormControl>
                                                                            <Button
                                                                                variant="outline"
                                                                                role="combobox"
                                                                                className="w-full justify-between font-normal"
                                                                            >
                                                                                <div className="flex items-center gap-2 truncate">
                                                                                    <span>{field.value.code}</span>
                                                                                    <span className="truncate">{field.value.dial_code}</span>
                                                                                </div>
                                                                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                                            </Button>
                                                                        </FormControl>
                                                                    </PopoverTrigger>
                                                                    <PopoverContent className="w-[300px] p-0" align="start">
                                                                        <Command>
                                                                            <CommandInput placeholder="Search country..." />
                                                                            <CommandEmpty>No country found.</CommandEmpty>
                                                                            <CommandList>
                                                                                <ScrollArea className="h-[300px]">
                                                                                    <CommandGroup>
                                                                                        {countries.map((country) => (
                                                                                            <CommandItem
                                                                                                key={country.code}
                                                                                                value={`${country.name} ${country.dial_code}`}
                                                                                                onSelect={() => {
                                                                                                    form.setValue("country", country)
                                                                                                }}
                                                                                            >
                                                                                                <div className="flex items-center">
                                                                                                    <span className="mr-2 w-6">{country.code}</span>
                                                                                                    <span className="mr-2 w-16">{country.dial_code}</span>
                                                                                                    <span className="flex-1 truncate">{country.name}</span>
                                                                                                </div>
                                                                                                <Check
                                                                                                    className={cn(
                                                                                                        "ml-auto h-4 w-4",
                                                                                                        field.value.code === country.code ? "opacity-100" : "opacity-0",
                                                                                                    )}
                                                                                                />
                                                                                            </CommandItem>
                                                                                        ))}
                                                                                    </CommandGroup>
                                                                                </ScrollArea>
                                                                            </CommandList>
                                                                        </Command>
                                                                    </PopoverContent>
                                                                </Popover>
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <FormControl>
                                                        <Input className="ring-0 focus:ring-0 focus:outline-none focus-visible:ring-transparent focus-visible:outline-none flex-1" placeholder="Phone number" {...field} />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-foreground">
                                                Message <span className="text-destructive">*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea

                                                    placeholder="Leave me a message..."
                                                    className="min-h-[120px] resize-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-transparent focus-visible:outline-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants} className="pt-2">
                                <CustomButton2 disabled={isSubmitting} size='md' className='' spinSpeed='fast'>
                                    <span>
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-centers">
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Sending...
                                            </div>
                                        ) : isSubmitted ? (
                                            <div className="flex items-center justify-centers">
                                                <Check className="mr-2 h-4 w-4" />
                                                Message sent
                                            </div>
                                        ) : (
                                            "Send message"
                                        )}
                                        {/* </Button> */}
                                    </span>
                                </CustomButton2>
                            </motion.div>
                        </form>
                    </Form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="hidden lg:block relative"
                >
                    <div className="sticky top-20">
                        <img
                            src="/bitmoji/bitmoji2.png"
                            alt="Decorative image"
                            className="rounded-lg w-[35rem] object-cover hidden lg:block"
                        />
                    </div>
                </motion.div>
            </div>
        </section >
    )
}