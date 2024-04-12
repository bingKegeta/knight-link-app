import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import { GoogleMap, Marker, useJsApiLoader, useLoadScript, Libraries } from "@react-google-maps/api";
import * as Ariakit from "@ariakit/react";
import { SetStateAction, useMemo, useState } from "react";
import "../globals.css";
import { set } from "react-hook-form";

interface LocationInputs {
  address: string;
  coordinates: Coordinates;
}
interface Coordinates {
  latitude: string;
  longitude: string;
}

interface PlacesProps {
  setLocationAttributes : React.Dispatch<SetStateAction<LocationInputs | undefined>>
}

const libraries : Libraries = ['places']

export default function PlacesAutocomplete(props: PlacesProps) {
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBuiX3L2SndSrb71JlU29Of8Zo_r6u3PpQ",
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map {...props} />;
}

function Map(props: any) {
    const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
    const [selected, setSelected] = useState(null);

    return (
      <>
        <div className="places-container">
          <Places setSelected={setSelected} {...props}/>
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

const Places = ({ setSelected, setLocationAttributes } : any) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();


    const handleSelect = async (address : any) => {
        setValue(address, false);
        console.log(value)
        clearSuggestions();
      
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        
        setSelected({ lat, lng });

        const coor: Coordinates = {
          latitude: lat.toString(),
          longitude: lng.toString(),
        }

        const finalLoc : LocationInputs = {
          address: address,
          coordinates: coor
        }

        console.log(finalLoc)
        setLocationAttributes(finalLoc)
    };
    
    return (
      <Ariakit.ComboboxProvider setValue={setValue}>
          <Ariakit.Combobox placeholder="Select Location" value={value} onChange={(e) => setValue(e.target.value)}/>
            {status === "OK" && (
            <Ariakit.ComboboxPopover gutter={4} sameWidth className="popover">
                  {data.map(({ place_id, description }) => (
                    <Ariakit.ComboboxItem
                      key={place_id}
                      value={description}
                      className="combobox-item"
                      onClick={() => { handleSelect(description);}}
                    />
              ))}
          </Ariakit.ComboboxPopover>
        )}
      </Ariakit.ComboboxProvider>
    );
}
