import GeolocationComponent from "@/components/GeolocationComponent";

export default function Home() {
  return (
    <section className="container mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-center py-3 text-blue-600">
          Homepage
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe eaque
          pariatur optio voluptatum veniam odio blanditiis aliquid totam rem id
          nam fugiat nobis, obcaecati excepturi atque quasi, velit reiciendis
          assumenda.
        </p>
      </div>
      <GeolocationComponent />
    </section>
  );
}
