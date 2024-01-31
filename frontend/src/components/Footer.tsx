"use client";
import { Cam, CamOff, Computer, ComputerOff, Mic, MicOff, Phone, PhoneClose } from "@/Icons";
import Container from "./Container";
import { useState } from "react";

export default function Footer() {
    const [isMuted, setIsMuted] = useState(false);
    const [isCameraOff, setIsCameraOff] = useState(false);
    const [isScreenSharing, setIsScreenSharing] = useState(false);
    //Function to get current time
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0") + " : ";
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return (
        <div className="fixed bottom-0 bg-black py-6 w-full">
            <Container>
                <div className="grid grid-cols-3">
                    <div className="flex items-center">
                        <span className="text-xl">
                            {hours} {minutes}
                        </span>
                    </div>
                    <div className="flex space-x-2 justify-center">
                        {isMuted ? (
                            <MicOff
                                className="h-12 w-16 text-white p-2 cursor-pointer bg-red-500 rounded-md"
                                onClick={() => setIsMuted(!isMuted)}
                            />
                        ) : (
                            <Mic
                                className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md"
                                onClick={() => setIsMuted(!isMuted)}
                            />
                        )}

                        {isCameraOff ? (
                            <CamOff
                                className="h-12 w-16 text-white p-2 cursor-pointer bg-red-500 rounded-md"
                                onClick={() => setIsCameraOff(!isCameraOff)}
                            />
                        ) : (
                            <Cam
                                className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md"
                                onClick={() => setIsCameraOff(!isCameraOff)}
                            />
                        )}

                        {isScreenSharing ? (
                            <ComputerOff
                                className="h-12 w-16 text-white p-2 cursor-pointer bg-red-500 rounded-md"
                                onClick={() => setIsScreenSharing(!isScreenSharing)}
                            />
                        ) : (
                            <Computer
                                className="h-12 w-16 text-white p-2 cursor-pointer bg-gray-950 rounded-md"
                                onClick={() => setIsScreenSharing(!isScreenSharing)}
                            />
                        )}

                        <Phone className="h-12 w-16 text-white p-2 cursor-pointer hover:bg-red-500 bg-primary rounded-md" />
                    </div>
                </div>
            </Container>
        </div>
    );
}
