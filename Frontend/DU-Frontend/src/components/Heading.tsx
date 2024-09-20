interface head {
    label: string
}

export function Heading({label}:head) {
    return <div className="font-bold text-4xl pt-6">
      {label}
    </div>
}