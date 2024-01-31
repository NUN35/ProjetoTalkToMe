import Image from "next/image";
import Container from "./Container";

export default function Header() {
    return (
        <div className="bg-gray-950 px-4 py-5">
            <Container>
                <div className="flex justify-between">
                    <Image alt="Talk to Me!" src="/logoPrimary.svg" width={120} height={120} />
                    <Image alt="Hero Code" src="/hero.svg" width={60} height={60} />
                </div>
            </Container>
        </div>
    );
}
