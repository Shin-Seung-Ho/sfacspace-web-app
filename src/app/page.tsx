import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative">
        <Image
          src="/main-circle.svg"
          width={700}
          height={700}
          alt="main-circle"
        />
      </div>
    </main>
  );
}
