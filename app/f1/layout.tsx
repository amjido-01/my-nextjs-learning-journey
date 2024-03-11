export default function FLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        <div className="border-2 border-blue-400 py-4">header</div>
        {children}
        <div className="border-2 border-blue-400 py-4 absolute w-full left-0 bottom-0 bg-gray-500">footer</div>
        </section>
  }