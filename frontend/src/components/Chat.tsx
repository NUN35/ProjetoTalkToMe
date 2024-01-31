import Image from "next/image";

export default function Chat() {
    return (
        <div className="  bg-gray-900 px-4 pt-4 md:w-[15%] hidden md:flex rounded-md m-3 h-full">
            <div className="relative h-full w-full">
                <div className="bg-gray-950 rounded p-2">
                    <div className="flex items-center text-yellow-300 space-x-8">
                        <span>Joao red</span>
                        <span>22:00</span>
                    </div>
                    <div className="mt-5 text-sm">
                        <span>text</span>
                    </div>
                </div>
                <form action="" className="absolute bottom-5 w-full ">
                    <div>
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enviar mensagem"
                            className="px-3 py-2 bg-gray-950 rounded-md w-full"
                        />
                        <Image
                            className="absolute right-2 top-2.5 cursor-pointer"
                            src="/send.svg"
                            width={20}
                            height={20}
                            alt="send"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
