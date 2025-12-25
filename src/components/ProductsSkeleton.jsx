const ProductCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-lg rounded-2xl">
      
      {/* Image Skeleton */}
      <div className="skeleton h-56 w-full rounded-t-2xl"></div>

      {/* Body Skeleton */}
      <div className="card-body space-y-3">
        <div className="skeleton h-4 w-3/4"></div>
        <div className="skeleton h-4 w-1/2"></div>

        <div className="flex gap-2">
          <div className="skeleton h-4 w-10"></div>
          <div className="skeleton h-4 w-20"></div>
        </div>

        <div className="skeleton h-5 w-24"></div>

        <div className="skeleton h-10 w-full"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
