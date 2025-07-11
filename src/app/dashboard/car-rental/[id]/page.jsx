import CarForm from "@/app/ui/dashboard/rentalcardform";


export default async function EditCarPage({ params }) {

  return <CarForm carId={params?.id} />;
  
}
