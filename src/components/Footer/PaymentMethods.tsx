import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const PaymentMethods = () => {
  return (
    <Box className="pm-logos">
      <Image
        src={"https://assets.hyperteknoloji.com/images/payment/logos/visa.svg"}
        alt="visa"
        width={56}
        height={32}
        loading="lazy"
      />
      <Image
        src={
          "https://assets.hyperteknoloji.com/images/payment/logos/mastercard.svg"
        }
        alt="mastercard"
        width={56}
        height={32}
        loading="lazy"
      />
      <Image
        src={"https://assets.hyperteknoloji.com/images/payment/logos/troy.png"}
        alt="troy"
        width={56}
        height={26}
        loading="lazy"
      />
      <Image
        src={
          "https://assets.hyperteknoloji.com/images/payment/logos/papara.jpg"
        }
        alt="papara"
        width={56}
        height={22}
        loading="lazy"
      />
      <Image
        src={
          "https://assets.hyperteknoloji.com/images/payment/logos/ininal.png"
        }
        alt="ininal"
        width={56}
        height={26}
        loading="lazy"
      />
    </Box>
  );
};

export default PaymentMethods;
