export default function LoginLayout({
    children,
}: {
    children : React.ReactNode
}) {
    return (
        <section className="grid w-dvh h-dvh items-center justify-items-center
                            bg-gradient-to-br from-base-100 to-indigo-800 
                            via-neutral animate-gradient-x">
            {children}
        </section>
    )
}