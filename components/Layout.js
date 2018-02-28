import Header from "./Header";

const layoutStyle = {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ddd"
};

const Layout = (props) => (
    <div style={ layoutStyle }>
        <Header />
        { props.children }
    </div>
);

export default Layout;