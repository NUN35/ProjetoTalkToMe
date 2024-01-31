"use client";
import { useState } from "react";
import Button from "./Button";
import { Input } from "./Input";

export function FormWrapper() {
    const [selectedRoom, setSelectedRoom] = useState<"join" | "create">("join");
    const handleSelectRoom = (room: "join" | "create") => {
        setSelectedRoom(room);
    };
    return (
        <div className="h-full">
            <div className="flex items-center text-center">
                <span
                    className={`w-1/2 p-4 cursor-pointer ${
                        selectedRoom === "join" && " bg-secondary rounded-t-lg text-primary"
                    }`}
                    onClick={() => handleSelectRoom("join")}
                >
                    Ingressar
                </span>
                <span
                    className={`w-1/2 p-4 cursor-pointer ${
                        selectedRoom === "create" && " bg-secondary rounded-t-lg text-primary"
                    }`}
                    onClick={() => handleSelectRoom("create")}
                >
                    Nova Reuniao
                </span>
            </div>

            <div className=" bg-secondary py-4 rounded-b space-y-8 px-10">
                <Input placeholder="Seu nome" type="text" />
                <Input placeholder="Seu Id da reuniao" type="text" />
                <Button title="Entrar" type="submit" />
            </div>
        </div>
    );
}
