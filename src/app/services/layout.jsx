
export async function generateMetadata(){
    return {
        title: "Services"
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