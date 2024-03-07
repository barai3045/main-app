export async function generateMetadata(){
    return {
        title: "Team"
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