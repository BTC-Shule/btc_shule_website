import EventForm from "@/components/admin/EventForm";

export default async function EditEvent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <h1 className="text-3xl font-bold text-primary mb-8">Edit Event</h1>
      <EventForm id={id} />
    </>
  );
}
