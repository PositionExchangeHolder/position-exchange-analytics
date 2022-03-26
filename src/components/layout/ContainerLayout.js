export default function ContainerLayout({ children }) {
  return (
    <div className="relative w-full ">
      <div className="flex justify-center">
        <div className="max-w-screen-xl w-full">{children}</div>
      </div>
    </div>
  )
}
