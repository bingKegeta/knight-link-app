export default function RegisterLayout({
    children,
}: {
    children : React.ReactNode
}) {
    return (
        <section className="h-[100svh] flex items-center justify-center m-auto 
                            bg-gradient-to-br from-base-100 to-indigo-800 
                            via-neutral animate-gradient-x">
            {children}
        </section>
    )
}