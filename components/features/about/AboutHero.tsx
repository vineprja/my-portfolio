
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
    return (
        <Section className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gradient">
                        About Me
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        I am an Information Technology student with a growing passion for web development and design. I enjoy creating simple, clean, and user-friendly interfaces that improve user experience.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <Button size="lg" className="group" asChild>
                        <Link href="/resumee.jpg" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="https://myaccount.google.com/personal-info?utm_source=OGB&utm_medium=app">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Me
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <Image
                    src="/resumee.jpg"
                    alt="Coding Environment"
                    width={400}
                    height={400}
                />
            </div>
        </Section>
    );
}