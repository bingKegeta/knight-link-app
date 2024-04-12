import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { GoogleMap, Marker, useJsApiLoader, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";

export default function PlacesAutocomplete() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBuiX3L2SndSrb71JlU29Of8Zo_r6u3PpQ",
        libraries: ["places"]
    });

    if (!isLoaded) return <div>Loading...</div>;

    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
    const [selected, setSelected] = useState(null);
  
    return (
      <>
        <div className="places-container">
          <Places setSelected={setSelected} />
        </div>
  
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        >
          {selected && <Marker position={selected} />}
        </GoogleMap>
      </>
    );
  }

const Places = ({ setSelected } : any) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();


    const handleSelect = async (address : any) => {
        setValue(address, false);
        clearSuggestions();
    
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        console.log(lat, lng)
        setSelected({ lat, lng });
      };
    

    const renderSuggestions = () => (
        <ComboboxPopover>
            <ComboboxList>
                {data.map(({ place_id, structured_formatting: { main_text, secondary_text } }) => (
                    <ComboboxOption key={place_id} value={`${main_text} ${secondary_text}`} />
                ))}
            </ComboboxList>
        </ComboboxPopover>
    );

      
    const ref = useOnclickOutside(() => {
        // When the user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
      });
    
      return (
        <Combobox onSelect={handleSelect} className="w-full">
          <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            className="w-full" // DaisyUI input classes
            placeholder="Where are you going?"
          />
          {status === "OK" && (
            <ComboboxPopover className="shadow-lg z-10 bg-black">
              <ComboboxList className="list-none m-0 p-0">
                {data.map(({ place_id, description }) => (
                  <ComboboxOption
                    key={place_id}
                    value={description}
                    className="combobox-option p-2 hover:bg-base-200 cursor-pointer"
                  />
                ))}
              </ComboboxList>
            </ComboboxPopover>
          )}
        </Combobox>
      );
}
