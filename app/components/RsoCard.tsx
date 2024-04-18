import { DbRso, JoinRso, State } from "./server/actions";
import { Dispatch, SetStateAction } from "react"; // Add missing import statement

interface RsoCardProps {
  event: DbRso;
  setIsLoading: Dispatch<SetStateAction<Boolean>>;
  handleStateChange: any
}

interface RsoJoinData {
  username: string;
  rso_name: string;
}

export default function RsoCard({ event, setIsLoading, handleStateChange } : RsoCardProps) {
  const handleSubmit = async () => {
    setIsLoading(true);

    const rsoJoinData : RsoJoinData = {
      username: event.rso_name,
      rso_name: event.rso_name,
    }

    const res : State = await JoinRso(rsoJoinData)
    setIsLoading(false);
    handleStateChange(res);
  }

  return (
    <div className="card md:w-96 w-80 glass bg-neutral">
      <div className="card-body">
        <h2 className="card-title">
          {event.rso_name}{" "}
        </h2>
        <div className="card-actions justify-start">
        </div>
        <div className="rounded-btn bg-neutral p-2 justify-start">
          <p className="py-4">{event.description}</p>
          <div className="flex flex-col bg-base-100 rounded-box m-2 p-2 border-success border-2">
              <p className="">Created on:</p>
              <p className="">{event.date_created}</p>
          </div>
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-secondary"
          onClick={handleSubmit}>
          Join
        </button>

      </div>
    </div>
  );
}
