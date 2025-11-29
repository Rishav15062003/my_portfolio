import { useState } from "react";
import { Portfolio } from "./components/Portfolio";
import { LoadingScreen } from "./components/portfolio/LoadingScreen";
import "./styles/globals.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      {!isLoading && <Portfolio />}
    </>
  );
}
