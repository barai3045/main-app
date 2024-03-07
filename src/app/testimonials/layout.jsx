export async function generateMetadata(){
    return {
        title: "Testimonials"
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