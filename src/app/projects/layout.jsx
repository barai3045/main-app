

export async function generateMetadata(){
    return {
        title: "Projects"
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