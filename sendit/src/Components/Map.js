import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getCityCoordinates } from "./helpers";

const Map = ({ user }) => {
  const [destinationCoordinates, setDestinationCoordinates] = useState([]);

  useEffect(() => {
    const coordinates = user.orders.map((order) => {
      if (order.destination) {
        return {
          orderNumber: order.order_number,
          coordinates: getCityCoordinates(order.destination),
        };
      }
      return null;
    });

    setDestinationCoordinates(coordinates.filter(Boolean));
  }, [user.orders]);

  return (
    <MapContainer
      center={[1.2921, 36.8219]}
      zoom={5}
      style={{ height: "400px", width: "100%" }}
      className="rounded-md shadow-md my-8"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {destinationCoordinates.map((destination) => (
        <React.Fragment key={destination.orderNumber}>
          <Marker position={destination.coordinates}>
            <Popup>{`Order ${destination.orderNumber} destination`}</Popup>
          </Marker>
        </React.Fragment>
      ))}

      {user.orders.map((order) => (
        <React.Fragment key={order.order_number}>
          {order.destination && order.current_location && (
            <Polyline
              positions={[
                getCityCoordinates(order.current_location),
                ...destinationCoordinates
                  .filter((d) => d.orderNumber === order.order_number)
                  .map((d) => d.coordinates),
              ]}
              color="blue"
              weight={4}
              arrowheads="true"
            />
          )}
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export default Map;