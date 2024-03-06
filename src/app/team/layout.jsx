export async function generateMetadata(){
    return {
        title: "Team"
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