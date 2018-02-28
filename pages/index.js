import Link from "next/link";

const Index = () => (
    <div>
        <Link href="/about" prefetch>
            <button>About page</button>
        </Link>
        <p>Hello Next.js</p>
    </div>
);

export default Index;