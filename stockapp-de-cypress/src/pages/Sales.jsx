import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

import useStockCall from "../hooks/useStockCall";


import SaleModal from "../components/modals/SaleModal";
import SaleTable from "../components/tables/SaleTable";


const Sales = () => {
  const { getProSalBrands } = useStockCall();
  
  const [open, setOpen] = useState(false);

  const [info, setInfo] = useState({
    brand_id: "",
    product_id: "",
    quantity: "",
    price: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      brand_id: "",
      product_id: "",
      quantity: "",
      price: "",
    });
  };

  

  useEffect(() => {
    getProSalBrands();
  }, []); // eslint-disable-line

  return (
    <div>
      <Typography data-test='salesHeader' variant="h4" color="error" mb={3}>
        Sales
      </Typography>

      <Button data-test='salesBtn' variant="contained" onClick={handleOpen}>
        New Sale
      </Button>

      <SaleModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <SaleTable setInfo={setInfo} setOpen={setOpen} />
      
    </div>
  );
};

export default Sales;
