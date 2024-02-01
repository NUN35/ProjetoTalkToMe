"use client";
import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SocketContext } from "@/contexts/SocketContext";
import { useContext, useEffect } from "react";

export default function Room({ params }: { params: { id: string } }) {
    const { socket } = useContext(SocketContext);
    useEffect(() => {
        socket?.on("connect", async () => {
            console.log("conectado");
            socket.emit("subscribe", {
                roomId: params.id,
                socketId: socket.id,
            });
        });
    }, [socket]);
    return (
        <div className="h-screen">
            <Header />
            <div className="flex h-[80%]">
                <div className="md:w-[85%] w-full m-3">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="bg-gray-950 w-full rounded-md h-full p2">
                            <video className="h-full w-full" src=""></video>
                            <span className="absolute bottom-3">wesley</span>
                        </div>
                        <div className="bg-gray-950 w-full rounded-md h-full p2">
                            <video className="h-full w-full" src=""></video>
                            <span className="absolute bottom-3">wesley</span>
                        </div>
                        <div className="bg-gray-950 w-full rounded-md h-full p2">
                            <video className="h-full w-full" src=""></video>
                            <span className="absolute bottom-3">wesley</span>
                        </div>
                        <div className="bg-gray-950 w-full rounded-md h-full p2">
                            <video className="h-full w-full" src=""></video>
                            <span className="absolute bottom-3">wesley</span>
                        </div>
                    </div>
                </div>

                <Chat />
            </div>
            <Footer />
        </div>
    );
}
