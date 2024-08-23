import { useNavigate, useParams } from "react-router-dom";
import { useGetCarsQuery } from "../../redux/api/car-api";
import { useEffect, useState } from "react";
import { Car } from "../../types/dataTypes";
import parse from "html-react-parser";

const Details: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCarsQuery();
  const [selectedCar, setSelectedCar] = useState<Car>();
  const [mainImage, setMainImage] = useState<string>();
  const [price, setPrice] = useState<number>();

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const car = data.payload.find((car) => car._id === id);
      if (car) {
        setSelectedCar(car);
        setMainImage(car.images[0]);

        const discountAmount = (car.rent_price * car.discount) / 100;
        const fixedDiscountAmount = Number(discountAmount.toFixed(2));
        const price = car.rent_price - fixedDiscountAmount;

        setPrice(price < 0 ? 0 : price);
      }
    }
  }, [id, data]);

  if (isLoading) return "Loading...";

  return (
    <div className="flex justify-center items-center p-8">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden flex">
        {/* Left Side */}
        <div className="w-2/3 p-4">
          {/* Go Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-4 text-blue-500 hover:text-blue-700"
          >
            &larr; Go Back
          </button>

          <div className="mt-4">
            <img src={mainImage} alt="Car" className="w-full rounded-md" />
          </div>
          <div className="mt-4 flex space-x-2">
            {selectedCar?.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-14 object-cover rounded-md cursor-pointer ${
                  mainImage === image ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/3 p-6 bg-gray-100">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">{selectedCar?.model}</h3>
            <div className="text-red-500">
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex items-center">
              <svg
                className="w-4 h-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                className="w-4 h-4 fill-current text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <svg
                className="w-4 h-4 fill-current text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
            <span className="ml-2 text-sm text-gray-600">440+ Reviewer</span>
          </div>
          <p className="mt-4 text-gray-700">
            {selectedCar?.description ? parse(selectedCar.description) : null}
          </p>
          <div className="mt-4 text-gray-600">
            <p className="flex justify-between">
              <span>Type Car</span>{" "}
              <span className="font-semibold text-gray-900">Sport</span>
            </p>
            <p className="flex justify-between mt-2">
              <span>Capacity</span>{" "}
              <span className="font-semibold text-gray-900">
                {selectedCar?.seats} Person
              </span>
            </p>
            <p className="flex justify-between mt-2">
              <span>Steering</span>{" "}
              <span className="font-semibold text-gray-900">
                {selectedCar?.transmission}
              </span>
            </p>
            <p className="flex justify-between mt-2">
              <span>Gasoline</span>{" "}
              <span className="font-semibold text-gray-900">
                {selectedCar?.fuel}
              </span>
            </p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex flex-col">
              <span>
                <span className="text-2xl font-bold text-blue-500">
                  ${price}/
                </span>
                days
              </span>
              <span className="text-xl line-through text-gray-500">
                ${selectedCar?.rent_price}
              </span>
            </div>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={() => navigate("/auth/register")}
            >
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
