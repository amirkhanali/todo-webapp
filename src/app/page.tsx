import { Suspense } from "react";

export default function Home() {
  return <Suspense fallback={<div>Loading Todos...</div>}></Suspense>;
}
