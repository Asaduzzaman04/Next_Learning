"use client";
const Button = () => {
  return (
    <div className=" border px-5 py-2 flex flex-col gap-5  justify-center items-center">
      <button
        onClick={() => console.log("i am client button")}
        className="capitalize rounded-md px-4 py-1 bg-red-600 active:scale-95 transition-all duration-150 ease-linear"
      >
        click me
      </button>
      <p>i am client component</p>
    </div>
  );
};

export default Button;
