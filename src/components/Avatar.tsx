interface AvatarProps {
  initials: string;
  index: number;
}

export default function Avatar({ initials, index }: AvatarProps) {
  const colors = [
    'bg-purple-600', // First avatar
    'bg-blue-700',   // Second avatar
    'bg-orange-900',   // Third avatar
    'bg-green-600',  // Fourth avatar
  ];

  return (
    <div className={`w-10 h-10 rounded-full border border-white/20 ${colors[index]} flex items-center justify-center text-white font-semibold text-sm`}>
      {initials}
    </div>
  )
}