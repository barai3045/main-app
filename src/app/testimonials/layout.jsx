export async function generateMetadata(){
    return {
        title: "Testimonials"
    }
}

const layout = ({chieldren}) => {
    return (
        <div>
            {chieldren}
        </div>
    );
};

export default layout;