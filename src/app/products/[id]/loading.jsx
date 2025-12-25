const ProductDetailsSkeleton = () => {
  return (
    <div className="container mx-auto px-4 py-10 animate-pulse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Image Section */}
        <div className="bg-base-100 rounded-2xl shadow-lg p-4">
          <div className="skeleton w-full h-[420px] rounded-xl"></div>
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          {/* Title */}
          <div className="skeleton h-7 w-3/4"></div>

          {/* Rating */}
          <div className="flex gap-3">
            <div className="skeleton h-4 w-10"></div>
            <div className="skeleton h-4 w-16"></div>
            <div className="skeleton h-4 w-24"></div>
          </div>

          {/* Price */}
          <div className="flex gap-3 items-center">
            <div className="skeleton h-9 w-32"></div>
            <div className="skeleton h-6 w-20"></div>
            <div className="skeleton h-6 w-14"></div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <div className="skeleton h-10 w-36 rounded-md"></div>
            <div className="skeleton h-10 w-28 rounded-md"></div>
          </div>

          {/* Info Points */}
          <div className="space-y-2 mt-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex gap-2 items-center">
                <div className="skeleton h-4 w-4 rounded-full"></div>
                <div className="skeleton h-4 w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 bg-base-100 shadow-md rounded-2xl p-6 space-y-3">
        <div className="skeleton h-6 w-52"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-11/12"></div>
        <div className="skeleton h-4 w-10/12"></div>
      </div>

      {/* Q&A */}
      <div className="mt-10 bg-base-100 shadow-md rounded-2xl p-6 space-y-3">
        <div className="skeleton h-6 w-44"></div>
        {[1, 2].map((i) => (
          <div
            key={i}
            className="skeleton h-14 w-full rounded-lg"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
