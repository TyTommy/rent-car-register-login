import { Car } from "../../types/dataTypes";
import { Typography } from "antd";
import Card from "../card/Card";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

type Props = {
  title: string;
  data: Car[] | undefined;
  isLoading: boolean;
};

const Cars = ({ data, title, isLoading }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 ml-10 flex flex-col">
      <Title level={2}>{title}</Title>

      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {data?.map((car) => (
            <Card
              key={car._id}
              car={car}
              onClick={() => navigate(`/cars/${car._id}`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cars;
