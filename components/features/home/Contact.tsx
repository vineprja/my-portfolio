
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Section } from "@/components/common/Section";
import Link from "next/link";

export function Contact() {
    return (
        <Section id="contact" className="space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in touch</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {"Want to collaborate or share an idea? Don’t hesitate to reach out. I’m always open to new projects and creative opportunities."}
                </p>

                <Button size="lg" asChild>
                    <Link href="https://myaccount.google.com/personal-info?utm_source=OGB&utm_medium=app">
                        <Mail className="mr-1 h-4 w-4" />
                        Message Me
                    </Link>
                </Button>
            </div>
        </Section>
    );
}