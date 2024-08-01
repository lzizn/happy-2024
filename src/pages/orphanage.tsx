import { useParams } from "react-router-dom";

export default function OrphanageDetails() {
  const { orphanageId } = useParams();

  return (
    <div>
      <h1>OrphanageDetails: {orphanageId}</h1>
    </div>
  );
}
