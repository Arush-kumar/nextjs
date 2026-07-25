type CardProps = {
  title: string,
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-amber-600 w-40 h-30 rounded-2xl m-4 p-4">
      <h1 className="text-2xl">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  )
}

