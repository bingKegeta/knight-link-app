import { EventProps } from "../helpers/interfaces";
import { EventButtons } from "./EventButtons";

export default function EventCard(event: EventProps) {
  return (
    <div className="card w-96 glass bg-neutral">
      <div className="card-body">
        <h2 className="card-title">
          {event.name}{" "}
          <a
            className="tooltip tooltip-primary tooltip-right"
            data-tip={
              event.visibility === "private"
                ? event.uni
                : event.visibility === "rso"
                ? event.rso
                : "public"
            }
          >
            <span className="badge badge-accent badge-info">
              {event.visibility === "public" ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    d="M16.719 19.7519L16.0785 14.6279C15.8908 13.1266 14.6146 12 13.1017 12H12H10.8983C9.38538 12 8.10917 13.1266 7.92151 14.6279L7.28101 19.7519C7.1318 20.9456 8.06257 22 9.26556 22H12H14.7344C15.9374 22 16.8682 20.9456 16.719 19.7519Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="5"
                    r="3"
                    stroke="#000000"
                    strokeWidth="2"
                  />
                  <circle
                    cx="4"
                    cy="9"
                    r="2"
                    stroke="#000000"
                    strokeWidth="2"
                  />
                  <circle
                    cx="20"
                    cy="9"
                    r="2"
                    stroke="#000000"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 14H3.69425C2.71658 14 1.8822 14.7068 1.72147 15.6712L1.38813 17.6712C1.18496 18.8903 2.12504 20 3.36092 20H7"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 14H20.3057C21.2834 14 22.1178 14.7068 22.2785 15.6712L22.6119 17.6712C22.815 18.8903 21.8751 20 20.6392 20C19.4775 20 18.0952 20 17 20"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : event.visibility === "private" ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  height="800px"
                  width="800px"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 opacity-70"
                >
                  <g>
                    <path
                      d="M505.837,180.418L279.265,76.124c-7.349-3.385-15.177-5.093-23.265-5.093c-8.088,0-15.914,1.708-23.265,5.093
		L6.163,180.418C2.418,182.149,0,185.922,0,190.045s2.418,7.896,6.163,9.627l226.572,104.294c7.349,3.385,15.177,5.101,23.265,5.101
		c8.088,0,15.916-1.716,23.267-5.101l178.812-82.306v82.881c-7.096,0.8-12.63,6.84-12.63,14.138c0,6.359,4.208,11.864,10.206,13.618
		l-12.092,79.791h55.676l-12.09-79.791c5.996-1.754,10.204-7.259,10.204-13.618c0-7.298-5.534-13.338-12.63-14.138v-95.148
		l21.116-9.721c3.744-1.731,6.163-5.504,6.163-9.627S509.582,182.149,505.837,180.418z"
                    />
                    <path
                      d="M256,346.831c-11.246,0-22.143-2.391-32.386-7.104L112.793,288.71v101.638
		c0,22.314,67.426,50.621,143.207,50.621c75.782,0,143.209-28.308,143.209-50.621V288.71l-110.827,51.017
		C278.145,344.44,267.25,346.831,256,346.831z"
                    />
                  </g>
                </svg>
              )}
            </span>
          </a>
        </h2>
        <div className="card-actions justify-start">
          {event.tags.map((text) => (
            <p key={text} className="badge badge-accent badge-outline">
              {text}
            </p>
          ))}
        </div>
        <div className="rounded-btn bg-neutral p-2 justify-start">
          <p className="py-4">{event.description}</p>
          {/* Map embed should be here */}
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col bg-base-100 rounded-box m-2 p-2 border-success border-2">
              <p className="">Starts:</p>
              <p className="">{event.start}</p>
            </div>
            <div className="flex flex-col bg-base-100 rounded-box m-2 p-2 border-error border-2">
              <p className="">Ends:</p>
              <p className="">{event.end}</p>
            </div>
          </div>
        </div>
        <EventButtons
          E_name={event.name}
          phone={event.phone}
          email={event.email}
        />
      </div>
    </div>
  );
}
