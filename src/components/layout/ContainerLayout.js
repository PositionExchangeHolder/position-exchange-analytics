export default function ContainerLayout({ children }) {
  return (
    <div className="relative w-full ">
      <div className="flex justify-center">
        <div className="w-full max-w-screen-xl">{children}</div>
      </div>
    </div>
  )
}
