
export async function generateMetadata(){
    return {
        title: "Services"
    }
}

const layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default layout;