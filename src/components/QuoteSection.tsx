export default function QuoteSection() {
    return (
        <section className="py-16 lg:py-24 bg-secondary">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <blockquote className="space-y-6">
                        <svg
                            className="w-12 h-12 mx-auto text-primary/20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        <p className="text-2xl lg:text-4xl font-heading font-bold leading-relaxed">
                            "We don't just create content, we craft experiences that resonate with your audience and drive real results."
                        </p>

                        <footer className="text-muted-foreground">
                            <p className="font-semibold">— Rezintra Productions</p>
                            <p className="text-sm">No.1 Productions in Kerala</p>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </section>
    );
}
