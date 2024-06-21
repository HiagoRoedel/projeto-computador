import Image from "next/image"

export default function Header() {
    return (
        <>
            <section>
                <header>
                    <div className="w-full h-auto px-12 pt-5 pb-5">
                        <div className="grid">
                            <Image
                                src="/logo-pichau-2021-dark.png"
                                width={182}
                                height={182}
                                alt="Faculdade Única"
                                className="h-12 w-auto"
                            />
                        </div>
                    </div>
                </header>
            </section>

        </>
    )
}