import Banner from "./components/Banner";
import Services from "./components/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <div id="services">
        <Services />
      </div>
    </div>
  );
}
