import { ProductsList } from "@/shared/types/product.types";
import "./product.scss";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { IoCart } from "react-icons/io5";
import { IoWarning } from "react-icons/io5";

interface IProductCard {
  product: ProductsList;
}

const ProductCard: React.FC<IProductCard> = ({ product }) => {
  return (
    <Box className={"product-card " + (product.status ? "" : "passive")}>
      <Box className="pc-img-wrapper">
        {!product.status && (<IoWarning className="product-not-found" />)}
        <Image
          fill
          src={product.productData.productMainImage!}
          alt={product?.productName ? product.productName : "product"}
          loading="lazy"
        ></Image>
        <Box className="product-content">
          <Link href={product.productSlug!} className="product-title">
            {product.productName}
          </Link>
          <Box className="product-stars">
            {[...Array(5)].map((_, i) => (
              <React.Fragment key={i}>
                <FaStar />
              </React.Fragment>
            ))}
            <Typography component="span">({product.productID})</Typography>
          </Box>
          <Button
            startIcon={<BsArrowRightCircleFill />}
            variant="contained"
            href={product.productSlug!}
          >
            GÖRÜNTÜLE
          </Button>
          <Button startIcon={<IoCart />} variant="contained">
            SEPETE EKLE
          </Button>
        </Box>
      </Box>
      <Typography component="p" className="product-detail">
        {product.status ? (
          `${product.salePrice} TL`
        ) : (
          <Typography component="span" sx={{ fontWeight: "300", fontSize: "12px" }}>
            Ürün bulunamadı
          </Typography>
        )}
      </Typography>
    </Box>
  );
};

export default ProductCard;
