interface CheckInProps {
    current: number;
    handleNext: () => void;
    handleBack: () => void;
    formData: {
        basicInfo: any;
        visualInfo: any[];
        technicalInfo: any;
    };
}

const CheckIn: React.FC<CheckInProps> = ({ handleNext, handleBack, formData }) => {
    const { basicInfo, visualInfo, technicalInfo } = formData;

    return (
        <div className="p-12 flex flex-col gap-4">
            <div>
                <h3>Basic Information:</h3>
                <pre>{JSON.stringify(basicInfo, null, 2)}</pre>
            </div>
            <div>
                <h3>Visual Information:</h3>
                {visualInfo.length > 0 ? (
                    visualInfo.map((file, index) => <img key={index} src={file.url} alt={`Visual ${index + 1}`} />)
                ) : (
                    <p>No visual data available.</p>
                )}
            </div>
            <div>
                <h3>Technical Information:</h3>
                <pre>{JSON.stringify(technicalInfo, null, 2)}</pre>
            </div>
            <div>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleNext}>Confirm</button>
            </div>
        </div>
    );
};

export default CheckIn;
