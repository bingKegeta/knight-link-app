import Link from "next/link";

export default function CloseBtn() {
    return (
        <div className="card-actions w-full flex items-center justify-center relative">
            <h1 className="card-title">
            <Link href="/" className="absolute top-0 right-0">
                <div className="btn btn-square btn-sm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                </div>
            </Link>
            </h1>
        </div>
    );
}