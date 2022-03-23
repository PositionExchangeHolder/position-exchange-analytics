export default function ContainerLayout({ children }) {
  return (
    // <div className="min-h-screen bg-primary px-44 pb-20 flex ">{children}</div>
    <div className="min-h-screen bg-primary px-44 pb-20 flex  justify-center">
      <div className="max-w-screen-xl"> {children}</div>
    </div>
  )
}
