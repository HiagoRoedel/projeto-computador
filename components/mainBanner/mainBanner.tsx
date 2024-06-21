import Image from "next/image";

export default function Banner() {
    return (
        <>
            <div className="flex">
                <Image
                    src={'/arraiagamer.webp'}
                    alt="arraiagamer"
                    width={1600}
                    height={350}
                />
            </div>

        </>
    )
}