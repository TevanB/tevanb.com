import type { Metadata } from 'next';
import dynamic from "next/dynamic";

// import { Document, Page } from 'react-pdf';
export const metadata: Metadata = {
  title: 'Resume',
  description:
    "My current resume!",
};

export default function UsesPage() {
  return (
    <section> 
      <img src="./resume.png" alt="resume" className="w-full" />
    </section>
  );
}
