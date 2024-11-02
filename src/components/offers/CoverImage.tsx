import Image from 'next/image'

export default function Component() {
  return (
    <div className="w-full h-[196px] bg-gray-200 relative overflow-hidden pt-12">
      <Image
        src="/placeholder.svg?height=396&width=1584"
        alt="Cover image"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  )
}