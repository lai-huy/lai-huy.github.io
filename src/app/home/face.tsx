import Image from "next/image";

export default function Face() {
    return (
        <div className="face-container">
            <Image
                alt="Huy Quang Lai"
                src="/assets/images/face.jpg"
                width={400}
                height={591}
                className="face"
                loading="eager"
            />
        </div>
    );
}
