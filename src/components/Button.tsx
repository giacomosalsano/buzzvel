import React from "react";

type ButtonProps = {
  message: string;
};

export default function Button({ message }: ButtonProps) {
  return (
    <div className="bg-black text-white rounded-full px-4 py-2 max-w-52">
      <button>{message}</button>
    </div>
  );
}
