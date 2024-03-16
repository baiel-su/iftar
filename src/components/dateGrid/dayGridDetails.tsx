import { Link, useParams } from "react-router-dom";
import { Button } from "../ui/button";

const DayGridDetails = () => {
  const { date } = useParams();

  return (
    <div>
      <h1 className="text-start">
        <span className="font-bold">Date:</span> {date}
      </h1>
      <div>
        <Button className="border rounded px-2 mt-5 text-sm">
          <Link to={`/details/${date}/create-house`}>Create a house</Link>
        </Button>
        <div className="border rounded p-2 px-5 mt-5">
          <div className="grid grid-cols-2  justify-items-between">
            <p>Host:</p>
            <p>Address:</p>
            <p>Gender:</p>
            <p>Quantity:</p>
          </div>
          <button className="px-2 py-1 border rounded bg-black text-white text-xs mt-2">
            Add your name
          </button>
        </div>
      </div>
    </div>
  );
};

export default DayGridDetails;
