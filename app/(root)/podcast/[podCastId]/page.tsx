export default function PodCastDetails({ params }: { params: { podCastId: string } }) {
  return <p className="text-white-1">PodCastDetails id: {params.podCastId}</p>;
}
