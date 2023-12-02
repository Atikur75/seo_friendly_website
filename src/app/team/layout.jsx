export async function generateMetadata() {
    const res = await fetch(process.env.BASE_URL+"api/SiteMeta/team");
    const JSON = await res.json();
    return{
        title : JSON[0]["title"],
        description : JSON[0]["description"],
        keywords : JSON[0]["keywords"],
        openGraph : {
            image : JSON[0]["image"]
        }
    }
}

const Layout = ({ children }) => {
    return (
        <div>
            { children }
        </div>
    );
};

export default Layout;