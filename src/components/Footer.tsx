export default function Footer({ name }: { name: string }) {
    return (
        <footer className="py-8 px-4 border-t border-border">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
                <p>
                    &copy; {new Date().getFullYear()} {name}. All rights reserved.
                </p>
                <p className="font-mono text-xs">
                    Built with Next.js + Tailwind CSS
                </p>
            </div>
        </footer>
    );
}
