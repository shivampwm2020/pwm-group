type BulletProps = {
  number: number;
  title: string;
  description: string;
};

export default function StyledBullet({
  number,
  title,
  description,
}: BulletProps) {
  return (
    <div className="flex items-start gap-4 p-6 bg-blue-100/60 rounded-2xl shadow-md border border-blue-200 mb-6">
      <div className="flex-shrink-0">
        <div className="h-10 w-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-lg shadow-inner">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-blue-700 font-semibold text-lg">{title}</h3>
        <p className="text-gray-800 text-sm mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
