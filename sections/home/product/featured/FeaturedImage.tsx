import Image from "next/image";
import { ProductItem } from "../productData";
interface Props {
  product: ProductItem;
}

export default function FeaturedImage({ product }: Props) {
  return (
    <div
      id="featured-image"
      className="
        relative
        flex
        items-center
        justify-center
        border-r
        border-white/10
        bg-[#111111]
        p-16
      "
    >
      <Image
        src={product.image}
        alt={product.title}
        width={900}
        height={1080}
        priority
        className="
          h-auto
          w-full
          max-w-[680px]
          object-contain
        "
      />
    </div>
  );
}