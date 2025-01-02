import Spinner from "@/ui/Spinner"

function loading() {
  return (
    <div className="grid place-items-center gap-x-4">
        <span className="text-lg text-secondary-500">درحال بارگزاری پست‌ها</span>
        <Spinner />
    </div>
  )
}

export default loading
