import Link from "next/link";
import Layout from "../components/Layout";

const PostTitle = (props) => (
    <li>
        <Link as={ `/p/${ props.id }` } href={ `/post?title=${ props.title }` }>
            <a>{ props.title }</a>
        </Link>
    </li>
);

const Index = () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostTitle id="hello-nextjs" title="Hello, Next.js" />
            <PostTitle id="learn-nextjs" title="Learn Next.js is awesome" />
            <PostTitle id="deploy-nextjs" title="Deploy apps with Zelt" />
        </ul>
    </Layout>
);

export default Index;