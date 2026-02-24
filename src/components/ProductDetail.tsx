import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import { products } from "@/data/products";

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
  onSelectRelated: (product: Product) => void;
}

const ProductDetail = ({ product, onClose, onSelectRelated }: ProductDetailProps) => {
  if (!product) return null;

  const related = product.relatedIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
          />

          {/* Slide-over panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-lg glass-strong overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-muted-foreground hover:text-foreground z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image */}
            <div className="aspect-video w-full overflow-hidden bg-muted/20">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 space-y-6">
              {/* Header */}
              <div>
                {product.badge && (
                  <span
                    className={`${
                      product.badge === "Best Seller" ? "badge-bestseller" : "badge-new"
                    } mb-2 inline-block`}
                  >
                    {product.badge}
                  </span>
                )}
                <h2 className="text-2xl font-bold text-foreground">{product.name}</h2>
                <p className="text-sm font-mono text-primary/80 uppercase tracking-wider mt-1">
                  {product.category}
                </p>
                <p className="text-3xl font-black text-primary mt-3 font-mono">
                  Rs. {product.price.toLocaleString()}
                </p>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-2">Description</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Specs Table */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-3">
                  Technical Specifications
                </h3>
                <div className="rounded-lg border border-border/50 overflow-hidden">
                  {product.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={`flex justify-between items-center px-4 py-2.5 text-sm ${
                        i % 2 === 0 ? "bg-muted/20" : "bg-transparent"
                      }`}
                    >
                      <span className="text-muted-foreground font-mono text-xs">
                        {spec.label}
                      </span>
                      <span className="text-foreground font-medium text-xs">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Datasheet */}
              {product.datasheetUrl && (
                <a
                  href={product.datasheetUrl}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Datasheet
                </a>
              )}

              {/* Related Products */}
              {related.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-3">
                    Related Products
                  </h3>
                  <div className="space-y-2">
                    {related.map((rel) => (
                      <button
                        key={rel.id}
                        onClick={() => onSelectRelated(rel)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/40 border border-border/30 transition-all group/rel"
                      >
                        <img
                          src={rel.image}
                          alt={rel.name}
                          className="w-12 h-12 rounded-md object-cover"
                        />
                        <div className="text-left flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {rel.name}
                          </p>
                          <p className="text-xs text-muted-foreground font-mono">
                            Rs. {rel.price.toLocaleString()}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover/rel:text-primary transition-colors shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductDetail;
