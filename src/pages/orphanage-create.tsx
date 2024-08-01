import { useMemo, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { FiX, FiPlus } from "react-icons/fi";

import { Orphanage } from "../types";
import { LocationMarker, LocationMarkerProps, Sidebar } from "../components";
import { acceptedImageFormats, defaultCenter, defaultZoom } from "../constants";

const env = import.meta.env;

const formEmpty: Partial<Orphanage> = {
  name: "",
  description: "",
  instructions: "",
  open_on_weekends: true,
  opening_hours: "",
};

export default function CreateOrphanage() {
  const [position, setPosition] =
    useState<LocationMarkerProps["position"]>(null);

  const [images, setImages] = useState<File[]>([]);
  const [formValues, setFormValues] = useState<Partial<Orphanage>>(formEmpty);

  const handleFormInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const selectedImages = Array.from(event.target.files);
    const selectedAcceptableImages = selectedImages.filter((x) =>
      acceptedImageFormats.includes(x.type)
    );
    if (!selectedAcceptableImages.length) return;

    setImages((prev) => [...prev, ...selectedAcceptableImages]);
  };

  const onDeletePreviewImage = (file: File) => {
    return () => {
      setImages((prev) => prev.filter((x) => x.name !== file.name));
    };
  };

  const previewImages = useMemo(() => {
    return images.map((x) => ({
      file: x,
      url: URL.createObjectURL(x),
    }));
  }, [images]);

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 min-h-[100vh] bg-slate-100">
        <form className="orphanage-create-form" onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>Create Orphanage</legend>

            <div className="mb-10">
              <MapContainer
                zoom={defaultZoom}
                center={defaultCenter}
                style={{ width: "100%", height: 280 }}
                className={
                  "rounded-tl-2xl rounded-tr-2xl border-slate-200  border-solid border-l border-t border-r"
                }
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/256/{z}/{x}/{y}@2x?access_token=${env.VITE_MAPBOX_TOKEN}`}
                />
                <LocationMarker position={position} setPosition={setPosition} />
              </MapContainer>

              {position === null && (
                <p className="p-4 text-sm bg-slate-100 text-zinc-600	text-center rounded-bl-2xl rounded-br-2xl border-l border-b border-r">
                  Click on the map to add the exact location
                </p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleFormInput}
              />
            </div>

            <div className="form-field">
              <label htmlFor="description">
                Description<span>(500 character max)</span>
              </label>
              <textarea
                id="description"
                name="description"
                maxLength={500}
                value={formValues.description}
                onChange={handleFormInput}
              />
            </div>

            <div className="form-field">
              <label htmlFor="images">Pictures</label>

              <div className="images-preview-container">
                {previewImages.map((image, i) => {
                  return (
                    <div key={i} className="h-24 relative">
                      <div className="delete-preview-image">
                        <FiX
                          size={16}
                          color="red"
                          onClick={onDeletePreviewImage(image.file)}
                        />
                      </div>

                      <img
                        key={i}
                        src={image.url}
                        alt="Preview orphanage image"
                      />
                    </div>
                  );
                })}

                <label htmlFor="images" className="new-image">
                  <FiPlus size={24} className="text-slate-400" />
                </label>
              </div>

              <input
                multiple
                id="images"
                name="images"
                type="file"
                accept={acceptedImageFormats.join(", ")}
                onChange={handleSelectImage}
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visiting</legend>

            <div className="form-field">
              <label htmlFor="instructions">Instructions</label>
              <textarea
                id="instructions"
                name="instructions"
                value={formValues.instructions}
                onChange={handleFormInput}
              />
            </div>

            <div className="form-field">
              <label htmlFor="opening_hours">Opening Hours</label>
              <input
                id="opening_hours"
                name="opening_hours"
                value={formValues.opening_hours}
                onChange={handleFormInput}
              />
            </div>

            <div className="form-field">
              <label htmlFor="open_on_weekends">Open on weekends?</label>

              <div className="switch">
                <button
                  className={formValues.open_on_weekends ? "active" : ""}
                  onClick={() =>
                    setFormValues((p) => ({ ...p, open_on_weekends: true }))
                  }
                >
                  Yes
                </button>

                <button
                  className={formValues.open_on_weekends ? "" : "active"}
                  onClick={() =>
                    setFormValues((p) => ({ ...p, open_on_weekends: false }))
                  }
                >
                  No
                </button>
              </div>
            </div>
          </fieldset>

          <button className="orphanage-create-submit" type="submit">
            Confirm
          </button>
        </form>
      </main>
    </div>
  );
}
