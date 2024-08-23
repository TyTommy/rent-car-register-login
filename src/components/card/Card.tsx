import { Card } from "antd";
import { Car } from "../../types/dataTypes";
import { BsFuelPump } from "react-icons/bs";
import { MdOutlineMotionPhotosAuto } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";

const CardComponent = ({ car, onClick }: { car: Car; onClick: () => void }) => {
  return (
    <Card
      hoverable
      style={{ width: 317, height: 388 }}
      title={`${car.model}`}
      cover={
        <img
          className="ml-6 mt-1"
          style={{ width: 272 }}
          alt={car.description}
          src={car.thumbnail}
        />
      }
      onClick={onClick}
    >
      <div className="flex justify-between text-[#90A3BF] mb-[30px]">
        <div className="flex items-center gap-1">
          <BsFuelPump style={{ fontSize: 24 }} />
          <p>{car.fuel}</p>
        </div>
        <div className="flex items-center gap-1">
          <MdOutlineMotionPhotosAuto style={{ fontSize: 24 }} />
          <p>{car.transmission}</p>
        </div>
        <div className="flex items-center gap-1">
          <MdPeopleAlt style={{ fontSize: 24 }} />
          <p>{car.seats}People</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-[20px] font-[700]  text-[#1A202C]">
            ${car.price}/
            <span className="text-[14px] leading-4 font-[600] text-[#90A3BF]">
              day
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <button className="bg-[#3563E9] text-[white] rounded-[5px] px-5 py-2">
            Rent Now
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CardComponent;
