import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import PurchaseModal from "../components/modals/PurchaseModal";
import PurchaseTable from "../components/tables/PurchaseTable";

const Purchases = () => {
  const { getProPurcFirBrands } = useStockCall();

  const [open, setOpen] = useState(false);

  const [info, setInfo] = useState({
    brand_id: "",
    firm_id: "",
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
    getProPurcFirBrands();
  }, []); // eslint-disable-line

  return (
    <div>
      <Typography data-test='purchaseHeader' variant="h4" color="error" mb={3}>
        Purchases
      </Typography>

      <Button data-test='purchaseBtn' variant="contained" onClick={handleOpen}>
        New Purchase
      </Button>

      <PurchaseModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <PurchaseTable setInfo={setInfo} setOpen={setOpen} />
    </div>
  );
};

export default Purchases;
