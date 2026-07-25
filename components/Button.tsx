"use client"

export default function Button() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded cursor-pointer mt-2"
      onClick={() => alert("Button Clicked!")}
    >
      Click me
    </button>
  )
}