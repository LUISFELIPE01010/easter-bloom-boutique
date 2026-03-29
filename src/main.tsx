import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Preload first product images so they're ready before scroll
import chocoCrunchKit from "@/assets/choco-crunch-kit.png";
import saltedBlissKit from "@/assets/salted-bliss-kit.png";
[chocoCrunchKit, saltedBlissKit].forEach((src) => {
  const img = new Image();
  img.src = src;
});

createRoot(document.getElementById("root")!).render(<App />);
