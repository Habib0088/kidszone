import { getSingleProducts } from "@/action/server/product";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";

const ProductDetails =async ({ params }) => {
  const { id } = await params;
  console.log(id);
  
  // const product=await getSingleProducts(id)
  // console.log(product);
  const product=await getSingleProducts(id)
  const {
    title,
  
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;
  console.log(product);
  

  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Section */}
        <div className="bg-base-100 rounded-2xl shadow-lg p-4">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full h-[420px] object-cover rounded-xl"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          

          {/* Rating */}
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="font-medium">{ratings}</span>
            <span className="text-gray-400">({reviews} reviews)</span>
            <span className="badge badge-outline">Sold {sold}</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-primary">
              ৳{discountedPrice}
            </span>
            {discount > 0 && (
              <span className="line-through text-lg text-gray-400">
                ৳{price}
              </span>
            )}
            {discount > 0 && (
              <span className="badge badge-error text-white">-{discount}%</span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="btn btn-primary gap-2">
              <FaShoppingCart />
              Add to Cart
            </button>
            <button className="btn btn-outline">Buy Now</button>
          </div>

          {/* Info Points */}
          <ul className="mt-6 space-y-2">
            {info.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-primary">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Description */}
      <div className="mt-12 bg-base-100 shadow-md rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Product Description</h3>
        <p className="whitespace-pre-line leading-relaxed text-gray-700">
          {description}
        </p>
      </div>

      {/* Q&A Section */}
      <div className="mt-10 bg-base-100 shadow-md rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-4">Questions & Answers</h3>

        <div className="space-y-3">
          {qna.map((item, idx) => (
            <div key={idx} className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" />
              <div className="collapse-title font-medium">{item.question}</div>
              <div className="collapse-content">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
