import { motion } from "framer-motion";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
  onClick: (product: Product) => void;
}

const ProductCard = ({ product, index, onClick }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={() => onClick(product)}
      className="glass card-lift rounded-xl overflow-hidden cursor-pointer group"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted/30">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 ${
              product.badge === "Best Seller" ? "badge-bestseller" : "badge-new"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <span className="text-xs font-mono text-primary/80 uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="text-sm font-semibold text-foreground mt-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
          {product.shortDesc}
        </p>
        <p className="text-base font-bold text-primary mt-2 font-mono">
          Rs. {product.price.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
