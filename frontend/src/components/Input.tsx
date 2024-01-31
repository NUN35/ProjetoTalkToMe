import { ForwardRefRenderFunction, forwardRef } from "react";
interface IInput {
    placeholder: string;
    type: string;
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = ({ placeholder, type, ...rest }, ref) => {
    return (
        <div className="w-full">
            <label>
                <input
                    type={type}
                    placeholder={placeholder}
                    ref={ref}
                    {...rest}
                    className="px-3 py-2 bg-gray-950 rounded-md w-full"
                />
            </label>
        </div>
    );
};

export const Input = forwardRef(InputBase);
