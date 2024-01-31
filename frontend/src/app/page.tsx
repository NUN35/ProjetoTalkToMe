import Button from "@/components/Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { Input } from "@/components/Input";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div className="w-full flex flex-1 items-center justify-center mx-auto">
                <div className=" max-w-[500px] h-full bg-secondary p-4 rounded-lg ">
                    <Container>
                        <div>
                            <span>Ingressar</span>
                            <span>Nova Reuniao</span>
                        </div>
                        <div className="space-y-4">
                            <Input placeholder="Digite o codigo da reuniao" type="text" />
                            <Input placeholder="Digite o codigo da reuniao" type="text" />
                            <Button title="Entrar" type="submit" />
                        </div>
                    </Container>
                </div>
            </div>
        </main>
    );
}
