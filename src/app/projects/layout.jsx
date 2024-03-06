

export async function generateMetadata(){
    return {
        title: "Projects"
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